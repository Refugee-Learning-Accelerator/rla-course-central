# How to use this script in terminal : python ./Desktop/ocr.py --image ./Desktop/index1.jpeg
# import the necessary packages
from PIL import Image
from yandex import Translater
import pytesseract
import argparse
import cv2
import os
from tkinter import font

# construct the argument parse and parse the arguments
ap = argparse.ArgumentParser()
ap.add_argument("-i", "--image", required=True,
	help="path to input image to be OCR'd")
ap.add_argument("-p", "--preprocess", type=str, default="thresh",
	help="type of preprocessing to be done")
args = vars(ap.parse_args())

# load the example image and convert it to grayscale
image = cv2.imread(args["image"])
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
 
# check to see if we should apply thresholding to preprocess the
# image
if args["preprocess"] == "thresh":
	gray = cv2.threshold(gray, 0, 255,
		cv2.THRESH_BINARY | cv2.THRESH_OTSU)[1]
 
# make a check to see if median blurring should be done to remove
# noise
elif args["preprocess"] == "blur":
	gray = cv2.medianBlur(gray, 3)
 
# write the grayscale image to disk as a temporary file so we can
# apply OCR to it
filename = "{}.png".format(os.getpid())
cv2.imwrite(filename, gray)

# load the image as a PIL/Pillow image, apply OCR, and then delete
# the temporary file
text = pytesseract.image_to_string(Image.open(filename))
os.remove(filename)
#print(text)
print(text, file=open("output1.txt", "a"))

#Translation using Yandex
tr = Translater()
tr.set_key('trnsl.1.1.20171111T140021Z.fab1442644d7ff61.b26d98fe1810414d19400db810fb97ae3a165427')
tr.set_from_lang('en')
tr.set_to_lang('ar')
tr.set_text(text)
#print(tr.translate())
print(tr.translate(), file=open("output2.txt", "a"))
 
# show the output images
#cv2.putText(image,'name',(0,130), font, 1, (200,255,155))
#font = cv2.FONT_HERSHEY_SIMPLEX
#cv2.putText(image,'OpenCV Tuts!',(0,130), font, 1, (200,255,155), 2, cv2.LINE_AA)
cv2.imshow("Image", image)
cv2.imshow("Output", gray)
cv2.waitKey(0)

