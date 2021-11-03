class Polygon {
    constructor (sides) { // Is an array
        this.sides = sides;
    }

    get countSides() {
        console.log(this.sides)
        return this.sides.length // length is a properties of an array
    }

    get perimeter() {
        return this.sides.reduce(function add(a,b) {
            return a + b
        })
    }
}

class Triangle extends Polygon {
    get isValid() {
        let sideOne = this.sides[0]
        let sideTwo = this.sides[1]
        let sideThree = this.sides[2]
        if(sideOne + sideTwo < sideThree || sideTwo + sideThree < sideOne || sideOne + sideThree < sideTwo) { // Use OR statement
            return false
        } 
        // if (sideTwo + sideThree < sideOne) {
        //     return false
        // }
        // if (sideOne + sideThree < sideTwo) {
        //     return false
        // }
        return true
    }

}

class Square extends Polygon {
    get isValid() {
        let sideOne = this.sides[0]
        let sideTwo = this.sides[1]
        let sideThree = this.sides[2]
        let sideFour = this.sides[3]
        if(sideOne === sideTwo && sideOne === sideThree && sideOne === sideFour) {
            return true
        } 
        return false
    }

    get area() {
        return this.sides[0] ** 2
    }
}
