var EveryJS = SC.Application.create();

EveryJS.libraries = [
  {
    name: "jQuery",
    website: "http://jquery.com/",
    description: "jQuery is a fast and concise JavaScript library that simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development.",
    useIf: [
      "You need DOM manipulation or event handling across all browsers."
    ],
    dependencies: null,
    license: "MIT",
    tags: ['dom'],
    size: 31
  },

  {
    name: "jQuery UI",
    website: "http://jqueryui.com/",
    description: "jQuery UI provides both low-level event handling of interactions and animations and high-level widgets for color picking, calendars, tabbed views, and more.",
    useIf: [
      "You want JavaScript widgets and buttons.",
      "You want to script interactions such as drag and drop or resizing.",
      "You want to add more advanced animations to your pages."
    ],
    dependencies: ["jQuery (included in package)"],
    license: "MIT or GPL Version 2",
    tags: ["ui", "jQuery plugins", "widgets"],
    size: "295K, plus theme and additional assets. Can be customized on the download page."
  },
  
  {
    name: "OpenLayers",
    website: "http://www.openlayers.org/",
    description: "OpenLayers is an open source JavaScript library for displaying map data in web browsers.",
    useIf: [
      "You want rich web-based geographic applications similar to Google Maps and Bing Maps."
    ],
    license: "BSD-style",
    tags: ["mapping"],
    size: "7,652K"
  },
  

  {
    name: "Ender",
    website: "http://ender.no.de/",
    description: "Ender is an open, powerful, micro-to-macro API for composing your own custom JavaScript library; it wraps up application agnostic, independent modules into a slick, intuitive, and familiar interface so you don't have to.",
    useIf: [
      "You want to easily construct your own bespoke framework."
    ],
    size: "7.5K with default configuration. Will vary"
  },

  {
    name: "SproutCore",
    website: "http://www.sproutcore.com",
    description: "SproutCore provides both an MVC architecture and bindings, with views that automatically update any time properties change.",
    useIf: [
      "You want to avoid bugs related to keeping the DOM in sync with your data model.",
      "You want stateful MVC, like you'd find in Cocoa."
    ],
    tags: ["mvc"],
    dependencies: ["jQuery"],
    size: 29
  },

  {
    name: "Backbone.js",
    website: "http://documentcloud.github.com/backbone/",
    description: "Backbone supplies structure to JavaScript-heavy applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing application over a RESTful JSON interface.",
    dependencies: ["Underscore", "jQuery or Zepto (optional but recommended)"],
    tags: ['mvc'],
    size: 3.9
  },

  {
    name: "Dojo Toolkit",
    website: "http://dojotoolkit.org/",
    description: "Dojo Toolkit is an open source modular JavaScript toolkit designed to ease the rapid development of cross-platform, JavaScript/Ajax-based applications and web sites.",
    size: "3.9K - 5MB; applications load modules dynamically",
    tags: ['widgets']
  },

  {
    name: "MochiKit",
    website: "http://mochi.github.com/mochikit/",
    description: "'makes JavaScript suck a bit less' - A lightweight library providing powerful cross-platform DOM manipulation, Ajax, event handling and signaling.  MochiKit.Visual can perform effects and transitions and MochiKit.Selector provides jQuery style CSS selection.  MochiKit.Base allows you to program in a functional style, MochiKit.Iter is inspired by Python itertools.",
    useIf: [ "You need a solid base on which to build advanced functionality." ],
    tags: ['dom'],
    size: "50K for non-web modules, 135K including all web modules. Can be customized at http://mochi.github.com/mochikit/packed/MochiKit/customize.html."
  },

  {
    name: "MooTools",
    website: "http://mootools.net/",
    description: "MooTools is a compact, modular, Object-Oriented JavaScript framework designed for the intermediate to advanced JavaScript developer. It provides cross-platform helpers for manipulating the DOM, handling events, animating elements, and extends JavaScript built-in classes with additional functionality.",
    useIf: [ "You need DOM manipulation or event handling across all browsers." ],
    tags: ['dom'],
    size: 25
  },

  {
    name: "Morpheus",
    website: "https://github.com/ded/morpheus",
    description: "Morpheus lets you \"tween anything\" in parallel on multiple elements, from integers to colors, with easing transitions, in a single high-performant loop utilizing the CPU-friendly requestAnimationFrame standard.",
    useIf: [
      "You want to animate multiple elements and have them stay in sync."
    ],
    tags: ['animation'],
    size: 1.3
  },

  {
    name: "xui",
    website: "http://xuijs.com/",
    description: "A super micro tiny DOM library for authoring HTML5 mobile web applications.",
    browserSupport: "Different builds for WebKit, BlackBerry, and IE.",
    useIf: [
      "You are able to deliver different libraries depending on the platform, such as in PhoneGap builds."
    ],
    tags: ['dom', 'mobile-only'],
    size: "8K or lower, depending on build"
  },

  {
    name: "Zepto",
    website: "http://zeptojs.com/",
    description: "Zepto.js is a minimalist JavaScript framework for mobile WebKit browsers, with a jQuery-compatible syntax.",
    browserSupport: "Supports mobile WebKit browsers only.",
    tags: ['dom', 'mobile-only'],
    useIf: [
      "You don't have to support desktop browsers and file size is important."
    ],
    size: 4.8
  },

  {
    name: "Handlebars",
    website: "http://handlebars.strobeapp.com/",
    description: "Mustache-compatible semantic templating engine.",
    size: 8
  },

  {
    name: "Underscore",
    website: "http://documentcloud.github.com/underscore/",
    description: "Underscore is a utility-belt library for JavaScript that provides a lot of the functional programming support that you would expect in Prototype.js (or Ruby), but without extending any of the built-in JavaScript objects.",
    useIf: [
      "You need features of ECMAScript 5 in non-ES5 browsers."
    ],
    size: 3
  },

  {
    name: "Uki",
    website: "http://www.ukijs.org",
    description: "Uki is a fast and simple JavaScript user interface toolkit for desktop-like web applications. It comes with a rich view-component library ranging from Slider to List and SplitPane.",
    useIf: [
      "You need a simple UI kit for creating desktop-like interfaces."
    ],
    size: 34
  },
  {
    name: "Milk",
    website: "https://github.com/pvande/Milk",
    description: "Spec-compatible (v1.1+λ) Mustache templating: written in CoffeeScript, runnable anywhere.",
    useIf: [
      "You need a simple, safe templating language."
    ],
    dependencies: [ 'None' ],
    license: "GIFT",
    tags: ['mustache', 'templating', 'coffeescript'],
    size: 1.9
  },
  {
    name: "YUI 3",
    website: "http://developer.yahoo.com/yui/3/",
    description: "Yahoo!'s next-generation JavaScript and CSS library. It powers the new Yahoo! homepage, Yahoo! Mail, and many other Yahoo! sites.",
    size: "15K to start; modules are loaded dynamically"
  },
  {
    name: "Cappuccino",
    website: "http://www.cappuccino.org",
    description: "Cappuccino makes it easy to build desktop-caliber applications that run in a web browser.",
    useIf: [
      "You want to build desktop-calibar applications quickly."
    ],
    dependencies: null,
    license: "LGPL",
    tags: ['objective-j'],
    sortSize: 1024,
    size: "1mb, includes code and images"
  },
  {
    name: "functools",
    website: "http://github.com/azer/functools",
    description: "A minimal JavaScript library for functional operations.",
    size: 2
  },
  {
    name: "Raphael",
    website: "http://raphaeljs.com/",
    description: "A small JavaScript library that should simplify your work with vector graphics on the web.",
    size: 2
  },
  {
    name: "Knockout",
    website: "http://knockoutjs.com/",
    description: "Knockout is a JavaScript library that helps you to create rich, responsive display and editor user interfaces with a clean underlying data model. Any time you have sections of UI that update dynamically (e.g., changing depending on the user’s actions or when an external data source changes), KO can help you implement it more simply and maintainably.",
    useIf: [
      "You want to define your data as a JavaScript model object, and then bind DOM elements and/or templates to it."
    ],
    size: 25
  },
  {
    name: "Closure Tools",
    website: "http://code.google.com/closure/",
    description: "Closure Tools is a set of open-source JavaScript tools behind some of Google's big web apps like Gmail, Google Maps, and Google Docs.",
    size: "modules can be loaded dynamically"
  },
  {
    name: "Modernizr",
    website: "http://www.modernizr.com",
    description: "Modernizr is a JavaScript library that allows you to use CSS3 and HTML5 features while maintaining a fine level of control over browsers that don't support them yet.",
    size: 3.7
  },
  {
    name: "environ",
    website: "http://github.com/azer/environ",
    description: "Cross platform environment detection library.",
    useIf: [
      "You want to detect what platform the user is running.",
      "You want to detect what JavaScript engine the user's platform utilises.",
      "You want to detect what rendering engine the user's browser utilises."
    ],
    size: 1
  },
  {
    name: "qooxdoo",
    website: "http://qooxdoo.org/",
    description: "qooxdoo is a universal JavaScript framework that enables you to create applications for a wide range of platforms. With its object-oriented programming model you build rich, interactive applications (RIAs), native-like apps for mobile devices, traditional web applications or even applications to run outside the browser.", 
    useIf: [
      "You need a UI kit for creating desktop-like interfaces.",
      "You need a UI kit for creating mobile interfaces."
    ],
    size: "1MB or lower, depending on build",
    tags: ['ui']
  },
  {
    name: "oCanvas",
    website: "http://ocanvas.org/",
    description: "JavaScript library for object-based canvas drawing.",
    useIf: [
      "You want to build things with HTML5 Canvas a bit easier."
    ],
    dependencies: null,
    license: "MIT",
    tags: ['canvas'],
    size: 15
  },
  {
    name: "Grafico",
    website: "http://grafico.kilianvalkhof.com/",
    description: "Grafico is a javascript charting library based on Raphaël and Prototype.js. Grafico's basic principles are to provide good, clean looking graphs inspired by work of Stephen Few and Edward Tufte, while still being flexible to implement and providing numerous api options to tweak the look of the graphs.",
    license: "MIT",
    tags: [ 'javascript','svg', 'chart', 'graph'],
    useIf: [
      "You need good looking charts",
      "You need easily readable charts"
    ],
    dependencies: ["Prototype", "Raphaël"],
    size: "36kb or less"
  },
	{
    name: "JavaScriptMVC",
    website: "http://javascriptvc.com",
    description: "JavaScriptMVC is an open-source framework containing the best ideas in jQuery development. It guides you to successfully completed projects by promoting best practices, maintainability, and convention over configuration..", 
    useIf: [
      "You want to build big applications on top of jQuery.",
      "You want great performance.",
      "You don't want to care about memory issues in long lived apps"
    ],
		tags: ["mvc"],
    dependencies: ["jQuery"],
    size: "6.7K - 86K; applications load modules dynamically"
  },
  {
    name: "scaleApp",
    website: "http://github.com/flosse/scaleApp",
    license: "MIT",
    description: "scaleApp is a JavaScript framework for scalable One-Page-Applications.", 
    size: 105,
    dependencies: ["jQuery (included in package)"],
    tags: ['mvc', 'jQuery', 'dom'],
  },
  {
    name: "Benchmark.js",
    website: "http://benchmarkjs.com/",
    description: "A benchmarking library that works on nearly all JavaScript platforms, supports high-resolution timers, and returns statistically significant results.",
    size: 4.9
  }, 
  {
    name: "Spine",
    website: "http://maccman.github.com/spine",
    description: "Spine is a lightweight framework for building JavaScript web applications. Spine gives you a MVC structure and then gets out of your way, allowing you to concentrate on the fun stuff, building awesome web applications.",
    dependencies: ["jQuery or Zepto (optional but recommended)"],
    tags: ['mvc'],
    size: 2
  },
  {
    name: "LABjs",
    website: "http://labjs.com/",
    description: "LABjs is a dynamic script loader intended to replace the use of the ugly, non-performant <script> tag with a flexible and performance-optimized alternative API.", 
    useIf: [
      "You want to improve performance by loading scripts in parallel and without blocking other resources."
    ],
    size: 2.1
  }  
];

