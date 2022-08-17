QUnit.module('Component');

QUnit.test('create a component without parameter', (assert) =>{
   var cp = new bpmnComponent();
   assert.equal(cp.type, "start_event", "type must be start_event");
   assert.equal(cp.comp.component.form.type, "circle", "default comp in aya must be a circle");
   assert.equal(cp.comp.component.form.x, 200, "x must be 200"); 
   assert.equal(cp.comp.component.form.y, 100, "y must be 100");
   assert.equal(cp.comp.component.form.r, 15, "r must be 15");
}); 

QUnit.test('create a task', (assert) =>{
   var cp = new bpmnComponent("task");
   var ac_rx = cp.comp.component.form.c_svg.getAttribute("rx");
   var ac_ry = cp.comp.component.form.c_svg.getAttribute("ry");

   assert.ok(cp.id,"id must be defined as string by ayajs");
   assert.equal(cp.type, "task", "type must be task");
   assert.equal(cp.comp.component.form.type, "rectangle", "default comp in aya must be a rectangle");
   assert.equal(cp.comp.component.form.height, 50, "height must be 50"); 
   assert.equal(cp.comp.component.form.width, 50, "width must be 50");
   assert.equal(ac_rx, "10px", "border raduis of the component must equals to 10px");
   assert.equal(ac_ry, "10px", "border raduis of the component must equals to 10px");
});

QUnit.test('create a gateway component', (assert) =>{
   var cp = new bpmnComponent("gateway_exclusive");
   assert.ok(cp.id,"id must be defined as string by ayajs");
   assert.equal(cp.type, "gateway_exclusive", "type must be gateway_exclusive");
   assert.equal(cp.comp.component.form.type, "lozenge", "default comp in aya must be a lonzge");
   assert.equal(cp.comp.component.form.height, 40, "height must be 450"); 
   assert.equal(cp.comp.component.form.width, 40, "width must be 150");
});

QUnit.test("Events on bpmn components and its children", (assert) => {
   var cp = new bpmnComponent();

   assert.equal(cp.comp.component.form.c_svg.onmouseover.name, "mouseovercb", "bpmn events must have event onmouseover equal to mouseovercb");
   cp.comp.component.form.children.map(({child})=>{
      console.log(child.c_svg);
      if (child.type != "text")
      {
         assert.equal(child.c_svg.onclick.name, "mousedowncbChild", "Each child of a bpmn element must have event onmousedown equal to mousedowncbChil");
      }
   });
   // assert.equal(cp2.comp.component.form.c_svg.onmouseover.name, "mouseovercb", "bpmn tasks must have event onmouseover equal to mouseovercb");
   // assert.equal(cp3.comp.component.form.c_svg.onmouseover.name, "mouseovercb", "bpmn gateways must have event onmouseover equal to mouseovercb");

});

QUnit.test("Events on children", (assert) => {
   var se = new bpmnComponent("task");

   se.comp.component.form.children.map(({child}) => {
      if (child.type != "text"){
         assert.equal(child.c_svg.getAttribute("class"), "hidden", "each child must have event mousedown");
         assert.equal(child.c_svg.getAttribute("id"), se.id, "each child must have the same id as its parent");
         assert.equal(child.c_svg.onclick.name, "mousedowncbChild", "each child of a bpmn component must have event onmousedown equal to mouseovercb");
      }
   });
});

