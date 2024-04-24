/*
for in : objects (properties that have values)

for(variable in object){
    code execute
}
*/

let shoppingList ={
    apple: 5,
    orange: 2,
    grape: 7,
    pear: 4,
}


for(fruit in shoppingList){
    console.log(fruit)
}

for(fruit in shoppingList){
    console.log(`${fruit} : ${shoppingList[fruit]}`)
}

