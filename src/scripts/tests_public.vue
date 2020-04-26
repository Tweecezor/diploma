<template lang="pug">
  div
    .wrapper__container
      .admin__content
      pre {{tests}}
       .d HELLO
        //- div(v-if="$route.meta.public")
        //-   router-view
        //-   tooltips
        //- div(v-else)
        //-   headerComponent
        //-   navComponent
        //-   router-view
        //-   tooltips  
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {},
  computed: {
    ...mapState("tests", {
      tests: state => state.tests
    })
  }
};
</script>

<style lang="postcss" scoped>
</style>