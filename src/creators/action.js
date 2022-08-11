class Task{
    constructor(type = "task", prosp={x:200, y:100, height:50, width:50}){
        this.type = type;
        //this.uuid = aya._uuid().generate();
        this.component;
        this.events = {};

        this.addComponent(200, 100, 50, 50);
        //this.component.form.c_svg.setAttribute("class", "0");
        this.addChildren();
        this.component.form.c_svg.onmouseover = Events.mouseovercb;
        this.component.form.c_svg.onmouseleave = Events.mouseleavecb;
        this.component.form.c_svg.ondblclick = Events.doubleclickcb;
    }

    addComponent(u, v, h, w){
        this.component = aya.Component("rectangle", {x:u, y:v, height:h, width:w});
        this.component.form.c_svg.setAttribute("rx", "10px");
        this.component.form.c_svg.setAttribute("ry", "10px");
    }

    addChildren(){
        var circle = aya.Image(215, 100, 20, 20, "./Images/circle.png");
        var lozenge = aya.Image(135,100, 20, 20, "./Images/lozenge.png");
        var rectangle = aya.Image(140,100, 20, 20, "./Images/rectangle.png", "rectangle");
        var trash = aya.Image(140,100, 20, 20, "./Images/trash.png", "trash");
        var endEvent = aya.Image(140,100, 20, 20, "./Images/endEvent.png", "endEvent");
        var text = aya.Text(0,0,"abel");

        this.component.form.addChild(circle, (p, c)=>{
            c.x = (p.x + this.component.form.width / 2 + 30);
            c.y = (p.y);
        }, (p, c)=>{}, true);

        this.component.form.addChild(lozenge, (p, c)=>{
            c.x = (p.x + this.component.form.width / 2  + 55);
            c.y = (p.y);
        }, (p, c)=>{}, true);
        
        this.component.form.addChild(rectangle, (p, c)=>{
            c.x = (p.x + this.component.form.width / 2  + 30);
            c.y = (p.y) + 30;
        }, (p, c)=>{}, true);

        this.component.form.addChild(endEvent, (p, c)=>{
            c.x = (p.x + this.component.form.width / 2  + 55);
            c.y = (p.y) + 30;
        }, (p, c)=>{}, true);

        this.component.form.addChild(trash, (p, c)=>{
            c.x = (p.x + this.component.form.width / 2  + 30);
            c.y = (p.y) + 55;
        }, (p, c)=>{}, true);

        this.component.form.addChild(text, (p,c)=>{
            c.setOffsetX(p.x + 5);
            c.setOffsetY(p.y + p.height/2);
        }, (p,c)=>{}, true);

        this.component.form.children.map(({child}) => {
            if (child.type != "text") {
                child.c_svg.onclick = Events.mousedowncbChild;
                child.c_svg.setAttribute("id", this.component.form.uuid);
            }
        });
        
        this.component.form.children.map(({child}) => {
            if (child.type !== 'text')
                child.c_svg.setAttribute("class", "hidden")
        });
    }
}
