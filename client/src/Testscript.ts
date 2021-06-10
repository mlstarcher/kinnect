let message : string = 'suppy'

let digit : number = 0;
digit = 'This should break stuff on compile'

let printStuff = (thing : string, otherThing : number) => {
  console.log(thing, otherThing);
}

printStuff(message, digit);