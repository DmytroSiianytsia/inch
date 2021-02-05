<template>
  <div class="container">
    <div class="main">
      <div class="left-bar">
        <div class="left-bar__header">
          <router-link class="left-bar__btn" to="/">
            <img
              class="header-icon header-icon_home"
              src="../assets/home.svg"
              alt="link to home"
            />
          </router-link>
          <div class="left-bar__btn" @click="refresh">
            <img
              class="header-icon header-icon_refresh"
              src="../assets/refresh.svg"
              alt="refresh"
            />
          </div>
        </div>
        <div class="left-bar__content">
          <h2 class="left-bar__param">Параметры:</h2>
          <div class="left-bar__items">
            <div class="left-bar__item">
              <img
                class="content-icon"
                id="sad"
                src="../assets/sad_icon.svg"
                alt="sad icon"
              />
              <div class="statistic">{{ params.sad }}</div>
            </div>
            <div class="left-bar__item">
              <img
                class="content-icon"
                src="../assets/happy_icon.svg"
                alt="happy icon"
              />
              <div class="statistic">{{ params.happy }}</div>
            </div>
            <div class="left-bar__item">
              <img
                class="content-icon"
                src="../assets/heart_icon.svg"
                alt="heart icon"
              />
              <div class="statistic">{{ params.heart }}</div>
            </div>
          </div>
        </div>
        <div class="left-bar__footer">
          <div class="left-bar__footer-title">Осталось в очереди:</div>
          <div class="left-bar__queue">
            <span>{{ numClient + 1 }}</span> / {{ queue }}
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content__card">
          <Card :client="clients[numClient]" :drugN="drugN" />
        </div>
        <div class="content__buttons">
          <button
            class="content__button content__button_purple"
            :class="{ disabledBtn: isDisabled }"
            @click="increaseParam('sad', 'drug1', 'left')"
            :disabled="isDisabled"
          >
            Препарат 1
          </button>
          <button
            class="content__button content__button_blue"
            :class="{ disabledBtn: isDisabled }"
            @click="increaseParam('happy', 'drug2', 'top')"
            :disabled="isDisabled"
          >
            Препарат 2
          </button>
          <button
            class="content__button content__button_yellow"
            :class="{ disabledBtn: isDisabled }"
            @click="increaseParam('heart', 'drug3', 'right')"
            :disabled="isDisabled"
          >
            Препарат 3
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue"
import client1 from "../assets/client1.png"
import client2 from "../assets/client2.png"
import client3 from "../assets/client3.png"
import client4 from "../assets/client4.png"
import client5 from "../assets/client5.png"

export default {
  name: "Main",
  components: { Card },
  data() {
    return {
      clients: [
        {
          id: 1,
          img: client1,
          title: "Марія, 19 років",
          text:
            "Бабуся приймає брендовий препарат від болю в суглобах, він допомагає, але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд.",
        },
        {
          id: 2,
          img: client2,
          title: "Степан, 61 рік",
          text:
            "Спросоння відсунув гарячий чайник рукою та обпікся. У Вас всі ліки від опіків такі дорогі? Можна хороший препарат недорого?",
        },
        {
          id: 3,
          img: client3,
          title: "Любов, 58 років",
          text:
            "Лікар призначив препарат від артеріальної гіпертензії, а бренд дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною.",
        },
        {
          id: 4,
          img: client4,
          title: "Олександр, 20 років",
          text:
            "Порекомендуйте ефективний препарат від болю в горлі за розумну ціну.",
        },
        {
          id: 5,
          img: client5,
          title: "Ірина, 55 років",
          text:
            "У мене часто невралгії, лікар призначив вітаміни групи В. Мені потрібен якісний аналог за прийнятною ціною.",
        },
      ],
      params: {
        sad: 0,
        happy: 0,
        heart: 0,
      },
      queue: 5,
      numClient: 0,
      isDisabled: false,
      drugN: "",
    }
  },
  methods: {
    increaseParam(param, drug, direction) {
      setTimeout(() => {
        this.move(direction)
      }, 300)

      const { sad, happy, heart } = this.params
      const sum = sad + happy + heart

      this.setDrugN(drug)

      if (this.numClient + 1 === this.queue) {
        this.isDisabled = true
        setTimeout(() => {
          this.$router.push({ name: "final", params: this.params })
        }, 800)
      }

      this.isDisabled = true

      setTimeout(() => {
        this.numClient < 4 && this.numClient++
        this.drugN = ""
        this.isDisabled = false
      }, 800)

      sum < 5 && this.params[param]++
    },

    setDrugN(drug) {
      this.drugN = drug
    },

    refresh() {
      this.params = {
        sad: 0,
        happy: 0,
        heart: 0,
      }
      this.numClient = 0
    },

    move(direction) {
      const card = document.querySelector(".card")
      let start = Date.now()
      let degr = 0

      const timer = setInterval(() => {
        let timePassed = Date.now() - start

        if (timePassed > 800) {
          card.style.right = null
          card.style.left = null
          card.style.top = null
          card.style.transform = "rotate(0deg)"
          card.style.opacity = 1

          clearInterval(timer)
          return
        }

        card.style[direction] = -timePassed + "px"
        card.style.transform =
          direction === "right" ? `rotate(${degr}deg)` : `rotate(-${degr}deg)`
        card.style.opacity = 2 / degr
        degr += 1
      }, 20)
    },
  },
}
</script>

