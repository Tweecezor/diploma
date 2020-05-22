const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoincrement = require("mongoose-easy-auto-increment");

const groupsScheme = new Schema({
  group_id: Number,
  groupName: String,
  headmanEmail: String,
  studentsInGroup: [
    {
      name: String,
      surname: String,
      thirdname: String,
      fullName: String,
      group_id: Number,
      student_id: Number,
    },
  ],
});

const questionsScheme = new Schema({
  type: String,
  question: {
    text: String,
    img: String,
    question_id: Number,
  },
  answers: [
    {
      text: String,
      correct: Boolean,
      imgURL: String,
      answer_id: Number,
    },
  ],
  keywordsArray: [String],
  level_id: Number,
  test_id: Number,
});

const resultsScheme = new Schema({
  fullName: String,
  test_level: String,
  group: String,
  test_id: Number,
  test_name: String,
  mark: Number,
});

const testsScheme = new Schema({
  id: Number,
  level: String,
  name: String,
  group: String,
  group_id: Number,
});

// groupsScheme.plugin(autoincrement, { field: "_id", collection: "groups" });

const GROUPS = mongoose.model("groups", groupsScheme);
const QUESTIONS = mongoose.model("questions", questionsScheme);
const RESULTS = mongoose.model("results", resultsScheme);
const TESTS = mongoose.model("tests", testsScheme);

module.exports.GROUPS = GROUPS;
module.exports.QUESTIONS = QUESTIONS;
module.exports.RESULTS = RESULTS;
module.exports.TESTS = TESTS;
