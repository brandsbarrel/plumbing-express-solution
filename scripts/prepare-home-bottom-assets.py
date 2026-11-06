"""Prepare the supplied Home work-process, urgent-help, location and footer references."""
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
save('below insta block.jpeg', 'work-process-top-water', (0, 0, 340, 185))
save('below insta block.jpeg', 'work-process-bottom-water', (0, 1320, 1037, 1516))
for index, y in enumerate([520, 726, 931, 1132], start=1):
    save('below insta block.jpeg', f'work-step-{index}', (104, y, 250, y + 155))
print('Prepared Home bottom section artwork and four work-process icons.')
