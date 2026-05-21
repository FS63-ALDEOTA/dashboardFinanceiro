// Crie um programa que receba a quantidade total de alunos e a quantidade dos que estão presentes e mostre a quantidade de alunos faltantes

function ControleFaltas () {
  const alunosMatriculados = Number(prompt("Digite a quantidade de alunos matriculados"))
  const alunosPresentes = Number(prompt("Digite a quantidade de alunos presentes"))

  const alunosFaltantes = alunosMatriculados - alunosPresentes
  alert(`${alunosFaltantes} alunos faltaram nesta turma hoje`)
}

ControleFaltas()




