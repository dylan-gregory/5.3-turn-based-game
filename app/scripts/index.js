var $ = window.$ = window.jQuery = require('jquery');
var _ = require('underscore');
var models = require('./models.js');
require('bootstrap-sass');




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
  $('.ready-play-btn').on('click', function(event, data){
    event.preventDefault();

    var enemyToFight = models.enemies.indexOf(_.random(0, 2));

    $('.enemy-img').append(enemyTemplate(enemyToFight));
    // or whatever we want to call the hero spot
    $('.hero-img').append(heroTemplate(data));

  });
