const express = require("express");

const router = express.Router();

const todoList = [
  {
    id: 1,
    text: "리액트 기초 공부하기",
    status: false,
  },
];

let id = 1;

router.get("/", (request, response) => {
  response.send("Hello Node.js");
});

router.get("/api/todo", (request, response) => {
  response.json(todoList);
});

router.post("/api/todo", (request, response) => {
  const { text, status } = request.body;

  console.log(text);

  todoList.push({ id: ++id, text: text, status: status });

  response.send("데이터 입력 완료");
});

module.exports = router;
