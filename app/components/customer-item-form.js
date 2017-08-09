import Ember from 'ember';

export default Ember.Component.extend({
      buttonLabel: 'Save',

      model() {
        this.store.createRecord('entrepeneur')
      },

  actions: {

    buttonClicked(param) {
      this.sendAction('action', param);
    }

  }
});
