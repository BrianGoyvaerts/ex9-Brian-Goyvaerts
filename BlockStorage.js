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
        required: true
    }
});

var Block = mongoose.model('Blocks', BlockSchema);

module.exports = {

    listAllBlocks: function (callback) {
        Block.find(callback);
    },
    findBlock: function (Name, callback) {
        Block.find({Name: Name}, callback);
    },
    createBlock: function (Block, callback) {
        Block.create(Block, callback);
    },
    updateBlock: function (BlockID, newName, newBuildingRef, callback) {
        Block.update({BlockID: BlockID}, newName, newBuildingRef, callback);
    }
};