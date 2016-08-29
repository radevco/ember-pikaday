import Ember from 'ember';

export default Ember.Controller.extend({
  startDate: new Date(),
  actions: {
    clearStartDate: function() {
      this.set('startDate', null);
    },
    doSomethingWithSelectedValue(value) {
      // value is day or last day of selected week
      let lastDayOfWeek = new Date(value);
      let firstDayOfWeek = new Date(value.setDate(value.getDate() - 6));
    }
  }
});
