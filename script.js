const check=document.getElementById("check-btn");
const textInput=document.getElementById("text-input");
const result=document.getElementById("result");
check.onclick=checker;
function checker(){
  const textChecker=document.getElementById("text-input").value;
   if(textChecker==''){
    alert("Please input a value");
  }else if(typeof(textChecker)===typeof("a")){
    const rev=Array.from(textChecker.replace(/[^a-z0-9]/gi, '').toLowerCase()).reverse().join("");
    const revi=textChecker.replace(/[^a-z0-9]/gi, '').toLowerCase();
    if(rev===revi){
      result.textContent=`${textChecker} is a palindrome`;
    }
    else{
      result.textContent=`${textChecker} is not a palindrome`;
    }
  }
}
