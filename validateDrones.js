module.exports = {
    checkValues: function (list) {
        var errors = 0;

        if (list["DroneID"] <= 0) {
            console.log("DroneID cannot be 0");
            errors++;
        }
        if (typeof list["DroneID"] !== "number") {
            console.log("DroneID must be a number");
            errors++;
        }


        if (typeof list["Name"] !== "string") {
            console.log("Name should be a string");
            errors++;
        }
        if (typeof list["Name"] === "") {
            console.log("Fill in the name");
            errors++;
        }
        
        
        if (typeof list["Mac_Address"] !== "string") {
            console.log("Mac_Address should be a string");
            errors++;
        }
        if (typeof list["Mac_Address"] === "") {
            console.log("Fill in the Mac_Address");
            errors++;
        }
        
        
        if (typeof list["Last_Packet_Date"] !== "date") {
            console.log("Last_Packet_Date should be a date");
            errors++;
        }
        if (typeof list["Last_Packet_Date"] === "") {
            console.log("Fill in the Last_Packet_Date");
            errors++;
        }
        
        
        if (list["BlockID"] <= 0) {
            console.log("BlockID cannot be 0");
            errors++;
        }
        if (typeof list["BlockID"] !== "number") {
            console.log("BlockID must be a number");
            errors++;
        }
        
         if (list["LocationID"] <= 0) {
            console.log("LocationID cannot be 0");
            errors++;
        }
        if (typeof list["LocationID"] !== "number") {
            console.log("LocationID must be a number");
            errors++;
        }

        if (list["BuildingID"] <= 0) {
            console.log("BuildingID cannot be 0");
            errors++;
        }
        if (typeof list["BuildingID"] !== "number") {
            console.log("BuildingID must be a number");
            errors++;
        }
        return errors;
    }
};
