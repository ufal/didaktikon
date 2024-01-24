#!/usr/bin/env python3
#coding: utf-8

import sys
import json
import random
import cgi
from image_generation import get_image_for_line


print("Content-type: text/html")
print()

seed = random.randint(0, 10000000)

DEF_PROMPT = "a ghost of a small kitten sitting in a park in front of a house, dark, gloomy, painting, toyen style"

form = cgi.FieldStorage()

prompt = form.getvalue("prompt", DEF_PROMPT)    

image_filename = get_image_for_line(prompt, seed)

with open('nabozenstvi_duse_result.html') as htmlfile:
    html = htmlfile.read()
    html = html.replace('DEFAULTIMAGE', image_filename)
    print(html)

