$(document).ready(function(){

    var $container = $('.container');
    var $console = $('.console');
    var $ball = $('.ball');

    $container.left = 0;
    $container.top = 0;
    $container.right = $container.width();
    $container.bottom = $container.height();

    $ball.width = $ball.width();
    $ball.height = $ball.height();

    $ball.vel = {};
    $ball.vel.x = 10;
    $ball.vel.y = -5;

    $ball.pos = {};
    $ball.pos.x = $container.right/2;
    $ball.pos.y = $container.bottom/2;

    $ball.bounce = -0.68;
    $ball.gravity = 0.19;

    $ball.friction = {}
    $ball.friction.x = 0.004;
    $ball.friction.y = 0.005;

    $.prototype.calcPhysics = function () {
    $ball.vel.y += $ball.gravity;

    var isBounce = false;
    if ($ball.pos.x + $ball.width/2 > $container.right) {
    $ball.pos.x = $container.right - $ball.width/2;
    $ball.vel.x *= $ball.bounce;
    isBounce = true;

    } else if ($ball.pos.x - $ball.width/2 < $container.left) {
    $ball.pos.x = $container.left + $ball.width/2;
    $ball.vel.x *= $ball.bounce;
    isBounce = true;
    }

    if ($ball.pos.y + $ball.height/2 > $container.bottom) {
    $ball.pos.y = $container.bottom - $ball.height/2;
    $ball.vel.y *= $ball.bounce;
    isBounce = true;

    } else if ($ball.pos.y - $ball.height/2 < $container.top) {
    $ball.pos.y = $container.top + $ball.height/2;
    $ball.vel.y *= $ball.bounce;
    isBounce = true;
    }

    if ($ball.vel.x >= 0) {
    $ball.vel.x -= $ball.friction.x;
    } else if ($ball.vel.x <= 0) {
    $ball.vel.x += $ball.friction.x;
    }

    if ($ball.vel.y >= 0) {
    $ball.vel.y -= $ball.friction.y;
    } else if ($ball.vel.y <= 0) {
    $ball.vel.y += $ball.friction.y;
    }

    if (isBounce) {
    $ball.velocity({
    backgroundColor: '#2ecc71'
    }, {
    duration: 100,
    queue: false,
    complete: function (e) {
    $ball.velocity({
      backgroundColor: '#2980b9'
    }, {
      duration: 500,
      queue: false
    });
    }
    });
    isBounce = false;
    }

    $ball.pos.x += $ball.vel.x;
    $ball.pos.y += $ball.vel.y;
    };

    $.prototype.setPos = function (pos) {
    if (!pos.x) {
    pos.x = pos[0];
    }
    if (!pos.y) {
    pos.y = pos[1];
    }
    $(this).css('top', pos.y);
    $(this).css('left', pos.x);
    };

    var update = function () {
    $ball.calcPhysics();
    $ball.setPos($ball.pos);

    $console.children('.velocity').html('Velocity: <br> x:' + $ball.vel.x + '</br> y:' + $ball.vel.y);

    $console.children('.position').html('Position: <br> x:' + parseInt($ball.pos.x) + '</br> y:' + parseInt($ball.pos.y));

    requestAnimationFrame(update);
    };
    update();

    $('.btn.bounce').click(function () {
    if ($ball.vel.x > 0) {
    $ball.vel.x += 1;
    } else if ($ball.vel.x < 0) {
    $ball.vel.x -= 1;
    } else {
    $ball.vel.x = 3;
    }

    if ($ball.vel.y > 0) {
    $ball.vel.y += 4;
    } else if ($ball.vel.y < 0) {
    $ball.vel.y -= 4;
    }
    });

    $('.btn.stop').click(function () {
    $ball.vel.x = 0;
    $ball.vel.y = 0;
    });






});
