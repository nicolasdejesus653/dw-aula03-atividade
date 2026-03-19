console.log("\n===== TF - Aula 03 | Tipos de Referência e Loops =====")

// ================================
// 1) Criação de objeto com array interno
// ================================

const aluno = {
    nome: "Nicolas",
    idade: 18,
    curso: "ADS",
    linguagens: ["JavaScript", "HTML", "CSS"]
}

console.log("\n1) Objeto criado:")
console.log(aluno)


// ================================
// 2) Acessando propriedades
// ================================

console.log("\n2) Acessando propriedades do objeto:")
console.log("Nome:", aluno.nome)
console.log("Idade:", aluno.idade)
console.log("Curso:", aluno.curso)


// ================================
// 3) Iteração nas propriedades (for...in)
// ================================

console.log("\n3) Percorrendo propriedades do objeto (for...in):")

for (let propriedade in aluno) {
    console.log(propriedade + ":", aluno[propriedade])
}


// ================================
// 4) Iteração no array interno (for...of)
// ================================

console.log("\n4) Percorrendo array linguagens (for...of):")

for (let linguagem of aluno.linguagens) {
    console.log("Linguagem:", linguagem)
}


// ================================
// 5) Comparação entre tipos de referência
// ================================

console.log("\n5) Comparação entre objetos:")

const obj1 = { valor: 10 }
const obj2 = { valor: 10 }

console.log(obj1 === obj2) 
// false -> objetos diferentes na memória


// ================================
// 6) Cópia por referência
// ================================

console.log("\n6) Cópia por referência:")

const copiaReferencia = aluno

copiaReferencia.nome = "Pedro"

console.log("Aluno original:", aluno.nome)
console.log("Cópia referência:", copiaReferencia.nome)
// Ambos mudam porque apontam para o mesmo objeto


// ================================
// 7) Cópia com spread operator
// ================================

console.log("\n7) Cópia usando spread operator:")

const copiaSpread = { ...aluno }

copiaSpread.nome = "Maria"

console.log("Objeto original:", aluno.nome)
console.log("Objeto copiado:", copiaSpread.nome)


// ================================
// 8) Transformação para JSON
// ================================

console.log("\n8) Convertendo objeto para JSON:")

const alunoJSON = JSON.stringify(aluno)

console.log(alunoJSON)

console.log("\n===== Fim do exercício =====")