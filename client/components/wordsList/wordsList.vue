<template>
    <b-card>
        <b-list-group>
            <b-list-group-item
                    v-for="wordEntry in wordsEntries" :key=""
                    v-on:click.native="onSelect(wordEntry)"
                    to="#">
                {{ wordEntry.word }}
            </b-list-group-item>
        </b-list-group>
    </b-card>
</template>

<script>
    export default {
        data: function () {
            return {
            }
        },
        methods: {
            onSelect(wordEntry) {
                this.$store.dispatch("selectWordEntry", wordEntry);
            }
        },
        computed: {
            wordsEntries() {
                return this.$store.getters.wordEntries.slice().reverse();
            }
        }
    }
</script>

<style>



</style>
