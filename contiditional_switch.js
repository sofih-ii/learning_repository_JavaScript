let product = "Apple"
switch(product){
    case "Papaya":
        console.log("Papayas cost $10.00")
        break;
    case "Mango":
        console.log("Mangoes cost $8.00")
        break;
    case "Apple":
    case "Orange":
            console.log("Apple and orange cost $8.00")
        break;
    default:
        console.log("We are sorry, we do not have this product")
}

console.log("do you need anything else?")