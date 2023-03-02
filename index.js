var ulTarefas = document.getElementById("lista-tarefas");
var inputTarefa = document.getElementById("input-tarefa");
var buttonTarefa = document.getElementById("add-tarefa");
var idTarefa = 0;

buttonTarefa.addEventListener("click", ()=>{
    var tarefa = inputTarefa.value;
    if (tarefa == ""){
        alert("Digite uma tarefa")
    }
    else{
        idTarefa++;
        var liTarefa = document.createElement("li");
        liTarefa.id = idTarefa;
        liTarefa.innerHTML = 
        `${tarefa} <button class="btn-remover" onclick="removerTarefa(event)" name=${idTarefa}>X</button>`;
        ulTarefas.appendChild(liTarefa)
        inputTarefa.value = ""
    }

});

function removerTarefa(event){
    var liParaRemover = document.getElementById(event.target.name);
    liParaRemover.remove();
}


inputTarefa.addEventListener("keypress", (event)=>{
    if (event.key == "Enter"){
        var tarefa = inputTarefa.value;
        if (tarefa == ""){
            alert("Digite uma tarefa")
        }
        else{
            idTarefa++;
            var liTarefa = document.createElement("li");
            liTarefa.id = idTarefa;
            liTarefa.innerHTML = 
            `${tarefa} <button class="btn-remover" onclick="removerTarefa(event)" name=${idTarefa}>X</button>`;
            ulTarefas.appendChild(liTarefa)
            inputTarefa.value = ""
        }
        }
    
    
}) 