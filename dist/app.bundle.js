!function(n){var e={};function t(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return n[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)t.d(r,a,function(e){return n[e]}.bind(null,a));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=332)}({332:function(n,e,t){"use strict";function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}t.r(e);var a=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,a;return e=n,(t=[{key:"post",value:function(n,e){return new Promise(function(t,r){fetch(n,{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}}).then(function(n){return n.json()}).then(function(n){return t(n)}).catch(function(n){return r(n)})})}},{key:"get",value:function(n){return new Promise(function(e,t){fetch(n,{method:"GET",headers:{"x-access-token":localStorage.getItem("sn_user_token")}}).then(function(n){return n.json()}).then(function(n){return e(n)}).catch(function(n){return t(n)})})}}])&&r(e.prototype,t),a&&r(e,a),n}(),o="https://mlp-demo.herokuapp.com/api";function i(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var u=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"login",value:function(n,e){var t=new a;return new Promise(function(r,a){t.post("".concat(o,"/public/auth/login"),{email:n,password:e}).then(function(n){if(!n.auth)return a(n);localStorage.setItem("sn_user_id",n.id),localStorage.setItem("sn_user_token",n.token),r(n)}).catch(function(n){return a(n)})})}},{key:"signUp",value:function(n){var e=new a;return new Promise(function(t,r){e.post("".concat(o,"/public/auth/signup"),n).then(function(n){if(!n.auth)return r(n);t(n)}).catch(function(n){return r(n)})})}},{key:"logout",value:function(){return new Promise(function(n,e){localStorage.removeItem("sn_user_id"),localStorage.removeItem("sn_user_token"),localStorage.removeItem("sn_user_type"),n()})}},{key:"token",get:function(){return localStorage.getItem("sn_user_token")}},{key:"userId",get:function(){return localStorage.getItem("sn_user_id")}},{key:"userIsAdmin",get:function(){return"admin"===localStorage.getItem("sn_user_type")}}])&&i(e.prototype,t),r&&i(e,r),n}();function c(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var s=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"navigate",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;location.appData=e,location.hash=n}}])&&c(e.prototype,t),r&&c(e,r),n}();function l(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var f=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._authService=new u,this._routing=new s}var e,t,r;return e=n,(t=[{key:"canActive",value:function(){return!!this._authService.token||(this._routing.navigate("/login"),!1)}}])&&l(e.prototype,t),r&&l(e,r),n}();function d(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var v=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._authService=new u,this._routing=new s}var e,t,r;return e=n,(t=[{key:"canActive",value:function(){return!!this._authService.userIsAdmin||(this._routing.navigate("/"),!1)}}])&&d(e.prototype,t),r&&d(e,r),n}();function h(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var p=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"render",value:function(){return'<div>\n                    <h1>Home page</h1>\n                    <div>\n                        <a href="/#/login">Go to Login</a>\n                    </div>\n                    <div>\n                        <a href="/#/Signup">Go to Signup</a>\n                    </div>\n                </div>'}}])&&h(e.prototype,t),r&&h(e,r),n}();function m(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var y=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"render",value:function(){return"<div>\n                    <h1>404</h1>\n                    <p>Page not found</p>\n                </div>"}}])&&m(e.prototype,t),r&&m(e,r),n}();function w(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var g=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._modalContainer=document.querySelector("modals")}var e,t,r;return e=n,(t=[{key:"render",value:function(n){var e=this._getTemplate(n);this._modalContainer.innerHTML=e;var t=document.querySelector(".modal");this._showModal(t),this._hideModal(t)}},{key:"_showModal",value:function(n){setTimeout(function(){n.classList.add("show")},100)}},{key:"_hideModal",value:function(n){var e=this;setTimeout(function(){n.classList.remove("show"),e._modalContainer.innerHTML=""},3e3)}},{key:"_getTemplate",value:function(n){return'\n        \x3c!-- Modal --\x3e\n        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style="display: block; background: rgba(33, 37, 41, 0.7)">\n          <div class="modal-dialog modal-dialog-centered" role="document">\n            <div class="modal-content">\n              <div class="modal-header">\n                <h5 class="modal-title" id="exampleModalLongTitle">Notification</h5>\n              </div>\n              <div class="modal-body">\n                '.concat(n,"\n              </div>\n            </div>\n          </div>\n        </div>\n        ")}}])&&w(e.prototype,t),r&&w(e,r),n}();function b(n,e,t,r,a,o,i){try{var u=n[o](i),c=u.value}catch(n){return void t(n)}u.done?e(c):Promise.resolve(c).then(r,a)}function _(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var x=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._authService=new u,this._modal=new g,this._routing=new s}var e,t,r;return e=n,(t=[{key:"beforeRender",value:function(){var n,e=(n=regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!this._authService.token){n.next=3;break}return n.next=3,this._routing.navigate("/users/".concat(this._authService.userId));case 3:case"end":return n.stop()}},n,this)}),function(){var e=this,t=arguments;return new Promise(function(r,a){var o=n.apply(e,t);function i(n){b(o,r,a,i,u,"next",n)}function u(n){b(o,r,a,i,u,"throw",n)}i(void 0)})});return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return'\n        <div class="auth-wrap d-flex mt-5">\n            <div class="auth-form col col-6 mx-auto my-auto">\n                <h3>Login to Social.</h3>\n                <p class="text-secondary">Enter your e-mail address & password to login to your Social account.</p>\n                <form name="loginForm" novalidate>\n                    <div class="form-group">\n                        <input type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" required data-pattern="^S+@[a-z]+.[a-z]+$">\n                        <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="S+">\n                        <div class="d-flex mt-5">\n                            <button type="submit" class="btn btn-primary btn-sm">Login</button>\n                        </div>\n                        <div>\n                        <a href="/#/">Go to Home page</a>\n                        </div>\n                        <div>\n                        <a href="/#/Signup">Go to Signup</a>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            \x3c!-- /.auth-form --\x3e\n            <div class="auth-bg col col-6">\n\n            </div>\n            \x3c!-- /.auth-bg --\x3e\n        </div>\n        \x3c!-- /.auth-wrap --\x3e\n        '}},{key:"afterRender",value:function(){var n=this;document.forms.loginForm.addEventListener("submit",function(e){e.preventDefault();var t=e.target.elements,r=t.email,a=t.password;if(!r.value||!a.value)return console.warn("Заполните все поля");n._authService.login(r.value,a.value).then(function(e){n._routing.navigate("/users/".concat(e.id),{myData:"My data"})}).catch(function(e){return n._modal.render(e.message)})})}}])&&_(e.prototype,t),r&&_(e,r),n}();function k(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var S=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._authService=new u,this._modal=new g}var e,t,r;return e=n,(t=[{key:"render",value:function(){return'\n        <div class="auth-wrap d-flex mt-5">\n            <div class="auth-form col col-6 mx-auto my-auto">\n                <h3>Signup in Social.</h3>\n                <p class="text-secondary">Enter your data to signup.</p>\n                <form name="signupForm" novalidate>\n                    <div class="form-group">\n                        <input type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" required data-pattern="^S+@[a-z]+.[a-z]+$">\n                        <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="S+">\n                        <input type="text" class="form-control form-control-sm mt-3" id="nickname" placeholder="nickname" required data-pattern="S+">\n                        <input type="text" class="form-control form-control-sm mt-3" id="first_name" placeholder="first_name" required data-pattern="S+">\n                        <input type="text" class="form-control form-control-sm mt-3" id="last_name" placeholder="last_name" required data-pattern="S+">\n                        <input type="text" class="form-control form-control-sm mt-3" id="phone" placeholder="phone" required data-pattern="S+">\n                        <input type="text" class="form-control form-control-sm mt-3" id="gender_orientation" placeholder="male_or_female"  required data-pattern="S+">\n                        <input type="text" class="form-control form-control-sm mt-3" id="city" placeholder="city" required data-pattern="S+">\n                        <input type="text" class="form-control form-control-sm mt-3" id="country" placeholder="country" required data-pattern="S+">\n                        <input type="text" class="form-control form-control-sm mt-3" id="date_of_birth_day" placeholder="date_of_birth_day" required data-pattern="S+">\n                        <input type="text" class="form-control form-control-sm mt-3" id="date_of_birth_month" placeholder="date_of_birth_month" required data-pattern="S+">\n                        <input type="text" class="form-control form-control-sm mt-3" id="date_of_birth_year" placeholder="date_of_birth_year" required data-pattern="S+">\n\n\n                        <div class="d-flex mt-5">\n                            <button type="submit" class="btn btn-primary btn-sm">Signup</button>\n                        </div>\n                        <div>\n                        <a href="/#/">Go to Home page</a>\n                        </div>\n                        <div>\n                        <a href="/#/Login">Go to Login</a>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            \x3c!-- /.auth-form --\x3e\n            <div class="auth-bg col col-6">\n\n            </div>\n            \x3c!-- /.auth-bg --\x3e\n        </div>\n        \x3c!-- /.auth-wrap --\x3e\n        '}},{key:"afterRender",value:function(){var n=this;document.forms.signupForm.addEventListener("submit",function(e){e.preventDefault();for(var t={},r=0;r<e.target.elements.length-1;r++)if(t[e.target.elements[r].id]=e.target.elements[r].value,!e.target.elements[r].value)return console.warn("Заполните все поля");n._authService.signUp(t).then(function(n){return console.log(n)}).catch(function(e){return n._modal.render(e.message)})})}}])&&k(e.prototype,t),r&&k(e,r),n}();function P(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var R=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"parseRequestURL",value:function(){var n=location.hash.slice(1).toLowerCase()||"/",e=n.split("/");return{resource:e[1],id:e[2],url:n}}}])&&P(e.prototype,t),r&&P(e,r),n}();function T(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var j=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"getUser",value:function(n){var e=new a;return new Promise(function(t,r){e.get("".concat(o,"/public/users/get-info/").concat(n)).then(function(n){return t(n)}).catch(function(n){return r(n)})})}}])&&T(e.prototype,t),r&&T(e,r),n}();function C(n,e,t,r,a,o,i){try{var u=n[o](i),c=u.value}catch(n){return void t(n)}u.done?e(c):Promise.resolve(c).then(r,a)}function E(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var O=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._activeRoute=new R,this._authService=new u,this._userService=new j,this._authUserId=this._authService.userId,this._user=null}var e,t,r;return e=n,(t=[{key:"beforeRender",value:function(){var n,e=(n=regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this._activeRoute.parseRequestURL().id;case 2:return this._activeUserId=n.sent,n.next=5,this._userService.getUser(this._activeUserId);case 5:this._user=n.sent,localStorage.setItem("sn_user_type",this._user.type);case 7:case"end":return n.stop()}},n,this)}),function(){var e=this,t=arguments;return new Promise(function(r,a){var o=n.apply(e,t);function i(n){C(o,r,a,i,u,"next",n)}function u(n){C(o,r,a,i,u,"throw",n)}i(void 0)})});return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return"\n            \x3c!-- Component styles --\x3e\n            <style>\n                ".concat(this.style,'\n            </style>\n            \x3c!-- Component html --\x3e\n            <div class="user-cover-container"\n                style="background: url(').concat(this._user.cover,') no-repeat center / cover;"\n            >\n            </div>\n            <div class="user-avatar-container d-flex justify-content-center">\n                <div class="user-avatar">\n                    <img src="').concat(this._user.avatar,'">\n                </div>\n            </div>\n        ')}},{key:"style",get:function(){return"\n            img {\n                max-width: 100%;\n            }\n            .user-cover-container {\n                height: 400px;\n                width: 100%;\n            }\n            .user-avatar-container {\n                transform: translateY(-50%);\n            }\n            .user-avatar {\n                width: 138px;\n                height: 138px;\n                border-radius: 50%;\n                overflow: hidden;\n            }\n        "}}])&&E(e.prototype,t),r&&E(e,r),n}();function I(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var q=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"getNews",value:function(){var n=new a;return new Promise(function(e,t){n.get("".concat(o,"/public/news")).then(function(n){return e(n)}).catch(function(n){return t(n)})})}}])&&I(e.prototype,t),r&&I(e,r),n}();function L(n,e,t,r,a,o,i){try{var u=n[o](i),c=u.value}catch(n){return void t(n)}u.done?e(c):Promise.resolve(c).then(r,a)}function M(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var A=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._newsService=new q,this._news=null}var e,t,r;return e=n,(t=[{key:"beforeRender",value:function(){var n,e=(n=regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this._newsService.getNews();case 2:this._news=n.sent;case 3:case"end":return n.stop()}},n,this)}),function(){var e=this,t=arguments;return new Promise(function(r,a){var o=n.apply(e,t);function i(n){L(o,r,a,i,u,"next",n)}function u(n){L(o,r,a,i,u,"throw",n)}i(void 0)})});return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return"\n            \x3c!-- Component styles --\x3e\n            <style>\n                ".concat(this.style,'\n            </style>\n\n            \x3c!-- Component html --\x3e\n            <div class="title"><h1>NEWS</h1></div>\n            <div class="news-container">\n\n            <img src="').concat(this._news.news[0].pictures[0].url,'">\n\n            </div>\n        ')}},{key:"style",get:function(){return"\n            img {\n                width: 300px;\n            }\n            .news-container {\n                height: 400px;\n                width: 100%;\n            }\n        "}}])&&M(e.prototype,t),r&&M(e,r),n}();function U(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var H=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"getWinners",value:function(n,e){var t=new a;return new Promise(function(r,a){t.get("".concat(o,"/public/winners?part=").concat(n,"&limit=").concat(e)).then(function(n){return r(n)}).catch(function(n){return a(n)})})}}])&&U(e.prototype,t),r&&U(e,r),n}();function N(n,e,t,r,a,o,i){try{var u=n[o](i),c=u.value}catch(n){return void t(n)}u.done?e(c):Promise.resolve(c).then(r,a)}function G(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var W=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._winnersService=new H,this._winners=null}var e,t,r;return e=n,(t=[{key:"beforeRender",value:function(){var n,e=(n=regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this._winnersService.getWinners(1,15);case 2:this._winners=n.sent;case 3:case"end":return n.stop()}},n,this)}),function(){var e=this,t=arguments;return new Promise(function(r,a){var o=n.apply(e,t);function i(n){N(o,r,a,i,u,"next",n)}function u(n){N(o,r,a,i,u,"throw",n)}i(void 0)})});return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return"\n            \x3c!-- Component styles --\x3e\n            <style>\n                ".concat(this.style,'\n            </style>\n\n            \x3c!-- Component html --\x3e\n            <div class="title"><h1>WINNERS</h1></div>\n            <row>\n                <div class="winners-container col-lg-10 col-sm-5">\n            \n                </div>\n            </row>\n        ')}},{key:"afterRender",value:function(){for(var n=document.querySelector(".winners-container"),e=0;e<this._winners.winners.length;e++)n.insertAdjacentHTML("beforeEnd",'<div class="winner"><img src="'.concat(this._winners.winners[e].member_id.user_id.avatar,'"><div></div>'))}},{key:"style",get:function(){return"\n            .winners-container {\n                display: flex;\n                flex-wrap: wrap;\n                justify-content: space-between;\n            }\n            .winner {\n                margin: 5 px;\n                width: 90px;\n                height: 90px;\n            }\n            img {\n                max-width: 80%;\n                text-align:center;\n                display:block; \n                margin: 0 auto ;           \n                \n            }\n        "}}])&&G(e.prototype,t),r&&G(e,r),n}();function z(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var D=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"render",value:function(){return"<h1>Admin Profile page</h1>"}}])&&z(e.prototype,t),r&&z(e,r),n}(),F=new f,$=new v,J={"/":{component:new p},"/login":{component:new x},"/signup":{component:new S},"/users/:id":{component:new O,guards:[F]},"/news":{component:new A,guards:[F]},"/admin":{component:new D,guards:[F,$]},404:{component:new y},"/winners":{component:new W}};function Y(n,e,t,r,a,o,i){try{var u=n[o](i),c=u.value}catch(n){return void t(n)}u.done?e(c):Promise.resolve(c).then(r,a)}function B(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var K=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._authService=new u,this._routing=new s,this._userId=null}var e,t,r;return e=n,(t=[{key:"beforeRender",value:function(){var n,e=(n=regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:this._userId=this._authService.userId;case 1:case"end":return n.stop()}},n,this)}),function(){var e=this,t=arguments;return new Promise(function(r,a){var o=n.apply(e,t);function i(n){Y(o,r,a,i,u,"next",n)}function u(n){Y(o,r,a,i,u,"throw",n)}i(void 0)})});return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(!this._authService.token)return"";var n=this._authService.userIsAdmin;return'\n            <nav class="navbar navbar-light bg-light">\n                <a class="navbar-brand">App</a>\n                <ul class="navbar-nav d-flex flex-row">\n                    <li class="nav-item">\n                        <a class="nav-link" href="/#/">Home</a>\n                    </li>    \n                    <li class="nav-item ml-3" >\n                        <a class="nav-link" href="/#/users/'.concat(this._userId,'">My profile</a>\n                    </li>\n                    <li class="nav-item ml-3">\n                        <a class="nav-link" href="/#/news">News</a>\n                    </li>\n                    <li class="nav-item ml-3">\n                        <a class="nav-link" href="/#/winners">Winners</a>\n                    </li>\n                    ').concat(n?'<li class="nav-item ml-3">\n                    <a class="nav-link" href="/#/admin">Admin Panel</a></li>':"",'                      \n                </ul>\n                <button class="btn btn-primary logout-btn">Logout</button>\n            </nav>\n        ')}},{key:"afterRender",value:function(){var n=this;if(!this._authService.token)return"";document.querySelector(".logout-btn").addEventListener("click",function(e){n._authService.logout().then(function(){return n._routing.navigate("/login")})})}}])&&B(e.prototype,t),r&&B(e,r),n}();function Q(n,e,t,r,a,o,i){try{var u=n[o](i),c=u.value}catch(n){return void t(n)}u.done?e(c):Promise.resolve(c).then(r,a)}var V=new R,X=function(){var n,e=(n=regeneratorRuntime.mark(function n(){var e,t,r,a,o,i,u;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=document.querySelector("app-header"),t=document.querySelector("app-container"),r=V.parseRequestURL(),a=(r.resource?"/".concat(r.resource):"/")+(r.id?"/:id":""),o=J[a]?J[a].component:J[404].component,!(i=J[a]?J[a].guards:null)){n.next=10;break}if(i.every(function(n){return n.canActive()})){n.next=10;break}return n.abrupt("return");case 10:if(!e){n.next=16;break}return u=new K,n.next=14,u.beforeRender();case 14:e.innerHTML=u.render(),u.afterRender();case 16:if(!o.beforeRender){n.next=19;break}return n.next=19,o.beforeRender();case 19:t.innerHTML=o.render(),o.afterRender&&o.afterRender();case 21:case"end":return n.stop()}},n)}),function(){var e=this,t=arguments;return new Promise(function(r,a){var o=n.apply(e,t);function i(n){Q(o,r,a,i,u,"next",n)}function u(n){Q(o,r,a,i,u,"throw",n)}i(void 0)})});return function(){return e.apply(this,arguments)}}();window.addEventListener("load",X),window.addEventListener("hashchange",X)}});