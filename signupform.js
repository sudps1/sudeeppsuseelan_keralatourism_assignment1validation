let FirstName2 = document.getElementById("FirstName");
let LastName2 = document.getElementById("LastName");
let Mail2 = document.getElementById("Mail");
let Mobile2 = document.getElementById("Mobile");
let password2 = document.getElementById("password");
let confpassword2 = document.getElementById("confpassword");
let FirstName3 = document.getElementById("FirstName1");
let LastName3 = document.getElementById("LastName1");
let Mail3 = document.getElementById("Mail1");
let Mobile3 = document.getElementById("Mobile1");
let password3 = document.getElementById("password1");
let confpassword3 = document.getElementById("confpassword1");

let kkk1  = /^([A-Za-z\.]+)$/;
let kkk2  = /^([A-Za-z0-9\.-_]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
let kkk3 = /^\d{10}$/;
let kkk4  = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

function validation(){
   
    let store1= false;
    let store2= false;
    let store3= false;
    let store4= false;
    let store5= false;
    let store6= false;
   
    if(FirstName2.value.trim() == "" ){
        store1= false;
        FirstName3.innerHTML= "Name can not be empty";
        FirstName3.style.color= "red";
    }
    
    else if(kkk1.test(FirstName2.value.trim())){
        store1 = true;
        FirstName3.innerHTML= "Looks Good";
        FirstName3.style.color= "green";

    }
    else{
        FirstName3.innerHTML= "Names must be of letters";
        FirstName3.style.color= "red";
        store1= false
    }
    if(LastName2.value.trim() == "" ){
        store2= false;
        LastName3.innerHTML= "Name can not be empty";
        LastName3.style.color= "red";
    }
    
    else if(kkk1.test(LastName2.value.trim())){
        store2 = true;
        LastName3.innerHTML= "Looks Good";
        LastName3.style.color= "green";


    }
    else{
        LastName3.innerHTML= "Names must be composed of letters";
        LastName3.style.color= "red";
        store2= false
    }
    if(Mail2.value.trim() == "" ){
        store3= false;
        Mail3.innerHTML= "E-mail can not be empty";
        Mail3.style.color= "red";
    }
    else if(kkk2.test(Mail2.value.trim())){
        
        Mail3.innerHTML= "E-mail is valid";
        Mail3.style.color= "Green";
        store3 = true;
    }
    else{
        store3= false;
        Mail3.innerHTML= "Invalid E-mail";
        Mail3.style.color= "red";
    }
    if(Mobile2.value.trim() == "" ){
        store4= false;
        Mobile3.innerHTML= "Mobile number can not be empty";
        Mobile3.style.color= "red";
    }
    else if(kkk3.test(Mobile2.value.trim())){
        
        Mobile3.innerHTML= "Mobile number is valid";
        Mobile3.style.color= "Green";
        store4 = true;
    }
    else if(kkk4.test(Mobile2.value.trim())){
        Mobile3.innerHTML= "Mobile number is valid";
        Mobile3.style.color= "Green";
        store4 = true;
    }
    else{
        store4= false;
        Mobile3.innerHTML= "Enter a valid Phone Number";
        Mobile3.style.color= "red";
    }
    if(password2.value.length < 8){
        store5= false;
        password3.innerHTML= "Minimum 8 characters Required";
        password3.style.color= "red";
    }
    else if(password2.value.search(/[0-9]/)== -1){
        store5 = false;
        password3.innerHTML= "Atleast 1 numeric value required";
        password3.style.color= "red";
    }
    else if(password2.value.search(/[a-z]/)== -1){
        store5 = false;
        password3.innerHTML= "Atleast 1 small letter required";
        password3.style.color= "red";
    }
    else if(password2.value.search(/[A-Z]/)== -1){
        store5 = false;
        password3.innerHTML= "Atleast 1 capital letter required";
        password3.style.color= "red";
    }
    else{
        
        password3.innerHTML= "Password is valid";
        password3.style.color= "Green"; 
        store5 = true;
    }
    if(confpassword2.value.trim() == "" ){
        store6= false;
        confpassword3.innerHTML= "Re-enter the password";
        confpassword3.style.color= "red";
    }
    else if(password2.value == confpassword2.value){
        confpassword3.innerHTML= "Password is matched";
        confpassword3.style.color= "Green"; 
        store6 = true; 
    }
    else{
        store6 = false;
        confpassword3.innerHTML= "Passwords not matching";
        confpassword3.style.color= "red";
    }

    if(store1==true && store2==true && store3==true && store4==true && store5==true && store6==true){
        return true;
    }
    else{
        return false;
    }
}
// validation ends
const indicator = document.querySelector(".indicator");
const input = document.querySelector("#password");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showBtn");
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
function trigger(){
  if(input.value != ""){
    indicator.style.display = "block";
    indicator.style.display = "flex";
    if(input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
    if(input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
    if(input.value.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;
    if(no==1){
      weak.classList.add("active");
      text.style.display = "block";
      text.textContent = "Your password is too week";
      text.classList.add("weak");
    }
    if(no==2){
      medium.classList.add("active");
      text.textContent = "Your password is medium";
      text.classList.add("medium");
    }else{
      medium.classList.remove("active");
      text.classList.remove("medium");
    }
    if(no==3){
      weak.classList.add("active");
      medium.classList.add("active");
      strong.classList.add("active");
      text.textContent = "Your password is strong";
      text.classList.add("strong");
    }else{
      strong.classList.remove("active");
      text.classList.remove("strong");
    }
    showBtn.style.display = "block";
    showBtn.onclick = function(){
      if(input.type == "password"){
        input.type = "text";
        showBtn.textContent = "Hide";
        showBtn.style.color = "black";
      }else{
        input.type = "password";
        showBtn.textContent = "Show";
        showBtn.style.color = "#000";
      }
    }
  }else{
    indicator.style.display = "none";
    text.style.display = "none";
    showBtn.style.display = "none";
  }
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("passreq");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}