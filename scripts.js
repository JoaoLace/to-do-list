function add() {
    const display = document.getElementById("div");
    var adicionar = prompt("Type bbg: ");
    
    var container = document.createElement("div"); // Container para cada parágrafo e botão
 
    var paragraph = document.createElement("p");
    var node = document.createTextNode(adicionar.valueOf());
    paragraph.appendChild(node);
    paragraph.id = adicionar.valueOf();
 
    var botaoControle = document.createElement("button")
    botaoControle.className = "delete"
    botaoControle.id = adicionar.valueOf() + "1";
    botaoControle.className = "delete";
    botaoControle.innerText = "X";
    botaoControle.addEventListener("click", function(){
       container.remove();
    });
 
    container.appendChild(botaoControle);
    container.appendChild(paragraph);
 
    display.appendChild(container);
 }
 