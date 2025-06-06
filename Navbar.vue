<template>
  <nav class="navbar navbar-expand-lg mt-0" id="navbar">
    <div class="container-fluid d-flex align-items-center justify-content-between">

      <!-- Sidbar part -->
      <div class="d-flex align-items-center">
        <div class="menu-toggle me-5" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
          aria-expanded="false" >
          <span class="bar" :class="{ topopen: isOpen }"></span>
          <span class="bar" :class="{ midopen: isOpen }"></span>
          <span class="bar" :class="{ botopen: isOpen }"></span>
        </div>
        <div class="dropdown">
          <ul class="list-unstyled mt-5 dropdown-menu" aria-labelledby="dropdownMenuButton1" id="headDropdown">
            <div class="container-fluid">

              <h5 class="d-lg-none me-3">
                <li><router-link to="/" class="dropdown-item">Home</router-link></li>
                <li><router-link to="/about" class="dropdown-item">About</router-link></li>
                <li><router-link to="/Service" class="dropdown-item">Services</router-link></li>
                <li><router-link to="/contact" class="dropdown-item">Contact</router-link></li>
              </h5>

              <h5>
                <li class="sBar"><router-link to="/bike" class="nav-link">Bike</router-link></li>
                <li class="sBar"><router-link to="/car" class="nav-link">Car</router-link></li>
                <li class="sBar"><router-link to="/bus" class="nav-link">Bus</router-link></li>
                <li class="sBar"><router-link to="/car4x4" class="nav-link">4x4</router-link></li>
                <li class="sBar"><router-link to="" class="nav-link">Trola</router-link></li>
                <li class="sBar"><router-link to="" class="nav-link">Police Van</router-link></li>
                <li class="sBar"><router-link to="" class="nav-link">Army Tank</router-link></li>
              </h5>
            </div>
          </ul>
        </div>


        <img src="../images/icon.png" alt="Logo" class="me-5 logo-img" style="height: 60px;" />
      </div>


<!-- Navbar part -->

      <!-- ✅ Inline menu on lg and above -->
      <div class="collapse navbar-collapse justify-content-between  " id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link text-dark">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link text-dark">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Service" class="nav-link text-dark">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link text-dark">Contact</router-link>
          </li>
          <li>
            <router-link to="/SaleProduct" class="nav-link text-dark">Sale Product</router-link>
          </li>
        </ul>
      </div>

      <!-- Login/SignUp Always Visible -->
      <div class="d-flex  ms-2" style="position: fixed; right: 10px ;" id="login">
        <router-link to="/Login" class="btn btn-outline-success me-2">Login</router-link>
        <router-link to="/SignUp" class="btn btn-outline-primary">Sign Up</router-link>
      </div>
    </div>
  </nav>
</template>
<script setup>

// import { useSidebar } from '@/composables/useSidebar.js'
// import {useSidebar} from '@/components/useSidebar.js'
// const { toggleSidebar, isSidebarOpen } = useSidebar();

const props = defineProps({
  isOpen: Boolean
})

</script>

<style scoped>
li .nav-link {

  padding: 9px;
  margin: 0 15px;
  border-radius: 5px;

}

li .nav-link:hover {
  /* background: #A8F1FF; */

  background: rgb(239, 239, 239);
}

#pic {
  position: relative;
  left: -157px;
}

#navbar {
  /* background: #4ED7F1; */
  background: silver;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  /* Ensure it's above other content */
  height: 70px;
  /* Adjust as per your design */
}

/* sideBar Component */
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
  background-color: brown;
  border-radius: 2px;
  transition: all 0.4s ease-in-out;
}

/* Cross Animation */
/* .topopen {
  transform: translateY(7px) rotateZ(45deg);
}
.midopen {
  opacity: 0;
}
.botopen {
  transform: translateY(-7px) rotateZ(-45deg);
} */


/* home dropdown */
/* Inside <style scoped> */
.menu-toggle {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.menu-toggle .bar {
  height: 4px;
  width: 25px;
  background-color: black;
  /* or black based on navbar */
  /* margin: 2% 0; */
  transition: 0.3s;
}

#navbarNav {
  font-size: 22px;
}

#navDropdown {
  margin-left: 600px;
}

.dropdown-menu .dropdown-item:hover {
  background-color: silver;
}

#headDropdown {
  position: fixed;
  top: 20.5px;
  width: 200px;
  height: 100vh;
  border-radius: 0px;
  color: black;
  background-color: rgb(204, 203, 203);
   transition: margin-left 0.4s ease-in-out;
    
}
</style>