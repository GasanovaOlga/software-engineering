<template>
    <div>
        <div class="container-fluid" >
            <br>
            <h1 style="text-align: center">Игра в слова ОНЛАЙН</h1>
            <div class="row">
                <div class="col">
                    <wordsList>

                    </wordsList>
                </div>
                <div class="col">
                    <addForm>

                    </addForm>
                    <b-card>
                        <wordEntry></wordEntry>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import wordsList from './components/wordsList/wordsList.vue';
    import addForm from './components/addForm/addForm.vue';
    import wordEntry from './components/wordEntry/wordEntry.vue';

    export default {
        methods: {
        },
        components: {
            wordsList,
            addForm,
            wordEntry
        },
        data: function () {
            return {
                loading: false
            }

        },
        created (){
            this.$store.dispatch('refreshAll').then(() => {
                this.loading = true;
            });
        },
        computed: {
        }
    }
</script>

<style>

</style>
