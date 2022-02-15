let  aLetter = document.getElementById('a-letter')
let a = document.getElementById('body')

let alphabet = document.getElementById('alphabet')
let cover = document.getElementById('cover')

let submitEl = document.querySelector('.submit-btn')
submitEl.addEventListener('click', start)

let restartEl = document.querySelector('.restart-btn')
restartEl.addEventListener('click', restart)
let wordArray;

let nameEl = document.getElementById("name_input")
nameEl.addEventListener("keyup", start);
nameEl.addEventListener("keypress", (e) => {
   if (e.key === "Enter") e.preventDefault();
});



let count = 6;
let counter = 6;
let colors = [
    '#F15353', // red
    '#F17553', // orange
    'rgb(120, 184, 68)', // green
    // '#A0E449', // green
    'rgb(68, 147, 184)', //blue
    'rgb(102, 65, 158)', // violet
    'rgb(202, 111, 146)', //pink
];

let diacritics = {
    'ě': 'e_letter',
    'š': 's_soft_letter',
    'č': 'c_soft_letter',
    'ř': 'r_soft_letter',
    'ž': 'z_soft_letter',
    'ý': 'y_letter',
    'á': 'a_letter',
    'í': 'i_letter',
    'é': 'e_letter',
    'ú': 'u_letter',
    'ů': 'u_letter'
}

