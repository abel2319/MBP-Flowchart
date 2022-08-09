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
   console.log(cp);
   assert.ok(cp.id,"id must be defined as string by ayajs");
   assert.equal(cp.type, "task", "type must be task");
   assert.equal(cp.comp.component.form.type, "rectangle", "default comp in aya must be a rectangle");
   // assert.equal(cp.comp.component.form.x, 200, "x must be 200"); 
   // assert.equal(cp.comp.component.form.y, 100, "y must be 100");
   assert.equal(cp.comp.component.form.height, 50, "height must be 50"); 
   assert.equal(cp.comp.component.form.width, 50, "width must be 50");  
});


QUnit.test('create a gateway component', (assert) =>{
   var cp = new bpmnComponent("gateway_exclusive");
   assert.ok(cp.id,"id must be defined as string by ayajs");
   assert.equal(cp.type, "gateway_exclusive", "type must be gateway_exclusive");
   assert.equal(cp.comp.component.form.type, "lozenge", "default comp in aya must be a lonzge");
   // assert.equal(cp.comp.component.form.x, 200, "x must be 200"); 
   // assert.equal(cp.comp.component.form.y, 100, "y must be 200");
   assert.equal(cp.comp.component.form.height, 40, "height must be 450"); 
   assert.equal(cp.comp.component.form.width, 40, "width must be 150");
});

QUnit.test("Events on bpmn components", (assert) => {
   var cp1 = new bpmnComponent();

   assert.equal(cp1.comp.component.form.c_svg.onmouseover.name, "mouseovercb", "bpmn events must have event onmouseover equal to mouseovercb");
   // assert.equal(cp2.comp.component.form.c_svg.onmouseover.name, "mouseovercb", "bpmn tasks must have event onmouseover equal to mouseovercb");
   // assert.equal(cp3.comp.component.form.c_svg.onmouseover.name, "mouseovercb", "bpmn gateways must have event onmouseover equal to mouseovercb");

});

