<template>
  <div class="todo">
    <input ref="editor" class="edit" @keyup.enter="editEnd" v-model="editText" v-if="edit">
    <div v-else class="todo__item">{{ title }}</div>
    <div>
      <font-awesome-icon @click="editStart" class='tools' icon="fa-pen-to-square"/>
      <font-awesome-icon @click="$emit('todoCompleted',id)" class='tools' icon="fa-check"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo-item',
  props: {
    title: String,
    id: Number,
  },
  methods: {
    editStart() {
      this.edit = !this.edit

    },
    editEnd() {
      this.$emit('todoEdit', [this.editText, this.id])
      this.edit = !this.edit
    },
  },
  emits: ['todoCompleted', 'todoEdit'],
  data() {
    return {
      completed: false,
      edit: false,
      editText: this.title,
    }
  },
  updated() {
    if (this.$refs.editor && this.edit) {
      this.$refs.editor.focus()
    }
  },
  watch: {
    completed() {
      if (this.completed) {
        this.$emit('todoCompleted', this.id)
      }
    },
  }
}
</script>

<style>
.tools {
  margin: 6px;
  cursor: pointer;
  color: gray;
}

.tools:hover {
  color: black;
  transform: scale(1.04);
}

.todo {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-radius: 12px;
  justify-content: space-between;
  margin: 10px auto;
  width: 600px;
  height: 50px;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.05);
}

.edit {
  padding: 4px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
}


</style>
