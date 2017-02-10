var $ = window.$ = window.jQuery = require('jquery');
var _ = require('underscore');
var models = require('./models.js');
require('bootstrap-sass');

var charSelect = require('../templates/characters.hbs');
var charTNSelect = require('../templates/char-thumbnail.hbs')




  // This will reference the character that you choose - it will load up that characters data into the event that will fire when you click the play button
  // $(whatever we want to call this thing).on('click', function(event, data){
  //   event.preventDefault();
  //
  //  ***** Or we can just grab that character object -> heroes[0], etc
  //
  //   name = data.name
  //   move = data.move
  //   picture = data.picture
  // });

  models.heroes.forEach(function(hero){
  $('#char-modal').append(charTNSelect(hero));
  });

  // $('#char-modal').append.(charSelect(models.heroes));
  // console.log($('#char-modal').append(charSelect(models.heroes)))

  // $('.play-button').on('click', function(){
  //   event.preventDefault();
  //
  //   $('.play-button').addClass('display-hide');
  //   $('.game-title').addClass('display-hide');
  //
  // };

  // var currentEnemy = models.enemies[_.random(0, 2)];
  // var currentHero = models.heroes[1];
  // var enemyToFight = models.enemies.indexOf(_.random(0, 2));


  var enemyToFight = models.enemies[(_.random(0, 2))];
    console.log(enemyToFight);

  $('.ready-play-btn').on('click', function(event, data){
    event.preventDefault();
    $('.fight-button').removeClass('display-hide');
    $('.health-bar-enemy').removeClass('display-hide');
    $('.health-bar-hero').removeClass('display-hide');
    $('.game-title').addClass('display-hide');
    $('.play-button').addClass('display-hide');
    $('.modal').addClass('close');

    // var enemyToFight = models.enemies.indexOf(_.random(0, 2));
    // console.log(enemyToFight);

    var currentHero = models.heroes[0];

/// we hard coded data right here to begin with, just to have a frame of reference
    $('.enemy').append(charSelect(enemyToFight));
    // or whatever we want to call the hero spot
    $('.hero').append(charSelect(currentHero));


    // $('.fight-button').on('click', function(event, data){
    //   event.preventDefault();
    //
    //
    //   models.heroes[1].heroAttack();
    //
    //   setTimeout(enemyToFight.enemyAttack, 5000);
    //
    //
    // })

  });
  console.log(enemyToFight.enemyHealth);

  $('.fight-button').on('click', function(event, data){
    event.preventDefault();


    models.heroes[0].heroAttack();
    // enemyToFight.enemyHealth -= models.hit;


    // console.log(models.heroes[1].heroAttack());

    setTimeout(enemyToFight.enemyAttack, 5000);


  })

  module.exports = {
    "enemyToFight": enemyToFight,

  };
