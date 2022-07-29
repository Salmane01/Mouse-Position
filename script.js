var stat = {};
stat.val = 1;
document.addEventListener("DOMContentLoaded" , function(event){
        var button = document.querySelector("button");

        button.addEventListener("click",function(event){
                if (stat.val){
                        button.style.backgroundColor = "#eb7575";
                        button.textContent = "STOP";
                        stat.val = 0;
                }else{
                        button.style.backgroundColor = "#85eb75";
                        button.textContent = "START";
                        stat.val = 1;
                }

        })
        document.addEventListener("mousemove" , function(event){
                if (stat.val){
                        document.getElementById("xposition")
                        .innerText = "Xposition";
                        document.getElementById("yposition")
                        .innerText = "Yposition";
                        document.getElementById("xposition").style.color = "gray";
                        document.getElementById("yposition").style.color = "gray";
                }else{
                        document.getElementById("xposition")
                        .innerText = event.clientX;
                        document.getElementById("yposition")
                        .innerText = event.clientY;
                        document.getElementById("xposition").style.color = "black";
                        document.getElementById("yposition").style.color = "black";
                }
        })
})
