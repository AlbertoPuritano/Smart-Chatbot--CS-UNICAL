var StringUtils = org_turbocommons.StringUtils;
const arr = [
  [["ciao", "hello", "hey", "buon giorno", "salve", "buongiorno", "buonasera", "buona sera", "buon pomeriggio", "hola", "salute"], ["Ciao", "Salve", "Salute a te", "Welcome!", "Benvenuta/o"]],
  [["aiuto", "help"], ["Ti aiuto io, puoi dirmi cosa ti serve!", "Sono qui per aiutarti, chiedi pure."]],
  [["grazie"], ["Prego, se hai altre domande puoi continuare a scrivere.", "Al tuo servizio! :)"]],
  [["come stai"], ["Ho qualche bit fuori posto! :)", "Sto bene, ho solo qualche bit fuori posto...", "Ho la temperatura della CPU alta :("]],
  [["come ti chiami", "il tuo nome", "chi sei"], ["Mi chiamo Roby, sono l'assistente del corso di studi in informatica!"]],
  [["laurea"], ["Cerchi informazioni sulla seduta di laurea o sulla consegna della tesi di laurea?"]],
  [["seduta di laurea", "seduta laurea", "seduta"], ["Le informazioni sulle sedute di laurea sono disponibili a questo <a href=\"www.google.it\">link</a>."]],
  [["temi di tesi", "temi tesi"], ["Per i temi di tesi contatta le professoresse/i professori con cui intendi realizzare la tesi."]],
  [["laurearmi", "laurearsi", "sulla laurea", "informazioni laurea", "info laurea", "tesi", "consegna tesi"], ["In questa pagina <a href=\"www.google.it\">link</a> trovi il vademecum sulla realizzazione/consegna della tesi e sui passi da seguire per la laurea."]],
];
const imSorry = [
    "credo di non aver capito.",
    "mi dispiace, credo di non aver afferrato il concetto.",
    "scusami, potrei sembrare intelligente ma in realtà spesso sono un pò tonto.",
    "mi sa che non ho capito, scusami ma a volte il mio programmatore sbaglia l'ordine in cui mette gli 0 e gli 1.",
    "vorrei tanto capire di cosa hai bisogno in questo momento ma purtroppo il mio programmatore è uno di quelli che hanno passato Fondamenti di Informatica con una considerevole dose di fortuna.",
    "vorrei tanto che il mio programmatore avesse studiato abbastanza per poterti capire meglio.",
    "sarebbe stato fantastico se il mio programmatore non si fosse limitato a studiare per il 18.",
    "a volte vorrei che il mio programmatore si impegnasse di più a farmi sembrare intelligente.",
    "mi sa che non ho capito bene."
];
const repeat = [
    "Potresti spiegarti meglio?",
    "Potresti riformulare la domanda?",
    "Potresti chiedermelo in un altro modo?",
    "Potresti dirmelo in un altro modo?",
    "Potresti dirmelo in un modo leggermente diverso?",
    "Potresti chiedermelo in un modo leggermente diverso?",
];
const gotcha= [
    "Capito!",
    "OK!",
    "Va bene!",
    "Afferrato!",
    "D'accordo!",
    "Perfetto!",
    "No problem!"
]
const yes= [
    "Ottimo!",
    "Lieto di aiutarti!",
    "Mi fa piacere!",
    "Felice di aiutarti!",
    "Fantastico!",
    "Perfetto!"
]
const no= [
    "mi dispiace, cerco di fare del mio meglio 😭",
    "mi dispiace, puoi concedermi un altro pò di pazienza?"
]
const didI= [
    "Ti sono stato d'aiuto?",
    "Era quello che cercavi?",
    "Sono stato utile?",
    "Era quello che stavi cercando?",
    "Ho chiarito i tuoi dubbi?"
]

const iWasSaying= [
    "Prima dicevo",
    "Stavo dicendo",
    "Dicevo"
]

const howAreYou=[
    "Ho qualche bit fuori posto! 😙 ",
    "Sto bene, ho solo qualche bit fuori posto... 😅 ",
    "Ho la temperatura della CPU alta 😓 "
]

const hi= [
    "Ciao",
    "Salve",
    "Salute a te",
    "Welcome!",
    "Benvenuta/o"
]
function addChat(input, result) {
    mainDiv = document.getElementById("main");
    if (input!=null)
        mainDiv.innerHTML += `
        <div class="card user">
        <div class="card-body">
            ${input}
        </div>
        </div>
        `;
    if (result!=null)
        mainDiv.innerHTML += `
        <div class="card bot">
        <div class="card-body">
            ${result}
        </div>
        </div>
        `;
}

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input")
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
        }
    });
    mainDiv = document.getElementById("main");
    mainDiv.innerHTML += `<div class="card bot h-100">
    <div class="row no-gutters">
        <div class="col-sm-5">
            <img class="" src="bot.png" alt="Card image cap">
        </div>
        <div class="col-sm-7">
            <div class="card-body">
                Ciao, sono l'assistente del corso di studi in informatica, piacere Dom! Con chi ho il piacere di parlare?
            </div>
        </div>
    </div>
    `;
});



