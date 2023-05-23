// In the first example without ISP, the User class depends on the Machine class, 
// which has methods for printing, scanning, and faxing. 
// However, the User class only uses the print and scan methods,
// while the fax method remains unused. This violates ISP because the User class is forced to depend on 
// the entire Machine interface.

// In the second example with ISP, the Machine class has been split into smaller interfaces: Printer and Scanner. 
// The User class now depends only on the specific interfaces 
// it needs (Printer and Scanner), eliminating the unnecessary dependency on faxing. 
// This adheres to the ISP principle, as the User class is not forced to depend on interfaces it doesn't use.


// Without ISP

class Machine {
    print() {
      console.log("Printing...");
    }
  
    scan() {
      console.log("Scanning...");
    }
  
    fax() {
      console.log("Faxing...");
    }
  }
  
  class User {
    constructor(machine) {
      this.machine = machine;
    }
  
    doTask() {
      this.machine.print();
      this.machine.scan();
      // User doesn't use faxing, but still depends on Machine interface
    }
  }
  
  const machine = new Machine();
  const user = new User(machine);
  user.doTask();
  
  
  // With ISP
  
//   class Printer {
//     print() {
//       console.log("Printing...");
//     }
//   }
  
//   class Scanner {
//     scan() {
//       console.log("Scanning...");
//     }
//   }
  
//   class User {
//     constructor(printer, scanner) {
//       this.printer = printer;
//       this.scanner = scanner;
//     }
  
//     doTask() {
//       this.printer.print();
//       this.scanner.scan();
//       // User doesn't depend on faxing anymore
//     }
//   }
  
//   const printer = new Printer();
//   const scanner = new Scanner();
//   const user = new User(printer, scanner);
//   user.doTask();
  


// The main idea behind ISP is to avoid unnecessary dependencies and to provide clients
//  with only the essential methods they need. By designing interfaces that are specific to the clients'
//   requirements, ISP helps in achieving the following benefits:

// 1.Avoiding unnecessary complexity:
//  Smaller interfaces result in simpler and more concise code.
//  Clients are not burdened with methods they don't need, reducing confusion and cognitive overload.


// 2.Improved maintainability: With smaller interfaces, changes or additions to the system become easier.
//  When a new requirement arises, only the relevant interfaces and their implementations need to be modified, 
// minimizing the impact on other parts of the codebase.


// 3.Better modularity: ISP promotes a modular design where each interface represents a 
// cohesive set of related functionality. This modularity enhances code reusability, as
//  interfaces can be independently implemented and composed to create different combinations of functionality.


// 4.Enhanced testability: Smaller interfaces make it easier to write focused and targeted tests.
//  Clients can be tested in isolation by mocking or stubbing the required interfaces,
//  leading to more effective and maintainable test suites.


// 5.Flexible system evolution: When the system needs to support new clients or
//  extend existing functionality, ISP allows for easy integration of new interfaces 
// without impacting unrelated parts of the system. This flexibility enables the system to evolve
//  and adapt to changing requirements more efficiently.


// 6.Overall, applying the Interface Segregation Principle leads to more maintainable,
//  modular, and flexible code, reducing dependencies and improving the design and extensibility of the system.