class Link{
    constructor(src_point, dest_point){
        this.type = "link";
        this.src_point = src_point;
        this.dest_point = dest_point;
        this.line = aya.Line(src_point.c_svg.getAttribute("cx"), src_point.c_svg.getAttribute("cy"), dest_point.c_svg.getAttribute("cx"), dest_point.c_svg.getAttribute("cy"));
        this.line.draw();
        this.link = aya.Link(this.src_point, this.dest_point, this.line);
        this.link.redraw();
        this.id = this.line.uuid;

        Register.addComponent(this);
        this.addChildren();
        console.log(this);
        this.line.c_svg.onmouseover = Events.mouseovercb;
        this.line.c_svg.onmouseleave = Events.mouseleavecb;
        this.line.c_svg.ondblclick = Events.doubleclickcb;
    }

    addComponent(){

    }

    addChildren(){
        var trash = aya.Image(140,100, 20, 20, "./Images/trash.png", "trash");
        var text = aya.Text(0,0,"");

        this.line.addChild(trash, (p, c)=>{
            c.x = (p.x + p.x / 2);
            c.y = (p.y) + 5;
        }, (p, c)=>{}, true);

        this.line.addChild(text, (p,c)=>{
            c.setOffsetX(p.x + 20);
            c.setOffsetY(p.y + p.y/6);
        }, (p,c)=>{}, true);

        this.line.children.map(({child}, index) => {
            if (child.type != "text" && index != 0) {
                child.c_svg.onclick = Events.mousedowncbChild;
                child.c_svg.setAttribute("id", this.line.uuid);
            }
        });
        
        this.line.children.map(({child}, index) => {
            if (child.type !== 'text' && index != 0)
                child.c_svg.setAttribute("class", "hidden")
        });
    };
}