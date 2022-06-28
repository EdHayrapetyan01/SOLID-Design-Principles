import logMessage from '../logger.js';
// Calorie tracker need one reason to change!
class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(val) {
    this.currentCalories += val;
    if (this.currentCalories > this.maxCalories) {
      logMessage('max calories exceeded');
    }
  }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1500);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(3500);
