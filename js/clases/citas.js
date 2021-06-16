class Citas {
    constructor (){
        this.citas=[];
    }

    agregarCita(cita){
        this.citas=[...this.citas, cita];
    }

    eliminarCita(id){
        this.citas= this.citas.filter (cita => cita.id !== id)  //recorro todas las citas y traigo todas las diferentes a la que le estoy pasando
    }

    editarCita(citaActualizada){
        this.citas=this.citas.map( cita => cita.id===citaActualizada.id ? citaActualizada : cita);  //itera en cada cita, y cuando encuentra la cita que paso con la misma del array de citas, la reemplazo, si no coincide, mantengo la cita actual
    }
}

export default Citas;