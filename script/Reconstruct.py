from pypdf import PdfReader, PdfWriter

reader = PdfReader("input.pdf")
writer = PdfWriter()

# Define your target web size in points (pixels)
target_width = 1280
target_height = 720

for page in reader.pages:
    # This scales content AND all boxes (mediabox, cropbox, etc.) 
    # to fit the new dimensions perfectly
    page.scale_to_size(target_width, target_height)
    writer.add_page(page)

with open("web_optimized.pdf", "wb") as f:
    writer.write(f)
