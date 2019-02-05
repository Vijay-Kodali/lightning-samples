({
    myAction : function(component, event, helper) {
        helper.getAccounts(component);
        var myScrollObj = document.getElementById("myScroll")
        myScrollObj.addEventListener("scroll", function() {
            console.log('Scrolling---');
			var totalCount = component.get('v.totalCount');
            var currentCount = component.get('v.currentCount');
            if(totalCount > currentCount){
            
              console.log('Sc Top',Math.round($('#myScroll').scrollTop()));
                console.log('Inner Height',$('#myScroll').innerHeight());
                console.log('Sc Height',$('#myScroll')[0].scrollHeight);
            
            if(Math.round($('#myScroll').scrollTop()) + $('#myScroll').innerHeight() >= $('#myScroll')[0].scrollHeight) {
            //alert('end reached');
             $('.showSpinner').show();
                helper.appendData(component);
        	}
             /*   
            if(myScrollObj.scrollHeight - myScrollObj.scrollTop === myScrollObj.clientHeight){
                $('.showSpinner').show();
                helper.appendData(component);
            }*/
            }
          
        });
        
    }
})