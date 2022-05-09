export const validateForm = (fields) => {
  const errors = []
  /**
   * Testa se string de usuário possuí números
   */
  const nomeRegex = new RegExp(/[0-9]/)
  if (nomeRegex.test(fields.nome) || fields.nome.length === 0) {
    errors.push("Nome do usuário inválido!")
  }
  /**
   * Essa validação é muito vaga, apenas para escopo do teste
   * o rg é algo complexo de se testar, pois cada estado é diferente.
   * Este campo vai ser validado conforme formato do layout apresentado "99.999.999-9"
   */

  const rg = fields.rg.replace(/[^A-Z0-9]+/ig, "")
  if (rg.length < 9) {
    errors.push("Formato de RG inválido!")
  }

  const dataRegex = new RegExp(/^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/)
  if (!dataRegex.test(fields.dataEmissao)) {
    errors.push("É necessário preencher a Data de Emissão!")
  }

  if (fields.orgaoEmissor.length === 0) {
    errors.push("É necessário preencher o Orgão Emissor!")
  }

  if(!fields.sexo) {
    errors.push("É obrigatório informar o sexo!")
  }

  return errors
}