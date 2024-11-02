export function getValueByPath(obj, path) {
  const keys = path.split('.'); // Divide a string em partes
  const result = keys.reduce((acc, key) => acc && acc[key], obj); // Acessa as propriedades

  return result; // Retorna o resultado
}