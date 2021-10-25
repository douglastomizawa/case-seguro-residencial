export const environment = {
  production: true,
  api: {
    getCep: "https://mktseguros-api.cloud.itau.com.br/v1/codigo-enderecamento-postal/endereco?gw-app-key={key}&cep={cep}",
    getQuestions: "https://6170ae7f23781c0017289ae2.mockapi.io/v1/api/questoes",
    getCoverage:"https://6170ae7f23781c0017289ae2.mockapi.io/v1/api/cobertura",
    persistence: "https://6170ae7f23781c0017289ae2.mockapi.io/v1/api/assistencias",
  },
  key: "345e3a80802a0139990816c8e5eebdc7"
};
