import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.createRecord('entrepeneur');
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new Entrepeneur');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('entrepeneur/forms');
  },

  actions: {

    saveEntrepeneur(newEntrepeneur) {
      newEntrepeneur.save().then(() => this.transitionTo('entrepeneur'));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});