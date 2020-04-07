import authAxios from '@/axios-auth';

export default {
    data: function () {
        return {
            userInfo: {},
            loader: false
        }
    },
    methods: {
        async signIn(payload) {
            this.loader = true;
            try {
                authAxios
                    .post(
                        '/accounts:signInWithPassword',
                        payload
                    )
                    .then(res => {
                        const { idToken, localId } = res.data;

                        localStorage.setItem("token", idToken);
                        localStorage.setItem("userId", localId);

                        this.loader = false;

                        this.$router.push("/");
                    })
            } catch (err) {
                console.log(err);
            }
        },
        async signUp(payload) {
            this.loader = true;
            try {
                authAxios
                    .post(
                        "/accounts:signUp",
                        payload
                    )
                    .then(res => {
                        const { idToken, localId } = res.data;

                        localStorage.setItem('token', idToken);
                        localStorage.setItem('userId', localId);

                        this.loader = false;

                        this.$router.push('/');
                    })
            } catch (err) {
                console.log(err);
            }
        },
        async getUserData(payload) {
            this.loader = true;
            try {
                authAxios
                    .post("/accounts:lookup", payload)
                    .then((res) => {
                        this.userInfo = res.data.users[0];
                        this.loader = false;
                    })
            } catch (err) {
                console.log(err);
            }
        },

    }
}