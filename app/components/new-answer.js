import Ember from 'ember';

export default Ember.Component.extend({
  newAnswer: false,
  actions: {
    answerFormShow() {
      this.set('newAnswer', true);
    },
    saveAnswer() {
      var params = {
        name: this.get('name'),
        answer: this.get('answer'),
      };
      this.set('newAnswer', false);
      this.sendAction('saveAnswer', params);
      this.set('name', "");
      this.set('answer', "");
    }
  }
});
