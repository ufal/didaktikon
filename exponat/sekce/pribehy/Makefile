
czech-morfflex-2.0.tsv.xz:
	curl --remote-name-all https://lindat.mff.cuni.cz/repository/xmlui/bitstream/handle/11234/1-3186{/czech-morfflex-2.0.tsv.xz}

nouns_morflex.txt: czech-morfflex-2.0.tsv.xz
	xzcat $< | cut -f2,3 | grep -P 'NN.S1-----A----\t[[:lower:]]' | cut -f2 > $@

N=5000
K=5
nouns.txt: nouns_morflex.txt
	xzcat syn_v9.xz | cut -f4,6 | grep -P 'N$$' | cut -f1 | python3 filter.py $N $K $< > $@

clean:
	-rm czech-morfflex-2.0.tsv.xz

# TODO asi přefiltrovat nouns ještě tim jestli se vyskytujou v nějakym korpusu

