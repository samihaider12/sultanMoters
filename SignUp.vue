<template>
  <div class="container bg-dark">
    <div class="row">
      <div class="col-4 offset-4">
        <form @submit.prevent="handleSubmit" id="myForm1">
          <h3 class="text-center py-5">Login Form</h3>

          <!-- Username -->
          <label class="py-2">User Name</label>
          <input
            type="text"
            class="form-control py-1"
            v-model="user"
            :class="{ error: userError }"
            placeholder="User Name"
          />
          <p v-if="userError" style="color: red">
            <small>{{ userError }}</small>
          </p>

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

          <!-- Checkbox and Link -->
          <div class="form-check my-2 d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" class="form-check-input" id="new" />
              <label class="form-check-label" for="new">Get New</label>
            </div>
            <a href="#">Forgot password</a>
          </div>

          <!-- Submit -->
          <div class="col m-5 d-grid gap-2">
            <button type="submit" class="btn btn-primary">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const user = ref('');
const email = ref('');
const password = ref('');
const userError = ref('');
const emailError = ref('');
const passwordError = ref('');
const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const handleSubmit = () => {
  userError.value = '';
  emailError.value = '';
  passwordError.value = '';

  const isUserValid = validateUser(user.value);
  const isEmailValid = validateEmail(email.value);
  const isPasswordValid = validatePassword(password.value);

  if (!isUserValid) {
    userError.value = 'Username must contain at least 2 numeric digits.';
  }

  if (!isEmailValid) {
    emailError.value = 'Email must contain "@" and at least 2 numeric digits.';
  }

  if (!isPasswordValid) {
    passwordError.value = 'Password must be at least 5 characters and include 2 special characters.';
  }

  if (isUserValid && isEmailValid && isPasswordValid) {
    const userData = [
      { user: user.value, email: email.value, password: password.value },
    ];
    console.log('User Data:', userData);

    // Reset fields
    user.value = '';
    email.value = '';
    password.value = '';
  }
};

function validateUser(user) {
  const numericDigits = (user.match(/\d/g) || []).length;
  return numericDigits >= 2;
}

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
  height: auto;
  padding-bottom: 20px;
  width: 384px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
}

a {
  color: #007bff;
  text-decoration: none;
}

.error {
  border: 2px solid red !important;
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
</style>
