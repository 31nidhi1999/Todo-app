import {setupRenderingTest} from "ember-qunit";
import {render,fillIn, click} from "@ember/test-helpers";
import {hbs} from "ember-cli-htmlbars";
import {module, test} from "qunit";

module('Integration | Component | todo-input', function (hooks){
    setupRenderingTest(hooks);

    test('it allows adding a todo via input and button', async function (assert){
        const service = this.owner.lookup('service:todo-service');

        await render(hbs`<TodoInput/>`);

        await fillIn('input[aria-label="New task"]','New Task');
        await click('button[class="add-btn"]');

        assert.strictEqual(service.todos.length,1);
        assert.strictEqual(service.todos[0].title, 'New Task');
    });
});