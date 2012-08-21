function ContentMediator(name, component) {
    console.log('new ContentMediator');
    Mediator.call(this, name, component)
}

ContentMediator.prototype = new Mediator;
ContentMediator.prototype.constructor = ContentMediator;
ContentMediator.prototype.app = false;

ContentMediator.NAME = 'ContentMediator';

/** @override */
ContentMediator.prototype.onRegister = function() {
    console.log('ContentMediator::onRegister');
};
ContentMediator.prototype.listNotificationInterests = function ()
{
    console.log('ContentMediator::listNotificationInterests');
    return [Application.NOTE_VIEW_READY];
};
ContentMediator.prototype.handleNotification = function (note)
{
    console.log("ContentMediator received "+note.getName());
    console.dir(this.viewComponent);
    this.app.html = "assasasasas";
};
