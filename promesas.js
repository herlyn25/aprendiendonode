const empleados = [
    {id:1, nombre:'Pedro', salario:1500},
    {id:2, nombre:'Juan', salario:1500},
    {id:3, nombre:'Armando', salario:1500}
]

const getObtenerEmpleado=(id)=>{   
    return promesa = new Promise((resolve,reject)=>{
        const empleado= empleados.find(emp=>emp.id===id)?.nombre;
        (empleado) ? resolve(empleado):reject(`Usuario con id ${id} no existe`);
    })}

const id= 3
getObtenerEmpleado(id).
then(e=> console.log(e)
).catch((error)=> console.log(error))