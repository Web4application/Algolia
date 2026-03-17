# Variables
CC = gcc
CFLAGS = -I./include -Wall
LDFLAGS = -lz -lpng # Common dependencies for libhpdf
LIBNAME = libhpdf.a
PREFIX = /usr/local

# List of object files (matching the .c files in your src directory)
OBJS = src/hpdf_image_png.o \
	src/hpdf_image_ccitt.o \
	src/hpdf_doc_png.o \
	src/hpdf_ext_gstate.o \
	src/hpdf_3dmeasure.o \
	src/hpdf_exdata.o \
	src/hpdf_namedict.o \
	src/hpdf_u3d.o

# List of demo executables
PROGRAMS = \
	demo/encoding_list.exe \
	demo/font_demo.exe \
	demo/text_demo.exe \
	demo/text_demo2.exe \
	demo/image_demo.exe \
	demo/jpeg_demo.exe \
	demo/jpfont_demo.exe \
	demo/line_demo.exe \
	demo/link_annotation.exe \
	demo/outline_demo.exe \
	demo/png_demo.exe \
	demo/text_annotation.exe \
	demo/ttfont_demo.exe \
	demo/character_map.exe \
	demo/grid_sheet.exe \
	demo/arc_demo.exe \
	demo/raw_image_demo.exe \
	demo/encryption.exe \
	demo/permission.exe \
	demo/slide_show_demo.exe \
	demo/ext_gstate_demo.exe

# Default target
all: $(LIBNAME)

# Rule to create the static library
$(LIBNAME): $(OBJS)
	ar rc $(LIBNAME) $(OBJS)
	ranlib $(LIBNAME)

# Pattern rule to compile .c files into .o files
src/%.o: src/%.c
	$(CC) $(CFLAGS) -c $< -o $@

# Rule to build demo programs (linking against the library)
demo: $(LIBNAME) $(PROGRAMS)

demo/%.exe: demo/%.c
	$(CC) $(CFLAGS) $< -o $@ -L. -lhpdf $(LDFLAGS)

# Cleanup
clean:
	rm -f src/*.o ./*.a demo/*.exe

# Installation
install: all
	if [ ! -d $(PREFIX)/include ]; then mkdir -p $(PREFIX)/include; fi
	if [ ! -d $(PREFIX)/lib ]; then mkdir -p $(PREFIX)/lib; fi
	cp include/hpdf*.h $(PREFIX)/include/
	chmod 644 $(PREFIX)/include/hpdf*.h
	cp -p $(LIBNAME) $(PREFIX)/lib/
