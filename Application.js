       
var Application = {
    // Notifications (always preface with NOTE_ to distinguish between other statics)
    NOTE_STARTUP:'startup',
    NOTE_VIEW_READY:'NOTE_VIEW_READY',
    // Get an instance of the facade
    facade:Facade.getInstance('ApplicationFacade'),
    
    // Initialize and start the application
    initApp:function() {
        console.dir(this.facade);
        
        // Map notifications to commands
        this.facade.registerCommand(Application.NOTE_STARTUP, StartupCommand);
        this.facade.sendNotification(Application.NOTE_STARTUP);
    }
};