function output(input) {
    let result=null;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    if (text.length===0)
        return;
    addChat(input,null);
    if (currentNode===null)         //first iteration
    {
        name= checkName(text);
        result= "Bene " +"<strong>"+ name +"</strong>"+ ", di cosa hai bisogno? " + node0.getSolution();
        currentNode=node0;
    }
    else                    //every other iteration
    {
        if (text==="aiuto")                 //help
            result=currentNode.getSolution();
        if (text.includes("grazie") || text.contains("ringrazio"))      //thanking
            result= "Prego, se hai altre domande puoi continuare a scrivere.\", \"Al tuo servizio! 😊";
        if (result===null)
            result=searchNodes(text);           //search into current node children
        if (result===null)
            result= searchEndpoints(text);          //search endpoints (direct answers)
        if (userMoreLost && result!=null)
            userMoreLost=false;
        if (result===null) {
            notFound=true;
            result = "<strong>" + name + "</strong>" + ", " + imSorry[Math.floor(Math.random() * imSorry.length)] + " " + repeat[Math.floor(Math.random() * repeat.length)];
        }
    }
    addChat(null, result);
    if (notFound) {
        repromptUser();
        notFound = false;
    }
    window.scrollTo(0,document.body.scrollHeight);
}
function checkName(text){
    let dictionary= new Set(['abaco','abbondanza','abbondanzia','abbondanzio','abbondazio','abbondia','abbondina','abbondio','abdelkrim','abdellah','abdenago','abdon','abdone','abela','abelarda','abelardo','abele','abelina','abelino','aberardo','abilio','abondio','abrama','abramina','abramino','abramo','accorso','accursa','accursia','accursio','accurso','acheropita','achilla','achille','achillea','achilleo','achillina','achiropita','acilia','acilio','acquisto','acrisio','ada','adalberta','adalberto','adalciso','adalgerio','adalgisa','adalgisio','adalgiso','adalia','adalinda','adalindo','adalio','adalisa','adama','adamaria','adamello','adamina','adamino','adamo','adastro','addamiano','addario','addiego','addolorata','addolorato','addonizio','adea','adela','adelaida','adelaide','adelaido','adelasia','adelasio','adelca','adelchi','adelchio','adelcisa','adelco','adele','adelelma','adelelmo','adelfa','adelfina','adelfino','adelfio','adelfo','adelia','adelina','adelinda','adelindo','adelino','adelio','adelisa','adelisia','adelisio','adelita','adelma','adelmaro','adelmina','adelmino','adelmira','adelmiro','adelmo','adelo','adema','ademara','ademaro','ademia','ademina','ademio','ademo','aden','adeo','adeodata','adeodato','aderita','aderito','adermo','adia','adige','adigina','adigrat','adilia','adilio','adimaro','adimiro','adina','adino','adinolfa','adinolfo','adio','adionilla','adiuto','adiutore','admeto','ado','adolfa','adolfina','adolfino','adolfo','adolfo','pietro','adona','adone','adonella','adonello','adoranda','adorando','adorata','adorato','adorna','adornino','adorno','adrasta','adrasto','adreano','adria','adrian','andrei','petre','adriana','adriano','adrienn','adrio','adua','aduana','aduilio','aduino','aduo','affortunata','affortunato','afra','africa','africana','africano','africo','afro','afrodisio','afrodite','agabio','agabito','agamennone','agape','agapio','agapito','agata','agatella','agatina','agatino','agato','agatocle','agatoclia','agatone','agazia','agazio','agea','agenore','ageo','agesilao','aggeo','agide','agilulfo','aglaia','agnella','agnello','agnese','agnesina','agnesio','agnieszka','ewa','agnieszka','irena','agostina','agostino','agricola','agricolo','agrippina','agrippino','agrisio','aguinaldo','ahmed','aiace','aica','aicardo','aida','aide','aido','aimo','aimone','airaldo','aishe','aiuto','ala','aladina','aladino','alaghiera','alaghiero','alam','alamanno','alamiro','alan','alarico','alba','albana','albania','albanino','albano','albarosa','alberica','alberice','alberico','alberigo','alberino','alberta','albertina','albertino','alberto','albina','albino','albio','albionte','albizio','albizzo','albo','alboina','alboino','alcea','alceo','alcesta','alceste','alcestina','alcesto','alcibiade','alcida','alcide','alcidio','alcido','alcina','alcino','alcisa','alciso','alcmena','alda','aldeandra','aldebrando','aldegarda','aldegardo','aldegonda','aldegondo','aldemara','aldemaro','aldemia','aldemina','aldemio','aldemira','aldemiro','aldemo','alderano','alderica','alderice','alderico','alderigi','alderigo','alderina','alderino','alderio','aldero','aldesina','aldesino','aldesira','aldezza','aldighiero','aldimaro','aldimiro','aldina','aldino','aldisio','aldiviero','aldo','aldobranda','aldobrandino','aldobrando','aldoino','aldomiro','aldorino','aldovina','aldovino','alduccio','alduina','alduino','alealdo','aleandra','aleandro','alearco','alearda','aleardo','alemanno','alemaro','aleramo','alerano','alerino','alesia','alesio','alessandra','alessandria','alessandrina','alessandrino','alessandro','alessi','alessia','alessina','alessio','aletta','alexandra','alexandre','alfa','alfano','alfea','alfeo','alferia','alferino','alferio','alfero','alfia','alfie','navar','alfiera','alfiere','alfieri','alfierina','alfierino','alfiero','alfina','alfino','alfio','alfo','alfonsa','alfonsina','alfonsino','alfonso','alfonza','alfonzina','alfonzo','alfreda','alfredina','alfredino','alfredo','alfrida','alfride','algemiro','algeo','algeri','algeria','algerina','algerino','algero','alghero','alghisio','algia','algimiro','algisa','algisio','algiso','aliberto','alibrando','alice','alicia','alicio','alida','alide','alidea','alideo','alido','alidora','alidoro','alighiera','alighieri','alighiero','aligi','aligio','alimo','alina','alinda','alindo','alino','alipia','alipio','aliprando','alisa','alisia','alisio','aliso','aliviero','allegra','allegrina','allegrino','allegro','alma','almarosa','almeria','almerica','almerico','almerigo','almerina','almerinda','almerindo','almerino','almerio','almeris','almiero','almina','almino','almira','almirante','almiro','almo','alodia','aloisa','aloise','aloisio','alonzo','alpa','alpidio','alpiniano','alpino','alpinolo','alpo','altabella','altavilla','altavillo','altea','altemio','alteo','altera','alteria','alterino','alterio','altero','altieri','altiero','altimiro','altobello','altobrando','altomare','altomira','altomiro','altorino','alvara','alvarina','alvarino','alvario','alvaro','alvezio','alvisa','alvise','alvisia','alvisio','alviso','amabile','amabilia','amabilio','amaddio','amadea','amadeo','amadia','amadio','amalfa','amalfia','amalfio','amalfo','amalia','amalio','amanda','amandina','amandino','amando','amante','amantina','amantino','amanto','amanzia','amanzio','amarando','amaranta','amaranto','amarilda','amarilli','amarillide','amario','amata','amatino','amato','amatore','amatrice','amatuccio','amberta','amberto','ambra','ambretta','ambro','ambrogia','ambrogina','ambrogino','ambrogio','ambrosia','ambrosina','ambrosino','ambrosio','amedea','amedeo','ameglia','ameglio','amelia','amelina','amelino','amelio','amelita','america','americo','ameriga','amerigo','amerina','amerinda','amerindo','amerino','amerio','amero','amica','amico','amilcara','amilcare','amina','aminda','amino','aminta','aminto','amintore','amleta','amleto','amodeo','amodia','amodio','amonasro','amonastro','amore','amorina','amorino','amorosa','amoroso','amos','ampeglio','ampelia','ampelio','ampellio','amperio','ampilio','amsicora','amulia','amulio','ana','paula','ana','rita','anabel','anacleta','anacleto','anania','ananio','anastasia','anastasio','anatolia','anatolio','anca','ancella','anchise','ancilla','ancillo','anco','ancomarzio','anda','andalusa','andaluso','andina','andino','ando','andra','andrea','andreana','andreano','andreatta','andreea','daniela','andreina','andreino','andreola','andreolo','andres','gregorio','andretta','andrettina','andreuccia','andreuccio','andrietta','andrietto','andro','andromaca','andronico','anella','anellina','anellino','anelusco','angela','angelamaria','angelantonio','angelarosa','angeletta','angelica','angelico','angelina','angelino','angelita','angelo','angelomaria','angilberto','angiola','angiolamaria','angioletta','angioletto','angiolina','angiolino','angiolo','aniceta','aniceto','anicetta','aniella','aniello','anita','anito','anna','anna','maria','anna','rosa','annabella','annachiara','annaflavia','annagrazia','annalaura','annalia','annalisa','annaluisa','annamaria','annarella','annarita','annarosa','anne','marie','luce','annella','annetta','annette','annettina','annetto','annibala','annibale','annibalina','annico','annina','annino','annio','annita','annito','anno','annuccia','annuccio','annuncia','annunciata','annunciato','annuncio','annunzia','annunziata','annunziatina','annunziato','annunzio','anrico','ansalda','ansaldo','ansano','anselma','anselmina','anselmino','anselmo','ansovino','anspertina','ansperto','ansuina','ansuino','anta','antea','antenora','antenore','anteo','antera','anterino','anterio','antero','antigona','antigone','antigono','antima','antimina','antimino','antimo','antioca','antioco','anto','antonangelo','antonella','antonello','antonetta','antonetto','antonia','antonia','ivanova','antoniano','antonica','antonico','antonietta','antonietto','antonilla','antonillo','antonina','antonino','antonio','antonio','paolo','antonita','antoniuccio','antonmaria','antuono','anwar','anzia','anzio','aonio','apollinare','apollo','apollonia','apollonio','apostolo','apparizio','appia','appiano','appio','appioclaudio','aprile','aprilia','aprilio','aquila','aquilante','aquilina','aquilino','aquilio','arabella','aralda','araldo','arames','aramis','arbace','arcadio','arcangela','arcangelina','arcangelo','arcangiolo','arceo','archelao','archibaldo','archimede','archita','arcibaldo','arcide','arcidio','arcido','arcisa','arcisio','arciso','arconte','arda','ardemaro','ardengo','ardingo','ardino','ardita','ardito','ardo','ardoino','ardolino','ardovino','arduilio','arduina','arduino','arduo','arealdo','arete','argante','argantina','arge','argea','argemiro','argenta','argentina','argentino','argento','argenzia','argeo','argia','argimiro','argio','argo','aria','arialda','arialdo','ariana','arianna','arianno','ariano','ariberto','ariela','ariele','ariella','ariello','arienzo','arietta','arietto','arimondo','arina','arino','ario','ariola','ariosta','ariosto','aris','aristarco','aristea','aristeo','aristide','aristidina','aristo','aristodema','aristodemo','aristotele','aristotile','arkadiusz','jan','arlesiana','arletta','armanda','armandina','armandino','armando','armanno','armano','armela','armelina','armelinda','armelindo','armella','armellina','armellino','armello','armena','armenia','armenio','armeno','armentina','armerina','armerino','armida','armidio','armido','armildo','armilla','armina','arminda','armindo','arminia','arminio','armino','armirio','armiro','armistizio','arnalda','arnaldina','arnaldo','arnolda','arnoldo','arnolfo','arolda','aroldo','aronne','aronte','arpalice','arriga','arrighetto','arrigo','arriguccio','arsenia','arsenio','arseno','arsilia','arsilio','artaserse','artemia','artemide','artemidio','artemino','artemio','artemisia','artemisio','artemo','artenia','artenice','artenio','arterio','artico','artide','artiero','artimina','artimino','artimio','artura','arturina','arturino','arturo','arzelio','arzenio','ascania','ascanio','ascensa','ascensina','ascenso','ascenza','ascenzina','ascenzio','ascenzo','asclepiade','asclepio','asdrubale','asia','asiago','asmara','asmarino','asmaro','asmerino','aspasia','aspasio','aspromonte','assalonne','assenzio','assuera','assuero','assunta','assuntina','assuntino','assunto','aster','asteria','asterino','asterio','astero','astolfo','astore','astorino','astorre','astra','astrea','astro','asvero','atala','atalia','atalo','atanasio','atea','atena','atene','ateno','ateo','athos','atos','attala','attalo','attanasio','attico','attila','attilia','attiliana','attiliano','attilio','atto','attone','audace','audenzia','audenzio','audisio','augusta','augustale','augustina','augustino','augusto','aulo','aura','aurea','aurelia','aureliana','aureliano','aurelio','aureo','auretta','aurino','auro','aurora','ausilia','ausilio','ausonia','ausonio','aussenzio','ava','avanti','ave','avelia','avelina','avelino','avelio','avellina','avellino','avendrace','aventina','aventino','averaldo','averardo','averina','averino','averio','aviero','avo','avventina','avventino','ayleen','joyce','azad','azaea','azaria','azeglia','azeglio','azelia','azelio','azelma','azia','azio','azolino','azzeglio','azzelino','azzella','azzello','azzio','azzo','azzolina','azzolino','azzurra','azzurrina','azzurrino','azzurro','babila','babilo','bacchisio','baccio','bachisia','bachisio','badoglio','baingia','baingio','balbina','balbino','balda','baldasarre','baldassare','baldassarre','balderico','baldina','baldino','baldo','baldoino','baldovina','baldovino','balduccio','balduina','balduino','balilla','bambina','bambino','bandinello','bandino','banduccio','barbara','barbara','renate','barbarella','barbarina','barbarino','barbaro','barbato','barbera','barberina','barberino','bardilio','bardomiano','barnaba','barsanofio','barsanofrio','bartola','bartolina','bartolino','bartolo','bartolomea','bartolomeo','bartosz','basile','basilea','basileo','basilia','basilico','basilio','basiliola','basilissa','basilla','bassanina','bassano','bassiano','basso','bastiana','bastianina','bastianino','bastiano','batista','battista','battistina','battistino','baudolina','baudolino','beata','beate','anna','margarete','beato','beatrice','belardina','belardino','belardo','belfiore','belisaria','belisario','bella','bellina','bellino','bellisario','bello','beltrame','beltrando','bene','benedetta','benedettina','benedetto','benedikt','georg','benedino','benetto','bengasina','bengasino','beniamina','beniamino','benigna','benigno','benilda','benilde','benildo','benina','benino','benita','benito','benito','dario','benizia','benizio','bennardino','bennardo','benno','beno','benozzo','bensa','benso','bentivoglio','benuccia','benuccio','benvenuta','benvenuto','bepi','beppa','beppe','beppi','beppina','beppino','berarda','berardina','berardino','berardo','berengaria','berengario','berenice','bernadetta','bernadette','bernadetto','bernarda','bernardetta','bernardina','bernardino','bernardo','berniero','bernino','berta','bertilla','bertillo','bertina','bertino','berto','bertoldo','bertrando','besso','betsabea','betta','bettina','bettino','betto','biagia','biagina','biagino','biagio','bianca','biancamaria','biancaneve','biancardo','biancarosa','bianchina','bianchino','bianco','biase','biasino','biasio','bibbiana','bibbiano','bibiana','bibiano','biblide','bice','bicetta','bigio','bina','bindo','bino','bionda','biondina','biondino','biondo','birgitta','bisio','bixio','bizio','blanda','blandina','blandino','blando','bluetta','boerio','bona','bonacata','bonacatta','bonacattu','bonacatu','bonaccorso','bonafede','bonaldo','bonando','bonanno','bonardo','bonaria','bonarina','bonarino','bonario','bonaventura','bonella','bonello','bonfiglio','bonfilio','bonifacio','bonifazio','bonina','bonino','bonito','bono','bonomo','bonuccia','bonuccio','bordino','boris','bortola','bortolina','bortolino','bortolo','bortolomea','bortolomeo','bouchaib','bovio','bovo','braccio','bramo','brandino','brandisio','brandizio','brando','brasile','brasilia','brasilina','brasilino','brasilio','brenna','brenno','breno','brigida','brigidina','brigido','brigitta','brillante','brillantina','brillantino','brizia','brizio','broccola','bruna','brunaldino','brunaldo','brunella','brunellesco','brunello','brunera','brunero','brunetta','brunetto','brunilde','brunildo','brunina','brunino','bruno','brunone','brunoro','bruto','bujar','buonafede','buonaventura','buonfiglio','buono','buovo','cabiria','cabirio','cadira','cadmo','cadore','cadorino','cadorna','cadornino','cadorno','caffieri','caffiero','cafiera','cafiero','caio','cairoli','calcedonia','calcedonio','calfiero','calimero','calista','calisto','callimaco','calliope','callista','callisto','calogera','calogero','calvina','calvino','calvio','calvo','camelia','camilla','camillo','cammillo','canciano','canda','candelora','candeloro','candida','candido','canio','canuto','canziano','canzio','caporetto','cara','cardenio','cardina','carducci','carduccio','carina','carino','cariscopo','carisio','carissima','carissimo','carla','carla','vanesa','carlalberto','carletta','carletto','carlina','carlino','carlo','carlotta','carlottina','carluccia','carluccio','carmela','carmelina','carmelinda','carmelindo','carmelino','carmelio','carmelita','carmelito','carmelo','carmen','carmenio','carmina','carmine','carminella','carminio','carmino','carminuccio','carmosina','caro','carola','carolina','carolino','carolo','carso','cartesio','caruso','casilde','casimira','casimiro','casimirro','cassandra','cassia','cassiana','cassiano','cassio','casta','castenze','castenzio','casto','castolo','castore','castorina','castorino','castrense','castrenza','castrenze','castrenzio','castrenzo','castrese','castruccio','catalda','cataldina','cataldino','cataldo','catalin','augustin','catalina','catarina','catella','catello','catena','cateno','caterina','caterino','catia','catiello','catina','catino','catone','cattalino','catterina','catterino','catulla','catullo','cavallotti','cavour','ceccardo','cecchina','cecchino','cecco','cecilia','cecilio','celerina','celerino','celesta','celeste','celestina','celestino','celesto','celia','celidonia','celidonio','celina','celinia','celino','celio','cellina','cellino','celsa','celsina','celsino','celsio','celso','cenerina','cenerino','censina','censino','censo','cenza','cenzella','cenzina','cenzino','cenzo','cesara','cesare','cesarea','cesareo','cesaria','cesarina','cesarino','cesario','cesarita','cesco','cesella','cesello','cesidia','cesidio','cesina','cesino','cesio','cesira','cesirio','cesiro','cetteo','cettina','chaminda','chantal','checchino','checco','cherki','cherubina','cherubino','chiaffreda','chiaffredo','chiara','chiarastella','chiarella','chiarello','chiaretta','chiarina','chiarino','chiaro','chicca','chicco','chino','chirico','christian','christina','christopher','ciana','ciano','ciardino','ciardo','ciccillo','ciccio','cicerone','cicita','cicito','ciliberto','cina','cincinnato','cino','cinzia','cinzio','cinzo','cipriana','cipriano','cira','cirano','cirene','cireneo','cireno','ciretta','ciriaca','ciriaco','cirilla','cirillo','cirina','cirino','cirio','ciro','cisa','cisella','ciso','cita','cito','civita','clara','clarenza','clarenzia','clarenzio','claretta','clarice','clario','clarissa','clarita','claro','clauco','claudia','claudiana','claudiano','claudina','claudino','claudio','claudio','giuseppe','clea','cleante','cleanto','clearco','clelia','clelio','cleme','clemen','clemens','clementa','clemente','clementina','clementino','clemenza','clemenzia','clemenzio','cleo','cleofe','cleofina','cleofino','cleonice','cleonilde','cleonte','cleontina','cleontino','cleopatra','cleope','cleria','clerice','clerio','clero','cleta','cleto','clia','cliceria','clicerio','climene','clino','clio','clita','clito','clizia','clizio','clodia','clodomira','clodomiro','clodovea','clodoveo','cloe','clora','clori','cloridano','cloride','clorinda','clorindo','clotilde','clotildo','coclite','cola','coletta','coletto','collatino','colomba','colombano','colombina','colombino','colombo','coltura','colturo','comasia','comasio','comincio','comita','comito','como','comodo','comunarda','comunardo','cona','concepita','concessa','concessina','concesso','concetta','concettina','concettino','concetto','concezia','concezio','concezione','conchita','concita','concordia','concordio','conetta','conforta','conforto','confucio','conina','conino','conitto','cono','conone','consalva','consalvo','consiglia','consiglio','consilia','consilio','consola','consolata','consolato','consolazione','consolina','consolino','consolo','consuela','consuelo','contaldo','contarda','contardina','contardino','contardo','contrano','conuccio','cora','coraggio','coralla','corallina','corallino','corallo','cordelia','cordelio','corebo','corilla','corina','corinda','corindo','corinna','corinno','corino','corinta','corintio','corinto','corinzio','coriolano','cornelia','cornelio','corona','coronata','coronato','corrada','corradina','corradino','corrado','corsina','corsino','corso','cortese','cortesia','cortesina','cortina','cortino','cosetta','cosima','cosimina','cosimino','cosimo','cosma','cosmano','cosmina','cosmino','cosmo','costabile','costante','costantina','costantino','costanza','costanzo','creonte','crescente','crescentina','crescentino','crescenza','crescenzia','crescenziano','crescenzio','crescenzo','creso','crespino','creusa','crisante','crisanto','criseide','crisostomo','crispina','crispino','crispoldo','crispolto','crista','cristano','cristanziano','cristian','cristian','mauricio','cristiana','cristiano','cristina','cristino','cristo','cristofalo','cristofano','cristofaro','cristofero','cristofolo','cristofora','cristoforo','cristopher','croce','crocefissa','crocefisso','crocetta','crocifissa','crocifisso','crocina','cruciano','cunegonda','cunegondo','cuniberto','cuono','cupido','curio','curzia','curzio','cusmano','custode','custodio','cusumano','dafne','dafni','dafno','dagoberta','dagoberto','daiana','dalcisa','dalcisio','dalciso','dalgisa','dalia','dalila','dalinda','dalindo','dalino','dalio','daliso','dalma','dalmata','dalmato','dalmazia','dalmazio','dalmazzo','dalmina','dalmino','dalmiro','dalmo','damasa','damasca','damasco','damaso','damiana','damiano','damiano','cosimo','damina','damino','dana','dandolo','dania','daniel','daniela','daniele','daniella','daniello','danila','danilla','danillo','danilo','danino','danio','dannunzio','danta','dante','dantina','dantino','danubio','dardano','dardo','daria','dariella','darina','dario','darma','darmo','darvina','darvino','dato','david','davida','davide','davidica','davidico','davidina','davidino','davina','davinio','davino','dazeglio','dazelio','dazio','dazzo','dea','deana','deanira','deanna','debora','deborah','decenzio','decia','decima','decimina','decimino','decimo','decio','dedalo','defendente','defendi','defendina','defendo','degna','deianira','delcisa','delciso','deledda','delfa','delfia','delfina','delfino','delfio','delfo','delia','delina','delinda','delindo','delino','delio','delisa','delisio','deliso','delizia','delizio','dello','delma','delmina','delmino','delmira','delmiro','delmo','dema','demaro','demetria','demetrio','demo','demostene','deni','denis','denisa','denisa','elena','denise','denisia','denisio','dennis','idalo','deo','deodata','deodato','deomira','deonisia','deonisio','dera','derina','derino','derio','derna','dernino','derno','dero','desdemona','desia','desidera','desiderata','desiderato','desideria','desiderio','desio','desolina','desolino','destino','devid','diaco','diamanta','diamante','diamantina','diambra','diana','dianella','dianello','diano','dianora','diaz','didaco','didia','didima','didimo','didio','diega','diego','diletta','diletto','dilia','diliana','dilio','dilla','dillo','dilo','dima','dimitra','dimitri','dimitrina','yonkova','dimitrio','dimitrios','dimma','dimmo','dimo','dina','dinetto','dino','diocleziano','diodata','diodato','diodora','diodorino','diodoro','diogene','diomede','diomira','diomiro','dione','dionella','dionello','dionigi','dionigia','dionigio','dionilla','dionino','dionira','dionisi','dionisia','dionisio','dioniso','dioscoride','diotisalvi','dirce','dircea','dirceo','disma','dismo','disolina','diva','divina','divinangelo','divino','divio','divo','dogalina','dolcina','dolcino','dolcissima','dolfina','dolfino','dolinda','dolindo','dolorata','dolores','doloretta','dolorice','dolorina','dolorinda','dolorino','doloris','dolorosa','domenica','domenicangelo','domenicantonio','domenichina','domenichino','domenico','domenicuccio','domiliano','dominatore','dominica','domitilla','domitillo','domizia','domiziana','domiziano','domizio','donaldo','donata','donatangelo','donatantonio','donatella','donatello','donatilla','donatina','donatino','donato','donatuccio','donelio','donella','donello','donetta','donillo','donina','donino','donizio','donnina','donnino','dono','dora','doralba','doralice','doranda','dorando','dorella','doretta','doretto','doria','doriana','doriano','dorico','doride','dorigo','dorina','dorinda','dorindo','dorino','dorio','doris','dorita','dorligo','doro','dorotea','doroteo','dosolina','dosolino','doviglia','doviglio','dovilia','dovilio','draga','drago','driade','drusiana','drusiano','drusilla','druso','drusolina','duccia','duccio','duilia','duilio','duina','duino','dulcinea','dumas','durando','durante','durantino','duse','dusola','dusolina','ebe','eberardo','ebo','eccelsa','eccelso','ecla','ecle','eco','eda','edda','eddo','ede','edelberto','eden','edena','edera','ederina','ederino','edero','edesia','edesio','edgarda','edgardo','edi','edia','edila','edilberto','edilia','ediliano','edilio','edina','edino','edio','edipo','edita','editta','edma','edmea','edmeo','edmo','edmonda','edmondo','edo','edoarda','edoardina','edoardino','edoardo','edovilio','edra','edro','eduarda','eduardo','eduilia','eduilio','eduina','eduino','edvige','edvigio','edvina','edvino','effisia','effisio','effrem','efigenia','efisia','efisina','efisino','efisio','efiso','efraimo','efrem','efro','egea','egeo','egeria','egerio','eghe','egida','egide','egidia','egidio','egilberto','egilda','egilde','egildo','egilia','egilio','egista','egisto','egizia','egiziaca','egiziana','egiziano','egizio','egla','eglantina','eglantino','egle','eglina','eglo','elba','elbana','elbanio','elbano','elbo','elda','eldina','eldino','eldo','elea','eleana','eleano','eleazaro','eleazzaro','elena','elena','carmela','elenia','elenio','eleno','eleo','eleodoro','eleonarda','eleonardo','eleonora','eleonoro','eletta','eletto','elettra','elettro','eleuteria','eleuterio','elfa','elfia','elfina','elfino','elfio','elfo','elfrida','elfride','elfrido','elga','elgo','elhassania','elia','eliana','eliano','elianora','elias','eliberto','elida','elide','elidia','elidio','elido','eligia','eligio','elina','elinda','elindo','elino','elio','eliodora','eliodoro','elios','elisa','elisabella','elisabeth','elisabetta','elisabetta','nunzia','elisanna','elisea','elisena','eliseno','eliseo','elisetta','elisia','elisiana','elisio','eliso','ella','ellena','ellenia','ellenio','elleno','ellera','ellero','ellia','elliana','ellio','elllida','ello','elma','elmerico','elmina','elmino','elmira','elmireno','elmiro','elmo','eloisa','eloisia','elpidia','elpidio','elsa','else','elsia','elsina','elsino','elsio','elso','elva','elvana','elvano','elvea','elvenzia','elvenzio','elverino','elvezia','elvezio','elvia','elviana','elviano','elvida','elvidia','elvidio','elvina','elvinia','elvinio','elvino','elvio','elvira','elvirina','elvirio','elviro','elvisa','elvise','elvisia','elvisio','elviso','elvo','elza','elzbieta','elzbieta','maria','elzeario','elzio','elzo','ema','emanuel','emanuela','emanuele','emanuelito','emanuella','emanuello','emera','emerenziana','emerenziano','emerenzio','emeria','emerica','emerico','emerigo','emerina','emerino','emerio','emiddia','emiddio','emidia','emidio','emilia','emiliana','emiliano','emilietta','emilietto','emilio','emina','emio','emira','emirio','emiro','emma','emmanuela','emmanuele','emmelina','emmo','emo','empedocle','endrio','enea','enedina','enedino','eneide','eneo','enerina','enerino','enerio','engelberto','enia','enio','ennia','ennio','enoc','enos','enotria','enotrio','enrica','enrichetta','enrichetto','enrico','enza','enzia','enzina','enzino','enzio','enzo','eola','eolo','epaminonda','epifania','epifanio','epifano','epimaco','epimenio','era','eraclea','eracleo','eraclia','eraclio','eraclita','eraclito','eralda','eraldo','eralio','eramo','erardo','erasma','erasmo','erberto','ercola','ercolano','ercole','ercoliano','ercolina','ercolino','erculiano','erenia','erenio','erennio','eria','eriana','eriano','eriberta','eriberto','erica','erica','luisa','erico','eridana','eridanio','eridano','eride','erido','erika','erilda','erilde','erildo','erina','erinna','erinne','erinno','erino','erio','eritrea','eritreo','erlinda','erlindo','erma','ermacora','ermagora','ermana','ermanda','ermando','ermanna','ermanno','ermano','ermelina','ermelinda','ermelindo','ermelino','ermella','ermellina','ermellino','ermello','ermena','ermenegilda','ermenegildo','ermengarda','ermengardo','ermengilda','ermenio','ermentina','ermentino','ermentrude','ermes','ermesina','ermeta','ermete','ermetina','ermida','ermide','ermidio','ermido','ermilda','ermildo','ermina','erminda','ermindo','erminia','erminio','ermino','ermippo','ermite','ermo','ermocrate','ermogene','ermolao','erna','ernalda','ernaldo','ernando','ernani','ernano','ernella','ernes','ernesta','ernestina','ernestino','ernesto','ernido','ernino','erno','ero','erode','erodiade','eros','erpidio','errica','errichetta','errico','errigo','ersiglia','ersilia','ersilio','erta','erte','erto','ervenio','erveno','ervin','ervina','ervino','esamuele','eschilo','esdra','esedra','esilio','esiodo','esmeralda','esmeraldo','esopo','espedita','espedito','esperanza','esperia','esperina','esperino','esperio','espero','espiritu','edward','esposito','esquilino','esquilio','esta','este','estelio','estella','ester','ester','maria','esterina','esterino','estero','esuberanzio','esuberanzo','esule','esuperanzia','esuperanzio','esuperanzo','esuperia','esuperio','esvaldo','etelvoldo','eteocle','etruria','etrurio','etrusca','etrusco','etta','ettora','ettore','ettorina','ettorino','eucarpio','eucherio','euclida','euclide','eudemia','eudemio','eudemo','eudilia','eudilio','eudocia','eudoro','eudosia','eudosio','eudossia','eufelia','eufelio','eufemia','eufemio','eufrasia','eufrasina','eufrasio','eufrosia','eufrosina','eufrosino','eufrosio','eugenia','eugenio','eulalia','eulalio','eulogio','eumene','eunice','euplio','eupremia','eupremio','euprepio','eupreprio','eura','eurialo','euridice','euripide','euro','europa','europea','europeo','eurosia','eurosio','eusanio','eusapia','eusebia','eusebio','eusepio','eustacchia','eustacchio','eustachia','eustachio','eustasio','eustochia','eustorgio','euterpe','euticchio','eutichia','eutichiano','eutichio','eutimia','eutimio','eutizio','eutropio','eva','evalda','evaldo','evandrina','evandro','evangela','evangelia','evangelina','evangelino','evangelista','evangelisto','evangelo','evanzio','evardo','evarista','evaristo','evasia','evasio','evelia','evelina','evelino','evelio','evelisa','evendra','evenzio','evenzo','everaldo','everarda','everardo','evia','eviliano','evina','evino','evio','evita','evo','evrardo','ewa','elzbieta','ezechia','ezechiela','ezechiele','ezechiella','ezechielle','ezelina','ezelinda','ezelindo','ezelino','ezia','ezio','ezzedine','ezzelina','ezzelino','fabbia','fabbiana','fabbiano','fabbio','fabbiola','fabbrina','fabbrizia','fabbrizio','fabea','fabia','fabiana','fabiano','fabiella','fabina','fabio','fabiola','fabiolina','fabiolo','fabriana','fabriano','fabriele','fabrina','fabrino','fabrio','fabrizia','fabrizio','fabrizo','facondina','facondino','facondo','fadia','fadilla','fadino','faenza','faenzo','faida','faido','faira','faisa','faita','faiza','falando','falaride','falco','falda','faldina','faldino','faldo','faledra','falena','faleria','falerina','falerio','faliera','faliero','falina','fallerio','falma','famiana','famiano','fana','fanciullo','fanfulla','fania','fanilla','fanina','fanino','fanio','fanna','fanni','fann','fannia','fannina','fannita','fannuccia','fanny','fano','fanola','fanore','fantina','fantino','fanuel','fanzia','faone','faostina','faostino','fara','farailde','faraone','farnese','faro','faruk','fasana','fasano','fasma','fata','fatima','fatima','fatimo','fatina','fatma','fatolina','fauno','fauro','fausta','fausta','ornella','faustina','faustino','fausto','faustolo','faviana','favilla','favio','favorina','favorino','favorita','favorito','fea','feanna','feba','febbrina','febbrinio','febbrino','febbronia','febe','febea','febo','febrino','febrizio','febronia','febronio','fecondo','fedalba','fedalma','fede','fedela','fedele','fedelia','fedelica','fedelina','fedelinda','fedelino','federa','federica','federico','federiga','federigo','federina','federino','fedia','fedilia','fedilla','fedina','fedino','fedio','fedo','fedora','fedorina','fedoro','fedorvana','fedra','fedrica','fedrico','fedrigo','fedro','fegra','fela','felda','felesina','felia','felice','felicea','felicella','feliceta','felicetta','felicetto','felicia','feliciana','feliciano','felicietta','felicina','felicino','felicio','feliciola','felicissima','felicissimo','felicit','felicita','felicitas','felida','felide','felidia','felidio','felido','felina','felinda','felino','felio','felippo','felisa','felisia','felisiana','felisiano','felizia','feliziana','feliziano','fellina','fellino','felma','felmina','felse','felsina','feltre','feltro','feluccio','femia','femide','femio','femo','fenela','fenelia','fenelio','fenella','fenello','fenenna','fenesia','fenesina','fenia','fenice','fenicia','fenicio','fenicola','fenimola','fenina','fenio','fenisa','fenisia','fenisio','fenizia','fenizio','fenolia','fenza','fenzo','feo','fera','feralda','feraldo','feranda','ferando','ferardo','ferdiando','ferdina','ferdinanda','ferdinandina','ferdinando','feria','feriana','feriano','ferida','feride','feridia','feridie','ferido','feriero','ferigo','ferildo','ferina','ferino','ferio','ferledo','ferma','fermana','fermano','fermentina','fermilde','fermilia','fermilide','fermilio','fermina','ferminia','ferminio','fermino','fermo','fernalda','fernaldo','fernanda','fernandino','fernando','fernella','fernero','fernice','fernida','ferradino','ferramondo','ferranda','ferrandina','ferrando','ferrante','ferrantino','ferrara','ferrarina','ferrarino','ferraro','ferrea','ferrera','ferrero','ferri','ferriana','ferriano','ferrida','ferrido','ferriero','ferrina','ferrino','ferro','ferronia','ferrucci','ferruccio','ferrucio','ferruglio','fertile','fertilia','feruccio','ferucio','feruglio','fervida','fervido','fesio','festilia','festilio','festina','festino','festo','festosa','fetina','fiametta','fiamma','fiammella','fiammetta','fiammina','fiandra','fibreno','ficenza','fida','fidalba','fidalda','fidaldo','fidalina','fidalma','fidalmina','fidalmino','fidalmo','fidardo','fidarma','fide','fidea','fidelfio','fidelfo','fidelfranco','fidelia','fidelina','fidelio','fidelma','fidelmina','fidelmino','fidelmo','fidenzia','fidenzio','fidenzo','fideo','fides','fidia','fidio','fido','fiducia','fieramonte','fierina','fierino','fiero','fifetta','fifina','figenia','filadelfa','filadelfia','filadelfio','filadelfo','filadora','filandro','filargina','filargino','filastro','filda','filde','filea','filelfo','filemone','filena','fileno','filia','filiana','filiberta','filiberto','filicardo','filicetta','filicina','filide','filidea','filideo','filidio','filidoro','filimena','filina','filinda','filindo','filino','filinto','filippa','filippella','filippetta','filippi','filippina','filippino','filippo','filira','fillide','filma','filocia','filodea','filodelfio','filodelfo','filodemo','filodeo','filodoro','filomana','filomarino','filomena','filomenna','filomeno','filonilla','filoreto','filossene','filotea','filoteo','filotero','filuccia','filumena','fina','finalba','finalbo','finalda','finaldo','finao','finarosa','finau','fine','finella','fineo','fines','finesia','finetta','finia','finicola','finimola','finimolo','finimonda','finimondo','finimunda','finisia','finisio','finistauro','finita','finizia','finizio','fino','finuccia','finuccio','finuzza','finuzzo','fioldisa','fiolomena','fiona','fior','fiora','fioradea','fioralba','fioralbo','fioralda','fioraldo','fioralice','fioralma','fioramante','fioramonte','fiorana','fioranda','fiorangela','fiorangelo','fiorangiola','fioranna','fiorano','fiorante','fiorantonio','fioravante','fioravanti','fioravantina','fiorbellina','fiordalba','fiordalice','fiordalige','fiordaligi','fiordalinda','fiordalisa','fiordalise','fiordaliso','fiordelice','fiordelinda','fiordelisa','fiordestilde','fiordiligi','fiordimaria','fiordina','fiordinando','fiordineve','fiordino','fiordisa','fiordisaggio','fiordispina','fiordistella','fiordoliva','fiore','fiorelinda','fiorelisa','fiorella','fiorellina','fiorellino','fiorello','fiorena','fiorenda','fiorendo','fiorente','fiorentina','fiorentino','fiorento','fiorenza','fiorenzia','fiorenzino','fiorenzio','fiorenzo','fiorestilde','fioretta','fioretto','fiori','fioridea','fiorige','fioriggi','fioriggia','fiorigi','fiorigia','fiorigio','fiorilda','fiorilde','fiorildo','fiorilena','fiorilla','fiorillo','fiorina','fiorinda','fiorindo','fiorinella','fiorino','fiorinta','fiorinto','fiorio','fiorisa','fiorisella','fiorisia','fioriso','fiorita','fiorito','fiorlinda','fiorlindo','fiorlisa','fiorluigi','fiormaria','fioro','fioruccio','fiova','fiovo','firenza','firenze','firio','firma','firmana','firmando','firmano','firmina','firminia','firminio','firmino','firmo','firpo','firuta','fisia','fisio','fiumana','fiumano','fiume','fiumetta','fiumina','fladimiro','flaide','flaimo','flamiano','flamina','flaminia','flaminio','flamino','flamminio','flario','flautilla','flauto','flavia','flaviana','flavianna','flaviano','flavietta','flavina','flavinia','flavino','flavio','fleana','fleanna','fleano','flebonia','fledia','flemia','flena','flenia','flera','fleride','fleris','flero','floide','flor','flora','floralba','floramaria','florana','floranda','florangela','florangelo','floranna','flore','floreana','floreanna','floreano','floredana','floredano','florella','florena','florentia','florentina','florentino','florenza','florenzia','florenziana','florenziano','florenzio','florenzo','flores','floresita','floresta','florestana','florestano','florestina','floretta','flori','floria','florian',,'franck','floriana','florianna','floriano','florica','florice','florida','floridana','floridante','floride','floridea','florideo','floridia','floridiana','floridio','florido','floriella','florigi','florigia','florigio','florimondo','florina','florinda','florindo','florino','florinto','florio','floris','florisa','florise','florisia','florita','floro','fluvio','foca','foglia','fogliana','fogliano','fois','folco','folema','folgora','folgore','folgorina','foliana','foliano','folicardo','foliero','follia','folo','fondina','fontana','fontanella','fonte','fontemaria','fontina','fontino','forese','foresta','forestano','forestina','forestino','foresto','foriero','forimma','forleo','formenzio','fornaretto','fornarina','forte','fortezza','fortina','fortino','fortuna','fortunanta','fortunata','fortunatella','fortunatina','fortunato','fortunella','fortunello','fortunia','fortunina','fortunio','fortuno','fortura','fosca','foscara','foscarina','foscarino','foscaro','foscherina','foschina','fosco','foscola','foscolina','foscolino','foscolo','fotina','fouad','fragola','fragolina','franca','francesca','francesca','maria','francescana','francescangela','francescangelo','francescantonia','francescantonio','franceschella','franceschina','franceschino','franceschitta','francesco','franchetta','franchina','franchino','francia','francina','franco','francolina','francolino','francuccia','frangiotto','fransina','franza','franzina','franzio','franzo','fraolina','frasca','frasia','frasina','fraulina','frazia','frazino','frea','freda','fredesvinda','frediana','frediano','fredina','fredino','fredo','fredolina','freia','freida','freido','frenesia','frenide','frera','fresa','fresia','fresina','frida','fridda','fride','fridia','fridiana','fridiano','frido','fridolina','fridolino','frieda','frigerio','frina','frine','frines','frisia','frola','frondina','frontino','frosina','frugolino','frumenzio','fruttuosa','fruttuoso','fulberta','fulberto','fulceri','fulcieri','fulcio','fulco','fulda','fulgenzia','fulgenzina','fulgenzio','fulgenzo','fulgero','fulghesu','fulgida','fulgido','fulgo','fulva','fulvia','fulviana','fulviano','fulvio','fulvo','furia','furiano','furietta','furimma','furio','furno','furtunata','fusca','fusco','futura','gabino','gabiria','gabriela','gabriele','gabrielina','gabriella','gabrielle','gabriello','gabrio','gaddo','gaetana','gaetanella','gaetanello','gaetanina','gaetanino','gaetano','gagliano','gagliardo','gaia','gaio','galante','galantino','galardino','galardo','galatea','galdina','galdino','galdo','galeana','galeano','galeazzo','galeno','galgano','galiana','galiano','galiardo','galieno','galilea','galileo','gallia','galliana','galliano','gallieno','gallio','gallo','galvano','gandolfa','gandolfo','gardenia','gardenio','gardina','gardino','garibaldi','garibaldina','garibaldo','gaspara','gaspare','gasparina','gasparino','gasparo','gasparre','gaspera','gasperina','gasperino','gaspero','gastone','gaudenzia','gaudenzina','gaudenzio','gaudenzo','gaudina','gaudino','gaudio','gaudiosa','gaudioso','gavina','gavino','gavinuccia','gea','gedeone','gelardo','gelasia','gelasio','gelfrido','gelinda','gelindo','gelio','gelma','gelmina','gelmino','gelmira','gelmiro','gelmo','gelsa','gelsina','gelsino','gelso','gelsomina','gelsomino','geltrude','geltrudo','gemella','gemello','gemignano','gemiliana','gemiliano','gemina','geminello','geminiana','geminiano','geminio','gemino','gemisto','gemma','gemmina','gemmino','gemmo','generosa','generoso','genesia','genesio','genia','geniale','genina','genio','genisia','genisio','gennaia','gennara','gennarina','gennarino','gennaro','genni','genoeffa','genova','genoveffa','genoveffo','genovina','genovino','genserico','gentila','gentile','gentilia','gentilina','gentilino','gentilio','genuaria','genuario','genuina','genuino','genunzia','genunzio','genuzio','genziana','genziano','genzina','genzino','genzio','geo','georgia','georgio','geppina','geppino','geralda','geraldina','geraldo','gerarda','gerardina','gerardino','gerardo','gerasimo','gerbina','gerbino','geremia','geri','gerico','gerina','gerino','gerio','gerlanda','gerlando','germana','germando','germania','germanico','germanino','germanio','germano','germinal','germinale','germinalina','germondo','gernando','gero','gerolama','gerolamina','gerolamo','gerolima','gerolomina','geromina','geromino','geronima','geronimo','geronzio','geronzo','gertrude','gervasa','gervasia','gervasio','gervaso','ges','gessica','gesualda','gesualdina','gesualdino','gesualdo','gesu','gesuela','gesuele','gesuella','gesuina','gesuino','gesumina','gesumino','gettulia','gettulio','getulia','getulio','getullio','gheorghe','adrian','gheraldo','gherarda','gherardo','ghigo','ghina','ghino','ghita','giacchino','giachino','giacinta','giacinto','giacobba','giacobbe','giacoma','giacometta','giacomina','giacomino','giacomo','giada','giaele','giamaria','giambattista','giammarco','giammaria','giammario','giammauro','giampaola','giampaolo','giampiera','giampiero','giampietro','gian','marco','giana','gianandrea','gianantonio','gianbattista','giancarla','giancarlo','giandamiano','giandomenico','gianello','gianetto','gianfelice','gianfilippo','gianfranca','gianfrancesca','gianfrancesco','gianfranco','giangaetano','giangaleazzo','giangastone','giangiacomo','giangiorgia','giangiorgio','giani','gianlorenzo','gianluca','gianlucia','gianluigi','gianluigia','gianmarco','gianmaria','gianmario','gianmatteo','gianmauro','gianmichele','gianna','giannandrea','giannangela','giannangelo','giannantonia','giannantonio','giannella','giannello','giannetta','giannetto','gianni','giannico','giannina','giannino','gianno','giannozza','giannozzo','giano','gianpaola','gianpaolo','gianpiera','gianpiero','gianpietro','gianrico','gianuario','gianvito','giarrico','giasone','giberto','gidio','gigetta','gigetto','gigi','gigia','gigina','gigino','gigio','giglia','gigliana','gigliano','gigliante','giglietta','giglio','gigliola','gigliolo','gilardo','gilberta','gilbertina','gilberto','gilda','gildo','gilfredo','gilia','giliana','giliano','giliante','giliberto','gilindo','gilio','giliola','gilla','gillia','gillio','gillo','gilma','gilmo','gina','ginepra','ginepro','ginesio','ginetta','ginetto','ginevra','ginevro','ginia','ginio','gino','gioacchina','gioacchino','gioachina','gioachino','giobatta','giobattista','giobbe','gioberto','gioconda','giocondina','giocondino','giocondo','gioela','gioele','gioella','gioia','gioiele','gioiella','gioiello','gioietta','gioina','gioino','gioiosa','giolivo','giomaria','giombattista','giommaria','giona','gionata','gionnina','gionnino','giordana','giordano','giorgetta','giorgetto','giorgia','giorgiana','giorgietta','giorgina','giorgino','giorgio','giorlanda','giorlandina','giorlando','giosafat','giosafatte','giosafatto','giosaffatte','giosaffatto','giosefatto','giosetta','giosofatto','giosue','giosu','giosuele','giotto','giovacchina','giovacchino','giovamaria','giovambattista','giovammaria','giovanbattista','giovancarla','giovancarlo','giovandamiano','giovanfelice','giovanfilippo','giovangastone','giovanmaria','giovanna','giovannandrea','giovannangela','giovannangelo','giovannantonia','giovannantonio','giovannella','giovanni','giovannica','giovannico','giovannimaria','giovannina','giovannino','giovanpaolo','giovanrico','giove','giovenale','gioventino','giovenzio','giovina','giovino','giovita','giovito','giralda','giraldo','girardengo','girardo','girlando','girolama','girolamo','gisa','gisberta','gisberto','giselda','giseldo','gisella','gisello','gisfredo','gislena','gisleno','gismonda','gismondo','gisto','gisulfo','giuda','giuditta','giuditto','giudo','giuffrida','giuffrido','giugliano','giugna','giugno','giuleppe','giulia','giuliana','giulianella','giuliano','giulietta','giulietto','giulino','giulio','giuliva','giulivo','giunia','giunio','giunta','giuntino','giunto','giusepe','giuseppa','giuseppantonio','giuseppe','giuseppina','giuseppino','giusta','giustina','giustiniana','giustiniano','giustino','giusto','giziano','gizio','glauca','glauco','glenda','gliceria','glicerio','glisente','gloria','gloriana','gloriano','glorietta','glorio','goffreda','goffredo','gogliardo','goita','goito','golfiero','golfredo','golia','goliarda','goliardo','gonaria','gonario','gondar','gontrano','gordiana','gordiano','gorello','goretta','goretto','gorgonio','goriano','gorina','gorino','gorio','gorizia','goriziano','gorizio','goro','gottarda','gottardina','gottardino','gottardo','gracco','gradisca','gradisco','gradita','gradito','grado','grata','gratiliano','grato','grazia','graziadio','graziana','graziano','graziella','graziello','grazietta','grazietto','grazina','grazio','graziolo','graziosa','grazioso','graziosuccio','greca','greco','gregoria','gregorina','gregorio','greta','grimalda','grimaldo','grimoalda','grimoaldo','grisante','griselda','grisostomo','guadagno','guadalupe','gualberta','gualberto','gualdo','gualfardo','gualfredo','gualterio','gualtiera','gualtieri','gualtierina','gualtiero','guarina','guarino','guarniero','guccio','guelfa','guelfino','guelfo','guenda','guendalina','guerina','guerino','guerra','guerranda','guerrando','guerrazzo','guerriera','guerriero','guerrina','guerrino','guglielma','guglielmina','guglielmo','guglielmo','antonio','guicciardo','guida','guidalberto','guidantonia','guidantonio','guidetta','guidina','guidino','guido','guidobaldo','guidone','guidubaldo','guiduccio','guiscardo','guizzardo','gusmana','gusmano','gustava','gustavo','halina','helga','hortense','desiree','ia','iacobella','iacono','iacopa','iacopina','iacopino','iacopo','iader','iaele','iafet','iago','iana','ianna','ianni','iano','ica','icaro','icilia','icilio','ico','iconio','ida','idalba','idalberto','idalco','idalga','idalgo','idalia','idalina','idalio','idalma','idalmino','idalmo','idalo','idanna','idea','ideale','idelberto','idelfonso','idelio','idelma','idelmina','idelmino','idelmo','ideo','idia','idiana','idiano','idilia','idilio','idillia','idillio','idina','idino','idio','ido','idola','idolina','idolo','idomeneo','idreno','iella','iello','ierone','ietta','ifigenia','igea','igeo','igidio','igilda','igildo','igilio','igina','iginia','iginio','igino','ignazia','ignazina','ignazio','igor','ikbale','ila','ilaria','ilarina','ilarino','ilario','ilarione','ilaro','ilda','ilde','ildebrando','ildefonso','ildegarda','ildegardo','ildegonda','ildegondo','ildo','ileana','ileano','ilena','ilenia','ilia','iliade','iliana','iliano','ilide','ilija','ilio','illa','illario','illeana','illia','illiano','illide','illidio','illio','illo','illuminata','illuminato','ilo','ilva','ilvana','ilvano','ilvia','ilvio','ilvo','ima','imelda','imelde','imeldo','imer','imera','imeria','imerio','imero','imma','immacolata','immacolato','immo','imo','imola','imolo','impera','imperatore','imperatrice','imperia','imperiale','imperio','impero','ina','incoronata','incoronato','india','indo','indro','inelda','inelde','ineldo','inerio','ines','inga','inge','ingenuina','ingenuino','ingo','inia','inio','inna','innocenta','innocente','innocentina','innocentino','innocenza','innocenzio','innocenzo','ino','inuccia','io','ioana','iolanda','iolando','iole','ioletta','iolo','ion','alexandru','ion','florin','iona','ione','ionello','iones','ionia','ionio','iorio','iosella','iosto','iovanni','iovina','iperide','ippazia','ippazio','ippolita','ippolito','irena','irene','irenea','ireneo','irenio','ireno','ireo','ires','iria','iriano','iride','iridio','irido','irina','irino','irio','iris','irlanda','irlando','irma','irmina','irmino','irmo','irnerio','irno','iro','irvana','irvano','irzio','isa','isabella','isabelle','isabello','isacco','isadora','isaia','isaldo','isanna','isaura','isauro','isea','iselda','iselde','iseldo','isella','iseo','isetta','isida','iside','isido','isidora','isidoro','ismaela','ismaele','ismene','ismeno','isnardo','iso','isocrate','isodoro','isola','isolda','isolde','isoletta','isolina','isolino','isolo','isonza','isonzo','isora','isoro','isotta','isotto','israele','israella','istria','isvaldo','ita','itala','italia','italiana','italiano','italico','italina','italino','italio','italo','ito','itria','iva','ivalda','ivaldino','ivaldo','ivan','ivana','ivanda','ivania','ivanio','ivanna','ivano','ivanoe','ivardo','ivetta','ivette','ivia','iviano','ivina','ivio','ivo','ivona','ivonetta','ivonetto','ivonia','ivonio','ivonne','ivrea','ivreo','jacopa','jacopina','jacopo','jader','jafet','jago','jamila','jana','janis','janna','jannat','janni','jano','jayangani','jella','jennifer','jessica','jnes','jolanda','jolando','jole','jone','jonio','jorio','josefa','krystyna','josetta','josto','julia','junior','juri','justyna','karen','cortez','katarzyna','katarzyna','izabela','katherina','joelly','katia','khadijia','khadijo','kizito','konrad','krystyna','halina','krzysztof','josef','ladina','ladino','ladislao','ladislava','laerte','laerzio','laide','lalage','lalla','lallo','lamberta','lambertina','lamberto','lancillotto','lanciotto','landa','landina','landino','lando','landolfo','landuccio','lanfranca','lanfranco','lao','laodice','lapa','lapo','lara','larina','larino','lario','laro','larsia','latina','latino','lattanzio','laudice','laudicino','laudomia','laudonia','laura','laura','edgarda','laurana','laurano','laureano','laureato','lauredana','laurentina','laurentino','laurento','laurenza','laurenzia','laurenzio','laurenzo','lauretana','lauretano','lauretta','lauretto','lauriano','laurina','laurindo','laurino','laurisa','laurita','lauro','lavina','lavinia','lavinio','lavino','lazzara','lazzarina','lazzarino','lazzaro','lazzero','lea','lealdo','leale','leana','leandra','leandrina','leandrino','leandro','leano','learca','learco','learda','leardina','leardino','leardo','leda','ledina','ledino','ledo','legittimo','leido','lela','lele','lelia','lelio','lella','lellio','lello','lelmo','lemmo','lemo','lena','lenin','lenina','lenino','lenio','leno','lenuccia','leo','leocadia','leocadio','leoluca','leoluchina','leona','leonaldo','leonarda','leonardantonio','leonardina','leonardino','leonardo','leoncina','leoncino','leondina','leondino','leone','leonella','leonello','leonetta','leonetto','leonia','leonice','leonida','leonide','leonido','leoniero','leonilda','leonilde','leonildo','leonilla','leonillo','leonina','leonino','leonio','leonisia','leonisio','leonora','leonorio','leonoro','leontina','leontino','leonzia','leonzio','leoparda','leopardi','leopardo','leopolda','leopoldina','leopoldino','leopoldo','lepanto','lepido','lerina','lerino','lerio','lero','lesbia','lesbino','leszek','zbigniew','leta','letanzio','leterio','letizia','letiziano','letizio','leto','lettera','letteria','letterina','letterino','letterio','leucia','leucio','leuterio','leva','levante','levantina','levantino','levi','levia','levina','levino','levio','li','lia','liana','liano','libera','liberale','liberante','liberata','liberatina','liberato','liberatore','liberia','liberina','liberino','liberio','libero','libert','liberta','libertaria','libertario','libertas','libertina','libertino','liberto','libia','libiana','libiano','libico','libio','liboria','liborio','licandro','liccia','lice','licena','licerio','licia','liciano','licinia','licinio','licio','lico','licurga','licurgo','lida','lidamo','lidana','lidano','lide','lidia','lidiana','lidiano','lidio','lido','lidovina','lidovino','liduina','liduino','lieta','lieto','lietta','ligia','ligia','camelia','ligio','lilia','liliana','liliano','lilio','lilla','lillia','lilliana','lilliano','lillina','lillino','lillo','lina','linda','lindo','lindora','lindoro','lineo','linetta','linneo','lino','linuccia','linuccio','lio','lionella','lionello','lionetta','lionetto','lippo','lirio','lisa','lisandra','lisandro','lisanna','lisella','lisena','liseo','lisetta','lisetto','lisimaco','lisina','lisinda','lisindo','lisio','lisippo','liso','litterio','littoria','littoriano','littorino','littorio','liuccia','liuccio','liutprando','livano','livenza','livenzo','livia','liviana','liviano','livierino','liviero','livietta','livinio','livino','livio','livo','loddo','lodoletta','lodovica','lodovico','lodovina','lodovino','loffredo','loira','loisia','lola','loletta','lolita','lolo','lombardina','lombardino','lombardo','longino','lora','loranda','lorando','lorano','loredana','loredano','lorella','lorena','loreno','lorentina','lorentino','lorenza','lorenzana','lorenzano','lorenzina','lorenzino','lorenzo','loreta','loretana','loreto','loretta','loretto','loria','loriana','loriano','lorieta','lorina','lorinda','lorindo','lorino','loris','lorisa','lorito','loro','losanna','lotario','lottario','luana','luano','lubiana','lubiano','luca','lucano','lucantonio','luce','lucedio','lucetta','luchina','luchino','lucia','luciana','luciano','lucidia','lucidio','lucido','lucietta','lucifero','lucilia','lucilio','lucilla','lucillo','lucina','lucinda','lucindo','lucinio','lucino','lucio','lucrezia','lucrezio','lucy','lucyna','joanna','ludmilla','ludovica','ludovico','ludovina','lugano','luigi','luigia','luigina','luigino','luigino','sergio','luisa','luisanna','luise','luisella','luisetta','luisetto','luisi','luisina','luisio','luisita','luisito','luiso','luna','lunella','lunetta','lupo','lusitania','lussoria','lussorio','lutero','lutgarda','lyubima','rosenava','lyubov','mabrouk','macall','macaria','macario','macedonia','macedonio','maceo','maciej','macrina','madda','maddalena','maddaleno','madera','madero','madia','madina','madio','mafalda','mafaldo','maffeo','maffio','magda','magdala','magdalena','magdalena','adriana','magdalo','magenta','maggina','maggino','maggio','maggiolina','maggiolino','maggiore','maggiorina','maggiorino','maghinardo','magno','maia','maida','maido','maila','mainaldo','mainardo','mainetto','maino','maio','maira','maite','gilberte','malfa','malgorzata','wieslawa','malia','malina','malio','malvina','malvino','mamante','mambrina','mambrino','mameli','mamerto','mammola','mammolo','manasse','manetto','manfreda','manfredi','manfredo','mania','manila','manilia','manilio','manilla','manillo','manilo','manin','manina','manio','manlia','manlio','manna','mannino','manno','mannuccio','manola','manolo','manon','manrica','manrico','mansueta','mansueto','manuel','manuela','manuele','manuelita','mara','marat','marc','marca','marcantonio','marcella','marcelliano','marcellina','marcellino','marcello','marcelo','marchetto','marchina','marchino','marchisio','marciano','marciliano','marcilio','marco','marcolina','marcolino','marcuccia','marcuccio','marella','marello','marena','mareno','maresa','maretta','maretto','marfisa','marfisia','marfisio','marga','margarida','antonia','margarita','margherita','margherito','mari','maria','maria','grazia','maria','laura','maria','meris','maria','rita','maria','rosaria','mariacasilde','mariacristina','mariadina','mariagiovanna','mariagrazia','marialena','marialina','marialisa','marialuigia','marialuisa','mariana','marianella','marianeve','mariangela','mariangiola','marianita','marianna','mariannina','mariannino','marianno','mariano','mariantonia','mariantonietta','mariapia','mariarita','mariarosa','mariarosaria','mariasole','mariassunta','mariastella','mariateresa','marica','marida','marie','odette','rose','marie','odette','rose','gabrielle','mariele','mariella','marietta','mariettina','marietto','marika','maril','marila','marilda','marilde','marilena','marileno','marilia','marilina','marilio','marilisa','marilla','marina','marinella','marinello','marinetta','marino','marinuccio','mario','mariola','mariolina','mariolino','mariomaria','mariotto','marirosa','marisa','marisella','marisetta','marisio','mariso','marisole','maristella','mariuccia','mariuccina','mariuccio','mariuzza','marlena','marlisa','marna','marno','maro','marone','marozia','marrico','marrigo','marsiglia','marsiglio','marsilia','marsilio','marsina','marsino','marta','martano','marthe','martina','martinella','martiniano','martino','martira','martire','marto','marusca','marusco','maruska','marussa','marussia','maruzza','maruzzo','marx','marxiano','marxino','marzia','marziale','marzialina','marziana','marziano','marzilio','marzina','marzino','marzio','masaniello','mascia','masiero','masina','masino','maso','massenzio','massima','massimiana','massimiano','massimiliana','massimiliano','massimilla','massimillo','massimina','massimino','massimo','massino','matelda','materno','matilda','matilde','matildio','matildo','matrona','mattea','matteo','matteomaria','matteotti','mattia','mattio','maturino','mauda','maudo','maura','maurelio','maurella','mauretta','mauretto','maurico','maurilia','maurilio','maurilla','maurillo','maurina','maurino','maurizia','mauriziano','maurizio','mauro','mauro','antonio','pietro','max','mazzeo','mazzina','mazzini','mazzinio','mazzino','mea','medarda','medardo','medea','medeo','mederica','mederico','medina','medino','medora','medoro','medusa','melania','melanio','melchiade','melchidesecco','melchiora','melchiore','melchiorina','melchiorre','melchiorrina','melchisedeo','melezio','meliana','melina','melinda','melindo','melino','melisenda','melissa','melita','melito','melitta','mellina','mema','meme','mem','memma','memmo','memo','memore','mena','menenio','menica','menico','menina','menio','menna','mennato','meno','menotti','menotto','mentana','mentano','mentina','mentino','mentore','mentorina','mentorino','menuccia','meo','meraldo','merano','mercede','mercedes','mercedo','mercuria','mercurio','merico','merigo','merina','merinda','merindo','merino','merio','merope','meschino','messalina','messalino','messina','messinella','meta','metardo','metauro','metella','metello','metilde','metodio','meuccia','meuccio','mia','micaela','michal','michea','michela','michela','anna','michelangelo','michelangiolo','michelantonio','michele','michele','emilio','michelina','michelino','micol','micuccia','micuccio','midio','mieke','mietta','migliore','migliorina','migliorino','mila','milan','milana','milano','milca','milda','milde','mildo','mileda','miledi','milena','mileno','milia','miliana','miliano','milka','milko','milla','millo','milo','milone','milva','milvana','milvano','milvia','milvio','milziade','mima','mimi','mim','mimina','mimino','mimma','mimmia','mimmina','mimmino','mimmo','mimo','mimosa','mina','minella','minello','minerva','minervina','minervino','minetta','mingo','minia','miniato','minio','minna','minnia','mino','minolfa','minuccia','minuccio','mira','miralba','miralda','miraldo','miranda','mirandino','mirando','mirano','mirca','mirco','mirella','mirello','mirena','mireno','miretta','miria','miriam','mirian','miriana','miriano','mirina','mirio','mirjana','mirka','mirko','mirna','mirno','miro','mirocle','mirocleto','mirone','miroslao','miroslava','miroslavo','mirra','mirro','mirta','mirte','mirteo','mirtilla','mirto','mirvana','mirvano','misa','misaele','misia','misiana','misiano','misio','mistica','mita','mite','mito','mitridate','moderato','moderno','modesta','modestina','modestino','modesto','mohamad','mohamed','mohamed','ali','mohammed','moira','monalda','monaldo','mondiale','mondina','mondino','mondo','monia','monia','bent','hedi','monica','monika','gabriele','monio','monir','monserrata','monserrato','montagna','montagnina','montano','montello','mora','moraldi','moraldo','moranda','morando','morano','moravio','mordechai','morella','morello','morena','moreno','moretto','morfeo','morgana','moriano','morina','morino','moro','morosina','morosino','mose','mos','mosharaf','mughetta','mughetto','musetta','muzia','muziano','muzio','myrta','nabor','nabore','naborre','nabucco','nada','naddo','nadia','nadiana','nadina','nadino','nadir','nadiria','nado','naida','naide','naima','nalda','naldina','naldino','naldo','nan','nanda','nandina','nandino','nando','nani','nanna','nanni','nannina','nannino','naomi','napoleone','napoli','napolina','napolino','nara','narcisa','narcisio','narciso','narda','nardina','nardino','nardo','narduccio','nario','naro','narsete','narul','nascimbene','natala','natale','natalia','natalina','natalino','natalio','natalizia','natalizio','natascia','nausica','nausicaa','navarino','navaro','navarro','nazarena','nazareno','nazaria','nazario','nazaro','nazzarena','nazzareno','nazzaria','nazzarino','nazzario','nazzaro','nea','nearco','neda','nedda','neddo','nedina','nedio','nedo','neera','neero','nejib','ben','moham','nelda','neldo','nelia','nelida','nelide','nelina','nelio','nelita','nella','nellida','nellina','nellino','nellio','nello','nelluccia','nellusco','nelso','nelusca','nelusco','nelusko','nema','nembo','nemesia','nemesio','nemezio','nemo','nemore','nemorina','nemorino','nena','nene','nen','nenella','nennella','neno','neo','nepomiceno','nepomuceno','nera','nerea','nereide','nerella','nereo','neri','neria','neride','nerina','nerino','nerio','nero','nerone','nestore','nettuno','neva','neve','neves','nevi','nevia','neviano','nevilia','nevilio','nevio','nevis','nica','nicandrina','nicandro','nicanore','nicasia','nicasio','nicco','niccodemo','niccola','niccolino','niccolo','niccol','nice','nicea','niceo','niceta','niceto','nicia','nicla','niclo','nico','nicodema','nicodemo','nicola','nicolangelo','nicolantonio','nicolao','nicole','nicoletta','nicoletto','nicolina','nicolino','nicolo','nicolo','nicolosa','nicol','nicomede','nietta','nieve','nieves','nievo','nila','nilda','nilde','nildo','nilio','nilla','nillo','nilo','nilva','nilvana','nilvano','nilvia','nilvio','nilvo','nina','ninetta','ninetto','ninfa','ninfo','nini','nin','ninni','nino','ninuccia','ninuccio','ninuzza','ninuzzo','niobe','nirvana','nirvano','nisa','nisia','nisio','niso','nita','nito','niva','nivaldo','nivarda','nivardo','nive','nivea','niveo','nives','nivia','nivio','nivo','nizza','nizzardo','noberto','nobile','nobilia','nobilina','noemi','noemia','noemio','nola','nolano','nolasco','nolberto','nona','nono','nora','noradino','norandino','norberta','norberto','nordina','nordino','noredino','noretta','norge','norico','norida','norina','norino','norio','noris','norma','normanda','normando','normanna','normanno','normo','norvegia','norvegio','norveglio','notburga','novara','novarina','novarino','novario','novaro','novarro','novelia','novelio','novella','novellina','novellino','novello','novembrina','novembrino','novemia','novemio','novenia','novenio','noviglio','novilia','novilio','nuccia','nuccio','nulla','nullo','numa','numitore','nuncia','nunzia','nunziante','nunziata','nunziatella','nunziatina','nunziato','nunzietta','nunzio','nuta','nuto','nuzza','nuzzo','obaldo','obbes','obed','ober','oberdan','oberdana','oberdania','oberdano','oberdina','oberdino','oberta','obertina','oberto','obes','obilio','obizio','obizza','obizzo','obriana','oceana','oceania','oceanio','oceano','oclerio','oclide','octavian','oda','odabella','odalia','odalisca','odarda','odasco','odda','oddina','oddino','oddo','oddone','ode','odea','odeida','odeide','odelga','odelia','odelide','odelio','odello','odelta','odemia','oden','odena','odeo','oder','oderica','oderico','oderio','oderisi','oderisio','odero','oderzo','odes','odesca','odessa','odetta','odette','odetto','odi','odiana','odigitria','odiglia','odila','odile','odilia','odilio','odilla','odille','odillia','odillo','odilo','odina','odinea','odinella','odinello','odino','odirica','odissea','odisseo','odivio','odo','odoacre','odoarda','odoardina','odoardo','odobella','odoletta','odolia','odolina','odolinda','odolindo','odolino','odone','odonella','odorice','odorico','odorina','odorinda','odorino','odorisia','odorisio','odorizia','odorizio','odosca','odoviglio','odovilia','odovilio','odovilla','odovina','odulia','oemia','ofeglia','ofelda','ofelia','ofelio','ofemia','ofemio','oferto','offelia','offelio','offerto','ogarita','ogliana','ognibene','ognissanti','oise','oksana','ola','olalia','olanda','olandina','olandino','olando','olanzo','olao','olaria','olavia','olavio','olcese','olda','oldano','oldea','oldenio','older','olderica','olderico','olderigi','olderigio','olderigo','olderina','oldina','oldino','oldo','oldrado','olea','oleana','oleandra','oleandro','oleano','olegario','olelia','olema','oleme','olemo','olena','olenia','oleno','oler','oleria','olerio','oles','olesia','oletta','olfa','olfango','olfea','olfeo','olferina','olferino','olfina','olfino','olga','olgher','olghetta','olghina','olgo','olia','oliade','oliana','olianna','oliano','oliba','olibrio','olida','olide','olidia','olidio','olido','oliede','oliero','olietta','olimpia','olimpiade','olimpio','olimpo','olina','olinda','olindo','olino','olinta','olinto','olis','olisia','olisio','olisse','olita','olite','oliva','olivana','olivanda','olivanna','olivano','olivella','olivenza','olivenzo','olivera','oliveria','oliverio','olivero','oliveta','oliveto','olivetta','olivetto','olivia','oliviana','oliviano','oliviera','olivieri','oliviero','olivietta','olivina','olivino','olivio','olivo','olma','olmedo','olmer','olmerina','olmes','olmina','olmitella','olmo','olo','oloferne','olvea','olves','olvia','olvida','olvide','olvidio','olvido','olvina','olvino','olvrado','omar','omara','omaro','omas','ombelina','ombellina','ombra','ombretta','omega','omelia','omelio','omer','omera','omerina','omerino','omerio','omero','omes','omnia','omobono','omobuono','omodeo','onda','ondedo','ondella','onder','ondesia','ondina','ondino','oneda','onega','oneglia','oneglio','oneida','onelda','onelde','onelia','onelio','onella','onello','oneria','onerio','onero','ones','onesima','onesimo','onesina','onesino','onesio','onesta','onestina','onestino','onesto','oneta','oneto','onetta','onetto','onevio','onezio','onia','onice','onida','onide','onidia','onilda','onilde','onildo','onilia','onilio','onilla','onillo','onio','onis','onisto','onives','onofria','onofrina','onofrio','onora','onorabile','onorata','onoratina','onoratino','onorato','onore','onoria','onorina','onorinda','onorino','onorio','onoris','ontario','opaldo','opelia','opelio','opilio','opimia','opimio','oppilio','oprandina','oprando','ora','oralda','oraldo','orana','oranda','orando','orania','orano','oranta','orante','oranzo','orazia','orazina','orazio','orchidea','ordalia','ordana','ordelia','ordes','orea','oreana','oreano','oredana','oredano','oreglia','oreglio','oreide','orelia','oreliana','oreliano','orelio','orella','orello','orelma','oremo','orena','oreno','orentina','orentino','orenza','orenzina','orenzio','orenzo','oreo','ores','oresta','oreste','orestella','orestilde','orestilla','orestina','orestino','oresto','oreta','oreto','oretta','oretto','orfa','orfalia','orfea','orfelia','orfelina','orfelio','orfella','orfello','orfemia','orfeo','orfilia','orfilla','orfina','orfino','orga','organtino','orgilla','oria','oriade','orialdo','orialla','oriana','orianda','oriando','orianna','orianno','oriano','oribio','orida','oridana','oridano','oride','oridia','oridice','oriede','oriela','orielda','orieldo','oriele','oriella','orielle','oriello','oriemma','oriemme','oriene','orienna','orienne','orienta','orientale','oriente','orientina','orientino','orienzo','oriero','orieta','orieto','orietta','orietto','orifiamma','origa','origene','origlia','origo','orildo','orilia','oriliana','oriliano','orilio','orilla','orillo','orina','orinda','orindo','oringa','orino','orintia','orinzia','orio','oriode','oriondo','orione','oris','orise','orisia','orisma','orisme','orisse','oristano','oristella','oristilla','orizia','orizio','orizzonte','orlana','orlanda','orlandina','orlandino','orlando','orleano','orleo','orles','orlina','orlinda','orlindo','orma','ormanna','ormanno','ormano','ormea','ormelia','ormella','ormeo','ormes','ormido','ormilda','ormina','ormis','ormisda','ormisde','ormisdo','ormiste','ormondo','orna','ornaldo','ornata','ornato','ornea','orneglia','ornelia','ornelio','ornella','ornello','orneo','ornida','ornina','oro','orolando','oronte','oronza','oronzia','oronzina','oronzino','oronzio','oronzo','orosimbo','orosola','oroveso','orsa','orselia','orsella','orseolo','orsetta','orsina','orsini','orsino','orsio','orso','orsola','orsoletta','orsolina','orsolinda','orsolino','orta','orte','ortelia','ortelio','ortella','ortemio','ortenilla','ortensa','ortensia','ortensina','ortensio','ortenso','ortenza','ortenzia','ortenzina','ortenzio','ortenzo','orteo','ortes','ortesia','ortesina','ortesio','ortigia','ortilia','ortilla','ortis','orto','ortolana','ortolano','ortolina','orvanna','orvea','orvedo','orvelia','orvelio','orviano','orviero','orvieta','orvieto','orvietta','orvilio','orvilla','orvinio','orvino','orzola','osana','osanio','osanna','osasco','osca','oscar','oscardo','oscare','oscarina','oscarino','oscarlina','oscaro','oscarre','oscher','oscherino','osea','oseanna','oselia','oselio','osella','osema','oseo','oser','osetta','osia','osiana','osiano','osilda','osilde','osilia','osilide','osilio','osimo','osio','osira','osiria','osiride','osirio','osiris','osita','oslavia','oslavio','osma','osmana','osmanna','osmanno','osmano','osmar','osmelia','osmida','osmide','osmido','osmilda','osmilde','osmildo','osmina','osolina','ossiride','ossola','ostelia','ostelio','ostella','ostello','ostelvio','ostenda','oster','ostiglia','ostiglio','ostilide','ostilio','ostilla','ostillo','ostlia','osvada','osvalda','osvaldo','osvego','osvilde','osvina','osvino','otea','otella','otellia','otellina','otellio','otello','otelma','otelmo','otero','otilde','otilia','otilio','otilla','otina','otino','oto','ottanzia','ottava','ottavia','ottaviana','ottaviano','ottavilla','ottavina','ottavino','ottavio','ottavo','ottelia','ottelio','ottello','ottelma','ottenio','otteo','ottiglia','ottilia','ottilio','ottilla','ottima','ottimina','ottimio','ottimo','ottina','ottinello','ottino','otto','ottobello','ottobrina','ottobrino','ottocaro','ottolina','ottolino','ottomaro','ottone','ottonello','ottorina','ottorino','ovalda','ovaldes','ovaldo','ovanda','ovelia','ovelio','over','oves','ovidia','ovidio','oviedo','oviero','oviglia','oviglio','ovilia','ovilio','ovilla','ozino','pace','pacifica','pacifico','pacina','pacino','paladina','paladino','palamede','palestina','palestino','palladino','palma','palmarino','palmarosa','palmazio','palmeria','palmerina','palmerindo','palmerino','palmerio','palmero','palmiera','palmierino','palmiero','palmina','palmino','palmira','palmirino','palmiro','palmizio','pamela','pancrazia','pancrazio','pandolfa','pandolfo','panfila','panfilia','panfilio','panfilo','pantalea','pantaleo','pantaleone','paola','paoletta','paoletto','paolica','paolico','paolina','paolino','paolo','paoluccio','paradisa','paradiso','parda','pardo','parida','paride','paridina','parigi','parigina','parigino','parisa','parise','parisina','parisino','parisio','pariso','parisse','parmenio','parsifal','pascasia','pascasio','pascuccio','pasino','pasqua','pasquala','pasquale','pasqualina','pasqualino','pasquarosa','pasquetta','pasquina','pasquino','pasquita','paterniano','patrizia','patrizio','patroclo','patryk','paulo','pawel','rafal','paziente','pazienza','pedja','pelagia','pelagio','pelino','pelio','pellegra','pellegrina','pellegrino','pellegro','pellico','penelope','pensierina','pensierino','pensiero','pepi','pepino','peppa','peppe','peppi','peppina','peppinetto','peppino','peppo','peppuccio','perfetta','perfetto','pergente','pergentina','pergentino','pericle','perla','perlina','perlino','perlo','perpetua','perpetuo','persea','perseo','persia','persilia','persilio','persio','pervinca','petar','petra','petrina','petro','petronella','petronilla','petronio','phelipe','pia','piacente','piacentina','piacentino','piapaola','piave','piccarda','piccardo','pier','andrea','piera','pierandrea','pierangela','pierangelo','pieranna','pierantonio','piercarlo','pieretta','pieretto','pierfrancesco','piergaetano','piergiorgio','piergiovanni','pierina','pierino','pierlorenzo','pierluca','pierluigi','piermarco','piermaria','piermario','piermauro','piero','piero','roberto','pierpaolo','piersilvio','pieruccia','pieruccio','pietra','pietrangelo','pietrantonio','pietrina','pietrino','pietro','pietronilla','pietropaolo','pietruccia','pietruccio','pilade','pilar','pileria','pilerio','pina','pindaro','pinella','pinello','pinetta','pinetto','pino','pinotto','pinuccia','pinuccio','pio','pippa','pippo','piramo','pirro','pisana','pisano','pitagora','placida','placidino','placido','platone','plautilla','plauto','plava','plavo','plinia','plinio','plutarco','poerio','polda','poldina','poldino','poldo','polibio','policarpio','policarpo','polidoro','polinice','polissena','polito','poliuto','polluce','polo','polonia','polonio','pompea','pompeo','pompilia','pompilio','pomponio','ponziana','ponzianino','ponziano','ponzio','popola','porfidio','porfilio','porfiria','porfirio','porsenna','porsia','porthos','portos','porzia','porzio','possidio','potita','potito','prandino','prando','prasseda','prassede','prassitele','prescillo','preziosa','prezioso','priama','priamo','prima','primalda','primaldo','primario','primarosa','primavera','primetta','primetto','primia','primiana','primiano','primiera','primiero','primilio','primillo','primina','primino','primio','primitiva','primitivo','primizia','primizio','primo','primola','primula','principe','principessa','principia','principio','prisca','priscilla','prisco','proba','probo','procolo','procopio','progresso','prometeo','properzio','prosdocimo','prospera','prosperina','prosperino','prospero','protasio','protaso','proteo','proto','providenza','provido','provina','provino','provvida','provvidenza','provvidenzio','provvido','prudente','prudenza','prudenzia','prudenzio','prunisinda','pubblio','publia','publio','puccio','pulcheria','pulcherio','pupa','purifica','purifico','purissima','quadrio','qualtiero','quarta','quartiero','quartiglia','quartilia','quartilio','quartilla','quartina','quartino','quarto','quendalina','quentalina','querina','querino','querrina','querrino','quido','quieta','quindalina','quinta','quintalina','quintalino','quintiglia','quintiglio','quintilia','quintiliana','quintiliano','quintilina','quintilino','quintilio','quintilla','quintillia','quintillio','quintillo','quintina','quintino','quinto','quinzia','quinziano','quinzio','quirica','quirico','quirina','quirino','quiro','quisilio','rachela','rachele','rachelina','rachelino','rachildo','radames','radamesse','radamez','radamisto','rade','radegonda','radiano','radio','radislao','rado','rafaele','rafaelino','rafaella','rafaello','raffaela','raffaele','raffaelina','raffaelino','raffaella','raffaelle','raffaellina','raffaellino','raffaello','raffaelo','raffaeluccio','raffale','raffalele','raffele','raffelina','raffello','raggio','raguele','raimo','raimonda','raimondi','raimondina','raimondino','raimondo','raimondo','maria','rainalda','rainaldo','rainardo','rainer','rainera','raineri','rainerio','rainero','rainieri','rainiero','raldo','ralfo','rambaldo','ramberto','rambo','rames','rami','ramira','ramiro','ramis','ramon','ramona','ramondo','ramone','ramuccio','ramusino','ranato','rancesco','rando','randolfo','raniera','raniere','ranieri','raniero','ranuccio','ranunzio','ranuzio','rao','raolo','raoul','rasmo','raul','raule','raulino','raulo','ravaldo','ravenna','re','rea','realda','realdina','realdino','realdo','reale','realina','realino','realmo','reamo','reana','reano','reanto','rebecca','reclus','recte','reda','redames','redamo','redano','reddad','redea','redegonda','redemisto','redenta','redente','redentina','redentino','redento','redentore','redenzio','redeo','redes','redesildo','redi','rediano','redino','redivo','redo','reduino','refenio','reffaele','regalino','reggiano','reggina','reggio','regildo','regina','reginalda','reginaldo','reginella','reginetta','regino','regio','regis','regolina','regolino','regolo','reimondo','reina','reinaldo','reiner','reis','reldo','relino','relio','rema','remaldo','remedino','remedio','remes','remi','remidio','remido','remiggio','remigia','remigildo','remigio','remiglio','remildo','remilia','remilio','remina','remiro','remo','remoaldo','remola','remolo','remon','remondino','remualdo','rena','renaldo','renardo','renata','renato','rendino','renella','renello','reneo','rener','renetto','reni','renieri','reniero','renio','renis','renner','renno','reno','renso','rento','renuccio','renunzio','renza','renzi','renzina','renzino','renzio','renzo','reo','reodante','reonaldo','reovaldo','reparata','reparato','resi','resio','respicio','restituta','restituto','resvindo','reto','retto','reuccio','reulo','revel','revilio','revo','reziere','rezieri','reziero','rezio','rezziere','rezzieri','rezziero','rialda','rialdo','riana','riano','ribella','ribelle','ribello','riberto','ribes','rica','ricangelo','ricardo','ricca','riccarda','riccardi','riccardina','riccardino','riccardo','ricci','ricciarda','ricciardetto','ricciardi','ricciardino','ricciardo','riccieri','ricciero','riccio','ricciotti','ricciotto','ricco','richelmo','richetto','riciotti','rico','ricorda','ricordano','ricordino','ricordo','ridanio','ridano','rideo','ridha','ridio','rido','ridolfo','riedo','riego','riello','rienzo','rifeo','rifredo','riga','riger','righetto','riginaldo','rigo','rigoberto','rigoletta','rigoletto','riguccio','rildo','rimedia','rimedio','rimes','rimo','rina','rinalda','rinaldi','rinaldina','rinaldino','rinaldo','rinardo','rinda','rindo','rinella','rinello','rineo','rinetta','rinetto','ringo','rinieri','riniero','rinio','rino','rinuccia','rinuccio','rio','riodante','riode','rionero','ripalta','riposa','riscatto','risieri','risiero','rismo','rismondo','risoluto','risorgi','risorto','rissieri','risveglio','risvelio','rita','ritanna','ritano','ritardo','rito','rituccio','riva','rivaldo','rivano','riviera','riviero','rivio','rivo','riziano','riziera','riziere','rizieri','riziero','rizzano','rizzarda','rizzardo','rizzeri','rizzerio','rizzi','rizziera','rizziere','rizzieri','rizziero','rizzo','rkia','roaldo','roano','robaldo','roberta','robertina','robertino','roberto','robis','robledo','robleto','roboamo','roboano','robustiano','robustina','robustino','robusto','rocca','roccardo','rocchetta','rocchetto','rocchina','rocchino','rocco','roccuccio','rocio','roco','rodano','roderico','rodi','rodiano','rodino','rodio','rodoaldo','rodolfa','rodolfina','rodolfo','rodomiro','rodomondo','rodomonte','rodosindo','rodrigo','roe','roero','rofillo','rofilo','rofino','rogelio','rogero','roggero','roggiero','roi','rolanda','rolandina','rolandino','rolando','roldano','roldo','roliano','rolino','rollando','roma','romaldino','romaldo','roman','romana','romandino','romando','romanella','romanello','romania','romanina','romanino','romanita','romano','romantino','romea','romedio','romelia','romelio','romena','romenia','romenio','romeno','romeo','romero','romes','rometta','romi','romilda','romilde','romildo','romilia','romilio','romina','romino','romiro','romo','romoaldo','romola','romolina','romolino','romolo','romualda','romualdo','romulado','ronaldo','rondello','rondino','rondolfo','rone','ronerto','ronzino','ropeo','rosa','rosalba','rosalbino','rosalbo','rosalia','rosalina','rosalinda','rosalindo','rosalino','rosalio','rosalmino','rosamaria','rosamunda','rosana','rosanella','rosangela','rosanna','rosanno','rosano','rosaria','rosarietta','rosarina','rosarino','rosario','rosario','luigi','rosasco','rosata','rosato','rosaura','rosauro','rose','marie','roselda','roselino','roselio','rosella','rosellina','rosellino','rosello','roselmino','roseo','roseto','rosetta','rosetto','rosiano','rosilda','rosilde','rosildo','rosilio','rosimbo','rosina','rosindo','rosinella','rosino','rosio','rosita','rosito','rosmaldo','rosmildo','rosmino','rosmiro','rosmunda','rosmundo','roso','rosolia','rosolina','rosolindo','rosolino','rosolo','rossa','rossana','rossano','rossella','rossellina','rossello','rossi','rossina','rossino','rosso','rosualdo','rosvalda','rosvaldo','rosvindo','rosvita','rotildo','rotilio','rotondo','rottilio','rovaldo','rovano','rovelio','rovello','rovena','roveno','rovereto','rovero','roveso','rovido','roviero','roviglio','rovigo','rovildo','rovilio','roxana','rubello','ruben','rubeno','rubens','ruberto','rubes','rubina','rubino','rubio','rubis','rudi','rudiano','rudio','rudy','ruello','ruffa','ruffillo','ruffina','ruffino','ruffo','rufillo','rufina','rufino','rufo','rugero','ruggera','ruggeri','ruggerina','ruggero','ruggiero','rugiero','ruperto','rusco','russardo','russo','rustico','rutilia','rutilio','ruttilio','sabadino','sabata','sabatina','sabatino','sabato','sabbatina','sabbatino','sabina','sabino','sabotino','sabrina','saffo','saladino','sallustio','salom','salomone','salute','salutina','salva','salvadora','salvadore','salvato','salvatora','salvatorangelo','salvatore','salvatorica','salvatorico','salvatorina','salvatorino','salvatrice','salve','salverina','salverino','salverio','salvetto','salvia','salviano','salvina','salvino','salvio','salvo','salvuccio','samanta','samantha','samuela','samuele','sandra','sandrina','sandrino','sandro','sankhare','sansone','santa','santarella','sante','santella','santi','santillo','santin','santina','santino','santo','santola','santolo','santoro','santuccia','santuccio','santuzza','sanzia','sanzio','sara','saretto','saria','sarina','sarino','sario','sarita','saro','saturna','saturnia','saturnina','saturnino','saturno','saul','saula','saule','saulle','saulo','saura','sauro','saveria','saverina','saverino','saverio','savia','saviana','saviano','savina','savino','savio','savoia','scevola','scilla','scintilla','scipio','scipione','scolastica','scolastico','sebastiana','sebastiano','seconda','secondiana','secondiano','secondina','secondino','secondo','sefora','selena','selene','selenio','seleno','selma','selmino','selmo','selva','selvaggia','selvaggio','selvina','selvino','selvo','sem','semira','semiramide','semplicia','sempliciano','semplicio','sempronia','sempronio','senad','senofonte','serafina','serafino','serena','serena','suzue','serenella','serenello','serenilla','sereno','sergia','sergina','sergio','sergio','daniele','serviglio','servilia','servilio','servio','servolo','sesta','sestilia','sestilio','sestina','sestino','sesto','settembrina','settembrino','settima','settimia','settimina','settimino','settimio','settimo','severa','severiana','severiano','severina','severino','severio','severo','shah','shah','jahan','shajahan','sibilla','sibillo','sidoro','siegfrid','siegfried','sifrido','sigefrido','sigfredo','sigfrida','sigfrido','sigifredo','sigifrido','sigilfredo','sigilfrido','sigisfredo','sigisfrido','sigismonda','sigismondo','sigismunda','sigismundo','signora','signorella','signorello','signorina','signorino','sila','silano','silena','silene','silenio','sileno','silfrido','silia','siliana','siliano','silio','silo','silva','silvana','silvano','silvera','silveria','silverio','silvero','silvestra','silvestre','silvestrina','silvestro','silvia','silviana','silviano','silviero','silvietto','silvina','silvino','silvio','silvo','simeo','simeona','simeone','simmaco','simo','simona','simona','maria','simone','simonella','simonello','simonetta','simonetto','simonino','simpliciano','simplicio','sina','sincera','sincero','sinfarosa','sinforosa','siponta','sipontina','siponto','sira','siria','siriana','siriano','sirina','sirino','sirio','siro','sirte','sirto','sisina','sisinia','sisinio','sisinnia','sisinnio','sisino','sista','sistilia','sistilio','sistina','sistino','sisto','sita','sito','siviglia','sivigliana','sivigliano','siviglio','siviliana','siviliano','slava','slavisa','slobodan','smeralda','smeraldo','soccorsa','soccorso','socrate','sofia','sofica','sofio','sofocle','sofronia','sofronio','sole','solferina','solferino','solidea','solideo','solimando','solimano','solimeno','sonia','sonio','sonja','sosio','sossio','sostene','sostine','sotero','spartaca','spartaco','spedito','speme','spera','sperandeo','sperandia','sperandina','sperandino','sperandio','sperando','speranza','speranzina','speranzino','speranzo','sperdina','speri','sperindio','sperino','spero','spiridiona','spiridione','spiridone','spirita','spiritina','spirito','splendora','splendore','stalin','stalino','stamura','stana','stanis','stanislao','stanislava','stanislavo','stanislaw','stano','stefana','stefanella','stefania','stefanina','stefanino','stefanio','stefano','stelia','stelio','stella','stellamaris','stellario','stellia','stellina','stellino','stello','stelvia','stelvio','stena','stenia','stenio','steno','sterpeta','superanzio','superia','surujjaman','susanna','susetta','svaldo','sveva','svevo','svezia','tacito','taddea','taddeo','taide','tamara','tamaro','tammaro','tancredi','tancredo','tania','tanina','tanino','tanio','tanja','tano','tanuccio','tarcidio','tarcisa','tarcisia','tarcisio','tarciso','tarquinia','tarquinio','tarquino','tarsilia','tarsilio','tarsilla','tarsillo','tatiana','tatiano','tazia','taziana','taziano','tazio','tea','teano','tebaldo','tecla','teclo','telemaco','telesfero','telesfora','telesforo','telia','telio','tella','tellio','tello','telma','telmo','temi','temide','temisto','temistocle','teo','teobaldo','teodato','teodolinda','teodolindo','teodomiro','teodora','teodorica','teodorico','teodorina','teodorino','teodoro','teodosia','teodosio','teofila','teofilo','terenzia','terenziano','terenzio','terenzo','teresa','teresa','vita','teresiana','teresina','teresino','teresio','teresita','tereso','termina','termine','termino','tersia','tersiglia','tersiglio','tersilia','tersilio','tersilla','tersillo','tersina','tertulliano','terza','terzia','terziana','terziano','terziglia','terziglio','terzilia','terzilio','terzilla','terzillo','terzina','terzino','terzio','terzo','tesea','teseo','tesio','tesolina','tetyana','tibaldo','tiberia','tiberina','tiberio','tiburzio','tilda','tilde','tildo','tilia','tilio','tilla','tillo','timea','timotea','timoteo','tina','tindara','tindaro','tino','tinuccia','tinuccio','tisbe','tita','titina','titino','tito','tittina','tiziana','tiziano','tizio','tobia','tobiolo','tolmina','tolmino','tolomea','tolomeo','tomasino','tomaso','tomassino','tomasso','tomeo','tommasa','tommasina','tommasino','tommaso','tommassino','tona','tonello','tonia','tonina','tonino','tonio','tonuccio','tore','torella','torello','toriddo','torido','torina','torino','torquata','torquato','toruccio','tosca','toscana','toscanello','toscano','tosco','tosella','toselli','tosello','tosolina','toto','tot','tranquilla','tranquillino','tranquillo','trentina','trentino','trento','trieste','triestina','triestino','trifona','trifone','trifonio','trinit','tripoli','tripolina','tripolino','tristana','tristano','trofimena','trovatore','trusiana','tsvetan','georgiev','tuccia','tuccio','tulio','tullia','tulliana','tulliano','tullio','tullo','turi','turidda','turiddo','turiddu','turido','turillo','turino','turio','turrido','tusolina','ubalda','ubaldina','ubaldino','ubaldo','uberta','ubertina','ubertino','uberto','uboldo','udalrico','udalrigo','udilia','udilio','udilla','udillo','udina','udino','udo','uga','uggeri','uggero','ughetta','ughetto','ugo','ugoberto','ugolina','ugolino','ugone','uguccione','uldarico','ulderica','ulderico','ulderiga','ulderigo','uliana','uliano','ulissa','ulisse','uliva','uliviero','ulivio','ulivo','ulla','ulpia','ulrica','ulrico','ultima','ultimina','ultimino','ultimio','ultimo','umberta','umbertina','umbertino','umberto','umbra','umbria','umbrio','umbro','umile','umiliana','umiliano','una','unica','unico','urania','uranio','urano','urbana','urbano','uria','uriana','uriano','urio','urrigo','ursola','ursula','uta','utilia','utilio','valberto','valburga','valchiria','valchirio','valda','valdemara','valdemaro','valdemiro','valdimaro','valdimira','valdimiro','valdina','valdino','valdo','valdomiro','valenta','valente','valentina','valentiniano','valentino','valento','valenzano','valenzia','valenzio','valenzo','valeria','valeriana','valeriano','valerina','valerino','valerio','valfreda','valfredo','valfrida','valfrido','valiero','valleverde','valleverdina','valperto','valpurga','valter','valtere','valteria','valterina','valterino','valterio','valtero','valtiero','vana','vanda','vandina','vandino','vando','vandro','vanella','vanessa','vanetta','vani','vania','vanina','vanino','vanio','vanna','vannella','vannetta','vannetto','vanni','vannia','vannina','vannino','vannio','vanno','vannuccio','vara','varetto','varia','varina','varino','vario','varisto','varna','varnero','varniero','varno','varo','vasco','vassero','vassila','vassili','vassilli','vea','velarda','velardo','velda','veleda','velia','veliardo','velide','velina','velino','velio','velleda','velledo','velma','velmina','velmino','velmo','venanza','venanzia','venanzina','venanzio','venanzo','venazio','venceslao','venceslava','venera','veneranda','venerando','venere','veneria','venerina','venerino','venerio','venero','veneta','veneto','venezia','veneziano','venezio','venicia','venicio','veniero','ventura','venturina','venturino','venturo','venusta','venusto','venuta','venuto','venzo','veo','vera','verando','verardino','verardo','verbena','verdiana','verdiano','verdun','verena','vereno','vergiglio','vergilio','verginia','verginio','veridiana','verina','verino','verio','verissimo','vermondo','vero','veronica','veronica','silvia','veronico','verter','verther','vespasiana','vespasiano','vettore','vettorino','vetulia','vetulio','veturia','veturio','vezia','vezio','vezzosa','vezzoso','vica','vicenza','vicenzina','vicenzino','vicenzo','vicinio','vicino','vico','vida','vidio','vido','vienna','viera','vieri','viero','viero','vigilia','vigilio','vilelma','vilelmo','vilfreda','vilfredo','vilfrida','vilfrido','vilia','vilio','villa','villelma','villelmina','villelmo','villermina','villermo','vilma','vilmaro','vilna','vinca','vincenza','vincenzella','vincenzina','vincenzino','vincenzo','vinceslao','vinicia','vinicio','vinicio','eurus','vinicio','gaspare','viola','violanda','violando','violanta','violante','violantina','violantino','violanto','violeta','violetta','violetto','violo','virgilia','virgilio','virginia','virginio','viridiana','virna','viscardo','vismaro','vita','vitagliano','vitala','vitale','vitalia','vitaliana','vitaliano','vitalina','vitalino','vitalio','vitamaria','vitantonia','vitantonio','vitina','vitino','vito','vito','rocco','vitonicola','vittore','vittoria','vittoriana','vittoriano','vittorina','vittorio','vituccia','vituccio','vitulia','viva','vivaldi','vivaldo','vivante','vivella','vivenzia','vivenzio','vivetta','vivetto','vivian','viviana','vivianna','viviano','vivina','vivio','vivo','vladimira','vladimiro','vladislavo','volfango','volfrano','voltero','volturno','vulmaro','wagner','walburga','walchiria','walchirio','walda','waldemar','waldemara','waldemaro','waldemiro','waldino','waldo','walfredo','walfrido','walpurga','walter','waltera','walterina','walterino','walther','wanda','wandina','wando','wania','wanna','wassili','weber','welleda','welma','wera','wero','werter','werther','weslie','wiera','wieslaw','wilelma','wilelmo','wilfredo','wilfrida','wilfrido','wilia','willelma','willelmina','willelmo','william','william','ramiro','wilma','wilmo','wilna','wladimira','wladimiro','wolfango','wolframo','wolfrano','wulmaro','ylenia','yolanda','yole','yvonne','zaccaria','zaccheo','zafferino','zaffira','zaffiro','zagorka','zahra','zaira','zairo','zana','zanella','zanello','zanetta','zanetto','zani','zanilla','zanillo','zanina','zanino','zannetta','zannetto','zanobi','zara','zarina','zarino','zaro','zaved','khan','zaveria','zaverio','zea','zeferino','zefferina','zefferino','zeffira','zeffirina','zeffirino','zeffiro','zefira','zefirina','zefirino','zefiro','zeila','zelda','zelfira','zelia','zelica','zelina','zelinda','zelindo','zelino','zelio','zelma','zelmina','zelmino','zelmira','zelmiro','zelmo','zelo','zemira','zemiro','zena','zenaide','zenia','zenio','zeno','zenobia','zenobio','zenone','zenovia','andreea','zeo','zerbina','zerbino','zilda','zilia','ziliante','zilio','zilla','zina','zino','zita','zoa','zoe','zoella','zoello','zoia','zoila','zoilo','zola','zolferino','zolia','zopita','zopito','zoraide','zoraido','zosimo','zulina','zulino']);
    if (dictionary.has(text))
        return text.charAt(0).toUpperCase()+ text.slice(1);
    else
        return "Utente";
}
function searchEndpoints(text){
    let solution= endpoints.findByInput(text);
    if (solution!=null) {
        if (Array.isArray(solution))    //conflict of keywords. needs to specify
        {
            console.log(solution);
            var result = "Intendi " + solution[0].getName();
            for (let i=1;i<solution.length;i++) {
                if (i === solution.length - 1)
                    result = result.concat(" o " + solution[i].getName() + " ?");
                else
                    result = result.concat(", " + solution[i].getName());
            }
            return result;
        }
        else {
            //it's going to ask if endpoint solution is the one requested
            nodeYesNo.setSolution(didI[Math.floor(Math.random() * didI.length)]);
            previousNode = solution;
            currentNode = nodeYesNo;
            addChat(null, gotcha[Math.floor(Math.random() * gotcha.length)] + " " + solution.getSolution())
            return "<strong>" + name + "</strong>" + ", " + didI[Math.floor(Math.random() * didI.length)];
        }
    }
    return null;
}



