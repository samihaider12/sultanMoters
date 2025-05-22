<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
<nav>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterLink to="/contact">Contact</RouterLink>
  <RouterLink to="/post">Post</RouterLink>
</nav>
  <RouterView />
</template>

<style scoped></style> -->

<template>
  <div>
    <Navbar :isOpen="sidebarOpen" @toggle-sidebar="toggleSidebar" />
    <Sidebar :isOpen="sidebarOpen" />
    <Sidebar :isOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
    <div :class="['main-content p-4', sidebarOpen ? 'with-sidebar' : '']">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

const sidebarOpen = ref(false)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}
</script>

<style scoped>
.main-content {
  transition: margin-left 0.4s ease-in-out;
}
.with-sidebar {
  margin-left: 250px;
}
</style>
