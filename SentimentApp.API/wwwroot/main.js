(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_models/lex.ts":
/*!********************************!*\
  !*** ./src/app/_models/lex.ts ***!
  \********************************/
/*! exports provided: Lex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lex", function() { return Lex; });
var Lex = /** @class */ (function () {
    function Lex() {
    }
    return Lex;
}());



/***/ }),

/***/ "./src/app/_services/calc.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/calc.service.ts ***!
  \*******************************************/
/*! exports provided: CalcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcService", function() { return CalcService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalcService = /** @class */ (function () {
    function CalcService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:5000/api/calc';
    }
    CalcService.prototype.getSentimentGrade = function (text) {
        return this.http.post(this.baseUrl, { text: text });
    };
    CalcService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CalcService);
    return CalcService;
}());



/***/ }),

/***/ "./src/app/_services/lex.service.ts":
/*!******************************************!*\
  !*** ./src/app/_services/lex.service.ts ***!
  \******************************************/
/*! exports provided: LexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LexService", function() { return LexService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LexService = /** @class */ (function () {
    function LexService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:5000/api/lex/';
    }
    LexService.prototype.getLexicons = function (filterParams) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (filterParams != null) {
            params = params.append('connotation', filterParams.connotation);
        }
        return this.http.get(this.baseUrl, { params: params });
    };
    LexService.prototype.deleteLex = function (word) {
        return this.http.delete(this.baseUrl + word, {});
    };
    LexService.prototype.addLex = function (lex) {
        return this.http.post(this.baseUrl, lex);
    };
    LexService.prototype.updateLex = function (lex) {
        return this.http.put(this.baseUrl + lex.id, lex);
    };
    LexService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LexService);
    return LexService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tabset>\n  <tab heading=\"Lexicon\"> <app-lexicon></app-lexicon> </tab>\n  <tab heading=\"Calculate\"> <app-calculate></app-calculate> </tab>\n</tabset>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Sentiment';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _lex_lex_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lex/lex.component */ "./src/app/lex/lex.component.ts");
/* harmony import */ var _services_lex_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_services/lex.service */ "./src/app/_services/lex.service.ts");
/* harmony import */ var _services_calc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_services/calc.service */ "./src/app/_services/calc.service.ts");
/* harmony import */ var _calculate_calculate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calculate/calculate.component */ "./src/app/calculate/calculate.component.ts");
/* harmony import */ var _lexicon_lexicon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lexicon/lexicon.component */ "./src/app/lexicon/lexicon.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _lex_lex_component__WEBPACK_IMPORTED_MODULE_4__["LexComponent"],
                _calculate_calculate_component__WEBPACK_IMPORTED_MODULE_7__["CalculateComponent"],
                _lexicon_lexicon_component__WEBPACK_IMPORTED_MODULE_8__["LexiconComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"].forRoot()
            ],
            providers: [_services_lex_service__WEBPACK_IMPORTED_MODULE_5__["LexService"], _services_calc_service__WEBPACK_IMPORTED_MODULE_6__["CalcService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calculate/calculate.component.css":
/*!***************************************************!*\
  !*** ./src/app/calculate/calculate.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYXRlL2NhbGN1bGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvY2FsY3VsYXRlL2NhbGN1bGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/calculate/calculate.component.html":
/*!****************************************************!*\
  !*** ./src/app/calculate/calculate.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form (ngSubmit)=\"parse()\">\n    <div class=\"form-group\">\n      <textarea\n        class=\"form-control\"\n        rows=\"5\"\n        placeholder=\"Text to parse...\"\n        name=\"textToParse\"\n        [(ngModel)]=\"lexCalculation.text\"\n      ></textarea>\n      <input\n        class=\"mt-1\"\n        type=\"file\"\n        accept=\".txt\"\n        (change)=\"fileUpload($event.target.files)\"\n      />\n      <div class=\"float-right mt-1\">\n        <button class=\"btn btn-info\" type=\"submit\">Calculate</button>\n      </div>\n    </div>\n  </form>\n  <form class=\"form-inline\">\n    <br />\n    <br />\n    <h6>Sentiment grade:</h6>\n    <h6 class=\"ml-1\">{{ lexCalculation.averageGrade | number }}</h6>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/calculate/calculate.component.ts":
/*!**************************************************!*\
  !*** ./src/app/calculate/calculate.component.ts ***!
  \**************************************************/
/*! exports provided: CalculateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateComponent", function() { return CalculateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_calc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/calc.service */ "./src/app/_services/calc.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalculateComponent = /** @class */ (function () {
    function CalculateComponent(calcService) {
        this.calcService = calcService;
        this.lexCalculation = {
            text: '',
            averageGrade: 0,
            foundLexes: []
        };
    }
    CalculateComponent.prototype.ngOnInit = function () { };
    CalculateComponent.prototype.fileUpload = function (files) {
        var _this = this;
        var reader = new FileReader();
        if (files[0].type === 'text/plain') {
            reader.readAsText(files[0]);
            reader.onload = function () {
                _this.lexCalculation.text = reader.result.toString();
                if (_this.lexCalculation.text) {
                    _this.parse();
                }
            };
        }
    };
    CalculateComponent.prototype.parse = function () {
        var _this = this;
        this.calcService.getSentimentGrade(this.lexCalculation.text).subscribe(function (response) {
            console.log(response);
            _this.lexCalculation = response;
        }, function (error) {
            console.log(error);
        });
    };
    CalculateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calculate',
            template: __webpack_require__(/*! ./calculate.component.html */ "./src/app/calculate/calculate.component.html"),
            styles: [__webpack_require__(/*! ./calculate.component.css */ "./src/app/calculate/calculate.component.css")]
        }),
        __metadata("design:paramtypes", [_services_calc_service__WEBPACK_IMPORTED_MODULE_1__["CalcService"]])
    ], CalculateComponent);
    return CalculateComponent;
}());