function searchNodes(text){
    let result=null;
    let entries= [];
    for (let i=0;i<currentNode.getNodes().length;i++) {
        for (let j = 0; j < currentNode.getNodes()[i].getKeywords().length; j++) {
            if (text.includes(currentNode.getNodes()[i].getKeywords()[j]) || StringUtils.compareSimilarityPercent(currentNode.getNodes()[i].getKeywords()[j],text)>=80) {
                entries.push(currentNode.getNodes()[i]);
                break;
            }
        }
    }
    if (entries.length===1)
    {
        if (entries[0].getCode()==="YesNo")     // yes/no node
            result=handleYesNo(entries[0]);
        else {
            result = gotcha[Math.floor(Math.random() * gotcha.length)] + " " + entries[0].getSolution();
            if (entries[0].getNodes()=== null)          //is leaf node
                currentNode= node0;
            else
                currentNode = entries[0];
        }
    }
    else if (entries.length>1) {
        result = "Intendi " + entries[0].getName();
        for (let i=1;i<entries.length;i++) {
            if (i === entries.length - 1)
                result = result.concat(" o " + entries[i].getName() + " ?");
            else
                result = result.concat(", " + entries[i].getName());
        }
    }
    return result;
}

function handleYesNo(entry)
{
    if (entry===nodeYes)
    {
        if (previousNode.getNodes().length===0)              //is a leaf node
            currentNode=node0;
        else
            currentNode=previousNode;
        return yes[Math.floor(Math.random() * yes.length)]
    }
    else{
        currentNode= index.get(previousNode.getCode().slice(0,-1));     //back to first non-endpoint node
        while (currentNode.isEndpoint())
            currentNode= index.get(previousNode.getCode().slice(0,-1));
        addChat(null,"<strong>" + name + "</strong> " + no[Math.floor(Math.random() * no.length)]+ "<br>" + "Ricominciamo! " + "<br>" );
        return currentNode.getSolution();
    }
}

