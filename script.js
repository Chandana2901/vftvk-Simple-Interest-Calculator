function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("myRange").value;
    time = document.getElementById("myRange").value;
    var currDate = new Date().getFullYear();
    var future= parseInt(currDate,10) + parseInt(time,10);
    var interest= principal * time * rate / 100;
    var result= "If you deposit <mark>" + principal + "</mark>,<br> at an interest rate of <mark>" + rate + "</mark> % <br> You will receive an amount of <mark>" + interest + ",</mark><br> in the year <mark>" + future + "</mark>";
    document.getElementById("result").innerHTML=result;
}

function showVal(newVal){
    document.getElementById("showRate").innerHTML=newVal + '%';
}
