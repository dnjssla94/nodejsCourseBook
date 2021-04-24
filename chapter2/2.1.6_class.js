var Human = function (type) {
  this.type = type || "human";
};

Human.isHuman = function (human) {
  return Human instanceof Human;
};

Human.prototype.breathe = function () {
  alert("h-a-a-m");
};

var Zero = function (type, firstName, secondName) {
  Human.apply(this, arguments);
  this.firstName = firstName;
  this.secondName = secondName;
};

Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero; //상속
Zero.prototype.sayName = function () {
  alert(this.firstName + " " + this.secondName);
};

var oldZero = new Zero("Human", "Zero", "Cho");
Human.isHuman(oldZero);

//======================

class Human {
  constructor(type = "human") {
    this.type = type;
  }

  static isHuman(human) {
    return human instanceof Human;
  }

  breathe() {
    alert("h-a-a-a-a-m");
  }
}

class Zero extends Human {
  constructor(type, firstName, lastName) {
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayName() {
    super.breathe();
    alert(`${this.firstName} ${this.secondName}`);
  }
}

const newZero = new Zero("human", "Zero", "Cho");
Human.isHuman(newZero);
