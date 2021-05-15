<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <!-- <router-link :to="{ name: 'Home'}">Home</router-link> |
    <router-link :to="{ name: 'About'}">About</router-link> -->
    
    <!-- とても重要忘れてはならない -->
    <router-view />
    <!-- とても重要忘れてはならない -->
  </div>
</template>

