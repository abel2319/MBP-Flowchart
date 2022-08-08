class Gateway{
    constructor(type = "exclusive", x = 200, y = 100, height = 40, width = 40){
        this.type = type;
        this.component;
        this.events = {};

        this.addComponent(x, y, height, width);
        this.addChildren();
        this.addEvent("mouseover", Events.setup().mouseovercb);
        this.addEvent("mouseleave", Events.setup().mouseleavecb);
        aya.Register().add(this);
    }

    addComponent(u, v, h, w){
        this.component = aya.Component("lozenge", {x:u, y:v, height:h, width:w});
    }

    addEvent(event, callback){
        this.component.form.c_svg.addEventListener(event, callback);
        this.events[event] = callback;
        this.component.form.events[event] = callback;
    }

    addChildren(){
        var circle = aya.Image(215, 100, 20, 20, "./Images/circle.png");
        var lozenge = aya.Image(135,100, 20, 20, "./Images/lozenge.png");
        var rectangle = aya.Image(140,100, 20, 20, "./Images/rectangle.png", "rectangle");
        var trash = aya.Image(140,100, 20, 20, "./Images/trash.png", "trash");
        var endEvent = aya.Image(140,100, 20, 20, "./Images/endEvent.png", "endEvent");
        var text = aya.Text(0,0,"");
        
        this.component.form.addChild(circle, (p, c)=>{
            c.x = (p.x + this.component.form.width / 2 + 10);
            c.y = (p.y);
        }, (p, c)=>{}, true);

        this.component.form.addChild(lozenge, (p, c)=>{
            c.x = (p.x + this.component.form.width / 2  + 35);
            c.y = (p.y);
        }, (p, c)=>{}, true);

        this.component.form.addChild(rectangle, (p, c)=>{
            c.x = (p.x + this.component.form.width / 2  + 10);
            c.y = (p.y) + 25;
        }, (p, c)=>{}, true);
        
        this.component.form.addChild(endEvent, (p, c)=>{
            c.x = (p.x + this.component.form.width / 2  + 35);
            c.y = (p.y) + 25;
        }, (p, c)=>{}, true);

        this.component.form.addChild(trash, (p, c)=>{
            c.x = (p.x + this.component.form.width / 2  + 10);
            c.y = (p.y) + 50;
        }, (p, c)=>{}, true);

        this.component.form.addChild(text, (p,c)=>{
            c.setOffsetX(p.x - p.width/4);
            c.setOffsetY(p.y + p.height + 5);
        }, (p,c)=>{}, true);
        
        this.component.form.children.map(({child}) => {
            child.c_svg.setAttribute("class", "hidden")
        });
    }
}
