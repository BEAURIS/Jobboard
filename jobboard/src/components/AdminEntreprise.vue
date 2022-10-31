<template>
    <router-view></router-view>
    <div>
        <h2>Entreprises</h2>
        <table>
            <tbody>

                <tr>
                    <th>Nom</th>
                    <th>Siège social</th>
                    <th>Taille</th>
                    <th>Chiffre d'affaires</th>
                    <th>Lien</th>
                    <th>Secteur</th>
                    <th>Actions</th>
                </tr>
                <tr v-for="advertisement in advertisements" :key="advertisement.id">
                    <td>{{ advertisement.nom_entreprise }}</td>
                    <td>{{ advertisement.siege_social }}</td>
                    <td>{{ advertisement.taille_entreprise }}</td>
                    <td>{{ advertisement.chiffre_affaire }}</td>
                    <td>{{ advertisement.lien_entreprise }} </td>
                    <td>{{ advertisement.secteur_entreprise }}</td>
                    <td>
                       <button @click="update">Modifier</button>
                        <button @click="delCompany(advertisement.id)">Supprimer</button>
                    </td>

                </tr>

            </tbody>

        </table>
        <button><router-link to="/createEntreprise">Ajouter une entreprise</router-link></button>
    </div>
</template>

<script>
import axios from 'axios';
export default {

    data() {
        return {
            advertisements: [],
            companies: null,
        }
    },

    mounted() {
        axios.get("http://127.0.0.1:8000/api/companies/")
            .then((res) => {
                console.log(res.data);
                this.advertisements = res.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },



    methods: {
        delCompany(id) {
            if (!confirm("Are you sure you want to delete this ?")) {
                return;
            }
            axios.delete("http://127.0.0.1:8000/api/companies/" + id)
                .then((res) => {
                    console.log(res.data);
                    this.advertisements = res.data;
                })
                .catch((error) => {
                    console.log(error);
                }).finally(() => {
                    window.location.reload();
                });

        },
        update() {
            this.$router.replace(this.$route.query.redirect || '/editentreprise');
        }

       /*  update(status) {
            var data = {
                nom_entreprise:    this.companies.nom_entreprise,
                siege_social:    this.companies.siege_social,
                taille_entreprise:    this.companies.taille_entreprise,
                chiffre_affaire:    this.companies.chiffre_affaire,
                secteur_entreprise:  this.companies.secteur_entreprise,
                lien_entreprise:    this.companies.lien_entreprise,
                published: status
            };
            axios.update(`http://127.0.0.1:8000/api/companies/` +id)
            .then((res) => {
                this.companies.published = status;
                this.message = "Status updated successfully.";
            }).catch((e) => {
                console.log(e);
        });
        } */
    }
}


</script>

<style>
div {
    align-content: center;
}

th,
td {
    padding: 5px;
    text-align: center;
}
</style>