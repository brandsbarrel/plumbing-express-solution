"""Isolate the supplied water and icon artwork without screenshot rectangles."""
from pathlib import Path
from PIL import Image, ImageFilter, ImageDraw

source = Path(r'E:\brands Barrel work\Reliable Plumbing sol\temp images\below insta block.jpeg')
destination = Path(__file__).resolve().parents[1] / 'public' / 'assets'
with Image.open(source) as reference:
    reference = reference.convert('RGB')
    for index, y in enumerate([520, 726, 931, 1132], start=1):
        icon = reference.crop((102, y, 260, y + 158)).convert('RGBA')
        alpha = Image.new('L', icon.size)
        alpha.putdata([round(max(0, min(1, (185 - max(r, g)) / 80)) * 255) if b >= r and b >= g else 0 for r, g, b, _ in icon.get_flattened_data()])
        ink = Image.new('RGBA', icon.size, '#080d58')
        ink.putalpha(alpha)
        ink.save(destination / f'process-icon-{index}.webp', 'WEBP', lossless=True)
    for name, box in [('top', (0, 0, 1037, 185)), ('bottom', (0, 1310, 1037, 1516))]:
        art = reference.crop(box).convert('RGBA')
        alpha = Image.new('L', art.size)
        pixels = []
        for y in range(art.height):
            for x in range(art.width):
                r, g, b, _ = art.getpixel((x, y))
                allowed = name == 'bottom' or y < 80 or x < 160
                pixels.append(255 if allowed and g > 60 and b > 100 and b - r > 40 and max(r, g, b) - min(r, g, b) > 50 else 0)
        alpha.putdata(pixels)
        alpha = alpha.filter(ImageFilter.MaxFilter(9)).filter(ImageFilter.GaussianBlur(1))
        if name == 'bottom':
            ImageDraw.Draw(alpha).rectangle((200, 0, 900, 32), fill=0)
        art.putalpha(alpha)
        art.save(destination / f'process-water-{name}.webp', 'WEBP', quality=96)
print('Prepared seamless reference water artwork and exact icon silhouettes.')
