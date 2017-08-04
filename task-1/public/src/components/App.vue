<template>
    <div>
        <input type="text" placeholder="Taylor Swift" v-model="search">
        <p>{{message}}</p>
        <p>You are searching for "{{search}}"</p>
        <todo-item></todo-item>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
    data() {
        return {
            search: '',
            message: 'hi there'
        }
    },
    components: { TodoItem }
}
</script>