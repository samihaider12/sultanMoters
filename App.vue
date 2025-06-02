 
<template>
  
   <div> 
    <Navbar :isOpen="sidebarOpen" @toggle-sidebar="toggleSidebar" />
    <Sidebar :isOpen="sidebarOpen" />
    <Sidebar :isOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
    <div :class="['main-content p-4', sidebarOpen ? 'with-sidebar' : '']">   
      <router-view />
    </div>
   </div>
  
  
<FooterCompon />  
 
  
</template>

<script setup>
import { ref ,watch } from 'vue';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/SideBar.vue';
import FooterCompon from './components/FooterCompon.vue';
 
const sidebarOpen = ref(false)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
};
 

</script>

<style scoped>
.main-content {
  transition: margin-left 0.4s ease-in-out;
  padding: 0;
}
.with-sidebar {
  margin-left: 250px;
}

</style>
