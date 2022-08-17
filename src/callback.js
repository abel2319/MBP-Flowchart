class Events{

    static mouseovercb(e){
        console.log("this.showPanelTools");
        var id = e.srcElement.id;
        var cp = Register.findComponent(id);
        // console.log(cp);
        // console.log(e.srcElement);
        console.log("If");
        if (cp.type == "link") {
            cp.line.children.map(({child}, index) => {
                if (child.type != "text") {
                    child.c_svg.setAttribute("class", "show");
                }
            });
        }
        else
        {
            cp.comp.component.form.children.map(({child}, index) => {
                if (child.type != "text") {
                    console.log(child);
                    if (cp.type == "intermediate_event"){
                        if (index > 0)
                            child.c_svg.setAttribute("class", "show")
                    }
                    else
                        child.c_svg.setAttribute("class", "show");
                }
            });
        }
    }

    static mouseleavecb(e){
        var id = e.srcElement.id;
        var cp = Register.findComponent(id);
        setTimeout(()=>{
            if (cp.type == "link") {
                cp.line.children.map(({child}, index) => {
                    if (child.type != "text" && index != 0) {
                        child.c_svg.setAttribute("class", "hidden");
                    }
                });
            }
            else
            {
                cp.comp.component.form.children.map(({child}, index) => {
                    if (child.type != "text"){
                        if (cp.type == "intermediate_event"){
                            if (index > 0)
                                child.c_svg.setAttribute("class", "hidden")
                        }
                        else
                            child.c_svg.setAttribute("class", "hidden");
                    }
                    //child.removeFromDOM();
                });
            }
        }, 3000);

    }

    static mousedowncbChild(e){
        console.log(e.srcElement);
        var cp2 = Register.findComponent(e.srcElement.getAttribute("id"));
        if (e.srcElement.getAttribute("href") === "./Images/circle.png" || e.srcElement.getAttribute("href") === "./Images/endEvent.png"){
            if (e.srcElement.getAttribute("href") === "./Images/endEvent.png")
                var next = new bpmnComponent("end_event");
            else
                var next = new bpmnComponent("intermediate_event");
            id_test = next.id;
            if (cp2.comp.component.form.type != "circle"){
                next.comp.component.form.x = Number(cp2.comp.component.form.x) + 200;
                next.comp.component.form.y = Number(cp2.comp.component.form.y) + cp2.comp.component.form.width / 2;
            }
            else{
                next.comp.component.form.x = Number(cp2.comp.component.form.x) + 200;
                next.comp.component.form.y =  Number(cp2.comp.component.form.y);
            }
            next.comp.component.form.redraw();
            var link1 = new Link(cp2.comp.component.form.c_points[2], next.comp.component.form.c_points[3]);
        }
        else if (e.srcElement.getAttribute("href") === "./Images/rectangle.png"){
            var next = new bpmnComponent("task");
            id_test = next.id;
            if (cp2.comp.component.form.type != "circle"){
                next.comp.component.form.x = Number(cp2.comp.component.form.x) + 200;
                next.comp.component.form.y = Number(cp2.comp.component.form.y);
            }
            else{
                next.comp.component.form.x = Number(cp2.comp.component.form.x) + 200;
                next.comp.component.form.y = Number(cp2.comp.component.form.y) - next.comp.component.form.width / 2;
            }
            next.comp.component.form.redraw();
            var link1 = new Link(cp2.comp.component.form.c_points[2], next.comp.component.form.c_points[3]);
        }
        else if (e.srcElement.getAttribute("href") === "./Images/lozenge.png"){;
            var next = new bpmnComponent("gateway_exclusive");
            id_test = next.id;
            if (cp2.comp.component.form.type != "circle"){
                next.comp.component.form.x = Number(cp2.comp.component.form.x) + 200;
                next.comp.component.form.y = Number(cp2.comp.component.form.y);
            }
            else{
                next.comp.component.form.x = Number(cp2.comp.component.form.x) + 200;
                next.comp.component.form.y = Number(cp2.comp.component.form.y) - next.comp.component.form.width / 2;
            }
            next.comp.component.form.redraw();
            var link1 = new Link(cp2.comp.component.form.c_points[2], next.comp.component.form.c_points[3]);
        }
        else if (e.srcElement.getAttribute("href") === "./Images/trash.png"){
            nbr_elt--;
            let test
            if (cp2.type == "link") {
                test = cp2.line.removeFromDOM();
            }
            else
                test = cp2.comp.component.form.removeFromDOM();
            console.log(test);
        }    
    }

    static doubleclickcb(e){
        var id = e.srcElement.id;
        var cp = Register.findComponent(id);
        console.log(document.getElementById(id));
        
        text.style.visibility = "visible";
        text.style.left = cp.comp.component.form.x + "px";
        text.style.top = (cp.comp.component.form.y + 55) + "px";
        
        cp.comp.component.form.children.map(({child})=>{
            if (child.type == "text"){
                console.log("field_text");
                text_input.value = child.text;
                console.log(text_input.value);
                text_input.onkeydown = (event)=>{
                    if (event.key == "Enter"){
                        console.log(event.key);
                        child.text = text_input.value;
                        child.removeFromDOM();
                        child.draw();
                        text.style.visibility = "hidden";
                    }
                };
            }
        });
    }

    static onclickcb(e){
        var id = e.srcElement.id;
        var cp = Register.findComponent(id);

        cp.comp.component.form.children.map(({child}, index) => {
            if (child.type != "text"){
                if (cp.type == "intermediate_event"){
                    if (index > 0)
                        child.c_svg.setAttribute("class", "hidden")
                }
                else
                    child.c_svg.setAttribute("class", "hidden");
            }
        });

    }
   
   
   
   
   
      /* static setup = () => {
        return {
            mousedowncbChild: (e) => {
                console.log(e.srcElement);
                var cp2 = Register.findComponent(e.srcElement.getAttribute("id"));
                console.log("abel-----------------------------------");
                console.log(cp2);
                if (e.srcElement.getAttribute("href") === "./Images/circle.png"){
                    var next = new bpmnComponent();
                }
                else if (e.srcElement.getAttribute("href") === "./Images/rectangle.png"){

                }
                else if (e.srcElement.getAttribute("href") === "./Images/lozenge.png"){

                }
            },
            mouseovercb: (e) => {
                console.log("this.showPanelTools");
                console.log(this);
                var id = e.srcElement.id;
                var cp = Register.findComponent(id);
                console.log(cp);
                console.log(e.srcElement);
                //cp.form.c_svg.style.cursor = "move";
                //if (back_id == "") {
                console.log("If");
                cp.comp.component.form.children.map(({child}) => {
                    if (child.type != "text") {
                        child.c_svg.setAttribute("class", "show");
                    }
                });
            },
            mouseleavecb: (e) => {
                var id = e.srcElement.id;
                var cp = Register.findComponent(id);
                setTimeout(()=>{
                    cp.comp.component.form.children.map(({child}) => {
                        if (child.type != "text")
                            child.c_svg.setAttribute("class", "hidden");
                        //child.removeFromDOM();
                    });
                }, 5000);
            },
            doubleclickcb: (e) => {
                var id = e.srcElement.id;
                var cp = aya.Register().find(id);
                console.log("doubleclickcb");
                console.log(cp.form.children);
                //var inp = document.createElement("input");
            }
        }
    }*/
}