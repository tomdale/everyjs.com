EveryJS_libraries = [
  {
    name: "genData",
    website: "https://github.com/bemson/genData/",
    description: "A normalization pattern to build, query, and manipulate everything.",
    useIf: [
      "You use loop-statements to parse and manipulate data.",
      "You derive objects from other objects.",
      "You work with nested sequences (json/xml) of structured or unstructured data."
    ],
    dependencies: null,
    license: "MIT",
    tags: ['data'],
    size: 1
  },
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
name: "Skeleton", 
website: "http://getskeleton.com/",
description: "Skeleton is a small collection of CSS & JS files that can help you rapidly develop sites that look beautiful at any size, be it a 17-inch laptop screen or an iPhone.", 
useIf: [
"You want a simple, lightweight framework for rapidly implementing responsive design web apps that work across devices"
], 
dependencies: ["jQuery (included in package)"],
license: "MIT",
tags: ["grid", "responsive design"],
size: "~45kb containing all the CSS groundwork and JS goodies to get started on any web project"
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
    name: "Batman.js",
    website: "http://batmanjs.org/",
    description: "Batman.js is a framework for building rich web applications with CoffeeScript or JavaScript. App code is concise and declarative, thanks to a powerful system of view bindings and observable properties. The API is designed with developer and designer happiness as its first priority.",
    dependencies: ["jQuery (optional)"],
    useIf: [
      "You want to avoid bugs related to keeping the DOM in sync with your data model.",
      "You want stateful MVC, like you'd find in Cocoa.",
      "You want a well defined structure for your code with smart conventions",
      "You don't want loading screens"
    ],
    tags: ['mvc'],
    license: "MIT",
    size: 28.7
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
    name: "Processing.js",
    website: "http://processingjs.org/",
    description: "Processing.js makes your data visualizations, digital art, interactive animations, educational graphs, video games, etc. work using web standards and without any plug-ins.",
    size: 284
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
    website: "http://javascriptmvc.com",
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
    tags: ['mvc', 'jQuery', 'dom']
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
    name: "LABjs",
    website: "http://labjs.com/",
    description: "LABjs is a dynamic script loader intended to replace the use of the ugly, non-performant &lt;script&gt; tag with a flexible and performance-optimized alternative API.", 
    useIf: [
      "You want to improve performance by loading scripts in parallel and without blocking other resources."
    ],
    size: 2.1
  },
  {
    name: "KievII",
    website: "http://kievII.net/",
    description: "Web audio application / DSP library, with HTML5 frontend.", 
    useIf: [
      "You want to build an audio Web application with an HTML5 GUI, automations and MozAudio / Web API support."
    ],
    size: "modular: 30Kb to start, max about 200Kb"
  },

  {
    name: "ArtJs",
    website: "http://artjs.org",
    description: "ArtJs is JavaScript framework of general purpose. It allows you to select or manipulate DOM elements, perform AJAX requests, provides load of helper methods for String, Date and other native classes, etc.",
    tags: ["dom"],
    size: 70
  },

  {
    name: "picoCSS",
    website: "https://github.com/vladocar/picoCSS",
    description: "Basic CSS DOM manipulation and animation optimized for  for building mobile web apps",
    browserSupport: "Supports mobile WebKit browsers only.",
    useIf: [
      "Basic CSS styling and animation"
    ],
    license: "MIT",
    tags: ['dom', 'animation', 'mobile-only'],
    size: 0.4
  },

  {
    name: "dygraphs",
    website: "http://dygraphs.com/",
    description: "dygraphs is an open source JavaScript library that produces produces interactive, zoomable charts of time series. It is designed to display dense data sets and enable users to explore and interpret them.",
    useIf: [
      "You want to plot dense time series",
      "You want to interact with your line charts",
      "You want to plot data with confidence intervals"
    ],
    size: 74
  },

  {
    name: "History.js",
    website: "http://github.com/balupton/history.js",
    description: "History.js solves cross compatibility problems with the HTML5 History API and provides a graceful fallback for HTML4 browsers. Essentially, it allows you to use the HTML5 History API gracefully and consistently in all browsers.", 
    useIf: [
      "You want be using the HTML5 History API, not spending your time trying to get it working in more than one browser"
    ],
    size: 13
  },

  {
    name: "Leaflet",
    website: "http://leaflet.cloudmade.com",
    description: "Leaflet is a lightweight, modern JavaScript library for interactive maps on both desktop and mobile browsers.",
    useIf: [
      "You want to embed responsive and nice-looking interactive maps into your web applications with ease",
      "You need your online maps to work smoothly on modern mobile devices (iPhone, Android)",
      "You want a mapping library that has a small, easy to undestand codebase and a clean, simple API",
      "You like the power and simplicity of Google Maps API but want an open source solution"
    ],
    license: "BSD 2-clause",
    tags: ["mapping", "maps", "gis"],
    size: "63kb JS + 15kb assets (or less with a customized build)"
  },

  {
    name: "Ext Core",
    website: "http://www.sencha.com/products/extcore/",
    description: "Ext Core is a cross-browser JavaScript library for building dynamic web pages. Ext Core provides basic cross-browser abstractions for DOM querying, element selection and more.", 
    useIf: [
      "You're looking for a high performance, lightweight, easy-to-use API"
    ],
    size: 33,
    license: "MIT",
    tags: ['dom']
  },

  {
    name: "Sencha Touch",
    website: "http://www.sencha.com/products/touch/",
    description: "Sencha Touch allows you to develop mobile web apps that look and feel native on iPhone, Android, and BlackBerry touch devices.",
    useIf: [
      "You need a rich, comprehensive, cross-platform web framework aimed at next generation, touch enabled, devices",
      "You want to build a self-contained MVC-style application that can be taken off-line",
      "You need to use touch events like tap, double tap, swipe, tap and hold, pinch, and rotate",
      "You want beautiful resolution-independent themes, icons and animations"
    ],
    size: "depends on usage; full library 120K",
    license: "GNU GPL license v3, or Commercial, or OEM.",
    tags: ['mobile-only', 'touch', 'tablet', 'iphone', 'ipad', 'android', 'html5', 'dom', 'mvc']
  },

  {
    name: "Ext JS 4",
    website: "http://www.sencha.com/products/extjs/",
    description: "A framework for building powerful desktop web applications using JavaScript and web standards.",
    useIf: [
      "You need a resilient MVC application architecture",
      "You need to create plugin-free charts and vector graphics",
      "You want a clean component-based model",
      "You need rich modern UI widgets",
      "You need cross-platform browser compatibility, back to IE6"
    ],
    size: "sized according to usage; full library 311K",
    license: "GNU GPL license v3, or Commercial, or OEM.",
    tags: ['mvc', 'component', 'charts', 'widgets']
  },

  {
    name: "AmplifyJS",
    website: "http://amplifyjs.com/",
    description: "Amplify is a set of components designed to solve common web application problems with a simplistic API. Amplify's goal is to simplify all forms of data handling by providing a unified API for various data sources. Amplify's store component handles persistent client-side storage, using standards like localStorage and sessionStorage, but falling back on non-standard implementations for older browsers. Amplify's request adds some additional features to jQuery's ajax method while abstracting away the underlying data source.", 
    useIf: [
      "You need a publish/subscribe system with priority message support.",
      "You need a wrapper for various persistent client-side storage systems.",
      "You need an abstraction layer that can be used for any kind of request for data."
    ],
    license: "MIT / GPL",
    tags: [ "JavaScript", "jQuery" ],
    dependencies: [ "jQuery (only needed for Request AJAX component)" ],
    size: 8
  },

  {
    name: "angular",
    website: "http://angularjs.org/",
    description: "Is a framework for building interactive client-side web apps using declarative html templates, 2-way data-binding and dependency injection. If you care about testability of your code and efficiency of your app's DOM manipulation, you'll love angular.", 
    useIf: [
      "You want to build rich apps much faster",
      "Are sick of boilerplate dom manipulation."
    ],
    dependencies: ["optionally depends on jQuery (to enable advanced DOM manipulation features)"],
    size: 24
  },
  {
    name: "jsmake",
    website: "http://gimmi.github.com/jsmake/",
    description: "JSMake is a simple Javascript build program with capabilities similar to make.", 
    useIf: [
      "You want to write your project build script using Javascript"
    ],
    dependencies: ["Rhino Javascript engine (included)"],
    license: "APACHE",
    tags: [ "make", "build", "tools", "rhino", "system", "development" ]
  },
  {
    name: "fidel",
    website: "http://jga.me/blog/2011/06/10/fidel",
    description: "A simple controller class (inspired by spine and backbone)", 
    useIf: [
      "You are building widgets or single page apps"
    ],
    dependencies: ["ender, zepto or jquery"],
    tags: [ "MVC", "controller", "ender"],
    size: 2
  }
];

if (window.EveryJS && window.EveryJS.loaded) { window.EveryJS.loaded(); }
