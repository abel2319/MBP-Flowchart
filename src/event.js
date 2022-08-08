
class bpmnEvent{
    constructor(type = "start_event", x = 200, y = 150, r = 15){
        this.type = type;
        this.uuid = aya._uuid().generate();
        this.component;
        this.events = {};

        this.addComponent(x, y, r);
        this.addChildren();
        this.addEvent("mouseover", Events.setup().mouseovercb);
        this.addEvent("mouseleave", Events.setup().mouseleavecb);
        aya.Register().add(this);
        console.log(this);
    }

    addComponent(u, v, w){
        //var tmp = aya.Component("circle", {x:200, y:100, r:13});
        if (this.type == "start_event"){
            this.component = aya.Component("circle", {x:u, y:v, r:w});
            this.component.form.c_svg.setAttribute("stroke-width","2px");
        }
        else if (this.type == "intermediate_event"){
            this.component = aya.Component("circle", {x:u, y:(v - 50), r:w});
            this.component.form.c_svg.setAttribute("stroke-width","2px");
            /*this.component.form.addChild(tmp, (p, c)=>{
                c.x = (p.x);
                c.y = (p.y);
            }, (p, c)=>{});*/
        }
        else{
            this.component = aya.Component("circle", {x:(u + 200), y:v, r:w});
            this.component.form.c_svg.setAttribute("stroke-width","5px");
        }
    }
    addEvent(event, callback){
        console.log("this.addEvent");
        console.log(this);
        this.component.form.c_svg.addEventListener(event, callback);
        this.events[event] = callback;
        this.component.form.events[event] = callback;
    }

    addChildren(){
        var circle = aya.Image(215, 100, 20, 20, "./Images/circle.png", "circle");
        var lozenge = aya.Image(135,100, 20, 20, "./Images/lozenge.png", "lozenge");
        var rectangle = aya.Image(140,100, 20, 20, "./Images/rectangle.png", "rectangle");
        
        if (this.type == "start_event"){
            this.component.form.addChild(lozenge, (p, c)=>{
                c.x = (p.x + this.component.form.r + 10);
                c.y = (p.y - this.component.form.r);
            }, (p, c)=>{}, true);

            this.component.form.addChild(rectangle, (p, c)=>{
                c.x = (p.x + this.component.form.r + 35);
                c.y = (p.y - this.component.form.r);
            }, (p, c)=>{}, true);
        }
        
        else if (this.type == "intermediate_event"){
            this.component.form.addChild(circle, (p, c)=>{
                c.x = (p.x + this.component.form.r + 10);
                c.y = (p.y - this.component.form.r);
            }, (p, c)=>{}, true);

            this.component.form.addChild(lozenge, (p, c)=>{
                c.x = (p.x + this.component.form.r + 35);
                c.y = (p.y - this.component.form.r);
            }, (p, c)=>{}, true);

            this.component.form.addChild(rectangle, (p, c)=>{
                c.x = (p.x + this.component.form.r + 10);
                c.y = (p.y - this.component.form.r + 25);
            }, (p, c)=>{}, true);
        }
        this.component.form.children.map(({child}) => {
            child.c_svg.setAttribute("class", "hidden")
        });
    }

    /*addEventChild(event, callback){
        this.component.form.children.map(({child})=>{
            child.addEvent(event, callback);
        });
        this.events[event] = callback;
        this.component.form.events[event] = callback;
    }*/
}