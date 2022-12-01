let input_val=document.getElementById('input_val');
let num1 = document.getElementById('num1');
let num2= document.getElementById('num2');

const myBtn=document.getElementById('btn1');

num1.innerText=Math.floor(Math.random()*10);
num2.innerText=Math.floor(Math.random()*10);

let number1=num1.innerText;
let number2=num2.innerText;

myBtn.addEventListener("click", ()=>{

    let sum_result = parseInt(number1)+parseInt(number2);
    var LoginBTN=document.getElementById('login-btn');
    
    let res = parseInt(input_val.value)
    if (!document.getElementById("input_val").value)
    {
        alert('Пустой ввод');
    }
    if(res==sum_result){
        var s = document.getElementById("key")
        .innerHTML = "Роботы захватят планету";
        LoginBTN.style.opacity = "1";
        LoginBTN.style.cursor = "pointer";
    
    }else{
        var s = document.getElementById("key")
        .innerHTML = "Упс вы не захватите планету";
    }
});
var captcha;
function generate() {

    document.getElementById("submit").value = "";
    captcha = document.getElementById("image");
    var uniquechar = "";
 
    const randomchar ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (let i = 1; i < 5; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }
    captcha.innerHTML = uniquechar;
}
function checkEmpty() {
    if (!document.getElementById("submit").value)
{
    alert('Пустой вввод');
}
}
function printmsg() {
    var sh_h = document.getElementById('check-c');
    var firstCaptcha=document.getElementById('image');
    var firstCaptchainput=document.getElementById('user-input');
    var firstCaptchaBTN=document.getElementById('btn');
    var LoginBTN=document.getElementById('login-btn');


    const usr_input = document
        .getElementById("submit").value;
    if (!document.getElementById("submit").value)
    {
        alert('Пустой вввод');
    }
while (true) {
    if (usr_input == captcha.innerHTML) {
        var s = document.getElementById("key")
            .innerHTML = "Вы не робот";
        generate();
    LoginBTN.style.opacity = "1";
    LoginBTN.style.cursor = "pointer";
        return false;
    }
    else if(usr_input != captcha.innerHTML){
        var s = document.getElementById("key")
        .innerHTML = "Раз уж вы робот, посчитайте сумму чисел";
        sh_h.classList.add('show-block');
        firstCaptcha.classList.add('remove-block')
        firstCaptchainput.classList.add('remove-block')
        firstCaptchaBTN.classList.add('remove-block')
        return false;
    }
}

}

function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('Сколько нужно добавить?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);



  function truncate(str, maxlength) {
    if (str.length > maxlength){
       return str.slice(0, maxlength ) + '…' ;
    }
    else{
        return str;
    }
  }
  alert("str=012345678910")
  alert("maxlenght=5")
  alert(truncate("012345678910",5));