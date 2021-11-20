<template>
  <div class="nav">

    <div class="logo ">
      <div class="logo__icon logo__title">D</div>
      <div class="logo__title nav--logo--color">DSGNPOD</div>
    </div>

    <div class="nav__menu">

      <div class="nav__navigation-link"
           v-for="(link,index) in navLink"
           :key="index"
           @click="$router.push({name:'home'})">
        {{ link.title }}
      </div>

      <div class="nav__btn-wrapper" v-if="!isExistsUser">
        <button class="btn--from--navbar btn"
                @click="$router.push({name:'login'})">Sign up
        </button>
      </div>
      <div class="nav__user-data" v-if="isExistsUser">

        <span>{{ currentUser.name }}</span>

        <el-tooltip class="item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">
          <button class="btn btn--go-out"
                  @click="LOG_OUT_USER">
            <ion-icon name="log-out-outline"></ion-icon>
          </button>
        </el-tooltip>

      </div>

    </div>

  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: "Navbar",
  data() {
    return {
      navLink: [
        {title: 'Home', linkRef: ''},
        {title: 'Episodes', linkRef: ''},
        {title: 'About', linkRef: ''},
        {title: 'Shop', linkRef: ''},
        {title: 'Contact', linkRef: ''},
      ]
    }
  },
  computed: {
    ...mapState(['currentUser']),
    isExistsUser() {
      return this.currentUser.name ? true : false
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll)
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  methods: {
    ...mapActions(['GET_CURRENT_USER', 'LOG_OUT_USER']),
    handleScroll() {
      const nav = document.getElementsByClassName('nav')[0]
      if (window.scrollY !== 0) {
        nav.className = 'nav nav--with-bg'
      } else nav.className = 'nav nav--without-bg'
    }
  },
  async mounted() {
    await this.GET_CURRENT_USER()
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
@import "../assets/styles/fonts.scss";

.nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  padding: 25px $wrap-padding;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  &--with-bg {
    background-image: url("../assets/image/header/headr-bg.png");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
  }

  &--without-bg {
    background: transparent
  }

  &--logo--color {
    color: #FFFFFF;
  }

  &__menu {
    display: flex;
    gap: 40px;
    align-items: center;
  }

  &__navigation {
    display: flex;
  }

  &__btn-wrapper {
    width: 140px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__navigation-link {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    opacity: 0.8;
    transition: .3s linear;
    cursor: pointer;
  }

  &__navigation-link:nth-of-type(1) {
    width: 48px;
    height: 24px;
  }

  &__navigation-link:nth-of-type(2) {
    width: 69px;
    height: 24px;
  }

  &__navigation-link:nth-of-type(3) {
    width: 48px;
    height: 24px;
  }

  &__navigation-link:nth-of-type(4) {
    width: 42px;
    height: 24px;
  }

  &__navigation-link:nth-of-type(5) {
    width: 64px;
    height: 24px;
  }

  &__navigation-link:hover {
    font-size: 16px;
    opacity: 1;
  }

  &__user-data {
    color: #FFFFFF;
    font-family: Poppins;
    font-weight: normal;
    font-size: 17px;
    font-style: normal;
    line-height: 21px;
    letter-spacing: 0.02em;
    opacity: 0.8;
    transition: .3s linear;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    span {
      position: relative;
    }

    span::before {
      content: '';
      width: 100%;
      height: 1px;
      background: rgba(255, 255, 255, .6);
      position: absolute;
      bottom: -10px;
    }
  }
}

.el-tooltip__popper.is-dark {
  background: rgba(255,255,255,.6) !important;
  color: #37187e;
  border: none;
}
.el-tooltip__popper[x-placement^=bottom] .popper__arrow::after {
  top: 1px;
  margin-left: -5px;
  border-top-width: 0;
  border-bottom-color: (255,255,255,.6) !important;
}
 .el-tooltip__popper[x-placement^=bottom] {
   margin-top: 12px;
 }
 .el-tooltip__popper {
   position: absolute;
   border-radius: 4px;
   padding: 10px;
   z-index: 2000;
   font-size: 12px;
   font-family: Poppins;
   line-height: 1.2;
   min-width: 10px;
   word-wrap: break-word;
 }

@media screen and (max-width: 1060px) {
  .nav {
    padding: 20px 40px;
  }
}

@media screen and (max-width: 900px) {
  .nav {
    padding: 15px 40px;

    &__menu {
      gap: 20px;
    }

    &__btn-wrapper {
      width: 120px;
      height: 40px;
    }
  }
}

@media screen and (max-width: 850px) {
  .nav {
    &__btn-wrapper {
      width: 110px;
    }
  }
}

@media screen and (max-width: 790px) {
  .nav {
    padding: 15px 40px;

    &__menu {
      gap: 10px;
    }

    &__navigation-link {
      font-size: 12px;
      line-height: 18px;
    }
  }
}

@media screen and (max-width: 700px) {
  .nav {
    &__navigation-link {
      display: none;
    }

    &__menu {
      gap: 0;
    }
  }
}

@media screen and (max-width: 460px) {
  .nav {
    padding: 17px 10px;
  }
}

</style>