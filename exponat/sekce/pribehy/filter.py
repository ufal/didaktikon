#!/usr/bin/env python3
#coding: utf-8

import sys

import logging
logging.basicConfig(
    format='%(asctime)s %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S',
    level=logging.INFO)

N = int(sys.argv[1])
K = int(sys.argv[2])
nounsfile = sys.argv[3]

nouns_morflex = set()
with open(nounsfile) as infile:
    for line in infile:
        nouns_morflex.add(line.strip())

from collections import defaultdict
nouns = defaultdict(int)

for line in sys.stdin:
    noun = line.strip()
    if noun in nouns_morflex:
        nouns[noun] += 1
        if nouns[noun] >= K:
            print(noun)
            nouns_morflex.remove(noun)
            del nouns[noun]
            N -= 1
            if N == 0:
                break

