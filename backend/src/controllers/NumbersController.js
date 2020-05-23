const NumberModel = require("../models/Number");

const isValuesValid = (values) => {
  if (!Array.isArray(values)) {
    return false;
  }
  if (
    !values.every(
      (value) => Number.isInteger(value) && 1 <= value && value <= 10
    )
  ) {
    return false;
  }
  if (values.length !== 5) {
    return false;
  }
  return true;
};

module.exports = {
  async store(req, res) {
    const values = req.body.values;
    if (!isValuesValid(values)) {
      return res.status(400).json({
        error: "'values' não existe no corpo da requisição, ou é inválido",
      });
    }
    const numbers = new NumberModel({ values: values });
    const newNumbers = await numbers.save();
    if (newNumbers === numbers) {
      return res.sendStatus(200);
    } else {
      return res.status(503).json({
        error: "Não foi possível salvar 'values' no banco de dados",
      });
    }
  },
};
