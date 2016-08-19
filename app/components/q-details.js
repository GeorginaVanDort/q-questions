import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    update(q, params) {
      this.sendAction('update', q, params);
    }
  }
});
