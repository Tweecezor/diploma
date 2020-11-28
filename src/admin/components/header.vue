<template lang="pug">
header.header
  .header-container.container
    //- pre {{userAvatar}}
    .header__info
      .user
        .user__avatar
          img.user__img(:src="userAvatar")
        .user__name
          span {{ `${user.name} ${user.surname}` }}
      .header__title-wrap
        h1.header__title Панель Администрирования
    .header__logout
      a.header__logout-link(@click="logout") Выйти
</template>

<script>
import { mapActions, mapState } from "vuex";
import { getAbsoluteImgPath } from "@/helpers/photos";
import store from "@/store";
export default {
  data() {
    return {
      userAvatar: "",
    };
  },
  methods: {
    ...mapActions("user", ["userLogout"]),
    ...mapActions("tooltips", ["showTooltip"]),
    async logout() {
      try {
        await this.userLogout();
        delete this.$axios.defaults.headers.common["Authorization"];
        localStorage.removeItem("token");
        store.commit("user/LOGOUT__USER");
        this.showTooltip({
          type: "success",
          text: "Скоро увидимся",
        });
        this.$router.push("/login");
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message,
        });
      }
    },
  },
  computed: {
    ...mapState("user", {
      user: (state) => state.user,
    }),
  },
  created() {
    this.userAvatar = getAbsoluteImgPath(this.user.photoUser);
    // console.log(this.$axios);
  },
  watch: {
    user() {
      // this.currentWork = {...this.work};
      this.userAvatar = getAbsoluteImgPath(this.user.photoUser);
      // this.tagArray = this.work.techs.split(',');
    },
  },
};
</script>

<style lang="postcss" scoped>
@import url("../../styles/mixins.pcss");

.header {
  /* background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%); */
  background-image: linear-gradient(90deg, #373556 0, #434573);
}
.header-container {
  display: flex;
  color: white;
  padding: 17px 0px;
  align-items: center;
  justify-content: space-between;
}
.header__info {
  display: flex;
}
.user {
  display: flex;
  align-items: center;
}
.user__avatar {
  overflow: hidden;
  margin-right: 20px;
}
.user__img {
  border-radius: 50%;
  object-fit: cover;
  width: 45px;
  height: 45px;
  max-width: 45px;
  max-height: 45px;
}
.user__name {
  font-size: 18px;
  font-weight: 400;
  margin-right: 20px;
}
.header__title {
  font-size: 14px;
  font-weight: 400;
  opacity: 0.5;
  @include phones {
    display: none;
  }
}
.header__title-wrap {
  align-items: center;
  display: flex;
}
.header__logout-link {
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
}
</style>
