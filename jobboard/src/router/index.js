import { createRouter, createWebHistory } from 'vue-router'
import Annonces from '../views/Annonces.vue';
import Profil from '../views/Profile.vue';
import Home from '../views/Home.vue';
import AdEntreprise from '../views/AdEntreprise.vue';
import CreateEntreprise from '../views/CreateEntreprise.vue';
import EditEntreprise from '../views/EditEntreprise.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/annonces',
      name: 'annonces',
      component: Annonces
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profil

    },        
    {
      path: '/adentreprises',
      name: 'entreprises',
      component: AdEntreprise,
    },
    {
      path: '/createEntreprise',
      name: 'createEntreprise',
      component: CreateEntreprise,
    },
    {
      path: '/editEntreprise',
      name: 'editEntreprise',
      component: EditEntreprise
    }
    

  ]
})

export default router;
