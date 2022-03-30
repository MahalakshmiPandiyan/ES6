function * functiongen()
{
    yield 10;
    yield 20;
    yield 30;
}

var gen = functiongen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());