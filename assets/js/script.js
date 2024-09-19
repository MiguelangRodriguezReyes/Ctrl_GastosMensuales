let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionesGastos = []; // Nueva lista para las descripciones
let indiceEditar = null; // Variable para almacenar el índice de edición

//Esta función se invoca al momento de que el usuario hace clic en el
//botón
function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;

    // Verificación de gasto mayor a $150
    if (valorGasto > 150) {
        alert('¡Advertencia! Se ha registrado un gasto mayor a 150 USD.');
    }

    if (indiceEditar !== null) {
        // Si estamos en modo edición, actualizamos los valores existentes
        listaNombresGastos[indiceEditar] = nombreGasto;
        listaValoresGastos[indiceEditar] = valorGasto;
        listaDescripcionesGastos[indiceEditar] = descripcionGasto;
        indiceEditar = null; // Resetear el índice de edición
    } else {
        // Si no estamos editando, agregamos nuevos valores
        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
        listaDescripcionesGastos.push(descripcionGasto);
    }

    /*console.log(nombreGasto);
    console.log(valorGasto);

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    listaDescripcionesGastos.push(descripcionGasto); // Añadimos la descripción

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);
    // alert('Click de usuario');*/
    actualizarListaGastos();
}

function actualizarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) =>{
        const valorGasto = Number(listaValoresGastos[posicion]);
        const descripcionGasto = listaDescripcionesGastos[posicion]; // Obtener la descripción
        
        /*htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} 
        <button onclick="eliminarGasto(${posicion})">Eliminar</button>
        </li>`;*/
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} 
        <br><small>${descripcionGasto}</small> 
        <button onclick="editarGasto(${posicion})">Modificar</button>
        <button id="botonForm" onclick="eliminarGasto(${posicion})">Eliminar</button>
        </li>`;
        // Calculamos el total de gastos
        totalGastos += Number(valorGasto);
        console.log(totalGastos);
    });
    //console.log(htmlLista);

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcionGasto').value = '';
}

function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    listaDescripcionesGastos.splice(posicion, 1); // Eliminar también la descripción
    actualizarListaGastos();
}

function editarGasto(posicion){
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('descripcionGasto').value = listaDescripcionesGastos[posicion];

    indiceEditar = posicion; // Guardar el índice del elemento que se va a editar
}