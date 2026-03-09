// =====================
// Завдання 1
// =====================

var car1 = new Object();

car1.color = "Yellow";
car1.maxSpeed = 220;

car1.driver = {
    name: "Hromov Andrii",
    category: "C",
    "personal limitations": "No driving at night"
};

car1.tuning = true;
car1["number of accidents"] = 0;

car1.drive = function () {
    console.log("I am not driving at night");
};


var car2 = {

    color: "Silver",
    maxSpeed: 190,

    driver: {
        name: "Hromov Andrii",
        category: "B",
        "personal limitations": null
    },

    tuning: false,
    "number of accidents": 2,

    drive: function () {
        console.log("I can drive anytime");
    }
};

car1.drive();
car2.drive();


function Truck(color, weight, avgSpeed, brand, model) {

    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;

    this.trip = function () {

        if (!this.driver) {
            console.log("No driver assigned");
        }
        else {

            var msg = "Driver " + this.driver.name + " ";

            if (this.driver.nightDriving) {
                msg += "drives at night ";
            }
            else {
                msg += "does not drive at night ";
            }

            msg += "and has " + this.driver.experience + " years of experience";

            console.log(msg);
        }

    };

}

Truck.prototype.AssignDriver = function (name, nightDriving, experience) {

    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };

};

var truck1 = new Truck("White", 5000, 80, "Volvo", "FH16");
var truck2 = new Truck("Blue", 4500, 85, "MAN", "TGX");

truck1.AssignDriver("Mark Stone", true, 10);
truck2.AssignDriver("Lena Brooks", false, 5);

truck1.trip();
truck2.trip();


// =====================
// Завдання 2
// =====================

class Square {

    constructor(a) {
        this._a = a; // внутрішня змінна
    }

    // GETTER
    get side() {
        return this._a;
    }

    // SETTER
    set side(value) {
        if (value > 0) {
            this._a = value;
        } else {
            console.log("Side must be positive");
        }
    }

    static help() {
        console.log("Square: a quadrilateral with four equal sides and four right angles.");
    }

    length() {
        console.log("Perimeter:", this._a * 4);
    }

    square() {
        console.log("Area:", this._a * this._a);
    }

    info() {

        console.log("Sides:", this._a, this._a, this._a, this._a);
        console.log("Angles: 90, 90, 90, 90");

        this.length();
        this.square();
    }

}

class Rectangle extends Square {

    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("Rectangle: opposite sides equal, all angles 90°.");
    }

    length() {
        console.log("Perimeter:", 2 * (this._a + this.b));
    }

    square() {
        console.log("Area:", this._a * this.b);
    }

    info() {

        console.log("Sides:", this._a, this.b, this._a, this.b);
        console.log("Angles: 90, 90, 90, 90");

        this.length();
        this.square();
    }

}

class Rhombus extends Square {

    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Rhombus: four equal sides, opposite angles equal.");
    }

    length() {
        console.log("Perimeter:", this._a * 4);
    }

    square() {

        let rad = this.alpha * Math.PI / 180;

        console.log("Area:", Math.round(this._a * this._a * Math.sin(rad)));
    }

    info() {

        console.log("Sides:", this._a, this._a, this._a, this._a);
        console.log("Angles:", this.alpha, this.beta, this.alpha, this.beta);

        this.length();
        this.square();
    }

}

class Parallelogram extends Rectangle {

    constructor(a, b, alpha, beta) {

        super(a, b);

        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Parallelogram: opposite sides parallel and equal.");
    }

    length() {
        console.log("Perimeter:", 2 * (this._a + this.b));
    }

    square() {

        let rad = this.alpha * Math.PI / 180;

        console.log("Area:", Math.round(this._a * this.b * Math.sin(rad)));
    }

    info() {

        console.log("Sides:", this._a, this.b, this._a, this.b);
        console.log("Angles:", this.alpha, this.beta, this.alpha, this.beta);

        this.length();
        this.square();
    }

}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

var sq = new Square(5);
var rect = new Rectangle(4, 8);
var rh = new Rhombus(6, 120, 60);
var par = new Parallelogram(7, 10, 130, 50);

// використання getter
console.log("Square side:", sq.side);

// використання setter
sq.side = 10;

sq.info();
rect.info();
rh.info();
par.info();


// =====================
// Завдання 3
// =====================

function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

console.log(Triangular());
console.log(Triangular(6, 8, 10));
console.log(Triangular(5, 5, 5));


function PiMultiplier(num) {

    return function () {
        return Math.PI * num;
    };

}

var multiply2 = PiMultiplier(2);
var multiply15 = PiMultiplier(3 / 2);
var divide2 = PiMultiplier(0.5);

console.log(multiply2());
console.log(multiply15());
console.log(divide2());


function Painter(color) {

    return function (obj) {

        if (obj.type) {
            console.log(color + " " + obj.type);
        }
        else {
            console.log("No 'type' property occurred!");
        }

    };

}

var PaintBlue = Painter("Blue");
var PaintRed = Painter("Red");
var PaintYellow = Painter("Yellow");


var obj1 = {
    maxSpeed: 280,
    type: "Sportcar",
    color: "magenta"
};

var obj2 = {
    type: "Truck",
    avgSpeed: 90,
    "load capacity": 2400
};

var obj3 = {
    maxSpeed: 180,
    color: "purple",
    isCar: true
};

PaintBlue(obj1);
PaintRed(obj2);
PaintYellow(obj3);
