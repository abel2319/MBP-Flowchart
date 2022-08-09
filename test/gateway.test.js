QUnit.module('gateway');

QUnit.test("default gateway", (assert) => {
    var gw = new bpmnComponent("gateway_exclusive");

    assert.equal(gw.type, "gateway_exclusive", "exclusive gateway must be the defualt gateway type");
    assert.ok(gw.comp, "component must existed");
    assert.equal(gw.comp.component.type, "lozenge", "lozenge must be the default type in the component");
    assert.equal(gw.comp.component.form.width, 40, "component must have a width equals to 18px");
    assert.equal(gw.comp.component.form.height, 40, "component must have a height equals to 18px");

});

QUnit.test("create panel of tools when mousedown event is applied", (assert) => {
    var gw = new bpmnComponent("gateway_exclusive");
    var center_x = gw.comp.component.form.x;
    var center_y = gw.comp.component.form.y;
    var gw_width = gw.comp.component.form.width;

    assert.equal(gw.comp.component.form.children.length, 6, "gw.comp must have 2 children");

    gw.comp.component.form.children.map(({child}, index)=>{
        if (child.type != "text"){
            assert.equal(child.width, 20, "width of the first child",index,"must be 20");
            assert.equal(child.height, 20, "height of child",index," must be 20");
            assert.equal(child.x, center_x + gw_width / 2 + (index % 2) * 25 + 10, "abscisse of child",index," must be", gw.comp_width + 5);
            assert.equal(child.y, center_y + (index > 1 ? (index > 3 ? 50 : 25) : 0), "ordinate of child",index," must be", center_y);
        }
    });  
});