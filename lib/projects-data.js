// Mock content. Images reuse existing assets in /public.
// Each project has: slug, title, tagline, category, tags, accentColor,
// description, liveUrl, hero { image, logoText }, media[] blocks, closingQuote.
//
// Media block types:
//   { type: "wide",    image, caption? }
//   { type: "pair",    left:{image}, right:{image, bg?} }
//   { type: "wordmark", image, text }       // huge wordmark over photo
//   { type: "quote",   text, author, role } // boarding-pass style card
//   { type: "system",  icons:[...], image } // dark icon grid + product photo
//   { type: "trio",    images:[a,b,c] }

export const projects = [
  {
    slug: "spreadshop",
    title: "Spreadshop",
    tagline:
      "A creator storefront redesigned around discoverability, trust, and conversion.",
    category: "Digital Experience",
    cursorText: "View Project",
    tags: ["Product Design", "User Research", "Web Design", "E-commerce"],
    accent: "#FF3D00",
    bg: "#A34225",
    description:
      "A ground-up redesign of Spreadshop's creator storefront experience, focused on removing friction across discovery, evaluation, and checkout.",
    liveUrl: "",
    image: "/works/spreadshop/hero.png",
    hero: {
      image: "/works/spreadshop/hero.png",
      logoText: "spreadshop",
    },
    media: [],
    closingQuote:
      "The most effective redesigns subtract everything that stands between the user and their intent.",
  },
  {
    slug: "mogulbay",
    title: "Mogulbay",
    tagline: "A coastal hospitality brand built around quiet luxury.",
    category: "Brand & Visual Identity",
    cursorText: "View Project",
    tags: [
      "Full Stack Development",
      "Web Design",
      "Brand Identity",
      "SaaS",
    ],
    accent: "#00001C",
    bg: "#00001C",
    description:
      "Mogulbay came to us with a stretch of coastline and a feeling. We translated it into a complete identity system, including the wordmark, palette, photography direction, and web, built to age like the timber and salt the property is made of. Every surface speaks softly, and the brand never raises its voice.",
    liveUrl: "#",
    image: "/mogulbay/1.webp",
    hero: { image: "/mogulbay/25.webp", logoText: "mogulbay" },
    media: [
      {
        type: "pair",
        left: { image: "/mogulbay/14.webp" },
        right: { image: "/mogulbay/15.webp", bg: "#C8A47E" },
      },
      {
        type: "trio",
        images: ["/mogulbay/1.webp", "/mogulbay/13.webp", "/mogulbay/1.webp"],
      },
      // {
      //   type: "quote",
      //   text: "They listened to the place before they drew a single line. The brand feels like it has always been here.",
      //   author: "Rohan Mehta",
      //   role: "Founder, Mogulbay",
      //   code: "MGB0042",
      //   date: "18 APR 2026",
      // },
      {
        type: "wordmark",
        image: "/mogulbay/24.webp",
        text: "mogulbay",
      },
      // {
      //   type: "pair",
      //   left: { image: "/mogulbay/8.webp" },
      //   right: { image: "/mogulbay/9.webp", bg: "#16201E" },
      // },
      {
        type: "trio",
        images: ["/mogulbay/16.webp", "/mogulbay/21.webp", "/mogulbay/25.webp"],
      },
      // {
      //   type: "pair",
      //   left: { image: "/mogulbay/13.webp" },
      //   right: { image: "/mogulbay/14.webp", bg: "#C8A47E" },
      // },
      {
        type: "wordmark",
        image: "/mogulbay/4.webp",
        text: "mogulbay",
      },
      // {
      //   type: "pair",
      //   left: { image: "/mogulbay/16.webp" },
      //   right: { image: "/mogulbay/17.webp", bg: "#3C4A45" },
      // },
      // {
      //   type: "trio",
      //   images: ["/mogulbay/18.webp", "/mogulbay/19.webp", "/mogulbay/20.webp"],
      // },
      {
        type: "wordmark",
        image: "/mogulbay/23.webp",
        text: "mogulbay",
      },
      // {
      //   type: "pair",
      //   left: { image: "/mogulbay/22.webp" },
      //   right: { image: "/mogulbay/23.webp", bg: "#C8A47E" },
      // },
      {
        type: "wordmark",
        image: "/mogulbay/20.webp",
        text: "mogulbay",
      },
    ],
    closingQuote: "What does a place sound like, written down?",
  },

  {
    slug: "lets-grub",
    title: "Let's Grub",
    tagline: "A social dining identity made to bring people to the table.",
    category: "Brand & Visual Identity",
    cursorText: "View Project",
    tags: ["Brand Identity", "Art Direction", "Digital Product"],
    accent: "#18B8E8",
    bg: "#082C3A",
    description:
      "Let's Grub turns finding food into a shared experience. We shaped a warm, energetic identity and digital visual system built around discovery, appetite, and the simple joy of eating together.",
    liveUrl: "#",
    image: "/let-grub/title.webp",
    hero: {
      image: "/let-grub/title.webp",
      video: "/let-grub/letsgrub.mp4",
      logoText: "let's grub",
    },
    media: [
      {
        type: "pair",
        left: { image: "/let-grub/frame-1948758995.webp" },
        right: {
          image: "/let-grub/frame-1948758996.webp",
          bg: "#18B8E8",
        },
      },
      {
        type: "trio",
        images: [
          "/let-grub/frame-1948758997.webp",
          "/let-grub/frame-1948758999.webp",
          "/let-grub/frame-1948759000.webp",
        ],
      },
    ],
    closingQuote: "Good food is better when discovery feels shared.",
  },

  {
    slug: "goldbug",
    title: "GoldBug",
    tagline: "Identity for a heritage jewelry house, reimagined.",
    category: "Brand & Visual Identity",
    cursorText: "View Project",
    tags: ["Art Direction", "Branding", "Packaging"],
    accent: "#E0A645",
    bg: "#0E0E10",
    description:
      "We partnered with GoldBug to craft a new identity system that honours sixty years of craftsmanship while opening the brand to a new generation of collectors. The result is a quiet, deliberate language built around the weight of gold and the precision of typography.",
    liveUrl: "#",
    image: "/services1.webp",
    hero: { image: "/services1.webp", logoText: "goldbug" },
    media: [
      {
        type: "pair",
        left: { image: "/services1.webp" },
        right: { image: "/services2.webp", bg: "#E0A645" },
      },
      {
        type: "quote",
        text: "They moved with the patience our craft deserves. Every glyph, every margin felt considered.",
        author: "Adele Whitford",
        role: "Creative Director, GoldBug",
        code: "GLD8472",
        date: "12 MAR 2026",
      },
      {
        type: "trio",
        images: ["/services3.webp", "/services1.webp", "/services2.webp"],
      },
      {
        type: "wordmark",
        image: "/services2.webp",
        text: "goldbug",
      },
      {
        type: "system",
        image: "/services1.webp",
        icons: ["↗", "◇", "★", "✦", "→", "←", "↓", "↑", "✕", "✓", "◐", "◑"],
      },
    ],
    closingQuote:
      "What does sixty years of craft look like, distilled into a single mark?",
  },

  {
    slug: "feroce",
    title: "Feroce",
    tagline: "A fearless identity built to move with speed and precision.",
    category: "Brand & Visual Identity",
    cursorText: "View Project",
    tags: ["Brand Identity", "Art Direction", "Motion"],
    accent: "#FF5A2E",
    bg: "#101820",
    description:
      "Feroce needed a visual identity with the same confidence and momentum as the brand itself. We created a bold system spanning typography, color, imagery, and motion, designed to feel unmistakable at every touchpoint.",
    liveUrl: "#",
    image: "/feroce/branding-feroce-page-0001-1.webp",
    hero: {
      image: "/feroce/branding-feroce-page-0001-1.webp",
      video: "/feroce/feroce-video.mp4",
      logoText: "feroce",
    },
    media: [
      {
        type: "pair",
        left: { image: "/feroce/branding-feroce-page-0009-1.webp" },
        right: {
          image: "/feroce/branding-feroce-page-0010-1.webp",
          bg: "#FF5A2E",
        },
      },
      {
        type: "trio",
        images: [
          "/feroce/branding-feroce-page-0011-1.webp",
          "/feroce/branding-feroce-page-0012-1.webp",
          "/feroce/branding-feroce-page-0013-1.webp",
        ],
      },
      {
        type: "pair",
        left: { image: "/feroce/branding-feroce-page-0014-1.webp" },
        right: {
          image: "/feroce/branding-feroce-page-0015-1.webp",
          bg: "#101820",
        },
      },
      {
        type: "wordmark",
        image: "/feroce/branding-feroce-page-0016-1.webp",
        text: "feroce",
      },
    ],
    closingQuote: "How do you make a brand feel fast before it even moves?",
  },

  {
    slug: "voyager-supplements",
    title: "Voyager Supplements",
    tagline: "Clean performance, made impossible to overlook.",
    category: "Brand & Visual Identity",
    cursorText: "View Project",
    tags: ["Brand Identity", "E-commerce", "Campaign Design", "Content"],
    accent: "#47C5DF",
    bg: "#07151D",
    description:
      "Voyager Supplements pairs clinically dosed pre-workout with a direct, no-filler point of view. The case study brings its product system, dual-flavor palette, performance messaging, and retail presence into one focused digital story.",
    liveUrl: "https://voyagersupplements.com/",
    image: "/voyager/image_5.webp",
    hero: {
      image: "/voyager/image_5.webp",
      logoText: "voyager supplements",
    },
    media: [
      {
        type: "pair",
        left: {
          image:
            "/voyager/Product_03ec16e7-2ba4-422e-a31a-125b0ef11a90.webp",
        },
        right: {
          image: "/voyager/amazon_product_pics_1.webp",
          bg: "#47C5DF",
        },
      },
      {
        type: "trio",
        images: [
          "/voyager/amazon_product_pics_3.webp",
          "/voyager/amazon_product_pics_4.webp",
          "/voyager/amazon_product_pics_2.webp",
        ],
      },
      {
        type: "video",
        src: "/testimonial-1-web.mp4",
        poster: "/voyager/image_5.webp",
        eyebrow: "Client perspective",
        title: "The story behind the work.",
      },
      {
        type: "pair",
        left: { image: "/voyager/image_4_2.webp" },
        right: { image: "/voyager/image_5.webp", bg: "#0B1D25" },
      },
      {
        type: "trio",
        images: [
          "/voyager/amazon_product_pics.webp",
          "/voyager/amazon_product_pics_5.webp",
          "/voyager/amazon_product_pics_1.webp",
        ],
      },
    ],
    closingQuote: "Clean energy. Clear identity. No unnecessary noise.",
  },

  {
    slug: "lido-honey",
    title: "Lido Honey",
    tagline: "Packaging that tastes like the place it came from.",
    category: "Package Design",
    cursorText: "See Details",
    tags: ["Packaging", "Illustration", "Print"],
    accent: "#F2B233",
    bg: "#FBF4E2",
    description:
      "A small Apulian apiary needed a system that could scale from farmers' market to specialty shelves without losing its voice. We built a flexible label architecture, a serif wordmark drawn from regional ceramics, and a colour story keyed to each harvest.",
    liveUrl: "#",
    image: "/services3.webp",
    hero: { image: "/services3.webp", logoText: "lido honey" },
    media: [
      {
        type: "pair",
        left: { image: "/services3.webp" },
        right: { image: "/services1.webp", bg: "#F2B233" },
      },
      {
        type: "quote",
        text: "We finally have a jar that tells the story we tell at the market. Buyers reach for it before they read it.",
        author: "Elena Marini",
        role: "Founder, Lido Honey",
        code: "LDO0117",
        date: "21 JUN 2025",
      },
      {
        type: "wordmark",
        image: "/services1.webp",
        text: "lido",
      },
      {
        type: "trio",
        images: ["/services2.webp", "/services3.webp", "/services1.webp"],
      },
    ],
    closingQuote:
      "How do you put a coastline on a label without ever drawing one?",
  },

  {
    slug: "vido-design",
    title: "Vido Design",
    tagline: "An identity sharp enough to walk into a boardroom.",
    category: "Brand & Visual Identity",
    cursorText: "Discover",
    tags: ["Branding", "Editorial", "Web Design"],
    accent: "#2D5BFF",
    bg: "#0B0F1E",
    description:
      "Vido needed a brand that could carry equal weight in pitch decks and product. We delivered a modular system of typography, motion, and voice that lets the team move fast across surfaces without ever looking improvised.",
    liveUrl: "#",
    image: "/services1.webp",
    hero: { image: "/services1.webp", logoText: "vido" },
    media: [
      {
        type: "pair",
        left: { image: "/services1.webp" },
        right: { image: "/services2.webp", bg: "#2D5BFF" },
      },
      {
        type: "quote",
        text: "The system makes our team look like a team. Every deck we ship feels intentional.",
        author: "Priya Anand",
        role: "VP Brand, Vido",
        code: "VDO9981",
        date: "08 FEB 2026",
      },
      {
        type: "trio",
        images: ["/services1.webp", "/services3.webp", "/services2.webp"],
      },
      {
        type: "wordmark",
        image: "/services2.webp",
        text: "vido",
      },
    ],
    closingQuote:
      "What does a confident brand sound like when nobody is in the room?",
  },

  {
    slug: "techstart",
    title: "TechStart",
    tagline: "From garage demo to investor-ready in nine weeks.",
    category: "Build & Execution",
    cursorText: "Learn More",
    tags: ["Product Strategy", "Design", "Engineering"],
    accent: "#7C3AED",
    bg: "#0F0A1F",
    description:
      "TechStart had a working prototype and a fundraise on the calendar. We compressed brand, marketing site, and onboarding into a single sprint, shipping a complete first impression in time to ride the round.",
    liveUrl: "#",
    image: "/services1.webp",
    hero: { image: "/services1.webp", logoText: "techstart" },
    media: [
      {
        type: "pair",
        left: { image: "/services1.webp" },
        right: { image: "/services3.webp", bg: "#7C3AED" },
      },
      {
        type: "quote",
        text: "We walked into the round with a brand that felt three years older than the company. That changed the conversation.",
        author: "Daniel Okafor",
        role: "CEO, TechStart",
        code: "TST4420",
        date: "15 JAN 2026",
      },
      {
        type: "wordmark",
        image: "/services3.webp",
        text: "techstart",
      },
      {
        type: "trio",
        images: ["/services1.webp", "/services2.webp", "/services3.webp"],
      },
    ],
    closingQuote: "How early is too early to look like you've already won?",
  },

  {
    slug: "digital-wave",
    title: "Digital Wave",
    tagline: "A product surface for software that thinks in motion.",
    category: "Web & Product Design",
    cursorText: "View Work",
    tags: ["Product Design", "UX", "Web"],
    accent: "#06B6D4",
    bg: "#062430",
    description:
      "Digital Wave's analytics suite kept growing faster than its UI could absorb. We redesigned the core surface around a single navigation principle and a motion grammar that makes complexity feel like clarity.",
    liveUrl: "#",
    image: "/services2.webp",
    hero: { image: "/services2.webp", logoText: "digital wave" },
    media: [
      {
        type: "pair",
        left: { image: "/services2.webp" },
        right: { image: "/services1.webp", bg: "#06B6D4" },
      },
      {
        type: "quote",
        text: "Support tickets on the dashboard dropped 60% the month after launch. The UI started doing the explaining.",
        author: "Hannah Kim",
        role: "Head of Product, Digital Wave",
        code: "DGW7711",
        date: "29 SEP 2025",
      },
      {
        type: "trio",
        images: ["/services3.webp", "/services1.webp", "/services2.webp"],
      },
      {
        type: "wordmark",
        image: "/services1.webp",
        text: "wave",
      },
    ],
    closingQuote:
      "When does an interface stop being a feature and start being the product?",
  },

  {
    slug: "aura-studio",
    title: "Aura Studio",
    tagline: "Creative direction for a film studio with a point of view.",
    category: "Creative Direction",
    cursorText: "Explore",
    tags: ["Creative Direction", "Editorial", "Film"],
    accent: "#D946EF",
    bg: "#1A0B20",
    description:
      "Aura needed a public-facing presence as considered as the work they put on screen. We built a single-page editorial site, a title sequence kit, and a voice that lets each project speak in its own register.",
    liveUrl: "#",
    image: "/services3.webp",
    hero: { image: "/services3.webp", logoText: "aura" },
    media: [
      {
        type: "pair",
        left: { image: "/services3.webp" },
        right: { image: "/services2.webp", bg: "#D946EF" },
      },
      {
        type: "quote",
        text: "Every commissioner who lands on the site books a call. The hit rate has never been like this.",
        author: "Sam Vasilieva",
        role: "Executive Producer, Aura",
        code: "AUR3098",
        date: "11 DEC 2025",
      },
      {
        type: "wordmark",
        image: "/services1.webp",
        text: "aura",
      },
      {
        type: "trio",
        images: ["/services2.webp", "/services3.webp", "/services1.webp"],
      },
    ],
    closingQuote:
      "What's the smallest amount of voice a studio needs before the work can take over?",
  },

  {
    slug: "velvet-co",
    title: "Velvet Co.",
    tagline: "Soft on the eye, sharp on the shelf.",
    category: "Visual Identity",
    cursorText: "Open",
    tags: ["Branding", "Packaging", "Retail"],
    accent: "#9333EA",
    bg: "#160B1F",
    description:
      "A boutique skincare line needed an identity that worked under spa lighting and Instagram exposure equally well. We landed on a palette and type system designed to feel hand-finished even when mass-produced.",
    liveUrl: "#",
    image: "/services1.webp",
    hero: { image: "/services1.webp", logoText: "velvet" },
    media: [
      {
        type: "pair",
        left: { image: "/services1.webp" },
        right: { image: "/services1.webp", bg: "#9333EA" },
      },
      {
        type: "quote",
        text: "Buyers tell us the unboxing is the marketing now. We barely advertise.",
        author: "Lara Constantin",
        role: "Founder, Velvet Co.",
        code: "VLT0042",
        date: "02 OCT 2025",
      },
      {
        type: "trio",
        images: ["/services1.webp", "/services2.webp", "/services3.webp"],
      },
      {
        type: "wordmark",
        image: "/services3.webp",
        text: "velvet",
      },
    ],
    closingQuote:
      "How do you make a luxury feel that survives being shipped in a box?",
  },

  {
    slug: "nova-labs",
    title: "Nova Labs",
    tagline: "UX strategy for an instrument scientists actually want to use.",
    category: "UI/UX Strategy",
    cursorText: "View Case",
    tags: ["UX Research", "Information Design", "Product"],
    accent: "#10B981",
    bg: "#06241B",
    description:
      "Nova Labs' lab-automation platform was technically world-class and emotionally exhausting. We re-architected the information hierarchy, simplified the modal stack, and gave researchers a calm surface for very loud data.",
    liveUrl: "#",
    image: "/services1.webp",
    hero: { image: "/services1.webp", logoText: "nova" },
    media: [
      {
        type: "pair",
        left: { image: "/services1.webp" },
        right: { image: "/services2.webp", bg: "#10B981" },
      },
      {
        type: "quote",
        text: "Onboarding used to take half a day with a human. Now it takes a coffee.",
        author: "Dr. Imani Patel",
        role: "Director of Platform, Nova Labs",
        code: "NVA8801",
        date: "19 MAY 2026",
      },
      {
        type: "wordmark",
        image: "/services2.webp",
        text: "nova",
      },
      {
        type: "trio",
        images: ["/services3.webp", "/services1.webp", "/services2.webp"],
      },
    ],
    closingQuote:
      "What's the difference between a powerful tool and one that respects your attention?",
  },

  {
    slug: "nymbor",
    title: "Nymbor",
    tagline: "Brand architecture for a holding company that builds quietly.",
    category: "Brand Architecture",
    cursorText: "Discover",
    tags: ["Brand Architecture", "Strategy", "Identity"],
    accent: "#F59E0B",
    bg: "#1A1207",
    description:
      "Nymbor needed a system that could hold seven sub-brands without ever announcing the parent louder than the work. We delivered a master identity, a naming convention, and a flexible visual rhythm shared across portfolio companies.",
    liveUrl: "#",
    image: "/services2.webp",
    hero: { image: "/services2.webp", logoText: "nymbor" },
    media: [
      {
        type: "pair",
        left: { image: "/services2.webp" },
        right: { image: "/services3.webp", bg: "#F59E0B" },
      },
      {
        type: "quote",
        text: "The portfolio finally feels like a family rather than a list of acquisitions.",
        author: "Jonas Ferreira",
        role: "Chair, Nymbor Holdings",
        code: "ZNT0001",
        date: "07 APR 2026",
      },
      {
        type: "trio",
        images: ["/services1.webp", "/services3.webp", "/services2.webp"],
      },
      {
        type: "wordmark",
        image: "/services1.webp",
        text: "nymbor",
      },
    ],
    closingQuote:
      "How loud should a parent brand be when its children are doing the talking?",
  },

  {
    slug: "nexus",
    title: "Nexus",
    tagline: "A digital experience for a network that lives on trust.",
    category: "Digital Experience",
    cursorText: "See More",
    tags: ["Digital Product", "Brand", "Motion"],
    accent: "#EF4444",
    bg: "#1A0808",
    description:
      "Nexus connects investors with founders before either side is ready to publish. We designed an experience that signals seriousness, protects discretion, and still leaves room for the warmth that makes the platform work.",
    liveUrl: "#",
    image: "/services3.webp",
    hero: { image: "/services3.webp", logoText: "nexus" },
    media: [
      {
        type: "pair",
        left: { image: "/services3.webp" },
        right: { image: "/services1.webp", bg: "#EF4444" },
      },
      {
        type: "quote",
        text: "Founders told us the product felt private in a way they hadn't felt online before. That was the whole brief.",
        author: "Amelia Foss",
        role: "Co-founder, Nexus",
        code: "NXS5512",
        date: "23 AUG 2025",
      },
      {
        type: "wordmark",
        image: "/services1.webp",
        text: "nexus",
      },
      {
        type: "trio",
        images: ["/services2.webp", "/services3.webp", "/services1.webp"],
      },
    ],
    closingQuote:
      "What does a product feel like when discretion is the feature?",
  },

  {
    slug: "oasis",
    title: "Oasis",
    tagline: "Commerce design for a brand that sells calm by the litre.",
    category: "E-commerce Design",
    cursorText: "View",
    tags: ["E-commerce", "Web Design", "Branding"],
    accent: "#0EA5E9",
    bg: "#062B3A",
    description:
      "Oasis sells minimal-ingredient hydration to a generation tired of being marketed at. We built a storefront that argues through restraint, with long blocks of negative space, two-tap checkout, and product photography that lets the water do the talking.",
    liveUrl: "#",
    image: "/services1.webp",
    hero: { image: "/services1.webp", logoText: "oasis" },
    media: [
      {
        type: "pair",
        left: { image: "/services1.webp" },
        right: { image: "/services2.webp", bg: "#0EA5E9" },
      },
      {
        type: "quote",
        text: "Cart abandonment fell to a number our analytics team thought was a bug.",
        author: "Theo Renaud",
        role: "Head of E-commerce, Oasis",
        code: "OSS9911",
        date: "30 JAN 2026",
      },
      {
        type: "trio",
        images: ["/services1.webp", "/services2.webp", "/services3.webp"],
      },
      {
        type: "wordmark",
        image: "/services3.webp",
        text: "oasis",
      },
    ],
    closingQuote:
      "How little can a store say before it stops saying anything at all?",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return projects[0];
  return projects[(i + 1) % projects.length];
}
