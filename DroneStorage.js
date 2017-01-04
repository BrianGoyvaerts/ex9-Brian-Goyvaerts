var mongoose = require("mongoose");

var DroneSchema = mongoose.Schema({
    DroneID: {
        type: Number,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        required: true
    },
    Mac_Address: {
        type: String,
        required: true
    },
    Last_Packet_Date: {
        type: Date, 
        required: true
    }, 
    LocationID: {
        type: Number,
        required: true, 
        unique: true
    }, 
    BlockID: {
        type: Number,
        required: true, 
        unique: true
    }, 
    BuildingID: {
        type: Number,
        required: true, 
        unique: true
    }
 });

var Drone1 = mongoose.model('Drones', DroneSchema);

module.exports = {

    listAllDrones: function (callback) {
        Drone1.find(callback);
    },
    findDrone: function (DroneID, callback) {
        Drone1.find({DroneID: DroneID}, callback);
    },
    createDrone: function (Drone, callback) {
        Drone1.create(Drone, callback);
    },
    updateDrone: function (DroneID, newDrone, callback) {
        Drone1.update({DroneID: DroneID}, newDrone, callback);
    }
};