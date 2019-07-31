// # Class Exercises
//
// (1 - 6 are the same as on the previous lab, but creating classes using ES6 syntax instead of constructor functions)
//
// ## Question 1
console.log("---------- #1 ----------")
console.log("A)")

class Person {
  constructor(firstName, lastName, middleName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName
  }

  fullName() {
    console.log(`${this.firstName} ${this.middleName} ${this.lastName}`)
  }
}

let doug = new Person("Douglas", "MacKrell", "John")
let lucy = new Person("Lucy", "Goldstein", "Julianne")

console.log(doug.firstName)

console.log(" ")
// a. Write a class called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.
console.log("B)")

doug.fullName()
lucy.fullName()

console.log(" ")
// b. Write a method in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.
//
//
// ## Question 2
console.log("---------- #2 ----------")
console.log("A)")

class Book {
  constructor(title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
  }

  isGood() {
    console.log(`Is ${this.title} good?`);
    if (this.rating >= 7) {
      console.log(true)
    } else {
      console.log(false)
    }
  }
}

let unfortunate = new Book("Series Of Unfortunate Events", "Lemony Snicket", 10)

let pink = new Book("A Separate Peace", "John Knowles", 1)

let dick = new Book("Moby Dick", "Herman Melville", 4)

let alien = new Book("My Teacher Is An Alien", "Bruce Coville", 7)

console.log(unfortunate)
console.log(pink)
console.log(dick)
console.log(alien)

console.log(" ")

// a. Create a class called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
console.log("B)")

alien.isGood()
dick.isGood()

console.log(" ")
// b. Add a method to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7
//
// ## Question 3
console.log("---------- #3 ----------")
console.log("A)")

class Dog {
  constructor(name, breed, mood, hungry) {
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
  }

  playFetch() {
    this.hungry = true;
    this.mood = "playful";
    console.log("Ruff!");
  }

  feed() {
    if (this.hungry === true) {
      this.hungry = false;
      console.log("Woof!")
    } else {
      console.log("This dog isn't hungry, so please don't feed them.")
    }
  }

  toString() {
    console.log(`My dog ${this.name} is a ${this.breed}. They're feeling ${this.mood},`)
    if (this.hungry === true) {
      console.log("and they're VERY hungry!")
    } else {
      console.log("and they're currently not hungry. Please, do not feed them any hamburgers.")
    }
  }
}

let porkchop = new Dog("Porkchop", "Cartoon", "Whimsical", true)
let brain = new Dog("Brain", "Cartoon", "Skeptical", false)
let poochie = new Dog("Poochie D", "Half Joe Camel and a Third Fonzarelli", "Totally In Your Face", true)

console.log(porkchop)

console.log(" ")
// a. Create a `Dog` class with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
console.log("B)")

console.log(brain)
brain.playFetch()
console.log(brain)

console.log(" ")
// b. Add a method called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
console.log("C)")

console.log(porkchop)
porkchop.feed()
console.log(porkchop)
porkchop.feed()

console.log(" ")
// c. Add a method called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"
console.log("D)")

poochie.toString()
poochie.feed()
poochie.toString()

console.log(" ")
// d. Add a method called `toString` that returns a description of the dog:
//
// ## Question 4

console.log("---------- #4 ----------")
console.log("A)")



// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:
//
// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273

let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 273
}

console.log(freezingPoint)

console.log(" ")

// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.
console.log("B)")

class Celsius {
  constructor(celsius) {
    this.celsius = celsius
  }

  getFahrenheitTemp() {
    return (this.celsius * 1.8) + 32
  }

  getKelvinTemp() {
    return this.celsius + 273
  }

  isBelowFreezing() {
    if (this.celsius <= 0) {
      return true
    } else {
      return false
    }
  }
}

let printNozzleTemp = new Celsius(205)

console.log(printNozzleTemp.celsius)
console.log(printNozzleTemp.getKelvinTemp())
console.log(printNozzleTemp.getFahrenheitTemp())

console.log(" ")
// b. Make a class called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
//
// ```js
// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// ```
console.log("C)")

let kindaCold = new Celsius(15)
let putOnAJacket = new Celsius(-10)

console.log(kindaCold.isBelowFreezing())
console.log(putOnAJacket.isBelowFreezing())

console.log(" ")
// c. Give `Celsius` a method called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).
//
// ## Question 5
console.log("---------- #5 ----------")
console.log("A)")

