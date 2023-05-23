class Order {
  constructor(orderId, customerName, totalPrice) {
    this.orderId = orderId;
    this.customerName = customerName;
    this.totalPrice = totalPrice;
  }
  
  // Methods related to managing orders
  placeOrder() {
    // Code to place the order
    console.log(`Order ${this.orderId} placed successfully.`);
  }
  
  cancelOrder() {
    // Code to cancel the order
    console.log(`Order ${this.orderId} cancelled.`);
  }
  
  calculateTotalPrice() {
    // Code to calculate the total price
    console.log(`Total price for order ${this.orderId}: $${this.totalPrice}`);
  }
}

class EmailSender {
  constructor() {
    // Initialize email sender settings
  }
  
  // Method to send email
  sendEmail(emailAddress, subject, message) {
    // Code to send the email
    console.log(`Email sent to ${emailAddress}. Subject: ${subject}. Message: ${message}`);
  }
}

// Usage example
const order = new Order(12345, "John Doe", 100);
order.placeOrder();

const emailSender = new EmailSender();
emailSender.sendEmail("johndoe@example.com", "Order Confirmation", "Thank you for your order!");


// In this example, we have a Order class that is responsible for managing orders. 
// It has methods like placeOrder(), cancelOrder(), and calculateTotalPrice() that handle operations 
// related to orders. The class has a single responsibility of managing orders.

// Separately, we have an EmailSender class that is responsible for sending emails.
//  It has a sendEmail() method that takes care of sending an email with provided details.
//  This class has a single responsibility of sending emails.

// By separating the responsibilities of managing orders and sending emails into different classes,
//  we adhere to the Single Responsibility Principle, making the code more modular, maintainable,
//  and easier to understand and modify in the future.