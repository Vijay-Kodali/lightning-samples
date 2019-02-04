({
    appendData : function(component) {
        var currCount = component.get('v.currentCount');
        component.set('v.currentCount',currCount+50);
        console.log('currCount-->',currCount);
        var allAccouts =  component.get('v.allAccounts');
        console.log('allAccouts-->',allAccouts);
        //var accounts = allAccouts.slice(currCount, currCount+50);
        //component.set('v.accounts',accounts);
        
        
        var html = '';
        console.log('accounts--->',accounts);
        for (var i = currCount; i < (currCount+50); i++) {
            html += '<tr><td>'+allAccouts[i].Name+'</td><td>'+allAccouts[i].Industry+'</td><td>'+allAccouts[i].CreatedDate+'</td></tr>';
        }
        setTimeout(function(){  
           
            $('#myTable').append(html); 
            $('.showSpinner').hide();
        }, 600);
      
     
    },
    getAccounts: function(component){
        var action = component.get("c.findAll");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {       
                component.set('v.allAccounts',response.getReturnValue());
                component.set('v.accounts',response.getReturnValue().slice(0, 50));
                 component.set('v.totalCount',response.getReturnValue().length);
                
                console.log("50 slice",response.getReturnValue().slice(0, 50));
                             
            }
            
        });
        $A.enqueueAction(action);
        
    }
})