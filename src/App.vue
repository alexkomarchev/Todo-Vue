<template>
  <app-header/>
  <div class="main">
    <todo-add @addTodo="add"/>
    <todo-tools @allCompleted="allCompleted" @filters="filter" @autoRemove="automaticRemove = !automaticRemove"/>
    <transition-group name="todo-item">
      <todo-item @todoRemove="remove" @todoEdit="edit" @todoCompleted="updateCompleted" v-for="todo in todoListFilters"
                 :key="todo.id" :title="todo.title"
                 :id="todo.id" :completed="todo.completed"/>
    </transition-group>
  </div>
</template>


<script>
import TodoItem from "@/components/todo-item";
import TodoAdd from "@/components/todo-add";
import TodoTools from "@/components/todo-tools";
import AppHeader from "@/components/app-header";
export default {
  name: 'App',
  components: {TodoItem, TodoAdd, TodoTools,AppHeader},
  data() {
    return {
      todoList: [],
      todoListFilters: this.todoList,
      automaticRemove: false
    }
  },
  mounted() {
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
          if (!todo.completed && this.automaticRemove) {
            this.remove(id)
          } else {
            todo.completed = !todo.completed
          }
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
        this.todoListFilters = this.filteringOpenTodo
      } else if (pick === 'Завершенные') {
        this.todoListFilters = this.filteringCompletedTodo
      } else {
        this.todoListFilters = this.todoList
      }
    },
    allCompleted() {
      if (this.automaticRemove) {
        this.todoList.forEach(todo => {
          todo.completed = true
          this.remove(todo.id)
        })
      } else {
        this.todoList.forEach(todo => todo.completed = true)
      }
      localStorage.setItem('list', JSON.stringify(this.todoList))
    }
  },
  computed: {
    filteringOpenTodo() {
      return this.todoList.filter(todo => !todo.completed)
    },
    filteringCompletedTodo() {
      return this.todoList.filter(todo => todo.completed)
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main{
  margin: 40px auto;
  width: 1000px;
}

.todo-item-enter-active {
  transition: all .9s ease;
}

.todo-item-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.todo-item-enter, .todo-item-leave-to {
  transform: translateX(130px);
  opacity: 0;
}

.todo-item-move {
  transition: transform 0.8s ease;
}
</style>
