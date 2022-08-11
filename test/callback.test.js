QUnit.module('callbacks');

class _e{
    constructor(a_svg){
        this.srcElement = a_svg;
    }
}

QUnit.test("mouseovercb", (assert)=>{
    var ie = new bpmnComponent("intermediate_event")
    var e1 = new _e(ie.comp.component.form.c_svg);

    Events.mouseovercb(e1);
    ie.comp.component.form.children.map(({child}) => {
        if (child.type != "text")
            assert.equal(child.c_svg.getAttribute("class"), "show", "each child must have its attribute class set to show");
    });
});

QUnit.test("mouseleavecb", (assert)=>{
    var ie = new bpmnComponent("intermediate_event")
    var e1 = new _e(ie.comp.component.form.c_svg);

    Events.mouseleavecb(e1);
    ie.comp.component.form.children.map(({child}) => {
        if (child.type != "text")
            assert.equal(child.c_svg.getAttribute("class"), "hidden", "each child must have its attribute class set to hidden after a mouseleave");
    });
});


QUnit.test("mousedowncbChild", (assert) => {
    var ie = new bpmnComponent("intermediate_event")
    var e1;
    var cp;
    var cp1;
    var tmp = nbr_elt;

    ie.comp.component.form.children.map(({child}) => {
        if (child.type !== "text") {
            e1 = new _e(child.c_svg);
            cp = Register.findComponent(e1.srcElement.getAttribute("id"));
            assert.equal(cp.type, "intermediate_event", "the parent's type of each child must be same as ie");
            
            Events.mousedowncbChild(e1);
            if (e1.srcElement.getAttribute("href") !== "./Images/trash.png"){
                assert.equal(nbr_elt, tmp +1, "bpmnComponent must be used one more time");
                console.log(nbr_elt);
                tmp = nbr_elt;
                assert.ok(Register.findComponent(id_test), "a new elt is well created after mousedown on the child")
            }

            cp1 = Register.findComponent(id_test);
            if (e1.srcElement.getAttribute("href") === "./Images/circle.png" || (e1.srcElement.getAttribute("href") === "./Images/endEvent.png")){
                if (cp.comp.component.form.type != "circle"){
                    assert.equal(Number(cp1.comp.component.form.x), Number(cp.comp.component.form.x) + 200, "the new elt must be at least 100px in absciss from precedent elt");
                    assert.equal(Number(cp1.comp.component.form.y), Number(cp.comp.component.form.y) + cp.comp.component.form.width / 2, "the new and precedent elt must have the same ordinate");
                }
                else{
                    assert.equal(Number(cp1.comp.component.form.x), Number(cp.comp.component.form.x) + 200, "the abel new elt must be at least 100px in absciss from precedent elt");
                    assert.equal(Number(cp1.comp.component.form.y), Number(cp.comp.component.form.y), "the new and precedent elt must have the same ordinate");
                }
            }
            else if (e1.srcElement.getAttribute("href") === "./Images/rectangle.png" || e1.srcElement.getAttribute("href") === "./Images/rectangle.png"){
                if (cp.comp.component.form.type != "circle"){
                    assert.equal(Number(cp1.comp.component.form.x), Number(cp.comp.component.form.x) + 200, "the new elt must be at least 100px in absciss from precedent elt");
                    assert.equal(Number(cp1.comp.component.form.y), Number(cp.comp.component.form.y) + cp.comp.component.form.width / 2, "the new and precedent elt must have the same ordinate");
                }
                else{
                    assert.equal(Number(cp1.comp.component.form.x), Number(cp.comp.component.form.x) + 200, "the new elt must be at least 100px in absciss from precedent elt");
                    assert.equal(Number(cp1.comp.component.form.y), Number(cp.comp.component.form.y) - cp1.comp.component.form.width / 2, "the new and precedent elt must have the same ordinate");
                }
            }
            /********A revoir*************/
            // else if (e1.srcElement.getAttribute("href") === "./Images/trash.png"){
            //     nbr_elt--;
            //     cp.comp.component.form.removeFromDOM();
            // }
            /*****************************/
        }
    });
});
