QUnit.module('action');

QUnit.test("default action", (assert) => {
    var ac = new Action();
    var ac_rx = ac.component.form.c_svg.getAttribute("rx");
    var ac_ry = ac.component.form.c_svg.getAttribute("ry");

    assert.equal(ac.type, "action", "exclusive gateway must be the defualt gateway type");
    assert.ok(ac.component, "component must existed");
    assert.equal(ac.component.type, "rectangle", "rectangle must be the default type in the component");
    assert.equal(ac.component.form.width, 50, "component must have a width equals to 18px");
    assert.equal(ac.component.form.height, 50, "component must have a height equals to 18px");
    assert.equal(ac_rx, "10px", "border raduis of the component must equals to 10px");
    assert.equal(ac_ry, "10px", "border raduis of the component must equals to 10px");

});

QUnit.test("add an event onClick on a bpmn component", (assert) => {
    var ac = new bpmnEvent();

    function mousedowncb(e){
        console.log(e);
    }
    ac.addEvent("mousedown", mousedowncb);
    assert.equal(Object.keys(ac.events).length, 1, "utilisator must have one event"); 
    assert.ok(ac.events["mousedown"], "utilisator event must be mousedown");
});
