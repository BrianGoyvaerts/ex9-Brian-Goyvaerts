module.exports = {
    checkValues: function (list) {
        var errors = 0;

        if (list["LocationID"] <= 0) {
            console.log("LocationID cannot be 0");
            errors++;
        }
        if (typeof list["LocationID"] !== "number") {
            console.log("LocationID should be a number");
            errors++;
        }


        if (typeof list["Name"] !== "string") {
            console.log("Name should be a string");
            errors++;
        }
        if (typeof list["Name"] === "") {
            console.log("Fill in Name");
            errors++;
        }
       
       
        if (typeof list["Type"] !== "string") {
            console.log("Type should be a string");
            errors++;
        }
        if (typeof list["Type"] === "") {
            console.log("Fill in Type");
            errors++;
        }
       
       
        if (list["Coordinate"] <= 0) {
            console.log("Coordinate cannot be 0");
            errors++;
        }
        if (typeof list["Coordinate"] !== "number") {
            console.log("Coordinate should be a number");
            errors++;
        }
        
        
        if (list["Floor"] <= 0) {
            console.log("Floor cannot be 0");
            errors++;
        }
        if (typeof list["Floor"] !== "number") {
            console.log("Floor should be a number");
            errors++;
        }
        
        
        if (list["Capacity"] <= 0) {
            console.log("Capacity cannot be 0");
            errors++;
        }
        if (typeof list["Capacity"] !== "number") {
            console.log("Capacity should be a number");
            errors++;
        }
        
        
        if (list["BlockID"] <= 0) {
            console.log("BlockID cannot be 0");
            errors++;
        }
        if (typeof list["BlockID"] !== "number") {
            console.log("BlockID should be a number");
            errors++;
        }
        
        
        if (list["BuildingID"] <= 0) {
            console.log("BuildingID cannot be 0");
            errors++;
        }
        if (typeof list["BuildingID"] !== "number") {
            console.log("BuildingID should be a number");
            errors++;
        }
        return errors;
    }
}; 