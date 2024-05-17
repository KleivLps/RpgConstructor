class Personal {
    constructor(nombre,vida) {
        this.nombre = nombre
        this.vida = vida
    }
    comer (cantidad) {
        this.vida = this.vida + cantidad
        console.log("la vida de " +this.nombre+ " acaba de aumentar "+cantidad+ " puntos por comer, su vida total es: "+this.vida)
    }
    entrenar(cantidad) {
        this.vida = this.vida - cantidad
        console.log("la vida de "+this.nombre+" acaba de disminuir "+cantidad+" puntos por entrenar, su vida total es: " +this.vida)
    }
}

const juan = new Personal("juan",100)
const javier = new Personal("javier",120)
const jose = new Personal("jose",200)

console.log( juan)
console.log(javier)
console.log(jose)

juan.comer(10)
juan.comer(50)
juan.comer(5)
juan.entrenar(30)


javier.comer (20)
javier.comer (20)
javier.entrenar (10)
javier.entrenar (25)

jose.entrenar(60)
jose.comer(25)
jose.entrenar (80)
jose.entrenar (45)