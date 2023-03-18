//Operador ternarios ? :

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';
console.log(nivelUsuario)

const corUsuario = 'Pink';
const corPadao = corUsuario || 'Preta';