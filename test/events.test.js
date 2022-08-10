QUnit.module('events');


QUnit.test("default event created", (assert)=>{
    var cp = new bpmnEvent();
    var stroke_width = cp.component.form.c_svg.getAttribute("stroke-width");
    var stroke_color = cp.component.form.c_svg.getAttribute("stroke");

    assert.ok(cp.component, "component must existed");
    assert.equal(stroke_width, "2px", "component's stroke width must be 2");
    assert.equal(stroke_color, "black", "component's stroke color must be black");
    assert.equal(cp.component.form.children.length, 3, "start event must have two children");
});

QUnit.test("Position of the panel of tools when mouseover event is applied on start event", (assert) => {
    var cp = new bpmnEvent();
    var center_x = cp.component.form.x;
    var center_y = cp.component.form.y;
    var circle_r = cp.component.form.r;

    assert.equal(cp.component.form.children.length, 3, "cp must have 2 children");

    cp.component.form.children.map(({child}, index)=>{
        if (child.type != "text") {
            assert.equal(child.width, 20, "width of the first child",index,"must be 20");
            assert.equal(child.height, 20, "height of child",index," must be 20");
            assert.equal(child.x, center_x + circle_r + index * 25 + 10, "abscisse of child",index," must be", circle_r + 5);
            assert.equal(child.y, center_y - circle_r, "ordinate of child",index," must be", center_y);
        }
    }); 
});


QUnit.test("Create an intermediate event", (assert) => {
    var cp = new bpmnEvent("intermediate_event");
    var stroke_width = cp.component.form.c_svg.getAttribute("stroke-width");
    var stroke_color = cp.component.form.c_svg.getAttribute("stroke");

    assert.equal(stroke_width, "2px", "component's stroke width must be 2");
    assert.equal(stroke_color, "black", "component's stroke color must be black");
    assert.equal(cp.component.form.children.length, 6, "intermediate event must have three children");
});

QUnit.test("Position of the panel of tools when mouseover event is applied on intermediate event", (assert) => {
    var cp = new bpmnEvent("intermediate_event");
    var center_x = cp.component.form.x;
    var center_y = cp.component.form.y;
    var circle_r = cp.component.form.r;

    assert.equal(cp.component.form.children.length, 6, "cp must have 2 children");

    cp.component.form.children.map(({child}, index)=>{
        if (child.type != "text") {
            assert.equal(child.width, 20, "width of the first child",index,"must be 20");
            assert.equal(child.height, 20, "height of child",index," must be 20");
            assert.equal(child.x, center_x + circle_r + (index % 2) * 25 + 10, "abscisse of child",index," must be", circle_r + 5);
            assert.equal(child.y, center_y - circle_r + (index > 1 ? (index > 3 ? 50 : 25) : 0), "ordinate of child",index," must be", center_y);
        }
    }); 
});



QUnit.test("Create an end event", (assert) => {
    var cp = new bpmnEvent("end_event");
    var stroke_width = cp.component.form.c_svg.getAttribute("stroke-width");
    var stroke_color = cp.component.form.c_svg.getAttribute("stroke");

    assert.equal(stroke_width, "5px", "component's stroke width must be 5");
    assert.equal(stroke_color, "black", "component's stroke color must be black");
    assert.equal(cp.component.form.children.length, 2, "end event don't have children");
});
