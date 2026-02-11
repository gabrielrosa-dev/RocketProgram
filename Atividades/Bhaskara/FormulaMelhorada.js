let a = 1
let b = -2
let c = 1

if (a === 0) {
    console.log("A variavel 'a' deve ser diferente de zero.")
}
else {
    let delta = (b**2) - (4*a*c)
    if (delta < 0) {
        console.log("A equação não possui raízes reais.")
    }
    else if (delta === 0) {
        let x = -b / (2*a)
        console.log("A equação possui uma raiz real: x = ", x)
    }
    else {
        let x1 = (-b + Math.sqrt(delta)) / (2*a)
        let x2 = (-b - Math.sqrt(delta)) / (2*a)

        console.log("Existem duas raízes reais:")
        console.log("x1 = ", x1)
        console.log("x2 = ", x2)
    }
}