function repromptUser(){
    if (userMoreLost)
    {
        userMoreLost=false;
        if (currentNode!=node0) {
            currentNode=node0;
            addChat(null, "Facciamo così, ricominciamo! " + currentNode.getSolution());
        }
        else
            addChat(null,"Purtroppo non riesco a capirti 😭 " + currentNode.getSolution());
        return;
    }
    userLost++;
    if (userLost==2)
    {
        addChat(null,iWasSaying[Math.floor(Math.random() * iWasSaying.length)] + "...<br>"+ currentNode.getSolution());
        userLost=0;
        userMoreLost=true;
    }
}



class Endpoints
{
    constructor() {
        this.endpoints= [];
    }
    addEndpoint(endpoint){
        this.endpoints.push(endpoint);
    }
    findByInput(text){
        var entries= [];
        for (let i=0;i<this.endpoints.length;i++) {
            for (let j = 0; j < this.endpoints[i].getKeywords().length; j++)
                if (text.includes(this.endpoints[i].getKeywords()[j])) {
                    entries.push(this.endpoints[i]);
                    break;
                }
        }
        switch (entries.length){
            case 0:
                return null;
                break;
            case 1:
                return entries[0];
                break;
            default:
                return entries;
                break;
        }
    }
}

class NodeT {
    constructor (name,code,keywords,endpoint,solution) {
        this.name = name;
        this.code = code.toString();
        this.keywords = keywords;
        this.endpoint = endpoint;
        if (endpoint)
            endpoints.addEndpoint(this);
        this.solution=solution;
        this.nodes = new Array();
        if (this.code!=="YesNo")
            index.set(this.code,this);
    }
    getName () {
        return this.name;
    }
    getCode () {
        return this.code;
    }
    getKeywords (){
        return this.keywords;
    }
    isEndpoint (){
        return this.endpoint===true;
    }
    getNodes (){
        return this.nodes;
    }
    getSolution(){
        return this.solution;
    }
    setName (name){
        this.name=name;
    }
    setCode (code){
        this.code=code;
    }
    setKeywords (keywords){
        this.keywords=keywords;
    }
    setEndpoint (endpoint){
        this.endpoint=endpoint;
    }
    setNodes (nodes){
        this.nodes=nodes;
    }
    setSolution (solution){
        this.solution=solution;
    }
    addChild(node){
        this.nodes.push(node);
    }
}

