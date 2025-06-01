const ejerciciosJavaScript = [
  {
    id: 1,
    titulo: "Mostrar un mensaje",
    enunciado: "Muestra un mensaje en consola usando console.log.",
    codigo: 'console.log("¡Hola, mundo!");'
  },
  {
    id: 2,
    titulo: "Suma de dos números",
    enunciado: "Declara dos variables numéricas y muestra su suma.",
    codigo: 'let a = 5;\nlet b = 3;\nconsole.log("La suma es:", a + b);'
  },
  {
    id: 3,
    titulo: "Condicional simple",
    enunciado: "Comprueba si un número es mayor que 10 y muestra un mensaje.",
    codigo: 'let numero = 12;\nif (numero > 10) {\n  console.log("El número es mayor que 10");\n} else {\n  console.log("El número es 10 o menor");\n}'
  },
  {
    id: 4,
    titulo: "Contar del 1 al 5",
    enunciado: "Muestra los números del 1 al 5 usando un bucle for.",
    codigo: 'for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}'
  },
  {
    id: 5,
    titulo: "Array de frutas",
    enunciado: "Crea un array con frutas y muéstralas con un bucle.",
    codigo: 'let frutas = ["manzana", "banana", "pera"];\nfrutas.forEach(fruta => console.log(fruta));'
  },
  {
    id: 6,
    titulo: "Función suma",
    enunciado: "Define una función que reciba dos parámetros y retorne su suma.",
    codigo: 'function sumar(a, b) {\n  return a + b;\n}\nconsole.log("Resultado:", sumar(4, 6));'
  },
  {
    id: 7,
    titulo: "Verificar número par",
    enunciado: "Verifica si un número es par o impar.",
    codigo: 'let num = 7;\nif (num % 2 === 0) {\n  console.log("Es par");\n} else {\n  console.log("Es impar");\n}'
  },
  {
    id: 8,
    titulo: "Objeto persona",
    enunciado: "Crea un objeto con nombre y edad, y muéstralo.",
    codigo: 'let persona = {\n  nombre: "Ana",\n  edad: 25\n};\nconsole.log(persona);'
  },
  {
    id: 9,
    titulo: "Método .map()",
    enunciado: "Duplica los números de un array usando map().",
    codigo: 'let numeros = [1, 2, 3];\nlet dobles = numeros.map(n => n * 2);\nconsole.log(dobles);'
  },
  {
    id: 10,
    titulo: "Factorial de un número",
    enunciado: "Calcula el factorial de un número usando un bucle.",
    codigo: 'let n = 5;\nlet fact = 1;\nfor (let i = 1; i <= n; i++) {\n  fact *= i;\n}\nconsole.log("Factorial:", fact);'
  }
];

export default ejerciciosJavaScript;
