sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/Dialog",
	"sap/ui/core/Fragment",
	"com/sap/training/TrainingDemo/model/formatter"
	
	
	
], function (Controller,Dialog,Fragment,formatter) {
	"use strict";
     
	return Controller.extend("com.sap.training.TrainingDemo.controller.View1", {
		formatter: formatter,
		onInit: function () {
// this.getView().getModel("invoice").setSizeLimit=4;
 console.log("Inside onInit  view1");`
 
   
 `
		},
		
		
		onOpenDialog : function () {
			var oView = this.getView();

			// create dialog lazily
			if (!this.byId("helloDialog")) {
				// load asynchronous XML fragment
				Fragment.load({
					id: oView.getId(),
					name: "com.sap.training.TrainingDemo.fragments.dialog"
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				this.byId("helloDialog").open();
			}
		},
		
			_navigate: function () {
				
				// Now Get the Router Info
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				
				
				// Tell the Router to Navigate To Route_Tar_1
                 //	this.getRouter().navTo("RouteView2");
                 	oRouter.navTo("RouteView2");
				
 console.log("Inside navigate");
		},
		
		onDelete: function(oEvent){
this.getView().byId("list");
// calculating the index of the selected list item
var sPath = oEvent.mParameters.listItem.oBindingContexts.invoice.sPath;
var iLength = sPath.length;
var iIndex = sPath.slice(iLength - 1);
// Removing the selected list item from the model based on the index
// calculated
var oModel = this.getView().getModel("invoice");
var oData = oModel.oData;
oModel.remove(sPath);
//var removed = oData.items.splice(iIndex, 1);
//oModel.setData(oData);
oModel.refresh;
},

OnAddClick: function(){
	
	
	//url parameters code check
	
// var oModel=this.getView().getModel("invoice");
	
// 		oModel.read("/Invoices", {
				
// 				urlParameters: {
// 					"$filter": "Type eq 'coreElement' and Cluster eq '" +  + "'"

				
// 				}
// 			});
	

 var oModel = this.getView().getModel("invoice");
//var oData = oModel.getData();

var oData = {
    ProductId: 4,
    ProductName: "myProduct"
    //OrderID: 25
}
oModel.create("/Products", oData,{

success: function()

{

alert("Inserted Successfully");

},

error: function(){

alert("failure");

}

});

// oData.items.unshift({
// "Title": "Gionee",
// "price" : "6000"
// });
// //oModel.setData(oData);
// oModel.refresh;
},


onReadClick: function(){
	
	

 var oModel = this.getView().getModel("invoice");

oModel.read("/Products(1)",{

success: function()

{

alert("Read Successful");

},

error: function(){

alert(" read failure");

}

});

},
// code for read
onUpdateClick: function(){
	
 var oModel = this.getView().getModel("invoice");

var oData = {
    
    ProductName: "myProductUpdated"
}
oModel.update("/Products(1)",{

success: function()

{

alert("Read Successful");

},

error: function(){

alert(" read failure");

}

});

},
// code for update
onReadClick: function(){
	
	

 var oModel = this.getView().getModel("invoice");

oModel.read("/Products(1)",{

success: function()

{

alert("Read Successful");

},

error: function(){

alert(" read failure");

}

});

},

		
		onExit: function () {
 console.log("Inside onexit");
		},
		onAfterRendering: function () {
 console.log("Inside onAfterRendering");
 var sFlagPath = "resources/";
 
		},
		
		onBeforeRendering: function () {
 console.log("Inside onBeforeRendering");
		}
		
	});
});