function createTree(){
    node0.setNodes([node1,node2,node3,node4,node5,node6,node7,node8,node9,nodeA]);
    for (let value of index.values())
        if (value.getCode().length>1)
            index.get(value.getCode().slice(0,-1)).addChild(value);
}


var name;
var userLost=0;
var userMoreLost=false;
var notFound=false;

var index = new Map();          //all nodes index
var endpoints= new Endpoints();

var currentNode=null;

var nodeYes= new NodeT("si", "YesNo", ["si", "s","yes"], false,null);
var nodeNo= new NodeT("no", "YesNo", ["no", "n", "negativo"], false, null);
var nodeYesNo = new NodeT("si o no", "YesNo", null,false, didI[Math.floor(Math.random() * didI.length)]);
nodeYesNo.setNodes([nodeYes,nodeNo]);

var previousNode;

var node0= new NodeT("nome",0,null,false,"Puoi farmi qualsiasi domanda relativa al dipartimento. Cerchi ad esempio informazioni relative all'iscrizione, o sei già uno studente e cerchi informazioni relative ai <strong>corsi</strong>, <strong>laurea</strong> o <strong>tirocinio</strong>? O vuoi sapere qualcosa su di <strong>me</strong>?");
var node1= new NodeT("studiare con noi",1,["iscrivo", "iscrizione", "studiare da voi", "venire", "venire da voi","iscrivermi", "iscrivere","studiare", "orientarmi"],false,"Hai bisogno di informazioni sulle <strong>Lauree</strong>, sulle procedure di <strong>ammissione</strong> (per iscriverti), le iniziative di <strong>orientamento</strong> o sei interessato a <strong>trasferirti</strong> da noi da un altro ateneo o da un altro corso di laurea?");
var node2= new NodeT("insegnamenti",2,["corsi","insegnamenti"],true,"Cerchi informazioni sui corsi <strong>attuali</strong> o quelli degli <strong>anni precedenti</strong>?");
var node3= new NodeT("orari",3,["orari"],true,"Cerchi informazioni sugli orari <strong>attuali</strong> o degli <strong>anni precedenti</strong>?");
var node4= new NodeT("esami",4,["esami"],true,
    "∎ Sono disponibili di seguito i calendari degli esami A.A. 2020-2021 per le tre sessioni ordinarie:<br>" +
    "<br>" +
    "   ∎<strong>Sessione 1</strong> : Gennaio-Febbraio<br>" +
    "<br>" +
    "   ∎<strong>Sessione 2</strong> : Giugno-Luglio<br>" +
    "<br>" +
    "   ∎<strong>Sessione 3</strong> : Settembre<br>" +
    "<br>" +
    "∎ Le modalità di svolgimento degli esami (in presenza oppure on line) dipenderanno dall'andamento della pandemia e quindi dalle indicazioni governative.");
var node5= new NodeT("mobilità",5,["mobilità"],true,
    "Il corso di studi in Informatica prevede diversi programmi di <strong>mobilità</strong> internazionale:<br>" +
    "<br>" +
    "Il programma <strong>Erasmus+</strong><br>" +
    "<br>" +
    "Il programma <strong>MOST</strong>(per i periodi fuori UE)<br>" +
    "<br>" +
    "Il programma \"<strong>doppio titolo</strong>\" per la Laurea Magistrale");
