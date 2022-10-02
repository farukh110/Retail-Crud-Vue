<template>

    <Header />

    <div class="container mt-md-4">
        <h1> Create Retail </h1>

        <div class="row justify-content-center">

            <div class="col-md-6">

                <!-- <form> -->

                <input type="text" name="name" v-model="retails.name" class="form-control" placeholder="Enter Name" />

                <input type="text" name="contact" v-model="retails.contact" class="form-control mt-md-3"
                    placeholder="Enter Contact Number" />

                <input type="text" name="address" v-model="retails.address" class="form-control mt-md-3"
                    placeholder="Enter your address" />

                <button v-on:click="addRetails" class="btn btn-success mt-md-3"> Add Retail </button>

                <!-- </form> -->

            </div>

        </div>

    </div>

</template>

<script>

import Header from '../../../components/Header/Header.vue';
import axios from 'axios';

export default {

    name: 'CreateRetail',
    components: {
        Header
    },
    data() {

        return {
            retails: {
                name: '',
                contact: '',
                address: ''
            }
        }
    },
    methods: {

        async addRetails() {
            console.log("add retail");

            let result = await axios.post('http://localhost:3000/retails', {

                name: this.retails.name,
                contact: this.retails.contact,
                address: this.retails.address
            });

            if (result.status == 201) {

                console.log("added retail center", result);
                this.$router.push({ name: 'Home' });
            }

        }
    },
    mounted() {

        let user = localStorage.getItem('user-info');

        if (!user) {

            this.$router.push({ name: 'Signup' });
        }
    },
}

</script>

<style>

</style>