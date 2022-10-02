<template>

    <Header />

    <div class="container mt-md-4">

        <h2> Welcome {{ name }} </h2>

        <div class="row justify-content-center mt-md-4">

            <div class="col-md-10">

                <table class="table table-bordered text-left">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Address</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in retails" :key=item.id>

                            <td>1</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.contact }}</td>
                            <td>{{ item.address }}</td>
                            <td>
                                <router-link class="btn btn-success" :to="'/update-retail/'+item.id"> update
                                </router-link>
                                <br /><br />
                                <button class="btn btn-dark" v-on:click="deleteRetails(item.id)"> delete
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>

        </div>

    </div>

</template>

<script>

import Header from '../../components/Header/Header.vue'
import axios from 'axios';

export default {

    name: 'Home',
    components: {
        Header
    },
    data() {

        return {
            name: '',
            retails: []
        }
    },
    methods: {
        async deleteRetails(id) {

            console.log(id);
            let result = axios.delete('http://localhost:3000/retails/' + id);

            if (result.status == 200) {

                this.loadData();
            }
        },
        async loadData() {

            let user = localStorage.getItem("user-info");

            this.name = JSON.parse(user).name;

            if (!user) {

                this.$router.push({ name: 'Signup' });
            }

            let result = await axios.get('http://localhost:3000/retails');

            console.log("result", result);

            this.retails = result.data;
        }
    },
    async mounted() {

        this.loadData();
    },
}

</script>

<style>

</style>