// Logical operators 
/*
"&&" -> AND: compares two value and if they are equal it is true and if noy it is false.
"||" -> OR: compares two value and rectify if they are the same or different it is true but if both are false it is false.
"!" -> NOT: Denies the operation
*/

const a = 10
const b = 20
const c = "10"

if(a==c && b==c){
    console.log("True")
}
else{
    console.log("False")
}


if(a<b || b>a){
    console.log("true")
}
else{
    console.log("false")
}


if(!(a === 0 )){
    console.log("true")
}
else{
    console.log("false")
}