QUnit.module('events');


QUnit.test("default event created", (assert)=>{
    var cp = new bpmnEvent();
    var stroke_width = cp.component.form.c_svg.getAttribute("stroke-width");
    var stroke_color = cp.component.form.c_svg.getAttribute("stroke");

    assert.equal(cp.type, "start_event", "default event must be start_event");
    assert.ok(cp.component, "component must existed");
    assert.equal(cp.component.type, "circle", "component's type must be circle");
    assert.equal(cp.component.form.r, 15, "component's radius must be 10");
    assert.equal(stroke_width, "2px", "component's stroke width must be 2");
    assert.equal(stroke_color, "black", "component's stroke color must be black");
    assert.equal(cp.component.form.children.length, 3, "start event must have two children");
});

QUnit.test("add an event mousedown on a bpmn component", (assert) => {
    var cp = new bpmnEvent();

    function mousedowncb(e){
        console.log(e);
    }
    cp.addEvent("mousedown", mousedowncb);
    assert.equal(Object.keys(cp.events).length, 3, "utilisator must have three event"); 
    assert.ok(cp.events["mousedown"], "utilisator event must be mousedown");
});

QUnit.test("create panel of tools when mouseover event is applied on start event", (assert) => {
    var cp = new bpmnEvent();
    var center_x = cp.component.form.x;
    var center_y = cp.component.form.y;
    var circle_r = cp.component.form.r;

    cp.addEvent("mouseover", Events.setup().mouseovercb);
    
    assert.equal(Object.keys(cp.events).length, 2, "utilisator must have three events"); 
    assert.ok(cp.events["mouseover"], "utilisator event must be mouseover");
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

/*QUnit.test("add an event mousedown on a child of  a bpmn component", (assert) => {
    var cp = new bpmnEvent();

    function mousedowncb(e){
        console.log(e);
    }
    cp.addEventChild("click", mousedowncb);
    assert.equal(Object.keys(cp.events).length, 2, "utilisator must have one event"); 
    assert.ok(cp.events["click"], "second utilisator's event must be click");
});*/

QUnit.test("Create an intermediate event", (assert) => {
    var cp = new bpmnEvent("intermediate_event");
    var stroke_width = cp.component.form.c_svg.getAttribute("stroke-width");
    var stroke_color = cp.component.form.c_svg.getAttribute("stroke");

    assert.equal(cp.type, "intermediate_event", "type must be 'intermediate_event'");
    assert.equal(cp.component.type, "circle", "component's type must be circle");
    assert.equal(cp.component.form.r, 15, "component's radius must be 10");
    assert.equal(stroke_width, "2px", "component's stroke width must be 2");
    assert.equal(stroke_color, "black", "component's stroke color must be black");
    assert.equal(cp.component.form.children.length, 6, "intermediate event must have three children");
});

QUnit.test("create panel of tools when mouseover event is applied on intermediate event", (assert) => {
    var cp = new bpmnEvent("intermediate_event");
    var center_x = cp.component.form.x;
    var center_y = cp.component.form.y;
    var circle_r = cp.component.form.r;

    cp.addEvent("mousedown", Events.setup().mouseovercb);
    
    assert.equal(Object.keys(cp.events).length, 2, "utilisator must have three events"); 
    assert.ok(cp.events["mouseover"], "utilisator event must be mousedown");
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

    assert.equal(cp.type, "end_event", "type must be 'end_event'");
    assert.equal(cp.component.type, "circle", "component's type must be circle");
    assert.equal(cp.component.form.r, 15, "component's radius must be 10");
    assert.equal(stroke_width, "5px", "component's stroke width must be 5");
    assert.equal(stroke_color, "black", "component's stroke color must be black");
    assert.equal(cp.component.form.children.length, 2, "end event don't have children");
});

QUnit.test("Events on children", (assert) => {
    var se = new bpmnEvent("start_event");
    var ie = new bpmnEvent("intermediate_event");
    var ee = new bpmnEvent("end_event");

    se.component.form.children.map(({child}) => {
        console.log("abel");
        console.log(child.c_svg);
        if (child.type != "text"){
            assert.equal(child.c_svg.getAttribute("class"), "hidden", "each child must have event mousedown");
            assert.equal(child.c_svg.getAttribute("id"), se.component.form.uuid, "each child must have the same id as its parent");
        }
    });
});