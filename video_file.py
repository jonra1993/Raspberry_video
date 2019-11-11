#!/usr/bin/env python3

from omxplayer.player import OMXPlayer
from pathlib import Path
from time import sleep
import os
import RPi.GPIO as GPIO
import logging
logging.basicConfig(level=logging.INFO)

#GIO
GPIO.setmode(GPIO.BCM)      # set up BCM GPIO numbering
GPIO.setwarnings(False)
button = 2
GPIO.setup(button, GPIO.IN, pull_up_down=GPIO.PUD_UP)     # set GPIO2 as input and interl pull up is activated(button)

print("------------------")
print(" OMXPlayer + GPIO ")
print("------------------")

print("--------------")
print(GPIO.input(button))
print("--------------")

VIDEO_PATH = Path("cam_3d.mp4")
BLACK_PATH = Path("black_screen.mp4")
player_log = logging.getLogger("Player 1")

player_action = OMXPlayer(VIDEO_PATH, 
        dbus_name='org.mpris.MediaPlayer2.omxplayer1')
        
player_stop = OMXPlayer(BLACK_PATH, 
        dbus_name='org.mpris.MediaPlayer2.omxplayer2')

# it takes about this long for omxplayer to warm up and start displaying a picture on a rpi3
player_action.pause()
sleep(2.5)
player_stop.pause()
try:
    while True:
         # Button was pressed
         
        if ( GPIO.input(button) == GPIO.LOW ):
            sleep(1)
            try:
                if (player_action.is_playing() == True):
                    player_action.stop()
                    sleep(1)
                    player_action = OMXPlayer(VIDEO_PATH, dbus_name='org.mpris.MediaPlayer2.omxplayer1')
                else:
                    player_action.play()
                    sleep(1)
            except:
                sleep(1)
                    
                
                
            
except KeyboardInterrupt:
    try:
        player_action.quit()
        player_stop.quit()
    except:
        pass
    pass


