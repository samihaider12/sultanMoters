
<template>
  <div class="container">
    <h2 class="text-center mb-4">SultanMotors</h2>
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label class="form-label">NameCity</label>
            <input  v-model="cityInput" type="text" class="form-control" required />
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input v-model="email" type="email" class="form-control" required />
          </div>
          <div class="mb-3">
            <label class="form-label">Message</label>
            <textarea v-model="message" class="form-control" rows="4" required></textarea>
          </div>
          <button class="btn btn-primary" 
           @click="fetchWeather"
           
           >Send Message</button>
        </form>

        <div v-if="submitted" class="alert alert-success mt-3">
          Thank you for contacting us! We will get back to you soon.
        </div>
      </div>

      <div class="col-md-6">
        <h5 class="">
        <img src="../images/icon.png" alt="Contact" class="img-fluid rounded mt-3" />

        </h5>
        <p><strong>Email:</strong> sultanmotors@gmail.com</p>
        <p><strong>Phone:</strong> <a href="">+92 324 2728172</a></p>
        <p><strong>Address:</strong> Shahi Road Car Street, Lahore, Pakistan</p>
         <a
    :href="`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hello, I want to contact you`)}`"
    target="_blank"
    class="btn btn-outline-success"
    id="btn"
  >
      WhatsApp
  </a> 
   <a
    :href="`https://www.facebook.com/profile.php?id=61573194894797`"
    target="_blank"
    class="btn m-3 btn-outline-primary"
    id="btn"
  >
     FaceBook
  </a> 
   <a
    :href="`https://www.instagram.com/mr.s7t2/#`"
    target="_blank"
    class="btn btn-outline-danger"
    id="btn"
  >
     Instagram
  </a> 
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
   let phoneNumber=+923242728172;
// const name = ref('');
const email = ref('');
const message = ref('');
const submitted = ref(false);

const submitForm = () => {
  if (email.value && message.value) {
    submitted.value = true;
    // Real app mein yahan API call hogi
    console.log("Form submitted", {  email: email.value, message: message.value });

    // Form reset
    
    email.value = '';
    message.value = '';
  }

};

  
let cityInput = ref("");
let weatherData = ref(null);
const error = ref(false);

const fetchWeather = async () => {
  if (!cityInput.value) return;

  try {
    const response = await
     fetch(`http://api.weatherapi.com/v1/current.json?key=aa95206573194482b8845401250602&q=${cityInput.value}&aqi=yes`);
    
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    weatherData.value = data;
    error.value = false;
    alert("✅ Successfull! Data Submit.");
  } catch (err) {
    weatherData.value = null;
    error.value = true;
    alert("❌ Wrong city name. Please try again.");
  }
  cityInput.value="";
}

</script>




<style scoped>
.container {
  margin-top: 60px;
  margin-bottom: 40px;
}
form {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>
