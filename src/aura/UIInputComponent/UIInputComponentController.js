({
    onCheck: function(cmp, evt) {
        var checkCmp = cmp.find("checkbox");

        var res = cmp.find("checkResult"); //out put text
        var resultCmp = cmp.find("output");
        res.set("v.value", "" + checkCmp.get("v.value"));
        resultCmp.set("v.value", checkCmp.get("v.value"));

    },

    onGroup: function(cmp, evt) {
        var selected = evt.getSource().get("v.label");
        var resultCmp = cmp.find("radioGroupResult");
        resultCmp.set("v.value", selected);
    },

    checkInput: function(cmp) {
        var colorCmp = cmp.find("color");
        var myColor = colorCmp.get("v.value");

        var myOutput = cmp.find("outColor");
        var greet = "You entered: " + myColor;
        myOutput.set("v.value", greet);

        if (!myColor) {
            colorCmp.set("v.errors", [{ message: "Enter some text" }]);
        } else {
            colorCmp.set("v.errors", null);
        }
    },

    toggleSpinner: function(cmp) {
        var spinner = cmp.find('spinner');
        var evt = spinner.get("e.toggle");
        //evt.getParams({ isVisible: false });

        if (!$A.util.hasClass(spinner, 'hideEl')) {
            evt.setParams({ isVisible: false });
        } else {
            evt.setParams({ isVisible: true });
        }
        evt.fire();
    },
    setOutput: function(component, event, helper) {
        var cmpMsg = component.find("msg");
        $A.util.removeClass(cmpMsg, 'hide');

        var email = component.find("email").get("v.value");
        var oEmail = component.find("oEmail");
        oEmail.set("v.value", email);

    },

    setOutputPhone: function(component, event, helper) {
        var cmpMsg = component.find("msg");
        $A.util.removeClass(cmpMsg, 'hide');

        var phone = component.find("phone").get("v.value");
        var oPhone = component.find("oPhone");
        oPhone.set("v.value", phone);
    },

    setOutputArea: function(component, event, helper) {
        var cmpMsg = component.find("msg");
        $A.util.removeClass(cmpMsg, 'hide');

        var comments = component.find("comments").get("v.value");
        var oTextarea = component.find("oTextarea");
        oTextarea.set("v.value", comments);
    },

    setOutputURL: function(component, event, helper) {
        var cmpMsg = component.find("msg");
        $A.util.removeClass(cmpMsg, 'hide');

        var url = component.find("url").get("v.value");
        var oURL = component.find("oURL");
        oURL.set("v.value", url);
        oURL.set("v.label", url);
    }
})