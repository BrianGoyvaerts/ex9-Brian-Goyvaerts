var express = require("express");
var parser = require("body-parser");

var dalBuildings = require("./BuildingStorage.js");
var dalBlocks = require("./BlockStorage.js");
var dalLocations = require("./LocationStorage.js");
var dalDrones = require("./DroneStorage.js");

var validator = require("./Validate.js");

var app = express();
app.use(parser.json());


app.get("/Buildings", function (request, response) {
    "use strict";
    response.send(dalBuildings.listAllBuildings());
});

app.get("/Buildings/:id", function (request, response) {
    "use strict";
    var Building = dalBuildings.findBuildings(request.params.id);
    if (Building) {
        response.send(Building);
    } else {
        response.status(404).send();
    }
});

app.post("/Buildings", function (request, response) {
    "use strict";
    var Building = request.body; 

    var errors = validator.fieldsNotEmpty(Building, "Name", "City");
    
    if (errors) {
        response.status(400).send({msg: "Following field(s) are mandatory:" + errors.concat()});
        return;
    }

    var existingBuilding = dalBuildings.findBuilding(Building.Name);
    if (existingBuilding) {
        response.status(409).send({msg: "Name must be unique", link: "../Buildings/" + existingBuilding.id});
        return;
    }
    Building.id = Building.Name;
    dalBuildings.saveBuilding(Building);
    response.status(201).location("../Buildings/" + Building.id).send();
});




app.get("/Blocks", function (request, response) {
    "use strict";
    response.send(dalBlocks.listAllBlocks());
});

app.get("/Blocks/:id", function (request, response) {
    "use strict";
    var Block = dalBlocks.findBlock(request.params.id);
    if (Block) {
        response.send(Block);
    } else {
        response.status(404).send();
    }
});

app.post("/Blocks", function (request, response) {
    "use strict";
    var Block = request.body;

    var errors = validator.fieldsNotEmpty(Block, "Blockid", "blockname", "buildingid");
    if (errors) {
        response.status(400).send({msg: "Following field(s) are mandatory:" + errors.concat()});
        return;
    }

    var existingBlock = dalBlocks.findBlock(Block.Blockid);
    if (existingBlock) {
        response.status(409).send({msg: "Blockid must be unique", link: "../Blocks/" + existingBlock.id});
        return;
    }
    Block.id = Block.Blockid;
    dalBlocks.saveBlock(Block);
    response.status(201).location("../Blocks/" + Block.id).send();
});




app.get("/Locations", function (request, response) {
    "use strict";
    response.send(dalLocations.listAllSales());
});

app.get("/Locations/:id", function (request, response) {
    "use strict";
    var Location = dalLocations.findLocation(request.params.id);
    if (Location) {
        response.send(Location);
    } else {
        response.status(404).send();
    }
});

app.post("/Locations", function (request, response) {
    "use strict";
    var Location = request.body;

    var errors = validator.fieldsNotEmpty(Location, "name", "type", "coordinate", "floor", "capacity", "blockid", "blockid");
    if (errors) {
        response.status(400).send({msg: "Following field(s) are mandatory:" + errors.concat()});
        return;
    }

    var existingLocation = dalLocations.findLocation(Location.locationid);
    if (existinglocation) {
        response.status(409).send({msg: "id must be unique", link: "../Locations/" + existingLocation.id});
        return;
    }
    Location.id = Location.locationid;
    dalLocations.saveLocation(Location);
    response.status(201).location("../Locations/" + Location.id).send();
});




app.get("/Drones", function (request, response) {
    "use strict";
    response.send(dalDrones.listAllDrones());
});

app.get("/Drones/:id", function (request, response) {
    "use strict";
    var Drone = dalDrones.findDrone(request.params.id);
    if (Drone) {
        response.send(Drone);
    } else {
        response.status(404).send();
    }
});

app.post("/Drones", function (request, response) {
    "use strict";
    var Drone = request.body;

    var errors = validator.fieldsNotEmpty(Drone, "name", "mac_address", "locationid", "last_packet_date", "blockid", "buildingid");
    if (errors) {
        response.status(400).send({msg: "Following field(s) are mandatory:" + errors.concat()});
        return;
    }

    var existingDrone = dalDrones.findDrone(Drone.id);
    if (existingDrone) {
        response.status(409).send({msg: "id must be unique", link: "..//" + existingDrone.id});
        return;
    }
    dalDrones.saveDrone(Drone);
    response.status(201).location("../Drones/" + Drone.id).send();
});

app.listen(3556);
console.log("Server started");

console.log("Hellow World"); 
