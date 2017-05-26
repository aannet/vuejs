
var app1 = new Vue({
    el: '#app',
    data: {
        message1: 'Hello Vue.js!',
        message2: 'This is my second message'
    }
});


var app2 = new Vue({
    el: '#app-2',
    data: {
        message3: 'You loaded this page on '+new Date()
    }
});


var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: false
  }
})


var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Initial Message'
  },
  methods: {
    reverseMessageMethod: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
