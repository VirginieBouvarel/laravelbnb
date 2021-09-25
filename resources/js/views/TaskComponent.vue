<template>
  <div class="container">
    <ul class="list-group">
      <li class="list-group-item"><a href="#">Tâche 1</a></li>
      <li class="list-group-item"><a href="#">Tâche 2</a></li>
      <li class="list-group-item"><a href="#">Tâche 3</a></li>
      <li class="list-group-item"><a href="#">Tâche 4</a></li>
      <li class="list-group-item"><a href="#">Tâche 5</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("TaskComponent mounted");
  },
};
</script>