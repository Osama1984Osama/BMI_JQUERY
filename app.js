"use strict";

jQuery(document).ready(function($){
  let heightObj = $("#height");
  let weightObj = $("#weight");
  let name = $("#name");

  let calculateBmi = function () {
    let height =parseFloat(heightObj.val().replace(",", "."));
    let weight = parseFloat(weightObj.val());
    let bmi = weight / (height * height);
    let result = Math.round(bmi * 10) / 10;
    $("#result").text(("" + result).replace(".", ","));

    $("#weight-normal").hide();
    $("#weight-below").hide();
    $("#weight-above").hide();

    if (bmi < 18.5) {
      $("#weight-below").show();
    } else if (bmi > 18.5 && bmi < 25) {
      $("#weight-normal").show();
      const smile = $("#smile");
      // const image = document.createElement("img");
      $("#smilee").show()
      // image.setAttribute("src", "./img/smile.png");
      // image.style.width = "50px";
      // image.style.height = "50px";
      // smile.appendChild(image);
    } else if (!isNaN(bmi)) {
      $("#weight-above").show();
    }
    let etName = name.val();
    console.log(bmi);
    let resultObj = $("#result");
    // resultObj.style.fontSize = "25px";
    // resultObj.style.color = "blue";
    resultObj.text(`Hello ${etName} Your BMI is : ${
      Math.round(bmi * 10) / 10
    }` ) 
  };
  const logo = $("#logo");
  if(calculateBmi){
    logo.click( () => {
      heightObj.text(calculateBmi);
      weightObj.text(calculateBmi);
    });
  }
 
});

