function setup(){
    createCanvas(800,800);
    background(75, 125, 219);
}

function draw(){
    makeCircles(100, 100, 100);
}

function makeCircles(x, y, r){
//issue w recursion
    circle(x,y,r);
    fill(235, 91, 118);
    
    if(r > 5){
        makeCircles(x+r, y+r, r/2)
    }
}