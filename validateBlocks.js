module.exports = {
    checkValues: function (list) {
        var errors = 0;

        if (list["BlockID"] <= 0) {
            console.log("BlockID cannot be 0");
            errors++;
        }
        if (typeof list["BlockID"] !== "number") {
            console.log("BlockID must be a number");
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
}; //
