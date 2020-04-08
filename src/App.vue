<template>
  <div id="app">
    <Header @onAuth="isAuth = $event" :isAuth="isAuth" />
      <router-view @onAuth="isAuth = $event" :isAuth="isAuth"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

export default {
  name: 'App',
  data: function() {
    return {
      isAuth: localStorage.getItem('token') !== null
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.loader {
  background: url("assets/loader.svg") no-repeat 0 0;
  width: 200px;
  height: 200px;
  left: -100px;
  margin-left: 50%;
}

a {
  color: #364d65;
  text-decoration: none !important;
}

h1 {
  text-align: center;
}
form {
  margin-top: 20px;
  margin: 20px auto;
  width: 40%;
}

fieldset {
  border-radius: 10px;
  padding: 20px;
}

input {
  flex: 0 1 100%;
  border: 1px solid;
  padding: 5px;
  /* border: 1px solid #007bff; */
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  width: 100%;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0.8em 1.2em;
  width: 100%;
}

button:disabled,
button[disabled] {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}

.blue-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 3px 10px;
  display: inline-block;
  margin-top: 10px;
}

i {
  border: 1px solid;
  border-right: none;
  padding: 10px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: #e9ecef;
}

.content {
  margin: 10px auto;
  width: 750px;
  padding: 15px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(51, 51, 51);
  border-image: initial;
  border-radius: 3px;
}

.container {
  font-family: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

form .field {
  display: flex;
}

/* if error */

p.error {
  text-align: left;
  background-color: #f8d7da;
  padding: 8px;
  border-radius: 3px;
}

input.error {
  border-left-color: #a8413f;
}
</style>
