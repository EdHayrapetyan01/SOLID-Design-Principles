// LSP: Liskov Substitution Principle:  Subtypes must be substitutable for their base types.
// If you have a base class called Animal with a method makeSound(), 
// any subclass like Dog or Cat should be able to substitute the Animal class and still make the expected sound.


// subclasses should be usable in the same way as their parent class.
// This means that any subclass should be able to be used in place of its parent class without causing errors
// or unexpected behavior. Subclasses should provide at least the same behavior as their parent class, and they can extend or override the parent class's functionality as long as they adhere to the expected contract or behavior defined by the parent class.

class Animal {
  makeSound() {
    console.log('Animal sound');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Bark');
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('Meow');
  }
}

function makeAnimalSound(animal) {
  animal.makeSound();
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

makeAnimalSound(animal); // Output: "Animal sound"
makeAnimalSound(dog); // Output: "Bark"
makeAnimalSound(cat); // Output: "Meow"


//   The use case of LSP in this example is that the Dog and Cat classes can be substituted for
//   the Animal base class seamlessly. We can treat instances of Dog or Cat as if they were instances
//   of Animal without altering the behavior or expectations of the code.
//   This adherence to LSP allows for polymorphism and facilitates code reusability and
//   flexibility in scenarios where objects of different subclasses need to be used interchangeably.
