from pypdf import PdfReader, PdfWriter

    
reader = PdfReader("Seige_of_Vicksburg_Sample_OCR.pdf")
writer = PdfWriter()

# Add page 1 from reader to output document, unchanged.
writer.add_page(reader.pages[0])

# Add page 2 from reader, but rotated clockwise 90 degrees.
writer.add_page(reader.pages[1].rotate(90))

# Add page 3 from reader, but crop it to half size.
page3 = writer.add_page(reader.pages[2])
page3.mediabox.upper_right = (
    page3.mediabox.right / 2,
    page3.mediabox.top / 2,
)

writer.write("out-all-in-one.pdf"
