
let val=parseInt(document.getElementById('content').textContent);
 

function increment(){
     val=val+1;
     document.getElementById('content').textContent=val;


}

function decrement(){
    val=val-1;
    document.getElementById('content').textContent=val;
}