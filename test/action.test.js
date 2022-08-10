QUnit.module('task');


QUnit.test("create panel of tools when mousedown event is applied", (assert) => {
    var ac = new Task();
    var center_x = ac.component.form.x;
    var center_y = ac.component.form.y;
    var ac_width = ac.component.form.width;
 
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