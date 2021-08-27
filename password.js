// PASSWORD VALIDATOR TOOL

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome to the Password Validator tool. Please Enter a password with at least 10 characters that contains a capital, a number, and a special character:", function password(input){
    class Validator{
        constructor(input){
            this.input = input;
            this.length = false;
            this.number = false;
            this.special = false;
            this.capital = false;
        }
        lengthP(){
            if (this.input.length < 10){
                console.log("I am sorry, that password is not long enough. Please try again.")
            } else {
                this.length = true
            }
        }
        specialP(){
            if (this.input.includes("!","@","#","$","%","&","*")){
                this.special = true
            } else {
                console.log("Please ensure your password contains one of the following: ! @ # $ % & *")
            }
        }
        capitalP(){
            if (/[A-Z]/.test(this.input)){
                this.capital = true
            } else {
                console.log("Please ensure your password contains a capital letter")
            }
        }
        numberP(){
            if(/[0-9]/.test(this.input)){
                this.number = true
            }else {
                console.log("Please ensure your password contains at least one number")
            }
        }
        check(){
            if (this.special === true && this.number === true && this.length === true && this.capital === true){
                console.log("Thank you for updating your password!")
            } else{
            }
        }
    }    
   
    let password = new Validator(input)
    
    
    password.lengthP()
    password.numberP()
    password.capitalP()
    password.specialP()
    password.check();

    reader.close();
});









// const password = input