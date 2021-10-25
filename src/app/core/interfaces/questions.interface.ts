export interface ResponseQuestions {
  id_questao: string,
  texto_questao: string,
  respostas: respostas[]
}
export interface respostas {
  id_resposta: number,
  texto_resposta: string
}
