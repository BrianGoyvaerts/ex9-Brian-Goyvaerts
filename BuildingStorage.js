module.exports =  {
  Buildings : {},
  
  saveBuilding : function(Building){
    this.Building[Building.id]= Building;
  },
  listAllBuildings : function(){
    var rtnValue =[];
    for (var item in this.Buildings) {
      rtnValue.push(this.Buildings[item]);
    };
    return rtnValue;
  },
  findBuildings : function(id){
    return this.Buildings[id];
  }
};


