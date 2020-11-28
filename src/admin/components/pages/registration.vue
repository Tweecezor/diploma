

<template lang="pug">
- var registrObject;

include ../../../mixins.pug
.container.registration.fullscreen-section
  .registration-wrap
    .registration__title-wrap
      h1.registration__title Регистрация
    .registration__form-wrap
      .registration__form.form
        .registration__form-row
          each item in [{label:'Логин',text:'login',var:'login'},{label:'password',text:'Пароль',var:'password'},{label:'name',text:'Имя',var:'name'},{label:'surname',text:'Фамилия',var:'surname'},{label:'subject',text:'Предмет',var:'subject'}]
            +regisrationRow(item.label,item.text,item.var)
        .registration__form-submit-wrap
          input.registration__form-submit(
            type="button",
            value="Зарегистрироваться",
            @click="register",
            :class="{ activeBtn: active }",
            :disabled="!active"
          ) 
        .registraion__login-wrap
          .registration__login_title-wrap 
            .registration__login_title Уже зарегистрированы?
          router-link.registration__login_enter(to="/login") Войти
        //- pre(style="color:red") Имя {{ name }}
        //- pre(style="color:red") Фамилия {{ surname }}
        //- pre(style="color:red") Предмет {{ subject }}
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      name: "",
      surname: "",
      subject: "",
      login: "",
      password: "",
      active: false,
    };
  },
  methods: {
    ...mapActions("tooltips", ["showTooltip"]),
    ...mapActions("user", ["createNewUser"]),
    clearData() {
      this.name = "";
      this.surname = "";
      this.subject = "";
      this.login = "";
      this.password = "";
    },
    register() {
      let newUser = {
        name: this.name,
        surname: this.surname,
        subject: this.subject,
        login: this.login,
        password: this.password,
      };
      try {
        this.createNewUser(newUser);
        this.clearData();
        console.log(newUser);
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.text,
        });
      }
    },
  },
  watch: {
    name() {
      if (
        this.name !== "" &&
        this.surname !== "" &&
        this.subject !== "" &&
        this.login !== "" &&
        this.password !== ""
      ) {
        this.active = true;
      } else {
        this.active = false;
      }
    },
    login() {
      if (
        this.name !== "" &&
        this.surname !== "" &&
        this.subject !== "" &&
        this.login !== "" &&
        this.password !== ""
      ) {
        this.active = true;
      } else {
        this.active = false;
      }
    },
    password() {
      if (
        this.name !== "" &&
        this.surname !== "" &&
        this.subject !== "" &&
        this.login !== "" &&
        this.password !== ""
      ) {
        this.active = true;
      } else {
        this.active = false;
      }
    },
    surname() {
      if (
        this.name !== "" &&
        this.surname !== "" &&
        this.subject !== "" &&
        this.login !== "" &&
        this.password !== ""
      ) {
        this.active = true;
      } else {
        this.active = false;
      }
    },
    subject() {
      if (
        this.name !== "" &&
        this.surname !== "" &&
        this.subject !== "" &&
        this.login !== "" &&
        this.password !== ""
      ) {
        this.active = true;
      } else {
        this.active = false;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.registration {
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: relative; */

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #2d3c4e;
    opacity: 0.9;
  }
}
.registration-wrap {
  width: 560px;
  background: #fff;
  padding: 30px;
  position: relative;
  z-index: 10;
}
.registration__title-wrap {
  text-align: center;
  margin-bottom: 20px;
}
.registration__title {
  color: #414c63;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 3.75rem;
}
.registration__from_input-wrap {
}
.registration__from_input {
  width: 100%;
  background-color: transparent;
  color: #414c63;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.875rem;
  border: none;
  border-bottom: 2px solid #414c63;
  margin-bottom: 1.875rem;
  padding: 0 0.3125rem 0.625rem 0rem;
}
.registration__form_label {
  font-size: 16px;
}
.registration__form-submit-wrap {
  text-align: center;
  margin-bottom: 20px;
  /* background: grey; */
}
.registration__form-submit {
  color: #fff;
  border: none;
  padding: 1.25rem 6.25rem;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 3rem;
  cursor: pointer;
  background: grey;
  &:disabled {
    cursor: default;
  }
  /* margin-top: 1.25rem; */
}
.activeBtn {
  background: linear-gradient(190deg, #db9600, #edb947);
}
.registraion__login-wrap {
  font-size: 18px;
}

.registration__login_enter {
  text-decoration: none;
  color: #db9600;
  &:hover {
    text-decoration: underline;

    color: blue;
  }
}
</style>