var node6= new NodeT("tutoraggio",6,["tutoraggio"],true,"Il dipartimento di Informatica offre due opzioni di tutoring per gli studenti: <strong>Peer tutoring</strong>, <strong>Tutoring docenti</strong>. Inoltre, organizziamo incontri di <strong>orientamento</strong> volti ad aiutarli in varie questioni. ");
var node7= new NodeT("tirocinio",7,["tirocinio"],false,
    "Il percorso di formazione in Informatica comprende un periodo di tirocinio da svolgere presso un Ente convenzionato con il Dipartimento di Matematica ed Informatica o presso alcuni Enti Pubblici e Istituzioni, tra cui lo stesso Dipartimento.<br>" +
    "<br>" +
    "Per le studentesse e gli studenti immatricolate/i a partire dall'A.A. 2015-2016:<br>" +
    "<br>" +
    "   ∎ Il tirocinio è un esame obbligatorio.<br>" +
    "<br>" +
    "   ∎ Il lavoro svolto durante il tirocinio può essere usato come base per lo sviluppo della tesi di Laurea.<br>" +
    "<br>" +
    "   ∎ Il tirocinio deve essere registrato su Esse3 come tutti gli esami.<br>" +
    "<br>" +
    "   ∎ Ogni sessione d'esame avrà a disposizione una data per la registrazione dei tirocini.<br>" +
    "<br>" +
    "La manager didattica referente per i tirocini è la <a href=\"https://sites.google.com/unical.it/informatica/contattaci#h.n0eawrt7yqsk\">dott.ssa Oliva</a>." +
    "<br><br>" +
    "Il tirocinio può essere svolto <strong>in azienda</strong> o <strong>in dipartimento</strong>");
var node8= new NodeT("laurea",8,["laurea","tesi"],true,
    "<strong>1. Richiedere</strong> e <strong>redigere</strong> la <strong>tesi</strong> di laurea.<br>" +
    "<br>" +
    "2. Aver svolto e registrato il <strong>tirocinio</strong>.<br>" +
    "<br>" +
    "3. Completare la domanda di ammissione all’esame di laurea sul sistema <a href=\"https://unical.esse3.cineca.it/Home.do\">Esse3</a> (domanda di fine corso) almeno 45 giorni prima della seduta.<br>" +
    "<br>" +
    "   ∎ È necessario, prima della prenotazione su <a href=\"https://unical.esse3.cineca.it/Home.do\">Esse3</a>, rivolgersi alla propria relatrice o al proprio relatore, per verificare se il proprio lavoro è sufficiente e completo e, quindi, da considerarsi terminato.<br>" +
    "<br>" +
    "   ∎ La domanda va presentata, insieme a tutti gli allegati, presso la <a href=\"https://informatica.unical.it/contattaci\">segreteria studenti del dipartimento</a>.<br>" +
    "<br>" +
    "   ∎ In caso si dovesse rinunciare a partecipare ad una seduta prenotata su Esse3 occorre dare una tempestiva comunicazione alla segreteria studenti del dipartimento.<br>" +
    "<br>" +
    "4. Consegnare almeno 15 giorni prima della seduta:<br>" +
    "<br>" +
    "   ∎ In segreteria studenti del dipartimento:<br>" +
    "<br>" +
    "       1. libretto universitario o tesserino magnetico<br>" +
    "<br>" +
    "       2. Una copia elettronica su CD del lavoro di tesi contenente: la versione sorgente della tesi (in formato word, latex, ecc.), una versione in formato pdf (non protetto e denominato matricola.pdf) ed eventuale software sviluppato.<br>" +
    "<br>" +
    "       3. Nel caso di laurea magistrale, una copia elettronica su CD in formato pdf (non protetto e denominato matricola.pdf), destinata alla Biblioteca Area Tecnico-Scientifica.<br>" +
    "<br>" +
    "   ∎ Alla relatrice o al relatore della tesi:<br>" +
    "<br>" +
    "       1. Una copia elettronica su CD del lavoro di tesi in formato pdf, vidimata dalla segreteria studenti.<br>" +
    "<br>" +
    "5. Preparare il <strong>poster</strong> e la <strong>presentazione</strong> che devono essere approvati dalla relatrice/relatore prima della seduta.<br>" +
    "<br>" +
    "6. Presentare il proprio lavoro il giorno della seduta di Laurea (<strong>prova finale</strong>), in cui ti sarà assegnato il <strong>voto finale</strong>." +
    "<br><br> Vuoi sapere qualcosa di più specifico sulla Laurea? O vorresti dare un'occhiata alle <strong>domande frequenti</strong> (<strong>FAQ</strong>)?");
var node9= new NodeT("contatti",9,["contatti"],false,
    "Vuoi sapere il nostro<strong>indirizzo</strong>? Vuoi accedere al MS <strong>team</strong> di tutti gli studenti?" +
    "<br> Vuoi contattare il <strong>coordinatore</strong>, il <strong>manager didattico</strong> o la <strong>segreteria studenti</strong>?" +
    "<br> Oppure vuoi dare un'occhiata ai nostri <strong>social</strong> o darci dei <strong>suggerimenti</strong>?");
var nodeA= new NodeT("parlami di te", "A", [" te ", "parlami"], false,
    "Vuoi sapere qualcosa su di me? Ti accontenterò, ma sappi che non ho molte cose da dire, sono un solo semplice robot 😅");


var node10= new NodeT("informazioni", 10, ["informazioni", "informazioni corsi","info"], false,  "Cerchi informazioni generali sulla Laurea Triennale o sulla Laurea Magistrale?");
var node11= new NodeT("iscrizione", 11, ["iscrizione", "iscrivermi", "iscrivo"], true, "Hai bisogno di informazioni sull'iscrizione alla Laurea Triennale o alla Laurea Magistrale?");
var node12= new NodeT("trasferimento", 12, ["trasferimento", "trasferirmi", "trasferisco", "trasferire"],true, "È possibile trasferirsi ai Corsi di Laurea in Informatica sia da un altro Ateneo che da un altro Corso di Laurea dell'Università della Calabria.<br>" +
    "In entrambi i casi è necessario avere sostenuto esami per almeno 25 CFU e che sia possibile convalidare almeno altrettanti CFU nella nuova carriera " +
    "in base al corrente <a href=\"https://www.informatica.unical.it/regolamenti\">Manifesto degli studi</a>. Il periodo per presentare domanda formale di passaggio / trasferimento è<br>" +
    "   ∎ 1 agosto - 10 settembre<br>" +
    "<br>" +
    "La commissione fornisce un parere preventivo a potenziali richieste che risultano pervenute entro le date:<br>" +
    "   ∎ 10 gennaio<br>" +
    "   ∎ 10 giugno<br> <br>" +
    "Ogni richiesta di parere deve essere inviata per email seguendo le istruzioni riportate in <a href=\"https://informatica.unical.it/iscrizione/convalidaesami\">questa pagina</a>. Non è possibile integrare richieste già inviate, ma è possibile inviare una nuova richiesta che sostituisce la precedente. I richiedenti potrebbero essere convocati presso gli uffici del Dipartimento per fornire chiarimenti sulla propria richiesta.");
var node13= new NodeT("orientamento", 13, ["orientamento"], true,  "Le nostre iniziative di orientamento consistono in : <br>" +
    "   ∎ Corso di Approfondimento in Matematica e Informatica e Corso di Preparazione al TOLC-I <br>" +
    "   ∎ Corsi di Preparazione alle Olimpiadi<br>" +
    "Per saperne di più vai alla <a href=\"https://informatica.unical.it/orientamentoiningresso\">pagina dedicata</a>");
var node100= new NodeT("informazioni triennale",100,["informazioni triennale","informazioni della triennale", "informazioni sulla triennale", "info triennale"],true,
    "Il corso di studio in Informatica ha l'obiettivo generale di formare una figura professionale orientata al problem-solving, con buone conoscenze nel campo delle scienze computazionali e dei sistemi informatici, capace di comprendere ed utilizzare modelli matematici di interesse scientifico, tecnologico ed economico, e qualificata a svolgere, in ambito aziendale, attività di realizzazione e gestione di sistemi software avanzati e reti di computer. Ai fini indicati, entrambi i curricula del corso di studio in Informatica comprendono attività finalizzate ad acquisire conoscenza dei principi, della struttura e dell'utilizzo dei sistemi di elaborazione; nonché tecniche e metodi di progettazione e realizzazione di sistemi informatici. Particolare attenzione viene prestata alle tecnologie innovative quali quelle legate all'intelligenza artificiale, e allo sviluppo di applicazioni avanzate in contesto industriale.<br>" +
    "<br>" +
    "Il corso di studio in Informatica prevede, infatti, due curricula : <strong>Artificial Intelligence </strong> e <strong> Enterprise Applications. </strong>" +
    "<br><br><br>Per una panoramica completa, consulta la <a href=\"https://www.universitaly.it/index.php/public/schedaCorso/anno/2020/corso/1563079\">scheda dettagliata</a> sul portale ufficiale Universitaly."+
    "<br><br>Per consultare i piani di studio con l'elenco di tutti gli insegnamenti vai alla <a href=\"https://informatica.unical.it/insegnamenti\">pagina dedicata</a> .");
var node1000= new NodeT("corso Artificial Intelligence", 1000,  ["artificial intelligence","artificial triennale","intelligence triennale"],true,
    "Progettato per fornire al laureato le competenze necessarie all'applicazione delle tecniche di base dell'intelligenza artificiale e della modellazione basata sui dati necessarie per la progettazione di sistemi software capaci di fornire all'elaboratore elettronico prestazioni che, a un osservatore comune, sembrerebbero essere di pertinenza esclusiva dell'intelligenza umana.");
var node1001= new NodeT("corso Enterprise Applications", 1001, ["enterprise applications","enterprise triennale", "applications triennale"],true,
    "Progettato per fornire al laureato le competenze necessarie per modellare applicazioni industriali capaci di supportare interi processi aziendali al fine di migliorarne la produttività e l'efficienza.");
var node101= new NodeT("Informazioni magistrale",101,["informazioni magistrale", "info magistrale", "info laurea magistrale"],true,
    "Il Corso di Studio Magistrale in Informatica estende la formazione della laurea triennale in Informatica, al fine di formare figure professionali di livello più elevato, capaci di occupare ruoli di alto grado nelle realtà aziendali legate alle nuove tecnologie e negli enti pubblici, o di proseguire il percorso formativo accedendo a dottorati di ricerca o scuole di specializzazione." +
    "Nel panorama nazionale, il Corso di Studio Magistrale in Informatica dell'Università della Calabria si caratterizza per una solida cultura di base che, nel campo scientifico, è legata all'Intelligenza Artificiale (settore di eccellenza internazionale per l'Università della Calabria) e pone particolare attenzione verso le tecnologie innovative per l'analisi dei dati (Data Science), e quelle legate alla sicurezza dei sistemi informatici (Security). Prevede approfondimenti sugli aspetti metodologici per la gestione agile dei progetti e la simulazione manageriale, oltre ad attività esterne, come tirocini formativi presso aziende, strutture della pubblica amministrazione e laboratori. Nello specifico, il Corso di Studio Magistrale in Informatica prevede due curricula: <bold>Artificial Intelligence and Data Science</bold> e <bold>Artificial Intelligence and Security</bold>. Per maggiori informazioni visita il <a href=\"https://informatica.unical.it/iscrizione/iscrizionemagistrale\">sito</a> ");
var node1010= new NodeT("corso Artificial Intelligence and Data Science", 1010, ["Data Science"], true,
    "Progettato per formare esperti nelle tecniche informatiche di intelligenza artificiale e dell'analisi dei dati. Oltre ad acquisire le tecniche più avanzate dell'intelligenza artificiale, lo studente acquisirà tramite questo curriculum conoscenza avanzata delle tecniche e degli strumenti per lanalisi dei dati (Data Analytics); in particolare, il curriculum risponde alla crescente domanda di esperti nel settore dovute alla diffusione di sistemi software intelligenti che gestiscono grandi quantità di dati (Big Data) per sostenere processi di supporto alle decisioni.");
var node1011= new NodeT("corso Artificial Intelligence and Security", 1011, ["Security"],true,
    "Progettato per formare esperti nelle tecniche informatiche di intelligenza artificiale e della sicurezza dei sistemi informatici. Il curriculum risponde alla crescente domanda di una figura professionale capace di padroneggiare tanto le tecnologie per lanalisi dei dati (Data Analytics) e dei processi quanto di progettare e gestire anche tutti gli aspetti legati alla sicurezza delle infrastrutture e del software.");
var node110= new NodeT("iscrizione triennale", 110, ["triennale"], false,
    "L'iscrizione alla Laurea triennale è regolamentata ogni anno dal bando di iscrizione emesso dall'Ateneo.<br>" +
    "<br>" +
    "   ∎ Per iscriversi è necessario sostenere il test di ingresso TOLC-I erogato dal CISIA.<br>" +
    "<br>" +
    "Maggiori informazioni sono riportate alla <a href=\"https://www.mat.unical.it/demacs/TOLC\">pagina dedicata</a> all'ammissione e al test TOLC.");
var node111= new NodeT("iscrizione magistrale", 111, ["magistrale"], false,
    "<br>" +
    "L'iscrizione alla Laurea magistrale è regolamentata ogni anno da appositi bandi di iscrizione specifici emessi dall'Ateneo.<br>" +
    "<br>" +
    "   ∎ Per gli studenti italiani e comunitari, è prevista una prova di ammissione che si compone di domande a risposta chiusa ed aperta volte a verificare la conoscenza di nozioni di base di Matematica ed Informatica. Esempi di quesiti sono disponibili qui.<br>" +
    "<br>" +
    "   ∎ Per gli studenti non comunitari è previsto una selezione basata sul proprio curriculum che segue una procedura gestita dal Welcome Office, tutte le informazioni sull'ammissione sono disponibili sul <a href=\"https://www.unical.it/portale/ateneo/amministrazione/staffrettore/rel_int/welcomeoffice_ing/\">sito del Welcome Office di ateneo</a>.");


var node20= new NodeT("insegnamenti attuali", 20, ["attuali"],false,"Gli attuali corsi della triennale sono disponibili a <a href=\"https://informatica.unical.it/insegnamenti/triennale2020-2021\">questa</a> pagina. <br> <br> <a href=\"https://informatica.unical.it/insegnamenti/magistrale2020-2021\">qui</a> ci sono invece i corsi della magistrale.");
var node21= new NodeT("anni precedenti",21,["precedenti","passati","scorsi"],false,"Hai bisogno dei corsi di quali anni? <strong>2019-2020</strong>, <strong>2016-2019</strong> o <strong>2009-2016</strong>");
var node210= new NodeT("corsi 2019-2020", 210, ["2019-2020","2020","2019"],true,
    "I corsi della triennale del 2019-2020 sono disponibili a <a href=\"https://informatica.unical.it/insegnamenti/triennale2019-2020\">questo</a> indirizzo. <a href=\"https://informatica.unical.it/insegnamenti/magistrale2019-2020\">Qui</a> per la magistrale.");
var node211= new NodeT("corsi 2016-2019",211,["2016-2019","2016","2017","2018","2019"],true, "I corsi della triennale degli anni 2016-2019 sono disponibili a <a href=\"https://informatica.unical.it/insegnamenti/triennale2016-2019\">questo</a> indirizzo. <a href=\"https://informatica.unical.it/insegnamenti/magistrale2016-2019\">Qui</a> per la magistrale");
var node212= new NodeT("corsi 2009-2016", 212, ["2009-2016","2009","2010","2011","2012","2013","2014","2015","2016"],true,"I corsi della triennale degli anni 2009-2016 sono disponibili a <a href=\"https://www.mat.unical.it/informatica/VecchieInformazioniCorsi\">questo</a> indirizzo. <a href=\"https://www.mat.unical.it/informatica/ProgrammiCorsiEstinti%28VecchioOrdinamento%29\">Qui</a> per la magistrale" );


var node30= new NodeT("orari attuali", 30, ["attuali"],false,"Cerchi informazioni sugli <strong>orari</strong> della <strong>triennale</strong> o <strong>magistrale</strong>?")
var node300= new NodeT("orari triennale", 300, ["triennale", "orari della triennale"], false,"<a href=\"https://drive.google.com/drive/folders/1c5_Amu_8mWOEa3JBrwdc4TLXPZsol5zi\">Ecco</a> gli orari della triennale.");
var node301= new NodeT("orari magistrale", 301, ["magistrale", "orari della magistrale"], false, "<a href=\"https://drive.google.com/drive/folders/1c76HKOGqhruTmtLHOUfWtI7UckVzyi95\">Ecco</a> gli orari della magistrale.");
var node31= new NodeT("orari anni precedenti", 31, ["orari anni precedenti","anni precedenti"],false,
    "<a href=\"https://drive.google.com/drive/folders/1ifJ_cW2kY-cNDdierxaVFGqBdGBofgcN\">Ecco</a> gli orari degli anni 2019-2020. <a href=\"https://drive.google.com/drive/folders/1VHxfSOB6ef8aURVQz1xqWz54H2xV9nvd\">Qui</a> invece quelli dell'anno 2020-2021.");

var node40= new NodeT("esami Sessione 1",40, ["sessione 1"],true,"La <strong>sessione 1</strong> comprende i mesi di Gennaio e Febbraio. Hai bisogno degli orari della triennale o della magistrale?");
var node400= new NodeT("Sessione 1 triennale", 400, ["triennale", "sessione 1 triennale"], false, "<a href=\"https://drive.google.com/file/d/1Doeh_4TCeoEGA3gvoiRTZt1SufbfWQfZ/view?usp=drive_web\">Ecco</a> il calendario degli esami della triennale relativo alla sessione 1");
var node401= new NodeT("sessione 1 magistrale", 401, ["magistrale, sessione 1 magistrale"], false, "<a href=\"https://drive.google.com/file/d/1DlOhKCR9waSUdUM1RgJGOmyBSKLMo_wL/view?usp=drive_web\">Ecco</a> il calendario degli esami della magistrale relativo alla sessione 1")
var node41= new NodeT("esami Sessione 2",41, ["sessione 2"],true,"La <strong>sessione 2</strong> comprende i mesi di Giugno e Luglio. Hai bisogno degli orari della triennale o della magistrale?");
var node410= new NodeT("Sessione 2 triennale", 410, ["triennale", "sessione 2 triennale"], false, "<a href=\"https://drive.google.com/file/d/1DY8napifhP6ra0irEpLKBfLdGmLq2aaR/view?usp=drive_web\">Ecco</a> il calendario degli esami della triennale relativo alla sessione 2");
var node411= new NodeT("sessione 2 magistrale", 411, ["magistrale, sessione 2 magistrale"], false, "<a href=\"https://drive.google.com/file/d/1DgB2-lziTHOoJdkQe7_E3sKWlLQehYv1/view?usp=drive_web\">Ecco</a> il calendario degli esami della magistrale relativo alla sessione 2")
var node42= new NodeT("esami Sessione 1",42, ["sessione 1"],true,"La <strong>sessione 3</strong> comprende il mese di Settembre. Hai bisogno degli orari della triennale o della magistrale?");
var node420= new NodeT("Sessione 3 triennale", 420, ["triennale", "sessione 3 triennale"], false, "<a href=\"https://drive.google.com/file/d/1DfelxXe-BbATy22PAOm6whryYBOXnAhu/view?usp=drive_web\">Ecco</a> il calendario degli esami della triennale relativo alla sessione 3");
var node421= new NodeT("sessione 3 magistrale", 421, ["magistrale, sessione 3 magistrale"], false, "<a href=\"https://drive.google.com/file/d/1Dd2LQhAzYxX6qGM98gkAaOV18yjrDUP3/view?usp=drive_web\">Ecco</a> il calendario degli esami della magistrale relativo alla sessione 3")
var node43= new NodeT("esami sessione straordinaria",43, ["sessione straordinaria", "sessione extra", "sessione fuori corso", "fuori corso"], true,
"∎ Si ricorda che durante le sessioni straordinarie potranno sostenere gli esami ESCLUSIVAMENTE coloro che risultano fuori corso e che avranno fatto regolare richiesta e si sottolinea, in ogni caso, la necessità di verificare la programmazione degli appelli anche sul sistema Esse3.<br>" +
"<br>" +
"∎ Gli studenti devono presentarsi agli appelli che hanno richiesto.<br>" +
"<br>" +
"   ∎ Se impossibilitati, devono produrre motivate e documentate giustificazioni.<br>" +
"<br>" +
"   ∎ In caso di ripensamenti sull'appello richiesto, devono darne tempestiva comunicazione al docente dell'insegnamento e ai <a href=\"https://informatica.unical.it/contattaci\">manager didattici</a> via email con almeno 1 settimana di anticipo.")
var node44= new NodeT("commissioni esami", 44, ["commissioni"], true, "Le commissioni per l'accertamento del profitto sono disponibili <a href=\"https://informatica.unical.it/commissioni\">qui</a>.");


var node50= new NodeT("Erasmus+",50,["erasmus","erasmus+","programma erasmus"],true,
    "Il Programma <strong>Erasmus+</strong> è il programma di educazione e formazione dell'Unione Europea che permette agli studenti di studiare e lavorare all'estero. Lo <a href=\"https://ec.europa.eu/commission/presscorner/detail/it/IP_14_1025\">studio di impatto</a> su Erasmus+ conferma che il programma di scambio studenti dell'UE migliora le prospettive professionali e la mobilità lavorativa, vedi il memo per i risultati principali.<br>" +
    "<br>" +
    "<a href=\"https://www.unical.it/portale/portalmedia/2019-01/GRADING%20T%20%200500-0600.pdf\">ECTS Grading Table</a> (vedi pagine 1 e 2, ultimo aggiornamento: ottobre 2018)")+
    "<br> Hai bisogno di info sull'Erasmus+ <strong>in entrata</strong> o <strong>in uscita</strong>? Oppure hai invece bisogno della <strong>lista</strong> delle Università?";
