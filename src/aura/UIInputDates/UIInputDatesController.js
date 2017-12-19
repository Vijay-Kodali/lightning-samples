({
    doInit: function(component, event, helper) {
        var today = new Date();
        component.set('v.today', today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate());

        var todayDateTime = new Date();
        component.set('v.todayDateTime', todayDateTime.getFullYear() + "-" + (todayDateTime.getMonth() + 1) + "-" + todayDateTime.getDate());
    },

    setOutput: function(component, event, helper) {
        var cmpMsg = component.find("msg");
        $A.util.removeClass(cmpMsg, 'hide');
        var expdate = component.find("expdate").get("v.value");

        var oDate = component.find("oDate");
        oDate.set("v.value", expdate);

    },

    setOutputDate: function(component, event, helper) {
        var cmpMsg = component.find("msg");
        $A.util.removeClass(cmpMsg, 'hide');

        var todayVal = component.find("todayDate").get("v.value");
        var oDateTime = component.find("oDateTime");
        oDateTime.set("v.value", todayVal);

    }
})