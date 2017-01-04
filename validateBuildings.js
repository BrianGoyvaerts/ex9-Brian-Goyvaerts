module.exports = {
    checkValues: function (list) {
        var errors = 0;

        if (list["BuildingID"] <= 0) {
            console.log("BuildingID cannot be 0");
            errors++;
        }
        if (typeof list["BuildingID"] !== "number") {
            console.log("BuildingID must be a number");
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
        
        
        if (typeof list["City"] !== "string") {
            console.log("City should be a string");
            errors++;
        }
        if (typeof list["City"] === "") {
            console.log("Name the city");
            errors++;
        }
    return errors;
    }
};

