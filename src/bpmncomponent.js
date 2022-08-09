class bpmnComponent{
    constructor(type = "start_event"){
        this.type = type;
        this.comp = Creator.createForm(this.type);
        this.id = this.comp.component.form.uuid;
        Register.addComponent(this);
    }
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
        console.log(cp2);
        if (e.srcElement.getAttribute("href") === "./Images/circle.png"){
            var next = new bpmnComponent();
        }
        else if (e.srcElement.getAttribute("href") === "./Images/rectangle.png"){

        }
        else if (e.srcElement.getAttribute("href") === "./Images/lozenge.png"){
            
        }
    }
    static doubleclickcb(e){
        var id = e.srcElement.id;
        var cp = aya.Register().find(id);
        console.log("doubleclickcb");
        console.log(cp.form.children);
        //var inp = document.createElement("input");
    }
}
