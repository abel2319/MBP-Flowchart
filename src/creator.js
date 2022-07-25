class Creator{
    static createForm(type, props){
       if (type == "rectangle")
          return RectangleCreator.createForm(props);
       else if (type == "circle")
          return CircleCreator.createForm(props);
       else if (type == "lozenge")
          return LozengeCreator.createForm(props);
       if (type == "line")
          return LineCreator.createForm(props);
    }
}
 