class Action{
    constructor(type = "action"){
        this.type = type;
        this.component = aya.Component("rectangle", {x:100, y:100, height:50, width:50});
        this.events = {};
        this.component.form.c_svg.setAttribute("rx", "10px");
        this.component.form.c_svg.setAttribute("ry", "10px");

    }
    addEvent(event, callback){
        this.component.form.c_svg.addEventListener(event, callback);
        this.events[event] = callback;
    }
    showPanelTools(){
        var circle = aya.Image(this.component.form.x + 5, this.component.form.y, 20, 20, "../../Images/circle.png");
        var lozenge = aya.Image(this.component.form.x + 5, this.component.form.y, 20, 20, "../../Images/lozenge.png");
        this.component.form.addChild(circle);
        this.component.form.addChild(lozenge);
    } 
}
