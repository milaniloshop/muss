#!/usr/bin/env python3
"""Build factory OEM PDFs for Milan Hype — send to supplier (no website/prices)."""
from pathlib import Path
from fpdf import FPDF

ROOT = Path(__file__).parent
OUT = ROOT / 'pdf'
OUT.mkdir(exist_ok=True)

CJK = '/usr/share/fonts/truetype/droid/DroidSansFallbackFull.ttf'


class SpecPDF(FPDF):
    def footer(self):
        self.set_y(-12)
        self.set_font('Helvetica', 'I', 8)
        self.set_text_color(120, 120, 120)
        self.cell(0, 8, 'Milan Hype OEM - CoreFit - Confidential factory spec (no retail pricing)', align='C')


def fit_image(pdf, path: Path, y_start: float = 18, max_w: float = 190, max_h: float = 265):
    from PIL import Image

    img = Image.open(path)
    w, h = img.size
    ratio = min(max_w / w, max_h / h)
    nw, nh = w * ratio, h * ratio
    x = (210 - nw) / 2
    pdf.image(str(path), x=x, y=y_start, w=nw)


def build_message_pdf():
    pdf = SpecPDF()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.add_page()
    pdf.set_font('Helvetica', 'B', 16)
    pdf.cell(0, 10, 'Milan Hype - Factory OEM Brief', new_x='LMARGIN', new_y='NEXT')
    pdf.set_font('Helvetica', '', 9)
    pdf.set_text_color(100, 100, 100)
    pdf.multi_cell(0, 5, 'Copy-paste the message below to your factory contact. Do NOT share milanhype.com or retail prices.')
    pdf.ln(4)

    english = """Hi, I am developing a US mens compression tank brand (OEM). I do NOT have a store link yet - we are in sample phase.

Please review 4 tier spec sheets attached. Same tank silhouette, different fabric/label/packaging per tier.

BRAND: Milan Hype | Product line: CoreFit
MARKET: USA mens DTC | Discreet packaging required

LABEL (all tiers):
- Woven neck label inside back neck
- Text: "MILAN HYPE" (logo file attached)
- Size: 2.5cm x 6cm
- Colors: white or gold thread on black label tab
- REMOVE factory Chinese printed labels on bulk orders

PACKAGING (all tiers):
- Outer: matte black poly mailer, NO Chinese text outside
- Optional inner hang tag: "Milan Hype - CoreFit"

4 TIERS (see attached spec PDFs):
1. ESSENTIAL - 82% nylon 18% spandex, moderate compression, basic mailer
2. PRO - reinforced chest panel zone, microfiber blend, branded sleeve
3. ELITE - precision zone mapping, flatlock seams, gift sleeve
4. SIGNATURE - premium weave, gold interior seam accent, luxury box + card

FIRST ORDER PLAN:
- Sample qty 2 (black L + XL) already testing elsewhere
- If pass: bulk 100-200 pcs black first
- Need: MOQ per tier, EXW unit price (USD), sample fee for 1 branded pre-production unit, lead time

Contact: support@milanhype.com | Instagram: @Milanhype_"""

    pdf.set_text_color(0, 0, 0)
    pdf.set_font('Helvetica', 'B', 11)
    pdf.cell(0, 8, 'ENGLISH - paste to factory:', new_x='LMARGIN', new_y='NEXT')
    pdf.set_font('Helvetica', '', 9)
    pdf.multi_cell(0, 4.5, english)
    pdf.ln(3)

    chinese = """你好，我在开发美国男士塑身压缩背心品牌 OEM，目前还没有店铺链接，处于打样阶段。

附件是4个等级的产品规格图，版型相同，面料/标签/包装不同。

品牌：Milan Hype，系列名：CoreFit
市场：美国男士电商，外包装要求低调无中文。

领标：后领内织唛，文字"MILAN HYPE"，尺寸2.5x6cm，黑底白字或金字。
大货需去掉中文洗水标。

包装：哑光黑色快递袋，外袋无中文；内附吊牌可选。

首批计划：测试通过后大货100-200件黑色为主。
请报：各等级MOQ、出厂单价美金、1件产前样费用、生产周期。

联系：support@milanhype.com | Instagram: @Milanhype_"""

    pdf.add_font('cjk', '', CJK)
    pdf.set_font('Helvetica', 'B', 11)
    pdf.cell(0, 8, 'CHINESE - paste if he prefers:', new_x='LMARGIN', new_y='NEXT')
    pdf.set_font('cjk', '', 9)
    pdf.multi_cell(0, 5, chinese)
    pdf.ln(3)

    pdf.set_font('Helvetica', 'B', 11)
    pdf.cell(0, 8, 'Label quick spec:', new_x='LMARGIN', new_y='NEXT')
    pdf.set_font('Helvetica', '', 9)
    label = """Type: Woven neck label | Text: MILAN HYPE | Size: 2.5 x 6 cm
Placement: Inside back neck | Thread: White or gold on black tab
Hang tag (optional): Milan Hype - CoreFit"""
    pdf.multi_cell(0, 5, label)

    pdf.output(str(OUT / '01-Milan-Hype-Factory-Message.pdf'))


