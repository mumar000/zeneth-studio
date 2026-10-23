import { useSyncExternalStore } from "react";
import { GRID_H, GRID_LAT0, GRID_STEP, GRID_W, WORLD_GRID } from "./world-grid";

// `code` matches the digit used for the country in WORLD_GRID.
export const COUNTRIES = [
  { code: 2, name: "USA", zone: "ET", tz: "America/New_York", lat: 39, lon: -98, side: "left" },
  { code: 3, name: "UK", zone: "GMT", tz: "Europe/London", lat: 53.5, lon: -2, side: "top" },
  { code: 4, name: "UAE", zone: "GST", tz: "Asia/Dubai", lat: 24, lon: 54, side: "right" },
  { code: 5, name: "Australia", zone: "AET", tz: "Australia/Sydney", lat: -25, lon: 134, side: "left" },
];

// Position of a lat/lon on the flat dot map, as a percentage of its width/height.
export function mapPosition({ lat, lon }) {
  return {
    x: ((lon + 180) / (GRID_W * GRID_STEP)) * 100,
    y: ((GRID_LAT0 - lat + GRID_STEP / 2) / (GRID_H * GRID_STEP)) * 100,
  };
}

let dots;

// Every land cell of the grid. `sparse` thins out the high latitudes so the
// globe doesn't crowd near the poles.
export function landDots() {
  if (dots) return dots;
  dots = [];
  for (let r = 0; r < GRID_H; r++) {
    const lat = GRID_LAT0 - r * GRID_STEP;
    const every = Math.max(1, Math.round(1 / Math.cos((lat * Math.PI) / 180)));
    for (let c = 0; c < GRID_W; c++) {
      const kind = WORLD_GRID.charCodeAt(r * GRID_W + c) - 48;
      if (kind > 0) {
        dots.push({ r, c, lat, lon: -179 + c * GRID_STEP, kind, sparse: c % every === 0 });
      }
    }
  }
  return dots;
}

/* ---------- time ---------- */

const formatters = new Map();

function formatter(tz) {
  if (!formatters.has(tz)) {
    formatters.set(
      tz,
      new Intl.DateTimeFormat("en-US", { timeZone: tz, hour: "numeric", minute: "2-digit", hour12: true }),
    );
  }
  return formatters.get(tz);
}

export function timeIn(tz, minute) {
  if (minute == null) return "--:--";
  return formatter(tz).format(new Date(minute * 60000)).replace("AM", "am").replace("PM", "pm");
}

export function isDaytimeIn(tz, minute) {
  if (minute == null) return true;
  const parts = formatter(tz).formatToParts(new Date(minute * 60000));
  const hour = Number(parts.find((p) => p.type === "hour").value) % 12;
  const pm = parts.find((p) => p.type === "dayPeriod").value === "PM";
  const h24 = hour + (pm ? 12 : 0);
  return h24 >= 6 && h24 < 18;
}

// UK flips between GMT and BST.
export function zoneLabel(country, minute) {
  if (country.tz !== "Europe/London" || minute == null) return country.zone;
  try {
    return new Intl.DateTimeFormat("en-GB", { timeZone: country.tz, timeZoneName: "short" })
      .formatToParts(new Date(minute * 60000))
      .find((p) => p.type === "timeZoneName").value;
  } catch {
    return country.zone;
  }
}

// Point on Earth where the sun is directly overhead (good to about 1°).
export function sunPosition(minute) {
  const now = new Date(minute * 60000);
  const day = (now - Date.UTC(now.getUTCFullYear(), 0, 0)) / 864e5;
  const lat = -23.44 * Math.cos(((2 * Math.PI) / 365) * (day + 10));
  const lon = (12 - (now.getUTCHours() + now.getUTCMinutes() / 60)) * 15;
  return { lat, lon };
}

export function isDaylight(lat, lon, sun) {
  const d = Math.PI / 180;
  return (
    Math.sin(lat * d) * Math.sin(sun.lat * d) +
      Math.cos(lat * d) * Math.cos(sun.lat * d) * Math.cos((lon - sun.lon) * d) >
    -0.02
  );
}

/* ---------- shared minute clock ---------- */

const listeners = new Set();
let timer;

function scheduleTick() {
  timer = setTimeout(() => {
    listeners.forEach((listener) => listener());
    scheduleTick();
  }, 60000 - (Date.now() % 60000) + 50);
}

function subscribeMinute(listener) {
  listeners.add(listener);
  if (listeners.size === 1) scheduleTick();
  return () => {
    listeners.delete(listener);
    if (!listeners.size) clearTimeout(timer);
  };
}

const currentMinute = () => Math.floor(Date.now() / 60000);
const serverValue = () => null;

// Minutes since epoch, updated on the minute. `null` during SSR and hydration.
export function useMinute() {
  return useSyncExternalStore(subscribeMinute, currentMinute, serverValue);
}

const noopSubscribe = () => () => {};
let localZone;
const getLocalZone = () => {
  if (localZone === undefined) {
    try {
      localZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    } catch {
      localZone = "";
    }
  }
  return localZone;
};

export function useLocalTimeZone() {
  return useSyncExternalStore(noopSubscribe, getLocalZone, serverValue);
}

/* ---------- device ---------- */

export function isLowEndDevice() {
  const memory = navigator.deviceMemory;
  const cores = navigator.hardwareConcurrency;
  return (memory && memory <= 4) || (cores && cores <= 4);
}

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
