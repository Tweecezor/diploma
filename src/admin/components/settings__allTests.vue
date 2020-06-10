<template lang="pug">
  .container_
    ul.tests__list
      li.tests__item.test(v-for="test in tests")
        CURRENT_TEST(:test="test")

</template>

<script>
import { mapActions, mapState } from "vuex";
import CURRENT_TEST from "./settings__currentTest";
// import axios from "axios";
export default {
  components: {
    CURRENT_TEST
  },
  data() {
    return {
      // testTime: "",
      testAccess: false
    };
  },
  methods: {
    ...mapActions("helped", ["changeShowGroupStatus"]),
    ...mapActions("groups", ["fetchGroups"]),
    ...mapActions("tests", ["fetchTests"])
  },
  computed: {
    ...mapState("groups", {
      groups: state => state.groups
    }),
    ...mapState("tests", {
      tests: state => state.tests
    }),
    ...mapState("helped", {
      showAddGroup: state => state.showAddGroup
    })
  },
  async mounted() {},
  async created() {
    await this.fetchTests();
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

.tests__list {
  display: flex;
  flex-wrap: wrap;
}
.tests__item {
  width: calc((100%-2%) / 2);
  margin-right: 1%;
  margin-bottom: 30px;
  &:nth-child(2n) {
    margin-right: 0;
  }
  @include phones {
    width: 100%;
    margin-right: 0;
  }
}
.test {
  padding: 50px 20px;
  background-color: white;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2%;
  border-radius: 5px;
}
</style>
