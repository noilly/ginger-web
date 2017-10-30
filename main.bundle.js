webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\">\n  <span>{{title}}</span>\n</mat-toolbar>\n<app-gngr-editor fxFill></app-gngr-editor>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Gngr';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ace_editor__ = __webpack_require__("../../../../ng2-ace-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gngr_editor_gngr_editor_component__ = __webpack_require__("../../../../../src/app/gngr-editor/gngr-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_tree__ = __webpack_require__("../../../../ng2-tree/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_tree__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { D3Service } from 'd3-ng2-service';


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__gngr_editor_gngr_editor_component__["a" /* GngrEditorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6_ng2_ace_editor__["a" /* AceEditorModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_tree__["TreeModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/gngr-editor/gngr-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-tab-body-wrapper {\r\n    height: 100%;\r\n}\r\n\r\n.main {\r\n    height: calc(100% - 64px);\r\n}\r\n\r\n.code {\r\n    color: blue;\r\n    font-weight: bold;\r\n}\r\n\r\n.token {\r\n    color: green;\r\n    font-weight: bold;\r\n}\r\n\r\n.ace-editor {\r\n    height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gngr-editor/gngr-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n    <div fxFlex=\"50\" fxLayout=\"column\">\r\n        <mat-toolbar>\r\n            <span [style.color]=\"hasInterference === true ? 'red' : hasInterference === false ? 'green' : ''\">{{interferenceText()}}</span>\r\n            <span fxFlex></span>\r\n            <button mat-button [matMenuTriggerFor]=\"exampleMenu\">\r\n                Examples\r\n            </button>\r\n            <mat-menu #exampleMenu=\"matMenu\">\r\n                <button mat-menu-item (click)=\"setCode(codeExamples['assignment'])\">Assignment</button>\r\n                <button mat-menu-item (click)=\"setCode(codeExamples['funcDec'])\">Function</button>\r\n                <button mat-menu-item (click)=\"setCode(codeExamples['input'])\">Input &amp; Output</button>\r\n            </mat-menu>\r\n            <button mat-button (click)=\"resendCode()\">Analyse</button>\r\n            <!-- <button mat-button (click)=\"resetCode()\" color=\"warn\" mat-raised-button>Reset</button> -->\r\n        </mat-toolbar>\r\n        <ace-editor class=\"ace-editor\" [(text)]=\"text\" #editor [mode]=\"'gngr'\" durationBeforeCallback=\"1000\" (textChanged)=\"onChange($event)\"></ace-editor>\r\n    </div>\r\n    <mat-tab-group fxFlex=\"50\" dynamicHeight [(selectedIndex)]=\"selectedTab\" (selectedTabChange)=\"selectedTabChange($event)\" color=\"accent\">\r\n        <mat-tab label=\"AST\">\r\n            <div fxFlex id=\"astNetwork\" #astNetwork></div>\r\n        </mat-tab>\r\n        <mat-tab label=\"DFG\">\r\n            <div fxFlex id=\"dfgNetwork\" #dfgNetwork></div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Grammar\">\r\n            <div class=\"padding\" fxLayout=\"column\">\r\n                <p>Our grammar is presented in a modified\r\n                    <a href=\"https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form\" target=\"_blank\">Extended Backus-Naur form (EBNF)</a></p>\r\n                <pre>\r\n    <span class=\"token\">char</span>                     =   <span class=\"code\">a</span> | <span class=\"code\">b</span> | <span class=\"code\">c</span> | <span class=\"code\">d</span> | <span class=\"code\">e</span> | <span class=\"code\">f</span> | <span class=\"code\">g</span> | <span class=\"code\">h</span> | <span class=\"code\">i</span> | <span class=\"code\">j</span> | <span class=\"code\">k</span> | <span class=\"code\">l</span>\r\n                                   | <span class=\"code\">m</span> | <span class=\"code\">n</span> | <span class=\"code\">o</span> | <span class=\"code\">p</span> | <span class=\"code\">q</span> | <span class=\"code\">r</span> | <span class=\"code\">s</span> | <span class=\"code\">t</span> | <span class=\"code\">u</span> | <span class=\"code\">v</span> | <span class=\"code\">w</span>\r\n                                   | <span class=\"code\">x</span> | <span class=\"code\">y</span> | <span class=\"code\">z</span>\r\n\r\n    <span class=\"token\">identifier</span>               =   <span class=\"token\">char</span> &#123; <span class=\"token\">char</span> &#125;\r\n\r\n    <span class=\"token\">annotation</span>               =   <span class=\"code\">: @high</span> | <span class=\"code\">: @low</span>\r\n\r\n    <span class=\"token\">variable-declaration</span>     =   <span class=\"code\">var</span> <span class=\"token\">identifier</span>\r\n\r\n    <span class=\"token\">expression</span>               =   <span class=\"token\">identifier</span>\r\n                             =   <span class=\"token\">expression</span> <span class=\"code\">+</span> <span class=\"token\">expression</span>\r\n                             =   <span class=\"token\">function-invocation</span>\r\n                             =   <span class=\"code\">read()</span> [ <span class=\"token\">annotation</span> ] \r\n\r\n    <span class=\"token\">function-declaration</span>     =   <span class=\"code\">def</span> <span class=\"token\">identifier</span> <span class=\"code\">(</span> &#123; <span class=\"token\">variable-declaration</span> <span class=\"code\">,</span> &#125; <span class=\"code\">) &#123;</span> <span class=\"token\">statement-list</span> <span class=\"code\">&#125;</span>\r\n\r\n    <span class=\"token\">function-invocation</span>      =   <span class=\"token\">identifier</span> <span class=\"code\">(</span> &#123; <span class=\"token\">expression</span> <span class=\"code\">,</span> &#125; <span class=\"code\">)</span>\r\n\r\n    <span class=\"token\">statement</span>                =   <span class=\"token\">function-invocation</span>\r\n                             =   <span class=\"token\">identifier</span> <span class=\"code\">:=</span> <span class=\"token\">expression</span>\r\n                             =   <span class=\"code\">write(</span> <span class=\"token\">expression</span> <span class=\"code\">)</span> [ <span class=\"token\">annotation</span> ]\r\n                             =   <span class=\"token\">variable-declaration</span>\r\n\r\n    <span class=\"token\">statement-list</span>           =   &#123; <span class=\"token\">statement</span> &#125;\r\n\r\n    <span class=\"token\">program</span>                  =   <span class=\"token\">statement-list</span>\r\n                </pre>\r\n            </div>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n</div>\r\n<!-- <mat-toolbar>\r\n    <span fxFlex></span>\r\n    <span [style.color]=\"hasInterference === true ? 'red' : hasInterference === false ? 'green' : ''\">{{interferenceText()}}</span>\r\n</mat-toolbar> -->"

/***/ }),

