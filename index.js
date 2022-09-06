// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius;
    };
    get diameter(){
        return this.radius*2
    }; 
    get circumference(){
        return Math.PI*this.radius*2
    }; 
    get area(){
        return this.radius*this.radius*Math.PI
    }
    set diameter(newdiameter){
        this.radius = newdiameter/2
    };
    set circumference(newcircumference){
        this.radius = newcircumference/(Math.PI*2)
    };
    set area(newarea){
        this.radius = Math.sqrt(newarea/Math.PI)
    }
}
let circle = new Circle(7)
circle.area =314
console.log(circle.radius)