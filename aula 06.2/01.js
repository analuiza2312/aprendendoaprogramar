let a = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12],
    [13,14,15]
]

for (let i = 0; 0< 5; i++) {
    for (let j = 0; j < 3; j++)
        /* nesse j<3 tem que tomar cuidado! se errar fica fazendo o infinito >< */
        {
      console.log(a[i][j])
    }
    
}