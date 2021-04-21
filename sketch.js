var home,homeImage;
var gameState="home";
var man,manImg;
var ground;
var background,backgroundImg;
var help1Img;
var yes1,yes1Img;
var no1,no1Img;
var soifa;
var cardboard1;
var cardboard2;
var cardboard3;
var cardboard4;
var cardboard5;
var cardboard6;
var cardboard7;
var cardboard8;
var cardboard9;
var cardboard10;
var cardboard11;
var cardboard12;
var cardboard13;
var cardboard14;
var cardboard15;
var cardboard16;
var cardboard17;
var cardboard18;
var cardboard19;
var cardboard20;


function preload(){
    homeImage=loadImage("images/home.png")
    manImg=loadImage("images/man.png")
    background1Img=loadImage("images/background.jpg")
    help1Img=loadImage("images/help1.jpg")
    yes1Img=loadImage("images/yes1.webp")
    no1Img=loadImage("images/no.webp")
    soifaImg=loadImage("images/soifa.png")
    
}

function setup(){
    createCanvas(1600,750)
    
    home=createSprite(800,500,width,height)
    home.addImage("starting screen",homeImage)
    
    ground = createSprite(400,350,800,10);
    ground.x=ground.width/2;
    ground.visible=false;
    
    background1=createSprite(800,200,10,10);
    background1.addImage("b1",background1Img)
    background.visible=true;
    
    man=createSprite(400,650)
    man.addImage("player",manImg)
    man.scale=0.1
    man.debug=true
    
    help1=createSprite(1000,550)
    help1.addImage("h1",help1Img)
    help1.scale=0.2
    
    yes1=createSprite(1200,500);
    yes1.addImage("y1",yes1Img)
    yes1.scale=0.1

    var soifa = createSprite(20,25,18,18);
    soifa.addImage("help",manImg)
    soifa.shapeColor="orange";
    soifa.scale=0.1


    var cardboard1 = createSprite(10, 70,100,20);
    cardboard1.shapeColor="brown";
    var cardboard2 = createSprite(100, 50,20,100);
    cardboard2.shapeColor="brown";
    var cardboard3 = createSprite(90, 130,100,20);
    cardboard3.shapeColor="brown";
    var cardboard5 = createSprite(20, 250,70,20);
    cardboard5.shapeColor="brown";
    var cardboard6 = createSprite(150, 100,20,100);
    cardboard6.shapeColor="brown";
    var cardboard7 = createSprite(200, 50,20,100);
    cardboard7.shapeColor="brown";
    var cardboard8 = createSprite(200, 150,90,20);
    cardboard8.shapeColor="brown";
    var cardboard9 = createSprite(250, 130,20,100);
    cardboard9.shapeColor="brown";
    var cardboard10 = createSprite(250, 50,100,20);
    cardboard10.shapeColor="brown";
    var cardboard11 = createSprite(300, 100,20,100);
    cardboard11.shapeColor="brown";
    var cardboard12 = createSprite(300, 200,20,100);
    cardboard12.shapeColor="brown";
    var cardboard13 = createSprite(300, 350,20,100);
    cardboard13.shapeColor="brown";
    var cardboard14 = createSprite(250, 230,100,20);
    cardboard14.shapeColor="brown";
    var cardboard15 = createSprite(150, 230,100,20);
    cardboard15.shapeColor="brown";
    var cardboard16 = createSprite(100, 300,20,120);
    cardboard16.shapeColor="brown";
    var cardboard17 = createSprite(35, 200,20,120);
    cardboard17.shapeColor="brown";
    var cardboard18 = createSprite(100, 300,20,120);
    cardboard18.shapeColor="brown";
    var cardboard19 = createSprite(150, 350,120,20);
    cardboard19.shapeColor="brown";
    var cardboard20= createSprite(225, 350,60,20);
    cardboard20.shapeColor="brown";
    var cup = createSprite(380, 390,20,120);
    cup.shapeColor="yellow";
}

