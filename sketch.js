var dog, database, foodS, foodStock;
var happyDogImage,dogImage;
var fedTime,lastFed;
var foodObj;
var feed,addFood;
var gameState,readState;
var 

//Create variables here

  function preload(){


  happyDogImage=loadImage("images/dogImg1.png")
  dogImage=loadImage("images/dogImg.png")
  garden=loadImage("sprites/Garden.png")
  bedRoom=loadImage("sprites/Bed Room.png")
  washRoom=loadImage("sprites/Wash Room.png")
  sadDog=loadImage("sprites/Dog.png")

}

  
  


function setup() {
  database=firebase.database()
  createCanvas(500, 500);

  dog=createSprite(250,250,1,1)
  dog.scale=0.2
  
  dog.addImage("dog",dogImage)

  foodStock=database.ref('food');
  foodStock.on("value",readStock);


  feed= createButton("Feed The Dog")
  
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood= createButton("Add Food")

  addFood.position(810,95);
  addFood.mousePressed(addFoods);
  
  readState=database.ref('gameState')
  readState.on("value",function(data){
   gameState=data.val();
  });
 
}


function draw() {  

  
  //add styles here
  background(46,139,87);
  currentTime=hour()
  if(currentTime==(lastFed+1)){
    update("playing")
    foodObj.garden()
  }else if(currntTime>(lastFed+2)){
   update("Sleeping")
     foodObj.bedRoom();
    }else if(currentTime>(lastFed+2) && cureentTime<+(lasteFed+4)){
    update("Bathing")
    foodObj.washRoom()
  }else{
    update("Hungry")
    foodObj.display()
  }







  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });
  if(gameState!="Hungry"){
    feed.hide();
    addFood.hide();
    god.remove();



  }else{
  feed.show();
  addFood.show()
  dog.addImage(sadDog)

  }


  drawSprites();

  fill(255)
  
  textSize(15)
  if(lastFed>=12){
  text("Last Feed: "+lastFed%12 + "PM",350,30)
    
  }
  else if(lastFed ===0){
    text("Last Feed : 12 AM" ,350,30)
  }

  else{
    text("Last Feed: "+lastFed + "AM",350,30)
  }
  
}

function readStock(data){
   foodS=data.val();
   foodObj.updateFoodStock(foodS);
}

function feedDog () {
  dog.addImage(happyDogImage);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
     food:foodObj.getFoodStoxk(),
     FeedTime:hour()
  })
  
}

function update(state){
   database.ref('/').update({
     gameState:state
   })


}

function addFoods(){
  foodS++
  database.ref("/").update({
    food:foodS
  })

  







  
}

  







