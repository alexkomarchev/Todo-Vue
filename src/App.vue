<template>
  <TodoHint/>
  <div class="d-flex justify-content-between align-items-center">
    <TodoAdd @addTodo="add"/>
    <b-button @click="allCompleted" variant="outline-danger">Завершить все</b-button>
    <TodoFilters @changeFilters="filter"/>
  </div>
  <TodoItem @todoRemove="remove" @todoEdit="edit" @todoCompleted="updateCompleted" v-for="todo in todoListFilters"
            :key="todo.id" :title="todo.title"
            :id="todo.id" :completed="todo.completed"/>

</template>

<script>

import TodoItem from "@/todo-item";
import TodoAdd from "@/todo-add";
import TodoHint from "@/todo-hint";
import TodoFilters from "@/todo-filters";

export default {
  name: 'App',
  components: {TodoItem, TodoAdd, TodoHint, TodoFilters},
  data() {
    return {
      todoList: [],
      todoListFilters: this.todoList,
    }
  },
  mounted() {
    console.log(1)
    this.todoList = JSON.parse(localStorage.getItem('list')) || []
  },
  methods: {
    add(title) {
      this.todoList.push({
        title,
        id: this.todoList.length,
        completed: false,
      })
      localStorage.setItem('list', JSON.stringify(this.todoList))
    },
    updateCompleted(id) {
      this.todoList.forEach(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
      })
      localStorage.setItem('list', JSON.stringify(this.todoList))
    },
    edit(arr) {
      console.log(this.todoList)
      const [text, id] = arr
      this.todoList.forEach(todo => {
        if (todo.id === id) {
          todo.title = text
        }
      })
      localStorage.setItem('list', JSON.stringify(this.todoList))
    },
    remove(id) {
      this.todoList = this.todoList.filter(todo => todo.id !== id)
      localStorage.setItem('list', JSON.stringify(this.todoList))
    },
    filter(pick) {
      console.log(pick)
      if (pick === 'Открытые') {
        this.todoListFilters = this.todoList.filter(todo => !todo.completed)
      } else if (pick === 'Завершенные') {
        this.todoListFilters = this.todoList.filter(todo => todo.completed)
      } else {
        this.todoListFilters = this.todoList
      }
    },
    allCompleted(){
      this.todoList.forEach(todo => todo.completed = true)
      localStorage.setItem('list', JSON.stringify(this.todoList))
    }
  },
  watch: {
    todoList() {
      this.todoListFilters = this.todoList
    }

  }
}
</script>

<style>
#app {
  width: 675px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
}
</style>
