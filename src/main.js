import "./styles/main.pcss";
// import currentSubject from "./welcomePage";

if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}
// console.log(currentSubject);
let title = localStorage.getItem("currentSubject");

console.log(title);
const subjectName = document.querySelector(".welcome-section__name-title");
document.querySelector(".main-title").innerText = title;
subjectName.innerText = title;

// import "./scripts/skills";
// import "./scripts/parallax";
// import "./scripts/reviews";
// import "./welcomePage";
import "./scripts/hamburger-menu";
// import "./scripts/style";
import "./scripts/myWorks";
// import "./scripts/contact-form-validate";
// import "./scripts/scrollTo";