function draw(){
    background("black")
    
    
    if(gameState==="home"){
        home.visible=true
        man.visible=false;
        background1.visible=false;
        help1.visible=false
        yes1.visible=false;


        soifa.visible=false;
        cardboard1.visible=false;
        cardboard2.visible=false;
        cardboard3.visible=false;
        cardboard4.visible=false;
        cardboard5.visible=false;
        cardboard6.visible=false;
        cardboard7.visible=false;
        cardboard8.visible=false;
        cardboard9.visible=false;
        cardboard10.visible=false;
        cardboard11.visible=false;
        cardboard12.visible=false;
        cardboard13.visible=false;
        cardboard14.visible=false;
        cardboard15.visible=false;
        cardboard16.visible=false;
        cardboard17.visible=false;
        cardboard18.visible=false;
        cardboard19.visible=false;
        cardboard20.visible=false;

        fill("white")
        textSize(50)
        text("Welcome to the game!",500,50)
        
        fill("white")
        textSize(50)
        text("This game will test how helpful you can be to a stranger",150,100)
        
        fill("white")
        textSize(50)
        text("You get 2 options, you can either help the person or decide not to",50,150)
        
        fill("white")
        textSize(50)
        text("The decision is yours",500,200)
        
        if(keyDown("space")){
            gameState="level1"
        }
        
    }
    
    if(gameState==="level1"){
        home.visible=false;
        background1.visible=true;
        man.visible=true;
        help1.visible=true;
        yes1.visible=true;

        soifa.visible=false;


//         // if(keyDown(RIGHT_ARROW)){
//         //     man.x= man.x+200
//         // }
//         // if(keyDown(LEFT_ARROW)){
//         //     man.x= man.x-200
//         // }


        fill("white")
        textSize(50)
        text("Hello. I need help finding my cat!!! would you help me?",150,100)

        if(mousePressedOver(yes1)){
            gameState="level11"    
        }
     }
    
    if(gameState==="level11"){
        //background("black")
        background1.visible=false;
        man.visible=false;
        help1.visible=false;
        yes1.visible=false;

        soifa.visible=true;


    }
        
//         function draw() { 
//         //background("white");
//         createEdgeSprites();
        
//         if (keyDown(UP_ARROW)) {
//           soifa.y=soifa.y-4;
//           }
//         if (keyDown(DOWN_ARROW)) {
//         soifa.y=soifa.y+4;
//           }
//          if (keyDown(RIGHT_ARROW)) {
//           soifa.x=soifa.x+4;
          
//           }
//         if (keyDown(LEFT_ARROW)) {
//           soifa.x=soifa.x-4;
//           } 
//         if (soifa.isTouching(cardboard1)||soifa.isTouching(cardboard2)||soifa.isTouching(cardboard3)
//         ||soifa.isTouching(cardboard5)||soifa.isTouching(cardboard6)
//         ||soifa.isTouching(cardboard7)||soifa.isTouching(cardboard8)
//         ||soifa.isTouching(cardboard9)||soifa.isTouching(cardboard10)
//         ||soifa.isTouching(cardboard11)||soifa.isTouching(cardboard12)
//         ||soifa.isTouching(cardboard13)||soifa.isTouching(cardboard14)
//         ||soifa.isTouching(cardboard15)||soifa.isTouching(cardboard16)
//         ||soifa.isTouching(cardboard17)||soifa.isTouching(cardboard18)
//         ||soifa.isTouching(cardboard19)||soifa.isTouching(cardboard20)
//         ||soifa.isTouching(edges)){
//            soifa.x=20;
//            soifa.y=25;
//            soifa.velocityX=0;
//            soifa.velocityY=0;
//         }
//         if (soifa.isTouching(cup)) {
//           text("You ",350, 50);
          
        
//         }  
//         drawSprites();
        
        
//         }
        
        
//     }

    

  drawSprites();
}
// // homeScreen=text,images,sound
// // level1=backgroundImage, man image