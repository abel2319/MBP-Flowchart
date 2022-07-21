import {aya} from "../src/app.js";

class _RectangleCreator{
    static createForm(props){

    }
}

class _Creator{
    static createForm(type, props = {x:200, y:200, height:450, width:100}){

    }
}

QUnit.module('Creator');

QUnit.test('call class creator without parameters', (assert) =>{
    var create = _Creator.createForm();
    var props = {x:200, y:200, height:450, width:100};
    assert.propEqual(create, props, "default parameters must be {x:200, y:200, height:450, width:100};");
}); 