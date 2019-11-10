#!/usr/bin/env python
 
from time import sleep
import os
import RPi.GPIO as GPIO
 
GPIO.setmode(GPIO.BCM)      # set up BCM GPIO numbering 
GPIO.setwarnings(False)
button = 4
GPIO.setup(button, GPIO.IN, pull_up_down=GPIO.PUD_UP)     # set GPIO21 as input and interl pull up is activated(button) 
 
print("------------------")
print(" OMXPlayer + GPIO ")
print("------------------")
 
print("--------------")
print(GPIO.input(button))
print("--------------")

try:
    while True:
        if ( GPIO.input(button) == False ): # Button was pressed
            print("Button Pressed")
            os.system('omxplayer -o hdmi assets/Cam3D.MP4 &')
            sleep(15)
except KeyboardInterrupt:
    pass
        