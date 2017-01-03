module.exports =  {
  Blocks : {},
  
  saveBlock : function(Block){
    this.Block[Block.id]= Block;
  },
  listAllBlocks : function(){
    var rtnValue =[];
    for (var item in this.Blocks) {
      rtnValue.push(this.Blocks[item]);
    };
    return rtnValue;
  },
  findBlocks : function(id){
    return this.Blocks[id];
  }
};
