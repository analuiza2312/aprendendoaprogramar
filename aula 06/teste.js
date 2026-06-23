let numeros = [10,25,37,42,58];
numeros.splice

for (let i= 0; i < numeros.lenght; i++) {
    console.log("ìndice" + i + ":"+ numeros[i]);
}
 for (let num of numeros){
    console.log(num);
} 
numeros.forEach(( num,i) => {
    console.log(`Posição ${i}: %{num}`);
});
