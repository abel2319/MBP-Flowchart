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
    var gw = new Gateway();

    function mousedowncb(e){
        console.log(e);
    }
    gw.addEvent("mousedown", mousedowncb);
    assert.equal(Object.keys(gw.events).length, 1, "utilisator must have one event"); 
    assert.ok(gw.events["mousedown"], "utilisator event must be mousedown");
});

QUnit.test("create panel of tools when mousedown event is applied", (assert) => {
    var gw = new Gateway();
    var center_x = gw.component.form.x;
    var center_y = gw.component.form.y;
    var gw_width = gw.component.form.width;

    gw.addEvent("mousedown", Events.setup().mousedowncb);
    assert.equal(Object.keys(gw.events).length, 1, "utilisator must have one event"); 
    assert.ok(gw.events["mousedown"], "utilisator event must be mousedown");
    assert.equal(gw.component.form.children.length, 2, "gw must have 2 children");

    gw.component.form.children.map(({child}, index)=>{
        console.log(child);
        assert.equal(child.width, 20, "width of the first child",index,"must be 20");
        assert.equal(child.height, 20, "height of child",index," must be 20");
        assert.equal(child.x, center_x + gw_width / 2 + index * 25 + 10, "abscisse of child",index," must be", gw_width + 5);
        assert.equal(child.y, center_y, "ordinate of child",index," must be", center_y);
    });
    
});