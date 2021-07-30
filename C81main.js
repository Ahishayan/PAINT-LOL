var lastx,current_x;
var lasty,current_y;

var mouse_event="";
Canvas=document.getElementById("myCanvas");
ctx=Canvas.getContext("2d");
var color="red";
var width=screen.width;

if(width<992){var new_width=screen.width-1;
var new_height=screen.height-10;
    document.getElementById("myCanvas").height=new_height;
    document.getElementById("myCanvas").width=new_width;
    document.body.style.overflow="hidden";
    console.log(new_height +" "+ new_width +" "+ width+" "+Canvas.width);
} ;

Canvas.addEventListener ( "touchstart", my_touchstart);
Canvas.addEventListener ( "touchmove", my_touchmove);
Canvas.addEventListener ( "mousedown", my_mousedown);
Canvas.addEventListener ( "mouseup", my_mouseup);
Canvas.addEventListener ( "mouseleave", my_mouseleave);
Canvas.addEventListener ( "mousemove", my_mousemove);
function my_mousedown(e) {


    color = document.getElementById("hi1").value;
    line = document.getElementById("hi2").value
    mouse_event = "mousedown"
    }
    function my_mouseup(e) {
        mouse_event="mouseup"
    }
    function my_mouseleave(e) {
        mouse_event="mouseleave"
    }
    function my_mousemove(e) {
        current_x=e.clientX- Canvas.offsetLeft;
        current_y=e.clientY- Canvas.offsetTop;
        if(mouse_event=="mousedown"){
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = line;
            ctx.moveTo(lastx,lasty)
            ctx.lineTo(current_x,current_y) 
            ctx.stroke();
            
    
        } 
        lastx=current_x;
        lasty=current_y;
    
    }
    function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    }
function my_touchstart(e) {


color = document.getElementById("hi1").value;
line = document.getElementById("hi2").value
lastx=e.touches[0].clientX-Canvas.offsetLeft;
lasty=e.touches[0].clientY-Canvas.offsetTop;
}

function my_touchmove(e) {
    current_x=e.touches[0].clientX- Canvas.offsetLeft;
    current_y=e.touches[0].clientY- Canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line;
        ctx.moveTo(lastx,lasty)
        ctx.lineTo(current_x,current_y) 
        ctx.stroke();
        

    
    lastx=current_x;
    lasty=current_y;

}
function clear_area(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
    /*function circle (x,y) 
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(x, y, 40, 0, 2*Math.PI);
    ctx.stroke();  
}*/