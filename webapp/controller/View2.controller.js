sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast",
	"sap/m/MessageBox",
	"sap/ui/model/Sorter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller,History,MessageToast,MessageBox,Sorter,Filter,FilterOperator) {
	"use strict";

	return Controller.extend("com.sap.training.TrainingDemo.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.sap.training.TrainingDemo.view.View2
		 */
		onInit: function () {
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("RouteView2").attachPatternMatched();
			

		},
		
		onItemPress: function () {
			
			var sPath = oEvent.getParameter("listItem").getBindingContext().getPath();
			
			var sel_Data = {
				
				"name": this.getView().getModel().getProperty(sPath).name,
				"city": this.getView().getModel().getProperty(sPath).city
			};
			
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData(sel_Data);
			sap.ui.getCore().setModel(oModel, "local_model");

		},
		
		//Code for applying filter
		
		onFilterProducts: function (oEvent) {
// build the filter array
var aFilter = [];
var sQuery = oEvent.getParameter("query");
if (sQuery) {
    aFilter.push(new Filter(
        "ProductName", FilterOperator.Contains, sQuery));
}
// filter the list via binding
var oList = this.getView().byId("list");
    var oBinding = oList.getBinding("items");
    oBinding.filter(aFilter);
},

/*onFilterInvoices : function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}, */

/*onSort : function () {
			var oView = this.getView(),
				aStates = [undefined, "asc", "desc"],
				aStateTextIds = ["sortNone", "sortAscending", "sortDescending"],
				sMessage,
				iOrder = oView.getModel("appView").getProperty("/order");

			iOrder = (iOrder + 1) % aStates.length;
			var sOrder = aStates[iOrder];

			oView.getModel("appView").setProperty("/order", iOrder);
			oView.byId("peopleList").getBinding("items").sort(sOrder && new Sorter("LastName", sOrder === "desc"));

			sMessage = this._getText("sortMessage", [this._getText(aStateTextIds[iOrder])]);
			MessageToast.show(sMessage);
		}, */
		
			onNavBack: function () {
				
				var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} 
			else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("RouteView1", true);
			}
				
				
// 				var oHistory = History.getInstance();
// var sPreviousHash = oHistory.getPreviousHash();
// // Go one screen back if you find a Hash
// if (sPreviousHash !== undefined) {
// window.history.go(-1);
//}

// else {
// var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
// oRouter.navTo("", true);
// }
				
 console.log("Inside navigate");
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.sap.training.TrainingDemo.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.sap.training.TrainingDemo.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.sap.training.TrainingDemo.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});