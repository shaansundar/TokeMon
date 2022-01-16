const CONTRACT_ADDRESS = '0xad72cf88660c056933320983eEf7fB49372d77a6';
const transformCharacterData = (characterData) => {
    return {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
  };
  
export { CONTRACT_ADDRESS, transformCharacterData };