import DS from 'ember-data';

export
default DS.Model.extend({
  postTitle: DS.attr('string'),
  postBody: DS.attr('string'),
  timestamp: DS.attr('number')
});
