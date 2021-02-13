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
    "mhh mi sa che non ho capito bene."
];
const repeat = [
    "Potresti spiegarti meglio?",
    "Potresti riformulare la domanda?",
    "Potresti chiedermelo in un altro modo?",
    "Potresti dirmelo in un altro modo?",
    "Potresti dirmelo in un modo leggermente diverso?",
    "Potresti chiedermelo in un modo leggermente diverso?",
];

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
                Sono l'assistente del corso di studi in informatica, piacere Roby! Qual è il tuo nome?
                Se non mi piace ti chiamerò Coso
            </div>
        </div>
    </div>
    `;
});
var name;
var userLost=0;
function output(input) {
    let result=null;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    if (text.length===0) return;
    addChat(input,null);
    if (currentNode===null)         //first iteration
    {
        name=text;
        result= "Bene " + name + ", di cosa hai bisogno? Cerchi informazioni relative all'iscrizione, o sei già uno studente e cerchi informazioni relative ai corsi, laurea o tirocinio?";
        currentNode=node0;
    }
    else                    //every other iteration
    {
        let solution= endpoints.findByInput(text);
        if (solution!=null) {
            currentNode= node0;
            result = solution.getSolution();
        }
        else
        {
            let entries= [];
            for (let i=0;i<currentNode.getNodes().length;i++) {
                for (let j = 0; j < currentNode.getNodes()[i].getKeywords().length; j++) {
                    if (text.includes(currentNode.getNodes()[i].getKeywords()[j])) {
                        entries.push(currentNode.getNodes()[i]);
                    }
                }
            }
            if (entries.length===1)
            {
                result=entries[0].getSolution();
                currentNode = entries[0];
            }
            else if (entries.length>1) {
                result = "Cerchi informazioni su " + entries[0].getName();
                for (let i=1;i<entries.length;i++) {
                    if (i === entries.length - 1)
                        result = result.concat(" o " + entries[i].getName() + " ?");
                    else
                        result = result.concat(", " + entries[i].getName());
                }
            }

        }
        if (result===null)
            result = name + " " + imSorry[Math.floor(Math.random() * imSorry.length)] + " " + repeat[Math.floor(Math.random() * repeat.length)];
    }
    addChat(null, result);
    if (result.startsWith(name))
    {
        userLost++;
        if (userLost==2)
        {
            console.log(currentNode.getSolution());
            addChat(null,currentNode.getSolution());
            userLost=0;
        }
    }
    window.scrollTo(0,document.body.scrollHeight);
}

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


class Endpoints
{
    constructor() {
        this.endpoints= [];
    }
    addEndpoint(endpoint){
        this.endpoints.push(endpoint);
    }
    findByCode(code){
        var results=[];
        for (let i=0;i<this.endpoints.length;i++)
            if (this.endpoints[i][1]===code)
                results.push(this.endpoints[i][0]);
        return results;
    }
    findByInput(text){
        for (let i=0;i<this.endpoints.length;i++) {
            for (let j = 0; j < this.endpoints[i].getKeywords().length; j++)
                if (this.endpoints[i].getKeywords()[j] === text)
                    return this.endpoints[i];
        }
        return null;
    }
    getEndpoints(){
        return this.endpoints;
    }
}





var endpoints= new Endpoints();


class NodeT {
    constructor (name,code,keywords,endpoint,nodes,solution) {
        this.name = name;
        this.code = code;
        this.keywords = keywords;
        this.endpoint = endpoint;
        if (endpoint)
            endpoints.addEndpoint(this);
        this.nodes = nodes;
        this.solution=solution;
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
    getEndpoint (){
        return this.endpoint;
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
    addChild(node){
        this.nodes.push(node);
    }
}











var node0= new NodeT("nome",0,null,false,[],"Cerchi informazioni relative all'iscrizione, o sei già uno studente e cerchi informazioni relative ai corsi, laurea o tirocinio?");
var node1= new NodeT("iscrizione",1,["iscrizione","iscrivere","iscrivermi"],false,[],"a");
var node2= new NodeT("corsi",2,["corsi"],false,[],"a");
var node3= new NodeT("orari",3,["orari"],false,[],"a");
var node4= new NodeT("esami",4,["esami"],false,[],"a");
var node5= new NodeT("mobilità",5,["mobilità"],false,[],"a");
var node6= new NodeT("tutoraggio",6,["tutoraggio"],false,[],"a");
var node7= new NodeT("tirocinio",7,["tirocinio"],false,[],"a");
var node8= new NodeT("laurea",8,["laurea"],false,[],"a");
var node9= new NodeT("contatti",9,["contatti"],false,[],"a");

var currentNode=null;
node0.setNodes([node1,node2,node3,node4,node5,node6,node7,node8]);








