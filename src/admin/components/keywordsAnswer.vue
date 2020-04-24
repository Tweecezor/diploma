<template lang="pug">
  .keywords_wrap
    //- pre {{typeOfQuestion }}
    //- pre {{keyword}}
    .keywords__title-wrap
        h2.keywords__title Просмотр ключевых слов
    .keywords__add
     .keywords__add_label-wrap
      label(for="input-tag").keywords__add_label Ключевое слово
    .keywords__add_text-wrap
      input(type="text" name="tag" id="input-tag" v-model='keyword').keywords__add_text
      button(type="button" @click="addKeyword").addKeyword.btn +
      //- div.error-input()
    .addWorks__tags-list-wrap
      //- pre {{keywords}}
      ul.addWorks__tags-list
        li(v-for="(item,index) in keywords" v-if="keywords.length!=0 && item!=''" ).addWorks__tags-item {{item}}
          .deleteTag(@click="removeKeyword(index)") x
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    keywords: Array,
    typeOfQuestion: String
  },
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    ...mapActions("questions", ["changeKeywords"]),
    removeKeyword(currentKeyword) {
      // console.log(currentKeyword);
      this.keywords.splice(currentKeyword, 1);
      // console.log(this.keywords);
    },
    addKeyword() {
      this.keywords.push(this.keyword);
      // console.log(this.keywords);
      this.changeKeywords(this.keywords);
    }
  }
};
</script>

<style lang="postcss" scoped>
.keywords_wrap {
  padding: 0.625rem;
}
.keywords__title {
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #414c63;
  margin-bottom: 1.875rem;
  font-size: 1.125rem;
  font-weight: 700;
}
.keywords__add_label {
  display: block;
  opacity: 0.5;
  color: #414c63;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.875rem;
}
.keywords__add_text {
  background-color: transparent;
  font-weight: 700;
  border: none;
  border-bottom: 2px solid #414c63;
  padding: 0 0.3125rem 0.625rem;
  width: 100%;
}
.keywords__add_text-wrap {
  display: flex;
  margin-bottom: 1.875rem;
}
///////
.addWorks__tags-list {
  display: flex;
  flex-wrap: wrap;
}
.addWorks__tags-item {
  padding: 5px 15px;
  background-color: #f4f4f4;
  border-radius: 15px;
  margin-right: 10px;
  padding-right: 30px;
  position: relative;
  display: flex;
  margin-bottom: 20px;
  &:last-child {
    /* margin-right: 0px; */
  }
}
.deleteTag {
  position: absolute;
  right: 10%;
  cursor: pointer;
  font-weight: 700;
  top: 4px;
}
.addWorks__tags-list-wrap {
  margin-bottom: 30px;
}
.addWorks__label-wrap {
  display: flex;
  flex-direction: column;
}
</style>