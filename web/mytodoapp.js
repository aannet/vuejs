
var apptodo = new Vue({
  el: '#app-todo',
  data: {
    inputTask: '',
    todos: [
      { text: 'Task 1-already filled' },
      { text: 'Task 2-already filled' },
      { text: 'Task 3-already filled' }
    ]
  },
  methods: {
      submitInputTask: function() {
          if (this.inputTask.trim() == '') {
              alert('No empty task !!');
          }
          else {
              this.todos.push({text: this.inputTask.trim()});
          }
          //var newtask = input-task;
      }
  }
})
