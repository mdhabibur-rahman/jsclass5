// let num = prompt("Enter lenght of number: ")

// for(let i = num ; i>=0 ; i--){
//     console.log(i);
// }

// for(let i = 0 ; i<=num ; i++){
//     console.log(i);
// }

// console.log("hello");



// let inputValue= prompt("Enter the number: ");
// let isprime=inputValue==1? false:true;  //bcoz 1 is not prime

// for(let i=2;i<inputValue;i++){
//   inputValue%i==0? isprime*=false :isprime*=true;
// };

// alert(`${inputValue} is ${isprime? 'prime':'not prime'} number`);

// var day = "riday";

// var expectedGuests = 100 * ((day==='Friday')*1.5 || 1);
// console.log(expectedGuests);

// var multiplier = day === 'Friday' ? 1.5 : 1;
// var expectedGuests = 100 * multiplier;
// console.log(expectedGuests);



let  r = prompt("ENTER YOUR LETTER:");
r =r.toUpperCase();
switch(r){
    case'A':
    document.write("v");
    break;
    case'B':
    document.write("v");
    break;
    default:
        document.write("c");
}