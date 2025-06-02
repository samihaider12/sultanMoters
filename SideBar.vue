<template>  
  <div class="sidebar" :class="{ open: isOpen }">
    
    <ul class="list-unstyled m-0 p-3  mt-4">
       
      <h5>
        <li class="sBar"><router-link to="/bike" class="nav-link">Bike</router-link></li>
      <li class="sBar"><router-link to="/car" class="nav-link">Car</router-link></li>
      <li class="sBar"><router-link to="/bus" class="nav-link">Bus</router-link></li>
      <li class="sBar"><router-link to="/car4x4" class="nav-link">4x4</router-link></li>
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
 .nav-link:hover{
/* background:  #A8F1FF; */
background:   silver;
  border-radius: 5px;
padding: 6px;
 }

.sidebar {
  position: fixed;
  top: 0; /* or top: 0px; */
  left: -250px;
  width: 200px;
  height: 100vh;
  color: black;
  background-color: rgb(204, 203, 203);
  padding-top: 60px;
  transition: left 0.4s ease-in-out;
  z-index: 999;
}
.sidebar.open {
  left: 0;
} 

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  z-index: 998;
}
</style>
