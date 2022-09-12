<template>
  <div class="add">
    <input @keyup.enter="addTodo" v-model="title" placeholder="Введите название дела" class="add__input">
    <button @click="addTodo" class="add__btn">
      Добавить
    </button>
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

<style>
.add {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.add__input {
  padding: 5px 10px;
  width: 200px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #2c3e50;
}

.add__btn {
  padding: 4px 8px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 10px;
}

</style>
