var store = {};

class Register
{
    static addComponent(object) {
        store[object.id] = object;
	}
    static findComponent(id) {
        return store[id];
    }
}