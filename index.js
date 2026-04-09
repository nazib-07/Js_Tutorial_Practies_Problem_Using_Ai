let userInput = prompt("Enter 4 digite code: ");
function myFunction (otp){
    let otpString = otp.toString();
    switch(otpString){
        case "1234": 
        case "5678":
        case "0000":
            console.log("Access granted");
            break;
        default:
            if(otpString === "9999"){
                console.log("OTP expired");;
            } else{
                console.log("Invalid OTP");
            }
    }
}
console.log(myFunction(userInput));
