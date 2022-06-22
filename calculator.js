var aTags = document.querySelectorAll(".topic")
// MATHEMATICS

for (let i = 0; i < aTags.length; i++) {

    aTags[i].addEventListener("click", function() {
        e.preventDefault();
        var current = document.getElementsByClassName("active");
        //current[0].className = current[0].className.replace(" active", "");
        //this.className += " active";
    })
}

function Sum(fno, sno) {
            
    var fno= document.getElementById("fno").value;
    var sno=document.getElementById("sno").value;
    var Sum = +fno + +sno;
     alert("The Answer is " + Sum);
 }
 
 function Diff(fno2, sno2) {
     
     var fno2= document.getElementById("fno2").value;
     var sno2=document.getElementById("sno2").value;
     if(+fno2>+sno2){
     var Diff= +fno2 - +sno2;
     }
    if(+fno2<+sno2){
     var Diff= +sno2-+fno2;
    }
      alert("The Difference is " + Diff);
  }

  function Prod(fno3, sno3) {
     
     var fno3= document.getElementById("fno3").value;
     var sno3=document.getElementById("sno3").value;
     var Prod = +fno3 * +sno3;
      alert("The Product is " + Prod);
  }
  
  function Frac(fno4, sno4) {
     
     var fno4= document.getElementById("fno4").value;
     var sno4=document.getElementById("sno4").value;
     var Frac = +fno4 / +sno4;
      alert("The Fraction is " + Frac);
  }

  function Quotient(fno5, sno5) {
     
     var fno5= document.getElementById("fno5").value;
     var sno5=document.getElementById("sno5").value;
     if(+fno5>+sno5){
        var Quotient = +fno5 % +sno5;
     }
     if(+fno5<+sno5){
        var Quotient = +sno5 % +fno5;
     }
      alert("The Quotient is " + +Quotient);
  }

  function Average(fno6, sno6) {
     
    var fno6= document.getElementById("fno6").value;
    var sno6=document.getElementById("sno6").value;
    var Average = (+fno6 + +sno6)/2;
     alert("The Average is " + Average);
 }
// UNIT CONVERSION

// Dollar to Naira

  function Naira(dollars){
      var dollars= document.getElementById("dollars").value;
      var Naira = 610*+dollars;
       alert(dollars +" Dollars = "+Naira+" Naira in today's Market")
  }

 // Naira to Dollars
  
  function Dollars(naira){
    var naira= document.getElementById("naira").value;
    var Dollars = 1/610*+naira;
     alert(naira +" Naira = "+Dollars+" Dollars in today's Market")
}

//  Celsius to Fehrenheit

function Fahrenheit(celsius){
    var celsius= document.getElementById("celsius").value;
    var Fahrenheit= (+celsius * 9/5)+32;
     alert(celsius +" degrees Celsius = " +Fahrenheit+" degrees Fahrenheit")
}

//  Fehrenheit to Celsius

function Celsius(fehrenheit){
    var fehrenheit= document.getElementById("fehrenheit").value;
    var Celsius= (+fehrenheit-32)*5/9;
     alert(fehrenheit +" degrees fehrenheit = " +Celsius+" degrees Celsius")
}

// Celsius to Kelvin Conversion

function Kelvin(celsius2){
    var celsius2= document.getElementById("celsius2").value;
    var Kelvin= +celsius2 + 273;
     alert(celsius2 +" degrees celsius = " +Kelvin+" Kelvin")
}

// Kelvin to Celcius Conversion

function Celsius2(kelvin){
    var kelvin= document.getElementById("kelvin").value;
    var Celsius2= +kelvin - 273;
     alert(kelvin +" Kelvin = " +Celsius2+" degrees Celsius")
}

// PHYSICS

// Newton's Second Law of Motion
// Calculate for Force F in Newtons

function Force(mass, acceleration){
    var mass= document.getElementById("mass").value;
    var acceleration= document.getElementById("acceleration").value;
    var Force= +mass * +acceleration;
     alert("Force = "+ +Force+" Newtons")
}

// Calculate for Mass m in g

function Mass(force, acceleration2){
    var force= document.getElementById("force").value;
    var acceleration2= document.getElementById("acceleration2").value;
    var Mass= +force / +acceleration2;
     alert("The Mass = "+ +Mass+"g")
}

// Calculate for acceleration a in m/s-2

function Acceleration(force2, mass2){
    var force2= document.getElementById("force2").value;
    var mass2= document.getElementById("mass2").value;
    var Acceleration = +force2 / +mass2;
     alert("The Acceleration = "+ +Acceleration+" ms^-2")
}

//Michael Faraday's Law of Conductivity V=IR
// To Calculate for Voltage

function Voltage(current, resistance){
    var current= document.getElementById("current").value;
    var resistance= document.getElementById("resistance").value;
    var Voltage= +current * +resistance;
     alert( +Voltage+"V passes through the conductor")
}

