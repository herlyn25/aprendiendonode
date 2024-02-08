const calcularEdad =(anio_nac) => 2024-anio_nac

const getUsuario = (id,callback) => {
    const usuario = {
        id, nombre:"Pedro", anio_nac:1988
    }
        setTimeout(() =>{
            callback(usuario)            
        }, 2000)
    }
console.log(calcularEdad(1990))
getUsuario(10,(usuario)=>console.log(calcularEdad(usuario.anio_nac)))