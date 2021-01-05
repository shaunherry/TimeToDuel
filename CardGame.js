class Card {
    constructor (name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }

    attack(target){
        target.res = res - power;
    }
}

class Effect extends Card {
    constructor(name,cost, text, stat, mag){
        super(name,cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }


    play( target ) {
            if( target instanceof Unit ) {
                if( this.stat == "resilience" ){
                
                target.res = (target.res + this.mag);
                console.log(target.res);
                } else {
                    target.power = (target.power + this.mag);
                }
            } else {
                console.log( "Target must be a unit!" );
            }
        }


}

const UnitCard1 = new Unit("Red Belt Ninja", 3, 3, 4); 
const UnitCard2 = new Unit("Black Belt Ninja", 4, 5, 4);
const EffectCard1 = new Effect("Hard Algorithm", 2, "Increase targets resilience by 3", "resilience", +3);
const EffectCard2 = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2)

EffectCard1.play(UnitCard1);
EffectCard2.play(UnitCard1);