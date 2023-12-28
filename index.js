class Circle {
    constructor(radius) {
        this.radius = radius;
        this.pi = Math.PI;
    }
  
    get diameter() {
        return this.radius * 2;
    }
  
    get circumference() {
        return 2 * this.pi * this.radius;
    }
  
    get area() {
        return this.pi * this.radius * this.radius;
    }
  
    set diameter(value) {
        this.radius = value / 2;
    }
  
    set circumference(value) {
        this.radius = value / (2 * this.pi);
    }
  
    set area(value) {
        this.radius = Math.sqrt(value / this.pi);
    }
  }
  
  let newCircle = new Circle(5);
  console.log(newCircle);
  console.log(newCircle.diameter)
  console.log(newCircle.radius)
  console.log(Math.floor(newCircle.area))