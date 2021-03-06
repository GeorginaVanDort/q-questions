import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  author: DS.attr(),
  q: DS.belongsTo('q', {async: true})
});
