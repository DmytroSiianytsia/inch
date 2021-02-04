<template>
  <div class="card">
    <div class="card__picture">
      <img class="card__img" :src="client.img" alt="" />
    </div>
    <div class="card__content">
      <h2 class="card__title">{{ client.title }}</h2>
      <p class="card__text">{{ client.text }}</p>
    </div>
    <div :class="['drug', drugN]">Препарат {{ drugN.slice(-1) }}</div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    client: {
      img: String,
      title: String,
      text: String,
    },
    drugN: String,
  },
}
</script>

<style lang="scss">
.card {
  position: relative;
  width: 540px;
  height: 590px;

  box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4);
  border-radius: 40px;

  &__content {
    width: 420px;
    margin: 0 auto;
    text-align: start;
  }

  &__title {
    margin: 15px 0;
    font-size: 32px;
    line-height: 39px;
    color: #8e9ad5;
  }

  &__text {
    line-height: 24px;
    letter-spacing: 0.02em;
  }
}

.drug {
  position: absolute;
  opacity: 0;
  top: 250px;
  left: 80px;
  width: 360px;
  height: 120px;

  font-size: 52px;
  line-height: 120px;
}

.drug1 {
  color: #8049c7;
  border: 8px solid #8049c7;
  animation: turnLeft 0.3s forwards;
}

.drug2 {
  color: #169ae4;
  border: 8px solid #169ae4;
  animation: turnLeft 0.3s forwards;
}

.drug3 {
  color: #ffb903;
  border: 8px solid #ffb903;
  animation: turnRight 0.3s forwards;
}

@keyframes turnLeft {
  from {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(-30deg);
  }
}

@keyframes turnRight {
  from {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(30deg);
  }
}
</style>
