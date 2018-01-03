webpackJsonp(["customer.module"],{

/***/ "../../../../../src/app/layout/customer/Assets/assets.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container\">\n        <h2 class=\"\">Lista de Localidades</h2>\n        <hr />\n        <div *ngIf=\"loading\">loading...</div>\n\n        <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">\n        <strong>Warning!</strong> {{errorMessage}}\n        </div>\n        <div class=\"row\">\n                        <div class=\"col-sm-6 col-margin-top\" *ngFor=\"let asset of assetsData\">\n                            <div class=\"card color-card\">\n                                <div class=\"card-block\">\n                                <h4 class=\"card-title\">{{asset.name}}</h4>\n                                <h6 class=\"card-subtitle mb-2\">{{asset.type}}</h6>\n                                </div>\n                                <a [routerLink]=\"['/customer/devices']\" (click)=\"storeAssetId(asset.id.id)\">Detalhes</a>\n                                \n                            </div>\n                            \n                        </div>\n                        \n                            \n                </div>\n                <div class=\"custom-row\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"return()\">Voltar</button>\n            </div>\n        </div>\n\n\n        \n             "

/***/ }),

/***/ "../../../../../src/app/layout/customer/Assets/assets.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-row {\n  margin-top: 2%;\n  float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/customer/Assets/assets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_data_service_service__ = __webpack_require__("../../../../../src/app/shared/services/data-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AssetsComponent = (function () {
    function AssetsComponent(http, apiService, router, _dataService) {
        this.http = http;
        this.apiService = apiService;
        this.router = router;
        this._dataService = _dataService;
        this.loading = false;
        this.tbToken = null;
        this.customerId = localStorage.getItem('customerId');
        this.typeAsset = 'Campus';
    }
    AssetsComponent.prototype.ngOnInit = function () {
        console.log('Customer ID: ', this.customerId);
        console.log('Lista de Assets: ', this.getAssets());
    };
    AssetsComponent.prototype.getAssets = function () {
        var _this = this;
        this.loading = true;
        this.errorMessage = '';
        var tbUser = JSON.parse(localStorage.getItem('currentUser'));
        this.tbToken = tbUser.token;
        this.apiService.getAssets1(this.tbToken, this.customerId, this.typeAsset)
            .subscribe(function (data) {
            _this.assetsData = data;
            console.log('Assets list:', _this.assetsData);
        }, function (error) { _this.errorMessage = error; _this.loading = false; }, function () {
            _this.loading = false;
        });
    };
    AssetsComponent.prototype.storeAssetId = function (id) {
        this._dataService.assetId = id;
        localStorage.setItem('assetId', id);
    };
    AssetsComponent.prototype.return = function () {
        this.router.navigate(["/customer"]);
    };
    AssetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-assets',
            template: __webpack_require__("../../../../../src/app/layout/customer/Assets/assets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/customer/Assets/assets.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_data_service_service__["a" /* DataService */]])
    ], AssetsComponent);
    return AssetsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/customer/Devices/devices.component.html":
/***/ (function(module, exports) {

module.exports = " \n<div *ngIf=\"loading\">loading...</div>\n\n<div *ngIf=\"errorMessage\" class=\"alert alert-warning\">\n   <strong>Warning!</strong> {{errorMessage}}\n</div>\n\n<div *ngIf=\"devicesData\" class='table-responsive'>\n   <table class='table'>\n   <thead>\n   <tr>\n       <th>Name</th>\n       <th>Device Type</th>\n       \n   </tr>\n</thead>\n<tbody>\n   <tr *ngFor=\"let item of devicesData;\">\n       <td> {{item.toName}}</td>\n       <td>{{item.type}}</td>\n     \n   </tr>\n</tbody>\n</table>\n<div class=\"custom-row\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"return()\">Voltar</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/customer/Devices/devices.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table, footer {\n  width: 550px; }\n\nh1 {\n  color: #404040;\n  font-size: 16px; }\n\nul {\n  margin: 0; }\n\nth, td, input, p, footer, li, label {\n  color: #404040;\n  font-size: 14px; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 1em 0; }\n\ntable thead th, table tfoot td {\n  background-color: #010101;\n  border: 1px solid gray;\n  padding: 4px; }\n\ntable td {\n  border: 1px solid #020202;\n  padding: 2px 4px; }\n\ntable input {\n  padding: 1px 2px; }\n\ntable input[type=number] {\n  width: 60px; }\n\n.custom-row {\n  margin-top: 2%;\n  float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/customer/Devices/devices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_data_service_service__ = __webpack_require__("../../../../../src/app/shared/services/data-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DevicesComponent = (function () {
    function DevicesComponent(http, apiService, router, route, _dataService) {
        this.http = http;
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this._dataService = _dataService;
        this.data = null;
        this.tbToken = null;
        this.loading = false;
    }
    DevicesComponent.prototype.ngOnInit = function () {
        this.assetId = localStorage.getItem('assetId');
        console.log('asset id is : ==========================>', this.assetId);
        this.loading = true;
        this.errorMessage = '';
        this.getDevicesbyAsset();
    };
    DevicesComponent.prototype.getDevicesbyAsset = function () {
        var _this = this;
        this.loading = true;
        this.errorMessage = '';
        var tbUser = JSON.parse(localStorage.getItem('currentUser'));
        this.tbToken = tbUser.token;
        this.apiService.getAssetDevices(this.tbToken, this.assetId)
            .subscribe(function (data) {
            _this.devicesData = data;
            console.log('Devices list:', _this.devicesData);
        }, function (error) { _this.errorMessage = error; _this.loading = false; }, function () {
            _this.loading = false;
        });
    };
    DevicesComponent.prototype.return = function () {
        this.router.navigate(["/customer"]);
    };
    DevicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-devices',
            template: __webpack_require__("../../../../../src/app/layout/customer/Devices/devices.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/customer/Devices/devices.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_data_service_service__["a" /* DataService */]])
    ], DevicesComponent);
    return DevicesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/customer/Telemetry/telemetry.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cointaner\">\n  <div class=\"row\">\n    <h3>Telemetria</h3>\n  </div>\n    <div class=\"row\" *ngIf = \"!WaterLevel\">\n        <p><br>Carregando ... </p>\n      </div>\n        \n      <div class=\"row\" *ngIf = \"WaterLevel\">\n        \n    Volume de Água: {{WaterLevel.availableWater[0].value}}\n    </div>\n\n    <div class=\"row\" *ngIf = \"!Pump1\">\n        <p><br>Carregando ... </p>\n      </div>\n        \n      <div class=\"row\" *ngIf = \"Pump1\">\n        \n      Pump 1 Status: {{Pump1.status[0].value}}\n      Pump 1 Atuação: {{Pump1.actuation[0].value}}\n    </div>\n\n    <div class=\"row\" *ngIf = \"!Pump2\">\n        <p><br>Carregando ... </p>\n      </div>\n        \n      <div class=\"row\" *ngIf = \"Pump2\">\n        \n      Pump 2 Status: {{Pump2.status[0].value}}\n      Pump 2 Atuação: {{Pump2.actuation[0].value}}\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/customer/Telemetry/telemetry.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/customer/Telemetry/telemetry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelemetryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TelemetryComponent = (function () {
    function TelemetryComponent(authService, http, router) {
        this.authService = authService;
        this.http = http;
        this.router = router;
        this.tokenJSON = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.tokenJSON.token;
        this.customerID = localStorage.getItem('idCustomer');
        this.deviceIDController = '483f7ed0-d45c-11e7-a2cc-0b6a5e10d27e';
        this.deviceIDPump1 = '53751030-d45c-11e7-a2cc-0b6a5e10d27e';
        this.deviceIDPump2 = '604035b0-d45c-11e7-a2cc-0b6a5e10d27e';
    }
    TelemetryComponent.prototype.ngOnInit = function () {
        this.getAvailableWatter();
        this.getStatusPump1();
        this.getStatusPump1();
    };
    TelemetryComponent.prototype.getAvailableWatter = function () {
        var _this = this;
        this.authService.getTelemetry(this.token, this.deviceIDController, 'availableWater')
            .subscribe(function (data) {
            _this.WaterLevel = data;
            console.log('Water Level: ', _this.WaterLevel);
        }, function (error) { _this.errorMessage = error; });
    };
    TelemetryComponent.prototype.getStatusPump1 = function () {
        var _this = this;
        this.authService.getTelemetry(this.token, this.deviceIDPump1, 'actuation,status')
            .subscribe(function (data) {
            _this.Pump1 = data;
            console.log('Dados Bomba 1: ', _this.Pump1);
        }, function (error) { _this.errorMessage = error; });
    };
    TelemetryComponent.prototype.getStatusPump2 = function () {
        var _this = this;
        this.authService.getTelemetry(this.token, this.deviceIDPump2, 'actuation,status')
            .subscribe(function (data) {
            _this.Pump1 = data;
            console.log('Dados Bomba 2: ', _this.Pump2);
        }, function (error) { _this.errorMessage = error; });
    };
    TelemetryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-telemetry',
            template: __webpack_require__("../../../../../src/app/layout/customer/Telemetry/telemetry.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/customer/Telemetry/telemetry.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */]])
    ], TelemetryComponent);
    return TelemetryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/customer/customer-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_component__ = __webpack_require__("../../../../../src/app/layout/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Assets_assets_component__ = __webpack_require__("../../../../../src/app/layout/customer/Assets/assets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Devices_devices_component__ = __webpack_require__("../../../../../src/app/layout/customer/Devices/devices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Telemetry_telemetry_component__ = __webpack_require__("../../../../../src/app/layout/customer/Telemetry/telemetry.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__customer_component__["a" /* CustomerComponent */]
    },
    {
        path: 'assets', component: __WEBPACK_IMPORTED_MODULE_3__Assets_assets_component__["a" /* AssetsComponent */]
    },
    {
        path: 'devices', component: __WEBPACK_IMPORTED_MODULE_4__Devices_devices_component__["a" /* DevicesComponent */]
    },
    {
        path: 'telemetry', component: __WEBPACK_IMPORTED_MODULE_5__Telemetry_telemetry_component__["a" /* TelemetryComponent */]
    },
];
var CustomerRoutingModule = (function () {
    function CustomerRoutingModule() {
    }
    CustomerRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]],
            declarations: []
        })
    ], CustomerRoutingModule);
    return CustomerRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/customer/customer.component.html":
