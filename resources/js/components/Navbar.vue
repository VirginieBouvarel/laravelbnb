<template>
  <nav class="navbar navbar-expand-lg navbar-light border-bottom bg-light">
    <router-link :to="{ name: 'home' }" class="navbar-brand" href="#"
      >LaravelBnb</router-link
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link :to="{ name: 'home' }" class="nav-link"
            >Bookables</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'about' }" class="nav-link"
            >A propos</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>