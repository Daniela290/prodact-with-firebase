<template>
  <form class="form" @submit.prevent="submitHandler()">

    <div class="form__box form__box--login"
         :class="{'form__box--show':!isShowRegisterInput}">
      <input type="email" placeholder="Email"
             class="form__input"
             v-model="email">

      <input type="password" placeholder="Password"
             class="form__input"
             v-model="password">
    </div>

    <div class="form__box form__box--register"
         :class="{'form__box--show':isShowRegisterInput}">
      <input type="text" placeholder="Name"
             class="form__input"
             v-model="name">

      <input type="email" placeholder="Email"
             class="form__input"
             v-model="email">

      <input type="password" placeholder="Password"
             class="form__input"
             v-model="password">

      <input type="password" placeholder="Password"
             class="form__input">
    </div>

    <div class="form__submit-s">
      <button type="submit" class="form__submit form__submit--login btn"
              :class="{'form__submit--show':!isShowRegisterInput}">Log In
      </button>

      <button type="submit" class="form__submit form__submit--register btn"
              :class="{'form__submit--show':isShowRegisterInput}">Register
      </button>

    </div>

  </form>
</template>

<script>
export default {
  name: "login-form",
  props: {
    typeForm: {
      type: String,
      default: () => 'login'
    }
  },
  computed: {
    submitText() {
      return this.typeForm === 'login' ? 'Log In' : 'Register'
    },
    isShowRegisterInput() {
      return this.typeForm === 'register' ? true : false
    },
  },
  data() {
    return {
      name: '',
      email: "",
      password: ""
    }
  },
  methods: {
    async submitHandler() {
      const data = {
        email: this.email,
        password: this.password,
        name: this.name
      }
      if (!this.isShowRegisterInput) {
        await this.$store.dispatch('LOG_IN_USER', data)
            .then(() => {
              this.$router.push({name: 'home'})
            })
      } else {
        await this.$store.dispatch('REGISTER_USER', data)
            .then(() => {
              this.$router.push({name: 'home'})
            })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  position: relative;
  margin: 60px 0 20px 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  &__input {
    width: 100%;
    min-width: 250px;
    height: 46px;
    border-radius: 15px;
    border: 1px solid rgba(36, 31, 96, .5);
    box-sizing: border-box;
    padding-left: 20px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.05em;
    font-size: 14px;
    color: rgba(36, 31, 96, .7);
  }

  &__submit {
    width: 40%;
    position: absolute;
    font-size: 16px;
    margin-top: 15px;
    background: linear-gradient(to right, rgba(72, 15, 112, .7), rgba(23, 112, 193, 0.7));
    color: #FFFFFF;
    border: none;
    text-align: center;
    height: 46px;

    &--register {
      top: 300px;
      left: 50%;
      opacity: 0;
    }

    &--login {
      top: 150px;
      left: 0%;
      opacity: 0;
    }

    &--show {
      left: 30%;
      opacity: 1;
    }
  }

  &__box {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    gap: 25px;
    transition: .3s linear;

    &--register {
      left: 10%;
      opacity: 0;
    }

    &--login {
      left: 0%;
      opacity: 0;
    }

    &--show {
      top: 0%;
      left: 5%;
      opacity: 1;
    }
  }
}

@media screen and (max-width: 1050px) {
  .form {
    margin: 50px 0 20px 0;

    &__input {
      min-width: 200px;
      height: 40px;
      border-radius: 10px;
      padding-left: 15px;
      font-size: 12px;
    }

    &__submit {
      font-size: 14px;
      margin-top: 15px;
      height: 40px;

      &--register {
        top: 260px;
      }

      &--login {
        top: 125px;
      }
    }
  }
}

@media screen and (max-width: 850px) {
  .form {
    margin: 50px 0 20px 0;

    &__input {
      min-width: 200px;
      height: 38px;
      border-radius: 10px;
      padding-left: 15px;
      font-size: 12px;
    }

    &__submit {
      font-size: 13px;
      margin-top: 15px;
      height: 38px;

      &--register {
        top: 260px;
      }

      &--login {
        top: 125px;
      }
    }
  }
}

@media screen and (max-width: 585px) {
  .form {
    margin: 40px 0 20px 0;

    &__input {
      min-width: 140px;
      height: 36px;
      border-radius: 10px;
      padding-left: 15px;
      font-size: 11px;
    }

    &__submit {
      font-size: 12.5px;
      margin-top: 15px;
      height: 36px;
      padding: 7px 5px !important;

      &--register {
        top: 245px;
      }

      &--login {
        top: 120px;
      }
    }
  }
}
</style>