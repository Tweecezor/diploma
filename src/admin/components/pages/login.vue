<template lang="pug">
section.login.fullscreen-section 
  .login__block
    .login__block-wrap
      .login__title-wrap
        h1.login__title Авторизация
      form.login__form(@submit.prevent="login")
        .login__form-label-wrap
          label.login__form-label(for="") Логин
          .login__form-input-wrap
            input#login.login__form-input.login__form-input--login(
              type="text",
              name="login",
              v-model="userData.login"
            )
            .login__form-input-icon-login.login__form-input-icon

        .login__form-label-wrap
          label.login__form-label(for="") Пароль
          .login__form-input-wrap
            input#password.login__form-input.login__form-input--password(
              type="password",
              name="passowrd",
              v-model="userData.password"
            )
            .login__form-input-icon-password.login__form-input-icon 
        input.login__form-submit(
          type="submit",
          :disabled="disable",
          name="sumbit",
          value="Войти",
          :class="{ activeForm: active }"
        )
      a.login__close(:href="currentUrl", @click.prevent="goToMainPage")
    h2(@click="$router.replace('/register')") Регистрация
  //- pre {{userData.name}}    
</template>

<script>
// import $axios from "@/requests";
import { mapActions } from "vuex";
// import { Validator } from "simple-vue-validator";
export default {
  // mixins: [require("simple-vue-validator").mixin],
  // validators: {
  //   "userData.name": value => {
  //     return Validator.value(value).required("Логин не может быть пустым ");
  //   },
  //   "userData.password": value => {
  //     return Validator.value(value).required("Пароль не может быть пустым");
  //   }
  // },
  components: {},
  data() {
    return {
      currentUrl: "",
      userData: {
        login: "",
        password: "",
      },
      active: false,
      disable: true,
    };
  },
  methods: {
    ...mapActions("tooltips", ["showTooltip"]),
    async login() {
      // if ((await this.$validate()) === false) {
      //   this.showTooltip({
      //     type: "error",
      //     text: "Заполните все поля",
      //   });
      //   return;
      // }
      try {
        console.log(this.userData);
        let userData = this.userData;
        // const response = await this.$axios.post(
        //   "https://young-anchorage-15160.herokuapp.com/api/login",
        //   userData
        // );
        const response = await this.$axios.post(
          "http://localhost:3000/api/login",
          userData
        );
        console.log(response);
        localStorage.setItem("userLogin", response.data.login);
        localStorage.setItem("creatorId", response.data.userId);
        const token = response.data.token;
        // let token = "";
        // console.log(fullToken);
        // if (fullToken) {
        //   token = fullToken.slice(fullToken.indexOf(" ") + 1);
        // }
        console.log(token);
        // let arr = token.split(" ");

        // console.log(token);
        localStorage.setItem("token", token);
        this.$axios.defaults.headers["Authorization"] = `${token}`;
        if (token) {
          this.$router.replace("/");
          // console.log(localStorage);
          this.showTooltip({
            type: "success",
            text: "Добро пожаловать",
          });
        } else {
          this.showTooltip({
            type: "error",
            text: "Неверный логин или пароль",
          });
        }
      } catch (error) {
        console.log(error.response);
        //   console.log("catch error");
        this.showTooltip({
          type: "error",
          text: error.response.data.message,
        });
        //   // console.log('after SHOWTOOLTIP');
        //   // alert(error.response.data.error);
      }
    },
    goToMainPage() {
      // console.log(this.$router.query.page);
      // console.log(
      //   windows.location.href.slice(0, windows.location.href.indexOf("/admin"))
      // );
      location.href = `${this.currentUrl.slice(
        0,
        this.currentUrl.indexOf("/admin")
      )}`;
    },
  },
  watch: {
    "userData.name"() {
      if (this.userData.password != "" && this.userData.name != "") {
        // console.log("test");
        this.active = true;
        this.disable = false;
      } else {
        this.active = false;
        this.disable = true;
      }
    },
    "userData.password"() {
      if (this.userData.password != "" && this.userData.name != "") {
        // console.log("test");
        this.active = true;
        this.disable = false;
      } else {
        this.active = false;
        this.disable = true;
      }
    },
  },
  created() {
    var currentUrl = window.location.href;
    console.log(currentUrl);
    this.currentUrl = currentUrl;
    if (this.userData.password != "" && this.userData.name != "") {
      // console.l og("test");
      this.active = true;
      this.disable = false;
    } else {
      this.active = false;
      this.disable = true;
    }
    // this.validation.reset();
  },
  mounted() {},
};
</script>