let content = {
    a_letter : {text:'Alzheimerova choroba je onemocnění spojené s úbytkem nervových buněk v mozku a s postupující demencí. Ve věku 80 let se může týkat zhruba každého pátého z nás. Vyléčit Alzheimerovu chorobu neumíme, při včasném záchytu však umíme průběh onemocnění zmírnit. Proto je ve starším věku součástí preventivní prohlídky vyšetření kognitivních schopností pacienta. Ale ani to někdy nestačí. <br><br> Umělá inteligence umí na základě některých vyšetření odhadnout míru rizika rozvoje Alzheimerovy choroby u konkrétního pacienta. Přínosem kromě zhodnocení provedených vyšetření je i automatická analýza fotografie výrazu v obličeji či fotografie sítnice pomocí tzv. hlubokého učení. Umělá inteligence pak doporučí další vyšetření, třeba zobrazovací (jako je CT nebo magnetická rezonance) nebo vyšetření mozkomíšního moku. Cílem použití umělé inteligence je zejména nastavit ideální postup, při kterém lékaři dokáží zachytit včas co nejvíc rizikových pacientů a zahájit jim co nejdříve individuální sledování či léčbu.', img:''},
    b_letter : {text: "Umělá inteligence umí pomoci při zjišťování a léčbě bakteriálních onemocnění. Může to znít překvapivě, ale již v 70. letech minulého století vznikl expertní systém MYCIN, který uměl poradit lékaři s léčbou infekcí. Po zadání několika základních údajů dokázal MYCIN odhadnout, jaká bakterie nejspíše způsobuje pacientovi jeho onemocnění a dokonce jaká antibiotika by byla pro léčbu nejvhodnější. <br><br> V dnešní době se umělá inteligence dokáže uplatnit při vývoji antibiotik, při odhalování odolnosti bakterií vůči antibiotikům, při sledování průběhu onemocnění u rizikových pacientů (například včasné odhalení sepse) a podobně.", img:''},    
    c_letter : {text: "Zdravé cévy jsou pro nás doslova životně důležité. Proto cévám v moderní medicíně věnujeme velkou pozornost i s ohledem na prevenci různých onemocnění. Chceme snížit riziko srdečních infarktů a cévních mozkových příhod.<br><br>Umělá inteligence umí pomoci vyhodnocovat výsledky zobrazovacích metod, nejen rentgenových vyšetření, ale i vyšetření pomocí ultrazvuku či infračerveného záření. Mnohem přesněji odhalí drobné chorobné změny a dokáže z celkového obrazu a ostatních údajů vypočítat rizikovost pacienta v budoucnu. Dokáže tak včasným zásahem zabránit infarktu či mrtvice u lidí, kteří by jinak zůstali bez léčby.<br><br>I během diagnostiky akutních příhod dokáže umělá inteligence pomoci. Například u akutních cévních mozkových příhod umí urychlit a zpřesnit dané vyšetření (CT nebo magnetickou rezonanci) či upozornit na snímky, kde se s největší pravděpodobností nachází nějaká patologie. Některé modely neuronových sítí už dokonce dokázaly u konkrétních pacientů odhadnout riziko, s jakým u původně uzavřené cévy může dojít k následnému krvácení, což je jinak obávaná a mnohdy život ohrožující komplikace.", img:''},
    c_soft_letter : {text: "", img:''},   
    d_letter : {text: 'Od chvíle, kdy lékaři dostali do ambulancí počítače, se někdy musejí věnovat více svému počítači než pacientům. Nemůžeme se jim divit, zdravotnická dokumentace pacientů musí být sepsána přesně a pečlivě.<br><br>Moderní zahraniční aplikace už umí s vedením dokumentace pomoci. Pomocí technik umělé inteligence může sama navrhnout textový přepis konverzace lékaře s pacientem. Mohla by umět také navrhnout krátkou souhrnnou zprávu pro pacienta díky automatickému rozpoznání důležitých informací. Bude rovněž umět upozornit na možné nežádoucí účinky nebo interakce léků analýzou příznaků a užívaných léků uvedených v textu. Může automatickou analýzou textu navrhovat kódy pro pojišťovnu a může dokonce odkazovat lékaře na související odborné texty nebo doporučení, jak v léčbě postupovat.', img:''},  
    e_letter : {text: 'EKG sleduje elektrickou aktivitu srdce a dokáže odhalit různé choroby. Automatická analýza EKG se v medicíně používá už mnoho let. Postupně se ovšem zapojují i techniky umělé inteligence, které dokáží upozornit i na velmi drobné změny v EKG záznamu.<br><br>Umělá inteligence již například dokáže odhalit riziko arytmie (tedy nepravidelného srdečního rytmu) i u pacienta, který ve chvíli vyšetření zrovna žádnou arytmii nemá. To může být zásadní třeba pro léčbu cévních mozkových příhod. Ty mají často mají svůj původ právě v arytmii a u některých pacientů může být tak zřídkavá, že se ji nedaří na krátkých ambulantních EKG záznamech zachytit.<br><br>Dalším příkladem úspěchu umělé inteligence může být včasný záchyt závažné srdeční choroby čerstvých maminek. Tuto takzvanou peripartální kardiomyopatii odhalí umělá inteligence pomocí EKG záznamu u dosud zdravých těhotných žen.',  img:''},  
    f_letter : {text: 'Pokud se něčeho chorobně bojíte, je možné, že časem vám k překonání nepříjemné fobie pomůže šikovný a moderní psychiatr právě díky zapojení virtuální reality a umělé inteligence.<br><br>Ukazuje se, totiž že část pacientů s různými fobiemi příznivě reaguje na postupné a bezpečné vystavování danému podnětu, třeba pavoukům. Celé jedno moderní odvětví psychiatrie se pak zabývá tím, že si pacienti zkoušejí kontakt s tím, čeho se bojí, ve virtuální realitě. Jedná se o virtuální expoziční terapii, anglicky „virtual reality exposure treatment“. Takový virtuální kontakt s pavouky je bezesporu velmi bezpečný. Ale ani tak nemusí být každému příjemný. Vytipovat, kteří pacienti budou na takovou terapii reagovat příznivě, není jednoduché. Uplatňují se zde metody strojového učení, které berou v potaz celou škálu různých parametrů včetně anamnézy, výsledků klinických vyšetření, zobrazovacích metod, genetiky a podobně.',   img:''}, 
    g_letter : {text: 'Genetika je složitý, ale velmi zajímavý obor. Vypadá to, že i zde bude umět umělá inteligence pomoci. Bude třeba umět snadněji hledat souvislosti mezi mutacemi v genech a chorobami. Už dnes se ukazuje, že by umělá inteligence mohla na základě získaných dat odhadnout, zdali daného pacienta ohrožuje nějaká dědičná choroba, případně zda má nějaké genetické předpoklady k vyššímu riziku vývoje civilizačních chorob, krvácivých stavů či naopak krevních sraženin a podobně.<br><br>Další kapitolou umělé inteligence zřejmě bude poradenství nastávajícím rodičům, kteří chtějí znát riziko dědičných chorob pro svého potomka. Umělá inteligence, přesněji tedy strojové učení, které se v těchto úkolech používá, je totiž ve své podstatě velmi prakticky a efektivně použitou statistikou. A statistiku genetika už dávno používá, čímž má k využití umělé inteligence ideální východisko.',    img:''},
    h_letter : {text: 'Znáte někoho s naslouchadlem? I když je to užitečný nástroj, často způsobuje i potíže. Naslouchadlo totiž zesiluje i ruchy, občas píská a někdy svéhlavě nespolupracuje. To je ovšem případ „obyčejných“ naslouchadel.<br><br>Nedoslýchavým a neslyšícím lidem umí v tomto případě umělá inteligence pomoci již dnes. Pokročilejší naslouchadla využívají techniky umělé inteligence k vylepšení zesilovaného zvuku a k potlačení zbytečných okolních ruchů. Zatímco cinkání lžic v kavárně je lepší potlačit, aby bylo lépe rozumět rozhovoru, pád padesátikoruny je naopak vhodné uslyšet. S tím si umělá inteligence vcelku hravě poradí.<br><br>Dalším šikovným použitím umělé inteligence je automatický přepis mluveného slova do textu, tedy automatická tvorba titulků, případně dokonce do animované znakové řeči (tzv. speech-to-sign). Jakmile se tyto techniky rozšíří, jistě zlepší kvalitu života lidem s postižením sluchu.',   img:''},
    i_letter : {text: 'Impotence, tedy v užším smyslu porucha erekce, může mít spousty příčin. Od psychických, přes vliv léků, hormonální poruchy, choroby nervů nebo cév až po traumata. Zatím se zkoumá, zda by při posuzování všech možných příčin mohla pomoci i umělá inteligence. Ukazuje se, že při dostatečném množství dat může umělá inteligence poukázat na pravděpodobnou příčinu poruchy erekce a navrhnout možnou léčbu.<br><br>V jiných případech se umělá inteligence uplatňuje při vývoji nových léků či při automatickém hodnocení provedených vyšetření (například zobrazovacích metod nebo záznamů elektrické aktivity kavernózních těles).<br><br>V této problematice je ale výzkum teprve v počátcích.',   img:''},
    ch_letter : {text: "", img:''},
    j_letter : {text:"Játra jsou důležitá továrna našeho těla. Někdy se ae něco zvrtne a najednou se na preventivní prohlídce dozvíte, že máte  špatné jaterní testy. Může za to infekční žloutenka, alkohol, choroba nebo „jen“ nesprávný životní styl? Někdy to definitivně odhalí až odběr vzorku jater tenkou jehlou přes kůži (tedy tzv. biopsie jater).<br><br>Existuje však několik studií, které trénují modely strojového učení na diagnostiku jaterních onemocnění bez nutnosti biopsie. Pomocí velké sady různých laboratorních nálezů, faktorů životního stylu a dalších parametrů mnoha pacientů může pak umělá inteligence odhadnout, jaká je s největší pravděpodobností příčina zvýšení jaterních testů u daného konkrétního pacienta.", img:''}, 
    k_letter : {text:"Znáte někoho, kdo nemá ani jedno mateřské znaménko? Různé nálezy a útvary na kůži se týkají každého z nás. Nadto žijeme vystaveni slunečnímu záření, které může na kůži dělat trvalé změny.<br><br>Zkoumají se možnosti, zda by mohla umělá inteligence odhadnout, zda je některé znaménko na kůži podezřelé nebo ne. Chytrý telefon s fotoaparátem už má většina zdejší populace, takže se docela nabízí šance vytvořit aplikaci, která by dokázala hodnotit vyfocená znaménka. Výzkumy vypadají slibně, zatím však žádná aplikace nedosáhla tak závratných výsledků, aby mohla být doporučena k plošnému využívání. Nicméně už existují různé nástavce na chytrý telefon, které kvalitou zobrazení napodobují dermatoskop, tedy profesionální přístroj na vyšetření kůže.", img:''}, 
    l_letter : {text:"Vývoj léčiv je nákladná a zdlouhavá práce. Zde se ukazuje vhodné pole pro použití technik umělé inteligence. Na základě dostatečného množství dat mohou modely strojového učení navrhnout nadějnou molekulu, odhadnout vhodný výrobní proces, vytipovat reakce dané molekuly s ostatními látkami, posoudit vhodnost kombinace s jinými léčivy, nebo dokonce pro již známá léčiva navrhnout nové způsoby použití. To nic nemění na tom, že spousta práce s výrobou, testováním a schvalováním léčiv zůstane odborníkům, nicméně umělá inteligence by mohla urychlit nalézání nových molekul, nových výrobních procesů nebo aspoň nových indikací pro již známé látky. Některé fáze vývoje léčiv tak budou rychlejší a snadnější.", img:''}, 
    m_letter : {text:"Mozek je jedním z klíčových orgánů našeho těla a dotýkáme se jej hned v několika kapitolách tohoto vzdělávacího modulu: umělá inteligence umí pomoci s Alzheimerovou chorobou, Parkinsonovou chorobou, cévními mozkovými příhodami a podobně.<br><br>Zde se zastavíme u nádorů mozku. Dobře natrénovaný model strojového učení dokáže automaticky „vyladit“ a vyčistit snímky zobrazovacích vyšetření (jako je CT, magnetická rezonance, PET-CT atd.), odhadnout typ případného nádoru a testuje se také možnost stanovení vhodné léčby a prognózy u pacienta s daným typem onemocnění. Samozřejmě stejně jako v jiných oblastech ani zde tyto odhady nevaří umělá inteligence „z vody“, ale při tvorbě modelu jí musíme poskytnout velké množství dostupných dat včetně snímků od mnoha a mnoha pacientů.", img:''}, 
    n_letter : {text:"Slabozrací a nevidomí se v současném světě potýkají se spoustou překážek. Existuje několik projektů, které chtějí těmto lidem usnadnit orientaci v prostoru. Jsou to buď „chytré brýle“ nebo „chytré hole“, které pomocí kamery nebo dalších senzorů (například ultrazvuku) snímají okolí daného člověka a pomocí vibrací nebo syntetizátoru řeči upozorňují nositele na překážku v trase, případně nějakým signálem rovnou nositeli včas oznamují nutnou změnu směru chůze.<br><br>Senzory takového „chytrého“ zařízení totiž dokáží zachytit i překážky, které by slabozraký či nevidomý člověk pomocí klasické bílé hole nezachytil. Jedná se hlavně o menší překážky při zemi nebo naopak překážky nad úrovní kolen či pasu.", img:''}, 
    n_soft_letter : {text:"", img:''}, 
    o_letter : {text:"Oblast ošetřovatelství je velmi široká, zjednodušeně se týká pomoci a péče o pacienty. Ošetřovatelky a zdravotní sestry by jednou mohly mít zjednodušenou práci díky umělé inteligenci. Jsou vyvíjeny aplikace, které jsou schopné automaticky vypočítat různá rizika daného pacienta, zhodnotit jeho celkový stav, propočítat jeho nutriční a další parametry a navrhnout další postup. Pomoc se může týkat i ošetřování ran, kde umělá inteligence zhodnotí postup hojení nebo upozorní na rozvoj komplikací – třeba automatickým zpracováním fotografií rány pomocí tzv. hlubokého učení.<br><br>Samostatnou kapitolou jsou pak roboti využívaní v ošetřovatelství. Jednak se jedná o konverzační asistenty, jednak mohou roboti pomoci i při náročnějších každodenních úkonech, mohou dokonce asistovat při rehabilitaci a podobně.", img:''}, 
    p_letter : {text:"Parkinsonova choroba je onemocnění spojené s úbytkem určitých nervových buněk a nervových přenašečů, čímž dochází k tomu, že pacient není schopen ovládat svůj pohyb. Choroba se zatím nedá vyléčit, ale dá se účinně zbrzdit její vývoj. Klíčová je včasná diagnostika a správná léčba.<br><br>Testují se „chytré“ aplikace, které z pohybu, výrazu tváře a z klinicky získaných informací o zdravotním stavu pacienta umí vyslovit podezření na riziko vzniku Parkinsonovy choroby. Tedy upozorní na možný vývoj choroby ještě dřív, než má pacient viditelné potíže. To je včasná diagnostika a je ohromně důležitá.<br><br>V léčbě umí umělá inteligence pomoci například zhodnocením vhodného léčebného postupu. Součástí léčby je i rehabilitace, přičemž se zkoumají možnosti cvičení asistované různými robotickými systémy. Zatím je vývoj teprve na počátku, ale každá pomoc se u této choroby počítá.", img:''}, 
    q_letter : {text:"", img:''}, 
    r_letter : {text:"Radioterapie je léčba zářením a využívá se zejména u nádorových onemocnění. Plánování správné dávky a objemu ozařování je ovšem velmi složité. Často potřebujeme dodat potřebnou dávku záření do oblasti nádoru, přičemž musíme ochránit okolní tkáně, které mohou být k záření také velmi citlivé. Jedná se například o důležité orgány, nervy nebo cévy. Ozáření těchto zdravých tkání může mít neblahé následky pro zdraví i život pacienta.<br><br>Plánování radioterapie vyžaduje trpělivost a spoustu času. Jde o ideální úkol, který budeme moci svěřit umělé inteligenci. Ta dokáže velmi přesně propočítat, v jaké dávce a jakým směrem se má záření aplikovat, aby nedošlo k poškození zdravých tkání a zároveň aby se do oblasti nádoru dostala dostatečná léčebná dávka. Úkol, který odborníkovi zabere hodiny práce a pečlivých propočtů, by mohla umělá inteligence zvládnout vyřešit během několika minut či sekund.", img:''}, 
    r_soft_letter : {text:"Už jste někdy drželi bobříka mlčení? Řeč je pro lidi ohromně důležitá. Jsou však choroby, které řeč znesnadňují. O onemocněních sluchu mluvíme v kapitole o hluchotě, tady se zaměříme na tvorbu řeči a hlasivky.<br><br>Pacienti s onemocněním hrtanu (např. nádorovým) mají určité riziko, že přijdou o hlas. Existují aplikace, které se dokáží natrénovat posloucháním pacientovy řeči. Pokud po operaci nebo kvůli onemocnění samotnému přijde pacient o hlas, může pak „mluvit“ díky syntetizátoru řeči. Stačí zadat text a syntetizátor jej pak pacientovým vlastním hlasem „přečte“. Pro mnohé lidi je to ohromný dar, hlas je totiž nedílnou součástí naší identity.", img:''}, 
    s_letter : {text:"Starých lidí přibývá a péče o ně bude jistě jedním z úkolů umělé inteligence. Vyvíjejí se různá chytrá zařízení a aplikace, která umožňují daného člověka kontrolovat, zda užívá pravidelně léky nebo zda nepotřebuje pomoc. Kromě toho, že daný člověk si může v případě indispozice sám zavolat pomoc, umí umělá inteligence i zhodnotit jeho aktivitu a případně spustit volání o pomoc sama. Většinou se k tomu používají čidla pohybu, „chytré“ náramky měřící puls a odhadující krevní tlak, kamery s automatickým zpracováním obrazu (počítačovým viděním) a podobně.<br><br>Někdy úkol automaticky zavolat o pomoc není tak jednoduchý, jak by se mohlo zdát. Je třeba rozdíl, jestli daný člověk zůstane hodinu ležet na gauči, nebo zda se ocitne ležící na chodbě. Umělá inteligence tudíž musí počítat s mnoha různými parametry a rozhodovat se komplexně.", img:''}, 
    s_soft_letter : {text:"", img:''}, 
    t_letter : {text:"Určitě vám už někdo někdy měřil krevní tlak. Třeba na preventivní prohlídce u praktického lékaře. Pamatujete si tu nafukující se manžetu na paži?<br><br>Možná máte chytré hodinky nebo alespoň máte ve svém okolí někoho, kdo je nosí. Některé modely také dokáží měřit krevní tlak – a to dokonce bez té nafukující se manžety! Jak to funguje? Vlastně jde jen o odhad tlaku a jsou na to různé postupy. Některé hodinky měří jen zpoždění mezi elektrickou aktivitou srdce a následným pulzem na zápěstí. Některé pokročilejší hodinky k tomu ale mohou využívat i různé techniky umělé inteligence. Krevní tlak pak odhadují podle spousty měřených parametrů a třeba se i průběžně učí, jak vypadá běžná pulzová vlna, tepová frekvence nebo další parametry daného nositele hodinek. Odhadovaný krevní tlak hodinek pak velmi dobře odpovídá tomu, co by naměřil lékař v ambulanci.", img:''}, 
    t_soft_letter : {text:"", img:''}, 
    u_letter : {text:"Úzkost, tedy nepříjemný pocit strachu či ohrožení bez konkrétního důvodu, není nic výjimečného. Úzkostí trpí asi jeden člověk ze čtyř. K léčbě patří hlavně psychoterapie nebo užívání léků. Co ale dělat, když se k psychoterapeutovi nedostanete?<br><br>Několik skupin výzkumníků testuje různé virtuální formy léčby. Nadějně vypadají speciálně naprogramovaní chatboti, kteří dokáží úzkost a depresi rozpoznat na základě krátkého rozhovoru. Někteří chatboti se dokonce testují coby doplňková léčba k psychoterapii, neboť žádný psycholog nemůže být k dispozici 24 hodin denně. Výsledky vypadají vcelku slibně, uvidíme, co budoucnost přinese.", img:''}, 
    v_letter : {text:"Boj s viry je svízelný. Vidíme to koneckonců i v dnešní době. Umělá inteligence se dokáže v tomto ohledu uplatnit již dnes. Jednak usnadňuje vývoj nových léčiv a vakcín (například odhadováním, která látka by mohla být proti dané infekci účinná, nebo třeba odhadováním, jak se budou chovat různé látky a proteiny při vzájemném kontaktu) a jednak umí pomoci s diagnostikou, zhodnocením rentgenových snímků, prognózou vývoje u infikovaného jedince i prognózou vývoje onemocnění v populačním měřítku.    ", img:''}, 
    w_letter : {text:"", img:''}, 
    x_letter : {text:"", img:''}, 
    y_letter : {text:"", img:''}, 
    z_letter : {text:"Oči jsou velmi citlivý orgán. Zejména sítnici může poškodit spousta chorob, které jsou v populaci vcelku běžné: třeba cukrovka nebo vysoký krevní tlak. Každý pacient s takovou chorobou by měl zhruba jednou ročně přijít na kontrolu očního pozadí, kdy lékař speciálním přístrojem vyfotí sítnici a zkontroluje, zdali tam neprobíhá nějaký chorobný proces. Ve většině případů jde o rutinní vyšetření, se kterým už umí pomoci umělá inteligence. Pomocí technik strojového učení dokáže roztřídit obrázky sítnic na ty, které jsou s největší pravděpodobností zdravé, a na ty, kde se velmi pravděpodobně děje něco chorobného.<br><br>Velký užitek z toho mají zejména země, kde není dostatek očních lékařů a zároveň je tam spousta pacientů. Příkladem je třeba Indie, kde sítnici pacientům fotí vyučený oční technik a lékaři prohlížejí přednostně patologické obrázky roztříděné umělou inteligencí.<br><br>Nicméně i v Česku se můžete na předních pracovištích setkat s tím, že vaši sítnici analyzuje umělá inteligence. Pracuje na tom česká firma ve spolupráci s Karlovou univerzitou.", img:''}, 
    z_soft_letter : {text: '',   img:''},

}
console.log(diacritics)

