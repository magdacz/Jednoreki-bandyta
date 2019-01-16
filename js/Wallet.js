class Wallet {
    constructor(money) {
        let _money = money; //właściwość ukryta
        //pobieramy aktualny stan portfela
        this.getWalletValue = () => _money;
        
        //sprawdzamy czy możemy przystąpić do gry
        this.checkCanPlay = value => {
            if(_money >= value) return true;
            return false;
        }
        
        this.changeWallet = (value, type = "+") => {
            if(typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type ==="-") {
                    return _money -= value;
                } else {
                   throw new Error("nieprawidłowy typ działania") //throw pozwala nam tworzyć nowe powiadomienia o błedach(np. w consoli)
                }
            } else{
                console.log(typeof value);
                throw new Error ("nieprawidłowa liczba")
            }
        }
    }
    
}

//const wallet = new Wallet(200);
//console.log(wallet.changeWallet(20, "+"))
//console.log(wallet.changeWallet(10, "-"))
//console.log(wallet.changeWallet(NaN, "jhhggd"))

