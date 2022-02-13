const authenticate = artifacts.require("Authentication");

module.exports = function(deployer) {
  deployer.deploy(authenticate);
};
