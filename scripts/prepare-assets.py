"""Extract the supplied design's original imagery without recreating it."""
from pathlib import Path
from PIL import Image

source = Path(r'E:\brands Barrel work\Reliable Plumbing sol\temp images')
destination = Path(__file__).resolve().parents[1] / 'public' / 'assets'
destination.mkdir(parents=True, exist_ok=True)

def save(name, filename, box=None):
    image = Image.open(source / filename).convert('RGB')
    if box:
        image = image.crop(box)
    image.save(destination / f'{name}.webp', 'WEBP', quality=94)

save('logo', 'logo.jpeg', (235, 185, 1835, 515))
save('hero-desktop-complete', 'WhatsApp Image 2026-10-20 at 2.01.03 PM.jpeg', (0, 71, 1138, 531))
save('hero-mobile-complete', 'home page mobile design.jpeg')
save('trust-banner', 'below hero .jpeg', (0, 155, 2048, 562))
save('discount-voucher', 'discount section.jpeg')
save('footer-complete', 'footer.jpeg')

service_ids = ['installations', 'maintenance', 'repairs', 'leaks', 'gas', 'hot-water', 'drains', 'taps']
for index, name in enumerate(service_ids):
    x = 52 if index % 2 == 0 else 499
    y = [280, 465, 673, 861][index // 2]
    save(f'service-{name}', 'home page section next to hero.jpeg', (x, y, x + 135, y + 135))

for name, x, y in [('response', 29, 228), ('licensed', 524, 228), ('pricing', 29, 546), ('quality', 524, 546)]:
    save(f'benefit-{name}', 'why choose us section.jpeg', (x + 180, y, x + 471, y + 293))
    save(f'icon-{name}', 'why choose us section.jpeg', (x + 24, y + 8, x + 134, y + 116))
for name, box in [
    ('bathroom', (27, 501, 297, 910)),
    ('drainage', (318, 501, 586, 910)),
    ('shower', (606, 501, 875, 910)),
]:
    save(f'project-{name}', 'service page top.jpeg', box)

for name, filename, photo_box, avatar_box in [
    ('jayden', 'review 1.jpeg', (0, 27, 733, 390), (34, 753, 168, 887)),
    ('suhanya', 'review 2.jpeg', (18, 14, 1010, 474), (83, 1295, 273, 1485)),
    ('kyle', 'review 3.jpeg', (18, 30, 981, 524), (64, 1332, 259, 1528)),
]:
    save(f'review-{name}-project', filename, photo_box)
    save(f'review-{name}-avatar', filename, avatar_box)

print(f'Prepared {len(list(destination.glob("*.webp")))} design assets.')
