var $ = window.$ = window.jQuery = require('jquery');
var _ = require('underscore');
var models = require('./models.js');
require('bootstrap-sass');

var charSelect = require('../templates/characters.hbs')




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

  $('.modal-body').append(charSelect(models.heroes));

  $('.ready-play-btn').on('click', function(event, data){
    event.preventDefault();

    var enemyToFight = models.enemies.indexOf(_.random(0, 2));

/// we hard coded data right here to begin with, just to have a frame of reference
    $('.enemy-img').append(charSelect(models.enemies[0]));
    // or whatever we want to call the hero spot
    $('.hero-img').append(charSelect(models.heroes[1]));

  });
