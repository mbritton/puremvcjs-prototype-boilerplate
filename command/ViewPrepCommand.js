/**
 * @constructor
 * @extends {SimpleCommand}
 */
function ViewPrepCommand(){};

ViewPrepCommand.prototype = new SimpleCommand;
ViewPrepCommand.prototype.constructor = ViewPrepCommand;
ViewPrepCommand.prototype.executed = false;
/** @override */
ViewPrepCommand.prototype.execute = function(note) {
    console.log('ViewPrepCommand::execute');
    
    var facade = Facade.getInstance('ApplicationFacade');
    
    facade.registerMediator( new HeaderMediator( HeaderMediator.NAME, '<b>header</b>' ) );
    facade.registerMediator( new ContentMediator( ContentMediator.NAME, '<b>content</b>' ) );
};
