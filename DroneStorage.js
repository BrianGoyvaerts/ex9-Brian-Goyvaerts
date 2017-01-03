module.exports =  {
  Drones : {},
  
  saveDrone : function(Drone){
    this.Drone[Drone.id]= Drone;
  },
  listAllDrones : function(){
    var rtnValue =[];
    for (var item in this.Drones) {
      rtnValue.push(this.Drones[item]);
    };
    return rtnValue;
  },
  findDrones : function(id){
    return this.Drones[id];
  }
};


