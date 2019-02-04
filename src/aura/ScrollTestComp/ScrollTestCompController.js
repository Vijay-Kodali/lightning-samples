({
    myAction : function(component, event, helper) {
        helper.getAccounts(component);
        var myScrollObj = document.getElementById("myScroll")
        myScrollObj.addEventListener("scroll", function() {
            console.log('Scrolling---');
			var totalCount = component.get('v.totalCount');
            var currentCount = component.get('v.currentCount');
            if(totalCount > currentCount){
            
             console.log('myScrollObj.scrollHeight',myScrollObj.scrollHeight);
            console.log('myScrollObj.scrollTop--',myScrollObj.scrollTop);
            console.log('myScrollObj.clientHeight--',myScrollObj.clientHeight);
            if(myScrollObj.scrollHeight - myScrollObj.scrollTop === myScrollObj.clientHeight){
                $('.showSpinner').show();
                helper.appendData(component);
            }
            }
          
        });
        
    }
})