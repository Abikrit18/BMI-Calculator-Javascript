function bmiCalculator(weight,height){
    var bmi = weight / (Math.pow(height,2));
        bmi = Math.floor(bmi);
    
    if(bmi < 18.5){
        alert("Your BMI is " + bmi + ", so you are underweight.");
    }
    else if (bmi > 18.5 && bmi < 24.9){
        alert("Your BMI is " + bmi + ", so you are a normal weight.");
    }
    else{
        alert("Your BMI is " + bmi + ", so you are overweight.");
    }
}
var a = prompt("Enter weight in Kilogram:");
var b = prompt("Enter height in meter:");
console.log(bmiCalculator(a,b));