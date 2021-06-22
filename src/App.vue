<template>
    <router-link to="/">
        Home
    </router-link>
    |
    <router-link to="/about">
        About
    </router-link>
    |
    <router-link to="/todo">
        TodoList
    </router-link>

    <router-view />
</template>

<script lang="ts" setup>
// eslint-disable-next-line no-unused-vars
import HelloWorld from './components/HelloWorld.vue'
</script>

<style>
#app {
    margin-top: 60px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
