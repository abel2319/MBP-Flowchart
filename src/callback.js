class Events{

    static setup = () => {
        return {
            mousedowncbChild: (e) => {
                console.log(e.srcElement);
                var cp2 = aya.Register().find(e.srcElement.getAttribute("id"));
                console.log(cp2);
                if (e.srcElement.getAttribute("href") === "./Images/circle.png"){
                    if (cp2.form.c_svg.getAttribute("class") === "0") {
                        if (cp2.type === "circle")
                            var next = new bpmnEvent("intermediate_event", Number(e.srcElement.getAttribute("x")) + 80, Number(e.srcElement.getAttribute("y")) + 65, 15);
                        else
                            var next = new bpmnEvent("intermediate_event", Number(e.srcElement.getAttribute("x")) + 80, Number(e.srcElement.getAttribute("y")) + 75, 15);
                        var x = Number(cp2.form.c_points[3].c_svg.getAttribute("cx"));
                        var y = Number(cp2.form.c_points[3].c_svg.getAttribute("cy")); 
                        var dx = Number(next.component.form.c_points[1].c_svg.getAttribute("cx")); 
                        var dy = Number(next.component.form.c_points[1].c_svg.getAttribute("cy"));
                        cp2.form.c_svg.setAttribute("class", "1");
                    }
                    else if (cp2.form.c_svg.getAttribute("class") !== "0" && cp2.type != "circle") {
                        var next = new bpmnEvent("intermediate_event", Number(e.srcElement.getAttribute("x")) + 80, Number(e.srcElement.getAttribute("y")) - 10 * Number(cp2.form.c_svg.getAttribute("class")), 15);
                        var x = Number(cp2.form.c_points[0].c_svg.getAttribute("cx"));
                        var y = Number(cp2.form.c_points[0].c_svg.getAttribute("cy")); 
                        var dx = Number(next.component.form.c_points[2].c_svg.getAttribute("cx")); 
                        var dy = Number(next.component.form.c_points[2].c_svg.getAttribute("cy"));
                        cp2.form.c_svg.setAttribute("class", Number(cp2.form.c_svg.getAttribute("class")));
                    }
                }
                else if (e.srcElement.getAttribute("href") === "./Images/rectangle.png"){
                    if (cp2.form.c_svg.getAttribute("class") === "0") {
                        if (cp2.type === "circle")
                            var next1 = new Action("action", Number(e.srcElement.getAttribute("x")) + 80, Number(e.srcElement.getAttribute("y")) - 35, 50, 50);
                        else
                            var next1 = new Action("action", Number(e.srcElement.getAttribute("x")) - 80, Number(e.srcElement.getAttribute("y")) + 75, 50, 50);
                        var x = Number(cp2.form.c_points[2].c_svg.getAttribute("cx"));
                        var y = Number(cp2.form.c_points[2].c_svg.getAttribute("cy")); 
                        var dx = Number(next1.component.form.c_points[1].c_svg.getAttribute("cx")); 
                        var dy = Number(next1.component.form.c_points[1].c_svg.getAttribute("cy"));
                        cp2.form.c_svg.setAttribute("class", "1");
                    }
                    else if (cp2.form.c_svg.getAttribute("class") === "1" && cp2.type != "circle") {
                        var next1 = new Action("action", Number(e.srcElement.getAttribute("x")) + 90, Number(e.srcElement.getAttribute("y")) + 50);
                        var x = Number(cp2.form.c_points[2].c_svg.getAttribute("cx"));
                        var y = Number(cp2.form.c_points[2].c_svg.getAttribute("cy")); 
                        var dx = Number(next1.component.form.c_points[1].c_svg.getAttribute("cx")); 
                        var dy = Number(next1.component.form.c_points[1].c_svg.getAttribute("cy"));
                        cp2.form.c_svg.setAttribute("class", "2");
                    }
                }
                else if (e.srcElement.getAttribute("href") === "./Images/lozenge.png"){
                    if (cp2.form.c_svg.getAttribute("class") === "0") {
                        if (cp2.type === "circle")
                            var next1 = new Gateway("exclusive", Number(e.srcElement.getAttribute("x")) + 80, Number(e.srcElement.getAttribute("y")) - 35, 40, 40);
                        else
                            var next1 = new Gateway("exclusive", Number(e.srcElement.getAttribute("x")) - 80, Number(e.srcElement.getAttribute("y")) + 75, 40, 40);
                        var x = Number(cp2.form.c_points[2].c_svg.getAttribute("cx"));
                        var y = Number(cp2.form.c_points[2].c_svg.getAttribute("cy")); 
                        var dx = Number(next1.component.form.c_points[1].c_svg.getAttribute("cx")); 
                        var dy = Number(next1.component.form.c_points[1].c_svg.getAttribute("cy"));
                        cp2.form.c_svg.setAttribute("class", "1");
                    }
                    else if (cp2.form.c_svg.getAttribute("class") === "1" && cp2.type != "circle") {
                        var next1 = new Gateway("exclusive", Number(e.srcElement.getAttribute("x")) + 90, Number(e.srcElement.getAttribute("y")) + 50);
                        var x = Number(cp2.form.c_points[2].c_svg.getAttribute("cx"));
                        var y = Number(cp2.form.c_points[2].c_svg.getAttribute("cy")); 
                        var dx = Number(next1.component.form.c_points[1].c_svg.getAttribute("cx")); 
                        var dy = Number(next1.component.form.c_points[1].c_svg.getAttribute("cy"));
                        cp2.form.c_svg.setAttribute("class", "2");
                    }
                    /*if (cp2.type === "rectangle")
                        var cp = new Gateway("exclusive", Number(cp2.form.c_svg.getAttribute("x")) + 100, Number(cp2.form.c_svg.getAttribute("y")));
                    if (cp2.type === "circle")
                        var cp = new Gateway("exclusive", Number(cp2.form.c_svg.getAttribute("cx")) + 100, Number(cp2.form.c_svg.getAttribute("cy")));
                    if (cp2.type === "lozenge")
                        var cp = new Gateway("exclusive", Number(e.srcElement.getAttribute("x")) + 100, Number(e.srcElement.getAttribute("y")) + 65);
                    */
                }
                else if (e.srcElement.getAttribute("href") === "./Images/trash.png"){
                    cp2.form.removeFromDOM();
                }
                else if (e.srcElement.getAttribute("href") === "./Images/endEvent.png"){
                    if (cp2.type === "circle")
                            var next = new bpmnEvent("end_event", Number(e.srcElement.getAttribute("x")) + 80, Number(e.srcElement.getAttribute("y")) + 65, 15);
                        else
                            var next = new bpmnEvent("end_event", Number(e.srcElement.getAttribute("x")) + 80, Number(e.srcElement.getAttribute("y")) + 75, 15);
                        var x = Number(cp2.form.c_points[3].c_svg.getAttribute("cx"));
                        var y = Number(cp2.form.c_points[3].c_svg.getAttribute("cy")); 
                        var dx = Number(next.component.form.c_points[1].c_svg.getAttribute("cx")); 
                        var dy = Number(next.component.form.c_points[1].c_svg.getAttribute("cy"));
                        cp2.form.c_svg.setAttribute("class", "1");
                }
                var line = aya.Line(x, y, dx, dy);
                line.draw();
                var link = aya.Link(cp2.form.c_points[1], next.component.form.c_points[3], line);
                link.redraw();
            },
            mouseovercb: (e) => {
                console.log("this.showPanelTools");
                console.log(this);
                var id = e.srcElement.id;
                var cp = aya.Register().find(id);
                console.log(cp);
                cp.form.c_svg.style.cursor = "move";
                //if (back_id == "") {
                console.log("If");
                cp.form.children.map(({child}) => {
                    //child.draw();
                    console.log(child);
                    if (child.type != "text") {
                        child.c_svg.setAttribute("class", "show");
                        child.c_svg.addEventListener("click", Events.setup().mousedowncbChild);
                        child.c_svg.setAttribute("id", cp.form.uuid);
                    }
                });
                //    back_id = id;
                //}
                // else{
                //     console.log("Else");
                //     cp.form.children.map(({child}) => {
                //         child.removeFromDOM();
                //     });
                //     back_id = "";
                // }     
            },
            mouseleavecb: (e) => {
                var id = e.srcElement.id;
                var cp = aya.Register().find(id);
                setTimeout(()=>{
                    cp.form.children.map(({child}) => {
                        child.c_svg.setAttribute("class", "hidden");
                        //child.removeFromDOM();
                    });
                }, 5000);
            },
            doubleclickcb: (e) => {
                
            }
        }
    }
}