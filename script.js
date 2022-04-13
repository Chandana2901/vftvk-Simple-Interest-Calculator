function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("myRange").value;
    var time = document.getElementById("myRange").value;
    
    if (principal == "") { //Here Check is empty
        alert("Amount can't by empty or alphabet character");
        document.getElementById("principal").focus();
        return false;
    }else{
        if (principal <= 0) { //Here check is a positive number
            alert("Enter a positive number");
            document.getElementById("principal").focus();
            return false;
        }
        
    var currDate = new Date().getFullYear();
    var future= parseInt(currDate,10) + parseInt(time,10);
    var interest= principal * time * rate / 100;
    var result= "If you deposit <mark>" + principal + "</mark>,<br> at an interest rate of <mark>" + rate + "</mark> % <br> You will receive an amount of <mark>" + interest + ",</mark><br> in the year <mark>" + future + "</mark>";
    document.getElementById("result").innerHTML=result;
}

function showVal(newVal){
    document.getElementById("showRate").innerHTML=newVal + '%';
}
