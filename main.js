var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object = "";
function player_update(){
fabric.Image.fromURL("player.png" , function (Img){
player_object = Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(150);
player_object.set({top:player_y,left:player_x});
canvas.add(player_object);
});

}

function newImg(getImage){
    fabric.Image.fromURL(getImage , function (Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({top:player_y,left:player_x});
        canvas.add(block_image_object);
        });
        
        }




        window.addEventListener("keydown",my_keydown);

        
        function my_keydown(e){
            console.log("its working")
            keyPressed = e.keyCode;
        console.log(keyPressed);
        if(e.shiftKey == true && keyPressed == "80"){
            console.log("Shift and p pressed");
            block_image_height = block_image_height + 10;
            block_image_width = block_image_width + 10;
            document.getElementById("current_width").innerHTML = block_image_width;
            document.getElementById("current_height").innerHTML = block_image_height;
            console.log("Shift and p pressed");
        }



        if(e.shiftKey == true && keyPressed == "77"){
            console.log("Shift and m pressed");
            block_image_height = block_image_height - 10;
            block_image_width = block_image_width - 10;
            document.getElementById("current_width").innerHTML = block_image_width;
            document.getElementById("current_height").innerHTML = block_image_height;
            console.log("Shift and m pressed");
        }
        if(keyPressed =="38"){
            up();
            console.log(up);

        }
        if(keyPressed =="40"){
            down();
            console.log(down);

        }
        if(keyPressed =="37"){
            left();
            console.log(left);

        }
        if(keyPressed =="39"){
            right();
            console.log(right);

        }
        


        if(keyPressed =="70"){
            newImg("ironman_face.png");
            console.log("f");

        }
        if(keyPressed =="66"){
            newImg("spiderman_body.png");
            console.log("b");

        }
        if(keyPressed =="76"){
            newImg("hulk_legs.png");
            console.log("l");

        }
        if(keyPressed =="82"){
            newImg("thor_right_hand.png");
            console.log("r");

        }
        if(keyPressed =="72"){
            newImg("captain_america_left_hand.png");
            console.log("l");

        }
        



        }

