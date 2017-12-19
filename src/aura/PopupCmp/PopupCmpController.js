({
    closeModel: function(component, event, helper) {
        // for Hide/Close Model,set the "isOpen" attribute to "False"  
        component.set("v.showPopup", false);
    },
    openPopUp: function(component, event, helper) {
        var id = event.target.id;
        var Name = event.target.getAttribute("data-name");
        var myId = event.currentTarget.id;


        var myName = event.currentTarget.dataset.phone;
        console.log('Name-->' + Name);
        console.log('id-->' + id);
        console.log('myId-->' + myId);
        console.log('myName-->' + myName);
        console.log(event.target.getAttribute("data-phone"));
        component.set("v.showPopup", true);
    },

    onCheck: function(component, event, helper) {
        // for Hide/Close Model,set the "isOpen" attribute to "False"  
        var Name = event.target.getAttribute("data-indx");
        console.log('Name-->' + Name);
    },

    reset: function(component, event, helper) {
        // for Hide/Close Model,set the "isOpen" attribute to "False"  
        component.find("fileId").set("v.value", null);
    },

    upload: function(component, event, helper) {
        // for Hide/Close Model,set the "isOpen" attribute to "False"  

    }


})