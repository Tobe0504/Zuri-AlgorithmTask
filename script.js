//Zuri Training Algoritm Task.



// For the Farenheit Converter task

function convertFahrToCelsius(para) {
    let numPara = Number(para);
    {
      if (typeof para != "number") {
        console.log(
          para + " is not a valid number but is a/an " + typeof para
        );
      } else {
        let answer = (numPara - 32) * (5 / 9);
        console.log(answer.toFixed(3));
      }
    }
  }

console.log(convertFahrToCelsius(14));
console.log(convertFahrToCelsius("rat"));
console.log(convertFahrToCelsius([1,2,3]));
console.log(convertFahrToCelsius("Thank you for the assignment"));




//   For the yu-go-oh task
function checkYuGiOh(n){
    
    let dArray = [];    
        
    for(let i=1; i<= n; i++){
            
    
    switch (true) {
    
      case  i % 2 === 0 && i % 3 === 0 && i % 5 === 0:
        dArray.push("Yu-Gi-Oh");
        break;
        
      case i % 2 === 0 && i % 5 === 0:
        dArray.push("Yu-Oh");
        break;
        
      case i % 2 === 0 && i % 3 === 0:
        dArray.push("Yu-Gi");
        break;
        
      case i % 5 === 0:
        dArray.push("Oh");
        break;
        
      case i % 3 === 0:
        dArray.push("Gi");
        break;
        
      case i % 2 === 0:
        dArray.push("Yu");
        break;
        
      default:
        dArray.push(i);
    }
    
    } 
        
    if(Number(n)){     
      return dArray;
      } else{
          return `invalid parameter: "fizzbuzz is meh"`;
        }
        
    }
    
    console.log(checkYuGiOh(12));
    console.log(checkYuGiOh(5));
    console.log(checkYuGiOh("Thank ypu for the assignment"));
