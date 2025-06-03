"use strict";
(self["webpackChunkangularfiebase_authentication"] = self["webpackChunkangularfiebase_authentication"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 619);
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/guard/auth.guard */ 5240);
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/signup/signup.component */ 5431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);




// import { TokenInterceptor } from './token.interceptor';



const routes = [
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__.SignupComponent },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard] },
    { path: '', redirectTo: '/signup', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "ios-nav-overlay"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet")(1, "div", 0);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 619);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/auth.service */ 629);
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/guard/auth.guard */ 5240);
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/signup/signup.component */ 5431);
/* harmony import */ var _shared_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/auth.interceptor */ 7198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);





// import { SignupComponent } from './signup/signup.component';




// import { TokenInterceptor } from './token.interceptor';



class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService,
        _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard,
        // { provide: HTTP_INTERCEPTORS, 
        //   useClass: TokenInterceptor, multi: true
        //  }
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS, useClass: _shared_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__.AuthInterceptor, multi: true }
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__.SignupComponent,
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule] }); })();


/***/ }),

/***/ 619:
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/auth.service */ 629);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function DashboardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "header", 3)(2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_div_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.logout()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 6)(7, "div", 7)(8, "p")(9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Full Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p")(13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p")(17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Mobile:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p")(21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Date of Birth:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.user.firstName, " ", ctx_r0.user.lastName == null ? null : ctx_r0.user.lastName.charAt(0), ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.user.firstName, " ", ctx_r0.user.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.user.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.user.mobile, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 7, ctx_r0.user.dob), "");
} }
class DashboardComponent {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
        this.user = {};
    }
    // ngOnInit() {
    //  this.http.get('http://localhost:3000/api/auth/profile').subscribe((res: any) => this.user = res);
    // }
    ngOnInit() {
        this.auth.getProfile().subscribe({
            next: (res) => this.user = res,
            error: (err) => console.error('Error loading profile:', err)
        });
    }
    logout() {
        this.auth.logout();
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 3, vars: 1, consts: [[1, "dashboard-title"], ["class", "dashboard-container", 4, "ngIf"], [1, "dashboard-container"], [1, "dashboard-header"], [1, "user-name"], [1, "logout-btn", 3, "click"], [1, "dashboard-info"], [1, "info-card"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DashboardComponent_div_2_Template, 25, 9, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: [".dashboard-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #4a4a4a;\n  margin: 2rem 0 3rem;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.dashboard-container[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n  padding: 1rem 2rem 3rem;\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3), 0 12px 40px rgba(118, 75, 162, 0.2);\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  animation: fadeInUp 0.6s ease forwards;\n}\n\n.dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 2px solid #eaeaea;\n}\n\n.profile-img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid #667eea;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.5);\n  transition: transform 0.3s ease;\n}\n\n.profile-img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.user-name[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #333;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.logout-btn[_ngcontent-%COMP%] {\n  background: #ff5f6d;\n  background: linear-gradient(45deg, #ff5f6d, #ffc371);\n  border: none;\n  padding: 0.5rem 1.25rem;\n  font-size: 1rem;\n  color: white;\n  font-weight: 600;\n  border-radius: 12px;\n  cursor: pointer;\n  box-shadow: 0 4px 15px rgba(255, 95, 109, 0.5);\n  transition: background 0.4s ease;\n}\n\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(45deg, #ffc371, #ff5f6d);\n  box-shadow: 0 6px 20px rgba(255, 195, 113, 0.8);\n}\n\n.dashboard-info[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n}\n\n.info-card[_ngcontent-%COMP%] {\n  background: #f7f8fc;\n  padding: 2rem;\n  border-radius: 18px;\n  box-shadow: inset 0 0 15px rgba(118, 75, 162, 0.1);\n  font-size: 1.1rem;\n  color: #555;\n  line-height: 1.6;\n}\n\n.info-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.info-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n\n\n\n@keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQWpDRjs7QUFvQ0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvRkFDRTtFQUVGLDREQUFBO0VBQ0Esc0NBQUE7QUFuQ0Y7O0FBc0NBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFuQ0Y7O0FBc0NBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQ0FBQTtFQUNBLCtCQUFBO0FBbkNGOztBQXNDQTtFQUNFLHFCQUFBO0FBbkNGOztBQXNDQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUFuQ0Y7O0FBc0NBO0VBQ0UsbUJBQUE7RUFDQSxvREFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4Q0FBQTtFQUNBLGdDQUFBO0FBbkNGOztBQXNDQTtFQUNFLG9EQUFBO0VBQ0EsK0NBQUE7QUFuQ0Y7O0FBc0NBO0VBQ0Usa0JBQUE7QUFuQ0Y7O0FBc0NBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrREFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBbkNGOztBQXNDQTtFQUNFLG1CQUFBO0FBbkNGOztBQXNDQTtFQUNFLGNBQUE7QUFuQ0Y7O0FBc0NBLDZCQUFBOztBQUNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RUFuQ0Y7RUFxQ0E7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFuQ0Y7QUFDRiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBoZWFkZXIge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuLy8gICBwYWRkaW5nOiAxMHB4O1xyXG4vLyB9XHJcblxyXG4vLyBoZWFkZXIgaW1nIHtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgd2lkdGg6IDUwcHg7XHJcbi8vICAgaGVpZ2h0OiA1MHB4O1xyXG4vLyAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4vLyB9XHJcblxyXG4vLyBoZWFkZXIgc3BhbiB7XHJcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vIH1cclxuXHJcbi8vIC5jYXJkIHtcclxuLy8gICBtYXJnaW46IDIwcHggYXV0bztcclxuLy8gICBwYWRkaW5nOiAyMHB4O1xyXG4vLyAgIHdpZHRoOiAzNTBweDtcclxuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4vLyAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbi8vIH1cclxuXHJcbi8vIC5jYXJkIHAge1xyXG4vLyAgIG1hcmdpbjogOHB4IDA7XHJcbi8vIH1cclxuXHJcblxyXG4uZGFzaGJvYXJkLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzRhNGE0YTtcclxuICBtYXJnaW46IDJyZW0gMCAzcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbSAzcmVtO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3gtc2hhZG93OlxyXG4gICAgMCA4cHggMjRweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyksXHJcbiAgICAwIDEycHggNDBweCByZ2JhKDExOCwgNzUsIDE2MiwgMC4yKTtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjZzIGVhc2UgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlYWVhZWE7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltZyB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjNjY3ZWVhO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjUpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltZzpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4udXNlci1uYW1lIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzMzMztcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmxvZ291dC1idG4ge1xyXG4gIGJhY2tncm91bmQ6ICNmZjVmNmQ7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmY1ZjZkLCAjZmZjMzcxKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMC41cmVtIDEuMjVyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgyNTUsIDk1LCAxMDksIDAuNSk7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjRzIGVhc2U7XHJcbn1cclxuXHJcbi5sb2dvdXQtYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZmMzNzEsICNmZjVmNmQpO1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgyNTUsIDE5NSwgMTEzLCAwLjgpO1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWluZm8ge1xyXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcclxufVxyXG5cclxuLmluZm8tY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjhmYztcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggcmdiYSgxMTgsIDc1LCAxNjIsIDAuMSk7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxuLmluZm8tY2FyZCBwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uaW5mby1jYXJkIHN0cm9uZyB7XHJcbiAgY29sb3I6ICM2NjdlZWE7XHJcbn1cclxuXHJcbi8qIFNtb290aCBmYWRlLWluIGFuaW1hdGlvbiAqL1xyXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .././../shared/services/auth.service */ 629);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);





class LoginComponent {
    constructor(fb, auth, router) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
        });
    }
    submit() {
        this.auth.login(this.form.value).subscribe((res) => {
            this.auth.storeToken(res.token);
            this.router.navigate(['/dashboard']);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 12, vars: 2, consts: [[1, "login-container"], [1, "login-card"], [3, "formGroup", "ngSubmit"], ["formControlName", "email", "placeholder", "Email", "type", "email"], ["formControlName", "password", "placeholder", "Password", "type", "password"], ["type", "submit", 3, "disabled"], [1, "footer"], ["routerLink", "/signup"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 3)(6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6)(10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Don't have an account? Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: [".login-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  font-family: \"Segoe UI\", sans-serif;\n}\n\n.login-card[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 2.5rem;\n  border-radius: 16px;\n  width: 100%;\n  max-width: 400px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  animation: fadeIn 0.5s ease-in-out;\n}\n\n.login-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n  color: #333;\n  font-size: 1.75rem;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\ninput[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border-radius: 8px;\n  border: 1px solid #ccc;\n  font-size: 1rem;\n  transition: border-color 0.3s;\n}\n\ninput[type=email][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n}\n\nbutton[type=submit][_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.75rem;\n  border: none;\n  border-radius: 8px;\n  background-color: #667eea;\n  color: white;\n  font-size: 1rem;\n  font-weight: bold;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\nbutton[type=submit][_ngcontent-%COMP%]:hover {\n  background-color: #5a67d8;\n}\n\nbutton[type=submit][_ngcontent-%COMP%]:disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\n\n.footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1rem;\n}\n\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  transition: -webkit-text-decoration 0.3s;\n  transition: text-decoration 0.3s;\n  transition: text-decoration 0.3s, -webkit-text-decoration 0.3s;\n}\n\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtFQUNBLG1DQUFBO0FBOUJGOztBQWlDQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtBQTlCRjs7QUFpQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBOUJGOztBQWlDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUE5QkY7O0FBaUNBOztFQUVFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUE5QkY7O0FBZ0NFOztFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQTdCSjs7QUFpQ0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBOUJGOztBQWdDRTtFQUNFLHlCQUFBO0FBOUJKOztBQWlDRTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7QUEvQko7O0FBbUNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQWhDRjs7QUFtQ0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx3Q0FBQTtFQUFBLGdDQUFBO0VBQUEsOERBQUE7QUFoQ0Y7O0FBa0NFO0VBQ0UsMEJBQUE7QUFoQ0o7O0FBb0NBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUFqQ0Y7RUFtQ0E7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFqQ0Y7QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZvcm0ge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICB3aWR0aDogMzAwcHg7XHJcbi8vICAgZ2FwOiAxMHB4O1xyXG4vLyAgIG1hcmdpbjogYXV0bztcclxuLy8gfVxyXG5cclxuLy8gaW5wdXQsIGJ1dHRvbiB7XHJcbi8vICAgcGFkZGluZzogOHB4O1xyXG4vLyAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gfVxyXG5cclxuLy8gYnV0dG9uIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICBib3JkZXI6IG5vbmU7XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyB9XHJcblxyXG4vLyBidXR0b246ZGlzYWJsZWQge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbi8vIH1cclxuXHJcbi8vIGEge1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyB9XHJcblxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEsICM3NjRiYTIpO1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubG9naW4tY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAyLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5sb2dpbi1jYXJkIGgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3M7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogIzY2N2VlYTtcclxuICB9XHJcbn1cclxuXHJcbmJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY3ZWVhO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE2N2Q4O1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uZm9vdGVyIGEge1xyXG4gIGNvbG9yOiAjNjY3ZWVhO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC4zcztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 5431:
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/auth.service */ 629);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);





class SignupComponent {
    constructor(fb, auth, router) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.form = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(6)]],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            profileImage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
        });
    }
    onFileChange(event) {
        const file = event.target.files[0];
        this.form.patchValue({ profileImage: file });
    }
    submit() {
        const formData = new FormData();
        Object.entries(this.form.value).forEach(([key, value]) => formData.append(key, value));
        this.auth.signup(formData).subscribe(() => this.router.navigate(['/login']));
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
SignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 22, vars: 2, consts: [[1, "signup-container"], [1, "signup-card"], [1, "title"], ["enctype", "multipart/form-data", 3, "formGroup", "ngSubmit"], [1, "form-row"], ["formControlName", "firstName", "placeholder", "First Name"], ["formControlName", "lastName", "placeholder", "Last Name"], ["formControlName", "email", "placeholder", "Email Address", "type", "email"], ["formControlName", "password", "placeholder", "Password", "type", "password"], ["formControlName", "mobile", "placeholder", "Mobile Number"], ["formControlName", "dob", "type", "date"], [1, "file-upload"], ["type", "file", 3, "change"], ["type", "submit", 3, "disabled"], [1, "footer"], ["routerLink", "/login"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Create Your Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_4_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 5)(7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 7)(9, "input", 8)(10, "input", 9)(11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 11)(13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function SignupComponent_Template_input_change_13_listener($event) { return ctx.onFileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Upload Profile Image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14)(18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Login here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #999;\n  font-weight: 500;\n  opacity: 1; \n}\n\n.signup-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  font-family: \"Segoe UI\", \"Roboto\", sans-serif;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\n.signup-card[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 2.5rem;\n  border-radius: 16px;\n  width: 100%;\n  max-width: 500px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  animation: fadeIn 0.5s ease-in-out;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n  color: #333;\n  font-size: 1.75rem;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\nform[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border-radius: 8px;\n  border: 1px solid #ccc;\n  font-size: 1rem;\n}\n\nform[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n}\n\nform[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n\nform[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\nform[_ngcontent-%COMP%]   .file-upload[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  background-color: #f1f1f1;\n  border-radius: 8px;\n  text-align: center;\n  cursor: pointer;\n  color: #333;\n  font-size: 0.95rem;\n}\n\nform[_ngcontent-%COMP%]   .file-upload[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\nform[_ngcontent-%COMP%]   .file-upload[_ngcontent-%COMP%]:hover {\n  background-color: #e2e2e2;\n}\n\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.75rem;\n  border: none;\n  border-radius: 8px;\n  background-color: #667eea;\n  color: white;\n  font-size: 1rem;\n  font-weight: bold;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #5a67d8;\n}\n\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\n\n.footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1rem;\n}\n\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n}\n\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQkE7RUFDRSwrREFBQTtBQTlCRjs7QUFrQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBLEVBQUEsWUFBQTtBQS9CRjs7QUE0Q0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscURBQUE7RUFDQSw2Q0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUF6Q0Y7O0FBNENBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBekNGOztBQTZDQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtBQTFDRjs7QUE2Q0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBMUNGOztBQTZDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUExQ0Y7O0FBNENFOzs7OztFQUtFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBMUNKOztBQTRDSTs7Ozs7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUF0Q047O0FBMENFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUF4Q0o7O0FBMENJO0VBQ0UsT0FBQTtBQXhDTjs7QUE0Q0U7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUExQ0o7O0FBNENJO0VBQ0UsYUFBQTtBQTFDTjs7QUE2Q0k7RUFDRSx5QkFBQTtBQTNDTjs7QUErQ0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBN0NKOztBQStDSTtFQUNFLHlCQUFBO0FBN0NOOztBQWdESTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7QUE5Q047O0FBbURBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQWhERjs7QUFrREU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFoREo7O0FBa0RJO0VBQ0UsMEJBQUE7QUFoRE47O0FBcURBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUFsREY7RUFvREE7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFsREY7QUFDRiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmb3JtIHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgd2lkdGg6IDMwMHB4O1xyXG4vLyAgIGdhcDogMTBweDtcclxuLy8gICBtYXJnaW46IGF1dG87XHJcbi8vIH1cclxuXHJcbi8vIGlucHV0LCBidXR0b24ge1xyXG4vLyAgIHBhZGRpbmc6IDhweDtcclxuLy8gICBmb250LXNpemU6IDE0cHg7XHJcbi8vIH1cclxuXHJcbi8vIGJ1dHRvbiB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vICAgYm9yZGVyOiBub25lO1xyXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gYnV0dG9uOmRpc2FibGVkIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4vLyB9XHJcblxyXG4vLyBhIHtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgbWFyZ2luLXRvcDogMTBweDtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gfVxyXG5cclxuLy8gQXBwbHkgbW9kZXJuIFVJIGZvbnRcclxuKiB7XHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsICdSb2JvdG8nLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vLyBNYWtlIHBsYWNlaG9sZGVycyBjbGVhbmVyXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xyXG59XHJcblxyXG5cclxuLy8gLnNpZ251cC1jb250YWluZXIge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuLy8gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhLCAjNzY0YmEyKTtcclxuLy8gICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcclxuLy8gfVxyXG5cclxuLnNpZ251cC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDsgLy8gc3RyZXRjaGVzIGZ1bGwgaGVpZ2h0XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSwgIzc2NGJhMik7XHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIHBhZGRpbmc6IDA7ICAgICAgICAgICAgICAvLyByZW1vdmUgdW53YW50ZWQgc3BhY2VcclxuICBtYXJnaW46IDA7ICAgICAgICAgICAgICAgLy8gaW1wb3J0YW50IHRvIHJlbW92ZSB0b3AgZ2FwXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuLnNpZ251cC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDIuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMXJlbTtcclxuXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcclxuICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzY2N2VlYTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb3JtLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxcmVtO1xyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5maWxlLXVwbG9hZCB7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXNpemU6IDAuOTVyZW07XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmUyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2N2VlYTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE2N2Q4O1xyXG4gICAgfVxyXG5cclxuICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6ICM2NjdlZWE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 5240:
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 629);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);




class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ 7198:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/auth.interceptor.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 629);



class AuthInterceptor {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(req, next) {
        const token = this.auth.getToken();
        if (token) {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
            return next.handle(authReq);
        }
        return next.handle(req);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ 629:
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        // private baseUrl = 'http://localhost:3000';
        this.baseUrl = 'https://portfolio-backend-7r6r.onrender.com/api/auth';
    }
    login(credentials) {
        return this.http.post(`${this.baseUrl}/login`, credentials);
    }
    signup(formData) {
        return this.http.post(`${this.baseUrl}/signup`, formData);
    }
    storeToken(token) {
        localStorage.setItem('token', token);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
    isLoggedIn() {
        return !!localStorage.getItem('token');
    }
    getProfile() {
        return this.http.get('https://portfolio-backend-7r6r.onrender.com/api/auth/profile');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCEt9_oEhnRraCCDC5tRA_yxhV2iMR3n0I",
        authDomain: "bharatmeta-sign-in.firebaseapp.com",
        projectId: "bharatmeta-sign-in",
        storageBucket: "bharatmeta-sign-in.appspot.com",
        messagingSenderId: "649270538559",
        appId: "1:649270538559:web:286cc545b7593bd37aa38a",
        measurementId: "G-VTRD97DFDK"
    },
    recaptcha: {
        siteKey: '6Lc1SxAiAAAAAEgEDpVyUZ7sVmq7_FqXwnYDWX17',
    },
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    window.console.log = () => { };
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map