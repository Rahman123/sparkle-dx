
/*
* Copyright (c) 2018, salesforce.com, inc.
* All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
* For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
*/

({
	doInit : function(component, event, helper) {
        
        console.log("DynamicSearchController.doInit: entered");
        

        	helper.getRecords(component);
        

        console.log("DynamicSearchController.doInit: exit");
        
	},
    
    searchKeyChange: function(component, event, helper) {
        console.log("DynamicSearchController.searchKeyChange: entered");

        var keyVar = component.find("searchArea").get("v.value");

        console.log("keyVar: " + keyVar);
        component.set("v.searchKey", keyVar);

        helper.getRecords(component);
        
        console.log("DynamicSearchController.searchKeyChange: entered");
    },
    
    navigateToRecord: function(component, event, helper) {
        console.log("DynamicSearchController.navigateToRecord entered");

        
        var selectedItem = event.currentTarget;
        var selectedRecId = selectedItem.dataset.record;
        console.log('selectedRecId = '+ selectedRecId);
        
        var navEvt = $A.get("e.force:navigateToSObject");
	    navEvt.setParams({
	      "recordId": selectedRecId,
	      "isredirect": true,
	      "slideDevName": "related"
	    });
	    navEvt.fire();
        console.log("DynamicSearchController.navigateToRecord exit");
    },
    
    handleLightningOutEvent: function(component, event, helper) {
        console.log("DynamicSearchController.handleLightningOutEvent: entered");

        var params = event.getParams();
        
        if (params.attrib1 && params.attrib1Type)
        component.set("v.objectApiName", params.attrib1);
        if (params.attrib2 && params.attrib2Type)
        component.set("v.displayfieldapiname", params.attrib2);
        if (params.attrib3 && params.attrib3Type)
        component.set("v.filter1_fieldapiname", params.attrib3);
        if (params.attrib4 && params.attrib4Type)
        component.set("v.filter1_fieldValue", params.attrib4);
        
        
        
        console.log("DynamicSearchController.handleLightningOutEvent: entered");
    }
})