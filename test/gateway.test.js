QUnit.module('gateway');

QUnit.test("default gateway", (assert) => {
    var gw = new Gateway();

    assert.equal(gw.type, "exclusive", "exclusive gateway must be the defualt gateway type");
    assert.ok(gw.component, "component must existed");
    assert.equal(gw.component.type, "lozenge", "lozenge must be the default type in the component");
    assert.equal(gw.component.form.width, 40, "component must have a width equals to 18px");
    assert.equal(gw.component.form.height, 40, "component must have a height equals to 18px");

});

QUnit.test("add an event onClick on a bpmn component", (assert) => {
    var gw = new bpmnEvent();

    function mousedowncb(e){
        console.log(e);
    }
    gw.addEvent("mousedown", mousedowncb);
    assert.equal(Object.keys(gw.events).length, 1, "utilisator must have one event"); 
    assert.ok(gw.events["mousedown"], "utilisator event must be mousedown");
});
