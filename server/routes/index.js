const { Router } = require("express");
const router = Router();
const modelGROUPS = require("../models/index").GROUPS;

router.put("/groups/:id", async (req, res) => {
  const currentGroup = await modelGROUPS.findOne({ group_id: req.params.id });
  let studentsInGroupPrev = currentGroup.studentsInGroup;
  studentsInGroupPrev.push(req.body);

  await modelGROUPS.findByIdAndUpdate(
    currentGroup._id,
    { studentsInGroup: studentsInGroupPrev },
    function(err, person) {
      if (err) return;
      res.send(person);
    }
  );
});

router.put("/groups/deleteStudent/:id", async (req, res) => {
  const currentGroup = await modelGROUPS.findOne({ group_id: req.params.id });
  let studentsInGroupPrev = currentGroup.studentsInGroup;
  // console.log(studentsInGroupPrev);
  studentsInGroupPrev = studentsInGroupPrev.filter((student) => {
    console.log(student.student_id);
    console.log(req.body.student_id);
    console.log("-------");
    return student.student_id != req.body.student_id ? student : "";
  });
  // console.log(studentsInGroupPrev);
  res.send(studentsInGroupPrev);
  // studentsInGroupPrev = studentsInGroupPrev.map((item) => {
  //   if (item.group_id === req.params.id) {
  //     // console.log(item.studentsInGroup);

  //     console.log(item.studentsInGroup);
  //   }
  //   return item;
  // });
  // res.send(studentsInGroupPrev);
});

router.post("/groups", async (req, res) => {
  console.log(req.body.studentsInGroup);
  res.send({ type: "success" });
  const group = new modelGROUPS({
    group_id: req.body.group_id,
    groupName: req.body.groupName,
    headmanEmail: req.body.headmanEmail,
    studentsInGroup: req.body.studentsInGroup,
    // studentsInGroup: [
    //   {
    //     name: req.body.studentsInGroup.name,
    //     surname: req.body.studentsInGroup.surname,
    //     thirdname: req.body.studentsInGroup.thirdname,
    //     fullName: req.body.studentsInGroup.fullName,
    //     group_id: req.body.studentsInGroup.group_id,
    //     student_id: req.body.studentsInGroup.student_id,
    //   },
    // ],
  });
  await group
    .save()
    .then((doc) => {
      return doc;
    })
    .catch(function(err) {
      console.log(err);
    });
  res.send(group);
});

module.exports = router;