<style lang="postcss" scoped>
@import url("../../../styles/mixins.pcss");
pre {
  color: white;
}

.login {
  background: url("../../../images/content/background-main.jpg") center center;
  background-size: cover;
  position: relative;
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #2d3c4e;
    opacity: 0.9;
  }
}
.login__block {
  position: absolute;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login__block-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0% 15%;
}
.login__title {
  color: #414c63;
  font-size: 36px;
  font-weight: 700;
  line-height: 60px;
  &-wrap {
    margin-bottom: 30px;
  }
}
.login__block {
  /* padding:60px 80px; */
  width: 560px;
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include phones {
    height: 100vh;
    justify-content: center;
    width: 100%;
  }
}
.login__form-submit {
  background: grey;
  color: #fff;
  border: none;
  padding: 1.25rem 6.25rem;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 3rem;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    border-bottom: none;
  }
}
.activeForm {
  /* background: linear-gradient(90deg, #ea7400 0, #f29400); */
  background: linear-gradient(190deg, #db9600, #edb947);
  &:hover {
    /* background: linear-gradient(180deg, #ea7400 0, #f29400); */
    background: linear-gradient(-190deg, #db9600, #edb947);
  }
}
.login__form-input {
  width: 100%;
  background-color: transparent;
  color: #414c63;
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  border: none;
  border-bottom: 2px solid #414c63;
  padding: 0px 5px 10px 5px;
  padding-bottom: 10px;
  margin-bottom: 30px;
  padding-left: 55px;
  padding-right: 5px;
  &:hover {
    border-bottom: 2px solid $orange;
  }
  &:active {
    border-bottom: 2px solid $orange;
  }
}
.login__form-input--password {
  /* margin-bottom: 50px; */
}
.login__form {
  display: flex;
  flex-direction: COLUMN;
  align-items: center;
  width: 100%;
}
.login__form-label-wrap {
  width: 100%;
  position: relative;
}
.login__form-label {
  margin-bottom: 20px;
  display: block;
  opacity: 0.5;
  color: #414c63;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  padding-left: 35px;
}
.login__close {
  background: svg-load("remove.svg", fill= "$text-color") center center
    no-repeat / contain;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  right: 15%;
  cursor: pointer;
}
.login__form-input-wrap {
  display: flex;
  position: relative;
}
.login__form-input-icon {
  width: 40px;
  height: 40px;
  position: absolute;
  top: -5px;
  left: 0;
  &-login {
    background: svg-load("user.svg", fill= "#414c63") center center no-repeat /
      contain;
    opacity: 0.3;
  }
  &-password {
    background: svg-load("key.svg", fill= "$text-color") center center no-repeat /
      contain;
    width: 50px;
  }
}
.error-input {
  background: #cd1515;
  font-size: 0.75rem;
  position: absolute;
  bottom: -1.5rem;
  z-index: 5;
  left: 0;
  color: white;
  padding: 15px 20px;
  &:after {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 7.5px 15px 7.5px;
    border-color: transparent transparent #cd1515 transparent;
    position: absolute;
    top: -0.225rem;
    left: 50%;
    transform: translate(0, -50%);
  }
}
.validErrorTextarea {
  border: 2px solid #cd1515;
  &:hover {
    border: 2px solid #cd1515;
  }
}
</style>
