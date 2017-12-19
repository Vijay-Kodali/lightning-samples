({
  getOpportuniesByApex : function(component) {
    var action = component.get("c.getOpportunies");
      console.log('component.get("v.recordId")-->',component.get("v.recordId"));
    action.setParams({ accId : component.get("v.recordId") }); 
      
    action.setCallback(this, function(data) {
      component.set("v.opportunies", data.getReturnValue());
    });
    $A.enqueueAction(action);
  },
     getContact: function(component) {
        var action = component.get("c.getContacts");
        action.setParams({ "accId": component.get("v.recordId") });

        action.setCallback(this, function(data) {
            component.set("v.contacts", data.getReturnValue());
        });
        $A.enqueueAction(action);
         }
})