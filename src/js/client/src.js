/// <reference path="../../typescript/meteor/meteor.d.ts"/>
/// <reference path="../../typescript/packages/meteor-typescript-utils.d.ts"/>

(function (MyPackage) {
    var Templates;
    (function (Templates_1) {
        var MeteorTemplate = meteorts.MeteorTemplate;
        var Hugo;
        (function (Hugo) {
            var Templates;
            (function (Templates) {
                var MeteorTemplate = meteorts.MeteorTemplate;
                ///////////////////////////////////////////////////////////////////////////////
                // HomeLoader TEMPLATE                                                    //
                ///////////////////////////////////////////////////////////////////////////////
                var HomeLoaderViewModel = (function () {
                    function HomeLoaderViewModel() {
                    }
                    HomeLoaderViewModel.prototype.homeViewModel = function () {
                        return new HomeViewModel();
                    };
                    return HomeLoaderViewModel;
                })();
                var HomeLoaderTemplate = (function (_super) {
                    __extends(HomeLoaderTemplate, _super);
                    function HomeLoaderTemplate() {
                        _super.call(this, "HomeLoader", {
                            "homeViewModel": HomeLoaderViewModel.prototype.homeViewModel
                        });
                    }
                    return HomeLoaderTemplate;
                })(MeteorTemplate.Base);
                MeteorTemplate.register(new HomeLoaderTemplate());
            })(Templates = Hugo.Templates || (Hugo.Templates = {}));
        })(Hugo || (Hugo = {}));
        ///////////////////////////////////////////////////////////////////////////////
        // Home TEMPLATE                                                    //
        ///////////////////////////////////////////////////////////////////////////////
        var HomeViewModel = (function () {
            // constructor
            function HomeViewModel() {
                this.titleVar = new ReactiveVar("Title");
            }
            Object.defineProperty(HomeViewModel.prototype, "title", {
                // properties
                set: function (title) {
                    this.titleVar.set(title);
                },
                enumerable: true,
                configurable: true
            });
            // helpers
            HomeViewModel.prototype.counter = function () {
                return Session.get("counter");
            };
            HomeViewModel.prototype.dynamicTitle = function () {
                return this.titleVar.get();
            };
            // events
            HomeViewModel.prototype.clickButton = function () {
                // increment the counter when button is clicked
                Session.set("counter", Session.get("counter") + 1);
            };
            return HomeViewModel;
        })();
        var HomeTemplate = (function (_super) {
            __extends(HomeTemplate, _super);
            function HomeTemplate() {
                _super.call(this, "Home", {
                    "counter": HomeViewModel.prototype.counter,
                    "dynamicTitle": HomeViewModel.prototype.dynamicTitle
                }, {
                    "click button": HomeViewModel.prototype.clickButton
                }, {
                    "input #title": "title"
                });
            }
            HomeTemplate.prototype.rendered = function () {
                console.log("Rendered");
            };
            HomeTemplate.prototype.created = function () {
                Session.setDefault("counter", 1);
                console.log("Created");
            };
            HomeTemplate.prototype.destroyed = function () {
                console.log("Destroyed");
            };
            return HomeTemplate;
        })(MeteorTemplate.Base);
        MeteorTemplate.register(new HomeTemplate());
    })(Templates = MyPackage.Templates || (MyPackage.Templates = {}));
})(MyPackage || (MyPackage = {}));
