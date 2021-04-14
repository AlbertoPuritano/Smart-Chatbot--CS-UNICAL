function createTree(){
    node0.setNodes([node1,node2,node3,node4,node5,node6,node7,node8,node9,nodeA]);
    for (let value of index.values())
        if (value.getCode().length>1)
            index.get(value.getCode().slice(0,-1)).addChild(value);
}

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
var node8= new NodeT("laurea",8,["laurea","laurearmi"],true,
    "Questi sono gli step da seguire per <strong>laurearti</strong>: <br><br>" +
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


var node10= new NodeT("informazioni", 10, ["informazioni", "informazioni corsi","info"], false,  "Cerchi informazioni generali sui corsi della Triennale o della Magistrale?");
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
    "E' il curricula della triennale progettato per fornire al laureato le competenze necessarie all'applicazione delle tecniche di base dell'intelligenza artificiale e della modellazione basata sui dati necessarie per la progettazione di sistemi software capaci di fornire all'elaboratore elettronico prestazioni che, a un osservatore comune, sembrerebbero essere di pertinenza esclusiva dell'intelligenza umana.");
var node1001= new NodeT("corso Enterprise Applications", 1001, ["enterprise applications","enterprise triennale", "applications triennale"],true,
    "E' il curricula della triennale progettato per fornire al laureato le competenze necessarie per modellare applicazioni industriali capaci di supportare interi processi aziendali al fine di migliorarne la produttività e l'efficienza.");
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
var node85= new NodeT("FAQ", 85, ["domande frequenti", "faq"], false,
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


createTree();