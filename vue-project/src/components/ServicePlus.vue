<script setup lang="ts">
</script>



<template>

    <main class="mainServicePlus">

        <div class="ServicesPlusContent">
            <div class="haut barresp">
                <div class="title">
                    <h1 class="offre"> + DE SERVICES</h1>
                </div>
                <div class="ServicesPlus1 offre">
                    <div class="CreaLogo creaItem">
                        <img src="../assets/IMAGES/FLECHESX3.png" alt="LOGO DE FLECHE" style="width: 100px;">
                        <h2>Création de Logo</h2>
                    </div>
                    <div class="CreaId creaItem">
                        <img src="../assets/IMAGES/FLECHESX3.png" alt="LOGO DE FLECHE" style="width: 100px;">
                        <h2>Création d'une Identité Visuel</h2>
                    </div>
                    <img src="../assets/IMAGES/FLECHE BAS.jpg" alt="" class="arrow2 arrow">
                    <img src="../assets/IMAGES/FLECHE BAS.jpg" alt="" class="arrow3 arrow">
                </div>
            </div>
            <div class="bas barresp">
                <div class="ServicesPlus2 offre">
                    <div class="CreaMaq creaItem">
                        <img src="../assets/IMAGES/FLECHESX3.png" alt="LOGO DE FLECHE" style="width: 100px;">
                        <h2>Création de Maquette de site web</h2>
                    </div>
                    <div class="CreaCopy creaItem">
                        <img src="../assets/IMAGES/FLECHESX3.png" alt="LOGO DE FLECHE" style="width: 100px;">
                        <h2>Copywriting</h2>
     
                    </div>
                    <img src="../assets/IMAGES/FLCH BAS DRTE.jpg" alt="" class="arrow1">
                </div>
                <div class="ServicesPlusTxt offre">
                    <p>
                        L'ensemble de nos services vise à respecter les règles d'accessibilité pour une meilleure
                        intégration des éléments das votre stratégie SEO
                    </p>
                </div>
            </div>
        </div>

    </main>

</template>

<style scoped>
.haut {
    margin-top: 110px;
}

.barresp {
    display: flex;
}

.ServicesPlusTxt {
    background-color: #9DB6CC;
    /* background-color: #2F435A; */
    width: 100%;
    margin-right: 25px;
    padding: 37px;
    font-family: "Ysabeau Infant", sans-serif; 
    text-align: center;
    display: flex;
    align-items: center;
}

.ServicesPlus1 {

    width: 100%;

}

.offre {
    height: 320px;
}

.ServicesPlus2 {

    width: 100%;
}

.title {

    width: 100%;

}

.creaItem {
    display: flex;
    justify-content: center;
    align-items: center;
}

p {
    color: #2F435A;
    font-size: 33px;
}

h1 {
    /* color: #9DB6CC; */
    color: #2F435A;
    font-size: 48px;
    margin-left: 122px;
    margin-top: 39px;
    width: 40%;
    font-weight: normal;
}
h2{
    color: #2F435A;
    font-size: 33px;
}
.arrow1{
    width: 180px;
    position: absolute;
    left: 550px; 
}
.arrow2{
    width: 180px;
    position: relative;
    right: 90px;
    bottom: 50px; 
}
.arrow3{
    width: 180px;
    position: relative;
    right: 90px;
    bottom: 50px; 
}
</style>
