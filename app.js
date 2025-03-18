let lista = [];  
let mostrar_lista = document.getElementById('listaAmigos');
let nuevo_amigo = document.getElementById('amigo');
let boton_sorteo = document.getElementsByClassName('button-draw')[0];
let boton_agregar = document.getElementsByClassName('button-add')[0];
let cont_boton = document.getElementsByClassName('button-container')[0];
let input_section = document.getElementsByClassName('input-section')[0];
let main_content = document.getElementsByClassName('main_content')[0];
function agregarAmigo() {
    let name = nuevo_amigo.value; 
    if (name !== "") {
        lista.push(name); 
        nuevo_amigo.value = ""; 
        mostrar_lista.innerHTML = "";
        for (var i = 0; i < lista.length; i++){
            let li = document.createElement("li");
            li.textContent = lista[i];
            mostrar_lista.appendChild(li);
        }
        console.log(lista)
    }
    else {
        alert ('Por favor, ingrese un nombre valido')
    }
    boton_sorteo.style.display = 'flex';
}

function sortearAmigo(){
    let mostrar_resultado = document.getElementById('resultado');
    let i = Math.floor(Math.random() * lista.length);
    mostrar_lista.innerHTML = "";
    mostrar_resultado.innerHTML = "El amigo secreto es: " + lista[i];
    
    //boton_sorteo.remove();
    boton_sorteo.style.display = 'none';
    boton_agregar.disabled = true;

    //boton de reinicio
    let reinicio = document.createElement('button');
    reinicio.className = 'button-draw';
    reinicio.setAttribute('onclick', 'reiniciado()');
    reinicio.setAttribute('text-align', 'center');
    reinicio.textContent = 'Reiniciar juego';
    cont_boton.appendChild(reinicio);
    main_content.appendChild(cont_boton)
    input_section.appendChild(cont_boton);
}

function reiniciado(){
    location.reload();
}

boton_sorteo.style.display = 'none';



// la lista esta vacia que no este disponible el boton de sortear amigo

//if //hay un caracter en el campo de añadir que se ponga en color naranja

//if //se presiono el boton de sortear amigo se quite y se ponga uno nuevo de reiniciar que borre la info de la lista