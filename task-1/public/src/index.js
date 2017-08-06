import Vue from 'vue'
import axios from 'axios';
import { root } from './config';

const artist = 'David Bowie';
const encodedArtist = encodeURIComponent(artist);

new Vue({
    el: '#app',
    data: {
        filterText: '',
        albums: []
    },
    created() {
        this.fetchAlbums();
    },
    methods: {
        async fetchAlbums() {
            const response = await axios.get(`${root}/api/albums?artist=${encodedArtist}`)
            this.albums = response.data;
        },
        filter(filterText, albums) {
            return albums.filter(album => {
                return album.collectionName.toUpperCase().includes(filterText.toUpperCase());
            });
        }
    }
});
