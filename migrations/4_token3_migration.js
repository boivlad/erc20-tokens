const Token = artifacts.require("ERCToken");

module.exports = function(deployer) {
  deployer.deploy(Token, 'Monero', 'XMR', 1000);
};
