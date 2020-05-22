const { Router } = require("express");
const router = Router();
const modelGROUPS = require("../models/index").GROUPS;
const modelQUESTIONS = require("../models/index").QUESTIONS;
const modelRESULTS = require("../models/index").RESULTS;
const modelTESTS = require("../models/index").TESTS;

//Группы

//Добавление нового студента
router.patch("/groups/addStudent/:id", async (req, res) => {
  const currentGroup = await modelGROUPS.findOne({ group_id: req.params.id });
  let studentsInGroupPrev = currentGroup.studentsInGroup;
  studentsInGroupPrev.push(req.body);

  await modelGROUPS.findByIdAndUpdate(currentGroup._id, {
    studentsInGroup: studentsInGroupPrev,
  });
  const currentGroupUpdated = await modelGROUPS.findOne({
    group_id: req.params.id,
  });
  res.send(currentGroupUpdated);
});

//изменение данных студента в группе
router.patch("/groups/patchStudent/:id", async (req, res) => {
  // console.log(req.body);
  const currentGroup = await modelGROUPS.findOne({ group_id: req.params.id });
  let studentsInGroupPrev = currentGroup.studentsInGroup;
  studentsInGroupPrev = studentsInGroupPrev.map((student) => {
    return student.student_id === req.body.student_id ? req.body : student;
  });
  await modelGROUPS.findByIdAndUpdate(currentGroup._id, {
    studentsInGroup: studentsInGroupPrev,
  });
});

//удаление студента по id
router.patch("/groups/deleteStudent/:id", async (req, res) => {
  const currentGroup = await modelGROUPS.findOne({ group_id: req.params.id });
  let studentsInGroupPrev = currentGroup.studentsInGroup;
  // console.log(studentsInGroupPrev);
  studentsInGroupPrev = studentsInGroupPrev.filter((student) => {
    return student.student_id != req.body.student_id ? student : "";
  });
  await modelGROUPS.findByIdAndUpdate(currentGroup._id, {
    studentsInGroup: studentsInGroupPrev,
  });
  const currentGroupUpdated = await modelGROUPS.findOne({
    group_id: req.params.id,
  });
  res.send(currentGroupUpdated);
});

//изменения названия группы и  email старосты
router.patch("/groups/:id", async (req, res) => {
  await modelGROUPS.findByIdAndUpdate(req.params.id, {
    groupName: req.body.groupName,
    headmanEmail: req.body.headmanEmail,
  });
});

