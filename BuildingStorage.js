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

var Building1 = mongoose.model('Buildings', BuildingSchema);

module.exports = {

    listAllBuildings: function (callback) {
        Building1.find(callback);
    },
    findBuilding: function (City, callback) {
        Building1.find({City: City}, callback);
    },
    createBuilding: function (building, callback) {
        Building1.create(building, callback);
    }, 
    updateBuilding: function (BuildingID, newName, newCity, callback) {
        Building1.update({BuildingID: BuildingID}, newName, newCity, callback); 
    }
};