var v = document.getElementById("height");
var u = document.getElementById("weight");
var output = document.getElementById("output");
var res = document.getElementById("submit");

function bmiCalc(u, v){

    var uNum = parseFloat(u);
    var vNum = parseFloat(v);    
    
    // For user to add only valid data
    if (!uNum || !vNum || uNum <= 0 || vNum <= 0) {
        output.textContent = "Please enter valid positive numbers for height and weight!";
        return;
      }
    var bmi = (uNum/Math.pow(vNum,2)) * 10000;

    if(bmi < 18.5){
    output.textContent = "Your BMI is "+ bmi +", so you are underweight." ;
}
else if(bmi >= 18.5 && bmi<= 24.9){
    output.textContent = "Your BMI is "+ bmi +", "+"so you have a normal weight.";
}
else if(bmi > 24.9){
    output.textContent = "Your BMI is "+ bmi +", "+"so you are overweight.";
}
else{
    alert("");
}
}

res.addEventListener("click", function () {
     bmiCalc(u.value, v.value);
  });






  

