<template>
  <div class="header-content">

    <div class="header-content__before-title">
      <span>MIKE LEWIS</span>
      <span></span>
      <span>PERSONAL BRANDING</span>
    </div>

    <div class="header-content__title">
      Everyday is
      Chance to Learn
      New Things
    </div>

    <div class="header-content__text text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra laoreet in est tortor quam pretium tellus pretium
      sit.
    </div>

    <div class="header-content__btn-s">
      <button class="btn btn--from--header">Start Listening</button>
      <button class="btn btn--from--header">See all Episodes</button>
    </div>

    <div class="header-content__media">

      <span>ALSO FIND US ON :</span>

      <div class="header-content__social-media">
        <span><img src="../../assets/image/header/spotify.png"></span>
        <span><img src="../../assets/image/header/apple.png"></span>
        <span><img src="../../assets/image/header/you-tube.png"></span>
      </div>

    </div>

  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: "header-content",
  mounted() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: .3
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-content')
        } else {
          entry.target.classList.remove('show-content')
          //entry.target.classList.add('not-show-content')
        }
      })
    }, options)

    const arr = document.getElementsByClassName('header-content')[0]
    for (let i = 0; i < arr.childNodes.length; i++) {
      arr.childNodes[i].classList.add('not-show-content')
      observer.observe(arr.childNodes[i])
    }
  }
}
</script>

<style lang="scss" scoped>
.header-content {
  flex-basis: 50%;
  padding: 0 10px;
  box-sizing: border-box;
  z-index: 3;

  &__before-title {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 5px;
    letter-spacing: 0.15em;
    color: #FFFFFF;

    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    align-items: center;

    span:nth-of-type(2) {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      border: none;
      background: #FFFFFF;
    }
  }

  &__title {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 66px;
    line-height: 70px;
    letter-spacing: 0.03em;
    color: #FFFFFF;
    margin: 35px 5px 30px 0px;
  }

  &__text {
    color: #FFFFFF;
    opacity: 0.7 !important;
  }

  &__btn-s {
    box-sizing: border-box;
    min-height: 60px;
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 20px 5px 63px 0px;
  }

  &__social-media {
    display: flex;
    gap: 25px;
    align-items: flex-end;

    span {
      height: 24px;
      cursor: pointer;

      img {
        height: 20px;
        transition: .3s linear;
      }
    }

    span:nth-of-type(3){
      img {
        height: 17px;
        transition: .3s linear;
      }
    }
  }

  &__social-media span:hover img {
    height: 22px;
  }
  &__social-media span:nth-of-type(3):hover img {
    height: 20px;
  }

  &__media {
    display: flex;
    flex-direction: column;
    gap: 20px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.13em;
    color: #FFFFFF;
  }

}

@media screen and (max-width: 1400px), screen and (max-height: 760px) {
  .header-content {

    &__before-title {
      font-size: 15px;

      gap: 15px;
    }

    &__title {
      font-size: 45px;
      line-height: 55px;
    }

    &__btn-s {
      margin: 20px 5px 43px 0px;
    }

    &__social-media {
      gap: 15px;

      span {
        img {
          height: 19px;
        }
      }
      span:nth-of-type(3){
        img {
          height: 16px;
          transition: .3s linear;
        }
      }
    }

    &__media {
      gap: 15px;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.13em;
    }

  }
}

@media screen and (max-width: 1220px) {
  .header-content {
    flex-basis: 47%;

    &__before-title {
      font-size: 14px;
      gap: 10px;
    }

    &__title {
      font-size: 34px;
      line-height: 45px;
    }

    &__btn-s {
      margin: 20px 5px 33px 0px;
    }

    &__media {
      gap: 10px;
      font-size: 13px;
      line-height: 17px;
      letter-spacing: 0.13em;
    }
  }
}

@media screen and (max-width: 1050px) {
  .header-content {

    &__before-title {
      font-size: 12px;
      gap: 5px;
    }

    &__title {
      font-size: 30px;
      line-height: 38px;
      margin: 30px 5px 20px 0px;
    }

    &__btn-s {
      min-height: 72px;
      margin: 10px 5px 30px 0px;
    }

    &__media {
      gap: 10px;
      font-size: 12px;
      line-height: 10px;
      letter-spacing: 0.13em;
    }

    &__social-media {
      gap: 10px;

      span {
        img {
          height: 15px;
        }
      }
      span:nth-of-type(3){
        img {
          height: 12px;
          transition: .3s linear;
        }
      }
    }

    &__social-media span:hover img {
      height: 17px;
    }
    &__social-media span:nth-of-type(3):hover img {
      height: 13px;
    }
  }
}

@media screen and (max-width: 850px) {
  .header-content {

    &__before-title {
      font-size: 12px;
      gap: 5px;
    }

    &__title {
      font-size: 25px;
      line-height: 25px;
      margin: 28px 5px 20px 0px;
    }

    &__btn-s {
      min-height: 68px;
      flex-direction: column;
      margin: 25px 5px 35px 0px;
      position: relative;

      button{
        position: absolute;
      }

      button:nth-of-type(1){
        top:0;
        left: 0;
      }

      button:nth-of-type(2){
        bottom:0;
        right: 0;
      }
    }

    &__media {
      gap: 10px;
      font-size: 12px;
      line-height: 10px;
      letter-spacing: 0.13em;
    }
  }
}

@media screen and (max-width: 600px) {
  .header-content {
    flex-basis: 100%;
  }
}

</style>