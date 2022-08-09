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
}
