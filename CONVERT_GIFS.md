# Convert GIFs to Optimized Videos

## Performance Issue
Your GIF files are extremely large and causing lag on older devices:
- `hero-image.gif` - **54MB** ⚠️
- `services4.gif` - **32MB** ⚠️
- `contact.gif` - **4.5MB**

## Solution: Convert to Video

Videos are **90-95% smaller** than GIFs and perform much better!

### Using FFmpeg (Recommended)

#### Install FFmpeg
```bash
# Ubuntu/Debian
sudo apt install ffmpeg

# macOS
brew install ffmpeg

# Windows
# Download from: https://ffmpeg.org/download.html
```

#### Convert GIFs to MP4 and WebM

Run these commands in your `public/` directory:

```bash
# Navigate to public folder
cd public/

# Convert hero-image.gif (54MB → ~2-3MB)
ffmpeg -i hero-image.gif -vf "scale=1920:-2:flags=lanczos" -c:v libx264 -preset slow -crf 22 -pix_fmt yuv420p -movflags +faststart hero-image.mp4
ffmpeg -i hero-image.gif -vf "scale=1920:-2:flags=lanczos" -c:v libvpx-vp9 -b:v 2M hero-image.webm

# Convert services4.gif (32MB → ~1-2MB)
ffmpeg -i services4.gif -vf "scale=1920:-2:flags=lanczos" -c:v libx264 -preset slow -crf 22 -pix_fmt yuv420p -movflags +faststart services4.mp4
ffmpeg -i services4.gif -vf "scale=1920:-2:flags=lanczos" -c:v libvpx-vp9 -b:v 2M services4.webm

# Convert contact.gif (4.5MB → ~200-300KB)
ffmpeg -i contact.gif -vf "scale=1280:-2:flags=lanczos" -c:v libx264 -preset slow -crf 22 -pix_fmt yuv420p -movflags +faststart contact.mp4
ffmpeg -i contact.gif -vf "scale=1280:-2:flags=lanczos" -c:v libvpx-vp9 -b:v 1M contact.webm
```

### Using Online Converter (No Install)

1. Go to: https://cloudconvert.com/gif-to-mp4
2. Upload your GIF
3. Set quality to "High"
4. Download the MP4
5. Repeat for WebM format if needed

### Create Fallback Images (Optional)

Extract a single frame for low-end devices:

```bash
# Extract first frame as static fallback
ffmpeg -i hero-image.gif -vframes 1 hero-image-fallback.jpg
ffmpeg -i services4.gif -vframes 1 services4-fallback.jpg
ffmpeg -i contact.gif -vframes 1 contact-fallback.jpg
```

## After Conversion

1. Place the converted `.mp4` and `.webm` files in the `public/` folder
2. The OptimizedMedia component will automatically use them
3. You can optionally delete the old GIF files to save space
4. Test on different devices to verify performance

## Expected Results

- **54MB GIF → 2-3MB video** (95% smaller!)
- **Smooth playback** on older devices
- **Instant loading** on mobile
- **Better battery life** (video decode is hardware-accelerated)
