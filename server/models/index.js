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

// groupsScheme.plugin(autoincrement, { field: "_id", collection: "groups" });

const GROUPS = mongoose.model("groups", groupsScheme);

module.exports.GROUPS = GROUPS;
