"""Prepare Home photographs; work-process icons and water are rendered as SVG."""
from pathlib import Path
from PIL import Image

source = Path(r'E:\brands Barrel work\Reliable Plumbing sol\temp images')
destination = Path(__file__).resolve().parents[1] / 'public' / 'assets'
destination.mkdir(parents=True, exist_ok=True)

def save(filename, name, box=None):
    with Image.open(source / filename) as image:
        image = image.convert('RGB')
        if box:
            image = image.crop(box)
        image.save(destination / f'{name}.webp', 'WEBP', quality=95)

save('need urgent plumbing help.jpeg', 'home-urgent-help')
save('location.jpeg', 'home-location-map')
save('footer.jpeg', 'home-footer')
print('Prepared Home urgent-help, location and footer artwork.')
