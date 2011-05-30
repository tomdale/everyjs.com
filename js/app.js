var EveryJS = SC.Application.create();

EveryJS.libraries = [
  {
    name: "jQuery",
    website: "http://www.jquery.com",
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
    website: "http://www.jqueryui.com",
    description: "jQuery UI provides both low-level event handling of interactions and animations and high-level widgets for color picking, calendars, tabbed views, and more.",
    useIf: [
      "You want JavaScript widgets and buttons.",
      "You want to script interactions such as drag and drop or resizing.",
      "You want to add more advanced animations to your pages."
    ],
    dependencies: ["jQuery (included in package)"],
    license: "MIT or GPL Version 2",
    tags: ["ui", "jQuery plugins"],
    size: "295K, plus theme and additional assets. Can be customized on the download page."
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
    dependencies: ["jQuery"],
    size: 29
  },

  {
    name: "Backbone.js",
    website: "http://documentcloud.github.com/backbone/",
    description: "Backbone supplies structure to JavaScript-heavy applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing application over a RESTful JSON interface.",
    dependencies: ["Underscore", "jQuery or Zepto (optional but recommended)"],
    size: 3.9
  },

  {
    name: "Dojo Toolkit",
    website: "http://dojotoolkit.org/",
    description: "Dojo Toolkit is an open source modular JavaScript toolkit designed to ease the rapid development of cross-platform, JavaScript/Ajax-based applications and web sites.",
    size: "3.9K - 5MB; applications load modules dynamically"
  },

  {
    name: "MooTools",
    website: "http://mootools.net/",
    description: "MooTools is a compact, modular, Object-Oriented JavaScript framework designed for the intermediate to advanced JavaScript developer. It provides cross-platform helpers for manipulating the DOM, handling events, animating elements, and extends JavaScript built-in classes with additional functionality.",
    useIf: [ "You need DOM manipulation or event handling across all browsers." ],
    size: 25
  },

  {
    name: "Morpheus",
    website: "https://github.com/ded/morpheus",
    description: "Morpheus lets you \"tween anything\" in parallel on multiple elements, from integers to colors, with easing transitions, in a single high-performant loop utilizing the CPU-friendly requestAnimationFrame standard.",
    useIf: [
      "You want to animate multiple elements and have them stay in sync."
    ],
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
    size: "8K or lower, depending on build"
  },

  {
    name: "Zepto",
    website: "http://zeptojs.com/",
    description: "Zepto.js is a minimalist JavaScript framework for mobile WebKit browsers, with a jQuery-compatible syntax.",
    browserSupport: "Supports mobile WebKit browsers only.",
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
    name: "functools",
    website: "http://github.com/azer/functools",
    description: "A minimal JavaScript library for functional operations.", 
    size: 2
  }
];

EveryJS.libraries.sort(function(a,b) {
  return SC.compare(a.name.toLowerCase(), b.name.toLowerCase());
});

EveryJS.listController = SC.ArrayProxy.create({
  content: EveryJS.libraries
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

Handlebars.registerHelper('list', function(key) {
  var buf = '<ul>', list;
  list = SC.get(this, key);
  list.forEach(function(item) {
    buf += '<li>%@</li>'.fmt(item);
  });
  return new Handlebars.SafeString(buf + '</ul>');
});
