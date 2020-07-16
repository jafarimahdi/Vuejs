new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns:[]
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function () {
      // we got the random number between 3 and 10 and use the math.max and calculate the damage
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
          isPlayer: true,
          text:'player hits Monster for ' + damage
      });
      if (this.checkWin()) {
        return;
      }

      // monster damage for the player and condition for who lost
      this.monsterAttack();
    },
    specialAttack: function () {
      var damage=this.calculateDamage(10, 20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text:'player hits Monster hard for ' + damage
    });
      if (this.checkWin()) {
        return;
      }
      this.monsterAttack();
    },
    heal: function () {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text:'player heals for 10 '
    });
      this.monsterAttack();
    },

    giveUp: function () {
        this.gameIsRunning = false;
    },

    // make the separate function for the each part
    monsterAttack: function () {
      var damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.checkWin();
      this.turns.unshift({
          isPlayer: false,
          text:'Monster hits Player for ' + damage
      });
    },

    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },

    checkWin: function () {
      if (this.monsterHealth <= 0) {
        if (confirm("You won! New Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You lost! New Game")) this.startGame();
        else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
  },
});
