class bpmnEvent{
    constructor(type = "start_event"){
        this.type = type;
        this.uuid = aya._uuid().generate();
        this.component = aya.Component("circle", {x:200, y:100, r:15});
        this.component.form.c_svg.setAttribute("stroke-width","2px");
        this.events = {};
        this.addChildren();
        this.addEvent("mousedown", this.showPanelTools);
        aya.Register().add(this);
        console.log(this);
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
            c.x = (p.x + this.component.form.r + 15);
            c.y = (p.y - this.component.form.r);
        }, (p, c)=>{}, false);

        this.component.form.addChild(lozenge, (p, c)=>{
            c.x = (p.x + this.component.form.r + 40);
            c.y = (p.y - this.component.form.r);
        }, (p, c)=>{}, false);
    }

    showPanelTools(e){
        console.log("this.showPanelTools");
        console.log(this);
        var id = e.srcElement.id;
        var cp = aya.Register().find(id);
        console.log(cp);
        if (back_id == "") {
            console.log("If");
            cp.form.children.map(({child}) => {
                child.draw();
            });
            back_id = id;
        }
        else{
            console.log("Else");
            cp.form.children.map(({child}) => {
                child.removeFromDOM();
            });
            back_id = "";
        }
    }
}