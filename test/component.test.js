QUnit.module('Component');

QUnit.test('create a component without parameter', (assert) =>{
   var cp = new Component();
   assert.ok(cp.id,"id must be defined as string by ayajs");
   assert.equal(cp.type, "rectangle", "type must be rectangle");
   assert.equal(cp.form.type, "rectangle", "default form must be a rectangle");
   assert.propEqual(cp.props, {x:200, y:200, height:200, width:200}, "default props must be");
}); 

QUnit.test('create a rectangle component', (assert) =>{
   var props = {x:200, y:200, height:450, width:100};
   var cp = new Component("rectangle", props);
   assert.ok(cp.id,"id must be defined as string by ayajs");
   assert.equal(cp.type, "rectangle", "type must be rectangle");
   assert.equal(cp.form.type, "rectangle", "default form must be a rectangle");
   assert.equal(cp.form.x, cp.props.x, "must be 200"); 
   assert.equal(cp.form.y, cp.props.y, "must be 200");
   assert.equal(cp.form.height, cp.props.height, "must be 450"); 
   assert.equal(cp.form.width, cp.props.width, "must be 150");  
   assert.propEqual(cp.props, props, "props checking");
});

QUnit.test('create a circle component', (assert) =>{
   var props = {x:200, y:200, r:20};
   var cp = new Component("circle", props);
   assert.ok(cp.id,"id must be defined as string by ayajs");
   assert.equal(cp.type, "circle", "type must be circle");
   assert.equal(cp.form.type, "circle", "default form must be a circle");
   assert.propEqual(cp.props, props, "props checking");
});

QUnit.test('create a lozenge component', (assert) =>{
   var props = {x:200, y:200, height:450, width:100};
   var cp = new Component("lozenge", props);
   assert.ok(cp.id,"id must be defined as string by ayajs");
   assert.equal(cp.type, "lozenge", "type must be lozenge");
   assert.equal(cp.form.type, cp.type, "default form must be a lozenge");
   assert.equal(cp.form.x, cp.props.x, "must be 200"); 
   assert.equal(cp.form.y, cp.props.y, "must be 200");
   assert.equal(cp.form.height, cp.props.height, "must be 450"); 
   assert.equal(cp.form.width, cp.props.width, "must be 150");
   assert.propEqual(cp.props, props, "props checking");
});

QUnit.test('create a line component', (assert) =>{
   var props = {x:200, y:200, dest_x:450, dest_y:100};
   var cp = new Component("line", props);
   assert.ok(cp.id,"id must be defined as string by ayajs");
   assert.equal(cp.type, "line", "type must be line");
   assert.equal(cp.form.type, cp.type, "default form must be a line");
   assert.equal(cp.form.x, cp.props.x, "must be 200"); 
   assert.equal(cp.form.y, cp.props.y, "must be 200");
   assert.equal(cp.form.dest_x, cp.props.dest_x, "must be 450"); 
   assert.equal(cp.form.dest_y, cp.props.dest_y, "must be 150");
   assert.propEqual(cp.props, props, "props checking");
});
