import {module, test} from "qunit";
import { setupTest } from 'ember-qunit';

module('Unit | Service | todo-store', function (hooks){
    setupTest(hooks);

    test('it starts with no todos',function(assert){
        const service = this.owner.lookup('service:todo-service');
        assert.strictEqual(service.todos.length,0,'initial state is empty');
    });

    test('it adds a todo', function(assert){
        const service = this.owner.lookup('service:todo-service');
        service.addTodo('Write Test');
        assert.strictEqual(service.todos.length,1);
        assert.strictEqual(service.todos[0].title,'Write Test');
        assert.false(service.todos[0].completed);
    });

    test('it remove a todo', function(assert){
        const service = this.owner.lookup('service:todo-service');
        service.addTodo('Delete Test');
        const todo = service.todos[0];
        service.deleteTodo(todo.id);
        assert.strictEqual(service.todos.length,0);
    });

    test('it toggles a  todos',function(assert){
        const service = this.owner.lookup('service:todo-service');
        service.addTodo('Toggle Test');
        
        const todo = service.todos[0];
        assert.false(todo.completed,'todo initially not completed');
        
        service.toggleTodo(todo.id);
        assert.true(service.todos[0].completed,'todo is completed after toggle');
        
        service.toggleTodo(todo.id);
        assert.false(service.todos[0].completed,'todo is not completed after second toggle');
    });

})
