<template>
    <div>
        {{albums}}
    </div>
</template>

<script>
import axios from 'axios';
import { root } from '../config';
import TodoItem from './TodoItem.vue';
export default {
    // data() {
    //     return {
    //         search: '',
    //         message: 'hi there'
    //     }
    // },
    // data() {
    //     return {
    //         search: '',
    //         message: 'hi there',
    //         albums: [{ title: 'album1' }]
    //     }
    // },
    // data: {
    //     search: '',
    //     message: 'hi there',
    //     albums: [{ title: 'album1' }]
    // },
    props: ['albums'],
    created() {
        // axios.get(root + '/api/albums')
        //     .then(response => {
        //         this.data.albums = response.data;
        //     })
        //     .catch(console.error);
    },
    components: { TodoItem }
}
</script>