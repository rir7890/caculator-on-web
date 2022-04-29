// // console.log("hello world!");
// // let btn = document.querySelectorAll("button");
// for (var i = 0; i < document.querySelectorAll("button").length; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         if (this.innerHTML === 'C') {
//             document.getElementById("screen").value = '';

//         } else if (this.innerHTML === 'X') {


//         } else if (this.innerHTML === '-') {

//         } else if (this.innerHTML === '+') {

//         } else if (this.innerHTML === '%') {

//         } else if (this.innerHTML === '/') {

//         } else if (this.innerHTML === '=') {

//         } else {
//             document.getElementById("screen").value += this.innerHTML;
//         }
//     });

// };

// console.log(document.getElementById("screen").value=document.querySelectorAll("button")[2].innerHTML)
// console.log(document.querySelectorAll("button").length)
// document.querySelectorAll("button")[0].innerHTML












let opcode;
let var1;
let var2;
let str;
let opc;
// let unitOpcode;


for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        if (this.innerHTML === 'C') {
            document.getElementById("screen").value = '';

        } else if (this.innerHTML === 'X' || this.innerHTML === '/' || this.innerHTML === '-' || this.innerHTML === '+' || this.innerHTML === '%') {
            // var num1=parseFloat(document.getElementById("screen").value);
            // document.getElementById("screen").value='';
            // document.getElementById("screen").value += this.innerHTML;
            document.getElementById("screen").value += this.innerHTML;
            // let str = document.getElementById("screen").value;
            opcode = this.innerHTML;


            // let var1=Number(str.slice(0,opcode));
            // let var2=Number(str.slice(opcode+1,str.length));
        } else if (this.innerHTML === '=') {

            let str = document.getElementById("screen").value;
            let var1 = Number(str.slice(0, findopcode(str, opcode)));
            let var2 = Number(str.slice(findopcode(str, opcode) + 1, str.length));
            document.getElementById("screen").value = result(opcode, var1, var2);

        } else if (this.innerHTML === '1' || this.innerHTML === '2' || this.innerHTML === '3' || this.innerHTML === '4' || this.innerHTML === '5' || this.innerHTML === '6' || this.innerHTML === '7' || this.innerHTML === '8' || this.innerHTML === '9' || this.innerHTML === '0') {
            document.getElementById("screen").value += this.innerHTML;
        } else {
            document.getElementById("screen").value = this.innerHTML;
        }


    });

};


function findopcode(str, opc) {
    return str.search(opc)
        // console.log(opc);
}


function result(opcode, var1, var2) {
    switch (opcode) {
        case 'X':
            let multiply = var1 * var2;
            return multiply;
        case '/':
            let divide = var1 / var2;
            return divide;
        case '+':
            let sum = var1 + var2;
            return sum;
        case '-':
            let sub = var1 - var2;
            return sub;
        case '%':
            let modulus = var1 % var2;
            return modulus;
    }
}

// console.log(document.getElementById("screen").value=document.querySelectorAll("button")[2].innerHTML)
// console.log(document.querySelectorAll("button").length)
// document.querySelectorAll("button")[0].innerHTML