<template>
  <div class="about">
    <h1>Available Vacancies</h1>

    <div v-for="vacancie in vacancies">
      <h2>{{vacancie.title}}</h2>
      <p>{{vacancie.description}}</p>
    </div>

  </div>
</template>

<script>
  import { db } from '../main';
  export default {
    name: 'About',
    data() {
      return {
        vacancies: []
      };
    },
    created() {
      db.collection('vacancies').orderBy('created_at').onSnapshot((snapshot) => {
          snapshot.forEach((doc) => {
            this.vacancies.push({ id: doc.id, title: doc.data().title, description: doc.data().description });
          });
      });
    },
    methods: {

    }
  };
</script>
