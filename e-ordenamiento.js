

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

// Algoritmo de busqueda
// 1. Declare variable (como cargo los datos a la lista?)
// 2. Create function:
    // 2.1 Recieve list and sum number to look for
    // 2.2 Compare first element with each other element
            // if sum then return multiplication
            // else continue till the end
            // discard the first element and call function again 
            // base case its only one element left returns 0
            
// 3. Call function with arguments and save result
const input = [1723, 979, 366, 299, 675, 1456, 1721];
const findNumbers = (numbersList, sum) => {
    n = numbersList.length;
    
    if(n >0){
    
      for(let i = 0; i < n-1 ; i++){
        
        for (let j = i+1; j < n; j++) {
        
          if (numbersList[i] + numbersList[j] === sum) {
            console.log(`Acierto par : (${i}, ${j})`, numbersList[i] + numbersList[j]); 
            return numbersList[i] * numbersList[j];
            } else {
              console.log(`Falso par: (${i}, ${j})`, numbersList[i] + numbersList[j]);
            };
        }
      };
    };
};
const mapNumbers = (numbersList, sum) => {
  // TODO callback function  
  newArray = numbersList.Filter( number => number > 200 );
};

console.log(findNumbers(input, 2020));


