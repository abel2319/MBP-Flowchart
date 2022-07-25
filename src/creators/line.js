class LineCreator{
    static createForm(props){
        return aya.Component("line",props);
       //return aya.Line(props.x, props.y, props.dest_x, props.dest_y);
    }
}