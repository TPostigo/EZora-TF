// src/paginas/CodeLab/sql/SQLPage.jsx
import React from 'react';
import './SQLPage.css';

const instruccionesIniciales = `
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT,
  age INTEGER,
  email TEXT
);

INSERT INTO users (name, age, email) VALUES
('Ana', 25, 'ana@example.com'),
('Luis', 32, 'luis@example.com'),
('Marta', 28, 'marta@example.com'),
('Pedro', 40, 'pedro@example.com'),
('Lucía', 19, 'lucia@example.com');
`;

const ejercicios = [
  {
    id: 1,
    explicacion: "Muestra todos los registros de la tabla users.",
    instruccion: "SELECT * FROM users;",
    resultado: (
      <table>
        <thead><tr><th>id</th><th>name</th><th>age</th><th>email</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Ana</td><td>25</td><td>ana@example.com</td></tr>
          <tr><td>2</td><td>Luis</td><td>32</td><td>luis@example.com</td></tr>
          <tr><td>3</td><td>Marta</td><td>28</td><td>marta@example.com</td></tr>
          <tr><td>4</td><td>Pedro</td><td>40</td><td>pedro@example.com</td></tr>
          <tr><td>5</td><td>Lucía</td><td>19</td><td>lucia@example.com</td></tr>
        </tbody>
      </table>
    )
  },
  {
    id: 2,
    explicacion: "Selecciona solo los nombres de los usuarios menores de 30 años.",
    instruccion: "SELECT name FROM users WHERE age < 30;",
    resultado: (
      <table>
        <thead><tr><th>name</th></tr></thead>
        <tbody>
          <tr><td>Ana</td></tr>
          <tr><td>Marta</td></tr>
          <tr><td>Lucía</td></tr>
        </tbody>
      </table>
    )
  },
  {
    id: 3,
    explicacion: "Cuenta cuántos usuarios hay en total.",
    instruccion: "SELECT COUNT(*) FROM users;",
    resultado: (
      <table>
        <thead><tr><th>COUNT(*)</th></tr></thead>
        <tbody><tr><td>5</td></tr></tbody>
      </table>
    )
  },
  {
    id: 4,
    explicacion: "Filtra los usuarios cuyo email contiene la palabra 'example'.",
    instruccion: "SELECT * FROM users WHERE email LIKE '%example%';",
    resultado: (
      <table>
        <thead><tr><th>id</th><th>name</th><th>age</th><th>email</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Ana</td><td>25</td><td>ana@example.com</td></tr>
          <tr><td>2</td><td>Luis</td><td>32</td><td>luis@example.com</td></tr>
          <tr><td>3</td><td>Marta</td><td>28</td><td>marta@example.com</td></tr>
          <tr><td>4</td><td>Pedro</td><td>40</td><td>pedro@example.com</td></tr>
          <tr><td>5</td><td>Lucía</td><td>19</td><td>lucia@example.com</td></tr>
        </tbody>
      </table>
    )
  },
  {
    id: 5,
    explicacion: "Muestra los usuarios ordenados por edad de mayor a menor.",
    instruccion: "SELECT * FROM users ORDER BY age DESC;",
    resultado: (
      <table>
        <thead><tr><th>id</th><th>name</th><th>age</th><th>email</th></tr></thead>
        <tbody>
          <tr><td>4</td><td>Pedro</td><td>40</td><td>pedro@example.com</td></tr>
          <tr><td>2</td><td>Luis</td><td>32</td><td>luis@example.com</td></tr>
          <tr><td>3</td><td>Marta</td><td>28</td><td>marta@example.com</td></tr>
          <tr><td>1</td><td>Ana</td><td>25</td><td>ana@example.com</td></tr>
          <tr><td>5</td><td>Lucía</td><td>19</td><td>lucia@example.com</td></tr>
        </tbody>
      </table>
    )
  },
  {
    id: 6,
    explicacion: "Actualiza la edad de Marta a 30.",
    instruccion: "UPDATE users SET age = 30 WHERE name = 'Marta';",
    resultado: (
      <p>✔️ Consulta ejecutada correctamente. (La edad de Marta se actualizó a 30)</p>
    )
  },
  {
    id: 7,
    explicacion: "Elimina al usuario que se llama Pedro.",
    instruccion: "DELETE FROM users WHERE name = 'Pedro';",
    resultado: (
      <p>✔️ Consulta ejecutada correctamente. (Pedro fue eliminado de la tabla)</p>
    )
  },
  {
    id: 8,
    explicacion: "Selecciona usuarios cuya edad esté entre 21 y 34 años.",
    instruccion: "SELECT * FROM users WHERE age > 20 AND age < 35;",
    resultado: (
      <table>
        <thead><tr><th>id</th><th>name</th><th>age</th><th>email</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Ana</td><td>25</td><td>ana@example.com</td></tr>
          <tr><td>2</td><td>Luis</td><td>32</td><td>luis@example.com</td></tr>
          <tr><td>3</td><td>Marta</td><td>28</td><td>marta@example.com</td></tr>
        </tbody>
      </table>
    )
  }
];

function SQLPage() {
  return (
    <div className="sqlpage-container">
      <h2 className="sqlpage-titulo-bloque">1. Crear la tabla y añadir datos (primero poner esto en la query para que funcionen las sentencias)</h2>
      <pre className="sqlpage-instruccion-inicial">{instruccionesIniciales}</pre>

      <h2>2. Consultar y modificar los datos</h2>
      {ejercicios.map(ej => (
        <div key={ej.id} className="sqlpage-ejercicio">
          <h3>Ejercicio {ej.id}</h3>
          <p className="sqlpage-explicacion">{ej.explicacion}</p>
          <p><strong>Instrucción:</strong></p>
          <pre className="sqlpage-instruccion">{ej.instruccion}</pre>
          <p><strong>Resultado esperado:</strong></p>
          <div className="sqlpage-tabla">{ej.resultado}</div>
        </div>
      ))}
    </div>
  );
}

export default SQLPage;
