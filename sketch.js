let app;
function setup(){
    app = createCanvas(800,800);
    app.parent("#sketch1");
    background(0);
}

//Used a mix of recursive pattern and for loop to make
//the code run faster and be computationally good
function draw(){    
    for(let y=0; y <850; y+=100){
        makeCircles(0, y, 100,235, 91, 118,40);
        makeCircles(-25,y, 100, 68, 74, 242, 30);
        makeCircles(-50,y, 100, 61, 81, 191, 25);
        makeCircles(10,y, 100, 247, 249, 255, 7);
    }
}

function makeCircles(x, y, r, R, G, B, Alpha){
    circle(x,y,r);
    fill(R, G, B, Alpha);
    noStroke();
    if(x < 800){
        makeCircles(x+1.5*r, y, r)
    }
}