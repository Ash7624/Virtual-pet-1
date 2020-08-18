//Create variables here
var dog, happyDog, database;
var foods, foodStock;
function preload()
{
  dog.loadImage(Dog.png);

  
}

function setup() {
  createCanvas(500, 500);
  var dog = createSprite(250,250,10,10);
  
   var db = firebase.database();

getFoodstock();
  }


function draw() {  
background(46,139,87);

if(keyWentDown(UP_AROW)){

  writeStock(foodS);
dog.addImage(happydog.png);

}



  drawSprites();
 
  //add styles here
  textSize = 30;
  fill("green");
  text("Press Up Arrow To Feed Dog.",50,150);


}

function getFoodstock(){
foodStock = database.ref('food');
foodStock.on("value",readStock);

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    food : x
  })
}