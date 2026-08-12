"""Convert project PNGs to WebP and copy to public/projects/"""
from PIL import Image
import os, shutil

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS = f"{BASE}/public/Nymbor Website assets"
OUT = f"{BASE}/public/projects"

# Define which images to pick per project (best hero shots)
PROJECTS = {
    "feroce": {
        "src_dir": f"{ASSETS}/Feroce",
        "files": [
            "Branding_Feroce_page-0001 1.png",
            "Branding_Feroce_page-0009 1.png",
            "Branding_Feroce_page-0010 1.png",
            "Branding_Feroce_page-0011 1.png",
            "Branding_Feroce_page-0013 1.png",
            "Branding_Feroce_page-0016 1.png",
        ],
        "names": ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp"],
    },
    "letsgrub": {
        "src_dir": f"{ASSETS}/LetsGrub",
        "files": [
            "Title.png",
            "Frame 1948758995.png",
            "Frame 1948758996.png",
            "Frame 1948758997.png",
            "Frame 1948758999.png",
            "Frame 1948759000.png",
        ],
        "names": ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp"],
    },
}

def convert(src, dst, quality=82, max_width=1920):
    img = Image.open(src).convert("RGB")
    if img.width > max_width:
        ratio = max_width / img.width
        img = img.resize((max_width, int(img.height * ratio)), Image.LANCZOS)
    img.save(dst, "WEBP", quality=quality, method=6)
    src_kb = os.path.getsize(src) / 1024
    dst_kb = os.path.getsize(dst) / 1024
    print(f"  {os.path.basename(src)} → {os.path.basename(dst)}  {src_kb:.0f}KB → {dst_kb:.0f}KB")

for project, cfg in PROJECTS.items():
    out_dir = f"{OUT}/{project}"
    os.makedirs(out_dir, exist_ok=True)
    print(f"\n[{project}]")
    for fname, outname in zip(cfg["files"], cfg["names"]):
        src = f"{cfg['src_dir']}/{fname}"
        if os.path.exists(src):
            convert(src, f"{out_dir}/{outname}")
        else:
            print(f"  MISSING: {fname}")

print("\nDone.")
