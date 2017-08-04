new Vue({
    el: '#app',
    data: {
        search: '',
        message: 'Hello Vue.js!'
    }
});

Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
});
