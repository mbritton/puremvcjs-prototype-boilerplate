/**
 * @constructor
 * @extends {MacroCommand}
 */
function StartupCommand() {
    MacroCommand.call(this);
};

StartupCommand.prototype = new MacroCommand;
StartupCommand.prototype.constructor = StartupCommand;
/** @override */
StartupCommand.prototype.initializeMacroCommand = function() {
    console.log('StartupCommand::initializeMacroCommand');
    
    //var facade = Facade.getInstance('ApplicationFacade');
    
    this.addSubCommand(ModelPrepCommand);    
    this.addSubCommand(ViewPrepCommand);
    
};

