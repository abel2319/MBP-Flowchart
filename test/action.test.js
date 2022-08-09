QUnit.module('task');

QUnit.test("default action", (assert) => {
    var ac = new Task();
    var ac_rx = ac.component.form.c_svg.getAttribute("rx");
    var ac_ry = ac.component.form.c_svg.getAttribute("ry");

    assert.equal(ac.type, "task", "exclusive gateway must be the defualt gateway type");
    assert.ok(ac.component, "component must existed");
    assert.equal(ac.component.type, "rectangle", "rectangle must be the default type in the component");
    assert.equal(ac.component.form.width, 50, "component must have a width equals to 18px");
    assert.equal(ac.component.form.height, 50, "component must have a height equals to 18px");
    assert.equal(ac_rx, "10px", "border raduis of the component must equals to 10px");
    assert.equal(ac_ry, "10px", "border raduis of the component must equals to 10px");

});

QUnit.test("add an event onClick on a bpmn component", (assert) => {
    var ac = new Task();

    function mousedowncb(e){
        console.log(e);
    }
    ac.addEvent("mousedown", mousedowncb);
    assert.equal(Object.keys(ac.events).length, 4, "utilisator must have four event"); 
    assert.ok(ac.events["mousedown"], "utilisator event must be mousedown");
});

QUnit.test("create panel of tools when mousedown event is applied", (assert) => {
    var ac = new Task();
    var center_x = ac.component.form.x;
    var center_y = ac.component.form.y;
    var ac_width = ac.component.form.width;

    ac.addEvent("mouseover", Events.setup().mouseovercb);
    assert.equal(Object.keys(ac.events).length, 3, "utilisator must have three event"); 
    assert.ok(ac.events["mouseover"], "utilisator event must be mouseover");
    assert.equal(ac.component.form.children.length, 6, "ac must have 2 children");

    ac.component.form.children.map(({child}, index)=>{
        if (child.type != "text"){
            assert.equal(child.width, 20, "width of the first child",index,"must be 20");
            assert.equal(child.height, 20, "height of child",index," must be 20");
            assert.equal(child.x, center_x + ac_width / 2 + (index % 2) * 25 + 30, "abscisse of child",index," must be", ac_width + 5);
            assert.equal(child.y, center_y + (index > 1 ? (index > 3 ? 55 : 30) : 0), "ordinate of child",index," must be", center_y);
        }
    });
    
});