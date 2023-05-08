const btn = document.querySelectorAll('.btn');
const value =document.querySelector('#counter');
let counter = 0;
btn.forEach(function(item){
    item.addEventListener('click',function(e){
        const style = e.currentTarget.classList;
        if(style.contains('Increase')){
            counter++;
        }
        else if (style.contains('Decrease')){
            counter--;
        }
        else {
            counter = 0;
        }
        if(counter > 0){
            value.style.color = "green"
        }
        else if(counter < 0){
            value.style.color = "red"
        }
        else {
            value.style.color = "black"
        }
        value.textContent = counter;
    });
});
