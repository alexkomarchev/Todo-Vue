<template >
  <div class="d-flex align-items-center justify-content-between my-2">
    <div class="d-flex align-items-center">
      <font-awesome-icon class='text-primary mx-2 my-1' icon="fa-pen-to-square"/>
      <span> Редактировать</span>
    </div>
    <div class="d-flex align-items-center">
      <font-awesome-icon class='text-primary mx-2 my-1' icon="fa-check"/>
      <span> Завершено</span>
    </div>
    <div class="d-flex align-items-center">
      <font-awesome-icon class='text-primary mx-2 my-1' icon="fa-xmark"/>
      <span class="mx-1"> Не завершено</span>
    </div>
    <div class="d-flex align-items-center">
      <font-awesome-icon class='text-primary mx-1 my-1' icon="fa-regular fa-trash-can"/>
      <span class="mx-2"> Удалить</span>
    </div>
  </div>
</template>


<script>


export default {
  name: 'todo-hint'
}
</script>

<style>


</style>
