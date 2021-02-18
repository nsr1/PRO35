var dog
var happyDog
var database
var foodS
var foodStock
function preload()
{
  dogImg = loadImage("images/dogImg.png")
  happydogImg = loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database()
  dog = createSprite(250,250,20,20)
  dog.addImage(dogImg)
  dog.scale = 0.1
  foodStock = database.ref('Food')
  foodStock.on("value", readStock)
}


function draw() { 
	background(46,139,87)
	
	if(keyWentDown(UP_ARROW)){
		writeStock(foodS);
		dog.addImage(happydogImg)
	}

  drawSprites();
  text("Press the up arrow to feed your pet milk!", 200,20)
  fill(0,0,0)
  text(foodS, 250,40)

  

}

function readStock(data){
	foodS = data.val()
}

function writeStock(x){
	if(x<=0){
		x = 0
	}
	else(
		x = x -1
	)
	
	database.ref('/').update({
		Food:x
	})
}


