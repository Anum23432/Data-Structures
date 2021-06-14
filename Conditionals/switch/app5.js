// You need to write a function that prints out ‘wild animals’
//  if the names of lion and leopard are passed to it. However,
//   if I pass the names of cats and rabbits to it, it prints ‘pet animals’. 
// However, if I pass any other name to it, it says ‘unknown’

let animals = "cats";

switch (animals) {
    case "lions":
    case "leopards":
        console.log(" WILD animals.");
        break;
     
    case "cats":
    case "rabbits":
        console.log("PET animals.");
        break;

    default:
        console.log("NOT denfined.");
        break;
}