<style lang="scss">
.main {
  display: flex;
}

.left-bar {
  width: 33%;
  min-height: calc(100vh - 70px);
  padding-top: 70px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: linear-gradient(63.53deg, #2d8550 16.62%, #5e6ec2 83.38%);
  opacity: 0.7;
  color: white;

  &__header {
    display: flex;
    margin-left: 50px;
  }

  &__btn {
    display: inline-block;
    width: 70px;
    height: 70px;
    background: white;
    border-radius: 50%;

    &:last-child {
      margin-left: 38px;
      cursor: pointer;
    }
  }

  .header-icon {
    margin-top: 18px;
    width: 34px;
    height: 34px;

    transition: all 0.5s;

    &_home:hover {
      transform: rotateY(180deg);
    }

    &_refresh:hover {
      transform: rotate(180deg);
    }
  }

  &__param {
    margin-left: 40px;
    text-align: left;
    font-size: 36px;
    font-weight: 600;
  }

  &__items {
    margin-left: 40px;
    width: 400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__item {
    width: 190px;
    height: 80px;
    margin-bottom: 40px;
    padding: 10px;

    display: flex;
    box-sizing: border-box;

    background: white;
    border-radius: 40px;

    &:last-child {
      margin: 0 auto;
    }
  }

  .content-icon {
    width: 60px;
    height: 60px;
    margin-right: 10px;
  }

  .statistic {
    width: 100px;
    font-size: 48px;
    font-weight: bold;
    color: #202020;
  }

  &__footer {
    height: 134px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    font-size: 36px;
    font-weight: 200;

    background: rgba(255, 255, 255, 0.15);
  }

  &__queue span {
    font-weight: bold;
    opacity: 1;
  }
}

.content {
  min-width: 67%;
  min-height: calc(100vh - 70px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: white;
  overflow: hidden;

  &__card {
    margin: 130px auto 0;
  }

  &__buttons {
    margin-bottom: 64px;
    padding: 0 25px;
    display: flex;
    justify-content: space-between;
  }

  &__button {
    width: 280px;
    height: 90px;

    font-size: 28px;
    font-weight: bold;

    border-radius: 100px;
    border: 0;
    color: white;
    outline: none;
    cursor: pointer;
    transition: transform 0.5s;

    &:hover {
      transform: scale(1.05);
    }
  }

  &__button_purple {
    background: linear-gradient(266.19deg, #8049c7 0%, #ca57fd 100%);
  }

  &__button_blue {
    background: linear-gradient(266.19deg, #169ae4 0%, #0cc4fa 100%);
  }

  &__button_yellow {
    background: linear-gradient(
      90deg,
      #ffd748 0.02%,
      rgba(195, 199, 11, 0.96) 99.97%,
      #cac6ab 99.98%,
      #d3e9e1 99.99%
    );
  }

  .disabledBtn {
    opacity: 0.3;
  }
}
</style>
