const express = require("express");
const app = express();
const PORT = 8080;

const tasks = [
  {
    id: 1,
    title: "Estudar React",
    description: "Aprender sobre Hooks",
    completed: false,
  },
  {
    id: 2,
    title: "Estudar NEXT",
    description: "Estudar SSR",
    completed: true,
  },
];

app.use(express.json());

app.listen(PORT, () => {
  console.log(`O server está ativo na porta ${PORT}`);
});
