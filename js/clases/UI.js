import {eliminar, modificar} from "../funciones.js";
import {contenedorCitas} from "../selectores.js"

class UI {
    imprimirAlerta(mensaje, tipo) {
        const divMensaje= document.createElement("div");

        divMensaje.textContent=mensaje;

        if(tipo=== "error"){
            divMensaje.classList.add("error", "mb-2");
        }else{
            divMensaje.classList.add("exito");
        }

       // formulario.appendChild(divMensaje);
        document.querySelector("#uno").insertBefore(divMensaje, document.querySelector("#nueva-cita"))

        setTimeout(()=> {
            divMensaje.remove();
        },3000);
    }

    imprimirCitas({citas}) {
        this.limpiarHTML();

        citas.forEach(cita => {
            const {mascota,propietario,telefono,fecha,hora,sintomas, id}= cita;

            const divCita= document.createElement("div");
            divCita.dataset.id= id;
            divCita.classList.add("cardcard")

            const mascotaParrafo= document.createElement("p");
            mascotaParrafo.textContent= mascota;
            mascotaParrafo.classList.add("text-uppercase", "fs-4")

            const propietarioParrafo= document.createElement("p");
            propietarioParrafo.innerHTML= `<span class="fw-bold"> Propietario: </span> ${propietario}`;

            const telefonoParrafo= document.createElement("p");
            telefonoParrafo.innerHTML=  `<span class="fw-bold"> Telefono: </span> ${telefono}`;

            const fechaParrafo= document.createElement("p");
            fechaParrafo.innerHTML= `<span class="fw-bold"> Fecha: </span> ${fecha}`;

            const horaParrafo= document.createElement("p");
            horaParrafo.innerHTML=  `<span class="fw-bold"> Hora: </span> ${hora}`;

            const sintomasParrafo= document.createElement("p");
            sintomasParrafo.innerHTML=  `<span class="fw-bold"> Sintomas: </span> ${sintomas}`;

            const btnEliminar= document.createElement("button");
            btnEliminar.classList.add("btn", "btn-danger", "me-2")
            btnEliminar.innerHTML='Eliminar';
            btnEliminar.onclick= () => eliminar(id);

            const btnModificar= document.createElement("button");
            btnModificar.classList.add("btn", "btn-success", "me-2")
            btnModificar.innerHTML='Modificar';
            btnModificar.onclick= () => modificar(cita);

            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnModificar);

            contenedorCitas.appendChild(divCita);
        });
    }

    limpiarHTML(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

export default UI;