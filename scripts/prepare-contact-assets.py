"""Prepare only the new Contact references; existing page assets are retained."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageChops

source = Path(r'E:\brands Barrel work\Reliable Plumbing sol\temp images')
destination = Path(__file__).resolve().parents[1] / 'public' / 'assets'
destination.mkdir(parents=True, exist_ok=True)
for filename, name, box in [
    ('WhatsApp Image 2026-11-03 at 8.10.42 AM.jpeg', 'contact-hero-van', (0, 575, 1036, 1335)),
    ('WhatsApp Image 2026-11-03 at 9.07.12 AM.jpeg', 'contact-service-map', (60, 647, 881, 1218)),
]:
    with Image.open(source / filename) as image:
        image.convert('RGB').crop(box).save(destination / f'{name}.webp', 'WEBP', quality=95)

# Retain the original ornamental edges; the central heading and fields are real React.
with Image.open(source / 'WhatsApp Image 2026-11-03 at 8.13.05 AM.jpeg') as original:
    artwork = original.convert('RGBA').crop((0, 150, 1039, 1515))
    mask = Image.new('L', artwork.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.polygon([(0, 0), (310, 0), (0, 205)], fill=255)
    draw.rectangle((0, 0, 85, 220), fill=255)
    draw.rectangle((825, 0, 1039, 160), fill=255)
    draw.rectangle((945, 180, 1039, 1160), fill=255)
    draw.rectangle((875, 1145, 1039, 1365), fill=255)
    draw.rectangle((0, 1180, 365, 1365), fill=255)
    draw.rectangle((0, 1265, 1039, 1365), fill=255)
    softened = mask.filter(ImageFilter.GaussianBlur(8))
    ImageDraw.Draw(softened).rectangle((240, 43, 330, 82), fill=0)
    artwork.putalpha(softened)
    artwork.save(destination / 'contact-form-decoration.webp', 'WEBP', quality=95)

with Image.open(source / 'WhatsApp Image 2026-11-03 at 9.07.12 AM.jpeg') as original:
    splash = original.convert('RGBA').crop((700, 0, 941, 112))
    fade_x = Image.new('L', splash.size, 0)
    fade_y = Image.new('L', splash.size, 0)
    dx, dy = ImageDraw.Draw(fade_x), ImageDraw.Draw(fade_y)
    for x in range(splash.width):
        dx.line((x, 0, x, splash.height), fill=min(255, x * 9))
    for y in range(splash.height):
        dy.line((0, y, splash.width, y), fill=min(255, (splash.height - 1 - y) * 10))
    splash.putalpha(ImageChops.multiply(fade_x, fade_y))
    splash.save(destination / 'contact-location-splash.webp', 'WEBP', quality=95)
print('Prepared the new van photograph, coverage map and original decorative artwork.')
