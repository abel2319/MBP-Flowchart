QUnit.module('register');

QUnit.test('store a bpmn component', (assert) => {
    var cp = new bpmnComponent();
    Register.addComponent(cp);
    assert.equal(store[cp.id], cp,"Register must store a bpmn component");
});

QUnit.test('find a bpmn component', (assert) => {
    var cp = new bpmnComponent();
    var cp2 = Register.findComponent(cp.id);
    assert.equal(cp, cp2,"Register must allow to find a bpmn component");
});
