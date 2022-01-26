const authenticate = artifacts.require("Authenticate");

module.exports = function(deployer) {
  deployer.deploy(authenticate);
};
