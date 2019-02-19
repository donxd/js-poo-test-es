class Figura {
  constructor () {
    console.log('figura - creada');
  }

  getArea() {
    console.log('figura incompleta - area');
  }

  getPerimetro () {
    console.log('figura incompleta - perimetro');
  }
}

let figuraA = new Figura();

figuraA.getArea();
figuraA.getPerimetro();

//---------------------------------------

class Cuadrado extends Figura {
  constructor (_lado) {
    super();

    // if (_lado && ((typeof _lado === 'number') || (_lado instanceof Number)) && Number.isInteger(_lado)) { // validacion numeros enteros
    if (_lado && ((typeof _lado === 'number') || (_lado instanceof Number))) {
      this.lado = _lado;
      console.log('cuadrado - creado');

    } else {
      throw new Error('parametro lado no valido');
    }
  }
}

// let cuadroA = new Cuadrado(); // error
// let cuadroB = new Cuadrado('asdasd'); // error
let cuadroC = new Cuadrado(88); // ok
let cuadroD = new Cuadrado(34.77); // ok

cuadroC.getArea();
cuadroC.getPerimetro();

cuadroD.getArea();
cuadroD.getPerimetro();

//---------------------------------------


class CuadradoCompleto extends Cuadrado {
  constructor (_lado) {
    super(_lado);
    console.log('cuadrado completo - creado');
  }

  getArea () {
    const area = (this.lado*this.lado);
    console.log('cuadrado completo - area[', this.lado ,'] : ', area);

    return area;
  }

  getPerimetro () {
    const perimetro = (this.lado*4);
    console.log('cuadrado completo - perimetro[', this.lado ,'] : ', perimetro);

    return perimetro;
  }
}

// let cuadroA = new Cuadrado(); // error
// let cuadroB = new Cuadrado('asdasd'); // error
let cuadroCompletoC = new CuadradoCompleto(88); // ok
let cuadroCompletoD = new CuadradoCompleto(34.77); // ok

cuadroCompletoC.getArea();
cuadroCompletoC.getPerimetro();

cuadroCompletoD.getArea();
cuadroCompletoD.getPerimetro();


//---------------------------------------

class CuadradoEscalado extends CuadradoCompleto {
  constructor (_lado, _escala) {
    super(_lado);

    if (_escala && ((typeof _escala === 'number') || (_escala instanceof Number))) {
      this.escala = _escala;
      console.log('cuadrado escalado - creado');

    } else {
      throw new Error('parametro escala no valido');
    }
  }

  getArea () {
    const area = super.getArea();
    const areaEscala = area * this.escala;

    console.log('cuadrado escala - area[', this.lado ,'][', this.escala ,'] : ', areaEscala);
    return areaEscala;
  }

  getPerimetro () {
    const perimetro = super.getPerimetro();
    const perimetroEscala = perimetro * this.escala;

    console.log('cuadrado escala - perimetro[', this.lado ,'][', this.escala ,'] : ', perimetroEscala);
    return perimetroEscala;
  }
}

// let cuadroEscalaC = new CuadradoEscalado(5, 'dasdf'); // error
let cuadroEscalaC = new CuadradoEscalado(88, 3); // ok
let cuadroEscalaD = new CuadradoEscalado(34.77, 0.5); // ok

cuadroEscalaC.getArea();
cuadroEscalaC.getPerimetro();

cuadroEscalaD.getArea();
cuadroEscalaD.getPerimetro();


//---------------------------------------

console.log('tipo [ figuraA ] -> ', typeof figuraA);
console.log('tipo [ cuadroC ] -> ', typeof cuadroC);
console.log('tipo [ cuadroCompletoD ] -> ', typeof cuadroCompletoD);
console.log('tipo [ cuadroEscalaC ] -> ', typeof cuadroEscalaC);

console.log('clase de [ figuraA ] -> ', figuraA.constructor.name);
console.log('clase de [ cuadroC ] -> ', cuadroC.constructor.name);
console.log('clase de [ cuadroCompletoD ] -> ', cuadroCompletoD.constructor.name);
console.log('clase de [ cuadroEscalaD ] -> ', cuadroEscalaD.constructor.name);

console.log('es figuraA tipo [ object ] ? -> ', figuraA instanceof Object);
console.log('es figuraA tipo [ Figura ] ? -> ', figuraA instanceof Figura);
console.log('es figuraA tipo [ Cuadrado ] ? -> ', figuraA instanceof Cuadrado);
console.log('es figuraA tipo [ CuadradoCompleto ] ? -> ', figuraA instanceof CuadradoCompleto);
console.log('es figuraA tipo [ CuadradoEscalado ] ? -> ', figuraA instanceof CuadradoEscalado);

console.log('es cuadroC tipo [ object ] ? -> ', cuadroC instanceof Object);
console.log('es cuadroC tipo [ Figura ] ? -> ', cuadroC instanceof Figura);
console.log('es cuadroC tipo [ Cuadrado ] ? -> ', cuadroC instanceof Cuadrado);
console.log('es cuadroC tipo [ CuadradoCompleto ] ? -> ', cuadroC instanceof CuadradoCompleto);
console.log('es cuadroC tipo [ CuadradoEscalado ] ? -> ', cuadroC instanceof CuadradoEscalado);

console.log('es cuadroCompletoD tipo [ object ] ? -> ', cuadroCompletoD instanceof Object);
console.log('es cuadroCompletoD tipo [ Figura ] ? -> ', cuadroCompletoD instanceof Figura);
console.log('es cuadroCompletoD tipo [ Cuadrado ] ? -> ', cuadroCompletoD instanceof Cuadrado);
console.log('es cuadroCompletoD tipo [ CuadradoCompleto ] ? -> ', cuadroCompletoD instanceof CuadradoCompleto);
console.log('es cuadroCompletoD tipo [ CuadradoEscalado ] ? -> ', cuadroCompletoD instanceof CuadradoEscalado);

console.log('es cuadroEscalaC tipo [ object ] ? -> ', cuadroEscalaC instanceof Object);
console.log('es cuadroEscalaC tipo [ Figura ] ? -> ', cuadroEscalaC instanceof Figura);
console.log('es cuadroEscalaC tipo [ Cuadrado ] ? -> ', cuadroEscalaC instanceof Cuadrado);
console.log('es cuadroEscalaC tipo [ CuadradoCompleto ] ? -> ', cuadroEscalaC instanceof CuadradoCompleto);
console.log('es cuadroEscalaC tipo [ CuadradoEscalado ] ? -> ', cuadroEscalaC instanceof CuadradoEscalado);