EveryJS.libraries.sort(function(a,b) {
  return SC.compare(a.name.toLowerCase(), b.name.toLowerCase());
});

EveryJS.listController = SC.ArrayProxy.create({
  contentBinding: 'EveryJS.libraries',

  sortBy: 'name',
  filterBy: null,

  arrangedObjects: function(key, value) {
    var content = this.get('content'),
        sortBy = this.get('sortBy'),
        filterBy = this.get('filterBy'),
        arrangedObjects, tags;

    if (value !== undefined) { return value; }
    if (sortBy === this._lastSort && filterBy === this._lastFilter) {
      return this._lastVal;
    }
    if (!content) { return null; }

    // Eliminate any items that don't match our filter.
    if (filterBy && filterBy !== 'all') {
      arrangedObjects = [];
      content.forEach(function(item) {
        tags = SC.get(item, 'tags');
        if (tags && tags.indexOf(filterBy) > -1) {
          arrangedObjects.push(item);
        }
      });
    } else {
      arrangedObjects = SC.copy(content);
    }

    arrangedObjects.sort(function(a, b) {
      if (sortBy === 'size') {
        a = a.sortSize || a[sortBy];
        b = b.sortSize || b[sortBy];
      } else {
        a = a[sortBy];
        b = b[sortBy];
      }

      if (sortBy === 'size') {
        a = parseFloat(a);
        b = parseFloat(b);
      }

      if (typeof a === 'string') {
        a = a.toLowerCase();
      }
      if (typeof b === 'string') {
        b = b.toLowerCase();
      }

      return SC.compare(a, b);
    });

    this._lastVal = arrangedObjects;
    this._lastFilter = filterBy;
    this._lastSort = sortBy;
    return arrangedObjects;
  }.property('sortBy', 'filterBy')
});

EveryJS.ListView = SC.CollectionView.extend({
  contentBinding: 'EveryJS.listController.arrangedObjects'
});

EveryJS.SizeView = SC.View.extend({
  sizeBinding: '*parentView.parentView.content.size',

  sizeString: function() {
    var size = this.get('size');
    if (typeof size === 'number') {
      return size+'K';
    } else {
      return size;
    }
  }.property('size')
});

EveryJS.FilterByView = SC.View.extend({
  change: function(evt) {
    var elem = this.$('select');
    EveryJS.listController.set('filterBy', elem.val());
  }
});

EveryJS.SortByView = SC.View.extend({
  change: function(evt) {
    var elem = this.$('select');
    EveryJS.listController.set('sortBy', elem.val());
  }
});

Handlebars.registerHelper('list', function(key) {
  var buf = '<ul>', list;
  list = SC.get(this, key);
  list.forEach(function(item) {
    buf += '<li>%@</li>'.fmt(item);
  });
  return new Handlebars.SafeString(buf + '</ul>');
});