function start(){
    restart()
    let name = nameEl.value;
    name = name.toLowerCase()
    let wordArray = name.split("");
    
    for (let i=0; i<wordArray.length; i++) {
        console.log(wordArray[i])
        if (wordArray[i] === 'ň') {
            wordArray[i] = 'n_letter'
        
        } else if ( wordArray[i] === 'ě') {
            wordArray[i] = 'e_letter'

        } else if (wordArray[i] === 'š') {
            wordArray[i] = 's_soft_letter'

        } else if (wordArray[i] === 'č') {
            wordArray[i] = 'c_soft_letter'

        } else if (wordArray[i] === 'ř') {
            wordArray[i] = 'r_soft_letter'

        } else if (wordArray[i] === 'ž') {
            wordArray[i] = 'z_soft_letter'

        } 
        // else if (wordArray[i] === 'ť') {
        //     wordArray[i] = 't_soft_letter'

        // } else if (wordArray[i] === 'ď') {
        //     wordArray[i] = 'd_soft_letter'

        // } 

        else if (wordArray[i] === 'ť') {
            wordArray[i] = 't_letter'

        } else if (wordArray[i] === 'ď') {
            wordArray[i] = 'd_letter'

        } 

        else if (wordArray[i] === 'ý') {
            wordArray[i] = 'y_letter'

        } else if (wordArray[i] === 'á') {
            wordArray[i] = 'a_letter'

        } else if (wordArray[i] === 'í') {
            wordArray[i] = 'i_letter'

        } else if (wordArray[i] === 'é') {
            wordArray[i] = 'e_letter'

        } else if (wordArray[i] === 'ú') {
            wordArray[i] = 'u_letter'

        } else if (wordArray[i] === 'ů') {
            wordArray[i] = 'u_letter'

        } else if (wordArray[i] === 'ó') {
            wordArray[i] = 'o_letter'

        } else  {
            wordArray[i] += '_letter'
        }
    }
    // console.log(name)
    console.log(wordArray)
    
    Array.from(alphabet.children).forEach( card => {

        card.style.backgroundColor = colors[count % 7]
        card.dataset.ourcolor = colors[count % 7]
        Array.from(card.children).forEach ( child => {
            child.dataset.ourcolor = colors[count % 7]
        })
        count += 1

        if (!(wordArray.includes(card.id))) {
            card.style.display = 'none'
        }

        }
    )
}

