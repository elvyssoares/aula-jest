module.exports = class CPF {

  constructor(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]+/g, "");

    if (!this.validarCPF(cpf)) {
      throw new Error("CPF inválido. Por favor, forneça um CPF válido.");
    }

    this.value = cpf;
  }

  equals(other) {
    return this.value === other.value;
  }

  toString() {
    return this.value;
  }

  validarCPF(cpf) {

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) return false;

    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cpf)) return false;

    // Validação do primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(9))) return false;

    // Validação do segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(10))) return false;

    return true;
  }
}
