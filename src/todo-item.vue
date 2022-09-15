<template>
  <div class="d-flex justify-content-between align-items-center my-3 rounded px-3 py-2 border border-primary">
    <b-form-input ref="editor" class="w-50 h-50" @keyup.enter="editEnd" v-if="edit" v-model="editText" placeholder="Введите название дела"></b-form-input>
    <div  v-else class="todo__item">{{ title }}</div>
    <div class="d-flex align-items-center justify-content-around">
      <font-awesome-icon @click="editStart" class='cursor text-primary mx-2 my-1 cursor-pointer' icon="fa-pen-to-square"/>
      <font-awesome-icon v-if="completed" @click="$emit('todoCompleted',id)" class='cursor text-primary mx-2 my-1' icon="fa-check"/>
      <font-awesome-icon v-else @click="$emit('todoCompleted',id)" class='cursor text-primary mx-2 my-1' icon="fa-xmark"/>
      <font-awesome-icon @click="$emit('todoRemove',id)" class='cursor text-primary mx-2 my-1' icon="fa-regular fa-trash-can"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo-item',
  props: {
    title: String,
    id: Number,
    completed:Boolean,
  },
  methods: {
    editStart(){
      this.edit = !this.edit
    },
    editEnd() {
      this.$emit('todoEdit', [this.editText, this.id])
      this.edit = !this.edit
    },
  },
  emits: ['todoCompleted', 'todoEdit','todoRemove'],
  data() {
    return {
      edit: false,
      editText: this.title,
    }
  },
  updated() {
    if (this.$refs.editor && this.edit) {
      this.$refs.editor.focus()
    }
  },
}
</script>

<style>
.cursor{
  cursor: pointer;
  height: 17px;
}
.cursor:hover{
  transform: scale(1.1);
}
</style>
