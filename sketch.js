var ball;
var database;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
     var ballPosition=database.ref("ball/position");
     ballPosition.on("value",function(data){
         var position= data.val();
         ball.x=position.x;
         ball.y=position.y;


     })

    
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x1,y1){
   var ballPosition2=database.ref("ball/position");
   ballPosition2.set({
       x: ball.x +x1,
       y: ball.y +y1
   })

}
