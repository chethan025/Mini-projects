function TC(){
    var BA=Number(document.getElementById("amt").value)
    var TA=Number(document.getElementById("tat").value)
    var CA=BA*TA/100

    document.querySelector(".h2").innerText="Your Bill Amount: $"+" "+BA
    document.querySelector(".h4").innerText="Your Tip Amount: $"+" "+CA
    var DA=CA+BA
    document.querySelector(".h3").innerText="Total Bill Amount: $"+" "+DA
}