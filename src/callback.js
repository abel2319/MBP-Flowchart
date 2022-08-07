class Events{

    static setup = () => {
        return {
            mousedowncbChild: (e) => {
                console.log(e.srcElement);
                var cp2 = aya.Register().find(e.srcElement.getAttribute("id"));
                console.log(cp2);
                if (e.srcElement.getAttribute("href") === "./Images/circle.png"){
                    var next = new bpmnEvent("intermediate_event", Number(e.srcElement.getAttribute("x")) + 80, Number(e.srcElement.getAttribute("y")) + 65, 15);
                    var x = Number(cp2.form.c_points[3].c_svg.getAttribute("cx"));
                    var y = Number(cp2.form.c_points[3].c_svg.getAttribute("cy")); 
                    var dx = Number(next.component.form.c_points[1].c_svg.getAttribute("cx")); 
                    var dy = Number(next.component.form.c_points[1].c_svg.getAttribute("cy"));
                    var line = aya.Line(x, y, dx, dy);
                    //var line = aya.Line(cp2.form.uuid, cp2.form.svg, null, cp2.form.config, aya._uuid().generate(), x, y, dx, dy);
                    //var line = aya.Line(200, 100, 500, 200);
	                line.draw();
                    var link = aya.Link(cp2.form.c_points[1], next.component.form.c_points[3], line);
	                link.redraw();
                }
                else if (e.srcElement.getAttribute("href") === "./Images/rectangle.png"){
                    var cp = new Action();
                }
                else if (e.srcElement.getAttribute("href") === "./Images/lozenge.png"){
                    var cp = new Gateway();
                }
            },
            mouseovercb: (e) => {
                console.log("this.showPanelTools");
                console.log(this);
                var id = e.srcElement.id;
                var cp = aya.Register().find(id);
                console.log(cp);
                if (back_id == "") {
                    console.log("If");
                    cp.form.children.map(({child}) => {
                        child.draw();
                        console.log(child);
                        child.c_svg.addEventListener("click", Events.setup().mousedowncbChild);
                        child.c_svg.setAttribute("id", cp.form.uuid);
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
    }
}