var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

const plus = document.querySelector(".plus"),
        minus = document.querySelector(".minus"),
        num = document.querySelector(".num");
        let a = 1;
        plus.addEventListener("click", ()=>{
          a++;
          a = (a < 10) ? "0" + a : a;
          num.innerText = a;
        });
    
        minus.addEventListener("click", ()=>{
          if(a > 1){
            a--;
            a = (a < 10) ? "0" + a : a;
            num.innerText = a;
          }
        });