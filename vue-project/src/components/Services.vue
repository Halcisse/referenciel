<script setup lang="ts">
</script>



<template>

    <main class="mainServices">
        <div class="servicesContent">
            <p class="entete">NOS SERVICES</p>
            <div class="offrePremiere">
                <div class="creation">
                    <h1>Création de site optimisé SEO</h1>
                    <p class="creaTxt">
                        Boostez votre présence en ligne avec nos prestations de conception de sites web, spécialement
                        optimisés pour le référencement naturel. <br><br>
                        Améliorez votre visibilité sur le web et augmentez votre rentabilité grâce à nos solutions
                        personnalisées.<br><br>
                        Contactez-nous dès maintenant pour donner vie à votre projet digital !
                    </p>
                    <div class="creaIcon">
                        <img src="../assets/IMAGES/OFFRE CREA.png" alt="OFFRE CREATION ">
                    </div>
                </div>
                <div class="optimisation">
                    <h1>Optimisation SEO de site web existant</h1>
                    <p class="creaTxt">Optimisez l'efficacité de votre site web existant grâce à nos services
                        d'optimisation SEO personnalisés. <br><br>
                        Maximisez sa visibilité en ligne et augmentez votre rentabilité en attirant un trafic
                        qualifié.<br><br>
                        Contactez-nous dès aujourd'hui pour donner un nouvel élan à votre présence en ligne !</p>
                    <div class="creaIcon">
                        <img src="../assets/IMAGES/OFFRE OPTIM.png" alt="OFFRE OPTIMISATION ">
                    </div>
                </div>

            </div>
            <div class="offreAnnexe">
                <p class="entete2">NOS SERVICES</p>
                <div class="annexeTitle">
                    <h1 class="h1blue">Optimisation partielle de site</h1>
                    <p class="subtitle">Découvrez également notre service d'optimisation partielle pour un meilleur
                        référencement naturel.</p>

                </div>
                <div class="annexeCards">
                    <div class="auditCard card">
                        <div class="cardTitle">
                            <img src="../assets/IMAGES/AUDIT SEO.png" alt="AUDIT SEO" class="imgCard">
                        </div>
                        <P class="cardTxt">Nous réalisons un audit complet de votre site pour vous permettre
                            d’appréhender votre stratégie SEO</P>
                    </div>

                    <div class="motclCard card">
                        <div class="cardTitle ">
                            <img src="../assets/IMAGES/MOTSCL.png" alt="mots clés" class="imgCard">
                        </div>
                        <P class="cardTxt">Nous développons une stratégie de mots-clés efficace et correspondante avec
                            votre secteur d’activité</P>
                    </div>


                    <div class="accesslCard card">
                        <div class="cardTitle">
                            <img src="../assets/IMAGES/ACCESS.png" alt="ACCESSIBILITE" class="imgCard">
                        </div>
                        <P class="cardTxt">Nous optimisons votre site web afin qu’il réponde parfaitement aux règles
                            d’accessibilité et s’intègre dans votre stratégie SEO</P>
                    </div>


                    <div class="structurCard card">
                        <div class="cardTitle">
                            <img src="../assets/IMAGES/STRUCTURE.png" alt="structure" class="imgCard">
                        </div>
                        <P class="cardTxt">Nous réévaluons la structure de votre site et procédons à l’expertise du
                            champ sémantique de votre codeO</P>
                    </div>

                </div>
            </div>

        </div>

    </main>

</template>

<style scoped>
.mainServices {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #2F435A;
    ;
    font-family: "Montserrat", sans-serif;

}

.entete {
    color: #9DB6CC;
    font-family: "Montserrat", sans-serif;
    font-size: 26px;
    font-weight: 500;
    font-style: normal;
    margin: 115px 0 45px 25px;
}

.offrePremiere {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 15px 55px 55px;

}

h1 {
    color: #E4D4C8;
    width: 58%;
    letter-spacing: 4px;
    text-align: left;
    font-family: "Libre Baskerville", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 46px;
    margin-bottom: 32px;
    margin-left: 55px;
}

.creation {
    /* background-color: red; */
    width: 60%;
    height: 100%;
}

.creaTxt {
    width: 60%;
    color: #9DB6CC;
    font-size: 21px;

}

.offreAnnexe {
    background-color: #9DB6CC;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
}

.entete2 {
    color: #2F435A;
    font-family: "Montserrat", sans-serif;
    font-size: 26px;
    font-weight: 500;
    font-style: normal;
    margin: 15px 15px 55px 55px;
}

.h1blue {
    color: #2F435A;
    font-size: 63px;
}

.creaIcon {
    margin-left: 55px;
}

.cardTxt,
p {
    font-size: 21px;
}

.imgCard {
    width: 88%;
}

.subtitle {
    font-size: 28px;
    max-width: 60%;
}

.annexeTitle {
    margin-bottom: 25px;
}

.annexeCards,
p {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px 25px 0 55px;
    color: #2F435A;
}

.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #2F435A;
    border-radius: 20px;
    margin: 12px 34px;
    width: 350px;
}
</style>