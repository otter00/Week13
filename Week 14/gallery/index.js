var btn_prev = document.querySelector('.tabs .prev'),
    btn_next = document.querySelector('.tabs .next');
    
var images = document.querySelectorAll('.photo img');

var i = 0;

btn_prev.onclick = function(){
    images[i].className = ""; //0-element in a row
    i = i - 1; //i-- - -1-element in a row (before 0 elm)
    if(i < 0){ //if the number of element < 0, continue step back
        i = images.length - 1; //length means number of img element in document
    }
    images[i].className = "shown"; //sh0w the elm
};

//the same as above, but step forward
btn_next.onclick = function(){
    images[i].className = "";
    i = i + 1; //i++
    if( i >= images.length){
        i = 0;  
    }
    images[i].className = "shown";
};