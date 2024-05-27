const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestion_tesis'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL server.');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Obtener todos los estudiantes
app.get('/api/estudiantes', (req, res) => {
  db.query('SELECT * FROM Estudiantes', (err, results) => {
      if (err) {
          res.status(500).send(err);
      } else {
          res.json(results);
      }
  });
});

// Obtener un estudiante por ID
app.get('/api/estudiantes/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Estudiantes WHERE EstudianteID = ?', [id], (err, results) => {
      if (err) {
          res.status(500).send(err);
      } else {
          res.json(results[0]);
      }
  });
});

// Crear un nuevo estudiante
app.post('/api/estudiantes', (req, res) => {
  const { Nombre, Apellido, Carrera, TemaTesis, FechaAprobacion, Estado } = req.body;
  db.query(
      'INSERT INTO Estudiantes (Nombre, Apellido, Carrera, TemaTesis, FechaAprobacion, Estado) VALUES (?, ?, ?, ?, ?, ?)',
      [Nombre, Apellido, Carrera, TemaTesis, FechaAprobacion, Estado],
      (err, results) => {
          if (err) {
              res.status(500).send(err);
          } else {
              res.status(201).json({ EstudianteID: results.insertId });
          }
      }
  );
});

// Actualizar un estudiante
app.put('/api/estudiantes/:id', (req, res) => {
  const { id } = req.params;
  const { Nombre, Apellido, Carrera, TemaTesis, FechaAprobacion, Estado } = req.body;
  db.query(
      'UPDATE Estudiantes SET Nombre = ?, Apellido = ?, Carrera = ?, TemaTesis = ?, FechaAprobacion = ?, Estado = ? WHERE EstudianteID = ?',
      [Nombre, Apellido, Carrera, TemaTesis, FechaAprobacion, Estado, id],
      (err, results) => {
          if (err) {
              res.status(500).send(err);
          } else {
              res.status(200).send('Estudiante actualizado');
          }
      }
  );
});

// Eliminar un estudiante
app.delete('/api/estudiantes/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Estudiantes WHERE EstudianteID = ?', [id], (err, results) => {
      if (err) {
          res.status(500).send(err);
      } else {
          res.status(200).send('Estudiante eliminado');
      }
  });
});