/***/ (function(module, exports) {

module.exports = "\n    \n       <h2 class=\"\">Lista de Clientes</h2>\n       <hr />\n                <div class=\"row\">\n                        <div class=\"col-sm-6 col-margin-top\" *ngFor=\"let customer of customerData\">\n                            <div class=\"card color-card\">\n                                <div class=\"card-block\">\n                                <h4 class=\"card-title\">{{customer.name}}</h4>\n                                <h6 class=\"card-subtitle mb-2\">{{customer.city}}</h6>\n                                </div>\n                                 <a [routerLink]=\"['/customer/assets']\" (click)=\"storeCustomerId(customer.id.id)\">Detalhes</a>\n                                \n                            </div>\n                            \n                        </div>\n\n                            \n                \n                            \n                </div>\n            \n\n\n      "

/***/ }),

/***/ "../../../../../src/app/layout/customer/customer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  margin-bottom: 10px;\n  background: white;\n  font-family: sans-serif;\n  font-size: 18px;\n  text-align: center; }\n\n.color-card {\n  background: rgba(44, 105, 176, 0.2); }\n\n.col-margin-top {\n  margin-top: 2%; }\n\n.custom-button {\n  color: #2c69b0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/customer/customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_data_service_service__ = __webpack_require__("../../../../../src/app/shared/services/data-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerComponent = (function () {
    function CustomerComponent(http, apiService, router, _dataService) {
        this.http = http;
        this.apiService = apiService;
        this.router = router;
        this._dataService = _dataService;
        this.loading = false;
        this.tbToken = null;
        this.customerId = '';
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        if (JSON.parse(localStorage.getItem('currentUser')) === null) {
            this.apiService.tbLogin()
                .subscribe(function (response) {
                if (response === true) {
                    var tbUser = JSON.parse(localStorage.getItem('currentUser'));
                    _this.tbToken = tbUser.token;
                    console.log('the tbToken is : ===>', _this.tbToken);
                }
            }, function (error) { _this.errorMessage = error; _this.loading = false; }, function () { _this.loading = false; _this.getCustomers(); });
        }
        else {
            this.getCustomers();
        }
    };
    CustomerComponent.prototype.getCustomers = function () {
        var _this = this;
        this.loading = true;
        this.errorMessage = '';
        var tbUser = JSON.parse(localStorage.getItem('currentUser'));
        this.tbToken = tbUser.token;
        this.apiService.getCustomers(this.tbToken)
            .subscribe(function (data) {
            _this.customerData = data;
            console.log('Customers list:', _this.customerData);
        }, function (error) { _this.errorMessage = error; _this.loading = false; }, function () {
            _this.loading = false;
        });
    };
    CustomerComponent.prototype.storeCustomerId = function (id) {
        this._dataService.customerId = id;
        this.customerId = id;
        localStorage.setItem('customerId', id);
    };
    CustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__("../../../../../src/app/layout/customer/customer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/customer/customer.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_data_service_service__["a" /* DataService */]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/customer/customer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_routing_module__ = __webpack_require__("../../../../../src/app/layout/customer/customer-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_component__ = __webpack_require__("../../../../../src/app/layout/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_gauge__ = __webpack_require__("../../../../ngx-gauge/ngx-gauge.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Assets_assets_component__ = __webpack_require__("../../../../../src/app/layout/customer/Assets/assets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Devices_devices_component__ = __webpack_require__("../../../../../src/app/layout/customer/Devices/devices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Telemetry_telemetry_component__ = __webpack_require__("../../../../../src/app/layout/customer/Telemetry/telemetry.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CustomerModule = (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__customer_routing_module__["a" /* CustomerRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_gauge__["a" /* NgxGaugeModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared__["c" /* StatModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__customer_component__["a" /* CustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__Assets_assets_component__["a" /* AssetsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__Devices_devices_component__["a" /* DevicesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__Telemetry_telemetry_component__["a" /* TelemetryComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__shared_services_api_service__["a" /* ApiService */]]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ })

});
//# sourceMappingURL=customer.module.chunk.js.map