// To Calculate for Current

function Current(voltage, resistance2){
    var voltage= document.getElementById("voltage").value;
    var resistance2= document.getElementById("resistance2").value;
    var Current= +voltage / +resistance2;
     alert( +Current+" Amperes of current passes through the conductor")
}

// To Calculate for Resistance

function Resistance(voltage2, current2){
    var voltage2= document.getElementById("voltage2").value;
    var current2= document.getElementById("current2").value;
    var Resistance= +voltage2 / +current2;
     alert("It has a Resistance of "+Resistance+" olms")
}

// Einstein's Theory of Relativity E = MC^2
// Calculate for E

function Energy(mass3,lightSpeed){
    var mass3= document.getElementById("mass3").value;
    var lightSpeed = ((2.998* 10)*(2.998* 10)*(2.998* 10)*(2.998* 10)*(2.998* 10)*(2.998* 10)*(2.998* 10)*(2.998* 10))*((2.998* 10)*(2.998* 10)*(2.998* 10)*(2.998* 10)*(2.998* 10)*(2.998* 10)*(2.998* 10)*(2.998* 10));
    var Energy= +mass3 * +lightSpeed;
     alert("The energy is " +Energy+" Joules ")
}

// Calculate for Mass M

function Mass2(energy,lightSpeed){
    var energy= document.getElementById("energy").value;
    var lightSpeed = ((2.998* 10)*(2.998* 10)*(2.998* 10)*(2.998* 10)*(2.998* 10)*(2.998* 10)*(2.998* 10)*(2.998* 10))*((2.998* 10)*(2.998* 10)*(2.998* 10)*(2.998* 10)*(2.998* 10)*(2.998* 10)*(2.998* 10)*(2.998* 10));
    var Mass2= +energy / +lightSpeed;
     alert("The Mass = " +Mass2+" Kg")
}

// CHEMISTRY

// For Initial Pressure P1

function initialPressure(p2,v2,t1,v1,t2){
    var p2= document.getElementById("p2").value;
    var v2= document.getElementById("v2").value;
    var t1= document.getElementById("t1").value;
    var v1= document.getElementById("v1").value;
    var t2= document.getElementById("t2").value;
    var initialPressure= [+p2*+v2*+t1]/(+v1*+t2);
     alert("Initial Pressure P1 = "+ +initialPressure+" Nm^-2")
}

// For Initial Volume V1

function initialVolume(ap2,av2,at1,ap1,at2){
    var ap2= document.getElementById("ap2").value;
    var av2= document.getElementById("av2").value;
    var at1= document.getElementById("at1").value;
    var ap1= document.getElementById("ap1").value;
    var at2= document.getElementById("at2").value;
    var initialVolume= [+ap2*+av2*+at1]/[+ap1*+at2];
     alert("Initial Volume V1 = "+ +initialVolume+" m^3")
}

// For Initial Temperature T1

function initialTemperature(bp1,bv1,bt2,bp2,bv2){
    var bp1= document.getElementById("bp1").value;
    var bv1= document.getElementById("bv1").value;
    var bt2= document.getElementById("bt2").value;
    var bp2= document.getElementById("bp2").value;
    var bv2= document.getElementById("bv2").value;
    var initialTemperature= [+bp1*+bv1*+bt2]/(+bp2*+bv2);
     alert("Initial Temperature = "+ +initialTemperature+" K")
}

// For Final Pressure P2

function finalPressure(cp1,cv1,ct2,ct1,cv2){
    var cp1= document.getElementById("cp1").value;
    var cv1= document.getElementById("cv1").value;
    var ct2= document.getElementById("ct2").value;
    var ct1= document.getElementById("ct1").value;
    var cv2= document.getElementById("cv2").value;
    var finalPressure= [+cp1*+cv1*+ct2]/(+ct1*+cv2);
     alert("Final Pressure = "+ +finalPressure+" Nm^-2")
}

// For Final Volume V2

function finalVolume(dp1,dv1,dt2,dp2,dt1){
    var dp1= document.getElementById("dp1").value;
    var dv1= document.getElementById("dv1").value;
    var dt2= document.getElementById("dt2").value;
    var dp2= document.getElementById("dp2").value;
    var dt1= document.getElementById("dt1").value;
    var finalVolume= [+dp1*+dv1*+dt2]/(+dp2*+dt1);
     alert("Final Volume V2 = "+ +finalVolume+" m^3")
}

// For Final Temperature T2

function finalTemperature(ep2,ev2,et1,ep1,ev1){
    var ep2= document.getElementById("ep2").value;
    var ev2= document.getElementById("ev2").value;
    var et1= document.getElementById("et1").value;
    var ep1= document.getElementById("ep1").value;
    var ev1= document.getElementById("ev1").value;
    var finalTemperature= [+ep2*+ev2*+et1]/(+ep1*+ev1);
     alert("Final Temperature = "+ +finalTemperature+" K")
}




