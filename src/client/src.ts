/// <reference path="../../typescript/meteor/meteor.d.ts"/>
/// <reference path="../../typescript/packages/meteor-typescript-utils.d.ts"/>

module MyPackage.Templates {

  import MeteorTemplate = meteorts.MeteorTemplate;

  module Hugo.Templates {

    import MeteorTemplate = meteorts.MeteorTemplate;

    ///////////////////////////////////////////////////////////////////////////////
    // HomeLoader TEMPLATE                                                    //
    ///////////////////////////////////////////////////////////////////////////////

    class HomeLoaderViewModel {

      homeViewModel() {
        return new HomeViewModel();
      }
    }

    class HomeLoaderTemplate extends MeteorTemplate.Base<HomeLoaderViewModel> {
      constructor() {
        super("HomeLoader", { // helpers
            "homeViewModel": HomeLoaderViewModel.prototype.homeViewModel
          }
        );
      }
    }

    MeteorTemplate.register(new HomeLoaderTemplate());
  }

  ///////////////////////////////////////////////////////////////////////////////
  // Home TEMPLATE                                                    //
  ///////////////////////////////////////////////////////////////////////////////

  class HomeViewModel {

    // fields

    titleVar: ReactiveVar<string>;

    // constructor

    constructor() {
      this.titleVar = new ReactiveVar<string>("Title");
    }

    // properties

    set title(title: string) {
      this.titleVar.set(title);
    }

    // helpers

    counter () {
      return Session.get("counter");
    }

    dynamicTitle() {
      return this.titleVar.get();
    }

    // events

    clickButton () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  }

  class HomeTemplate extends MeteorTemplate.Base<HomeViewModel> {
    constructor() {
      super("Home", { // helpers
          "counter": HomeViewModel.prototype.counter,
          "dynamicTitle": HomeViewModel.prototype.dynamicTitle
        }, {        // events
          "click button": HomeViewModel.prototype.clickButton
        }, {        // bindings
          "input #title": "title"
        }
      );
    }

    rendered() {
      console.log("Rendered");
    }

    created() {
      Session.setDefault("counter", 1);
      console.log("Created");
    }

    destroyed() {
      console.log("Destroyed");
    }
  }

  MeteorTemplate.register(new HomeTemplate());
}
