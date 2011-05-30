(function() {
  function on(element, eventName, callback) {
    if ("addEventListener" in element) {
      element.addEventListener(eventName, callback, false);
    } else {
      element.attachEvent("on" + eventName, callback);
    }
  }

  var librariesEl, sortByEl, filterByEl;

  on(window, "load", function() {
    librariesEl = document.getElementById("libraries");
    sortByEl    = document.getElementById("sort_by");
    filterByEl  = document.getElementById("filter_by");

    on(sortByEl, "change", sortLibraries);
    on(filterByEl, "change", filterLibraries);
  });

  numberPattern = /^(?:[\d.]+)?$/;

  function getLibraryElements() {
    return Array.prototype.slice.call(librariesEl.getElementsByTagName("tr"));
  }

  function sort(elements, attribute) {
    return elements.sort(function(left, right) {
      var a = left.getAttribute(attribute),
          b = right.getAttribute(attribute);

      if (numberPattern.test(a) && numberPattern.test(b)) {
        a = parseFloat(a), b = parseFloat(b);
      } else {
        a = a.toLowerCase(), b = b.toLowerCase();
      }

      return a < b ? -1 : a > b ? 1 : 0;
    });
  }

  function sortLibraries() {
    var attribute = "data-" + sortByEl.value;
    var elements = sort(getLibraryElements(), attribute);
    for (var i = 0; i < elements.length; i++) {
      librariesEl.appendChild(elements[i]);
    }
  }

  function libraryMatchesFilter(element) {
    var tag = filterByEl.value;
    if (tag == "all") {
      return true;
    } else {
      var tags = element.getAttribute("data-tags").split(" ");
      return ~tags.indexOf(tag);
    }
  }

  function filterLibraries() {
    var elements = getLibraryElements(), element;
    for (var i = 0; i < elements.length; i++) {
      element = elements[i];
      if (libraryMatchesFilter(element)) {
        element.style.display = "";
      } else {
        element.style.display = "none";
      }
    }
  }
}).call(this);
