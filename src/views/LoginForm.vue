<template>
  <div class="login">

    <div class="form-box"
         :class="formBoxHeihht">

      <div class="btn-box">

        <div class="btn-box__tumbler"
             :class="typeForm!=='login'?'btn-box__tumbler--end':'btn-box__tumbler--start'"></div>

        <button ref="loginBtn"
                name="login" type="button"
                class="btn-box__value btn-box--btn--active btn"
                @click="handlerClick($event)">
          Log in
        </button>

        <button ref="registerBtn"
                name="register" type="button"
                class="btn-box__value btn"
                @click="handlerClick($event)">
          Register
        </button>

      </div>

      <forms :type-form="typeForm"/>

    </div>

  </div>
</template>

<script>
import forms from '../components/forms/forms'

export default {
  name: "LoginForm",
  methods: {
    handlerClick(event) {
      if (event.target.name === 'login') {
        this.$refs.loginBtn.className = 'btn-box__value btn-box--btn--active'
        this.$refs.registerBtn.className = 'btn-box__value '
        this.typeForm = 'login'
      } else {
        this.$refs.registerBtn.className = 'btn-box__value btn-box--btn--active'
        this.$refs.loginBtn.className = 'btn-box__value '
        this.typeForm = 'register'
      }
    }
  },
  components: {forms},
  data() {
    return {
      typeForm: 'login'
    }
  },
  computed: {
    formBoxHeihht() {
      return {
        'form-box--height--register': this.typeForm === 'register',
        'form-box--height--login': this.typeForm === 'login',
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/variables";

.login {
  width: 100%;
  height: 100vh;
  min-height: 800px;
  background-image: url("../assets/image/header/headr-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  padding: 100px $wrap-padding 20px $wrap-padding;
}

.form-box {
  max-width: 500px;
  width: 40%;
  position: relative;
  margin: 6% auto;
  background: #FFFFFF;
  padding: 5px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 20px rgba(255, 255, 255, .7);
  transition: .2s linear;

  &--height--login {
    height: 410px;
  }

  &--height--register {
    height: 580px;
  }

}

.btn-box {
  width: 280px;
  margin: 35px auto;
  position: relative;
  box-shadow: 0 0 20px 8px rgba(36, 31, 96, .5);
  border-radius: 30px;
  display: flex;
  height: 46px;

  &__tumbler {
    top: 0;
    position: absolute;
    width: 50%;
    height: 100%;
    background: linear-gradient(to right, rgba(72, 15, 112, .7), rgba(23, 112, 193, 0.7));
    border-radius: 30px;
    color: #FFFFFF;
  }

  &__tumbler--start {
    left: 0;
    transition: .3s linear;
  }

  &__tumbler--end {
    left: 50%;
    transition: .3s linear;
  }

  &__value {
    width: 50%;
    color: rgb(14, 3, 33);
    padding: 15px;
    font-size: 16px;
    background: transparent;
    border: 0;
    outline: none;
    text-align: center;
    position: relative;
  }

  &--btn--active {
    color: #FFFFFF;
    transition: color .4s linear;
  }
}

@media screen and (max-width: 1050px) {
  .btn-box {
    width: 250px;
    margin: 28px auto;
    box-shadow: 0 0 10px 5px rgba(36, 31, 96, .5);
    height: 40px;

    &__value {
      padding: 0;
      font-size: 14px;
    }
  }

  .form-box {
    max-width: 400px;
    width: 70%;

    &--height--login {
      height: 365px;
    }

    &--height--register {
      height: 500px;
    }

  }
}

@media screen and (max-width: 850px) {
  .btn-box {
    width: 220px;
    margin: 28px auto;
    height: 38px;

    &__value {
      font-size: 13px;
    }
  }

  .form-box {
    max-width: 300px;
    width: 80%;

    &--height--login {
      height: 345px;
    }

    &--height--register {
      height: 485px;
    }
  }

  .login {
    padding: 80px 10px 20px 10px;
  }
}

@media screen and (max-width: 585px) {
  .btn-box {
    width: 170px;
    margin: 24px auto;
    height: 36px;

    &__value {
      font-size: 12.5px;
    }
  }

  .form-box {
    max-width: 290px;
    width: 90%;

    &--height--login {
      height: 314px;
    }

    &--height--register {
      height: 435px;
    }
  }
}

</style>