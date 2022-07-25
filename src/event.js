class bpmnEvent{
    constructor(type = "start_event"){
        this.type = type;
        this.component = aya.Component("circle", {x:100, y:100, r:10});
        this.component.form.c_svg.setAttribute("stroke-width","2px");
        this.events = {};
    }
    addEvent(event, callback){
        this.component.form.c_svg.addEventListener(event, callback);
        this.events[event] = callback;
    }
    showPanelTools(){
        var circle = aya.Image(this.component.form.x + this.component.form.r + 5, this.component.form.y, 20, 20, "../../Images/circle.png");
        var lozenge = aya.Image(this.component.form.x + this.component.form.r + 25, this.component.form.y, 20, 20, "../../Images/lozenge.png");
        this.component.form.addChild(circle);
        this.component.form.addChild(lozenge);
        
        /*if (i % 3 == 0 && i != 0)
        y = y + 5;
        x = x + 5;
        i++;*/
    } 
}