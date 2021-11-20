<template>
  <div class="header">

    <div class="wrapper">
      <header-content/>

      <header-episodes/>
    </div>

    <div class="header__circle circle1"></div>
    <div class="header__circle circle2"></div>
    <div class="header__circle circle3"></div>

  </div>
</template>

<script>
import HeaderEpisodes from "./header-episodes";
import HeaderContent from "./header-content";

export default {
  name: "Header",
  components: {HeaderContent, HeaderEpisodes},
  mounted() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: .3
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-content')
        } else {
          entry.target.classList.remove('show-content')
        }
      })
    }, options)

    observer.observe(document.getElementsByClassName('header__circle')[0])
    observer.observe(document.getElementsByClassName('header__circle')[1])
    observer.observe(document.getElementsByClassName('header__circle')[2])
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/variables.scss';

.header {

  .wrapper {
    width: 100%;
    height: 100vh;
    max-height: 1000px;
    background-image: url("../../assets/image/header/headr-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 100px $wrap-padding 20px $wrap-padding;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }

  position: relative;

  &__circle {
    position: absolute;
    border-radius: 50%;
    border: none;
  }

  .circle1 {
    background: #FFD646;
    width: 56px;
    height: 56px;
    left: 50%;
    top: 75%;
    animation: circle1 17s infinite;
  }

  @keyframes circle1 {
    0% {
      width: 56px;
      height: 56px;
      left: 50%;
      top: 75%;
      opacity: 1;
    }
    20% {
      width: 60px;
      height: 60px;
      left: 5%;
      top: 65%;
      opacity: .3;
    }
    40% {
      width: 65px;
      left: 17%;
      top: 15%;
      opacity: .8;
    }
    60% {
      width: 65px;
      height: 70px;
      left: 84%;
      top: 35%;
      opacity: .2;
    }
    80% {
      width: 60px;
      height: 56px;
      left: 72%;
      top: 85%;
      opacity: .76;
    }
    100% {
      width: 56px;
      height: 56px;
      left: 50%;
      top: 75%;
      opacity: 1;
    }
  }

  .circle2 {
    width: 47px;
    height: 47px;
    left: 85%;
    top: 20%;
    background: #FF8E8E;
    animation: circle2 10s infinite;
  }

  @keyframes circle2 {
    0% {
      left: 85%;
      top: 20%;
      width: 47px;
      height: 47px;
      opacity: 1;
    }
    20% {
      width: 40px;
      height: 45px;
      left: 90%;
      top: 85%;
      opacity: .8;
    }
    40% {
      width: 45px;
      height: 40px;
      left: 40%;
      top: 65%;
      opacity: .99;
    }
    50% {
      left: 20%;
      top: 45%;
      opacity: 1;
      width: 55px;
      height: 55px;
    }
    60% {
      width: 50px;
      height: 50px;
      left: 64%;
      top: 30%;
      opacity: .8;
    }
    80% {
      width: 43px;
      height: 48px;
      left: 75%;
      top: 85%;
      opacity: .76;
    }
    100% {
      left: 85%;
      top: 20%;
      opacity: 1;
      width: 47px;
      height: 47px;
    }
  }

  .circle3 {
    width: 35px;
    height: 35px;
    left: 90%;
    top: 80%;
    background: #8FDEFF;
    animation: circle3 17s infinite;
  }

  @keyframes circle3 {
    0% {
      width: 35px;
      height: 35px;
      left: 90%;
      top: 80%;
      opacity: 1;
    }
    20% {
      left: 90%;
      top: 15%;
      height: 20px;
      width: 20px;
      opacity: .8;
    }
    40% {
      width: 45px;
      height: 45px;
      left: 50%;
      top: 55%;
      opacity: .99;
    }
    50% {
      left: 5%;
      top: 5%;
      width: 30px;
      height: 30px;
      opacity: 1;
    }
    60% {
      left: 54%;
      top: 80%;
      opacity: .8;
      height: 35px;
    }
    80% {
      left: 70%;
      top: 35%;
      width: 20px;
      opacity: .76;
    }
    100% {
      width: 35px;
      height: 35px;
      left: 85%;
      top: 20%;
      opacity: 1;
    }
  }

}

@media screen and (max-width: 1100px) and (max-height: 1200px) {
  .header {
    .wrapper {
      //height: 100vh;
      max-height: 800px;
    }
  }
}

@media screen and (max-width: 1260px) and (max-height: 800px) {
  .header {
    .wrapper {
      //height: 100vh;
      //max-height: 800px;
      padding: 100px 50px 20px 50px;
    }
  }
}

@media screen and (max-width: 1030px) {
  .header {
    .wrapper {
      padding: 90px 50px 20px 50px;
    }
  }
}

@media screen and (max-width: 900px) {
  .header {
    .wrapper {
      padding: 70px 50px 20px 50px;
    }
  }
}

@media screen and (max-width: 500px) {

  .circle1 {
    width: 5%;
    height: 5%;
  }

  @keyframes circle1 {
    0% {
      width: 5%;
      height: 5%;
      left: 50%;
      top: 75%;
      opacity: 1;
    }
    20% {
      width: 10%;
      height: 7%;
      left: 10%;
      top: 65%;
      opacity: .3;
    }
    40% {
      width: 7%;
      left: 17%;
      top: 15%;
      opacity: .8;
    }
    60% {
      width: 5%;
      height: 4%;
      left: 80%;
      top: 35%;
      opacity: .2;
    }
    80% {
      width: 10%;
      height: 6%;
      left: 72%;
      top: 75%;
      opacity: .76;
    }
    100% {
      width: 5%;
      height: 5%;
      left: 50%;
      top: 75%;
      opacity: 1;
    }
  }

  .circle2 {
    width: 8%;
    height: 8%;
    left: 75%;
    top: 20%;
  }

  @keyframes circle2 {
    0% {
      left: 75%;
      top: 20%;
      width: 8%;
      height: 8%;
      opacity: 1;
    }
    20% {
      width: 5%;
      height: 6%;
      left: 70%;
      top: 80%;
      opacity: .8;
    }
    40% {
      width: 13%;
      height: 10%;
      left: 40%;
      top: 65%;
      opacity: .99;
    }
    50% {
      left: 20%;
      top: 45%;
      opacity: 1;
      width: 9%;
      height: 7%;
    }
    60% {
      width: 13%;
      height: 9%;
      left: 64%;
      top: 30%;
      opacity: .8;
    }
    80% {
      width: 3%;
      height: 4%;
      left: 75%;
      top: 80%;
      opacity: .76;
    }
    100% {
      left: 79%;
      top: 20%;
      opacity: 1;
      width: 8%;
      height: 8%;
    }
  }

  .circle3 {
    width: 3%;
    height: 3%;
    left: 90%;
    top: 80%;
    background: #8FDEFF;
    animation: circle3 17s infinite;
  }

  @keyframes circle3 {
    0% {
      width: 3%;
      height: 3%;
      left: 70%;
      top: 70%;
      opacity: 1;
    }
    20% {
      left: 80%;
      top: 15%;
      height: 2%;
      width: 4%;
      opacity: .8;
    }
    40% {
      width: 10%;
      height: 5%;
      left: 50%;
      top: 55%;
      opacity: .99;
    }
    50% {
      left: 5%;
      top: 5%;
      width: 10%;
      height: 15%;
      opacity: 1;
    }
    60% {
      left: 54%;
      top: 80%;
      opacity: .8;
      height: 5%;
    }
    80% {
      left: 70%;
      top: 35%;
      width: 7%;
      opacity: .76;
    }
    100% {
      width: 3%;
      height: 3%;
      left: 80%;
      top: 20%;
      opacity: 1;
    }
  }
}

@media screen and (max-width: 460px) {
  .header {
    .wrapper {
      padding: 70px 10px 20px 10px;
    }
  }
}
</style>