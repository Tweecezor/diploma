<template lang="pug">
  .container_ 
    //- pre {{user}}
    .user__container
      .user__content
        .user__login-wrap 
          h1.user__login Логин
          .user__label-wrap
            label.user__login_label Изменить логин
          .user__login_input-wrap
            input.user__login_input.user__input(type="text" v-model="user.login")
        .user__password-wrap 
          h1.user__password Пароль
          .user__label-wrap
            label.user__password_label Новый пароль
          .user__password_input-wrap
            input.user__input.user__password_input(type="password" v-model="password")
          .user__label-wrap
            label.user__password_label Повторить пароль
          .user__password_input-wrap-
            input.user__input.user__password_input(type="password" v-model="passwordRepeat")
      .user__image
        label(for="avatar").user__image-wrap(:style="{'background-image':`url(${currentAvatar})`}")
          .btn.user__image_file Изменить
        input(type="file" id="avatar" name="photo" accept="image/*" @change="loadAvatar").user__file
        .user__save
          .user__save_btn.btn(@click="save") Сохранить

      

        
        
</template>

<script>
import { mapActions, mapState } from "vuex";

// import axios from "axios";
export default {
  components: {},
  data() {
    return {
      password: "",
      passwordRepeat: "",
      login: "",
      currentAvatar: "",
      photoUser: "",
    };
  },
  methods: {
    ...mapActions("helped", ["changeShowGroupStatus"]),
    ...mapActions("user", ["changeUsersData"]),
    ...mapActions("groups", ["fetchGroups"]),
    ...mapActions("tooltips", ["showTooltip", "hideTooltip"]),
    showAddNew() {
      this.changeShowGroupStatus(true);
    },
    loadAvatar(e) {
      // console.log(e.target);
      const file = e.target.files[0];
      console.log(file);
      this.photoUser = file;
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        console.log(reader);
        reader.onload = () => {
          this.currentAvatar = reader.result;
          // console.log(this.currentAvatar);
        };
      } catch (error) {
        alert(error.message);
        console.log(error.message.errors.photo);
      }
    },
    async save() {
      if (this.password !== this.passwordRepeat) {
        this.showTooltip({
          type: "error",
          text: "Пароли не совпадают",
        });
      } else {
        try {
          let newData = {
            password: this.password,
            login: this.user.login,
            id: this.user._id,
            photoUser: this.photoUser,
          };
          await this.changeUsersData(newData);
          this.showTooltip({
            type: "success",
            text: "Пароль изменен",
          });
          this.password = "";
          this.passwordRepeat = "";
        } catch (error) {
          console.log(error);
          this.showTooltip({
            type: "error",
            text: error,
          });
        }
      }
    },
  },
  computed: {
    ...mapState("groups", {
      groups: (state) => state.groups,
    }),
    ...mapState("helped", {
      showAddGroup: (state) => state.showAddGroup,
    }),
    ...mapState("user", {
      user: (state) => state.user,
    }),
  },
  async mounted() {
    this.currentAvatar = this.user.photoUser;
  },
  // watch: {
  //   groups: function() {
  //     this.groups = this.groups;
  //   }
  // }
};
</script>

<style lang="postcss" scoped>
@import url("../../styles/mixins.pcss");
.container_ {
  background: #fff;
  padding: 10px;
  padding-bottom: 20px;
  /* @include phones {
    display: flex;
  } */
}
.user__login,
.user__password {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 10px;
}
.user__label-wrap {
  font-size: 16px;
  /* text-transform: lowercase; */
  text-transform: capitalize;
  margin-bottom: 5px;
}
.user__login {
  /* margin-bottom: 20px; */
}
.user__input {
  width: 100%;
  background-color: transparent;
  font-weight: 700;
  border: none;
  border-bottom: 2px solid #414c63;
  padding: 0 0.3125rem 0.625rem;
  /* margin-bottom: 1.875rem; */
}
.user__password_input-wrap {
  margin-bottom: 20px;
}
.user__login_input-wrap {
  margin-bottom: 20px;
}
.user__save {
  display: flex;
  justify-content: flex-end;
  @include tablets {
    align-self: flex-end;
  }
  @include phones {
    align-self: center;
  }
}
.user__save_btn {
  width: 200px;
  text-align: center;
}
.user__image-wrap {
  width: 300px;
  height: 200px;
  background-color: #dee4ed;
  border: 1px dashed #a1a1a1;
  position: relative;
  background-size: cover;
  position: relative;
  @include phones {
    width: 100%;
    margin-bottom: 20px;
  }
}
.user__container {
  display: flex;
  @include tablets {
    flex-direction: column;
  }
}
.user__content {
  width: 70%;
  margin-right: 5%;
  @include tablets {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
}
.user__img {
  width: 25%;
}
.user__image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @include tablets {
    width: 100%;
    flex-direction: row;
  }
  @include phones {
    flex-direction: column;
  }
}
.user__file {
  display: none;
}
.user__image_file {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
