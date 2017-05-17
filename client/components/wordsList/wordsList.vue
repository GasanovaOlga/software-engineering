<template>
    <b-card>
        <b-list-group>
            <b-list-group-item
                    v-for="(wordEntry, wordIndex) in wordsEntries" :key=""
                    v-on:click.native="onSelect(wordEntry)"
                    to="#">
                <span v-for="(letter, index) in wordEntry.word">
                    <span v-if="index == 0"
                          v-bind:style="{ color: colors[(wordIndex + 1) % colors.length]}">
                        {{ letter }}
                    </span>
                    <span v-if="index == wordEntry.word.length - 1"
                          v-bind:style="{ color: colors[wordIndex % colors.length]}">
                        {{ letter }}
                    </span>
                    <span v-if="index != 0 && index != wordEntry.word.length - 1">
                        {{letter}}

                    </span>
                </span>
            </b-list-group-item>
        </b-list-group>
    </b-card>
</template>

<script>
    export default {
        data: function () {
            return {
            colors: [
                    "#000000",
                    "#00d800",
                    "#c10000",
                ]
            }
        },
        methods: {
            onSelect(wordEntry) {
             //this.$socket.emit('new word', wordEntry);
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
