class Action{
    constructor(type = "action"){
        this.type = type;
        this.component = aya.Component("rectangle", {x:200, y:100, height:50, width:50});
        this.events = {};
        this.component.form.c_svg.setAttribute("rx", "10px");
        this.component.form.c_svg.setAttribute("ry", "10px");
        this.addChildren();
        this.addEvent("mousedown", Events.setup().mouseovercb);
        aya.Register().add(this);
    }
    addEvent(event, callback){
        console.log("this.addEvent");
        console.log(this);
        this.component.form.c_svg.addEventListener(event, callback);
        this.events[event] = callback;
        this.component.form.events[event] = callback;
    }

    addChildren(){
        var circle = aya.Image(215, 100, 20, 20, "./Images/circle.png");
        var lozenge = aya.Image(135,100, 20, 20, "./Images/lozenge.png");
        
        this.component.form.addChild(circle, (p, c)=>{
            c.x = (p.x + this.component.form.width / 2 + 30);
            c.y = (p.y);
        }, (p, c)=>{}, false);

        this.component.form.addChild(lozenge, (p, c)=>{
            c.x = (p.x + this.component.form.width / 2  + 55);
            c.y = (p.y);
        }, (p, c)=>{}, false);
    }
}
