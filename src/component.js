class Component {
    constructor(type = "rectangle", props = {x:200, y:200, height:80, width:100}){
        this.id = "id";
        this.type = type;
        this.props = props;
        this.form = Creator.createForm(this.type, this.props);
    }
}
