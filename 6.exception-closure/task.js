function parseCount(valueToParse) {
  let valueParse = Number.parseFloat(valueToParse);
  if (isNaN(valueParse)) {
    throw new Error('Невалидное значение');
  }
  return valueParse;
}

function validateCount(valueToParse) {
  try {
    let value = parseCount(valueToParse);
    if (isNaN(value)) {
      return value;
    }
    return value;
  } catch (error) {
    return error;
  }
}
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b < c || a + c < b || c + b < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
  get perimeter() {
    return this.a + this.b + this.c;
  }
  get area() {
    let p = 1 / 2 * (this.perimeter);
    return parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      }
    }
  }
}