var node500= new NodeT("Lista Università", 500, ["lista", "università"],false,
    "Attualmente i corsi di Laurea in Informatica ha accordi di scambio con le seguenti Università: <br>" +
    "<br>∎ University of Applied Science - Upper Austria, Hagenberg, Austria (3 studenti)<br>" +
    "<br>" +
    "∎ Alpen-Adria-Universität, Klagenfurt, Austria (2 studenti)<br>" +
    "<br>" +
    "∎ Technische Universität Wien, Vienna, Austria (3 studenti)<br>" +
    "<br>" +
    "∎ Katholieke Universiteit Leuven, Leuven, Belgio / Belgium (2 studenti)<br>" +
    "<br>" +
    "∎ Angel Kanchev University of Ruse, Ruse, Bulgaria (uno studente)<br>" +
    "<br>" +
    "∎ Université d'Artois, Arras, Francia / France (2 studenti)<br>" +
    "<br>" +
    "∎ University of Bayreuth, Bayreuth, Germania / Germany (2 studenti)<br>" +
    "<br>" +
    "∎ Technische Universität Clausthal, Clausthal, Germania / Germany (7 studenti)<br>" +
    "<br>" +
    "∎ University of Potsdam, Potsdam, Germania / Germany (2 studenti)<br>" +
    "<br>" +
    "∎ Kaunas University of Technology, Kaunas, Lituania / Lithuania (3 studenti)<br>" +
    "<br>" +
    "∎ South East European University, Tetovo, Macedonia (2 studenti)<br>" +
    "<br>" +
    "∎ Delft University of Technology, Delft, Olanda / The Netherlands (2 studenti)<br>" +
    "<br>" +
    "∎ AGH University of Science and Technology, Krakow, Polonia / Poland (4 studenti)<br>" +
    "<br>" +
    "∎ Maria Curie-Sklodowska University, Lublin, Polonia / Poland (2 studenti)<br>" +
    "<br>" +
    "∎ Adam Mickiewicz University, Poznan, Polonia / Poland (2 studenti)<br>" +
    "<br>" +
    "∎ Nicolaus Copernicus University, Torun, Polonia / Poland (2 studenti)<br>" +
    "<br>" +
    "∎ Warsaw Management University, Varsavia, Polonia / Poland (3 studenti)<br>" +
    "<br>" +
    "∎ Instituto Superior Técnico, Lisbona, Portogallo / Portugal (2 studenti)<br>" +
    "<br>" +
    "∎ University of Plymouth, Plymouth, Regno Unito / United Kingdom (2 studenti)<br>" +
    "<br>" +
    "∎ Universitatea Babes Bolyai, Cluj-Napoca, Romania (2 studenti)<br>" +
    "<br>" +
    "∎ Universitatea de Vest din Timişoara, Timişoara, Romania (3 studenti)<br>" +
    "<br>" +
    "∎ Universidade da Coruña, A Coruña, Spagna / Spain (2 studenti)<br>" +
    "<br>" +
    "∎ Universidad de Málaga, Málaga, Spagna / Spain (3 studenti)<br>" +
    "<br>" +
    "∎ Universidade de Vigo, Vigo, Spagna / Spain (2 studenti)");
var node501= new NodeT("Erasmus+ in entrata",501,["in entrata", "entrata"],false,
    "È possibile trovare una breve descrizione dell'Università della Calabria e dei Corsi di Laurea in Informatica nel nostro <a href=\"https://drive.google.com/file/d/1FjRRMZL0sjqN4LzE4tEzislyxSZTVNoG/view\">opuscolo informativo</a> (in Inglese). Una descrizione dettagliata degli insegnamenti offerti è disponibile a questo <a href=\"https://informatica.unical.it/insegnamenti\">link</a>. Informazioni di carattere più generale sul programma Erasmus+ e sull'università sono invece disponibili sul sito web <a href=\"https://unical.llpmanager.it/studenti/\">Erasmus+ Study</a> e sul sito web dell'<a href=\"https://www.unical.it/portale/\">Università della Calabria</a>.");
var node502= new NodeT("Erasmus+ in uscita", 502, ["in uscita","uscita"],false,
    "Le/Gli interessate/i al programma Erasmus+ devono partecipare ai bandi di ammissione dedicato che vengono pubblicati ogni anno.<br>" +
    "Esistono due tipologie di periodo all'estero:<br>" +
    "<br>" +
    "∎ <strong>Traineeship</strong> - per svolgere un tirocinio presso una azienda/ente di ricerca all'estero (solo lavoro/tesi, niente esami)<br>" +
    "<br>" +
    "∎ <strong>Study</strong> - per svolgere un periodo di studio all'estero (esami e tesi)<br>" +
    "<br>" +
    "Il programma Erasmus+ consente di spostarsi in EU, chi volesse trascorrere un periodo fuori dalla EU deve optare per il <a href=\"https://www.unical.it/portale/ateneo/international/estero/overses/\">programma MOST</a>.<br>" +
    "<br>" +
    "Per maggiori informazioni consulta:<br>" +
    "<br>" +
    "∎ Erasmus+ Study: <a href=\"https://unical.erasmusmanager.it/studenti/\">sito di Ateneo</a><br>" +
    "<br>" +
    "∎ Erasmus+ Traineeships - tirocinio o stage all'estero: <a href=\"https://betforjobs.erasmusmanager.it/\">sito di Ateneo</a>");
var node51= new NodeT("Programma MOST", 51, ["MOST, programma most"],true,"Vai <a href=\"https://www.unical.it/portale/ateneo/international/estero/overses/\">qui</a> per informazioni sul programma MOST." );
var node52= new NodeT("Doppia laurea magistrale", 52, ["doppia l", "doppia laurea", "doppia laurea magistrale", "doppio t", "doppio titolo"], true,
    "Il Corso di Laurea Magistrale in Informatica prevede due accordi per il doppio titolo con:<br>" +
    "<br>" +
    "<strong>∎ Master in \"Software Engineering\"</strong>, della <strong>University Of Applied Sciences Upper Austria, Hagenberg Campus, Austria</strong><br>" +
    "<br>" +
    "   ∎ <a href=\"https://drive.google.com/file/d/1mG_B2RqMqohbnwmFM4aTQvoq97hcW1N_/view\">L'accordo di programma doppio titolo</a><br>" +
    "<br>" +
    "   ∎ <a href=\"https://www-en.fh-ooe.at/hagenberg-campus/\">Sito University Of Applied Sciences Upper Austria</a><br>" +
    "<br>" +
    "∎ <strong>Master in \"Informatique - Parcous Intelligence Artificielle\"</strong> della <strong>Université d'Artois</strong>, Arras Cedex, Francia<br>" +
    "<br>" +
    "   ∎ <a href=\"https://drive.google.com/file/d/18fj_jtcfh1yy-e2IW1-LCdYSbpPWbSG5/view\">L'accordo di programma doppio titolo</a><br>" +
    "<br>" +
    "   ∎ <a href=\"http://www.univ-artois.fr/\">Sito Université d'Artois</a><br>" +
    "<br>" +
    "Il Corso di Studi prevede un incontro di orientamento a fine Settembre/inizio ottobre. A seguito di tale incontro, le studentesse e gli studenti interessati propongono la loro candidatura scrivendo al coordinatore <strong>entro Ottobre</strong>.<br>" +
    "<br>" +
    "La documentazione va preparata e consegnata al <a href=\"https://informatica.unical.it/contattaci\">coordinatore</a> entro il mese di Dicembre dell'anno precedente a quello del periodo all'estero.");
var node53= new NodeT("contatti", 53, ["contatt","contattare","info","per info","informazioni"],false,"Per informazioni, rivolgersi al <strong>Prof. Antonio Fuduli</strong> <br>" +
    "<br>   ∎ Email: antonio.fuduli@unical.it<br>" +
    "<br>" +
    "   ∎ <a href=\"https://www.mat.unical.it/~fuduli/\">Web page</a><br>" +
    "<br>" +
    "Ufficio<br>" +
    "<br>" +
    "   ∎ Cubo 31B, quinto piano")


var node60= new NodeT("Peer Tutoring",60, ["peer","peer tutoring","tutor studenti","tutoring studenti"], true,
    "Il peer tutoring è un servizio di supporto alla didattica. Il tutor ha il compito, in base alle sue specifiche competenze, di assistere lo studente durante la fase di apprendimento ed esercizio. Tale attività è distinta dall'attività di tutoring svolta dai docenti.<br>" +
    "<br>" +
    "Il servizio peer tutoring è disponibile sul canale Microsoft Teams dedicato, <a href=\"https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fchannel%2F19%3Ad9d2df90aec04fa480bab083dde21074%40thread.tacv2%2FGenerale%3FgroupId%3D002ed2d3-ee6a-4625-b0d0-aa08794c1c04%26tenantId%3D7519d0cd-2106-47d9-adcb-320023abff57&type=channel&deeplinkId=86bd456c-30c3-490c-98b9-7368d0375d62&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true\">clicca qui</a> per iscriverti.<br>" +
    "<br>" +
    "Per qualsiasi informazione sul peer tutoring, contattare la <a href=\"mailto:simona.perri@unical.it\">Prof.ssa Simona Perri</a>.");
var node61= new NodeT("Tutoring docenti", 61, ["tutoring docenti", "tutoring professori", "mentoring"],true,
    "L’attività di tutoring ha l’obiettivo di fornire a ciascuno studente un riferimento specifico, tra i professori ed i ricercatori afferenti ai corsi di studio triennale e magistrale in informatica, a cui rivolgersi per avere consigli ed assistenza per la soluzione degli eventuali problemi che dovessero presentarsi nel corso della carriera universitaria.<br>" +
    "<br>" +
    "A partire dall'A.A. 2019/2020 l'attribuzione docenti-studenti è stabilita sulla base delle iniziali del cognome della studentessa o dello studente. Puoi consultare l' <strong>elenco di attribuzione docenti</strong>.<br>" +
    "<br>" +
    "Se ti sei immatricolata/o prima dell'A.A. 2018/2019 puoi scegliere come tutor la/il docente che ti era stata/o precedentemente assegnata/o (indicato <a href=\"https://drive.google.com/file/d/13DTM4-0nNFm5DH5Is0MUCP1mRS1G5x8T/view\">qui</a>) oppure la/il docente a te assegnata/o in base all'elenco attuale.");
var node610= new NodeT("elenco attribuzione docenti", 610, ["lista", "elenco"],false,
    "∎ Alviano Mario: AAA - APN<br>" +
    "<br>" +
    "∎ Calimeri Francesco: APO - BIE<br>" +
    "<br>" +
    "∎ Cauteruccio Francesco: BIF - CAK<br>" +
    "<br>" +
    "∎ D'Ambrosio Donato: CAL - CEQ<br>" +
    "<br>" +
    "∎ Dodaro Carmine: CER - CRD<br>" +
    "<br>" +
    "∎ Fionda Valeria: CRE - DEK <br>" +
    "<br>" +
    "∎ Fuduli Antonio: DEL - FEQ<br>" +
    "<br>" +
    "∎ Grasso Giovanni: FER - GAD<br>" +
    "<br>" +
    "∎ Greco Gianluigi: GAE - GRD<br>" +
    "<br>" +
    "∎ Ianni Giovambattista: GRE - LAL<br>" +
    "<br>" +
    "∎ Manna Marco: LAM - MAM<br>" +
    "<br>" +
    "∎ Perri Simona: MAN - MOM<br>" +
    "<br>" +
    "∎ Ricca Francesco: MON - NUO<br>" +
    "<br>" +
    "∎ Rullo Pasquale: NUP - PIZ<br>" +
    "<br>" +
    "∎ Spataro William: QAA - REM<br>" +
    "<br>" +
    "∎ Terracina Giorgio: REN - SCN<br>" +
    "<br>" +
    "∎ Van Bon John: SCO - STQ<br>" +
    "<br>" +
    "∎ Zangari Jessica: STR - ZZZ")
var node62= new NodeT("orientamento studenti",62,["orientamento","incontri","aiuto"],false,
    "Il Corso di Laurea organizza periodicamente degli incontri di orientamento rivolti a tutti gli studenti per aiutarli nella personalizzazione del piano di studio, nella richiesta della tesi di laurea, nello svolgimento del tirocinio o di un periodo di studio all'estero. Inoltre, gli studenti che accusano un ritardo nel superamento degli esami o delle particolari difficoltà sono invitati a discutere dei loro problemi con il Coordinatore, il proprio tutor docente e i manager didattici.<br>" +
    "Il nostro dipartimento mette a disposizione un canale di <strong>supporto pratiche</strong> e un <strong>team</strong> di tutti gli <strong>studenti</strong>. Puoi inoltre consultare il <strong>calendario riunioni</strong>.");
var node620= new NodeT("supporto pratiche", 620, ["supporto", "supporto pratiche"],true,
    "∎ Supporto pratiche. Per informazioni su pratiche di natura didattica e/o amministrativa tutti i giovedì dalle 9:00 alle12:00 entra nel team<br>" +
    "<br>" +
    "   ∎ hdz2yfl");
var node621= new NodeT("team studenti", 621, ["team", "team studenti", "teams"], true,
    "∎ Team di tutti gli studenti. Per ricevere avvisi importanti e partecipare alle riunioni di orientamento entra nel team<br>" +
    "<br>" +
    "   ∎ Link<br>" +
    "<br>" +
    "   ∎ xq48jlw")
var node622= new NodeT("calendario riunioni", 622, ["calendario", "riunioni"], true,
    "[omissis]<br>" +
    "<br>" +
    "Tesi e Tirocinio/Thesis and Training - 10/04/2020 - 11:00<br>" +
    "<br>" +
    "Orientamento in itinere/Orientation in itinere - 27/07/2020 - 09:30<br>" +
    "<br>" +
    "Assemblea Plenaria/ Plenary meeting - 28/09/2020 - 15:30<br>" +
    "<br>" +
    "Tesi e Tirocinio/Thesis and Training - 08/04/2020 - 11:30<br>" +
    "<br>" +
    "Piano di studio/Study plan - 12/10/2020 - dalle 9:30/from 11:30<br>" +
    "<br>" +
    "Piano di studio/Study plan - 16/10/2020 - dalle 9:30/from 9:30<br>" +
    "<br>" +
    "Piano di studio/Study plan - 06/11/2020 - dalle 9:30/from 9:30<br>" +
    "<br>" +
    "Doppia Laurea/Dual Degree - 10/11/2020 - 17:30 <br>" +
    "<br>" +
    "Doppia Laurea/Dual Degree - \"Joint event University of  Calabria/Computer Science and Artificial Intelligence and University of Applied Sciences Upper Austria/Software Engineering\" - 16/02/2021 - 15:00 - link pubblico / public link.<br>" +
    "<br>" +
    "Tesi e Tirocinio/Thesis and Training - 16/02/2021 - 17:30");



var node70= new NodeT("tirocinio in azienda", 70, ["tirocinio azienda", "tirocinio in azienda", "tirocinio aziendale","azienda"], true, "Ti riferisci al tirocinio in un'azienda <strong>convenzionata</strong>?");
var node700= new NodeT("tirocinio in azienda convenzionata", 700, ["si","yes"],false, "Vuoi sapere come <strong>richiedere</strong> il tirocinio o l'hai già svolto e vuoi sapere cosa fare al <strong>termine</strong>?");
var node7000= new NodeT("richiedere il tirocinio in azienda convenzionata", 7000, ["richiedere", "richiesta"],false,
    "1. Contattare una/un docente del corso di Laurea che sarà la relatrice o il relatore interno.<br>" +
    "<br>" +
    "2. Scegliere una azienda presso cui svolgere il tirocinio tra quelle in questo <a href=\"https://www.mat.unical.it/informatica/AziendaConvenzionata?action=AttachFile&do=view&target=AziendeConvenzionate.pdf\">elenco</a>.<br>" +
    "<br>" +
    "3. Concordare un tema per lo stage da svolgere presso l'azienda.<br>" +
    "<br>" +
    "4. Ad assegnazione avvenuta:<br>" +
    "<br>" +
    "   1. scaricare e compilare il \"Modulo di Progetto Formativo e di Orientamento\" (<a href=\"https://drive.google.com/file/d/1A920J7fOUjbBs3DLwNF9RffXPUZSuQpZ/view\">download</a>),<br>" +
    "<br>" +
    "   2. consegnare la copia, regolarmente firmata e timbrata dalla/dal rappresentante dell'azienda prescelta alla manager didattica referente.")
var node7001= new NodeT("al termine del tirocinio in azienda convenzionata", 7001, ["termine", "fine", "finito", "completato", "ultimato"],false,
    "La studentessa o lo studente deve:<br>" +
    "<br>" +
    "1. Consegnare alla manager didattica referente i seguenti documenti:<br>" +
    "<br>" +
    "   ∎ un questionario che dovrà essere compilato dal Soggetto Ospitante (<a href=\"https://drive.google.com/file/d/1ghFjKROPY4bQPuiIAWtuXQzr6ng7TEoT/view\">download</a>),<br>" +
    "<br>" +
    "   ∎ il modello di \"Attestazione di fine tirocinio\" (<a href=\"https://drive.google.com/file/d/1Ux0it5k_N9o6p9dt3y7VvxR_CmQORhpc/view\">download</a>), compilato su carta intestata del Soggetto Ospitante.<br>" +
    "<br>" +
    "2. Registrarsi su <a href=\"https://unical.esse3.cineca.it/Home.do\">Esse3</a> al primo appello utile successivo alla data di consegna degli attestati.<br>" +
    "<br>" +
    "ATTENZIONE: Si tenga presente che solitamente sono necessari 20 giorni dalla data della richiesta per l'autorizzazione del Dipartimento a svolgere il tirocinio aziendale. Di conseguenza, le studentesse e gli studenti interessate/i a questo tipo di stage, sono caldamente invitate/i a richiedere prima possibile l'attivazione di stage.")
var node701= new NodeT("tirocinio in azienda non convenzionata", 701, ["no","nope","negativo"], false, "Vuoi sapere come <strong>richiedere</strong> il tirocinio in un'azienda non convenzionata o l'hai già svolto e vuoi sapere cosa fare al <strong>termine</strong>?");
var node7010= new NodeT("richiedere il tirocinio in azienda non convenzionata", 7010, ["richiedere","richiesta"], false ,
    "Nel caso di azienda non convenzionata, è necessario stipulare un'apposita convenzione con l'Università.<br>" +
    "<br>" +
    "A tal fine, la studentessa o lo studente deve:<br>" +
    "<br>" +
    "   ∎ sollecitare la/il rappresentante legale dell'azienda a compilare l'apposito modulo di convenzione (<a href=\"https://drive.google.com/file/d/1fAPfN8KeQc8WAZxfcoeoWrN58Z6VpcnA/view\">download</a>),<br>" +
    "<br>" +
    "   ∎ consegnare tale modulo alla manager didattica referente.<br>" +
    "<br>" +
    "ATTENZIONE: La valutazione della domanda e l'eventuale ratifica della convenzione richiede tipicamente 15 giorni. Di conseguenza, è consigliato iniziare quanto prima possibile la pratica di convenzione, tenuto conto che altri 20 giorni sono necessari per l'autorizzazione del Dipartimento a svolgere il tirocinio aziendale.");
var node7011= new NodeT("al termine del tirocinio in azienda non convenzionata", 7011, ["termine", "fine", "finito", "completato", "ultimato"], false,
    "La studentessa o lo studente deve:<br>" +
    "<br>" +
    "Consegnare alla manager didattica referente i seguenti documenti:<br>" +
    "<br>" +
    "   ∎ un questionario che dovrà essere compilato dal Soggetto Ospitante (<a href=\"https://drive.google.com/file/d/1ghFjKROPY4bQPuiIAWtuXQzr6ng7TEoT/view\">download</a>),<br>" +
    "<br>" +
    "   ∎ il modello di \"Attestazione di fine tirocinio\" (<a href=\"https://drive.google.com/file/d/1Ux0it5k_N9o6p9dt3y7VvxR_CmQORhpc/view\">download</a>), compilato su carta intestata del Soggetto Ospitante.<br>" +
    "<br>" +
    "Registrarsi su <a href=\"https://unical.esse3.cineca.it/Home.do\">Esse3</a> al primo appello utile successivo alla data di consegna degli attestati.<br>" +
    "<br>" +
    "ATTENZIONE: Si tenga presente che solitamente sono necessari 20 giorni dalla data della richiesta per l'autorizzazione del Dipartimento a svolgere il tirocinio aziendale. Di conseguenza, le studentesse e gli studenti interessate/i a questo tipo di stage, sono caldamente invitate/i a richiedere prima possibile l'attivazione di stage.")
var node71= new NodeT("tirocinio in dipartimento", 71, ["tirocinio in dipartimento", "tirocinio dipartimento", "tirocinio università","tirocinio in università"], true, "OK! Vuoi <strong>richiedere</strong> il tirocinio in dipartimento, o l'hai già fatto e vuoi sapere cosa fare <strong>al termine</strong>?");
var node710= new NodeT("richiedere il tirocinio in dipartimento", 710, ["richiedere", "richiesta"], false,
    "La studentessa o lo studente deve:<br>" +
    "<br>" +
    "1. contattare una/un docente del corso di Laurea,<br>" +
    "<br>" +
    "2. concordare con la/il docente un tema per il tirocinio da svolgere.");
var node711= new NodeT("al termine del tirocinio in dipartimento", 711, ["termine", "fine", "finito", "completato", "ultimato"], false,
    "La studentessa o lo studente deve:<br>" +
    "<br>" +
    "1. consegnare alla manager didattica referente il modello di \"Attestazione di fine tirocinio\" (<a href=\"https://drive.google.com/file/d/1UOaCujvReta_fb1E-p3oeIvSx4CxJVho/view\">download</a>),<br>" +
    "<br>" +
    "2. registrarsi su <a href=\"https://unical.esse3.cineca.it/Home.do\">Esse3</a> al primo appello utile successivo alla data di consegna dell'attestato.");


var node80= new NodeT("richiedere la tesi",80, ["richiedere la tesi", "richiesta tesi","richiedere tesi"], true,
    "1. È consigliabile richiedere la tesi all'inizio del secondo semestre dell'ultimo anno e/o quando mancano al più tre esami (meno di 18 CFU) e prima di iniziare il tirocinio.<br>" +
    "<br>" +
    "2. È possibile consultare più di un docente ed avere più di una relatrice o relatore.<br>" +
    "<br>" +
    "3. È possibile scegliere come relatrice o relatore una/un qualsiasi docente del corso di studi. Una/un docente della laurea triennale può essere relatrice/relatore di una tesi di laurea magistrale e vice versa.<br>" +
    "<br>" +
    "4. Non si può richiedere la tesi prima dell'ultimo anno.<br>" +
    "<br>" +
    "5. L'attività di tesi può esser svolta presso l'Università della Calabria oppure presso altre università, istituti o enti di ricerca, pubblici o privati, italiani o stranieri, ed aziende, purché convenzionate con il Dipartimento di Matematica e Informatica.<br>" +
    "<br>" +
    "6. Per realizzare la Tesi in azienda si deve seguire l'iter per l'attivazione di un tirocinio aziendale. Istruzioni qui.<br>" +
    "<br>" +
    "7. La tesi si richiede prendendo un appuntamento con la/il docente. Qualora una delle relatrici o uno dei relatori sia esterna/o al corso di laurea è necessario fare domanda di assegnazione tesi con relatori esterni usando il modello presente nella sezione modulistica di questo sito.")
