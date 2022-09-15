<template>
  <div draggable="true" class="d-flex align-items-center">
    <b-form-input class="my-2" @keyup.enter="addTodo" v-model="title" placeholder="Введите название дела"/>
    <b-button @click="addTodo" class="mx-3" variant="outline-primary">Добавить</b-button>
  </div>
</template>


<script>


export default {
  name: 'todo-add',
  data() {
    return {
      title: '',
    }
  },
  emits: ['addTodo'],
  methods:{
    addTodo(){
      if (this.title){
        this.$emit('addTodo',this.title.trim())
        this.title = ''
      }
    }
  }
}

</script>

