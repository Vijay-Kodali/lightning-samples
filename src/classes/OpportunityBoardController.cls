public with sharing class OpportunityBoardController {

    public OpportunityBoardController() {

    }

    @AuraEnabled
    public static List<Opportunity> getOpportunies(String accId) {
        return [
            SELECT
                 Id
                ,Name
                ,Account.Name
                ,CloseDate
                ,Amount
            FROM
                Opportunity
            WHERE
                AccountId = :accId
                AND
                Amount > 0
            ORDER BY Amount DESC, CloseDate ASC, Name ASC
            LIMIT 5
        ];
    }
}