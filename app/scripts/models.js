 /**
  * Character Constructor Models
  **/
var $ = require('jquery');
var _ = require('underscore');
var index = require('./index.js')


// Setting up a basic character constructor
function Character(config){
    config = config || {};

    this.name = config.name;
    this.move = config.move;

  $.extend(this, config);

  this.attack = function(){
    var hit = _.random(10, 30);

  };

  }

var enemyToFight = index.enemyToFight;
var enemyHealth = 100;
var heroHealth = 100;


// Good guys constructor
function Hero(config){
  config = config || {};

    Character.call(this, config);

    this.heroAttack = function(){
      var hit = _.random(10, 30);
      console.log(hit);
      enemyHealth = enemyHealth - hit;
      $('#enemy-health').css("width", enemyHealth + "%");
      console.log(enemyHealth);
      if (enemyHealth <= 0) {
        alert('you win!');
        //not totally sure why this only works because it throws an error...but it works 
        clearTimeout(enemyHit);

      }else {
        return enemyHealth;
      }

    };

}

// Giving them the inheritance of Character
Hero.prototype = new Character();


//Bad Guys constructor
function Enemy(config){
  config = config || {};
  Character.call(this, config);

  this.enemyAttack = function(){
    var hit = _.random(10, 30);
    console.log(hit);
    heroHealth = heroHealth - hit;
    $('#hero-health').css("width", heroHealth + "%");
    console.log(heroHealth);
    if (heroHealth <= 0) {
      alert('you lose!');
    }else {
      return heroHealth;
    }
  };
}

// Giving them inheritance of Character as well
Enemy.prototype = new Character();

// Listing out our cool good guys
  var luffy = new Hero({
    name: "Luffy",
    move: "Rubber Rubber Bazooka",
    image: "../app/images/luffy.png",
    thumbnail: "../app/images/luffy-tn.png"
  });

  var robin = new Hero({
    name: "Robin",
    move: "Seis Fleur: Twist",
    image: "../app/images/robin.jpg",
    thumbnail: "../app/images/robin-tn.jpg"
  });

  var zoro = new Hero({
    name: "Zoro",
    move: "Oni Cutter",
    image: "../app/images/zoro.png",
    thumbnail: "../app/images/zoro-tn.png"
  });


// Listing out our not so cool bad guys
  var doFlamingo = new Enemy({
    name: "Doflamingo",
    move: "Roundhouse Kick",
    image: "../app/images/doflamingo.png",
    thumbnail: "../app/images/doflamingo-tn.png"
  });

  var smoker = new Enemy({
    name: "Smoker",
    move: "Smoke Bomb",
    image: "../app/images/smoker.jpg",
    thumbnail: "../app/images/smoker-tn.jpg"
  });

  var akainu = new Enemy({
    name: "Admiral Akainu",
    move: "Volcano Meteor",
    image: "../app/images/akainu.png",
    thumbnail: "../app/images/akainu-tn.png"
  });

  var heroes = [luffy, robin, zoro];

  var enemies = [doFlamingo, smoker, akainu];




module.exports = {
  "heroes": heroes,
  "enemies": enemies,
  "heroHealth": heroHealth,
  "enemyHealth": enemyHealth
};



// It would be neat to display this.name + " attacked with" + this.move
// hit for x amount of damage
