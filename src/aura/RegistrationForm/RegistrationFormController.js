({
    onMultiSelectChange: function(cmp) {
        var selectCmp = cmp.find("skills");
        cmp.set("v.skillSet", selectCmp.get("v.value"));
    },
    onGroup: function(cmp, evt) {
        var selected = evt.getSource().get("v.label");
        cmp.set("v.gender", selected);
    },

    checkInput: function(cmp, evt) {
        cmp.set("v.errors", []);
        cmp.set("v.isSuccess", false);
        console.log('Validation---->');
        console.log(cmp.get("v.myName"));
        console.log(cmp.get("v.password"));
        console.log(cmp.get("v.phoneNum"));
        console.log(cmp.get("v.emailId"));
        console.log(cmp.get("v.gender"));
        console.log(cmp.get("v.skillSet"));
        console.log(cmp.get("v.about"));
        var errors = [];

        if (cmp.get("v.myName") === '')
        //errors.push("Name Required");
            errors[0] = "Name Required";
        if (cmp.get("v.password") === '')
            errors.push("Password Required");
        if (cmp.get("v.phoneNum") === '')
            errors.push("Phone Num Required");
        if (cmp.get("v.emailId") === '')
            errors.push("Email Required");
        if (errors.length != 0) {
            cmp.set("v.errors", errors);
            cmp.set("v.isSuccess", false);
        } else
            cmp.set("v.isSuccess", true);
    }
})