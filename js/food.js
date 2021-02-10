class Food{
    constructor(){
        this.image=loadImage("Milk.png")
        this.foodStock= 0
        this.lastFeed;
      }

      	updateFoodStock(foodStock){
          this.foodStock = foodStock
        }
        getFeedTime(lastFeed){
          this.lastFeed = lastFeed
        }

        deductFood(){
          if (this.foodStock < 0){
            this.foodStock -= 1
          }
        }

        getFoodStock(){
          return this.foodStock
        }

    display(){
      imageMode(CENTER) 
      image(this.image,720,220,70,70)
      var  x = 80  , y=100
    if (this.foodStock != 0){
      for(var i=0;i<this.foodStock;i++){
        
          x=80;
          y=y+50;
        
        image(this.image,x,y,50,50);
        x=x+30;
      }
    }
    }
    
}
        