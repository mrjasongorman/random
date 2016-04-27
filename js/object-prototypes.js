'use strict';

var parentObject = {
  car: function(){
    return "Driving";
  }
};

var childObject = Object.create( parentObject );

console.log("Is childObject connected to parentObject?")
console.log( parentObject.isPrototypeOf( childObject ) );

console.log("List objects on the childObject prototype");
console.log( childObject.__proto__ );