def build_image_pdf(filename: str, title: str, image_name: str):
    path = ROOT / image_name
    if not path.exists():
        return
    pdf = SpecPDF(orientation='P', unit='mm', format='A4')
    pdf.add_page()
    pdf.set_font('Helvetica', 'B', 14)
    pdf.cell(0, 10, title, new_x='LMARGIN', new_y='NEXT')
    fit_image(pdf, path, y_start=22)
    pdf.output(str(OUT / filename))


def build_master_pdf():
    pdf = SpecPDF()
    pdf.add_page()
    pdf.set_font('Helvetica', 'B', 18)
    pdf.cell(0, 12, 'Milan Hype CoreFit - Complete OEM Pack', new_x='LMARGIN', new_y='NEXT')
    pdf.set_font('Helvetica', '', 10)
    pdf.multi_cell(0, 6, 'Send this ONE file to factory. No website. No retail prices. Pages: message, logo, Essential, Pro, Elite, Signature.')
    pdf.ln(4)

    # Message summary page
    pdf.set_font('Helvetica', 'B', 12)
    pdf.cell(0, 8, 'Factory message (see 01 PDF for full EN/CN text)', new_x='LMARGIN', new_y='NEXT')
    pdf.set_font('Helvetica', '', 9)
    pdf.multi_cell(0, 4.5, 'USA OEM men compression tank. Brand Milan Hype / CoreFit. Woven neck label MILAN HYPE 2.5x6cm. Remove CN labels on bulk. Black mailer no CN text outside. Bulk 100-200 black. Quote MOQ + EXW USD + sample fee + lead time. Contact: support@milanhype.com @Milanhype_')

    sheets = [
        ('Logo + Woven Label Spec', 'milan-hype-label-logo-factory.jpg'),
        ('Tier 1 - Essential', 'oem-tier-essential-spec.jpg'),
        ('Tier 2 - Pro', 'oem-tier-pro-spec.jpg'),
        ('Tier 3 - Elite', 'oem-tier-elite-spec.jpg'),
        ('Tier 4 - Signature', 'oem-tier-signature-spec.jpg'),
    ]
    for title, img in sheets:
        path = ROOT / img
        if not path.exists():
            continue
        pdf.add_page()
        pdf.set_font('Helvetica', 'B', 14)
        pdf.cell(0, 10, title, new_x='LMARGIN', new_y='NEXT')
        fit_image(pdf, path, y_start=22)

    pdf.output(str(OUT / '00-Milan-Hype-Complete-OEM-Pack.pdf'))


if __name__ == '__main__':
    build_message_pdf()
    build_image_pdf('02-Milan-Hype-Logo-Label.pdf', 'Milan Hype - Logo & Woven Label', 'milan-hype-label-logo-factory.jpg')
    build_image_pdf('03-Tier-Essential.pdf', 'Tier 1 - Essential Spec', 'oem-tier-essential-spec.jpg')
    build_image_pdf('04-Tier-Pro.pdf', 'Tier 2 - Pro Spec', 'oem-tier-pro-spec.jpg')
    build_image_pdf('05-Tier-Elite.pdf', 'Tier 3 - Elite Spec', 'oem-tier-elite-spec.jpg')
    build_image_pdf('06-Tier-Signature.pdf', 'Tier 4 - Signature Spec', 'oem-tier-signature-spec.jpg')
    build_master_pdf()
    print('PDFs written to', OUT)
