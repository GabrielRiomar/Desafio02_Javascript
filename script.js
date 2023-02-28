// - nome;
// - nota da primeira prova;
// - nota da segunda prova.

// Depois de criada a lista:

// - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
// - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

const students = [
  {
    name: 'Aline',
    score1: 8,
    score2: 6.5
  },

  {
    name: 'Jonas',
    score1: 6,
    score2: 7.8
  },

  {
    name: 'Vlad',
    score1: 7,
    score2: 7
  },

  {
    name: 'Leo',
    score1: 9.3,
    score2: 4
  }
]

function averageScore(score1, score2) {
  return (score1 + score2) / 2
}

for (let student of students) {
  const average = averageScore(student.score1, student.score2)
  if (average >= 7) {
    alert(
      `Parabéns ${student.name} foi aprovado(a) com média ${average.toFixed(
        1
      )} `
    )
  } else {
    alert(
      `Estudante ${student.name} foi reaprovado(a) com média ${average.toFixed(
        1
      )}\nTente novamente!`
    )
  }
}
