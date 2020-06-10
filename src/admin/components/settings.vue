<template lang="pug">
  .container.container__settings
    .settings__sidebar.sidebar
      ul.sidebar__list
        li.sidebar__item(v-for="(item,pos) in ['Тесты','Данные']" ref="sidebar_item")
          .sidebar__item_content(@click="changeContent(item,pos)") {{item}}
    .settings__content
      .settings__content_data(v-if="currentMenuItem === 'Данные'")
        USERS_DATA
      .settings__content_test(v-if="currentMenuItem === 'Тесты'")
        ALL_TESTS

      

        
        
</template>

<script>
import { mapActions, mapState } from "vuex";
import ALL_TESTS from "./settings__allTests";
import USERS_DATA from "./settings__usersData";
// import axios from "axios";
export default {
  components: {
    ALL_TESTS,
    USERS_DATA
  },
  data() {
    return {
      currentMenuItem: "Тесты",
      sidebarItems: []
    };
  },
  methods: {
    ...mapActions("helped", ["changeShowGroupStatus"]),
    ...mapActions("groups", ["fetchGroups"]),
    showAddNew() {
      this.changeShowGroupStatus(true);
    },
    changeContent(item, pos) {
      this.currentMenuItem = item;
      for (var i = 0; i < this.sidebarItems.length; i++) {
        this.sidebarItems[i].classList.remove("sidebar__item_content__active");
        i === pos
          ? this.sidebarItems[i].classList.add("sidebar__item_content__active")
          : "";
      }
    }
  },
  computed: {
    ...mapState("groups", {
      groups: state => state.groups
    }),
    ...mapState("helped", {
      showAddGroup: state => state.showAddGroup
    })
  },
  async mounted() {
    // console.log(this.$refs.sidebar_item);
    this.sidebarItems = this.$refs.sidebar_item;
    this.sidebarItems[0].classList.add("sidebar__item_content__active");
  }
  // watch: {
  //   groups: function() {
  //     this.groups = this.groups;
  //   }
  // }
};
</script>

<style lang="postcss" scoped>
@import url("../../styles/mixins.pcss");
.container__settings {
  display: flex;
  @include phones {
    flex-direction: column;
  }
}
.sidebar {
  width: 20%;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  margin-right: 3%;
  height: 50%;
  @include phones {
    width: 100%;
    margin-bottom: 20px;
  }
}
.settings__content {
  width: 77%;

  border-radius: 5px;
  @include phones {
    width: 100%;
    margin-bottom: 20px;
  }
}
.sidebar__item {
  margin-bottom: 5px;
}
.sidebar__item_content {
  width: 100%;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #efefef;
    /* color: #edb947; */
  }
}
.sidebar__item_content__active {
  background: #efefef;
}
</style>
