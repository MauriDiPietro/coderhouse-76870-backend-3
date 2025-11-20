class Calculadora {
  chequearValores(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) return true;
    return false;
  }

  sumar(num1, num2) {
    if (this.chequearValores(num1, num2))
      throw new Error("Argumentos inválidos");
    return num1 + num2;
  }

  restar(num1, num2) {
    if (this.chequearValores(num1, num2))
      throw new Error("Argumentos inválidos");
    return num1 - num2;
  }
}

export const calculadora = new Calculadora();
