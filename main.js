var express = require("express");
var parser = require("body-parser");

var mongoose = require ("mongoose"); 
mongoose.connect("mongodb://localhost/1234"); 

var dalBuildings    = require("./BuildingStorage.js");
var dalBlocks       = require("./BlockStorage.js");
var dalLocations    = require("./LocationStorage.js");
var dalDrones       = require("./DroneStorage.js");

var validateBuildings   = require("./Validators/validateBuildings"); 
var validateBlocks      = require("./Validators/validateBlocks"); 
var validateLocations   = require("./Validators/validateLocations"); 
var validateDrones      = require("./Validators/validateDrones"); 

var app = express();
app.use(parser.json());



//--Buildings--//
app.get("/Buildings", function (request, response) {
    dalBuildings.listAllBuildings(function(error, Buildings){
        if(error){
            throw error; 
        }
    response.send(Locations); 
    }); 
}); 

app.get("/Buildings/:name", function (request, response) {
    dalBuildings.findBuildings(request.params.name, function(error, Buildings){
        if (error) {
            throw error; 
        }
        response.send(Building);
    });
}); 

var Building = function(BuildingID, Name, City) {
    this.BuildingID = BuildingID; 
    this.Name = Name; 
    this.City = City; 
}; 

app.post("/Buildings", function (request, response) {
    var Building = new Building(request.body.BuildingID, request.body.Name, request.body.City); 

    var errors = validateBuildings.checkValues(Building, "BuildingID", "Name", "City");
    if (errors > 0) {
        return; 
    }
    
    dalBuildings.createBuilding(Building, function(error, Building) {
        if(error) {
            console.log(error); 
        }
        response.send(Building); 
        console.log(JSON.stringify(Building)+"\n"+"added"); 
    }); 
}); 

app.put("/Buildings/:BuildingID", function(request, response){
    var Building = new Building(request.body.BuildingID, request.body.Name, request.body.City); 
    var errors = validateBuildings.checkValues(Building, "BuildingID", "Name", "City"); 
    if (errors > 0) {
        return; 
    }
    dalBuildings.updateBuilding(request.params.BuildingID, Name, City, function(error, Building) {
        if(error) {
            console.log(error); 
        }
        response.send(Building); 
        console.log(JSON.stringify(request.body.BuildingID)+"\n"+"updated"); 
    }); 
}); 

//--Blocks--//
app.get("/Blocks", function(request, response) {
    dalBlocks.listAllBlocks(function(error, Blocks) {
        if(error) {
            throw error; 
        }
        response.send(Blocks); 
    }); 
});

app.get("Blocks/:Name", function(request, response) {
    dalBlocks.findBlock(request.params.Name, function(error, Block) {
        if(error) {
            throw error; 
        }
        response.send(Block); 
    }); 
});

var Block = function(request, response) {
    this.BlockID = BlockID; 
    this.Name = Name; 
    this.BuildingID = BuildingID; 
}; 

app.post("/Blocks", function(request, response) {
    var Block = new Block(request.body.BlockID, request.body.Name, request.body.BuildingID); 
    
    var errors = validateBlocks.checkValue
})
/*

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
    response.send(dalLocations.listAllLocations());
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
    if (existingLocation) {
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
});*/

app.listen(1234);
console.log("Server started");
console.log("Hellow World"); 
