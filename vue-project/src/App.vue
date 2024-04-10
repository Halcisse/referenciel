<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFoot.vue';

</script>

<template>
  <div class="appContent">
    <TheHeader class="header " />
    <RouterView class="router" />
    <TheFooter class="footer " />
  </div>
</template>

<style>
body {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;


}

.header {
  position: fixed;
  width: 100%;

}

.router {
  min-height: 140vh;

}

h1 {
  margin: 0;
  font-family: "Goblin One", serif;
  font-weight: 300;
  font-style: normal;
}
</style>
