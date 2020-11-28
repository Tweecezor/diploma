import "./styles/main.pcss";
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
const axios = require("axios");
axios.baseUrl = "http://localhost:3000/";
let select = document.querySelector(".actions__subject");
let link = document.querySelector(".actions__confirm_button");
let currentSelected;

new Vue({
  el: "#test",
  data: function() {
    return {
      visible: false,
      subjects: [],
      value: "",
      currentData: "",
    };
  },
  methods: {
    async changePage() {
      if (this.value) {
        this.filterSubject();
        console.log(this.currentData);
        localStorage.setItem("currentSubject", this.currentData.subjectName);
        localStorage.setItem("creatorIdPublic", this.currentData.creatorId);
        window.location.href = "http://localhost:8080/welcome";
      }
    },
    filterSubject() {
      this.subjects.map((item) =>
        item._id === this.value ? (this.currentData = item) : ""
      );
    },
  },
  async created() {
    let response = await axios.get("http://localhost:3000/api/allSubjects");
    this.subjects = response.data;
    // response.data.forEach((item) => {
    //   this.subjects.push(item.subjectName);
    // });
  },
});
