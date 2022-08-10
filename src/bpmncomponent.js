class bpmnComponent{
    constructor(type = "start_event"){
        this.type = type;
        this.comp = Creator.createForm(this.type);
        this.id = this.comp.component.form.uuid;
        Register.addComponent(this);
        nbr_elt++;
    }
}