/***/ }),

/***/ "./src/app/lex/lex.component.css":
/*!***************************************!*\
  !*** ./src/app/lex/lex.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  margin: 3px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  font-family: Arial;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\n\r\n.badge {\r\n  padding: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGV4L2xleC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2xleC9sZXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgbWFyZ2luOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjdXJzb3I6IGhhbmQ7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/lex/lex.component.html":
/*!****************************************!*\
  !*** ./src/app/lex/lex.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>\n  <span\n    class=\"badge\"\n    [ngClass]=\"{\n      'badge-info': lex.grade == 0,\n      'badge-success': lex.grade > 0,\n      'badge-danger': lex.grade < 0\n    }\"\n    [ngStyle]=\"{ opacity: opacity() }\"\n    >{{ lex.word }} {{ lex.grade }}\n    <button class=\"delete\" (click)=\"delete()\">\n      x\n    </button>\n    <button class=\"edit\" (click)=\"setLexForEdit()\">\n      edit\n    </button>\n  </span>\n</h4>\n<form\n  class=\"form-inline ml-4 mt-1\"\n  [formGroup]=\"editLexiconForm\"\n  *ngIf=\"lexForEdit\"\n  (ngSubmit)=\"applyEdit()\"\n>\n  <label\n    >Edit lex:\n    <div class=\"form-group\">\n      <input\n        [ngClass]=\"{\n          'is-invalid':\n            editLexiconForm.get('word').errors &&\n            editLexiconForm.get('word').touched\n        }\"\n        class=\"form-control ml-2\"\n        formControlName=\"word\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <input\n        [ngClass]=\"{\n          'is-invalid':\n            editLexiconForm.get('grade').errors &&\n            editLexiconForm.get('grade').touched\n        }\"\n        class=\"form-control ml-1\"\n        type=\"number\"\n        min=\"-1.0\"\n        max=\"1.0\"\n        step=\"0.1\"\n        name=\"grade\"\n        formControlName=\"grade\"\n      />\n    </div>\n  </label>\n  <button type=\"submit\" [disabled]=\"!editLexiconForm.valid\">Apply</button>\n</form>\n"

/***/ }),

/***/ "./src/app/lex/lex.component.ts":
/*!**************************************!*\
  !*** ./src/app/lex/lex.component.ts ***!
  \**************************************/
