<template>
  <div>Todo App</div>
  <TodoAdd @addTodo="add"/>
  <TodoItem @todoEdit="edit" @todoCompleted="remove" v-for="todo in todoList" :key="todo.id" :title="todo.title"
            :id="todo.id"/>

</template>

<script>

import TodoItem from "@/todo-item";
import TodoAdd from "@/todo-add";

export default {
  name: 'App',
  components: {TodoItem, TodoAdd},
  data() {
    return {
      todoList: []
    }
  },
  methods: {
    add(title) {
      this.todoList.push({
        title,
        id: this.todoList.length,
        completed: false,
      })
    },
    remove(id) {
      this.todoList = (this.todoList.filter(item => item.id !== id))
    },
    edit(arr) {
      const [text,id] = arr
      const editTodo = this.todoList.find(todo => todo.id === id).id
      this.todoList[editTodo].title = text
    }
  }
}
</script>

<style>
#app {
  width: 600px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
}
</style>