var node81= new NodeT("redirigere la tesi", 81, ["redirigere", "redire"], true,
    "   ∎ L'elaborato (anche nel caso di tirocinio aziendale) deve essere redatto sotto la supervisione di una relatrice o di relatore afferente al dipartimento, al quale possono essere affiancati uno o più correlatrici o correlatori.<br>" +
    "<br>" +
    "   ∎ Concordare con la relatrice o il relatore i contenuti e la struttura della tesi prima di iniziare a redigere la tesi.<br>" +
    "<br>" +
    "   ∎ Realizzare l'elaborato in formato digitale e sottoporlo periodicamente alla revisione della relatrice o del relatore.<br>" +
    "<br>" +
    "   ∎ Una volta che la relatrice o il relatore ha acconsentito alla consegna, si possono seguire le istruzioni per la consegna. L'eventuale codice sorgente dovrebbe essere consegnato (salvo che sia protetto da nondisclosure agreements) insieme alla tesi." +
    "<br><br>Se vuoi puoi chiedermi dettagli sull'<strong>imapginazione/layout</strong>, <strong>introduzione</strong>, <strong>conclusione</strong> e <strong>bibliografia</strong>. Inoltre, posso fornirti dei <strong>consigli</strong> per la <strong>stesura</strong>");
var node810= new NodeT("impaginazione", 810, ["impaginazione"], true,
    "∎ Lasciare un margine sinistro di circa 3.5 cm per consentire un'eventuale rilegatura.<br>" +
    "<br>" +
    "∎ Il testo deve essere giustificato (allineato sia a destra che a sinistra).<br>" +
    "<br>" +
    "∎ Dimensione del carattere dai 10 ai 12 punti.<br>" +
    "<br>" +
    "∎ Interlinea va da 1 a 1.5.<br>" +
    "<br>" +
    "∎ Usare un font non proporzionale (ad esempio Courier New), per spezzoni di codice e nomi di funzioni e classi che occorrono nel testo.<br>" +
    "<br>" +
    "∎ Usare un font proporzionale con grazie (ad esempio, Times New Roman), per il resto del testo.<br>" +
    "<br>" +
    "∎ Usare le interruzioni di pagina per cominciare le nuove pagine (non usare il tasto INVIO).<br>" +
    "<br>" +
    "∎ Non esiste nessun limite sul numero di pagine della tesi.<br>" +
    "<br>" +
    "∎ È possibile redigere la tesi in inglese.")
var node811= new NodeT("frontespizio", 811, ["frontespizio"], true,
    "∎ Usare il modulo di frontespizio disponibile nella sezione modulistica di questa pagina.<br>" +
    "<br>" +
    "∎ Indicare il nome di tutte le relatrici o i relatori, incluso l'eventuale tutor aziendale.<br>" +
    "<br>" +
    "∎ Se si vuole riportare il titolo della propria relatrice/relatore sul frontespizio, valgono le seguenti regole:<br>" +
    "<br>" +
    "∎ Ch.mo prof. = Per professoresse/professori ordinarie/ordinari<br>" +
    "<br>" +
    "∎ Prof. = Per professoresse/professori associate/associati e aggregate/aggregati (ricercatori docenti) <br>" +
    "<br>" +
    "∎ Dott. = Per ricercatori a tempo determinato e borsisti post-doc <br>" +
    "<br>" +
    "∎ Ing. = Ingegneri <br>" +
    "<br>" +
    "∎ Dott. Ing. = Dottori in Ingegneria non iscritti all'Ordine <br>" +
    "<br>" +
    "∎ In caso di dubbio, chiedere alla propria relatrice o al proprio relatore");
var node812= new NodeT("introduzione", 812, ["introduzione"], true,
    "<br>" +
    "I contenuti dell'introduzione devono essere molto espliciti e contenere in maniera ben evidenziata:<br>" +
    "<br>" +
    "   ∎ Il contesto in cui si colloca la tesi. Se si tratta di una tesi sperimentale, questa descrizione deve porre bene in evidenza qual è il problema irrisolto che il lavoro di tesi vuole affrontare. Se si tratta di una tesi legata allo sviluppo di un particolare modulo software, bisogna porre in evidenza il deficit che questo modulo software va a colmare. Se si tratta di una tesi compilativa, bisogna porre in evidenza la mancanza di documentazione organica correlata all'argomento.<br>" +
    "<br>" +
    "   ∎ Gli obiettivi della propria tesi, espressi alla luce del contesto in cui questa si colloca.<br>" +
    "<br>" +
    "   ∎ Un elenco dei contributi più importanti della propria tesi. Ad esempio, per una tesi di sviluppo, questo può essere l'elenco delle funzionalità più utili e originali implementate.<br>" +
    "<br>" +
    "   ∎ Un elenco dei problemi tecnici che è stato necessario risolvere.<br>" +
    "<br>" +
    "   ∎ La descrizione del contenuto della propria tesi, capitolo per capitolo.");
var node813= new NodeT("conclusioni", 813, ["conclusione"], true,
    "In genere nelle conclusioni si riassume il lavoro svolto, lo si commenta alla luce dei risultati ottenuti, e si indicano possibili direzioni in cui il lavoro potrebbe continuare.");
var node814= new NodeT("bibliografia", 814, ["bibliografia"], true,
    "<br>" +
    "La bibliografia è un elenco di riferimenti a sorgenti informative che sono state consultate durante la redazione del lavoro di tesi. Normalmente a ogni riferimento bibliografico è associato un numero o un'etichetta a cui si può fare riferimento nel corpo del testo.<br>" +
    "<br>" +
    "La bibliografia è un elenco ordinato di voci. I riferimenti bibliografici devono essere utilizzati il più possibile nel corpo del testo, in maniera tale che sia facile per la lettrice/ il lettore ricostruire la sorgente delle affermazioni che vengono fatte.<br>" +
    "<br>" +
    "∎ Esempio di bibliografia ben fatta<br>" +
    "<br>" +
    "   1. F. Calimeri, S. Cozza, G. Ianni. External sources of knowledge and value invention in logic programming. Annals of Mathematics and Artificial Intelligence 50(3-4), pag. 333-361 (2007).<br>" +
    "<br>" +
    "   2. Bjarne Stroustrup. C++ Linguaggio, libreria standard, principi di programmazione (4/Edizione). Edizioni Pearson. ISBN: 9788865188064.<br>" +
    "<br>" +
    "   3. Corso di Laurea in Informatica, Università della Calabria. URL: https://www.mat.unical.it/informatica. Consultato in data 01/01/2020.<br>" +
    "<br>" +
    "   4. Merriam-Webster Online. URL: http://www.m-w.com. Consultato in data 01/05/2020.");
var node815= new NodeT("consigli per la stesura", 815, ["consigli", "stesura"], false,
    "Uso di termini in inglese all'interno di testi in italiano<br>" +
    "Quando si usano termini stranieri all'interno di un paragrafo scritto in Italiano, questi non vanno riportati al plurale.<br>" +
    "<br>" +
    "Ad esempio, è corretto scrivere:<br>" +
    "<br>" +
    "   ∎ \"L'architettura è stata interamente sviluppata usando container docker.\"<br>" +
    "<br>" +
    "mentre è errato:<br>" +
    "<br>" +
    "   ∎ \"L'architettura è stata interamente sviluppata usando containerS docker.\"<br>" +
    "<br>" +
    "Esposizione ordinata dei concetti<br>" +
    "Quando si menziona una componente del proprio lavoro, oppure un modulo, una funzionalità, etc. è necessario che questa sia stata precedentemente stata introdotta e descritta.<br>" +
    "<br>" +
    "Esempio scorretto:<br>" +
    "<br>" +
    "   ∎ \"L’architettura è una classica client-server, per la parte riguardante la WebApp. Tutti questi moduli (eccetto spring e il db), sono stati integrati attraverso RestAPI.\"<br>" +
    "<br>" +
    "Il testo di cui sopra sarebbe sostanzialmente corretto se si fossero prima introdotti gli oggetti di cui si parla. Ma non essendo state definite alcune cose, il lettore vedrà spuntare dal blu alcune informazioni che potrebbero disorientare: \"C'è un modulo spring? Stiamo parlando di una webapp? C'è il backend fatto con un db?\"<br>" +
    "<br>" +
    "Versione corretta:<br>" +
    "<br>" +
    "   ∎ \"L'applicazione presentata viene fornita sotto forma di WebApp e rispetta architetturalmente la classica configurazione client-server. L'architettura include un database di back-end, un modulo spring, e un front-end. Tutti i moduli dell'architettura, eccetto spring e il database, sono stati integrati attraverso RestAPI. RestAPI è uno stile architetturale che [...]\"<br>" +
    "<br>" +
    "Esempio scorretto:<br>" +
    "<br>" +
    "   ∎ \"La prima versione di SuperParser conteneva [...]\"<br>" +
    "<br>" +
    "Che cos'è SuperParser? Ne esisteva un'altra versione?<br>" +
    "<br>" +
    "Versione corretta:<br>" +
    "<br>" +
    "   ∎ \"Per risolvere i problemi sopra-evidenziati, abbiamo introdotto una classe chiamata SuperParser, che può essere usata per ... SuperParser è stata sviluppata in due versioni successive. Nella prima versione SuperParser [...]\"<br>" +
    "<br>");
var node82= new NodeT("poster e presentazione", 82, ["poster", "presentazione", "poster e presentazione", "poster e la presentazione"], false,
    "Desideri informazioni sul <strong>poster</strong> o sulla <strong>presentazione</strong>(solo laurea magistrale) ?" +
    "<br> Ti ricordo che nel caso in cui la tesi richiede l'implementazione di un sistema è possibile, ma non obbligatorio, utilizzare il proprio portatile con l'applicazione in esecuzione per fare una dimostrazione dal vivo del suo funzionamento.");
var node820= new NodeT("poster", 820, ["poster"], true,
    "∎ Usare il modello presente nella sezione modulistica di questo sito. Il modello (identico per Triennale e Magistrale) è disponibile in formato PDF, modificabile AI e in formato SVG.<br>" +
    "<br>" +
    "∎ Le dimensioni devono essere standard (70x100).<br>" +
    "<br>" +
    "∎ Il poster deve includere:<br>" +
    "<br>" +
    "1. titolo dell'elaborato,<br>" +
    "<br>" +
    "2. nome della/o candidata/o e di relatrici/relatori,<br>" +
    "<br>" +
    "3. breve sommario di circa 400 caratteri (spazi esclusi),<br>" +
    "<br>" +
    "4. una chiara indicazione dell'obiettivo della tesi e dei risultati ottenuti,<br>" +
    "<br>" +
    "5. alcune illustrazioni riguardanti risultati ottenuti e/o l'architettura del sistema implementato,<br>" +
    "<br>" +
    "6. una chiara indicazione delle conclusioni della tesi,<br>" +
    "<br>" +
    "∎ Il poster deve essere validato dalla relatrice o dal relatore prima della seduta di laurea.<br>" +
    "<br>" +
    "∎ La realizzazione del poster deve tener conto delle seguenti indicazioni:<br>" +
    "<br>" +
    "1. Sono previsti pochi minuti (da 3 a 5) per l'esposizione e per rispondere a eventuali domande della commissione.<br>" +
    "<br>" +
    "2. L'utilizzo di un carattere di dimensioni inferiori a quelle del modello è sconsigliato.<br>" +
    "<br>" +
    "3. Il poster deve essere essenziale ma completo.<br>" +
    "<br>" +
    "4. Eventuali modifiche alla struttura standard devono essere limitate e concordate con la relatrice/relatore. Ad esempio, è possibile modificare i titoli dei riquadri o elementi di stile.")
var node821= new NodeT("presentazione", 821, ["presentazione"], true,
    "Per la magistrale, la presentazione:<br>" +
    "<br>" +
    "1. ha una durata massima di 5 minuti,<br>" +
    "<br>" +
    "2. deve essere realizzata in formato digitale (PowerPoint o, preferibilmente, PDF),<br>" +
    "<br>" +
    "3. deve essere divulgativa, ovvero comprensibile anche ai non addetti ai lavori,<br>" +
    "<br>" +
    "4. deve concentrarsi sul contributo della tesi,<br>" +
    "<br>" +
    "5. non deve essere prolissa,<br>" +
    "<br>" +
    "6. deve essere validata dalla relatrice/relatore prima della seduta di laurea.<br>" +
    "<br>" +
    "Il modello di presentazione presente nella sezione modulistica di questo sito contiene istruzioni più precise e consigli da seguire per realizzare la propria presentazione.")
var node83= new NodeT("svolgimento prova finale", 83, ["prova finale"], true,
    "∎ Presentarsi in seduta muniti di poster (e presentazione per la Magistrale) e collocarlo in una postazione dell'area riservata.<br>" +
    "<br>" +
    "∎ All'arrivo della Commissione:<br>" +
    "<br>" +
    "1. Presentare il proprio lavoro riferendosi alle illustrazioni presenti sul poster.<br>" +
    "<br>" +
    "2. Rispondere alle domande tecniche della commissione.<br>" +
    "<br>" +
    "3. Eseguire, se prevista, la demo.<br>" +
    "<br>" +
    "4. Le laureande/laureandi della magistrale dovranno prima esporre la presentazione, della durata massima di 5 minuti, del lavoro di tesi.<br>" +
    "<br>" +
    "∎ Dopo aver esaminato i candidati la Commissione di Laurea si ritira per deliberare sull'esito.<br>" +
    "<br>" +
    "∎ Al rientro della Commissione di Laurea gli studenti si mettono in fila davanti alla cattedra e durante la proclamazione fare un passo avanti quando chiamati.")
var node84= new NodeT("Assegnazione voto finale", 84, ["voto finale","voto laurea", "voto di laurea"], true,
    "∎ Il voto di Laurea è stabilito dalla Commissione di Laurea.<br>" +
    "<br>" +
    "∎ Ai fini del superamento della prova finale è necessario conseguire il punteggio minimo di 66/110.<br>" +
    "<br>" +
    "∎ Il punteggio massimo è di 110/110 con eventuale attribuzione della lode (subordinata all'accertata rilevanza dei risultati raggiunti dalla candidata o dal candidato e alla valutazione unanime della Commissione).<br>" +
    "<br>" +
    "∎ Il voto dipende dalla qualità della tesi e della sua presentazione, non dalla relatrice o dal relatore.<br>" +
    "<br>" +
    "∎ Il voto si ottiene sommando:<br>" +
    "<br>" +
    "   1. la votazione di partenza, data dalla media pesata sul numero dei crediti delle votazioni ottenute, espressa come frazione di 110 e arrotondata con il metodo standard,<br>" +
    "<br>" +
    "   2. il voto assegnato alla tesi dalla commissione di Laurea, anche sulla base dell'esposizione e della discussione da parte del candidato, fino a un massimo di 8 punti,<br>" +
    "<br>" +
    "   3. un bonus assegnato alle candidate e ai candidati più meritevoli sulla base della carriera e delle esperienze all'estero.")
var node85= new NodeT("FAQ", 85, ["domande", "frequenti", "FAQ"], false,
    "∎ È possibile presentare in Inglese? Si, è possibile presentare sia in italiano che in inglese.<br>" +
    "<br>" +
    "∎ La proclamazione della Triennale e della Magistrale avvengono nello stesso momento? Tipicamente avvengono in momenti differenti secondo il calendario della seduta.<br>" +
    "<br>" +
    "∎ Le relatrici/ i relatori sono remunerati proporzionalmente al numero di tesisti che seguono? No, le/i docenti non sono remunerati per i tesisti che seguono.<br>" +
    "<br>" +
    "∎ Sono previsti bonus per le tesi in azienda? No, i bonus previsti sono quelli indicati nella sezione assegnazione voto finale di questa pagina.<br>" +
    "<br>" +
    "∎ Posso non pagare le tasse di iscrizione all'anno successivo se ho terminato tutti gli esami? È possibile laurearsi nella sessione primaverile (tipicamente aprile/maggio) senza pagare le tasse di iscrizione nel caso in cui siano stati superati tutti gli esami (tirocinio incluso) entro il mese di dicembre dell’anno precedente.<br>" +
    "<br>" +
    "∎ Quanto dura la presentazione? Tipicamente ogni presentazione dura al massimo 5 minuti.<br>" +
    "<br>" +
    "∎ Si può avere più di una/un relatrice/relatore? Si, ma almeno una/o delle/dei relatrice/relatori deve afferire al dipartimento")


var node90= new NodeT("Indirizzo", 90, ["indirizzo"], true,
    "∎ Dipartimento di Matematica e Informatica<br>" +
    "<br>" +
    "∎ Cubi 30A, 30B, 31A, 31B<br>" +
    "<br>" +
    "∎ Università della Calabria<br>" +
    "<br>" +
    "∎ 87036 Arcavacata di Rende - Italia<br>" +
    "<br>" +
    "∎ Email: cds-informatica@mat.unical.it<br>" +
    "<br>" +
    "∎ Fax: +39 0984 496410");
var node91= new NodeT("team", 91, ["team"], true,
    "Iscriviti al team di tutti gli studenti su MS Team per ricevere avvisi importanti e partecipa alle riunioni di orientamento:<br>" +
    "<br>" +
    "∎ <a href=\"https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fteam%2F19%3A653743619a644a78b4f91b38b801d898%40thread.tacv2%2Fconversations%3FgroupId%3D3614af94-43a2-4278-b01a-89085ae52c48%26tenantId%3D7519d0cd-2106-47d9-adcb-320023abff57&type=team&deeplinkId=a182f384-b064-497e-ae73-8e1d1cf68632&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true\">Link</a> <br>" +
    "<br>" +
    "∎ xq48jlw");
var node92= new NodeT("coordinatore", 92, ["coordinatore"], true,
    "Prof. Francesco Ricca<br>" +
    "<br>" +
    "   ∎ Email: ricca@mat.unical.it<br>" +
    "<br>" +
    "   ∎ Tel. : +39 0984 496406<br>" +
    "<br>" +
    "Ufficio<br>" +
    "<br>" +
    "   ∎ Cubo 30B, quarto piano (livello ponte pedonale)");
var node93= new NodeT("manager didattici", 93, ["manager"], true,
    "Dott.ssa Paola Sdao<br>" +
    "<br>" +
    "   ∎ Email: paola.sdao@unical.it<br>" +
    "<br>" +
    "   ∎ Tel. : +39 0984 496407<br>" +
    "<br>" +
    "   ∎ Fax: +39 0984 496410<br>" +
    "<br>" +
    "Dott.ssa Maria Grazia Oliva<br>" +
    "<br>" +
    "   ∎ Email: mariagrazia.oliva@unical.it<br>" +
    "<br>" +
    "   ∎ Tel. : +39 0984 494462<br>" +
    "<br>" +
    "Orario di ricevimento<br>" +
    "<br>" +
    "   ∎ Lunedì, Mercoledì, Venerdì dalle 11.00 alle 12.00<br>" +
    "<br>" +
    "   ∎ Martedì e Giovedì dalle 16.00 alle 17.00 (solo previo appuntamento)<br>" +
    "<br>" +
    "Ufficio<br>" +
    "<br>" +
    "   ∎ Cubo 30B, sesto piano (livello ponte carrabile)");
var node94= new NodeT("segreteria studenti", 94, ["segreteria"], true,
    "<br>" +
    "Dott.ssa Teresa Molinaro<br>" +
    "<br>" +
    "   ∎ Email: teresa.molinaro@unical.it<br>" +
    "<br>" +
    "   ∎ Tel. : +39 0984 496452<br>" +
    "<br>" +
    "Orario di ricevimento<br>" +
    "<br>" +
    "   ∎ Tutti i giorni dalle 10.00 alle 12.00<br>" +
    "<br>" +
    "   ∎ Lunedì e Mercoledì dalle 16.00 alle 17.00 (solo previo appuntamento)<br>" +
    "<br>" +
    "Ufficio<br>" +
    "<br>" +
    "   ∎ Cubo 30B, sesto piano (livello ponte carrabile)");
var node95= new NodeT("social", 95, ["social", "social network"], true,
    "∎ I Corsi di Laurea in Informatica (triennale e magistrale) sui social:<br>" +
    "<br>" +
    "   ∎ <a href=\"https://www.facebook.com/InformaticaUnical/\">Facebook</a><br>" +
    "<br>" +
    "   ∎ <a href=\"https://twitter.com/csDegreeUnical\">Twitter</a><br>" +
    "<br>" +
    "∎ <a href=\"https://www.facebook.com/offertelavoroeannuncicdsinformaticaunical\">Offerte di lavoro e annunci suggeriti dal corso di laurea</a>")
var node96= new NodeT("suggerimenti", 96, ["suggerimenti", "suggerirti"], true,
    "Se hai suggerimenti o vuoi segnalare un malfunzionamento del nostro sito, <a href=\"https://informatica.unical.it/segnala\">clicca qui</a>. La tua opinione è importante per noi!")


var nodeA0= new NodeT("nome", "A0", ["chiami", "come ti"], true,
    "Mi chiamo DOM, è un piacere aiutare chi ne ha bisogno 😊 ");
var nodeA1= new NodeT("come sto", "A1", ["come stai","come va"], howAreYou[Math.floor(Math.random() * howAreYou.length)]);
var nodeA2= new NodeT("chi sono", "A2", ["chi sei"], true,
    "Sono DOM, l'assistente del corso di Laurea in Informatica, lieto di aiutarti  😙 ");
var nodeA3= new NodeT("cosa fai", "A3", ["che fai", "cosa fai"], true,
    "Sono un robot programmato per assistere chiunque abbia domande sul nostro corso di Laurea. Sono ancora un pò tonto, però faccio del mio meglio per migliorare ogni giorno ✌️ ");
var nodeA4= new NodeT("ciao", "A4", ["ciao", "hello", "hey", "buon giorno", "salve", "buongiorno", "buonasera", "buona sera", "buon pomeriggio", "hola", "salute"],
hi[Math.floor(Math.random() * hi.length)]);
var nodeA5= new NodeT("l'innominabile", "A5", ["ingegneria informatica"], true, "Pessima scelta  🤢 ");




createTree();
console.log(index.values());





