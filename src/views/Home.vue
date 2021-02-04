<template>
  <div class="home">
    <div class="home__content">
      <h2 class="home__subtitle">Добро пожаловать в игру</h2>
      <h1 class="home__title">Помоги ФАРМАЦЕВТУ</h1>
      <router-link class="home__link" to="/main">Начать</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
}
</script>

<style lang="scss">
.home {
  position: relative;
  width: 1440px;
  min-height: 100vh;
  background-image: url("../assets/start-pg-bg.png");
  background-size: cover;

  &__content {
    position: absolute;
    width: 860px;
    height: 860px;
    left: 110px;
    top: -30px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: start;

    border-radius: 50%;
    color: white;
    background: linear-gradient(63.53deg, #2d8550 16.62%, #5e6ec2 83.38%);
    font-weight: 200;
  }

  &__subtitle {
    width: 580px;
    margin-bottom: 29px;

    font-weight: 200;
    font-size: 35px;
    line-height: 41px;
    letter-spacing: 0.02em;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &__title {
    width: 580px;
    margin-top: 0;
    margin-bottom: 130px;

    font-size: 60px;
    line-height: 66px;
    letter-spacing: 0.02em;
  }

  &__link {
    width: 382px;
    height: 90px;
    text-align: center;

    font-family: Montserrat, sans-serif;
    font-size: 36px;
    line-height: 90px;
    font-weight: 700;

    background: white;
    color: #8e9ad5;
    text-decoration: none;
    border-radius: 50px;
  }
}
</style>
