import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";


export default class TodoItemComponent extends Component {
    @service('todo-service') todoService;

    @action
    toggle() {
        this.todoService.toggleTodo(this.args.todo.id);
    }

    @action
    delete() {
        this.todoService.deleteTodo(this.args.todo.id);
    }
}