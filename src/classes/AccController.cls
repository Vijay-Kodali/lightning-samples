public class AccController {

	@AuraEnabled
    public static List<Contact> getContacts(String accId){
        
        return [select LastName, Phone, Email from Contact where AccountId=:accId];
    }
}