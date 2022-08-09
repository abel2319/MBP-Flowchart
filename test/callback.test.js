QUnit.module('callbacks');
class _e{
    constructor(a_svg){
        this.srcElement = a_svg;
    }
}
QUnit.test("mouseovercb", (assert)=>{
    var ie = new bpmnComponent("intermediate_event")
    var e1 = new _e(ie.component.form.c_svg);

    /*function mouseovercb(e1){
        var cp = aya.Register().find(e1.id);
        cp.form.children.map(({child}) => {
            if (child.type != "text") {
                child.c_svg.setAttribute("class", "show");
            }
        });
    }*/

    Events.setup().mouseovercb(e1);
    ie.component.form.children.map(({child}) => {
        if (child.type != "text")
            assert.equal(child.c_svg.getAttribute("class"), "show", "each child must have its attribute class set to show");
    });
});

QUnit.test("mousedown", (assert) => {
    var ie = new bpmnComponent("intermediate_event")
    ie.component.form.children.map(({child}) => {
        if (child.text !== "text") {
            var e1 = new _e(child.c_svg);
            var cp = aya.Register().find(e1.srcElement.getAttribute("id"));
            assert.equal(cp.type, "ie.component.form.type", "the parent's type of each child must be same as ie");
            Events.setup().mousedowncbChild(e1);
            assert.equal(child.svg.lastChild.tagName, "circle", "the last child of aya svg must be a circle after the mousedown");
        }
    });
});