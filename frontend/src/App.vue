<script setup>
import axios from 'axios';
// setup script
const formSubmit = async () => {
    await axios.get("/sanctum/csrf-cookie");
    await axios.post("/login");
    console.log('Form Submitted');
}
</script>

<template>
    <div>
        <h1>Vue 3 App</h1>
        <form @submit.prevent="formSubmit">
            <input type="text" placeholder="Enter your name" /> <br>
            <input type="text" placeholder="Enter your name" /> <br>
            <button type="submit">login</button>
        </form>
    </div>
</template>

<style scoped>
/* scoped style  */
</style>
