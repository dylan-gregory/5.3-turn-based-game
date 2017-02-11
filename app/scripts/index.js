var $ = window.$ = window.jQuery = require('jquery');
var _ = require('underscore');
var models = require('./models.js');
require('bootstrap-sass');

var charSelect = require('../templates/characters.hbs');
var charTNSelect = require('../templates/char-thumbnail.hbs')

var currentHero;


  models.heroes.forEach(function(hero, index){
    hero.index = index;
    $('#char-modal').append(charTNSelect(hero));
    console.log($('.js-hero'));



  });

// add function to select hero
  console.log($('.js-hero'));
  $('.js-hero').on('click', function(e){
    var heroIndex = $(this).data("hero");
    currentHero = models.heroes[heroIndex];
  console.log(currentHero);
  })


  var enemyToFight = models.enemies[(_.random(0, 2))];
  var life = models.enemyHealth;
  console.log(models.enemyHealth);


  $('.ready-play-btn').on('click', function(event, data){
    event.preventDefault();
    $('.fight-button').removeClass('display-hide');
    $('.health-bar-enemy').removeClass('display-hide');
    $('.health-bar-hero').removeClass('display-hide');
    $('.game-title').addClass('display-hide');
    $('.play-button').addClass('display-hide');
    $('.character-modal').modal('hide');


    $('.enemy').append(charSelect(enemyToFight));
    $('.hero').append(charSelect(currentHero));


  });

var enemyHit;

  $('.fight-button').on('click', function(event, data){
    event.preventDefault();
    


    currentHero.heroAttack();

  console.log(models.enemyHealth);
    if (life < 0){
      alert("you win!");
      return;
    }

  enemyHit = setTimeout(enemyToFight.enemyAttack, 3000);


  })

  module.exports = {
    "enemyToFight": enemyToFight,
    "enemyHit": enemyHit

  };
