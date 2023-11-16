<script setup lang="ts">
import { ref } from "vue";

const showMobileNav = ref(false)

</script>

<template>
  <nav class="navbar is-success"
       aria-label="main navigation">
    <div class="container is-max-desktop px-2">
    <div class="navbar-brand">
      <div class="navbar-item is-size-4 is-family-monospace">
        Notizblock
      </div>
      <a role="button"
         @click.prevent="showMobileNav = !showMobileNav"
         class="navbar-burger"
         :class="showMobileNav ? 'is-active': ''"
         data-target="navbarBasicExample">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>

    <div id="navbarBasicExample"
         @click="showMobileNav = !showMobileNav"
         :class="{'is-active': showMobileNav}"
         class="navbar-menu">

      <div class="navbar-end">
  <RouterLink to="/"
              active-class="is-active"
              class="navbar-item">
    Notes
  </RouterLink>
  <RouterLink to="/stats"
              active-class="is-active"
              class="navbar-item">
    Stats
  </RouterLink>
      </div>
    </div>
    </div>
  </nav>
</template>

<style scoped>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>