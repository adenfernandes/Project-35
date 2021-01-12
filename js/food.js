class Food {


    constructor(){

        this.foodStock=0
        this.lastFed;
        this.image= loadImage("images/Milk.png")
        



    }
     bedRoom(){
     background(bedRoom,500,500)



     }

     garden(){

    background(garden,500,500)



     }


     washRoom(){
    background(washRoom,500,500)



     }
    getFedTime(lastFed){
        this.lastFed=lastFed;

    }

    getFoodStock(){
        return this.foodStock;
        
    }

    updateFoodStock(foodStock){
      this.foodStock=foodStock;


    }


   deductFood(){
        if(this.foodStock > 0){
            thisfoodStock--;
        }

   

   }
    display(){
        var x=80,y=100
        imageMode(CENTER)
        image(this.image,700,200,70,70);

        if(this.foodStock!=o){
          for(var i=0;i<this.foodStock;i++){
            if(i % 10===0){
             x=80;
             y=y+50;
            }
            image(this.image,x,y,50,50)
            x=x+30;
    
        }

        }

    }
    


}