let mail = document.getElementById("email");
let pass = document.getElementById("psw");
let mailvali = document.getElementById("mailvali");

function validation(){
    let store1 = false;
    let store2 = false; 
    
    let kkk  = /^([A-Za-z0-9\.-_]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(kkk.test(mail.value.trim())){
        
        mailvali.innerHTML= "E-mail is valid";
        mailvali.style.color= "Green";
        store1 = true;
    }
    else {
        store1 = false;
        mailvali.innerHTML= "E-mail is Invalid";
        mailvali.style.color= "red";

    }
    if(pass.value.trim() == "" ){
        store2= false;
        psdvali.innerHTML= "Password can not be empty";
        psdvali.style.color= "red";
    }
    else if(pass.value.length<=5){
        store2= false;
        psdvali.innerHTML= "Password is too short";
        psdvali.style.color= "red";
        
    }
    else{
        store2= true;
        psdvali.innerHTML= "Password is valid";
        psdvali.style.color= "Green";
    }
    if(store1==true && store2==true){
        return true;
    }
    else{
        return false;
    }
}