/*! exports provided: LexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LexComponent", function() { return LexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lex_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/lex.service */ "./src/app/_services/lex.service.ts");
/* harmony import */ var _models_lex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/lex */ "./src/app/_models/lex.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LexComponent = /** @class */ (function () {
    function LexComponent(lexService) {
        this.lexService = lexService;
        this.removeLexEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LexComponent.prototype.ngOnInit = function () { };
    LexComponent.prototype.initForm = function () {
        var minSentimentGrade = -1;
        var maxSentimentGrade = 1;
        this.editLexiconForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            word: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.lexForEdit.word, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            grade: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.lexForEdit.grade, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(minSentimentGrade),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(maxSentimentGrade)
            ])
        });
    };
    LexComponent.prototype.opacity = function () {
        if (this.lex.grade === 0) {
            return 1;
        }
        return Math.pow(Math.abs(this.lex.grade), 0.4);
    };
    LexComponent.prototype.delete = function () {
        var _this = this;
        this.lexService.deleteLex(this.lex.word).subscribe(function (response) {
            _this.removeLexEvent.emit(response);
        }, function (error) {
            console.log(error);
        });
    };
    LexComponent.prototype.setLexForEdit = function () {
        if (this.lexForEdit) {
            this.lexForEdit = null;
        }
        else {
            this.lexForEdit = {
                id: this.lex.id,
                word: this.lex.word,
                grade: this.lex.grade
            };
            this.initForm();
        }
    };
    LexComponent.prototype.applyEdit = function () {
        var _this = this;
        if (this.editLexiconForm.valid) {
            this.lexForEdit = Object.assign({}, this.editLexiconForm.value);
            this.lexForEdit.id = this.lex.id;
            this.lexService.updateLex(this.lexForEdit).subscribe(function (lex) {
                if (lex) {
                    _this.lexForEdit = null;
                    _this.lex = lex;
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_lex__WEBPACK_IMPORTED_MODULE_2__["Lex"])
    ], LexComponent.prototype, "lex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LexComponent.prototype, "removeLexEvent", void 0);
    LexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lex',
            template: __webpack_require__(/*! ./lex.component.html */ "./src/app/lex/lex.component.html"),
            styles: [__webpack_require__(/*! ./lex.component.css */ "./src/app/lex/lex.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lex_service__WEBPACK_IMPORTED_MODULE_1__["LexService"]])
    ], LexComponent);
    return LexComponent;
}());



/***/ }),

