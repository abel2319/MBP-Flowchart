class CircleCreator{
    static createForm(props){
        return aya.Component("circle",props);
        //return aya.Circle(props.x, props.y, props.r);
    }
}