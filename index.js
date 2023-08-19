
const username=document.getElementById("username");

const password=document.getElementById("password");
const button=document.getElementById("button1");
 button.addEventListener("click",function(event) {
    event.preventDefault();
checkInputs();
 })

 function checkInputs(){
    const uservalue=username.value.trim();
    if (uservalue===''){
   alert("Enter username");}
   else if(!isusername(uservalue))
   {
    alert("enter in correct format");
   }
   else{
    alert("correct");
   }
 }

 function isusername(username) {
	return /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(username);
}