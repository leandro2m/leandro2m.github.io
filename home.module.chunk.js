webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/layout/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/layout/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
    }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]],
            declarations: []
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div [@routerTransition]>\n\n<h4>Bem Vindo ao Portal de Administração COLORTEL</h4>\n<p>Escolha o Cliente que gostaria de visualizar</p>\n\n<hr />\n<!-- <h1 class=\"text-center\">{{pageTitle}}</h1>\n\n\n<div *ngIf=\"loading\">loading...</div>\n\n<div *ngIf=\"errorMessage\" class=\"alert alert-warning\">\n  <strong>Warning!</strong> {{errorMessage}}\n</div>\n\n<span></span>\n<h2 class=\"text-center\">Lista de Salas Controladas</h2>\n<span></span>\n\n<table border =1>\n    <thead>\n      <tr>\n        <th colspan=\"5\">Pesquise pela Sala :\n          <input type=\"text\" [(ngModel)]=\"queryString\">\n        </th>\n      </tr>\n      <br>\n      \n      <tr>\n        <th style=\"width:80px;max-width:400px;\"> Sala</th>\n        <th style=\"width:140px;max-width:400px;\"> ID</th>\n        <th style=\"width:80px;max-width:400px;\"> Descrição</th>\n        <th style=\"width:40px;max-width:400px;\"> Dashboards</th>\n        <th style=\"width:40px;max-width:400px;\"> Temp. Control</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of  assetData| FilterPipe: queryString : searchableList \">\n        <td>{{item.name}}</td>\n        <td>{{item.id.id}}</td> \n        <td>{{item.additionalInfo.description}}</td>\n        <td><button class=\"btn\"> <a [routerLink]=\"['/dash']\" (click)=\"storeAssetId(item.id.id)\">Dash</a> </button></td> \n        <td><button class=\"btn\"> <a [routerLink]=\"['/control']\" (click)=\"storeAssetId(item.id.id)\">Control</a> </button></td>        \n      </tr>\n    </tbody>\n   \n  </table> -->\n"

/***/ }),

/***/ "../../../../../src/app/layout/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table, footer {\n  width: 550px; }\n\np {\n  font-size: 24px; }\n\nh1 {\n  color: #404040;\n  font-size: 16px; }\n\nul {\n  margin: 0; }\n\nth, td, input, p, footer, li, label {\n  color: #404040;\n  font-size: 14px; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 1em 0; }\n\ntable thead th, table tfoot td {\n  background-color: lightgray;\n  border: 1px solid gray;\n  padding: 4px; }\n\ntable td {\n  border: 1px solid gray;\n  padding: 2px 4px; }\n\ntable input {\n  padding: 1px 2px; }\n\ntable input[type=number] {\n  width: 60px; }\n\n.color-card {\n  background: rgba(44, 105, 176, 0.2); }\n\n.col-margin-top {\n  margin-top: 2%; }\n\n.custom-button {\n  position: relative;\n  right: 0;\n  color: #2c69b0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_data_service_service__ = __webpack_require__("../../../../../src/app/shared/services/data-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_min__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/min.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var HomeComponent = (function () {
    function HomeComponent(title, http, apiService, router, _dataService) {
        this.title = title;
        this.http = http;
        this.apiService = apiService;
        this.router = router;
        this._dataService = _dataService;
        this.pageTitle = 'Clima Control';
        this.data = null;
        this.searchableList = null;
        this.tbToken = null;
        this.loading = false;
        this.page = 1;
        this.searchableList = ['name'];
    }
    HomeComponent.prototype.ngOnInit = function () {
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
            }, function (error) { _this.errorMessage = error; _this.loading = false; }, function () { _this.loading = false; _this.getAssets(); });
        }
        else {
            this.getAssets();
        }
    };
    HomeComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.apiService.tbLogin()
            .subscribe(function (response) {
            if (response === true) {
                var tbUser = JSON.parse(localStorage.getItem('currentUser'));
                _this.tbToken = tbUser.token;
                console.log('the tbToken is : ==========================>', _this.tbToken);
            }
        }, function (error) { _this.errorMessage = error; _this.loading = false; }, function () { _this.loading = false; });
    };
    HomeComponent.prototype.getAssets = function () {
        var _this = this;
        this.loading = true;
        this.errorMessage = '';
        var tbUser = JSON.parse(localStorage.getItem('currentUser'));
        this.tbToken = tbUser.token;
        this.apiService.getAssets(this.tbToken)
            .subscribe(function (data) {
            _this.assetData = data;
            console.log('asssetdataobject test : ==========================>', _this.assetData);
        }, function (error) { _this.errorMessage = error; _this.loading = false; }, function () {
            _this.loading = false;
        });
    };
    HomeComponent.prototype.getDevices = function () {
        var _this = this;
        this.loading = true;
        this.errorMessage = '';
        var tbUser = JSON.parse(localStorage.getItem('currentUser'));
        this.tbToken = tbUser.token;
        this.apiService.getDevices(this.tbToken)
            .subscribe(function (data) {
            _this.deviceData = data;
            _this.numberOfDevices = _this.deviceData.length;
            _this.limit = _this.deviceData.length;
            console.log('device data object is: ==========================>', _this.deviceData);
        }, function (error) { _this.errorMessage = error; _this.loading = false; }, function () {
            _this.loading = false;
        });
    };
    HomeComponent.prototype.storeAssetId = function (id) {
        this._dataService.assetId = id;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/layout/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/home/home.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Title */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_data_service_service__["a" /* DataService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_routing_module__ = __webpack_require__("../../../../../src/app/layout/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("../../../../../src/app/layout/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_gauge__ = __webpack_require__("../../../../ngx-gauge/ngx-gauge.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_data_service_service__ = __webpack_require__("../../../../../src/app/shared/services/data-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_filter_pipe__ = __webpack_require__("../../../../../src/app/shared/services/filter-pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__home_routing_module__["a" /* HomeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_gauge__["a" /* NgxGaugeModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared__["c" /* StatModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_12__shared_services_filter_pipe__["a" /* FilterPipe */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__shared_services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_11__shared_services_data_service_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["c" /* Title */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/filter-pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, input, searchableList) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el) {
                var isTrue = false;
                for (var k in searchableList) {
                    if (el[searchableList[k]].toLowerCase().indexOf(input) > -1) {
                        isTrue = true;
                    }
                    if (isTrue) {
                        return el;
                    }
                }
            });
        }
        return value;
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'FilterPipe',
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map