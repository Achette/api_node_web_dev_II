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

app.get("/tasks", (req, res) => {
  res.send(tasks);
});

app.post("/tasks", (req, res) => {

  if (!req.body.title)
    return res.status(404).send("ERRO! A task precisa ter um título!");

  newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    description:
      req.body.description || "Adicione uma descrição utilizando PUT.",
    completed: req.body.completed || false,
  };

  tasks.push(newTask);
  res.send(`A task de id ${newTask.id} foi criada com sucesso.`);
});
