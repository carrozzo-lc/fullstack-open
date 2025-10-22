require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const Person = require('./models/person');
const app = express();

morgan.token('body', function (req, res) {
  return JSON.stringify(req.body);
});

app.use(cors());
app.use(express.json());
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.send('hello, world!');
});

app.get('/api/persons', (request, response) => {
  Person.find({}).then((persons) => {
    response.json(persons);
  });
});

// app.get('/info', (request, response) => {
//   const info = `
//     Phonebook has info for ${persons.length} people <br>
//     ${new Date()}
//   `;
//   response.type('text/html');
//   response.send(info);
// });

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then((person) => {
    response.json(person);
  });
});

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id;

  Person.deleteOne({ _id: id })
    .then((person) => {
      console.log(id);
      response.json(person);
    })
    .catch((e) => {
      console.log(e);
    });
});

app.post('/api/persons', morgan(':body'), (request, response) => {
  const body = request.body;

  if (!body.number) {
    return response.status(400).json({
      error: 'number missing',
    });
  }

  if (!body.name) {
    return response.status(400).json({
      error: 'name missing',
    });
  }

  // const isPersonExist = persons.find((person) => person.name === body.name);
  // if (isPersonExist) {
  //   return response.status(400).json({
  //     error: 'name must be unique',
  //   });
  // }

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person
    .save()
    .then((savedPerson) => {
      response.json(savedPerson);
    })
    .catch((e) => {
      console.log(e);
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
