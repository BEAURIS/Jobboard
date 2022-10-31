<template>
  <h2>Inscrivez-vous</h2>
  <form @submit.prevent="register">
   
    <p>
      NOM :<br />
      <input v-model="nom" type="text" class="form-control form-control-lg" required />
    </p>
    <p>
      Prénom :<br />
      <input v-model="prenom" type="text" class="form-control form-control-lg" required />
    </p>
    <p>
      Email :<br />
      <input v-model="email" type="email" class="form-control form-control-lg" required />
    </p>
    <p>
      Téléphone :<br />
      <input v-model="tel" type="tel" class="form-control form-control-lg" required/>
      </p>
      <p>
      Mot de passe<br />
      <input v-model="password" type="password" class="form-control form-control-lg" required />
    </p>
    <p>
      Confirmez le mot de passe <br />
      <input v-model="confirm" type="password" class="form-control form-control-lg" required/>
    </p>
   
    
  
    <p>
      <button type="submit" class="btn btn-dark btn-lg btn-block">S'inscrire</button>
    </p>
  </form>
</template>


<script>

import axios from "axios";
export default {
    data() {
        return {
            email: "",
            password: "",
            nom: "",
            prenom: "",
            tel: "",
            confirm: "",
        }
    },
    methods: {
        async register(e) {
            e.preventDefault();
            try {
                if (!(this.confirm === this.password)) alert("Wrong password")
                else {

                    const result = await axios.post("http://127.0.0.1:8000/api/users/", `mail=${this.email}&password=${this.password}&firstName=${this.nom}&name=${this.prenom}&phone=${this.tel}`
                    )
                    this.msg = result.data.result
                }
                if (this.msg === "register done") {
                    alert("Votre compte à été créer avec succes veuillez vous connecter")
                    this.$router.push("/connexion")
                }
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }
    }, 
    
}


</script>

<style scoped>

h2{
text-align: center ;
}

form{
  text-align: center ;
  box-sizing: border-box;

  
}



</style>
