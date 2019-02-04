public class ScrollTestController {
    @AuraEnabled
    public static List<Account> findAll() {
        return [SELECT Id, Name, CreatedDate, Industry, Phone
                FROM Account ORDER BY createdDate ASC ];
    }
}