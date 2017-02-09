 /**
  * Character Constructor Models
  **/
var $ = require('jquery');
var _ = require('underscore');
require('./index.js')


// Setting up a basic character constructor
function Character(config){
    config = config || {};

    this.name = config.name;
    this.move = config.move;


  $.extend(this, config);

  this.attack = function(){
    var hit = _.random(10, 30);
    return Character.health -= hit; // might have to change Character to something else - enemy health maybe?
  };

}

// Good guys constructor

function Hero(config){
  config = config || {};
  // this.name = config.name;
  // this.move = config.move;
    Character.call(this, config);

}

// Giving them the inheritance of Character
Hero.prototype = new Character();


//Bad Guys constructor
function Enemy(config){
  config = config || {};

  Character.call(this, config);
  // this.name = config.name;
  // this.move = config.move;
}

// Giving them inheritance of Character as well
Enemy.prototype = new Character();

// Listing out our cool good guys
  var luffy = new Hero({
    name: "Luffy",
    move: "Rubber Rubber Bazooka"
  });

  var robin = new Hero({
    name: "Robin",
    move: "Seis Fleur: Twist"
  });

  var zoro = new Hero({
    name: "Zoro",
    move: "Oni Cutter"
  });


  console.log(luffy);

// Listing out our not so cool bad guys
  var doFlamingo = new Enemy({
    name: "Doflamingo",
    move: "Roundhouse Kick"
  });

  var smoker = new Enemy({
    name: "Smoker",
    move: "Smoke Bomb",
  });

  var akainu = new Enemy({
    name: "Admiral Akainu",
    move: "Volcano Meteor"
  });

var heroes = [luffy, robin, zoro];

var enemies = [doFlamingo, smoker, akainu];

console.log(enemies);


module.exports = {
  "heroes": heroes,
  "enemies": enemies
}
//
// console.log(enemies[0].name);

// It would be neat to display this.name + " attacked with" + this.move
// hit for x amount of damage
