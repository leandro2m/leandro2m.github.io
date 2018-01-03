webpackJsonp(["control.module"],{

/***/ "../../../../../src/app/layout/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\" class=\"{{ cssClass(alert) }} alert-dismissable\">\n    {{alert.message}}\n    <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models_alert__ = __webpack_require__("../../../../../src/app/Models/alert.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_alert_service__ = __webpack_require__("../../../../../src/app/shared/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getAlert().subscribe(function (alert) {
            if (!alert) {
                // clear alerts when an empty alert is received
                _this.alerts = [];
                return;
            }
            // add alert to array
            _this.alerts.push(alert);
        });
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    AlertComponent.prototype.cssClass = function (alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case __WEBPACK_IMPORTED_MODULE_1__Models_alert__["a" /* AlertType */].Success:
                return 'alert alert-success';
            case __WEBPACK_IMPORTED_MODULE_1__Models_alert__["a" /* AlertType */].Error:
                return 'alert alert-danger';
            case __WEBPACK_IMPORTED_MODULE_1__Models_alert__["a" /* AlertType */].Info:
                return 'alert alert-info';
            case __WEBPACK_IMPORTED_MODULE_1__Models_alert__["a" /* AlertType */].Warning:
                return 'alert alert-warning';
        }
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'alert',
            template: __webpack_require__("../../../../../src/app/layout/alert/alert.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_alert_service__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/alert/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_component__ = __webpack_require__("../../../../../src/app/layout/alert/alert.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/layout/control/control-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__control_component__ = __webpack_require__("../../../../../src/app/layout/control/control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__device_device_control_component__ = __webpack_require__("../../../../../src/app/layout/control/device/device-control.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__control_component__["a" /* ControlComponent */]
    },
    {
        path: 'device', component: __WEBPACK_IMPORTED_MODULE_3__device_device_control_component__["a" /* DeviceControlComponent */]
    }
];
var ControlRoutingModule = (function () {
    function ControlRoutingModule() {
    }
    ControlRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], ControlRoutingModule);
    return ControlRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/control/control.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <p>Lista de Devices </p>\n    <hr />\n    <div *ngIf=\"loading\">loading...</div>\n    \n    <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">\n      <strong>Warning!</strong> {{errorMessage}}\n    </div>\n\n    <div *ngIf=\"!devicesData\">\n        Loading....\n    </div>\n    <div *ngIf=\"devicesData\">\n     \n   \n    <div class=\"row\">\n        <div class=\"col-sm-6 col-margin-top\" *ngFor=\"let device of devicesData\">\n            <div class=\"card color-card\">\n                <div class=\"card-block\">\n                <h4 class=\"card-title\">{{device.name}}</h4>\n                <h6 class=\"card-subtitle mb-2\">\n                    <strong>{{device.additionalInfo.description}}</strong><br>\n                    <strong>Tipo: </strong>{{device.type}}\n                <br>\n                <strong>Instalado: </strong> {{device.createdTime | date: 'dd/mm/yyyy'}}\n\n                </h6>\n                </div>\n                <a [routerLink]=\"['/control/device']\" (click)=\"storeDeviceId(device.id.id)\">Controlar</a>\n                \n            </div>\n            \n        </div> \n    </div>\n</div>\n\n\n            \n         \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/layout/control/control.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/control/control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlComponent; });
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






var ControlComponent = (function () {
    function ControlComponent(http, apiService, router, _dataService) {
        this.http = http;
        this.apiService = apiService;
        this.router = router;
        this._dataService = _dataService;
        this.loading = false;
        this.tbToken = null;
        this.customerId = localStorage.getItem('customerId');
        this.type = 'air_sensor';
        this.deviceToken = '';
        this.deviceId = '';
    }
    ControlComponent.prototype.ngOnInit = function () {
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
            }, function (error) { _this.errorMessage = error; _this.loading = false; }, function () { _this.loading = false; _this.getDevicesByCustomer(); });
        }
        else {
            this.getDevicesByCustomer();
        }
    };
    ControlComponent.prototype.getDevicesByCustomer = function () {
        var _this = this;
        this.loading = true;
        this.errorMessage = '';
        var tbUser = JSON.parse(localStorage.getItem('currentUser'));
        this.tbToken = tbUser.token;
        this.apiService.getDevicesByCustomer(this.tbToken, this.customerId, this.type)
            .subscribe(function (data) {
            _this.devicesData = data;
            console.log('Devices list:', _this.devicesData);
        }, function (error) { _this.errorMessage = error; _this.loading = false; }, function () {
            _this.loading = false;
        });
    };
    ControlComponent.prototype.storeDeviceId = function (id) {
        localStorage.setItem('deviceId', id);
        this.deviceId = id;
        this.getDeviceToken(id);
    };
    ControlComponent.prototype.getDeviceToken = function (deviceId) {
        var _this = this;
        this.loading = true;
        this.errorMessage = '';
        var tbUser = JSON.parse(localStorage.getItem('currentUser'));
        this.tbToken = tbUser.token;
        this.apiService.getDeviceToken(this.tbToken, deviceId)
            .subscribe(function (data) {
            _this.devicesData = data;
            _this.deviceToken = _this.devicesData['credentialsId'];
            localStorage.setItem('deviceToken', _this.deviceToken);
            console.log('Devices Token:', _this.deviceToken);
        }, function (error) { _this.errorMessage = error; _this.loading = false; }, function () {
            _this.loading = false;
        });
    };
    ControlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-control',
            template: __webpack_require__("../../../../../src/app/layout/control/control.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/control/control.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_data_service_service__["a" /* DataService */]])
    ], ControlComponent);
    return ControlComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/control/control.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlModule", function() { return ControlModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__control_routing_module__ = __webpack_require__("../../../../../src/app/layout/control/control-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__control_component__ = __webpack_require__("../../../../../src/app/layout/control/control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__device_device_control_component__ = __webpack_require__("../../../../../src/app/layout/control/device/device-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layout_alert_index__ = __webpack_require__("../../../../../src/app/layout/alert/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_alert_service__ = __webpack_require__("../../../../../src/app/shared/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ControlModule = (function () {
    function ControlModule() {
    }
    ControlModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__control_routing_module__["a" /* ControlRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared__["c" /* StatModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__control_component__["a" /* ControlComponent */], __WEBPACK_IMPORTED_MODULE_9__device_device_control_component__["a" /* DeviceControlComponent */], __WEBPACK_IMPORTED_MODULE_11__layout_alert_index__["a" /* AlertComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_12__shared_services_alert_service__["a" /* AlertService */]]
        })
    ], ControlModule);
    return ControlModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/control/device/device-control.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div *ngIf=\"loading\">loading...</div>\n    \n    <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">\n      <strong>Warning!</strong> {{errorMessage}}\n    </div>\n    <div *ngIf=\"!devicesAttributes\">\n        Loading....\n    </div>\n    <div *ngIf=\"devicesAttributes\">\n    <h2>Device Control </h2>\n    <hr />\n    \n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <alert></alert>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n        <div class=\"container\">\n            <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <h3 class=\"card-title\"> Temperatura </h3>\n                <p class=\"card-text\">Temperatura definida em graus Celsius</p>\n                        \n                        <button type=\"button\" class=\"btn btn-outline-danger\" style=\"font-size: 20px\" (click)=\"decrementTemp()\">-</button>\n                        <input type=\"text\" style=\"text-align:center; font-size: 20px\" [(ngModel)]=\"counterValue\" [ngModelOptions]=\"{standalone: true}\">\n    \n                        <button type=\"button\" class=\"btn btn-outline-success\" style=\"font-size: 20px\" (click)=\"incrementTemp()\">+</button>\n                       <div class=\"container submit\">\n                           <div class=\"row\" style=\"margin-bottom:px\">\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"setTemp(counterValue)\">Confirmar</button>\n                            </div>\n                        </div>\n  \n                    </div>\n\n            <div class=\"col-sm-6\">\n                <h3 class=\"card-title\"> Ociosidade </h3>\n                <p class=\"card-text\">Tempo de ociosidade em minutos</p>\n                    <button class=\"btn btn-outline-danger\" style=\"font-size: 20px\" (click)=\"decrementIdle()\">-</button>\n                    <input type=\"text\" style=\"text-align:center\" [(ngModel)]=\"idleValue\">\n                    <button style=\"font-size: 20px\" class=\"btn btn-outline-success\" (click)=\"incrementIdle()\">+</button>\n                    <div class=\"container submit\">\n                        <div class=\"row\" style=\"margin-bottom:10px\">\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"setIdle(idleValue)\">Confirmar</button>\n                        </div>\n                    </div>\n                    \n                    </div>\n            </div>\n      \n    </div>\n</div>\n    \n\n   "

