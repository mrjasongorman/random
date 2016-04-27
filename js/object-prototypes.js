'use strict';

var parentObject = {
  car: function(){
    return "Driving";
  }
};


var childObject = Object.create( parentObject );

console.log( parentObject.isPrototypeOf( childObject ) );
