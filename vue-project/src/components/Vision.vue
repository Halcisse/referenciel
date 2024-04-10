<script setup lang="ts">
</script>



<template>
    <main class="mainVision">

        <div class="visionContent">
            <h1>NOTRE VISION</h1>
            <div class="section">
                <section class="visionTxt">
                    Nous croyons fermement en l'importance d'une approche holistique du référencement. <br><br>

                    C'est pourquoi chaque site que nous concevons est soigneusement optimisé pour les moteurs de
                    recherche dès sa conception. <br><br>

                    De la structure de l'URL à la rédaction de contenu, en passant par les balises META et les liens
                    internes <br><br>
                </section>
                <aside class="visionAside">
                    <img src="../assets/IMAGES/LAPTOP.png" alt="photo d'un ordinateur portable" class="laptop">
                    <p class="legende">- AUCUN DÉTAIL N'EST NÉGLIGÉ DANS NOTRE QUÊTE DE PERFORMANCE SEO -</p>
                </aside>
            </div>
        </div>
        <div class="avantageTitle">
            <h2>RÉFÉREN<strong>CIEL</strong> <br>SEO</h2>
            <h3>VOUS PERMET DE BÉNÉFICIER DE NOMBREUX AVANTAGES</h3>

        </div>
        <div class="avantageContent">

            <section class="avantageTxt">
                <h4>Une visibilité accrue</h4>
                <p>Votre site web apparaîtra en tête des résultats de recherche, attirant ainsi un trafic qualifié et
                    augmentant vos chances de conversion.</p>
                <br>
                <h4>Une expérience utilisateur optimisée </h4>
                <p>Nous concevons des sites web conviviaux et intuitifs, garantissant une expérience utilisateur
                    exceptionnelle à chaque visite</p>
                <br>
                <h4>Une rentabilité renforcée</h4>
                <p> Un site web bien positionné génère un retour sur investissement significatif à long terme, en
                    attirant un flux constant de clients potentiels.</p>
                <br>
                <h4>Suivi et Analyse </h4>
                <p>Nous vous fournissons des outils de suivi avancés pour surveiller les performances de votre site web
                    et ajuster notre stratégie en conséquence</p>
                <br>
            </section>
            <aside>
                <img src="../assets/IMAGES/SEOX5.png" alt="photo d'un logo SEO x3" class="SEO5">
            </aside>

        </div>


    </main>
</template>

<style scoped>
.mainVision {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

}

h1 {
    margin-top: 119px;
    font-size: 50px;
    text-align: left;
    color: #533440;
    letter-spacing: 7px;
    margin-bottom: 64px;

}

.visionContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 45px;
    width: 70%;
}

.section {
    display: flex;
    flex-direction: row;
}

.visionTxt {
    text-align: center;
    font-size: 24px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-style: normal;
    padding: 34px 0;
    width: 90%;
    color: #2F435A;
}

.visionAside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    width: 95%;
    /* background-color: blue; */
}

.laptop {
    width: 340px;
    margin-bottom: 49px;
}

.legende {
    text-align: center;
    color: #A47786;
    letter-spacing: 7px;
    font-size: 21px;
    font-family: "Goblin One", serif;
    font-weight: 300;
    font-style: normal;
    margin-bottom: 49px;
}

.avantageContent,
.avantageTitle {
    background-color: #A47786;
    width: 100%;
}

.SEO5 {}

img {
    margin-top: 25px;
}

.avantageTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #533440;
    font-size: 21px;
    font-family: "Goblin One", serif;
    font-style: normal;
    padding-bottom: 45px;

}

strong {
    color: #2F435A;
}

.avantageContent {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;

}

.avantageTxt {
    font-size: 21px;
    font-family: "Montserrat", sans-serif;
    width: 50%;


}

h3 {
    width: 40%;
}

h4 {
    color: #533440;
    margin: 0;


}

p {
    color: #E4D4C8;
    margin: 0;

}
</style>