/***/ }),

/***/ "../../../../../src/app/layout/control/device/device-control.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n  width: 25%;\n  font-size: 20px;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  margin: 0 auto; }\n\ninput[type=text] {\n  border: none; }\n\n.center-content {\n  margin: 0 auto;\n  float: none;\n  margin-bottom: 10px; }\n\n.card-block {\n  float: none; }\n\n.submit {\n  margin-top: 5%;\n  margin-bottom: 5%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/control/device/device-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_data_service_service__ = __webpack_require__("../../../../../src/app/shared/services/data-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_alert_service__ = __webpack_require__("../../../../../src/app/shared/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DeviceControlComponent = (function () {
    function DeviceControlComponent(http, apiService, router, _dataService, alertService) {
        this.http = http;
        this.apiService = apiService;
        this.router = router;
        this._dataService = _dataService;
        this.alertService = alertService;
        this.loading = false;
        this.tbToken = null;
        this.deviceId = localStorage.getItem('deviceId');
        this.deviceToken = localStorage.getItem('deviceToken');
        this.counterChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.idleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DeviceControlComponent.prototype.ngOnInit = function () {
        this.getDevicesAttributes();
        console.log('CounterValue: ngOnInit', this.counterValue);
        // this.setTemp()
    };
    DeviceControlComponent.prototype.getDevicesAttributes = function () {
        var _this = this;
        this.loading = true;
        this.errorMessage = '';
        var tbUser = JSON.parse(localStorage.getItem('currentUser'));
        this.tbToken = tbUser.token;
        this.apiService.getAttributesbyDevice(this.tbToken, this.deviceToken)
            .subscribe(function (data) {
            _this.devicesAttributes = data;
            console.log('Devices Atributes:', _this.devicesAttributes);
            _this.counterValue = _this.devicesAttributes['settemp'];
            _this.idleValue = _this.devicesAttributes['setidle'];
            console.log('Print CounterValue : ', _this.counterValue);
            console.log('Print idleValue: ', _this.idleValue);
        }, function (error) {
            _this.errorMessage = error;
            _this.loading = false;
            _this.alertService.error('Error');
        }, function () {
            _this.loading = false;
        });
    };
    DeviceControlComponent.prototype.setTemp = function (value) {
        var _this = this;
        this.apiService.setAttribute(this.tbToken, this.deviceId, 'settemp', value)
            .subscribe(function (response) {
            var resp = response;
            if (resp['status'] == 200) {
                console.log('atributo alterado com sucesso');
                _this.alertService.clear();
                _this.alertService.success('Temperatura atualizada');
            }
            else {
                _this.alertService.clear();
                _this.alertService.error('Error: entre em contato com adminsitrador');
            }
            console.log('resposta de setAttribute', response);
        });
    };
    DeviceControlComponent.prototype.setIdle = function (value) {
        var _this = this;
        this.apiService.setAttribute(this.tbToken, this.deviceId, 'setidle', value)
            .subscribe(function (response) {
            var resp = response;
            if (resp['status'] == 200) {
                console.log('atributo alterado com sucesso');
                _this.alertService.clear();
                _this.alertService.success('Ociosidade atualizada');
            }
            else {
                _this.alertService.clear();
                _this.alertService.error('Error: entre em contato com adminsitrador');
            }
            console.log('resposta de setAttribute', response);
        });
    };
    Object.defineProperty(DeviceControlComponent.prototype, "counter", {
        get: function () {
            return this.counterValue;
        },
        set: function (val) {
            this.counterValue = val;
            this.counterChange.emit(this.counterValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceControlComponent.prototype, "idlecounter", {
        get: function () {
            return this.idleValue;
        },
        set: function (val) {
            this.idleValue = val;
            this.idleChange.emit(this.idleValue);
        },
        enumerable: true,
        configurable: true
    });
    DeviceControlComponent.prototype.decrementTemp = function () {
        this.counter--;
    };
    DeviceControlComponent.prototype.decrementIdle = function () {
        this.idlecounter--;
    };
    DeviceControlComponent.prototype.incrementTemp = function () {
        this.counter++;
    };
    DeviceControlComponent.prototype.incrementIdle = function () {
        this.idleValue++;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DeviceControlComponent.prototype, "counterChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DeviceControlComponent.prototype, "idleChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DeviceControlComponent.prototype, "counter", null);
    DeviceControlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-device-control',
            template: __webpack_require__("../../../../../src/app/layout/control/device/device-control.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/control/device/device-control.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_data_service_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_alert_service__["a" /* AlertService */]])
    ], DeviceControlComponent);
    return DeviceControlComponent;
}());



/***/ })

});
//# sourceMappingURL=control.module.chunk.js.map