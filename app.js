class Ship {
    //PROPERTIES

    length;
    numberOfHits = 0;

    //CONSTRUCTORS 
    constructor(length) {
        this.length = length;
    };

    //METHODS

    //REGISTER HITS
    registerHit() {
        this.numberOfHits++;
    }
    //HAS THE SHIP SUNK
    isSunk() {
        if (this.numberOfHits >= this.length){
            return true;
        } else {
            return false;
        }
    }

}

const nixon = new Ship(4)

nixon.registerHit();
nixon.registerHit();
nixon.registerHit();
console.log(nixon.isSunk());