function restart() {

    Array.from(alphabet.children).forEach( card => {
        card.style.display = 'flex'
        })

}





function show(e) {
    
    let our_color = window.getComputedStyle(e.target).getPropertyValue("background-color");
    our_color = e.target.dataset.ourcolor
    console.log(e.target)
    if (!(e.target.dataset.ourcolor)) {
        window.getComputedStyle(e.target.parentElement).getPropertyValue("background-color");
    }

    // console.log(our_color)
    // console.log('show', e.target)

    cover.style.backgroundColor = our_color
    cover.style.display = 'flex'

    if (content[e.target.dataset.id].img) {
        cover.innerHTML = `<img src="${content[e.target.dataset.id].img}"> <p>${content[e.target.dataset.id].text}</p>`

    } else {
        cover.innerHTML = `<p>${content[e.target.dataset.id].text}</p>`
    }

}

function unshow(e) {
    // console.log('Done')
    cover.style.display = 'none'
}

function compoundWord() {
    pass
}


function attachColors() {
    
    Array.from(alphabet.children).forEach( card => {
        card.style.backgroundColor = colors[count % 6]
        card.dataset.ourcolor = colors[count % 6]

        Array.from(card.children).forEach ( child => {
            child.dataset.ourcolor = colors[count % 6]
        })
        // console.log(count, count % 6 - 1)
        count += 1

        card.addEventListener('click', show)
        }
    )
}





attachColors()

