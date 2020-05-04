//craete the player class
class Player 
{

  //create the constructor function
  constructor()
  {
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.age = null;
  }

  //read the player count from the database
  getCount()
  {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>
    {
      playerCount = data.val();
    })
  }

  //update the player count in the database
  updateCount(count)
  {
    database.ref('/').update(
      {
      playerCount: count
    });
  }

  //update the player name , age and distance in database
  update()
  {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set(
      {
      name:this.name,
      distance:this.distance,
      age:this.age
    });
  }

  //create the function for the player's information 
  static getPlayerInfo()
  {
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>
    {
      allPlayers = data.val();
    })
  }
}
