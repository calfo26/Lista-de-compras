 const ul = document.querySelector("ul");
 const input = document.querySelector("input");
 const btn = document.querySelector("button");


 function AgregarItem(){
     /* Estan son las validaciones */
     let entrada = input.value;
       input.value = " ";
       input.focus();
       
    /* creacion de 3 nuevos elementos */
    const li = document.createElement("li");
    const span = document.createElement("span");
    const botton = document.createElement("button")

    li.appendChild(span);
    li.appendChild(botton);
    span.textContent = entrada;
    botton.textContent = "Eliminar";
    ul.appendChild(li);

    botton.onclick = ()=>{
        ul.removeChild(li);
        
    }

   

 }

 btn.addEventListener("click", AgregarItem);
 