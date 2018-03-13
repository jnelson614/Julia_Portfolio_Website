$(document).ready(function(){
//emoji drop, just add id="emoji-drop-game" to body
var emojiArray = [
  'images/about/emoji/game.png',
  'images/about/emoji/superman.png',
  'images/about/emoji/art.png',
  'images/about/emoji/bike.png',
  'images/about/emoji/avocado.png',
  'images/about/emoji/sun.png',
  'images/about/emoji/cat.png',
  'images/about/emoji/dog.png',
  'images/about/emoji/ski.png',
  'images/about/emoji/think.png',
  'images/about/emoji/music.png',
  'images/about/emoji/travel.png',
  'images/about/emoji/photo.png',
  'images/about/emoji/video.png',
  'images/about/emoji/black.png',
  'images/about/emoji/book.png',
  'images/about/emoji/fav-food.png'
];

$(document).ready(function(){

  function startEmojiDrop(){
  	$(".emoji").remove();
  	dropAnEmoji("slow");
  }
  startEmojiDrop();

  function dropAnEmoji(speed){
    var randomEmojis = emojiArray[Math.floor(Math.random() * emojiArray.length)];
  	if($(".emoji").length<=30){
      $("#emoji-drop-game").prepend('<img class="emoji '+speed+'-falling-emoji" style="margin-left:'+randomStartPosition()+'px" src="'+randomEmojis+'" alt="Emoji">');
    }
  }

  function randomStartPosition(){
  	return Math.random()*($("#emoji-drop-game").width()-20);
  }

  	$("#emoji-drop-game").on("animationEnd webkitAnimationEnd",".emoji",function(){
  		dropAnEmoji("medium");
  	});
  });



});
