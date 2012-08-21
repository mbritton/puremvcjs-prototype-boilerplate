function ModelPrepCommand(){};

ModelPrepCommand.prototype = new SimpleCommand;
ModelPrepCommand.prototype.constructor = ModelPrepCommand;
ModelPrepCommand.prototype.executed = false;
/** @override */
ModelPrepCommand.prototype.execute = function(note) {
    console.log('ModelPrepCommand::execute');  
};