class Movie {
  constructor(name, year, genre, cast, description) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.description = description;
  }

  blurb() {
    console.log(`Coming soon in ${this.year}, is the hotly anticipated ${this.genre} film, ${this.name}! Starring ${this.cast} in ${this.description}!!!`)
  }
}

let fist = new Movie("Lady Robo-Fist", 2020, "Superhero", ["Aubry Plaza", " Nick Offerman", " Bruce Campbell", " Dave Foley", " and Jack Black"], "the story of a woman whose hand is stolen by a ghost, and her epic ghost-punching journey for revenge")

console.log(fist)
console.log(" ")

// a. Create a class called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
console.log("B)")

fist.blurb()

console.log(" ")
// b. Create an method inside `Movie` called `blurb` that returns a formatted string describing the movie.

// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."
//
//
// ## Question 6
console.log("---------- #6 ----------")
console.log("A)")

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  minus(argument) {
    let sumOfX = this.x - argument.x
    let sumOfY = this.y - argument.y
    let minusVector = new Vector(sumOfX, sumOfY)
    return minusVector
  }

  plus(argument) {
    let sumOfX = this.x + argument.x
    let sumOfY = this.y + argument.y
    let plusVector = new Vector(sumOfX, sumOfY)
    return plusVector
  }

  getLength() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y))
  }
}

let v1 = new Vector(1, 2)
let v2 = new Vector(2, 3)

console.log(v1.plus(v2))
console.log(v1.minus(v2))

let v3 = new Vector(3, 4)

console.log(v3.getLength())

console.log(" ")
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.
//
// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
//
// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)
//
// [Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)
//
// ```js
// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}
//
// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// // => 5
// ```
//
// ## Question 7
console.log("---------- #7 ----------")
console.log("A)")

// from #8
class Vehicle {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  makeSound() {
    console.log("WHHOOSSSH!")
  }
}


class Car extends Vehicle {
  constructor(name, color, make, model) {
    super(name, color)
    this.make = make;
    this.model = model;
  }

  static numberOfWheels(carName) {
    return 4
  }
}

let pt = new Car("Helen", "White", "Chrysler", "PT Cruiser")
let odyssey = new Car("Medusa", "Green", "Honda", "Odyssey")
let legacy = new Car("Sandra", "Red", "Subaru", "Legacy")
let accord = new Car("Gertrude", "Boring", "Honda", "Accord")

console.log(odyssey)

console.log(" ")
// a. Make a class called `Car` with properties `make` and `model`.  Create an instance of a `Car`
console.log("B)")

class Bike extends Vehicle {
  constructor(name, color, gears, hasBell) {
    super(name, color)
    this.gears = gears;
    this.hasBell = hasBell;
  }

  static numberOfWheels(bikeName) {
    return 2
  }
}

let schwinn = new Bike("Schwinn", "Blue", 18, true)
console.log(schwinn)

console.log(" ")
// b. Make a class called `Bike` with properties `gears` and `hasBell`.  Create an instance of `Bike`
console.log("C)")

console.log(Car.numberOfWheels(pt))
console.log(Bike.numberOfWheels(schwinn))

console.log(" ")
// c. Give each class a static method called `numberOfWheels` that returns the number of wheels (2 for bikes, 4 for cars).  Why does it make sense for this to be a static method instead of an instance method?
//
// ## Question 8
console.log("---------- #8 ----------")
console.log("A)")

// class Vehicle {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
//
//   makeSound() {
//     console.log("WHHOOSSSH!")
//   }
// }

console.log("Completed.")

console.log(" ")
// a. Make a class called `Vehicle` with properties `color` and `name`.  Give it a method called `makeSound` which logs "WHHOOSSSH" to the console
console.log("B)")

console.log("Moved above")

console.log(" ")
// b. Modify your `Car` and `Bike` classes from Question 7 to extend the `Vehicle` class.
console.log("C)")

let bikey = new Bike("Bikey McBikeface", "Green", 24, false)

console.log(bikey)

console.log(" ")
// c. Create a new `Bike` instance that has a `color` of "green" and `name` "Bikey McBikeface"
console.log("D)")

let protege = new Car("Carry McCarface", "Red", "Mazda", "Protege")
console.log(protege)
protege.makeSound()


console.log(" ")
// d. Create a new `Car` instance that has a `color` of "red" and `name` "Carry McCarface"
