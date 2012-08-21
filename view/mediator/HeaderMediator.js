function HeaderMediator(name, component) {
    console.log('new HeaderMediator');
    Mediator.call(this, name, component)
}

HeaderMediator.prototype = new Mediator;
HeaderMediator.prototype.constructor = HeaderMediator;
HeaderMediator.prototype.app = false;

HeaderMediator.NAME = 'HeaderMediator';

/** @override */
HeaderMediator.prototype.onRegister = function() {
    console.log('HeaderMediator::onRegister');
};
HeaderMediator.prototype.listNotificationInterests = function ()
{
    console.log('HeaderMediator::listNotificationInterests');
    return [Application.NOTE_VIEW_READY];
};
HeaderMediator.prototype.handleNotification = function (note)
{
    console.log("HeaderMediator received "+note.getName());
    console.dir(this.viewComponent);
    this.app.html = "assasasasas";
};
