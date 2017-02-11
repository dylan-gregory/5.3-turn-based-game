var $ = window.$ = window.jQuery = require('jquery');
var _ = require('underscore');
var models = require('./models.js');
require('bootstrap-sass');

var openScreen = require('../templates/splash-screen.hbs');
var playGame = require('../templates/game-screen.hbs');
var modal = require('../templates/modal.hbs');
var charSelect = require('../templates/characters.hbs');
var charTNSelect = require('../templates/char-thumbnail.hbs');
var youWin = require('../templates/winning-screen.hbs');
var youLose = require('../templates/losing-screen.hbs');

var $audio = $('#audio');
var currentHero;

// $('.game').html(openScreen());

  models.heroes.forEach(function(hero, index){
    hero.index = index;
    $('#char-modal').append(charTNSelect(hero));
    // console.log($('.js-hero'));



  });

// add function to launch modal
// $('.play-button').on('click', function(e){
//   $('.game').html(modal());
// })

// add function to select hero
  // console.log($('.js-hero'));
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
    // $('.modal-backdrop.in').css('opacity', 0);
    // $('.game').html(playGame());

    $('.enemy').append(charSelect(enemyToFight));
    $('.hero').append(charSelect(currentHero));

// attempting to add audio clip to start game
//     $audio.attr('src', '../images/SFX_Powerup_50.mp3');
//     $audio[0].play();
  });

var enemyHit;

  $('.fight-button').on('click', function(event, data){
    event.preventDefault();

    currentHero.heroAttack();
    if (($("#winning-modal").data('bs.modal') || {}).isShown){
      clearTimeout(enemyHit);
      return;
    }

  enemyHit = setTimeout(enemyToFight.enemyAttack, 3000);

  })


  $('.try-again-btn').on('click', function(event){
    event.preventDefault();
    window.location.reload(true);
    // $('#winning-modal').modal('hide');
    // $('#losing-modal').modal('hide');
    // setTimeout(retry, 2000);


  });

  module.exports = {
    "enemyToFight": enemyToFight,
    "enemyHit": enemyHit

  };