/***/ "../../../../../src/app/gngr-editor/gngr-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ace_builds_src_min_noconflict_theme_monokai__ = __webpack_require__("../../../../ace-builds/src-min-noconflict/theme-monokai.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ace_builds_src_min_noconflict_theme_monokai___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ace_builds_src_min_noconflict_theme_monokai__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_brace__ = __webpack_require__("../../../../brace/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_brace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_brace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_brace_ext_searchbox__ = __webpack_require__("../../../../brace/ext/searchbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_brace_ext_searchbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_brace_ext_searchbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_brace_mode_gngr__ = __webpack_require__("../../../../brace/mode/gngr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_brace_mode_gngr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_brace_mode_gngr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vis__ = __webpack_require__("../../../../vis/dist/vis.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vis__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GngrEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import 'brace/ext/statusbar';


// import { D3Service, D3, Selection } from 'd3-ng2-service';
// import { TreeModel, NodeEvent } from 'ng2-tree';
var GngrEditorComponent = (function () {
    function GngrEditorComponent(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        this.hasInterference = null;
        this.server = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].server;
        this.codeExamples = {
            // default: 'var x\nx := 1',
            assignment: 'var x\nvar y\n\nx := 1\ny := x',
            funcDec: 'var y\n\ndef foo(var x) {\n\treturn x\n}\n\ny := foo(1)',
            input: 'var x\nx := read(): @high\n\nwrite(x): @low'
        };
        this.selectedTab = 0;
        this.text = '';
        // this.d3 = d3Service.getD3();
        // this.parentNativeElement = element.nativeElement;
    }
    GngrEditorComponent.prototype.handleAST = function (code) {
        var _this = this;
        this.hasInterference = null;
        // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.http.post("http://" + this.server + "/api/lint", JSON.stringify(code), { headers: this.headers }).subscribe(function (lintData) {
            var lintResult = lintData;
            if (lintResult.length === 0) {
                _this.handleNI(code);
                _this.http.post("http://" + _this.server + "/api/ast", JSON.stringify(code), { headers: _this.headers }).subscribe(function (astData) {
                    var treeNodes = [];
                    var treeEdges = [];
                    for (var i = 0; i < (astData['graph']['nodes']).length; i++) {
                        var nodeData = astData['graph']['nodes'][i];
                        treeNodes[i] = {
                            // children: [],
                            id: nodeData['id'],
                            label: nodeData['label']
                        };
                    }
                    treeNodes[0]['level'] = 0;
                    var _loop_1 = function (i) {
                        var edgeData = astData['graph']['edges'][i];
                        treeEdges[i] = {
                            from: Number(edgeData['source']),
                            to: Number(edgeData['target'])
                        };
                        var source = treeNodes.filter(function (node) {
                            return node['id'] === edgeData['source'];
                        })[0];
                        treeNodes[Number(edgeData['target'])]['level'] = Number(source['level']) + 1;
                    };
                    for (var i = 0; i < (astData['graph']['edges']).length; i++) {
                        _loop_1(i);
                    }
                    var container = document.getElementById('astNetwork');
                    var data = {
                        nodes: treeNodes,
                        edges: treeEdges
                    };
                    var options = {
                        autoResize: true,
                        edges: {
                            smooth: {
                                type: 'cubicBezier',
                                forceDirection: 'horizontal',
                                roundness: 0.4
                            }
                        },
                        interaction: {
                            navigationButtons: true
                            // zoomView: false
                        },
                        height: (window.screen.height - 64 - 48) + 'px',
                        width: '100%',
                        layout: {
                            hierarchical: {
                                parentCentralization: false,
                                direction: 'UD'
                            }
                        },
                        physics: false
                    };
                    var network = new __WEBPACK_IMPORTED_MODULE_7_vis__["Network"](container, data, options);
                    // let viewNodes = treeNodes.filter(function (node) {
                    //   return node['level'] === 0 || node['level'] === 1;
                    // }).map(function (node) {
                    //   return node['id'];
                    // });
                    // network.fit({
                    //   animation: true,
                    //   nodes: viewNodes
                    // });
                    // network.once('initRedraw', function () {
                    //   network.moveTo({
                    //     offset: network.getViewPosition()
                    //   });
                    // });
                    // this.tree = treeNodes[0];
                });
            }
            else {
                _this.editor.getEditor().getSession().setAnnotations(lintData.map(function (error) {
                    return {
                        row: error['row'],
                        text: error['reason'],
                        type: error['level'].toLocaleLowerCase()
                    };
                }));
            }
        });
    };
    GngrEditorComponent.prototype.handleDFG = function (code) {
        var _this = this;
        this.hasInterference = null;
        // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.http.post("http://" + this.server + "/api/lint", JSON.stringify(code), { headers: this.headers }).subscribe(function (lintData) {
            var lintResult = lintData;
            if (lintResult.length === 0) {
                _this.handleNI(code);
                _this.http.post("http://" + _this.server + "/api/dfg", JSON.stringify(code), { headers: _this.headers }).subscribe(function (dfgData) {
                    var treeNodes = [];
                    var treeEdges = [];
                    console.log(dfgData['graph']['edges']);
                    console.log(dfgData['graph']['nodes']);
                    for (var i = 0; i < (dfgData['graph']['nodes']).length; i++) {
                        var nodeData = dfgData['graph']['nodes'][i];
                        treeNodes[i] = {
                            // children: [],
                            group: nodeData['groupId'],
                            id: nodeData['id'],
                            label: nodeData['label']
                        };
                    }
                    for (var i = 0; i < (dfgData['graph']['edges']).length; i++) {
                        var edgeData = dfgData['graph']['edges'][i];
                        treeEdges[i] = {
                            from: edgeData['source'],
                            to: edgeData['target']
                        };
                    }
                    var container = document.getElementById('dfgNetwork');
                    var data = {
                        nodes: treeNodes,
                        edges: treeEdges
                    };
                    var options = {
                        autoResize: true,
                        edges: {
                            arrows: {
                                to: true
                            },
                            smooth: {
                                type: 'cubicBezier',
                                forceDirection: 'horizontal',
                                roundness: 0.4
                            }
                        },
                        interaction: {
                            navigationButtons: true
                            // zoomView: false
                        },
                        height: (window.screen.height - 64 - 48) + 'px',
                        width: '100%',
                        physics: true
                    };
                    var network = new __WEBPACK_IMPORTED_MODULE_7_vis__["Network"](container, data, options);
                    // let viewNodes = treeNodes.filter(function (node) {
                    //   return node['level'] === 0 || node['level'] === 1;
                    // }).map(function (node) {
                    //   return node['id'];
                    // });
                    // network.fit({
                    //   animation: true,
                    //   nodes: viewNodes
                    // });
                    // network.once('initRedraw', function () {
                    //   network.moveTo({
                    //     offset: network.getViewPosition()
                    //   });
                    // });
                    // this.tree = treeNodes[0];
                });
            }
            else {
                _this.editor.getEditor().getSession().setAnnotations(lintData.map(function (error) {
                    return {
                        row: error['row'],
                        text: error['reason'],
                        type: error['level'].toLocaleLowerCase()
                    };
                }));
            }
        });
    };
    GngrEditorComponent.prototype.handleNI = function (code) {
        var _this = this;
        this.http.post("http://" + this.server + "/api/ni", JSON.stringify(code), { headers: this.headers }).subscribe(function (niData) {
            _this.hasInterference = niData['hasInterference'];
        });
    };
    GngrEditorComponent.prototype.interferenceText = function () {
        var result = '';
        if (this.hasInterference === true) {
            result = 'Interference';
        }
        else if (this.hasInterference === false) {
            result = 'No interference';
        }
        return result;
    };
    GngrEditorComponent.prototype.onChange = function (code) {
        localStorage.setItem('code', code);
        if (this.selectedTab === 0) {
            this.handleAST(code);
        }
        else if (this.selectedTab === 1) {
            this.handleDFG(code);
        }
    };
    GngrEditorComponent.prototype.ngAfterViewInit = function () {
        this.editor.setTheme('monokai');
        // this.canvasWidth = this.astNetwork.nativeElement.offsetWidth;
        // this.canvasHeight = this.astNetwork.nativeElement.offsetHeight;
        // this.canvasWidth = this.dfgNetwork.nativeElement.offsetWidth;
        // this.canvasHeight = this.dfgNetwork.nativeElement.offsetHeight;
        this.editor.getEditor().setOptions({
            // enableBasicAutocompletion: true
            printMargin: false
        });
        this.editor.getEditor().commands.addCommand({
            name: 'showOtherCompletions',
            bindKey: 'Ctrl-.',
            exec: function (editor) {
            }
        });
    };
    GngrEditorComponent.prototype.ngOnInit = function () {
        var storedCode = localStorage.getItem('code');
        if (storedCode) {
            this.setCode(storedCode);
        }
        else {
            this.setCode(this.codeExamples['assignment']);
        }
    };
    GngrEditorComponent.prototype.resendCode = function () {
        this.onChange(this.text);
    };
    // resetCode() {
    //   this.setCode( this.codeExamples['default']);
    // }
    GngrEditorComponent.prototype.selectedTabChange = function (event) {
        this.onChange(this.text);
    };
    GngrEditorComponent.prototype.setCode = function (code) {
        this.text = code;
        if (this.text) {
            this.onChange(this.text);
        }
    };
    return GngrEditorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editor'),
    __metadata("design:type", Object)
], GngrEditorComponent.prototype, "editor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('astNetwork'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], GngrEditorComponent.prototype, "astNetwork", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dfgNetwork'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], GngrEditorComponent.prototype, "dfgNetwork", void 0);
GngrEditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-gngr-editor',
        template: __webpack_require__("../../../../../src/app/gngr-editor/gngr-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gngr-editor/gngr-editor.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]) === "function" && _c || Object])
], GngrEditorComponent);

var _a, _b, _c;
//# sourceMappingURL=gngr-editor.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    server: 'ginger.azurewebsites.net'
};
//ng build --env=prod 
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map