<script setup lang="ts">
import Logo from '../components/Logo.vue'
</script>



<template>

    <main class="mainMetier">
        <h1>Boostez Votre Visibilité en Ligne avec des Sites Web Optimisés SEO</h1>

        <div class="metierContent">
            <img src="../assets/IMAGES/SEOX3.png" alt="Logo SEO x3 tricolore">
            <div class="metierTxt">
                <p>
                    Vous souhaitez faire décoller votre entreprise vers de nouveaux sommets en ligne ? Ne cherchez pas
                    plus loin !<br><br>

                    <strong>Chez</strong> <br><br>
                <div class="refe">
                    <h3>RÉFÉREN<strong>CIEL</strong> </h3>
                    <h4>SEO</h4>
                </div>

                Nous sommes spécialisés dans la création de sites web sur mesure, conçus pour maximiser votre visibilité
                sur les moteurs de recherche. <br><br>

                <strong class="quest">Pourquoi le SEO est-il si important ?</strong> <br><br>

                Le référencement naturel (SEO) est la clé du succès en ligne. Un site web bien optimisé a plus de
                chances d'apparaître en tête des résultats de recherche, attirant ainsi un flux constant de visiteurs
                qualifiés. <br><br>

                <strong class="quest">C'est là que nous intervenons! </strong>
                </p>
            </div>
        </div>

    </main>

</template>

<style scoped>
.mainMetier {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

}

.metierContent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 70%;
    text-align: center;
    font-size: 20px;
    font-family: "Montserrat", sans-serif;
    /* font-optical-sizing: auto;

  font-style: normal; */
    color: #533440;
}

h1 {
    width: 60%;
    font-size: 36px;
    text-align: center;
    color: #533440;
    margin-bottom: 80px;
    letter-spacing: 7px;

}

.refe {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    font-size: 24px;
    font-family: "Goblin One", serif;
    font-style: normal;
}

h3,
h4,
p {
    margin: 0;
}

strong {
    color: #2F435A;
}

.quest {
    font-size: 26px;
    font-style: italic;
}
</style>