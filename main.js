var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 20;

blockWidth = 30;
blockHeight = 30;

blockImg = "";
playerImg = "";

function uploadPlayer() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerImg = Img;
        playerImg.scaleToHeight(150);
        playerImg.scaleToWidth(150);
        playerImg.set({
            top: player_x,
            left: player_y
        });
        canvas.add(playerImg);
    });
}

function newImage(getPicture) {
    fabric.Image.fromURL(getPicture, function (Img) {
        blockImg = Img;
        blockImg.scaleToHeight(blockHeight);
        blockImg.scaleToWidth(blockWidth);
        blockImg.set({
            top: player_y,
            left: player_x
        });
        canvas.add(blockImg);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;

    if (e.shiftKey == true && keypressed == "80") {
        console.log("Shift and P are both pressed");
        blockWidth = blockWidth + 10;
        blockHeight = blockHeight + 10;
        document.getElementById("block_width").innerHTML = blockWidth;
        document.getElementById("block_height").innerHTML = blockHeight;
    }
    if (e.shiftKey == true && keypressed == "77") {
        console.log("Shift and M are both pressed");
        blockWidth = blockWidth - 10;
        blockHeight = blockHeight - 10;
        document.getElementById("block_width").innerHTML = blockWidth;
        document.getElementById("block_height").innerHTML = blockHeight;
    }
    if (keypressed == "70") {
        newImage("ironman_face.png");
        console.log("f");
    }
    if (keypressed == "66") {
        newImage("spiderman_body.png");
        console.log("b");
    }
    if (keypressed == "76") {
        newImage("hulk_legs.png");
        console.log("l");
    }
    if (keypressed == "82") {
        newImage("thor_right_hand.png");
        console.log("r");
    }
    if (keypressed == "72") {
        newImage("captain_america_left_hand.png");
        console.log("h");
    }
    if (keypressed == "37") {
        left();
        console.log("left");
    }
    if (keypressed == "38") {
        up();
        console.log("up");
    }
    if (keypressed == "39") {
        right();
        console.log("right");
    }
    if (keypressed == "40") {
        down();
        console.log("down");
    }
}
function up() {
    if (player_y>=0) {
        player_y=player_y-10;
        uploadPlayer();
    }
}
