<template>
  <b-form-select  v-model="selected" :options="option" class="w-25"></b-form-select>
</template>

<script>


export default {
  name: 'todo-filters',
  data(){
    return{
      selected:'Любые',
      option:[
        {value:'Любые',text:'Любые'},
        {value:'Завершенные',text:'Завершенные'},
        {value:'Открытые',text:'Открытые'},
      ]
    }
  },
  emits:['changeFilters'],
  watch:{
    selected(){
      this.$emit('changeFilters',this.selected)
    }
  }
}
</script>

<style>

</style>
