<script setup>
</script>

<template>
  <div class="container">
    <h2 class="text-center my-4">Our Vehicle Services</h2>
    
    <div class="row">
      <!-- Car Service -->
      <div class="col-md-6 service-card">
        <img src="../views/car2.jpg" alt="Car Service" class="img-fluid" />
        <h4>Car Buying & Selling</h4>
        <p>We offer trusted services for buying and selling all kinds of cars including sedans, hatchbacks, and SUVs.</p>
        <router-link to="/car" class="btn btn-primary">Explore Car Services</router-link>
      </div>

      <!-- Bike Service -->
      <div class="col-md-6 service-card">
        <img src="../views/bike1.jpg" alt="Bike Service" class="img-fluid" />
        <h4>Bike Deals</h4>
        <p>Looking to buy or sell a bike? We deal with top brands and ensure smooth transactions.</p>
        <router-link to="/bike" class="btn btn-primary">Explore Bike Services</router-link>
      </div>

      <!-- 4x4 Service -->
      <div class="col-md-6 service-card">
        <img src="../views/4x44.jpg" alt="4x4 Service" class="img-fluid" />
        <h4>4x4 Vehicles</h4>
        <p>Explore the best 4x4 vehicles in the market. We help you buy or sell with confidence.</p>
        <router-link to="/4x4" class="btn btn-primary">Explore 4x4 Services</router-link>
      </div>

      <!-- Bus Service -->
      <div class="col-md-6 service-card">
        <img src="../views/bus1.jpg" alt="Bus Service" class="img-fluid" />
        <h4>Bus Sales & Purchase</h4>
        <p>We offer full services for bus trading across cities. Commercial buses, mini-buses and more.</p>
        <router-link to="/bus" class="btn btn-primary">Explore Bus Services</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 60px;
}

.service-card {
  background-color: #f5f5f5;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  text-align: center;
}

.service-card img {
  max-height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 15px;
}

.btn-primary {
  background-color: #00bcd4;
  border: none;
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
  text-decoration: none;
  border-radius: 8px;
}
</style>
