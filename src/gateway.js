class Gateway{
    constructor(type = "exclusive"){
        this.type = type;
        this.component = aya.Component("lozenge", {x:200, y:100, height:40, width:40});
        this.events = {};
        this.addChildren();
        this.addEvent("mousedown", Events.setup().mouseovercb);
        aya.Register().add(this);
    }

    addEvent(event, callback){
        this.component.form.c_svg.addEventListener(event, callback);
        this.events[event] = callback;
        this.component.form.events[event] = callback;
    }

    addChildren(){
        var circle = aya.Image(215, 100, 20, 20, "./Images/circle.png");
        var lozenge = aya.Image(135,100, 20, 20, "./Images/lozenge.png");
        
        this.component.form.addChild(circle, (p, c)=>{
            c.x = (p.x + this.component.form.width / 2 + 10);
            c.y = (p.y);
        }, (p, c)=>{}, false);

        this.component.form.addChild(lozenge, (p, c)=>{
            c.x = (p.x + this.component.form.width / 2  + 35);
            c.y = (p.y);
        }, (p, c)=>{}, false);
    }
}
