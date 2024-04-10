<script setup lang="ts">
import Logo from '../components/Logo.vue'
import ContactView from '../components/Contact.vue'
import MetierView from '../components/Metier.vue'
import VisionView from '../components/Vision.vue'
import ServicesView from '../components/Services.vue'
import ServicePlusView from '../components/ServicePlus.vue'
import GlossaireView from '../components/Glossaire.vue'
</script>

<template>
    <main class="mainHome" id="home">
        <div class="logo">
            <img src="../assets/IMAGES/image pc.png" alt="Logo d'un ordinateur portable" class="imgLogo">
            <Logo />

        </div>

        <div class="subtitle">VOUS PROPULSE VERS DE NOUVEAUX SOMMETS DANS LE RÉFÉRENCEMENT</div>
        <div class="plus">
            <div class="plusTxt">EN SAVOIR PLUS</div>
            <img src="../assets/IMAGES/flchplus.png" alt="Flèche de direction vers le bas" class="arrow">
        </div>


        <section id="metier">
            <MetierView />
        </section>


        <section id="vision">
            <VisionView />
        </section>

        <section id="services">
            <ServicesView />
        </section>

        <section id="servicePlus">
            <ServicePlusView />
        </section>

        <section id="glossaire">
            <GlossaireView />
        </section>

        <section id="contact">
            <ContactView />
        </section>
    </main>


</template>


<style scoped>
.mainHome {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.imgLogo {
    width: 450px;
    margin-top: 60px;

}

.logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
}

/* h1,h2{
    margin: 0;
    color: #533440;
}
h1{
    font-size: 75px;

}
h2{
    font-size: 45px;
} */
/* .logo{
    margin-top: 105px;
} */
/* strong{
    color: #2F435A;
} */
.subtitle {
    margin-bottom: 40px;
    font-size: 19px;
    font-weight: bold;
    color: #533440;
    letter-spacing: 10px;
    width: 50%;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
}

.plus {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #9DB6CC;
    font-weight: bold;
}

.arrow {
    width: 250px;
}

#contact {
    background-color: red;
}

#metier {
    margin-bottom: 25px;
}
</style>