const ejerciciosPython = [
  {
    id: 1,
    titulo: "Imprimir un mensaje",
    enunciado: "Muestra en pantalla el mensaje ¡Hola, mundo!",
    codigo: 'print("¡Hola, mundo!")'
  },
  {
    id: 2,
    titulo: "Sumar dos números",
    enunciado: "Declara dos variables numéricas, súmalas y muestra el resultado.",
    codigo: 'a = 5\nb = 3\nprint("La suma es:", a + b)'
  },
  {
    id: 3,
    titulo: "Saludar al usuario",
    enunciado: "Solicita al usuario su nombre y muestra un saludo personalizado.",
    codigo: 'nombre = input("¿Cómo te llamas? ")\nprint("Hola", nombre)'
  },
  {
    id: 4,
    titulo: "Área de un triángulo",
    enunciado: "Calcula el área de un triángulo a partir de su base y altura.",
    codigo: 'base = float(input("Base: "))\naltura = float(input("Altura: "))\narea = (base * altura) / 2\nprint("Área del triángulo:", area)'
  },
  {
    id: 5,
    titulo: "Número par o impar",
    enunciado: "Pide un número al usuario y muestra si es par o impar.",
    codigo: 'n = int(input("Introduce un número: "))\nif n % 2 == 0:\n    print("Es par")\nelse:\n    print("Es impar")'
  },
  {
    id: 6,
    titulo: "Contar hasta 10",
    enunciado: "Usa un bucle for para contar del 1 al 10.",
    codigo: 'for i in range(1, 11):\n    print(i)'
  },
  {
    id: 7,
    titulo: "Mostrar frutas",
    enunciado: "Dada una lista de frutas, muestra cada una en una línea.",
    codigo: 'frutas = ["manzana", "banana", "naranja"]\nfor fruta in frutas:\n    print(fruta)'
  },
  {
    id: 8,
    titulo: "Función suma",
    enunciado: "Crea una función que reciba dos números y retorne su suma.",
    codigo: 'def sumar(a, b):\n    return a + b\n\nprint(sumar(4, 6))'
  },
  {
    id: 9,
    titulo: "Verificar número en lista",
    enunciado: "Comprueba si un número ingresado está en una lista de números.",
    codigo: 'numeros = [1, 3, 5, 7, 9]\nn = int(input("Introduce un número: "))\nif n in numeros:\n    print("Está en la lista")\nelse:\n    print("No está en la lista")'
  },
  {
    id: 10,
    titulo: "Factorial de un número",
    enunciado: "Calcula el factorial de un número usando un bucle for.",
    codigo: 'n = int(input("Número: "))\nfact = 1\nfor i in range(1, n + 1):\n    fact *= i\nprint("Factorial:", fact)'
  }
];

export default ejerciciosPython;
