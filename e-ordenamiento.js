

const sortTextArray = (textArray, n = textArray.length) => {
    // uso algoritmo de bubble ordenamiento como si fueran números
    // caso base
    if (n === 1) {
        return textArray;
    }
    // intercambia los elementos comparandolos
    for (let j = 0; j < n - 1 ; j++) {
        if (textArray[j].length > textArray[j+1].length){
            [textArray[j], textArray[j+1]] = [textArray[j+1], textArray[j]];
        }
    }
    // vuelve a llamar a la funcion con un recorrido menos
    return sortTextArray(textArray, n - 1);
}

const sentences = ["la programación es un arte y tod@s podemos aprender",
          "Ada School es una escuela de programación online",
          "hoy es viernes",
          "mañana es sábado y vamos a descansar",
          "el trabajo en equipo es muy importante para el éxito profesional"];

console.log(sortTextArray(sentences));



