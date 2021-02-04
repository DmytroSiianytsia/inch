<template>
  <div class="final-pg">
    <router-link class="final-pg__link" to="/">
      <img
        class="final-pg__icon"
        src="../assets/home-white.svg"
        alt="link to home"
      />
    </router-link>
    <img
      class="final-pg__picture"
      src="../assets/final-pg.png"
      alt="pharmacist"
    />
    <div class="final-pg__content">
      <div class="final-pg__statistic">
        <div
          class="final-pg__statistic-item"
          v-for="(param, key, idx) in params"
          :key="key"
        >
          <div class="final-pg__percents">{{ param && param * 20 }}%</div>
          <div class="final-pg__drug">Препарат {{ idx + 1 }}</div>
        </div>
      </div>
      <h2 class="final-pg__subtitle">Ваш результат:</h2>
      <h1 class="final-pg__title">«Что я здесь делаю?»</h1>
      <p class="final-pg__text">
        Это тестовое задание, так что не будем углубляться в глубины проблем
        фармацевтов.
      </p>
    </div>
    <router-link class="final-pg__btn" to="/main">Попробовать еще</router-link>
  </div>
</template>

<script>
export default {
  name: "final",
  data() {
    return {
      params: null,
    }
  },
  mounted() {
    this.params = this.$route.params
  },
}
</script>

<style lang="scss">
.final-pg {
  position: relative;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: white;

  &__link {
    position: absolute;
    left: 50px;
    top: 70px;
    display: inline-block;
    width: 70px;
    height: 70px;

    border-radius: 50%;
    background: linear-gradient(63.53deg, #2d8550 16.62%, #5e6ec2 83.38%);
  }

  &__icon {
    margin-top: 19px;
    width: 34px;
    height: 32px;
  }

  &__picture {
    position: absolute;
    right: 0;
    top: 0;
  }

  &__content {
    width: 580px;
    margin-left: 130px;
    text-align: start;
  }

  &__statistic-item {
    padding: 0 20px 50px;
  }

  &__statistic {
    display: flex;
    justify-content: space-between;
    text-align: center;
    border-bottom: 2px solid #d9d9d9;
    margin-bottom: 40px;
  }

  &__percents {
    font-size: 48px;
    margin-bottom: 20px;
  }

  &__drug {
    font-weight: bold;
  }

  &__subtitle {
    margin-bottom: 0;
    color: #8e9ad5;
  }

  &__title {
    margin-top: 0;
    color: #8e9ad5;
  }

  &__text {
    line-height: 24px;
    letter-spacing: 0.04em;
  }

  &__btn {
    width: 270px;
    height: 60px;
    position: absolute;
    left: 130px;
    bottom: 84px;

    font-size: 24px;
    font-weight: bold;
    line-height: 60px;
    text-decoration: none;
    color: white;

    background: linear-gradient(90deg, #d9d9d9 0%, #a1a1a1 100%);
    border-radius: 100px;
  }
}
</style>
