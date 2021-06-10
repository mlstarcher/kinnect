var message = 'suppy';
var digit = 0;
digit = 'This should break stuff on compile';
var printStuff = function (thing, otherThing) {
    console.log(thing, otherThing);
};
printStuff(message, digit);
