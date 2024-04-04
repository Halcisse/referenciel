<template>
<header>
    <div class="headerContact">
        <div class="mail">contact@referenciel.fr</div>
        <div class="tel"> 06 73 49 89 04 </div>
    </div>
    <div class="headerNav">
 
    <router-link :to="{ name: 'home' }">ACCUEIL</router-link>
        <router-link :to="{ name: 'home' }">NOTRE METIER</router-link>
        <router-link :to="{ name: 'home' }">NOTRE VISION</router-link>
        <router-link :to="{ name: 'home' }">NOS SERVICES</router-link>
        <router-link :to="{ name: 'home' }">PLUS DE SERVICES</router-link>
        <router-link :to="{ name: 'home' }">GLOSSAIRE</router-link>
        <router-link :to="{ name: 'home' }">CONTACT</router-link>
 
    </div>
</header>

</template>

<script setup lang="ts">

</script>

<style scoped >
.headerNav{
    display: flex;
    justify-content:flex-end;
    padding: 19px 0;
    border-bottom: 1px solid rgb(228, 225, 225) ;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  background-color: #fff;


}
.headerContact{
    background-color: #2F435A;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #9DB6CC;
    padding: 5px;
    font-size: 15px;
    letter-spacing: 2px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
a{
    
    text-decoration: none;
    padding: 0 39px;
    color: #2F435A;
    
}
</style>