
czech-morfflex-2.0.tsv.xz:
	curl --remote-name-all https://lindat.mff.cuni.cz/repository/xmlui/bitstream/handle/11234/1-3186{/czech-morfflex-2.0.tsv.xz}

czech-morfflex-2.0.tsv: czech-morfflex-2.0.tsv.xz
	xzcat $< > $@

nouns.txt: czech-morfflex-2.0.tsv
	cut -f2,3 $< | grep -P 'NNMS1-----A----\t[[:lower:]]' | cut -f2 > $@

clean:
	-rm czech-morfflex-2.0.tsv.xz czech-morfflex-2.0.tsv