/***/ "./src/app/lexicon/lexicon.component.css":
/*!***********************************************!*\
  !*** ./src/app/lexicon/lexicon.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#addWord,\r\n#filterForm,\r\n#lexes {\r\n  margin: 30px;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\nli {\r\n  margin: 5px;\r\n}\r\n\r\n.classic {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  margin: 3px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  font-family: Arial;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGV4aWNvbi9sZXhpY29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9sZXhpY29uL2xleGljb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhZGRXb3JkLFxyXG4jZmlsdGVyRm9ybSxcclxuI2xleGVzIHtcclxuICBtYXJnaW46IDMwcHg7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbmxpIHtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLmNsYXNzaWMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIG1hcmdpbjogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY3Vyc29yOiBoYW5kO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/lexicon/lexicon.component.html":
/*!************************************************!*\
  !*** ./src/app/lexicon/lexicon.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\n  id=\"addWord\"\n  class=\"form-inline\"\n  [formGroup]=\"newLexiconForm\"\n  (ngSubmit)=\"addLex()\"\n>\n  <label\n    >New lex:\n    <div class=\"form-group\">\n      <input\n        [ngClass]=\"{\n          'is-invalid':\n            newLexiconForm.get('word').errors &&\n            newLexiconForm.get('word').touched\n        }\"\n        class=\"form-control ml-2\"\n        formControlName=\"word\"\n        placeholder=\"new word\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <input\n        [ngClass]=\"{\n          'is-invalid':\n            newLexiconForm.get('grade').errors &&\n            newLexiconForm.get('grade').touched\n        }\"\n        class=\"form-control ml-1\"\n        formControlName=\"grade\"\n        type=\"number\"\n        min=\"-1.0\"\n        max=\"1.0\"\n        step=\"0.1\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <button class=\"classic\" type=\"submit\" [disabled]=\"!newLexiconForm.valid\">\n        Add\n      </button>\n    </div></label\n  >\n</form>\n<form id=\"filterForm\">\n  <label>Apply connotation filter:</label>\n  <div class=\"btn-group ml-2\">\n    <button\n      type=\"button\"\n      name=\"connotation\"\n      class=\"btn btn-outline-primary btn-sm \"\n      [(ngModel)]=\"filterParams.connotation\"\n      btnRadio=\"negative\"\n      (click)=\"getLexicons()\"\n    >\n      Negative\n    </button>\n    <button\n      type=\"button\"\n      name=\"connotation\"\n      class=\"btn btn-outline-primary btn-sm\"\n      btnRadio=\"positive\"\n      [(ngModel)]=\"filterParams.connotation\"\n      (click)=\"getLexicons()\"\n    >\n      Positive\n    </button>\n    <button\n      type=\"button\"\n      name=\"connotation\"\n      class=\"btn btn-outline-primary btn-sm\"\n      btnRadio=\"noFilter\"\n      [(ngModel)]=\"filterParams.connotation\"\n      (click)=\"getLexicons()\"\n    >\n      No filter\n    </button>\n  </div>\n</form>\n<div id=\"lexes\">\n  <label>Lexes:</label>\n  <ul>\n    <li *ngFor=\"let lex of lexicons\">\n      <app-lex [lex]=\"lex\" (removeLexEvent)=\"updateLexList($event)\"></app-lex>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/lexicon/lexicon.component.ts":
/*!**********************************************!*\
  !*** ./src/app/lexicon/lexicon.component.ts ***!
  \**********************************************/
/*! exports provided: LexiconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LexiconComponent", function() { return LexiconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lex_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/lex.service */ "./src/app/_services/lex.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LexiconComponent = /** @class */ (function () {
    function LexiconComponent(lexService) {
        this.lexService = lexService;
        this.filterParams = {};
    }
    LexiconComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.resetFilter();
    };
    LexiconComponent.prototype.initForm = function () {
        var defaultSentimentGrade = 0;
        var defaultSentimentWord = '';
        var minSentimentGrade = -1;
        var maxSentimentGrade = 1;
        this.newLexiconForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            word: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](defaultSentimentWord, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            grade: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](defaultSentimentGrade, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(minSentimentGrade),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(maxSentimentGrade)
            ])
        });
    };
    LexiconComponent.prototype.resetFilter = function () {
        this.filterParams.connotation = '';
        this.getLexicons();
    };
    LexiconComponent.prototype.getLexicons = function () {
        var _this = this;
        this.lexService.getLexicons(this.filterParams).subscribe(function (response) {
            _this.lexicons = response;
        }, function (error) {
            console.log(error);
        });
    };
    LexiconComponent.prototype.addLex = function () {
        var _this = this;
        if (this.newLexiconForm.valid) {
            this.lex = Object.assign({}, this.newLexiconForm.value);
            this.lexService.addLex(this.lex).subscribe(function (lex) {
                _this.lexicons.push(lex);
                _this.newLexiconForm.reset();
                _this.initForm();
            }, function (error) {
                console.log(error);
            });
        }
    };
    LexiconComponent.prototype.updateLexList = function (lex) {
        this.lexicons.splice(this.lexicons.findIndex(function (l) { return l.id === lex.id; }), 1);
    };
    LexiconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lexicon',
            template: __webpack_require__(/*! ./lexicon.component.html */ "./src/app/lexicon/lexicon.component.html"),
            styles: [__webpack_require__(/*! ./lexicon.component.css */ "./src/app/lexicon/lexicon.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lex_service__WEBPACK_IMPORTED_MODULE_1__["LexService"]])
    ], LexiconComponent);
    return LexiconComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Playground\SentimentApp\SentimentApp-SPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map