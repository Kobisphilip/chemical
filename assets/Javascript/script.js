
let firstName="Philip";
let lastName="Kobis";
let school="MAUTECH";
let age="16";
let state="Adamawa";
let info=''
let x= 6
let y= 5


console.log("My Name is"+" " + firstName +" "+ lastName +" "+ "am a"+" "+ "student"+" " + school+" " )
console.log("Volvo" + 5 + 6 )
console.log( 5 + 6 + "Volvo" )


function profile(){
 return y * x
}
let w= profile()
console.log(w)

function addition() {
    a= Number(document.calculator.number1.value);
    b= Number(document.calculator.number2.value);
    c=a+b;
    document.calculator.total.value=c

}
function multiplication() {
    a= Number(document.calculator.number1.value);
    b= Number(document.calculator.number2.value);
    d=a*b;
    document.calculator.total.value=d

}
function subtraction() {
    a= Number(document.calculator.number1.value);
    b= Number(document.calculator.number2.value);
    d=a-b;
    document.calculator.total.value=d

}
function division() {
    a= Number(document.calculator.number1.value);
    b= Number(document.calculator.number2.value);
    d=a/b;
    document.calculator.total.value=d

}