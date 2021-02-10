var dog,sadDog,happyDog;
var food
var feedTime,lastFed
var database
var foodObj,foodS ,foodStock
function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400)
database = firebase.database()
foodObj = new Food()

foodStock=database.ref('Food');
foodStock.on("value",readStock);
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
var button = createButton("ADD FOOD")
button.position(800,200)
var button1 = createButton("FEED DOG")
button1.position(720,200)

var name = createInput("name the dog")
name.position(500,100)
button1.mousePressed(feed)
button.mousePressed(addFood)




}

function draw() {
  background(46,139,87);
  foodObj.display()
  feedTime = database.ref("feedTime")
  feedTime.on("value",function(data){
    lastFed= data.val()
  })

  
  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed : "+ lastFed%12 + " PM", 350,30);
   }else if(lastFed==0){
     text("Last Feed : 12 AM",350,30);
   }else{
     text("Last Feed : "+ lastFed + " AM", 350,100);
   }

  drawSprites();
 
}

function readStock(data){
foodS= data.val()
foodObj.updateFoodStock(foodS)
}

function feed(){
  dog.addImage(happyDog)
  if (foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0)
  }

  else{
    foodObj.deductFood()
  }

database.ref("/").update({
  foodStock: foodObj.getFoodStock()
})
}
function addFood(){
  foodS++
  database.ref("/").update({
      foodStock:foodS
     //feedTime:hour()
  })
}