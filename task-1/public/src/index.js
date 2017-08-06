import Vue from 'vue'
import axios from 'axios';
import { root } from './config';

const artist = 'David Bowie';
const encodedArtist = encodeURIComponent(artist);

new Vue({
    el: '#app',
    data: {
        albums: []
    },
    created() {
        this.fetchAlbums();
    },
    methods: {
        async fetchAlbums() {
            const response = await axios.get(`${root}/api/albums?artist=${encodedArtist}`)
            this.albums = response.data;
        }
    }
});
