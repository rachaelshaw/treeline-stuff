module.exports.routes = {
  "post /pokemon": {
    "target": "PokemonController.create"
  },
  "get /": {
    "target": "Home$Controller.find"
  }
};