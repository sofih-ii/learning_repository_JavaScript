// Notation  literal de object
const rocket ={
    name: 'falcon 9',
    messageTakeOff : function messageTakeOff() {
        console.log('to infinity and beyond')
    }

}


// 1. Mantenimiento difícil: Duplicar código hace que mantener y actualizar el software sea más complicado. Cuando se realiza un cambio en una parte del código duplicado, es necesario recordar y aplicar ese cambio en todas las instancias duplicadas, lo que puede ser propenso a olvidos y errores.

//2. Aumento de complejidad: La presencia de código duplicado aumenta la complejidad del sistema. En lugar de tener una única fuente de verdad para una funcionalidad o lógica, hay múltiples instancias que deben ser coordinadas y gestionadas, lo que puede resultar en un código más difícil de entender y mantener.

// 3. Mayor probabilidad de errores: Duplicar código incrementa la posibilidad de introducir errores, ya que cualquier cambio realizado en una instancia duplicada puede no propagarse de manera consistente a todas las demás. Esto puede conducir a comportamientos inesperados y a la necesidad de corregir errores en múltiples lugares.

// 4. Dificultad de escalar: A medida que el proyecto crece, la duplicación de código puede volverse más difícil de manejar. La cantidad de código duplicado puede aumentar exponencialmente, lo que dificulta la adición de nuevas funcionalidades, la corrección de errores y la mejora del sistema en general.

// 5. Tiempo y recursos: Duplicar código implica utilizar más tiempo y recursos en el desarrollo y mantenimiento del software. En lugar de reutilizar y mantener una única implementación, se deben dedicar recursos adicionales a mantener y sincronizar múltiples copias del mismo código.

// 6. Violación de principios de diseño (DRY): DRY (Don't Repeat Yourself) es un principio de diseño que aboga por la eliminación de duplicación en el código. Duplicar código va en contra de este principio, ya que implica repetir la misma lógica en varios lugares, lo cual es considerado una mala práctica de programación.

// 7. Dificultad en la identificación de errores: Identificar y corregir errores se vuelve más desafiante cuando el código está duplicado. La propagación de cambios puede no ser evidente de inmediato, lo que dificulta la tarea de encontrar y corregir problemas en el software.