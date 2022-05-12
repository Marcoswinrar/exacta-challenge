export const nomeValidator = (field) => {
  const nomeRegex = new RegExp(/[0-9]/)
  return !nomeRegex.test(field) && field.length !== 0
}

export const rgValidator = (field) => {
  const rg = field.replace(/[^A-Z0-9]+/ig, "")
  return rg.length === 9
}

export const dateValidator = (field) => {
  const dateRegex =
    new RegExp(/^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/)
      .test(field)
  return dateRegex
}

export const selectValidator = (field) => field !== "Selecione"

