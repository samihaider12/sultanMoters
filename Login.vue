<template>
  <div class="container" style="margin-top: 60px;">
    <div class="row justify-content-center">
      <div class="col-4 ">
        <form @submit.prevent="handleSubmit" id="myForm">
          <h3 class="text-center py-5">Login Form</h3>

          <!-- Email -->
          <label class="py-2">Email</label>
          <input
            type="email"
            class="form-control py-1"
            v-model="email"
            :class="{ error: emailError }"
            placeholder="Email"
          />
          <p v-if="emailError" style="color: red">
            <small>{{ emailError }}</small>
          </p>

          <!-- Password -->
          <label class="py-2">Password</label>
          <div class="password-wrapper">
            <input
              :type="showPassword ? 'text' : 'password'"
              class="form-control py-1"
              v-model="password"
              :class="{ error: passwordError }"
              placeholder="Password"
            />
            <button type="button" class="toggle-btn" @click="togglePassword">
              {{ showPassword ? 'Hide' : 'Show' }}
            </button>
          </div>
          <p v-if="passwordError" style="color: red">
            <small>{{ passwordError }}</small>
          </p>

                 <!-- Forgote password -->
                         <div class="form-check my-2">
                        <a href="" class="forgot">Forgote password</a>
                    </div>

                    <!-- Login Button -->

          <div class="col m-5 d-grid gap-2">
            <button class="btn btn-primary">Login</button>
          </div>
           <router-link to="/SignUp" class="m-3 ">New Registration</router-link>
           
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');
const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const handleSubmit = () => {
  emailError.value = '';
  passwordError.value = '';

  const isEmailValid = validateEmail(email.value);
  const isPasswordValid = validatePassword(password.value);

  if (!isEmailValid) {
    emailError.value = 'Please enter at least 2 numeric digits and @';
  }

  if (!isPasswordValid) {
    passwordError.value =
      'Password must be at least 5 characters and include 2 special characters';
  } 

  if (isEmailValid && isPasswordValid) {
    const userData = [{ email: email.value, password: password.value }];
    console.log('User Data:', userData);

    // Reset fields
    email.value = '';
    password.value = '';
  }
};

function validateEmail(email) {
  const numericDigits = (email.match(/\d/g) || []).length;
  return numericDigits >= 2 && email.includes('@');
}

function validatePassword(password) {
  const specialChars = (password.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length;
  return password.length >= 5 && specialChars >= 2;
}
</script>

<style scoped>
body {
  background: rgb(12, 144, 133);
  display: flex;
  justify-content: center;
  align-items: center;
}

.col-4 {
  border: 1px solid white;
  min-height: 500px;
  width: 384px;
  border-radius: 10px;
  background:  rgb(181, 174, 174);
}

a {
  margin-left: 8rem;
}

.error {
  border: 2px solid red;
}

.password-wrapper {
  position: relative;
}

.toggle-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  font-size: 0.9rem;
  cursor: pointer;
  color: #007bff;
}
 
 .forgot{
  margin-left: -20px;
}
</style>
