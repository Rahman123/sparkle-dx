global with sharing class AsyncNotificationController {

@AuraEnabled
public static String getSessionId() {
  return UserInfo.getSessionId();
}    
    
    
 @AuraEnabled
 public static String RunInstantToast() {
     
     MyBatchClass uca = new MyBatchClass();
     Id batchId = Database.executeBatch(uca);
     
     AsyncApexJob job = [SELECT Id, Status, NumberOfErrors, 
            JobItemsProcessed,
            TotalJobItems, CreatedBy.Email
            FROM AsyncApexJob
            WHERE Id = :batchId];
     
     
     return 'Batch Operation started';
 }


    
}