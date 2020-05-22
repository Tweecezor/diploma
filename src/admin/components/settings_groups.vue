<template lang="pug">
  .container
    .groups 
      //- pre {{info}}
      //- pre {{groups}}
      ADD_NEW_GROUP(v-if="showAddGroup")
      ul.groups__list
        li.groups__item.groups__add_new(@click="showAddNew")
          .groups__new  
            .groups__new-icon
              <svg version="1.1" class="groups__new-icon-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                <g><path d="M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z"/></g>
              </svg>
            .groups__new-text Добавить группу
        li.groups__item(v-for="group in groups")
          GROUP_ITEM(:group="group")

        
        
</template>

<script>
import { mapActions, mapState } from "vuex";
import ADD_NEW_GROUP from "./groups_add-new";
import GROUP_ITEM from "./groups_item";
// import axios from "axios";
export default {
  components: {
    ADD_NEW_GROUP,
    GROUP_ITEM,
  },
  data() {
    return {
      info: "",
    };
  },
  methods: {
    ...mapActions("helped", ["changeShowGroupStatus"]),
    ...mapActions("groups", ["fetchGroups"]),
    showAddNew() {
      this.changeShowGroupStatus(true);
    },
  },
  computed: {
    ...mapState("groups", {
      groups: (state) => state.groups,
    }),
    ...mapState("helped", {
      showAddGroup: (state) => state.showAddGroup,
    }),
  },
  async mounted() {
    this.changeShowGroupStatus(false);
    this.fetchGroups();
    // await axios({
    //   url: "http://localhost:3000/test",
    //   method: "get",
    //   data: {
    //     name: this.name,
    //     email: this.email,
    //     address: this.address,
    //     gender: this.gender,
    //   },
    // });
    // this.$axios
    //   .get("http://localhost:3002/api/groups")
    //   .then((response) => (this.info = response.data));
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
.groups {
  width: 100%;
  height: 100%;
  /* background: red; */
  /* border: 1px solid black; */
}
.groups__list {
  display: flex;
  flex-wrap: wrap;
}
.groups__item {
  min-height: 380px;
  padding: 15px 10px;
  width: calc((100%-1%) / 2);
  margin-right: 1%;
  margin-bottom: 5%;
  background: white;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  position: relative;
  padding-bottom: 50px;
  &:nth-child(2n) {
    margin-right: 0px;
  }
  @include tablets {
    width: 48%;
    margin-right: 4%;
    &:nth-child(2n) {
      margin-right: 0px;
    }
    &:nth-child(3n) {
      margin-right: 4%;
    }
  }
  @include phones {
    width: 100%;
    margin-right: 0%;
    &:nth-child(2n) {
      margin-right: 0px;
    }
    &:nth-child(3n) {
      margin-right: 0%;
    }
  }
}
.groups__add_new {
  /* background: linear-gradient(to left, #ea7400 0%, #f29400 100%); */
  background: linear-gradient(190deg, #db9600 0%, #edb947);
  &:hover {
    background: linear-gradient(to left, #db9600 0%, #edb947);
  }
  /* width: 30%; */
}
.groups__new {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @include phones {
    flex-direction: row;
    height: 100%;
  }
}
.groups__new-icon {
  display: flex;
  width: 150px;
  height: 150px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  /* &:before {
    content: "";
    background: svg-load("remove.svg", fill= "#fff") center center no-repeat /
      contain;
    width: 2.125rem;
    height: 2.125rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  } */
  @include phones {
    width: 4.375rem;
    height: 4.375rem;
    margin-bottom: 0;
  }
}
.groups__new-icon-icon {
  top: 50%;
  left: 50%;
  fill: white;
  position: absolute;
  width: 2.125rem;
  height: 2.125rem;
  transform: translate(-50%, -50%) rotate(45deg);
}
.groups__new-text {
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  color: white;
  width: 5.875rem;
  text-align: center;
  @include phones {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.875rem;
    color: #fff;
    width: 9.875rem;
    text-align: center;
  }
}
input[type="text"] {
  &:hover {
    border-bottom: 2px solid #edb947;
  }
  &:active {
    border-bottom: 2px solid #edb947;
  }
}
input[type="text"] {
  border-bottom: 2px solid #000;
}
</style>
