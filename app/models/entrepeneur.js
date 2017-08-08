import DS from 'ember-data';

export default DS.Model.extend({
  firmName: DS.attr('string'),
  email: DS.attr('string'),
  cvr: DS.attr('number'),
  address: DS.attr('string'),
  comment: DS.attr('string'),
  priority: DS.attr('string')
});
