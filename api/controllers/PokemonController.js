var Machine = require("machine");
module.exports = {
    'create': function(req, res) {
        Machine.build({
            inputs: {
                "pokemonId": {
                    "example": 1,
                    "required": true
                }
            },
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Get Pokemon
                sails.machines['7cac2099-e638-4828-a233-7d29bf553b55_1.3.0'].getPokemon({
                    "id": inputs.pokemonId
                }).exec({
                    "error": function(getPokemon) {
                        return exits.error({
                            data: getPokemon,
                            status: 500
                        });

                    },
                    "success": function(getPokemon) {
                        return exits.respond({
                            data: getPokemon,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    }
                });
            }
        }).configure(req.params.all(), {
            respond: res.response,
            error: res.negotiate
        }).exec();
    }
};