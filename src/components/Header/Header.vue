<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
            <div class="container-fluid">

                <a class="navbar-brand" href="#">
                    <img class="img-fluid logo-header" src="../../assets/Black-Logo.svg" />
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <li class="nav-item">
                            <router-link to="/" class="nav-link active">Home</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/create-retail" class="nav-link"> Add Retail </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/update-retail" class="nav-link"> Update Retail </router-link>
                        </li>

                    </ul>
                    <div class="d-flex">

                        <button v-on:click="logout" class="btn btn-dark text-light" type="submit"> Login </button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

export default {

    name: 'Header',
    methods: {

        logout() {

            localStorage.clear();
            // console.log("logut");
            this.$router.push({ name: 'Login' });

        }
    }
}

</script>

<style>
.logo-header {
    width: 200px;
}
</style>