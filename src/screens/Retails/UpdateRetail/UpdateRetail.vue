<template>

    <Header />

    <div class="container mt-md-4">
        <h1> Update Retail </h1>

        <div class="row justify-content-center">

            <div class="col-md-6">

                <!-- <form> -->

                <input type="text" name="name" v-model="retails.name" class="form-control" placeholder="Enter Name" />

                <input type="text" name="contact" v-model="retails.contact" class="form-control mt-md-3"
                    placeholder="Enter Contact Number" />

                <input type="text" name="address" v-model="retails.address" class="form-control mt-md-3"
                    placeholder="Enter your address" />

                <button v-on:click="updateRetails" class="btn btn-success mt-md-3"> Update Retail </button>

                <!-- </form> -->

            </div>

        </div>

    </div>

</template>

<script>

import Header from '../../../components/Header/Header.vue';
import axios from 'axios';

export default {

    name: 'UpdateRetail',
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

        async updateRetails() {

            console.log(this.retails);
            const result = await axios.put('http://localhost:3000/retails/' + this.$route.params.id, {

                name: this.retails.name,
                contact: this.retails.contact,
                address: this.retails.address
            });

            if (result.status == 200) {

                this.$router.push({ name: 'Home' });
            }
        }
    },
    async mounted() {

        let user = localStorage.getItem('user-info');

        if (!user) {

            this.$router.push({ name: 'Signup' });
        }

        console.log(this.$route.params.id);

        const result = await axios.get('http://localhost:3000/retails/' + this.$route.params.id);

        console.log(result.data);
        this.retails = result.data
    },
}

</script>

<style>

</style>