#!/usr/bin/env python
 
from time import sleep
import os
import RPi.GPIO as GPIO
 
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(17, GPIO.IN)
GPIO.setup(18, GPIO.IN)
 
print("------------------")
print(" OMXPlayer + GPIO ")
print("------------------")
 
print("--------------")
print GPIO.input(17)
print GPIO.input(18)
print("--------------")
while True:
        if ( GPIO.input(17) == False ):
            print("Button Pressed")
            os.system('omxplayer -o local ni.mp3 &')
            sleep(3)
     
        if ( GPIO.input(18) == False ):
            print("Button Pressed")
            os.system('omxplayer -o hdmi intro.mp4 &')
            sleep(15)