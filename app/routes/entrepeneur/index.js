import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('entrepeneur');
  },

  actions: {

    deleteEntrepeneur(entrepeneur) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        entrepeneur.destroyRecord();
      }
    }
  }

});