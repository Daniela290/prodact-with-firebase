<template>
  <div class="header-episodes">

    <div class="wrapper">

      <div class="header-episodes__episode"></div>

      <div class="header-episodes__episode"></div>

      <div class="header-episodes__episode"></div>

      <div class="header-episodes__episode"></div>

    </div>

  </div>
</template>

<script>
export default {
  name: "header-episodes",
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

    const arr = document.getElementsByClassName('header-episodes')[0]
    for (let i = 0; i < arr.childNodes.length; i++) {
      arr.childNodes[i].classList.add('not-show-content')
      observer.observe(arr.childNodes[i])
    }
  }
}
</script>

<style lang="scss" scoped>
.header-episodes {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 50%;
  height: 98%;

  .wrapper {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
  }

  &__episode:nth-of-type(1) {
    width: 40%;
    height: 40%;
    top: 15%;
    left: 15%;
    //top: 0px;
    //left: -65px;
    //width: 376px;
    //height: 352px;
    background-image: url("../../assets/image/header/photo1.png");
    animation: episode1 7s linear infinite;
  }

  @keyframes episode1 {
    0% {
      top: 15%;
      left: 15%;
    }
    25% {
      top: 20%;
      left: 50%;
    }
    50% {
      top: 40%;
      left: 50%;
    }
    75% {
      top: 40%;
      left: 15%;
    }
    100% {
      top: 15%;
      left: 15%;
    }
  }

  &__episode:nth-of-type(2) {
    width: 20%;
    height: 20%;
    top: 10%;
    left: 55%;
    //width: 185px;
    //height: 184px;
    //left: 300px;
    //top: -10px;
    background: linear-gradient(220.4deg, #AB69FF -24.24%, #BE9AED 129%);
    //box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.25);
    border-radius: 30px 30px 30px 0px;
    border: none;
    animation: episode2 7s infinite;
  }

  @keyframes episode2 {
    0% {
      top: 10%;
      left: 55%;
    }
    25% {
      top: 57%;
      left: 55%;
    }
    50% {
      top: 52%;
      left: 31%;
    }
    75% {
      top: 20%;
      left: 31%;
    }
    100% {
      top: 10%;
      left: 55%;
    }
  }

  &__episode:nth-of-type(3) {
    width: 40%;
    height: 40%;
    top: 30%;
    left: 50%;
    //width: 386px;
    //height: 366px;
    //left: 270px;
    //top: 220px;
    //box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.25);
    background-image: url("../../assets/image/header/photo3.png");
    animation: episode3 7s infinite;
  }

  @keyframes episode3 {
    0% {
      top: 30%;
      left: 50%;
    }
    25% {
      top: 45%;
      left: 15%;
    }
    50% {
      left: 15%;
      top: 15%;
    }
    75% {
      left: 50%;
      top: 20%;
    }
    100% {
      top: 30%;
      left: 50%;
    }
  }

  &__episode:nth-of-type(4) {
    width: 30%;
    height: 30%;
    left: 25%;
    top: 50%;
    //width: 283px;
    //height: 273px;
    //left: 22px;
    //top: 310px;
    background-image: url("../../assets/image/header/photo2.png");
   animation: episode4 7s infinite;
  }

  @keyframes episode4 {
    0% {
      left: 25%;
      top: 50%;
    }
    25% {
      left: 25%;
      top: 20%;
    }
    50% {
      top: 15%;
      left: 51%;
    }
    75% {
      top: 55%;
      left: 51%;
    }
    100% {
      left: 25%;
      top: 50%;
    }
  }

  &__episode {
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    box-sizing: border-box;
    z-index: 2;
  }
}

.header-episodes:hover .header-episodes__episode {
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}

@media screen and (max-width: 1500px), screen and (max-height: 850px) {
}

@media screen and (max-width: 1220px) {
  .header-episodes {
    flex-basis: 52%;
  }
}

@media screen and (max-width: 600px) {
  .header-episodes {
    display: none;
  }
}
</style>