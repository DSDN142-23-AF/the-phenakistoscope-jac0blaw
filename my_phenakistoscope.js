const SLICE_COUNT = 12;



function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);

  pScope.load_image("keithdj","png")
  pScope.load_image("disk","png")
  pScope.load_image("diskshadow","png")
  pScope.load_image("keithnoline","png")
  pScope.load_image("actionline","png")
  pScope.load_image_sequence("blue_dance","png", 4);
  pScope.load_image_sequence("purple_dance","png", 4);
  pScope.load_image_sequence("pink_dance","png", 4);
  pScope.load_image_sequence("mouthshoot","png", 3);
  pScope.load_image_sequence("mouthshootshadow","png", 3);
  
  

}

function setup_layers(pScope){

  new PLayer(null, 0);  //lets us draw the whole circle background, ignoring the boundaries

  var collum1 = new PLayer(dancingcollum1);
  collum1.mode( RING );
  collum1.set_boundary( 0, 1000 );

  var collum2 = new PLayer(dancingcollum2);
  collum2.mode( RING );
  collum2.set_boundary( 0, 1000 );

  var collum3 = new PLayer(dancingcollum3);
  collum3.mode( RING );
  collum3.set_boundary( 0, 1000 );

  // var shadowspin = new PLayer(diskshad);
  // shadowspin.mode( SWIRL(2) );
  // shadowspin.set_boundary( 300, 1000 );

  var purpledisk = new PLayer(diskspin);
  purpledisk.mode( SWIRL(2) );
  purpledisk.set_boundary( 300, 1000 );

  var mouth = new PLayer(shootingmouth);
  mouth.mode( RING );
  mouth.set_boundary( 300, 1000 );

  var wolfdj = new PLayer(djinmiddle);
  wolfdj.mode( RING );
  wolfdj.set_boundary( 0, 0 );

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
  pScope.draw_image_from_sequence("pink_dance", -40, -200, animation.frame);
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

 function diskspin(x,y, animation, pScope){
  
  scale(0.43);
  pScope.draw_image("disk",x+280,y);//purple disk going inwards
  
  }

  function shootingmouth(x,y, animation, pScope){
    
    scale(0.16);
    //pScope.draw_image_from_sequence("mouthshootshadow", x-450, y+3250, animation.frame);
    pScope.draw_image_from_sequence("mouthshoot", x-590, y+6250, animation.frame);//mouth animation
    
    }


  function djinmiddle(x, y, animation, pScope){
    
    scale(0.5);
    
    fill(10,0,100);
    strokeWeight(0);
    ellipse(0,0, 2350, 2300);//dark blue circle
    fill(22,33,225);
    strokeWeight(25);
    ellipse(0,0,1000,1000);//navy blue circle
    noFill();
    strokeWeight(25);
    ellipse(0,0, 950, 950);

    scale(animation.frame*2.5);
    pScope.draw_image("keithdj",x,y)//wolf in middle

    // scale(animation.frame*0.55);
    // pScope.draw_image("keithnoline",x,y)

    // scale(animation.frame*2.2);
    // scale(animation.wave(0.02));
    // pScope.draw_image("actionline",x,y);

    fill(0,0,0);
    ellipse(0,0,34,34);//middle vinyl circle

 
 }
  

 


