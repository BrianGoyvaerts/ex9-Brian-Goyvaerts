var mongoose = require("mongoose");

var BuildingSchema = mongoose.Schema({
    BuildingID: {
        type: Number,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    }
});

var Building = mongoose.model('Buildings', BuildingSchema);

module.exports = {

    listAllBuildings: function (callback) {
        Building.find(callback);
    },
    findBuilding: function (City, callback) {
        Building.find({City: city}, callback);
    },
    createBuilding: function (building, callback) {
        Building.create(building, callback);
    }
};