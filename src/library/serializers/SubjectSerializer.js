export default function SubjectSerializer(materia) {
  return {
    name: materia.disciplina,
    firstSemester: {
      nacs: materia.nacs1,
      partials: {
        nac: materia.nac1,
        am: materia.am1,
        ps: materia.ps1,
      },
      grade: materia.md1,
      isClosed: !!materia.md1,
    },
    secondSemester: {
      nacs: materia.nacs2,
      partials: {
        nac: materia.nac2,
        am: materia.am2,
        ps: materia.ps2,
      },
      grade: materia.md2,
      isClosed: !!materia.md2,
    },
    presence: materia.presenca,
    grade: materia.mp,
    isClosed: !!materia.mp
  }
}
