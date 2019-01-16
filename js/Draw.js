class Draw {
    construct() {
        this.options = ['red', 'green', 'blue']; //przechowuje nam nazwy kolorów, które mogą być wylosowane
        let _result = this.drawResult()
        this.getDrowResult = () => _result;
    }
    
    drawResult() {
        let colors = [];
        
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length)
            const color = this.options[index]
            colors.push(color)
        }
        
        return colors;
    }
}

const draw = new Draw();