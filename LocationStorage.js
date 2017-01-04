var mongoose = require("mongoose");

var LocationSchema = mongoose.Schema({
    LocationID: {
        type: Number,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        required: true
    },
    Type: {
        type: String,
        required: true
    },
    Coordinate: {
        type: String,
        required: true
    }, 
    Floor: {
        type: Number,
        required: true
    }, 
    Capacity: {
        type: Number,
        required: true
    }, 
    BlockID: {
        type: Number,
        required: true
    }, 
    BuildingID: {
        type: Number,
        required: true
    }
});

var Location1 = mongoose.model('Locations', LocationSchema);

module.exports = {

    listAllLocations: function (callback) {
        Location1.find(callback);
    },
    findLocation: function (Coordinate, callback) {
        Location1.find({Coordinate: Coordinate}, callback);
    },
    createLocation: function (Location, callback) {
        Location1.create(Location, callback);
    },
    updateLocation: function (LocationID, newLocation, callback) {
        Location1.update({LocationID: LocationID}, newLocation, callback);
    }
};