import Citas from "./clases/citas.js";
import UI from "./clases/UI.js";

import { mascotaInput, 
    propietarioInput, 
    telefonoInput, 
    fechaInput, 
    horaInput, 
    sintomasInput, 
    formulario } from "./selectores.js"


const administarCitas= new Citas();
const ui= new UI();

let editando=false;

//objeto principal
const citaObj={
    mascota: "",
    propietario: "",
    telefono: "",
    fecha: "",
    hora: "",
    sintomas:""
}

//funciones
export function datosCita(e){
    const campo= e.target.name;
    const valor= e.target.value;

    citaObj[campo]= valor;
}

export function nuevaCita(e){
    e.preventDefault();

    const {mascota,propietario,telefono,fecha,hora,sintomas}= citaObj;

    if(mascota ==="" || propietario ==="" || telefono ==="" || fecha ==="" || hora ==="" || sintomas ===""){
        ui.imprimirAlerta("todos los campos son obligatorios", "error");
        return;
    }

    //saber si estoy en modo edicion o no
    if(editando===true){
        //console.log("estoy editando")
        administarCitas.editarCita( {...citaObj } );
        ui.imprimirAlerta("Modificacion exitosa", "exito");
        editando=false;
    }
    else{
        //console.log("creando cita")
        citaObj.id= Date.now();
        administarCitas.agregarCita({...citaObj});
        ui.imprimirAlerta("Se agrego correctamente", "exito");
    }

    formulario.reset();
    reiniciarObjeto();
    
    ui.imprimirCitas(administarCitas);
}

export function reiniciarObjeto(){
    citaObj.mascota= "";
    citaObj.propietario= "";
    citaObj.telefono= "";
    citaObj.fecha= "";
    citaObj.hora= "";
    citaObj.sintomas="";
}

export function eliminar(id){
    administarCitas.eliminarCita(id);
    ui.imprimirAlerta("la cita se elimino", "error");
    ui.imprimirCitas(administarCitas);
}

export function modificar(cita){
    const {mascota,propietario,telefono,fecha,hora,sintomas, id}= cita;

    mascotaInput.value=mascota;
    propietarioInput.value= propietario;
    telefonoInput.value= telefono;
    fechaInput.value= fecha;
    horaInput.value= hora;
    sintomasInput.value= sintomas;

    citaObj.mascota= mascota;
    citaObj.propietario= propietario;
    citaObj.telefono= telefono;
    citaObj.fecha= fecha;
    citaObj.hora= hora;
    citaObj.sintomas=sintomas;
    citaObj.id=id;

    editando=true;
}
