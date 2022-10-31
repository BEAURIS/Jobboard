<template>
    <div>
        <h2>Modifier une entreprise</h2>

        <form v-on:submit.prevent="updateCompany">
            <div>
                <label for="nom_entreprise">Nom de l'entreprise</label>
                <input type="text" v-model="form.nom_entreprise">
            </div>
            <div>
                <label for="siege_social">Siège social</label>
                <input type="text" v-model="form.siege_social">
            </div>

            <div>
                <label for="taille_entreprise">Taille de l'entreprise</label>
                <input type="text" v-model="form.taille_entreprise">
            </div>
            <div>
                <label for="chiffre_affaire">Chiffre d'affaire</label>
                <input type="text" v-model="form.chiffre_affaire">
            </div>
            <div>
                <label for="secteur_entreprise">Secteur</label>
                <input type="text" v-model="form.secteur_entreprise">
            </div>
            <div>
                <label for="lien_entreprise">Lien vers l'entreprise</label>
                <input type="text" v-model="form.lien_entreprise">
            </div>
            <div>
                <button type="submit" @click="submit" >Ajouter</button>
            </div>
        </form>
    </div>
</template>
 
<script>
import axios from "axios";
export default {

    data() {
        return {
            advertisement: [],
            form:{
                    nom_entreprise: "",
                    siege_social: "",
                    taille_entreprise: "",
                    chiffre_affaire: "",
                    secteur_entreprise: "",
                    lien_entreprise: "",
                    isSuccess: false,
                }
        }
    },
    methods: {
       
        updateCompany(id) {
                axios.put(`http://127.0.0.1:8000/companies/{id}`+ id, this.form)
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                }).finally(() => {
                   
                    this.$router.replace(this.$route.query.redirect || '/adentreprises');
                });
        },

    }
}

</script>