<template>
  <div class="container" style="margin-top: 60px;">
    <div class="row justify-content-center">
      <div class="col-4">
        <form @submit.prevent="handleSubmit" id="myForm1">
          <h3 class="text-center py-5">SignUp Form</h3>

          <!-- Username -->
          <label class="py-2">User Name</label>
          <input type="text" class="form-control py-1" v-model="user" :class="{ error: userError }"
            placeholder="User Name" />
          <p v-if="userError" style="color: red">
            <small>{{ userError }}</small>
          </p>

          <!-- Email -->
          <label class="py-2">Email</label>
          <input type="email" class="form-control py-1" v-model="email" :class="{ error: emailError }"
            placeholder="Email" />
          <p v-if="emailError" style="color: red">
            <small>{{ emailError }}</small>
          </p>

          <!-- Password -->
          <label class="py-2">Password</label>
          <div class="password-wrapper">
            <input :type="showPassword ? 'text' : 'password'" class="form-control py-1" v-model="password"
              :class="{ error: passwordError }" placeholder="Password" />
            <button type="button" class="toggle-btn" @click="togglePassword">
              {{ showPassword ? 'Hide' : 'Show' }}
            </button>
          </div>
          <p v-if="passwordError" style="color: red">
            <small>{{ passwordError }}</small>
          </p>

          <!-- Submit -->
          <div class="col m-5 d-grid gap-2">
            <button type="submit" class="btn btn-primary" :disabled="loading">
              {{ loading ? '🔍SignUp in...' : 'SignUp' }}
            </button>
            <router-link to="/Login" class="text-dark m-3">Already signed in? Login Here</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref as dbRef, set } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDFATaCm2sHZ43l5p248ruNqe9NpHMzcRw",
  authDomain: "authentication-app-832db.firebaseapp.com",
  databaseURL: "https://authentication-app-832db-default-rtdb.firebaseio.com",
  projectId: "authentication-app-832db",
  storageBucket: "authentication-app-832db.appspot.com",
  messagingSenderId: "1099249970529",
  appId: "1:1099249970529:web:971c227b957ad23fc22920"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

// Form fields
const user = ref('');
const email = ref('');
const password = ref('');
const userError = ref('');
const emailError = ref('');
const passwordError = ref('');
const loading = ref(false)
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
    userError.value = 'Username must contain at least 1 numeric digits.';
  }

  if (!isEmailValid) {
    emailError.value = 'Email must  0-9 a-zA-Z  .';
  }

  if (!isPasswordValid) {
    passwordError.value = 'Must be 6 characters and include 1 special characters.';
  }

  if (isUserValid && isEmailValid && isPasswordValid) {
    loading.value = true
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const userData = userCredential.user;

        return set(dbRef(database, 'users/' + userData.uid), {
          userName: user.value,
          email: user.value,
          password: password.value,
          createdAt: new Date().toISOString()
        })
      })

      .then(() => {
        alert('User registered and data saved ✅ !');
        user.value = '';
        email.value = '';
        password.value = '';
      })
      .catch((error) => {
        alert(`Signup failed: ${error.message}❌`);
        // alert(`Signup failed: Error (auth/network-request-failed ❌)`);
      })
      .finally(() => {
        loading.value = false
      })
  }
};

function validateUser(user) {
  const numericDigits = (user.match(/[0-9]/g) || []).length;
   const alphaUser = (user.match(/[a-zA-Z]/g) || []).length; 
  return  user.length >= 5 && numericDigits >= 1 && alphaUser >= 4;
}
// const numericDigits = (email.match(/[a-zA-Z0-9]/g) || []).length;
  // return numericDigits >= 2 && email.includes('@');
// function validateEmail(email) {
//   const numeric = (email.match(/[0-9]/g) || []).length;
//    const alpha = (email.match(/[a-zA-Z]/g) || []).length; 
//   return  email.length >= 5 && numeric >= 1 && alpha >= 4;
// }
function validateEmail(email) {
  const numericCount = (email.match(/\d/g) || []).length;
  const alphaCount = (email.match(/[a-zA-Z]/g) || []).length;

  return email.length >= 5 && numericCount >= 1 && alphaCount >= 4;
}
 

function validatePassword(password) {
  const specialChars = (password.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length;
  const alphaPassword = (password.match(/[a-zA-Z]/g) || []).length;
  return password.length >= 6 && specialChars >= 1 && alphaPassword >= 5;
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
  background: rgb(181, 174, 174);
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
