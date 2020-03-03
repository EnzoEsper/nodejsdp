function createProxy(subject) {
  // en el caso de que se quiera mantener la prototype chain se puede usar herencia pseudo-clasica
  let proto = Object.getPrototypeOf(subject);

  function Proxy(subject) {
    this.subject = subject;
  }

  Proxy.prototype = Object.create(proto);

  // metodo intervenido -> metodo interceptado para ser manipulado (en este caso modifica el resultado)
  Proxy.prototype.hello = function() {
    return this.subject.hello() + ' world!';
  }

  // metodo delegado -> metodo delegado al subject
  Proxy.prototype.goodbye = function() {
    return this.subject.goodbye.apply(this.subject, arguments)
  }

  return new Proxy(subject);
}

// como javascript es de tipado dinamico se puede evitar usar herencia y usar otro enfoque mas inmediato
// como por ej utilizando el patron factory y un objeto literal.
/* function createProxy(subject) {
  return {
    // metodo intervenido
    hello: function() {
      return subject.hello() + ` world!`;
    },
    // metodo delegado
    goodbye: function() {
      return subject.goodbye.apply(subject, arguments);
    }
  };
} */

const foo = {
  hello: () => `hello foo`,
  goodbye: () => `goodbye foo`
}

const proxy = createProxy(foo);
console.log(proxy.hello());
console.log(proxy.goodbye());


// En el caso de que el subject tenga un prototype y se quiera mantener la prototype chain
// ejecutando proxy instanceof Foo deberia retornar true para comprobarlo.
/* function Foo() {
}

Foo.prototype.hello = () => `hello foo`;
Foo.prototype.goodbye = () => `goodbye foo`;

let foo = new Foo;
console.log(proxy instanceof Foo); */

// NOTA: Si se quisiera delegar la mayoria de los metodos, puede resultar conveniente hacerlo de forma
// automatica utilizando alguna libreria como por ejemplo delegates https://npmjs.org/package/delegates