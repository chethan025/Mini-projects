var input=document.querySelector(".inp")
            var evl=document.querySelector(".edd")
            input.addEventListener('keyup', function(event) {
                evl.innerText=event.target.value
            });

            
            var bg=document.querySelector(".bgc")
            var tx=document.querySelector(".tc")
            var bgclr=document.querySelector("body")
            var fnt=document.querySelector(".nb")
            
            

            bg.addEventListener('keyup', function (event){
                bgclr.style.backgroundColor=event.target.value
            });

            tx.addEventListener('keyup', function (event){
                bgclr.style.color=event.target.value
            });

            fnt.addEventListener('keyup', function (event){
                bgclr.style.fontSize=event.target.value+'px'
            });