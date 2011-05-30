var EveryJS = SC.Application.create();

EveryJS.loaded = function() {
  EveryJS.listController.set('content', EveryJS_libraries);
};

EveryJS.listController = SC.ArrayProxy.create({
  content: null,

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

if (EveryJS_libraries) {
  EveryJS.listController.set('content', EveryJS_libraries);
}
