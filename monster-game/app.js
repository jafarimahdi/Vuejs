new Vue({
    el:"#app",
    data:{
        playerHealth:100,
        monsterHealth: 100,
        gameIsRunning:false
    },
    methods:{
        startGame: function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack:function(){ 
            // we got the random number between 3 and 10 and use the math.max and calculate the damage 
            this.monsterHealth -= this.calculateDamage(3,10); 
              
            if (this.checkWin()){
               return
           }
            // monster damage for the player and condition for who lost  
            this.playerHealth -= this.calculateDamage(5,12);
            
             this.checkWin();    
        },
        specialAttack:function(){
            
        },
        heal:function(){

        },
        giveUp:function(){

        },
        // make the separate function for the each part 

         calculateDamage: function(min, max){
            return  Math.max(Math.floor(Math.random()* max) + 1, min);
         },

        checkWin:function(){
             if(this.monsterHealth <= 0){
                   if(confirm('You won! New Game?')){
                       this.startGame();
                   }else{
                       this.gameIsRunning = false;
                   }
                   return true;
             })else if(this.playerHealth <= 0){
                 if(confirm('You lost! New Game'))
                    this.startGame();
                 else{
                     this.gameIsRunning = false;
                 }return true;

             }
             return false;
         }
            
    }
});