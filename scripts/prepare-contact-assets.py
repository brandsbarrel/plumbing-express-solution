"""Prepare only the new Contact references; existing page assets are retained."""
from pathlib import Path
from PIL import Image

source = Path(r'E:\brands Barrel work\Reliable Plumbing sol\temp images')
destination = Path(__file__).resolve().parents[1] / 'public' / 'assets'
destination.mkdir(parents=True, exist_ok=True)
for filename, name, box in [
    ('contact top.jpeg', 'contact-hero-van', (940, 20, 1672, 941)),
    ('our location.jpeg', 'contact-service-map', (572, 145, 1066, 454)),
]:
    with Image.open(source / filename) as image:
        image.convert('RGB').crop(box).save(destination / f'{name}.webp', 'WEBP', quality=95)
print('Prepared Contact hero photograph and supplied service-area map.')
