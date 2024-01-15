function btnget() {
    var beans = document.getElementById("beans").value;

    var x = "";
    for (let i = 0; i<beans; i++){
        x = x +"beans ";
    }
    document.getElementById("demo").innerHTML = x;

    
}