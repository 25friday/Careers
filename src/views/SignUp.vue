<template>
    <div class="sign-up">
        <p>Let's create a new account !</p>
        <input type="text" placeholder="Email" v-model="email"><br>
        <input type="password" placeholder="Password" v-model="password"><br>
        <button @click="signUp">Sign up</button>
    </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: "SignUp",
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            signUp() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    function (user) {
                        alert("You account has been created");
                    },
                    function(err){
                        alert("Error " + err.message);
                    }
                );
            }
        }
    }
</script>

<style scoped>

</style>