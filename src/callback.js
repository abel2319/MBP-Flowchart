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
        }, 5000);
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
                next.comp.component.form.y = Number(cp2.comp.component.form.y);
            }
            next.comp.component.form.redraw();
        }
        else if (e.srcElement.getAttribute("href") === "./Images/lozenge.png"){;
            var next = new bpmnComponent("gateway_exclusive");
            id_test = next.id;
            if (cp2.comp.component.form.type != "circle"){
                next.comp.component.form.x = Number(cp2.comp.component.form.x) + 200;
                next.comp.component.form.y = Number(cp2.comp.component.form.y);
            }
            else{
                next.comp.component.form.x = Number(cp2.comp.component.form.c_svg.getAttribute("x")) + 200;
                next.comp.component.form.y = Number(cp2.comp.component.form.c_svg.getAttribute("y"));
            }
            next.comp.component.form.redraw();
        }

        /***********A revoir************/
        // else if (e.srcElement.getAttribute("href") === "./Images/trash.png"){
        //     nbr_elt--;
        //     let test = cp2.comp.component.form.removeFromDOM();
        //     console.log(test);
        // }
        /*******************************/    
    }

    static doubleclickcb(e){
        var id = e.srcElement.id;
        var cp = aya.Register().find(id);
        console.log("doubleclickcb");
        console.log(cp.form.children);
        //var inp = document.createElement("input");
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