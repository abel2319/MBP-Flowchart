
class bpmnEvent{
    constructor(type = "start_event"){
        this.type = type;
        this.component;
        this.events = {};

        this.addComponent(200, 100, 15);
        this.addChildren();
        this.component.form.c_svg.onmouseover = Events.mouseovercb;
        this.component.form.c_svg.onmouseleave = Events.mouseleavecb;
        this.component.form.c_svg.ondblclick = Events.doubleclickcb;
        this.component.form.c_svg.onclick = Events.onclickcb;
    }

    addComponent(u, v, w){
        if (this.type == "start_event"){
            this.component = aya.Component("circle", {x:u, y:v, r:w});
            this.component.form.c_svg.setAttribute("stroke-width","2px");
        }
        else if (this.type == "intermediate_event"){
            var tmp = aya.Circle(0, 0, 12);
            this.component = aya.Component("circle", {x:u, y:v, r:w});
            this.component.form.c_svg.setAttribute("stroke-width","2px");
            this.component.form.addChild(tmp, (p, c)=>{
                c.setOffsetX(p.x);
                c.setOffsetY(p.y);
            }, (p, c)=>{}, true);
        }
        else{
            this.component = aya.Component("circle", {x:(u + 200), y:v, r:w});
            this.component.form.c_svg.setAttribute("stroke-width","5px");
        }
    }
    // addEvent(event, callback){
    //     this.component.form.c_svg.addEventListener(event, callback);
    //     this.events[event] = callback;
    //     //this.component.form.events[event] = callback;
    // }

    addChildren(){
        var circle = aya.Image(215, 100, 20, 20, "./Images/circle.png", "circle");
        var lozenge = aya.Image(135,100, 20, 20, "./Images/lozenge.png", "lozenge");
        var rectangle = aya.Image(140,100, 20, 20, "./Images/rectangle.png", "rectangle");
        var trash = aya.Image(140,100, 20, 20, "./Images/trash.png", "trash");
        var endEvent = aya.Image(140,100, 20, 20, "./Images/endEvent.png", "endEvent");
        var message = aya.Image(140,100, 20, 20, "./Images/message.png", "message");
        var clock = aya.Image(140,100, 20, 20, "./Images/clock.png", "clock");
        var text = aya.Text(0,0,"");

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

            this.component.form.addChild(endEvent, (p, c)=>{
                c.x = (p.x + this.component.form.r + 35);
                c.y = (p.y - this.component.form.r + 25);
            }, (p, c)=>{}, true);

            this.component.form.addChild(trash, (p, c)=>{
                c.x = (p.x + this.component.form.r + 10);
                c.y = (p.y - this.component.form.r + 50);
            }, (p, c)=>{}, true);
            
            /*this.component.form.addChild(message, (p, c)=>{
                c.x = (p.x + this.component.form.r - 10);
                c.y = (p.y + this.component.form.r + 20);
            }, (p, c)=>{}, true);

            this.component.form.addChild(clock, (p, c)=>{
                c.x = (p.x + this.component.form.r + 10);
                c.y = (p.y + this.component.form.r + 20);
            }, (p, c)=>{}, true);*/
        }
        else if (this.type == "end_event"){
            this.component.form.addChild(trash, (p, c)=>{
                c.x = (p.x + this.component.form.r + 10);
                c.y = (p.y - this.component.form.r);
            }, (p, c)=>{}, true);
        }

        this.component.form.addChild(text, (p,c)=>{
            c.setOffsetX(p.x - p.r/4);
            c.setOffsetY(p.y + p.r + 13);
        }, (p,c)=>{}, true);
        
        this.component.form.children.map(({child}, index) => {
            if (child.type != "text") {
                if (this.type == "intermediate_event" && index != 0)
                    child.c_svg.onclick = Events.mousedowncbChild;
                else
                    child.c_svg.onclick = Events.mousedowncbChild;
                
                child.c_svg.setAttribute("id", this.component.form.uuid);
            }
        });

        this.component.form.children.map(({child}, index) => {
            if (child.type != "text"){
                if (this.type == "intermediate_event"){
                    if (index > 0)
                        child.c_svg.setAttribute("class", "hidden")
                }
                else
                    child.c_svg.setAttribute("class", "hidden")
            }
        });
    }

}