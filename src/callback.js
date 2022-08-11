class Events{

    static mouseovercb(e){
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
    }

    static mouseleavecb(e){
        var id = e.srcElement.id;
        var cp = Register.findComponent(id);
        setTimeout(()=>{
            cp.comp.component.form.children.map(({child}) => {
                if (child.type != "text")
                    child.c_svg.setAttribute("class", "hidden");
                //child.removeFromDOM();
            });
        }, 3000);
    }

    static mousedowncbChild(e){
        console.log(e.srcElement);
        var cp2 = Register.findComponent(e.srcElement.getAttribute("id"));
        console.log("abel-----------------------------------");
        //console.log(cp2);
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
            let test = cp2.comp.component.form.removeFromDOM();
            console.log(test);
        }    
    }

    static doubleclickcb(e){
        var id = e.srcElement.id;
        var cp = Register.findComponent(id);
        console.log("doubleclickcb");
        console.log(cp);
        console.log(document.getElementById(id));
        
        text.style.visibility = "visible";
        text.style.left = cp.comp.component.form.x + "px";
        text.style.top = (cp.comp.component.form.y + 55) + "px";
        /*var text = document.createElement("div");
        var text_input = document.createElement("input");
        console.log(cp.comp.component.form.x + "px");
        text.setAttribute("id", "field_text");
        text.style.position = "absolute";
        text.style.width = "50px";
        text.style.height = "10px";
        text.style.left = cp.comp.component.form.x + "px";
        text.style.top = (cp.comp.component.form.y + 55) + "px";
        text.style.overflow = "visible";
        text.style.border = "1px solid rgb(204, 204, 204)";
        text_input.style.backgroundColor = "rgba(255, 255, 255)";
        text.style.boxSizing = "border-box";
        text.style.overflowWrap = "normal";
        text.style.textAlign = "center";
        text.style.outline = "currentcolor none medium";

        text_input.style.width = "100%";
        text_input.autofocus = true;
        text_input.setAttribute("id", "field_text_input");*/

        // text_input.style.width = "100%";
        // text_input.style.height = "22px";
        // text_input.style.paddingTop = "7px";
        // text_input.style.paddingBottom = "4px";
        // text_input.style.fontWeight = "normal";
        // text_input.style.fontSize = "11px";
        // text_input.style.fontFamily = "Arial, sans-serif";
        // text_input.style.boxSizing = "border-box";
        // text_input.style.overflowWrap = "break-word";
        // text_input.style.outline = "currentcolor none medium";

        /*text.appendChild(text_input);
        document.body.appendChild(text);*/
        
        cp.comp.component.form.children.map(({child})=>{
            if (child.type == "text"){
                console.log("field_text");
                text_input.value = child.text;
                console.log(text_input.value);
                text_input.onkeydown = (event)=>{
                    console.log("abel");
                    if (event.key == "Enter"){
                        console.log(event.key);
                        child.text = text_input.value;
                        child.draw();
                        text.style.visibility = "hidden";
                    }
                };
            }
        });
        //document.body.removeChild(text);
        //var inp = document.createElement("input");
    }

    static onclickcb(e){
        var id = e.srcElement.id;
        var cp = Register.findComponent(id);


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