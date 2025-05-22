<template>
  
  <div class="sidebar" :class="{ open: isOpen }">
 <img src="../assets/my1.png" alt="" style="height: 60px; margin-top: 10px;">
    <ul class="list-unstyled m-0 p-3  mt-4">
       
      <h5>
        <li class="sBar"><router-link to="/bike" class="nav-link">Bike</router-link></li>
      <li class="sBar"><router-link to="/car" class="nav-link">Car</router-link></li>
      <li class="sBar"><router-link to="/bus" class="nav-link">Bus</router-link></li>
      <li class="sBar"><router-link to="" class="nav-link">4x4</router-link></li>
      <li class="sBar"><router-link to="" class="nav-link">Trola</router-link></li>
      <li class="sBar"><router-link to="" class="nav-link">Police Van</router-link></li>
      <li class="sBar"><router-link to="" class="nav-link">Army Tank</router-link></li>
      </h5>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: Boolean
})
</script>

<style scoped>
li{
  padding: 6px;
  border-radius: 5px;
margin-bottom: 8px;

}
 .sBar:hover{
background:  #A8F1FF;

 }

.sidebar {
  position: fixed;
  top: 10;
  left: -250px;
  width: 230px;
  height: 100vh;
  color: black;
  background-color:#6FE6FC;
  padding-top: 60px;
  transition: left 0.4s ease-in-out;
  z-index: 999;
}
.sidebar.open {
  left: 0;
}
 
</style>
