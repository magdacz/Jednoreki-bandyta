
class Result {
    static moneyWinInGame(result, bid) {
        //tworzymy metode statytczną która jest dostępna jedynie z poziomu klasu=y
       if(result) return 3 * bid;
        else return 0;
    }
  
   static checkWinner(draw) {
     if(draw[0] == draw[1] && draw[1] == draw[2] || draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2]) return true;
     else return false;
   }
}
