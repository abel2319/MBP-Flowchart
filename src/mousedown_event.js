class Events
{
    static _click(cp){
    var dom_cp = document.getElementById(cp.uuid);
    var div = document.getElementById('component');
    //var pan = document.getElementsByClassName('tools_panel');
    var circ = document.createElement('div');
    circ.setAttribute('class', 'circ');
    var rec = document.createElement('div');
    rec.setAttribute('class', 'rect');
    var loz = document.createElement('div');
    loz.setAttribute('class', 'loz');
    if (div.getAttribute('class') == "")
    {
        div.AppendChild(dom_cp);
        div.setAttribute("class", "component_panel");
        div.AppendChild(circ);
        div.AppendChild(rec);
        div.AppendChild(loz);
        //pan.style.visibility = "visible";
        //cp.component.form.nativeEvent = Events.setup(cp.component.form.svg, cp.component.form.uuid,cp.component.form.config);
    }
    else
    {
        div.setAttribute("class", "");
    }
}
}