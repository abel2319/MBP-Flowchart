class Gateway{
    constructor(type = "exclusive"){
        this.type = type;
        this.component = aya.Component("lozenge", {x:100, y:100, height:40, width:40});
        this.events = {};
    }
    addEvent(event, callback){
        this.component.form.c_svg.addEventListener(event, callback);
        this.events[event] = callback;
    }
}
