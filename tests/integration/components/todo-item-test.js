import {setupRenderingTest} from "ember-qunit";
import {render, click} from "@ember/test-helpers";
import {hbs} from "ember-cli-htmlbars";
import {module, test} from "qunit";

module('Integration | Component | todo-item', function (hooks){
    setupRenderingTest(hooks);

    test('it toggles completion state via checkbox', async function (assert){
        const service = this.owner.lookup('service:todo-service');
        service.addTodo('Toggle task');
        this.todo = service.todos[0];
        await render(hbs`<TodoItem @todo={{this.todo}}/>`);

        await click('input[type="checkbox"]');
        assert.true(service.todos[0].completed);

        await click('input[type="checkbox"]');
        assert.false(service.todos[0].completed);
    });

    test('it delete A TODO', async function (assert){
        const service = this.owner.lookup('service:todo-service');
        service.addTodo('Delete task');
        this.todo = service.todos[0];
        await render(hbs`<TodoItem @todo={{this.todo}}/>`);

        await click('button[aria-label="Delete task"]');
        assert.strictEqual(service.todos.length,0);
    });
});