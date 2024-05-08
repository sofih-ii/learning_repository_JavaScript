let array1D = [1, 2, 3, 4, 5, 6] //One dimensional
let array2D =[[1, 2, 3], [4, 5, 6], [7, 8, 9]]//two dimensional
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]
matrix[1][3]= 10;
console.log(matrix)

let value = matrix[0][2]
console.log(value)

//Operations Two dimensional
for(let i= 0; i < matrix.length; i++){
    for(let j= 0; j < matrix[i].length; j++){
        console.log(matrix[i][j])
    }
}
function findElement (matrix, element){
    for(let i= 0; i < matrix.length; i++){
        for(let j= 0; j < matrix[i].length; j++){
            if (matrix[i][j]=== element){
                return true
            }
        }
    }
    return false
}

console.log(findElement(matrix, 5))

function duplicateMatrix (matrix){
    let newMatrix = []
    for(let i = 0; i <matrix.length; i++){
        newMatrix[i] = [... matrix[i]]
    }
    return newMatrix
}
console.log(duplicateMatrix(matrix))
