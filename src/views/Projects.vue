<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
   <v-container class="my-5">
   <v-expansion-panel>
     <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
        <template v-slot:header>
        <div>{{ project.title }}</div>
      </template>
      <v-card-text class="px-4 grey--text">
        <div class="font-weight-bold">due by {{ project.due }}</div>
        <div>{{ project.content }}</div>
        
      </v-card-text>
     </v-expansion-panel-content>
   </v-expansion-panel>
 </v-container>
  </div>

  
</template>

<script>
import db from '@/fb'

  export default {
    data () {
      return {
        projects: []
      }
    },
    //Using the computed property cycle through all projects array and return the updated property array in which person equals the net ninja
    computed: {
      myProjects(){
      return this.projects.filter(project => {
        return project.person === 'The Net Ninja'
      })
      }
    },
    //Get the projects from the database using firestore real time listeners
    created(){
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === 'added'){
        this.projects.push({
          ...change.doc.data(),
          id: change.doc.id
        })
        }
      })
    })
    }
  }
</script>
