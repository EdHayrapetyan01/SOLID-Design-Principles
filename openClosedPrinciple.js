// Abstract class representing a PaymentProcessor
class PaymentProcessor {
    processPayment(amount) {
      // Common payment processing logic
      console.log(`Processing payment of $${amount}`);
    }
  }
  
  // PayPal payment processor extending the PaymentProcessor
  class PaypalPaymentProcessor extends PaymentProcessor {
    processPayment(amount) {
      // PayPal-specific payment processing logic
      console.log(`Processing payment of $${amount} via PayPal`);
      // Additional PayPal-specific logic
    }
  }
  
  // Usage example
  const paymentProcessor = new PaypalPaymentProcessor();
  paymentProcessor.processPayment(100);

  

// In this example, we have an abstract PaymentProcessor class that defines a common method processPayment()
//  for processing payments. This class contains the common payment processing logic shared by all payment processors.

// The PaypalPaymentProcessor class extends the PaymentProcessor and overrides the processPayment() 
// method to add PayPal-specific payment processing logic. By extending the abstract class, 
// we are able to introduce new functionality without modifying the existing code.

// This approach adheres to the Open/Closed Principle since we can easily introduce new payment processors
//  (e.g., StripePaymentProcessor, CreditCardPaymentProcessor) by creating new 
// classes that extend the PaymentProcessor abstract class, without modifying the existing code.
//  The abstract class serves as a stable foundation for extension, while the concrete subclasses 
// provide specific implementation details.