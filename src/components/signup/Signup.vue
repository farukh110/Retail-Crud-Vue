<template>

    <section class="signup-container outer-container">

        <div class="middle-container">

            <div class="container">

                <div class="row justify-content-center">

                    <div class="col-md-4">

                        <div class="main-form">

                            <img class="img-fluid" src="../../assets/Black-Logo.svg" />

                            <input type="text" v-model="name" class="form-control mt-md-3" placeholder="enter name" />

                            <input type="text" v-model="email" class="form-control mt-md-3" placeholder="enter email" />

                            <input type="password" v-model="password" class="form-control mt-md-3"
                                placeholder="enter password" />

                            <div class="row justify-content-center">

                                <div class="col-md-6">

                                    <button v-on:click="signUp" class="btn btn-success mt-md-3 w-100"> signup </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>


    </section>

</template>

<script>

import axios from 'axios';

export default {
    name: 'Signup',

    data() {

        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {

            // console.warn("created account", this.name, this.email, this.password);

            let result = await axios.post("http://localhost:3000/users", {

                name: this.name,
                email: this.email,
                password: this.password
            });

            console.log(result);

            if (result.status == 201) {

                console.log("signup done");

                localStorage.setItem("user-info", JSON.stringify(result.data));

                this.$router.push({ name: 'Home' });
            }
        }
    },
    mounted() {

        let user = localStorage.getItem("user-info");

        if (user) {

            this.$router.push({ name: 'Home' });
        }
    },

}

</script>

<style>
.signup-container {

    background: -webkit-gradient(linear, left top, left bottom, from(to right), color-stop(#489c6d), color-stop(#5dbe79), to(#5dbe79)) !important;
    background: linear-gradient(to right, #489c6d, #5dbe79, #5dbe79) !important;
    background-attachment: fixed !important;
    background-repeat: repeat-y;
}

.main-form {
    box-shadow: 0px 0px 8px 2px #e4bebe;
    border-radius: 10px;
    padding: 30px;
    background: #fff;
}

.outer-container {
    display: table;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.middle-container {
    display: table-cell;
    vertical-align: middle;
}

.inner-container {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}
</style>