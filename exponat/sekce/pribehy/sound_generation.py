#!/usr/bin/env python3
#coding: utf-8

import sys
import os
from image_generation import text2id
from gtts import gTTS

import logging
logging.basicConfig(
    format='%(asctime)s %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S',
    level=logging.INFO)

SNDDIR="gensounds"

def get_audio_for_line(line):
    filename = f"{SNDDIR}/{text2id(line)}.mp3"
    try:
        if not os.path.isfile(filename):
            tts = gTTS(line, lang='cs', tld='cz', slow=False)
            tts.save(filename)
    except Exception as e:
        message = f'StoryBoarder: Cannot generate sound "{filename}" for "{line}": {e}'
        logging.warning(message)
        print(message)
        filename = f"{SNDDIR}/pokus.mp3"
    return filename

if __name__=="__main__":
    line = input('Text:')
    print(get_audio_for_line(line))
     


