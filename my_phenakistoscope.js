const SLICE_COUNT = 12;



function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);

  pScope.load_image("keithdj","png")
  pScope.load_image("disk","png")
  pScope.load_image("keithnoline","png")
  pScope.load_image("actionline","png")
  pScope.load_image_sequence("blue_dance","png", 4);
  pScope.load_image_sequence("purple_dance","png", 4);
  pScope.load_image_sequence("pink_dance","png", 4);
  pScope.load_image_sequence("mouthshoot","png", 2);
  
  

}

function setup_layers(pScope){

  new PLayer(null, 0);  //lets us draw the whole circle background, ignoring the boundaries

  // var layer1 = new PLayer(faces);
  // layer1.mode( SWIRL(5) );
  // layer1.set_boundary( 200, 1000 );

  // var layer2 = new PLayer(squares);
  // layer2.mode( RING );
  // layer2.set_boundary( 0, 400 );

  var layer1 = new PLayer(djset);
  layer1.mode( RING );
  layer1.set_boundary( 0, 400 );

  var layer2 = new PLayer(dancingcollum1);
  layer2.mode( RING );
  layer2.set_boundary( 0, 1000 );

  var layer3 = new PLayer(dancingcollum2);
  layer3.mode( RING );
  layer3.set_boundary( 0, 1000 );

  var layer4 = new PLayer(dancingcollum3);
  layer4.mode( RING );
  layer4.set_boundary( 0, 1000 );

  var layer5 = new PLayer(laser);
  layer5.mode( SWIRL(2) );
  layer5.set_boundary( 300, 1000 );

  var layer6 = new PLayer(laser2);
  layer6.mode( RING );
  layer6.set_boundary( 300, 1000 );

  var layer7 = new PLayer(djinmiddle);
  layer7.mode( RING );
  layer7.set_boundary( 0, 0 );

  var layer8 = new PLayer(test);
  layer8.mode( RING );
  layer8.set_boundary( 800, 1000 );
}


function faces(x, y, animation, pScope){
  
  scale(animation.frame*2);

  ellipse(0,0,50,50); // draw head
  fill(30);
  ellipse(-10,-10,10,10); //draw eye
  ellipse(10,-10,10,10); // draw eye
  arc(0,10,20,10,0,180); // draw mouth

}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(66, 135, 245)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255)
  rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw
    
  
}

function djset(){
  //circle(0, 0, 900);

  

}

function dancingcollum1(x, y, animation,pScope){
  
 translate(x-200,y-950)
 scale(0.2);
 pScope.draw_image_from_sequence("pink_dance", -50, -150, animation.frame);
 pScope.draw_image_from_sequence("blue_dance", 0, 0, animation.frame);
 pScope.draw_image_from_sequence("purple_dance", 50, 500, animation.frame);
 pScope.draw_image_from_sequence("pink_dance", 100, 1000, animation.frame);
 
}

function dancingcollum2(x, y, animation,pScope){
  translate(x-50,y-950)
  scale(0.2);
  pScope.draw_image_from_sequence("blue_dance", -50, -150, animation.frame);
  pScope.draw_image_from_sequence("purple_dance", 0, 0, animation.frame);
  pScope.draw_image_from_sequence("pink_dance", 50, 500, animation.frame);
  pScope.draw_image_from_sequence("blue_dance", 100, 1000, animation.frame);
  
 }

 function dancingcollum3(x, y, animation, pScope){
  translate(x+125,y-950)
  
  scale(0.2);
  pScope.draw_image_from_sequence("purple_dance", -50, -150, animation.frame);
  pScope.draw_image_from_sequence("pink_dance", 0, 0, animation.frame);
  pScope.draw_image_from_sequence("blue_dance", 50, 500, animation.frame);
  pScope.draw_image_from_sequence("purple_dance", 100, 1000, animation.frame);
  
 }

 function laser(x,y, animation, pScope){
  
  stroke(22,59,123, 150)
  strokeWeight(45);
 
  {scale(0.15)
  
  pScope.draw_image("disk",x+600,y);}

  // noFill();
  // arc(0, 0, 200, 200, 200, PI + QUARTER_PI);

  }

  function laser2(x,y, animation, pScope){
    scale(0.3);
  
    pScope.draw_image_from_sequence("mouthshoot", x-250, y+3300, animation.frame);
    
    }


  function djinmiddle(x, y, animation, pScope){
    let angleOffset = (360 / SLICE_COUNT) / 2
    let backgroundArcStart = 270 - angleOffset;
    let backgroundArcEnd = 270 + angleOffset;
    
    scale(0.5);
    
    fill(10,0,100);
    strokeWeight(25);
    ellipse(0,0, 2250, 2150);
    fill(22,33,225);
    strokeWeight(25);
    ellipse(0,0,1000,1000);
    noFill();
    strokeWeight(25);
    ellipse(0,0, 950, 950);

    scale(animation.frame*0.55);
    pScope.draw_image("keithnoline",x,y)

    scale(animation.frame*2.2);
    scale(animation.wave(0.02));
    pScope.draw_image("actionline",x,y);

    fill(0,0,0);
    ellipse(0,0,80,80);

 
 }
  

 function test (x,y,animation,pScope){


  
 


 }


