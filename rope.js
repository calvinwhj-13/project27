class rope {
    constructor(bodyA,bodyB,offsetX,offsetY) {

        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.3,
            length : 1,
            pointB:{x:this.offsetX, y:this.offsetY}

        }
        this.bodyB = bodyB;
        this.rope = constrain.create(options);
        World.add(world,this.rope);

    }

    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB;

        strokeWeight(2);

        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;

        var Anchor2X = pointB+this.offsetX;
        var Anchor2Y = pointB+this.offsetY;

        stroke("silver");
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}