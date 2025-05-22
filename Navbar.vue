<template>
  <nav class="navbar navbar-dark " id="navbar">
  
    <div class="container-fluid d-flex align-items-center">
      <div class="menu-toggle" @click="$emit('toggle-sidebar')">
        <span class="bar" :class="{ topopen: isOpen }"></span>
        <span class="bar" :class="{ midopen: isOpen }"></span>
        <span class="bar" :class="{ botopen: isOpen }"></span>
      </div><img src="../assets/my1.png" alt="" style="height: 60px;" id="pic">
      <ul class="nav ms-3">
        <li class="nav-item">
          <router-link to="/" class="nav-link text-white">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link text-white">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="" class="nav-link text-white">Services</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link text-white">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  isOpen: Boolean
})
</script>

<style scoped>
li{
  padding: 5px;
  border-radius: 5px;
}
li:hover{
  background: #A8F1FF;
  
}
#pic{
  position: relative;
  left: -157px;

}
#navbar {
  background: #4ED7F1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensure it's above other content */
  height: 70px; /* Adjust as per your design */
}


.menu-toggle {
  width: 40px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  padding: 6px 0;
}

.bar {
  display: block;
  height: 4px;
  width: 30px;
  background-color: white;
  border-radius: 2px;
  transition: all 0.4s ease-in-out;
}

/* Cross Animation */
.topopen {
  transform: translateY(7px) rotateZ(45deg);
}
.midopen {
  opacity: 0;
}
.botopen {
  transform: translateY(-7px) rotateZ(-45deg);
}
</style>
