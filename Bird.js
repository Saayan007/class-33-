class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.smokeImage = loadImage("sprites/smoke.png");
  
    this.trajectory =[];
    this.Visibility= 255;
    this.redBird=loadImage("sprites/bird.png");
    this.yellowBird=loadImage("sprites/yellowbird.png");
    this.blueBird=loadImage("sprites/bluebird.png");
  }

  displayredBird(){
    var angle=this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.redBird,0,0,this.width,this.height);

  }
  displayyellowBird(){
    var angle=this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.yellowBird,0,0,this.width,this.height);
  }
  displayblueBird(){
    var angle=this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.blueBird,0,0,this.width,this.height);
  }
  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      push();
      this.Visibility=this.Visibility-0.5
      tint(255,this.Visibility);
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      pop();
    }
  }
}
