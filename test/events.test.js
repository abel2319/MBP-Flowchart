QUnit.module('events');


QUnit.test("default event created", (assert)=>{
    var cp = new bpmnEvent();
    var stroke_width = cp.component.form.c_svg.getAttribute("stroke-width");
    var stroke_color = cp.component.form.c_svg.getAttribute("stroke");

    assert.equal(cp.type, "start_event", "default event must be start_event");
    assert.ok(cp.component, "component must existed");
    assert.equal(cp.component.type, "circle", "component's type must be circle");
    assert.equal(cp.component.form.r, 10, "component's radius must be 10");
    assert.equal(stroke_width, "2px", "component's stroke width must be 2");
    assert.equal(stroke_color, "black", "component's stroke color must be black");

});

QUnit.test("add an event mousedown on a bpmn component", (assert) => {
    var cp = new bpmnEvent();

    function mousedowncb(e){
        console.log(e);
    }
    cp.addEvent("mousedown", mousedowncb);
    assert.equal(Object.keys(cp.events).length, 1, "utilisator must have one event"); 
    assert.ok(cp.events["mousedown"], "utilisator event must be mousedown");
});

QUnit.test("create panel of tools when mousedown event is applied", (assert) => {
    var cp = new bpmnEvent();
    var i = 0;
    var center_x = cp.component.form.x;
    var center_y = cp.component.form.y;
    var circle_r = cp.component.form.r;

    cp.addEvent("mousedown", cp.showPanelTools);
    
    /*assert.equal(cp.component.form.children[0].type, "circle", "the first child must be a circle");
    assert.equal(cp.component.form.children[1].type, "lozenge", "the second child must be a lozenge");*/
    
    cp.showPanelTools();
    assert.equal(cp.component.form.children.length, 2, "cp must have 2 children");

    while (i < cp.component.form.children.length)
    {
        assert.equal(cp.component.form.children[i].child.width, 20, "width of the first child",i,"must be 20");
        assert.equal(cp.component.form.children[i].child.height, 20, "height of child",i," must be 20");
        assert.equal(cp.component.form.children[i].child.x, center_x + circle_r + 5 + i * 20, "abscisse of child",i," must be", circle_r + 5);
        assert.equal(cp.component.form.children[i].child.y, center_y - circle_r, "ordinate of child",i," must be", center_y);
        i++;
    }
    /*
    assert.equal(cp.component.form.children[1].child.width, 20, "width of the first child",i,"must be 20");
    assert.equal(cp.component.form.children[1].child.height, 20, "height of child",i," must be 20");
    assert.equal(cp.component.form.children[1].child.x, cp.component.form.children[0].child.x + 25, "abscisse of child",i," must be", circle_r + 5);
    assert.equal(cp.component.form.children[1].child.y, center_y, "ordinate of child",i," must be", center_y);*/
});
