// ejerciciosSql.js
const ejerciciosSql = [
  {
    id: 1,
    titulo: "Crear tabla de usuarios",
    enunciado: "Crea una tabla llamada 'users' con columnas: id (PK), name, age y email.",
    codigo: `CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT,
  age INTEGER,
  email TEXT
);`
  },
  {
    id: 2,
    titulo: "Insertar usuarios",
    enunciado: "Inserta 5 usuarios con datos ficticios.",
    codigo: `INSERT INTO users (name, age, email) VALUES
('Ana', 25, 'ana@example.com'),
('Luis', 32, 'luis@example.com'),
('Marta', 28, 'marta@example.com'),
('Pedro', 40, 'pedro@example.com'),
('Lucía', 19, 'lucia@example.com');`
  },
  {
    id: 3,
    titulo: "Seleccionar todos los usuarios",
    enunciado: "Muestra todos los registros de la tabla users.",
    codigo: `SELECT * FROM users;`
  },
  {
    id: 4,
    titulo: "Usuarios mayores de 30",
    enunciado: "Selecciona solo los usuarios con edad mayor a 30.",
    codigo: `SELECT * FROM users WHERE age > 30;`
  },
  {
    id: 5,
    titulo: "Seleccionar solo nombres",
    enunciado: "Muestra solo la columna name de todos los usuarios.",
    codigo: `SELECT name FROM users;`
  },
  {
    id: 6,
    titulo: "Contar registros",
    enunciado: "Cuenta cuántos usuarios hay en la tabla.",
    codigo: `SELECT COUNT(*) FROM users;`
  },
  {
    id: 7,
    titulo: "Actualizar edad",
    enunciado: "Cambia la edad de Marta a 30 años.",
    codigo: `UPDATE users SET age = 30 WHERE name = 'Marta';`
  },
  {
    id: 8,
    titulo: "Eliminar usuario",
    enunciado: "Elimina al usuario Pedro de la tabla.",
    codigo: `DELETE FROM users WHERE name = 'Pedro';`
  },
  {
    id: 9,
    titulo: "Ordenar por edad",
    enunciado: "Muestra los usuarios ordenados por edad descendente.",
    codigo: `SELECT * FROM users ORDER BY age DESC;`
  },
  {
    id: 10,
    titulo: "Filtrar por email",
    enunciado: "Muestra los usuarios cuyo email contenga 'example'.",
    codigo: `SELECT * FROM users WHERE email LIKE '%example%';`
  }
];

export default ejerciciosSql;