const Token = artifacts.require("ERCToken");

module.exports = function(deployer) {
  deployer.deploy(Token, 'Tezos', 'XTZ', 1000);
};
