(function(){
    //Variables
    let lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar");

    //Funciones
    let agregarTarea = function(){
        let tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);
        if(tarea === ""){
            tareaInput.setAttribute("placeholder", "No ingresaste ningun valor");
            tareaInput.className = "error";
            return false;
        }
        
        //Agregar contenido al enlace
        enlace.appendChild(contenido);
        //Establecer un atributo al enlace
        enlace.setAttribute("href", "#");
        //Agregamos el enlace (a) a la nueva tarea (li)
        nuevaTarea.appendChild(enlace);
        //Agregamos la nueva tarea a la lista
        lista.appendChild(nuevaTarea);
        //limpiar pantalla despues de agregar la nueva tarea
        tareaInput.value = "";

        for(let i = 0; i <= lista.children.length - 1; i++){
            lista.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this);
            });
        }      
    };

    let comprobarInput = function(){
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Agrega otra tarea");//limpia la clase error del input.        
    };

    let eliminarTarea = function(){
        this.parentNode.removeChild(this);        
    };

    //Eventos
    //Agregar tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);
    
    //Comprobar input
    tareaInput.addEventListener("click", comprobarInput);

    //Borrar elementos de la lista
    for(let i = 0; i <= lista.children.length - 1; i++){
        lista.children[i].addEventListener("click", eliminarTarea);
    }

}());