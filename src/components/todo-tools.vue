<template>
    <div class="my-2 d-flex align-items-center justify-content-between">
      <todo-filters @changeFilters="filters"/>
      <b-button class="" @click="$emit('allCompleted')" variant="outline-danger">Завершить все</b-button>
      <b-form-checkbox
          @click="changeAutoRemove"
      >
        Удалять при завершении
      </b-form-checkbox>
    </div>
</template>

<script>

import TodoFilters from "@/components/todo-filters";

export default {
  name: 'todo-tools',
  components: {TodoFilters},
  emits: ['allCompleted', 'filters', 'autoRemove'],
  methods: {
    filters(pick) {
      this.$emit('filters', pick)
    },
    changeAutoRemove() {
      this.$emit('autoRemove')
    }

  }

}
</script>

<style>

</style>