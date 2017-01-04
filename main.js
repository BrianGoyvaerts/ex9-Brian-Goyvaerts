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
    response.send(Buildings); 
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
    var Building1 = new Building(request.body.BuildingID, request.body.Name, request.body.City); 

    var errors = validateBuildings.checkValues(Building, "BuildingID", "Name", "City");
    if (errors > 0) {
        return; 
    }
    
    dalBuildings.createBuilding(Building1, function(error, Building1) {
        if(error) {
            console.log(error); 
        }
        response.send(Building1); 
        console.log(JSON.stringify(Building1)+"\n"+"added"); 
    }); 
}); 

app.put("/Buildings/:BuildingID", function(request, response){
    var Building1 = new Building(request.body.BuildingID, request.body.Name, request.body.City); 
    var errors = validateBuildings.checkValues(Building1, "BuildingID", "Name", "City"); 
    if (errors > 0) {
        return; 
    }
    dalBuildings.updateBuilding(request.params.BuildingID, Name, City, function(error, Building1) {
        if(error) {
            console.log(error); 
        }
        response.send(Building1); 
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
    
    var errors = validateBlocks.checkValues(Block, "BlockID", "Name", "BuildingID"); 
    if (errors>0) {
        return; 
    }
    
    dalBlocks.createBlock(Block, function(error, Block1) {
        if(error) {
            console.log(error); 
        }
        response.send(Block1); 
        console.log(JSON.stringify(request.body.BlockID)+"\n"+"updated"); 
    });
}); 

app.put("/Blocks/:BlockID", function(request, response) {
    var Block = new Block(request.body.BlockID, request.body.Name, request.body.BuildingID); 
    var errors = validateBlocks.checkValues(Block, "BlockID", "Name", "BuildinID"); 
    if (errors > 0){
        return; 
    }
    dalBlocks.updateBlock(request.params.BlockID, Block, function(error, Block1) {
        if(error) {
            console.log(error); 
        }
        response.send(Block1); 
        console.log(JSON.stringify(request.body.BlockID)+"\n"+"updated"); 
    });
});


//--Locations--//
app.get("/Locations", function(request, response) {
    dalLocations.listAllLocations(function(error, Locations) {
        if(error) {
            throw error; 
        }
        response.send(Locations); 
    }); 
}); 
        
app.get("/Locations/:LocationID", function(request, response) {
    dalLocations.findLocation(request.params.LocationID, function(error, Location) {
        if(error) {
            throw error; 
        }
        response.send(Location); 
    }); 
}); 

var Location = function(LocationID, Name, Type, Coordinate, Floor, Capacity, BlockID, BuildingID) {
    this.LocationID = LocationID; 
    this.Name = Name; 
    this.Type = Type; 
    this.Coordinate = Coordinate; 
    this.Floor = Floor; 
    this.Capacity = Capacity; 
    this.BlockID = BlockID; 
    this.BuildingID = BuildingID; 
}; 

app.post("/Location", function(request, response) {
    var Location = new Location(request.body.LocationID, request.body.Name, request.body.Type, request.body.Coordinate, request.body.Floor, request.body.Capacity, request.body.BlockID, request.body.BuildingID);
    
    var errors = validateLocations.checkValues(Location, "LocationID", "Name", "Type", "Coordinate", "Floor", "Capacity", "BlockID", "BuildingID"); 
    if (errors>0) {
        return; 
    }
    
    dalLocations.createLocation(Location, function(error, Location1) {
        if(error) {
            console.log(error); 
        }
        response.send(Location1); 
        console.log(JSON.stringify(request.body.Coordinate)+"\n"+"updated"); 
    });
});


app.put("/Locations/:LocationID", function(request, response) {
    var Location = new Location(request.body.LocationID, request.body.Name, request.body.Type, request.body.Coordinate, request.body.Floor, request.body.Capacity, request.body.BlockID, request.body.BuildingID); 
    var errors = validateLocations.checkValues(Location, "LocationID", "Name", "Type", "Coordinate", "Floor", "Capacity", "BlockID", "BuildingID"); 
    if (errors > 0){
        return; 
    }
    dalLocations.updateLocation(request.params.LocationID, Location, function(error, Location1) {
        if(error) {
            console.log(error); 
        }
        response.send(Location1); 
        console.log(JSON.stringify(request.body.Coordinate)+"\n"+"updated"); 
    });
});


//--Drones--//
app.get("/Drones", function(request, response) {
    dalDrones.listAllDrones(function(error, Drones) {
        if(error) {
            throw error; 
        }
        response.send(Drones); 
    }); 
}); 
        
app.get("/Drones/:DroneID", function(request, response) {
    dalDrones.findDrone(request.params.DroneID, function(error, Drone) {
        if(error) {
            throw error; 
        }
        response.send(Drone); 
    }); 
}); 
var Drone = function(DroneID, Name, Mac_Address, Last_Packet_Date, LocationID, BlockID, BuildingID) {

    this.DroneID = DroneID; 
    this.Name = Name; 
    this.Mac_Address = Mac_Address; 
    this.Last_Packet_Date = Last_Packet_Date; 
    this.LocationID = LocationID; 
    this.BlockID = BlockID; 
    this.BuildingID = BuildingID; 
}; 

app.post("/Drone", function(request, response) {
    var Drone = new Drone(request.body.DroneID, request.body.Name, request.body.Mac_Address, request.body.Last_Packet_Date, request.body.LocationID, request.body.BlockID, request.body.BuildingID);
    
    var errors = validateDrones.checkValues(Drone, "DroneID", "Name", "Mac_Address", "Last_Packet_Date",  "LocationID", "BlockID", "BuildingID"); 
    if (errors>0) {
        return; 
    }
    
    dalDrones.createDrone(Drone, function(error, Drone1) {
        if(error) {
            console.log(error); 
        }
        response.send(Drone1); 
        console.log(JSON.stringify(request.body.DroneID)+"\n"+"updated"); 
    });
});


app.put("/Drones/:DroneID", function(request, response) {
    var Drone = new Drone(request.body.DroneID, request.body.Name, request.body.Mac_Address, request.body.Last_Packet_Date, request.body.LocationID, request.body.BlockID, request.body.BuildingID); 
    var errors = validateBlocks.checkValues(Drone, "DroneID", "Name", "Mac_Address", "Last_Packet_Date",  "LocationID", "BlockID", "BuildingID"); 
    if (errors > 0){
        return; 
    }
    dalDrones.updateDrone(request.params.DroneID, Name, Mac_Address, Last_Packet_Date, BuildingID, BlockID, LocationID, function(error, Drone1) {
        if(error) {
            console.log(error); 
        }
        response.send(Drone1); 
        console.log(JSON.stringify(request.body.DroneID)+"\n"+"updated"); 
    });
});


app.listen(1234);
console.log("Server started");
console.log("Hellow World"); 
