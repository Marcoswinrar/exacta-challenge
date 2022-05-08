/**
 * Aqui ficam as configs dos inputs da página do form de usuário
 */
// eslint-disable-next-line
export const inputs = [
  {
    id: 1,
    name: "nome",
    type: "text",
    label: "Nome",
    pattern: "^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$",
    required: true,
    hasSeparator: true
  },
  {
    id: 2,
    name: "rg",
    type: "text",
    label: "Número do RG",
    mask: "99.999.999-9",
    hasSeparator: true,
    required: true
  },
  {
    id: 3,
    name: "dataEmissao",
    type: "text",
    label: "Data de Emissão",
    mask: "99/99/9999",
    pattern: "[0-9]{2}\/[0-9]{2}\/[0-9]{4}$",
    required: true,
    hasSeparator: true
  }
]