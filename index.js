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

// GET
app.get("/tasks", (req, res) => {
  res.send(tasks);
});

// GET BY ID
app.get("/tasks/:id", (req, res) => {
  const { id } = req.params;

  const hasId = tasks.some((task) => task.id == id);

  hasId
    ? res.send(tasks[id - 1])
    : res.status(404).send("ERRO! Informe um id válido. Tente novamente");
});

// POST
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

// PUT
app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;

  const hasId = tasks.some((task) => task.id == id);

  if (!hasId) return res.status(404).send("ERRO! Informe um id válido!");

  tasks[id - 1] = req.body;
  tasks[id - 1].id = id;

  res.send(`A task de id: ${id} foi alterada com sucesso`);
});

// DELETE
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;

  const hasId = tasks.some((task) => task.id == id);

  if (!hasId) return res.status(404).send("ERRO! Informe um id válido!");

  tasks.splice(id - 1, 1);
  res.send(`Task de id ${id} foi deletada com sucesso!`);
});
