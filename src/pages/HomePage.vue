<script setup>
import {useStore} from "vuex";
import Menu from 'primevue/menu';

const store = useStore()
const signInState = store.state.auth.signIn
const userData = store.state.auth.userDetails.userData 
const dispKeys={"uid":"uid",'displayName':'Name','email':'email'}

let items= [
				{
					label: 'Update',
					icon: 'pi pi-refresh',
					command: () => {
						this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
					}
				},
				{
					label: 'Delete',
					icon: 'pi pi-times',
					command: () => {
						this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
					}
				},
				{
					label: 'Vue Website',
					icon: 'pi pi-external-link',
					url: 'https://vuejs.org/'
				},
				{
            label: 'Races',
            icon: 'pi pi-clock',
            to: '/races'
        }
			]

</script>

<template>
  <div class="container mx-auto">
    <div class="w-full text-center max-w-lg">
      <h1>Home </h1>
      <div v-if="userData.uid" >
        <table>
          <tr v-for="(v,k) in dispKeys">
            <td>{{v}}</td>
            <td>{{userData[k]}}</td>
          </tr>
        </table>
      </div>
      <div v-else>
        Not logged in
      </div>
      <Menu :model="items" />
      <button class="px-4 py-1 text-sm text-indigo-600  focus:ring-offset-2"
      @click="$router.push('races')">Races</button>
      
    </div>
  </div>
</template>

<style>
  .btn {
    @apply py-2 px-4 font-semibold rounded-lg shadow-md;
  }
  .btn-green {
    @apply text-white bg-green-500 hover:bg-green-700;
  }
</style>