const empleados = [
    {
        id:1,
        nombre:'Pedro',
        salario:1500
    },
    {
        id:2,
        nombre:'Juan',
        salario:1500
    },
    {
        id:3,
        nombre:'Armando',
        salario:1500
    }
]

const getObtenerEmpleado=(id, callback)=>{
    const empleado= empleados.find(emp=>emp.id===id)?.nombre
    if (empleado) {
        callback(null,empleado)
    }else{
        callback(`Empleado con id ${id} no existe`)
    }
}
const id= 4
getObtenerEmpleado(id,(err,empleado)=>{
    if (err){
        console.log("Error")
        return console.log(err)
    }
    console.log(empleado)
})