//создание новой группы со студентами
router.post("/groups", async (req, res) => {
  // console.log(req.body.studentsInGroup);
  // res.send({ type: "success" });
  const group = new modelGROUPS({
    group_id: req.body.group_id,
    groupName: req.body.groupName,
    headmanEmail: req.body.headmanEmail,
    studentsInGroup: req.body.studentsInGroup,
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

//удаление группы
router.delete("/groups/:id", async (req, res) => {
  await modelGROUPS.deleteOne({ group_id: req.params.id });
  res.send({ type: "success" });
});

//вывод всех существующих групп
router.get("/groups", async (req, res) => {
  const Groups = await modelGROUPS.find({});
  res.send(Groups);
});

/////ВОПРОСЫ
//получение всех вопросов
router.get("/questions", async (req, res) => {
  const Questions = await modelQUESTIONS.find({});
  res.send(Questions);
});

//добавление нового вопроса
router.post("/questions", async (req, res) => {
  if (req.body.type === "handwritingAnswer") {
    const question = new modelQUESTIONS({
      type: req.body.type,
      question: {
        text: req.body.question.text,
        img: req.body.question.img,
        question_id: req.body.question.question_id,
      },
      keywordsArray: req.body.keywordsArray,
      level_id: req.body.level_id,
      test_id: req.body.test_id,
    });
    await question
      .save()
      .then((doc) => {
        return doc;
      })
      .catch(function(err) {
        console.log(err);
      });
    res.send(question);
  } else {
    const question = new modelQUESTIONS({
      type: req.body.type,
      question: {
        text: req.body.question.text,
        img: req.body.question.img,
        question_id: req.body.question.question_id,
      },
      answers: req.body.answers,
      level_id: req.body.level_id,
      test_id: req.body.test_id,
    });
    await question
      .save()
      .then((doc) => {
        return doc;
      })
      .catch(function(err) {
        console.log(err);
      });
    res.send(question);
  }
});

//изменение текущего вопроса
router.patch("/questions/:id", async (req, res) => {
  // let tr = req.body.question.img || "heuhue";
  // console.log(tr);
  const currentQuestion = await modelQUESTIONS.findById(req.params.id);
  let questionPrev = currentQuestion.question;
  // console.log(req.body);
  questionPrev.text = req.body.newQuestionTitle;
  questionPrev.img = req.body.img;
  await modelQUESTIONS.findByIdAndUpdate(req.params.id, {
    question: questionPrev,
  });
  const currentQuestionUpdated = await modelQUESTIONS.findById(req.params.id);
  res.send(currentQuestionUpdated);
});

//Удаление текущего вопроса
router.delete("/questions/:id", async (req, res) => {
  try {
    await modelQUESTIONS.findByIdAndDelete(req.params.id);
    res.send({ status: "success" });
  } catch (error) {
    res.send({ status: error });
  }
});

///ОТВЕТЫ В ВОПРОСЕ
//добавление ответа в текущий вопрос
router.patch("/questions/answer/add/:id", async (req, res) => {
  const currentQuestion = await modelQUESTIONS.findById(req.params.id);
  let answersPrev = currentQuestion.answers;
  answersPrev.push({
    text: req.body.answer.text,
    correct: req.body.answer.correct,
    imgURL: req.body.answer.imgURL,
    answer_id: req.body.answer.answer_id,
  });
  await modelQUESTIONS.findByIdAndUpdate(req.params.id, {
    answers: answersPrev,
  });
  const currentQuestionUpdated = await modelQUESTIONS.findById(req.params.id);
  res.send(currentQuestionUpdated);
});

//изменение ответа в текущем вопросе
router.patch("/questions/answer/:id", async (req, res) => {
  // console.log(req.params.id);
  const currentQuestion = await modelQUESTIONS.findById(req.params.id);
  // console.log(currentQuestion);
  // res.send(currentQuestion);
  let answersPrev = currentQuestion.answers;
  answersPrev = answersPrev.map((item) => {
    // console.log(item);
    if (item.answer_id === req.body.answer_id) {
      item.text = req.body.text;
      item.imgURL = req.body.imgURL;
      return item;
    } else {
      return item;
    }
  });
  await modelQUESTIONS.findByIdAndUpdate(req.params.id, {
    answers: answersPrev,
  });
  const currentQuestionUpdated = await modelQUESTIONS.findById(req.params.id);
  res.send(currentQuestionUpdated);
});

//изменения статуса ответа в текущем вопросе
router.patch("/questions/answer/correct/:id", async (req, res) => {
  const currentQuestion = await modelQUESTIONS.findById(req.params.id);
  let answersPrev = currentQuestion.answers;
  // console.log(req.body);
  answersPrev = answersPrev.map((item) => {
    // console.log(item);
    // console.log(newCorrectAnswer);
    switch (req.body.type) {
      case "oneAnswer":
        if (item.answer_id === req.body.answer_id) {
          item.correct = req.body.correct;
          return item;
        } else {
          item.correct = !req.body.correct;
          return item;
        }
        break;
      case "multipleAnswer":
        // console.log("multy");
        // console.log(newCorrectAnswer.text);
        // console.log(newCorrectAnswer.correct);
        if (item.answer_id === req.body.answer_id) {
          item.correct = req.body.correct;
          return item;
        } else {
          return item;
        }
        break;
    }
  });
  // console.log(answersPrev);
  await modelQUESTIONS.findByIdAndUpdate(req.params.id, {
    answers: answersPrev,
  });
  const currentQuestionUpdated = await modelQUESTIONS.findById(req.params.id);
  res.send(currentQuestionUpdated);
});

//удаление ответа в текущем вопросе
router.patch("/questions/answer/delete/:id", async (req, res) => {
  const currentQuestion = await modelQUESTIONS.findById(req.params.id);
  let answersPrev = currentQuestion.answers;
  answersPrev = answersPrev.filter((answer) => {
    return answer.answer_id != req.body.answer_id ? answer : "";
  });
  await modelQUESTIONS.findByIdAndUpdate(req.params.id, {
    answers: answersPrev,
  });
  const currentQuestionUpdated = await modelQUESTIONS.findById(req.params.id);
  res.send(currentQuestionUpdated);
});

//изменения ключевых слов в ответе
router.patch("/questions/answer/keywords/:id", async (req, res) => {
  // console.log(req.body);
  await modelQUESTIONS.findByIdAndUpdate(req.params.id, {
    keywordsArray: req.body.keywords,
  });
});

//РЕЗУЛЬТАТЫ
//добавление нового результата
router.post("/results", async (req, res) => {
  // res.send(req.body);
  const results = new modelRESULTS({
    fullName: req.body.fullName,
    group: req.body.group,
    mark: req.body.mark,
    test_id: req.body.test_id,
    test_level: req.body.test_level,
    test_name: req.body.test_name,
  });
  await results
    .save()
    .then((doc) => {
      return doc;
    })
    .catch(function(err) {
      console.log(err);
    });
  res.send(results);
});
//измнение существующего результата
router.patch("/results/:id", async (req, res) => {
  await modelRESULTS.findByIdAndUpdate(req.params.id, {
    mark: req.body.mark,
    test_level: req.body.test_level,
  });
  res.send(await modelRESULTS.findById(req.params.id));
});
//получение всех результатов
router.get("/results", async (req, res) => {
  const allResults = await modelRESULTS.find({});
  res.send(allResults);
});

//ТЕСТЫ

//добавление теста
router.post("/tests", async (req, res) => {
  console.log(req.body);
  const test = new modelTESTS({
    id: req.body.id,
    level: req.body.level,
    name: req.body.name,
    group: req.body.group,
    group_id: req.body.group_id,
  });
  await test
    .save()
    .then((doc) => {
      return doc;
    })
    .catch((err) => console.log(err));
  res.send(test);
});
//получение всех тестов
router.get("/tests", async (req, res) => {
  try {
    const allTests = await modelTESTS.find({});
    res.send(allTests);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
