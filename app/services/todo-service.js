import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class TodoService extends Service{
    @tracked todos = [];

    @action
    addTodo(title){
        if(!title.trim()) return;
        this.todos = [...this.todos, { id : Date.now(), title: title.trim(), completed: false }];
    }

    @action
    deleteTodo(id){
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    @action
    toggleTodo(){
        this.todos = this.todos.map(todo => todo.id === id ? {...todo,completed : !todo.completed} : todo);
    }
}