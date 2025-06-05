<!-- <template>
  <div class="container" style="margin-top: 60px;">
    <div class="row justify-content-center">
      <div class="col-4 ">
        <form @submit.prevent="handleSubmit" id="myForm">
          <h3 class="text-center py-5">Login Form</h3> -->

          <!-- Email -->
          <!-- <label class="py-2">Email</label>
          <input
            type="email"
            class="form-control py-1"
            v-model="email"
            :class="{ error: emailError }"
            placeholder="Email"
          />
          <p v-if="emailError" style="color: red">
            <small>{{ emailError }}</small>
          </p> -->

          <!-- Password -->
          <!-- <label class="py-2">Password</label>
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
          </p> -->
                    <!-- Login Button -->

          <!-- <div class="col m-5 d-grid gap-2">
            <button class="btn btn-primary">Login</button>
           <router-link to="/SignUp" class="text-center m-3 ">New Account</router-link>

          </div>
           
        </form>
      </div>
    </div>
  </div>
</template> -->
<!-- 
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
</style> -->

 

<!-- FireBase Login -->

<template>
  <div class="container" style="margin-top: 60px;">
    <div class="row justify-content-center">
      <div class="col-4">
        <form @submit.prevent="handleSubmit" id="myForm" v-if="!isLoggedIn">
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

          <!-- Login Button -->
          <div class="col m-5 d-grid gap-2">
            <button class="btn btn-primary" :disabled="loading">
              {{ loading ? '🔍 Logging in...' : 'Login' }}
            </button>
            <router-link to="/SignUp" class="text-center m-3">New Account</router-link>
          </div>

          <div v-if="firebaseError" class="alert alert-danger">
            {{ firebaseError }}
          </div>
        </form>

        <!-- Success and Logout -->
        <div v-else class="text-center py-5">
          <img src="../LoginData/ook.png" alt="" style="width: 350px; height: 290px;">
          <div class="alert alert-success mt-5">Login Successful!</div>
          <button class="btn btn-danger mt-3" @click="handleLogout">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'
import {
  getDatabase,
  ref as dbRef,
  set
} from 'firebase/database'

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDFATaCm2sHZ43l5p248ruNqe9NpHMzcRw",
  authDomain: "authentication-app-832db.firebaseapp.com",
  databaseURL: "https://authentication-app-832db-default-rtdb.firebaseio.com",
  projectId: "authentication-app-832db",
  storageBucket: "authentication-app-832db.appspot.com",
  messagingSenderId: "1099249970529",
  appId: "1:1099249970529:web:971c227b957ad23fc22920"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const database = getDatabase(app)

// Reactive State
const email = ref('')
const password = ref('')
const emailError = ref('')
const passwordError = ref('')
const firebaseError = ref('')
const loading = ref(false)
const showPassword = ref(false)
const isLoggedIn = ref(false)

// Toggle password visibility
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

// Handle login form submission
const handleSubmit = () => {
  emailError.value = ''
  passwordError.value = ''
  firebaseError.value = ''

  const isEmailValid = validateEmail(email.value)
  const isPasswordValid = validatePassword(password.value)

  if (!isEmailValid) {
    emailError.value = 'Please enter at least 2 numeric digits and @'
  }
  if (!isPasswordValid) {
    passwordError.value =
      'Password must be at least 6 characters and include 1 special character and 5 letters'
  }

  if (isEmailValid && isPasswordValid) {
    loading.value = true
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user
        isLoggedIn.value = true

        // Save login log
        return set(dbRef(database, 'loginLogs/' + user.uid), {
          email: user.email,
          lastLogin: new Date().toISOString()
        })
      })
      .then(() => {
        email.value = ''
        password.value = ''
      })
      .catch((error) => {
        firebaseError.value = error.message
      })
      .finally(() => {
        loading.value = false
      })
  }
}

// Handle logout
const handleLogout = () => {
  signOut(auth)
    .then(() => {
      isLoggedIn.value = false
      email.value = ''
      password.value = ''
      firebaseError.value = ''
      alert('User logged out successfully')
    })
    .catch((error) => {
      firebaseError.value = error.message
    })
}

// Track login state
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user
  })
})

// Validators
function validateEmail(email) {
  const digits = (email.match(/\d/g) || []).length
  return digits >= 2 && email.includes('@')
}

function validatePassword(password) {
  const specialChars = (password.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length
  const alphaPassword = (password.match(/[a-zA-Z]/g) || []).length
  return password.length >= 6 && specialChars >= 1 && alphaPassword >= 5
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
  background: rgb(181, 174, 174);
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
</style>
