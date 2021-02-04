<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Avenir";
  src: local("Avenir"), url("./fonts/avenir-reg.otf");
}

@font-face {
  font-family: "Avenir";
  font-weight: bold;
  src: local("Avenir"), url("./fonts/avenir-bold.otf");
}

html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #ccc;
}

.container {
  width: 1440px;
  margin: 0 auto;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
