class Link{
    constructor(src_point, dest_point){
        this.src_point = src_point;
        this.dest_point = dest_point;
        this.line = aya.Line(src_point.c_svg.getAttribute("cx"), src_point.c_svg.getAttribute("cy"), dest_point.c_svg.getAttribute("cx"), dest_point.c_svg.getAttribute("cy"));
        this.line.draw();
        this.link = aya.Link(this.src_point, this.dest_point, this.line);
        this.link.redraw();
        this.id;
    }              
}