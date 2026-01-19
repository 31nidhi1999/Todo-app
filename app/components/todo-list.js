import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TodoListComponent extends Component {
  @service('todo-service') todoService;
  @tracked newTodo = '';

  @action
  updateNewTodo(event) {
    this.newTodo = event.target.value;
  }

  @action
  addNewTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = '';
  }
}
