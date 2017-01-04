var mongoose = require("mongoose");

var BlockSchema = mongoose.Schema({
    BlockID: {
        type: Number,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        required: true
    },
    BuildingID: {
        type: Number,
        required: true, 
        unique: true
    }
});

var Block1 = mongoose.model('Blocks', BlockSchema);

module.exports = {

    listAllBlocks: function (callback) {
        Block1.find(callback);
    },
    findBlock: function (Name, callback) {
        Block1.find({Name: Name}, callback);
    },
    createBlock: function (Block, callback) {
        Block1.create(Block, callback);
    },
    updateBlock: function (BlockID, newName, newBuildingRef, callback) {
        Block1.update({BlockID: BlockID}, newName, newBuildingRef, callback);
    }
};