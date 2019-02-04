({
    myAction : function(component, event, helper) {
        helper.getAccounts(component);
        var myScrollObj = document.getElementById("myScroll")
        myScrollObj.addEventListener("scroll", function() {
            console.log('Scrolling---');
			var totalCount = component.get('v.totalCount');
            var currentCount = component.get('v.currentCount');
            if(totalCount > currentCount){
            $('.showSpinner').show();
             console.log('$(myScrollObj).height()',$(myScrollObj).height());
            console.log('$(myScrollObj).scrollTop()--',$(myScrollObj).scrollTop());
            if(myScrollObj.scrollHeight - myScrollObj.scrollTop === myScrollObj.clientHeight){
                helper.appendData(component);
            }
            }
          
        });
        
    }
})