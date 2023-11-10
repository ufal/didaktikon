
czech-morfflex-2.0.tsv.xz:
	curl --remote-name-all https://lindat.mff.cuni.cz/repository/xmlui/bitstream/handle/11234/1-3186{/czech-morfflex-2.0.tsv.xz}

nouns.txt: czech-morfflex-2.0.tsv.xz
	xzcat $< | cut -f2,3 | grep -P 'NN.S1-----A----\t[[:lower:]]' | cut -f2 > $@

clean:
	-rm czech-morfflex-2.0.tsv.xz

# TODO asi přefiltrovat nouns ještě tim jestli se vyskytujou v nějakym korpusu

