
var apptodo = new Vue({
  el: '#app-todo',
  data: {
    inputTask: '',
    todos: [
      { title: 'Task 1-already filled', completed: false },
      { title: 'Task 2-already filled', completed: true },
      { title: 'Task 3-already filled', completed: false }
    ]
  },
  methods: {
    submitInputTask: function() {
      if (this.inputTask.trim() == '') {
          alert('No empty task !!');
      }
      else {
          this.todos.push({title: this.inputTask.trim()});
          this.inputTask = '';
      }
    },
    submitRAZ: function() {
        //slowest method but clearer
        while(this.todos.length > 0) {
            this.todos.pop();
        }
    },
    setTaskDone: function (index) {
        // this.todos[index].completed = true;
        this.$set(this.todos[index], 'completed', true);
        //Use this syntax for refreshing problem after changing state of newly added task
    }
  }
})
