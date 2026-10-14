import math
import os
from PIL import Image, ImageDraw

def render_icon(size):
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    scale = size / 512.0

    # Fundo Squircle Moderno
    r = int(110 * scale)
    margin = int(24 * scale)
    draw.rounded_rectangle(
        [margin, margin, size - margin, size - margin],
        radius=r,
        fill=(24, 28, 36, 255),
        outline=(52, 60, 76, 255),
        width=max(1, int(6 * scale))
    )

    # Detalhe sutil de anel
    ring_margin = int(50 * scale)
    draw.ellipse(
        [ring_margin, ring_margin, size - ring_margin, size - ring_margin],
        outline=(38, 45, 58, 255),
        width=max(1, int(3 * scale))
    )

    # Capelo de formatura (Losango superior com gradiente quente simulado)
    cx, cy = size / 2, size * 0.38
    w, h = 165 * scale, 78 * scale
    pts = [
        (cx, cy - h),
        (cx + w, cy),
        (cx, cy + h),
        (cx - w, cy)
    ]
    draw.polygon(pts, fill=(234, 88, 12, 255))
    
    # Borda/brilho no topo do capelo
    inner_pts = [
        (cx, cy - h * 0.82),
        (cx + w * 0.82, cy),
        (cx, cy + h * 0.82),
        (cx - w * 0.82, cy)
    ]
    draw.polygon(inner_pts, outline=(255, 255, 255, 60), width=max(1, int(3 * scale)))

    # Base inferior do capelo
    cap_base = [
        (cx - w * 0.52, cy + h * 0.35),
        (cx - w * 0.52, cy + h * 1.45),
        (cx, cy + h * 1.95),
        (cx + w * 0.52, cy + h * 1.45),
        (cx + w * 0.52, cy + h * 0.35),
    ]
    draw.polygon(cap_base, fill=(185, 28, 28, 255))

    # Cordão e Pêndulo dourado (Tassel)
    tassel_col = (251, 191, 36, 255)
    draw.line([(cx, cy), (cx - 42 * scale, cy + 85 * scale)], fill=tassel_col, width=max(2, int(9 * scale)))
    draw.ellipse([(cx - 8 * scale, cy - 8 * scale), (cx + 8 * scale, cy + 8 * scale)], fill=tassel_col)
    draw.polygon([
        (cx - 48 * scale, cy + 80 * scale),
        (cx - 36 * scale, cy + 80 * scale),
        (cx - 32 * scale, cy + 125 * scale),
        (cx - 52 * scale, cy + 125 * scale)
    ], fill=(245, 158, 11, 255))

    # Medalha de Alvo / Aprovação na base
    medal_y = size * 0.77
    mr = 44 * scale
    draw.ellipse([(cx - mr, medal_y - mr), (cx + mr, medal_y + mr)], fill=(245, 158, 11, 255), outline=(24, 28, 36, 255), width=max(1, int(4 * scale)))
    
    in_mr = mr * 0.72
    draw.ellipse([(cx - in_mr, medal_y - in_mr), (cx + in_mr, medal_y + in_mr)], fill=(24, 28, 36, 255))

    # Estrela de 5 pontas dentro da medalha
    star_pts = []
    outer_r = in_mr * 0.78
    inner_r = outer_r * 0.45
    for i in range(10):
        angle = -math.pi / 2 + i * (math.pi / 5)
        curr_r = outer_r if i % 2 == 0 else inner_r
        star_pts.append((cx + curr_r * math.cos(angle), medal_y + curr_r * math.sin(angle)))
    draw.polygon(star_pts, fill=(251, 191, 36, 255))

    return img

if __name__ == '__main__':
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    public_dir = os.path.join(base_dir, 'public')
    os.makedirs(public_dir, exist_ok=True)

    # 1. Salvar PNG em alta resolução (512x512)
    png_path = os.path.join(public_dir, 'app-favicon.png')
    high_res = render_icon(512)
    high_res.save(png_path, format='PNG')
    print(f'Criado {png_path}')

    # 2. Salvar favicon.ico multi-resolução
    ico_path = os.path.join(public_dir, 'favicon.ico')
    sizes = [16, 32, 48, 64, 128, 256]
    images = [render_icon(s) for s in sizes]
    images[0].save(ico_path, format='ICO', sizes=[(s, s) for s in sizes], append_images=images[1:])
    print(f'Criado {ico_path}')
