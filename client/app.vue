<template>
    <div>
        <div v-if="loading">
            <div class="loading-container">
                <div class="banner">
                    LOADING
                    <div class="banner-left"></div>
                    <div class="banner-right"></div>
                </div>
            </div>
        </div>
        <div class="container-fluid" v-if="!loading">
            <br>
            <h1 style="text-align: center">Игра в слова ОНЛАЙН</h1>
            <div class="row">
                <div class="col">
                    <words-list>

                    </words-list>
                </div>
                <div class="col">
                    <add-form>

                    </add-form>
                    <b-card>
                        <word-entry></word-entry>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import wordsList from './components/words-list/words-list.vue';
    import addForm from './components/add-form/add-form.vue';
    import wordEntry from './components/word-entry/word-entry.vue';

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
                loading: true
            }
        },
        created (){
            this.$store.dispatch('refreshAll').then(() => {
                this.loading = false;
            });
        },
        computed: {
        }
    }
</script>

<style>
    @import url(https://fonts.googleapis.com/css?family=Open+Sans);


    body
    {
        font-family: 'Open Sans';
        color: #EB8C79;
        background-color: #18506F;
    }

    .loading-container
    {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .banner
    {
        position: relative;
        padding: 10px 20px;
        animation: loader 1s cubic-bezier(0.5, 0.1, 0.15, 1) alternate infinite;
    }

    @keyframes loader
    {
        0%
        {
            letter-spacing: -1px;
        }
        100%
        {
            letter-spacing: 15px;
        }
    }

    .banner::before
    {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        transform: skewX(-15deg);
        background-color: #eee;
    }

    .banner-left, .banner-right
    {
        width: 60px;
        height: 100%;
        position: absolute;
        z-index: -2;
        bottom: -30%;
        transform: skewX(-15deg);
        background-color: #ccc;
    }

    .banner-left
    {
        animation: sub-banner-left 1s cubic-bezier(0.5, 0.1, 0.15, 1) alternate infinite;
    }

    @keyframes sub-banner-left
    {
        0%
        {
            right: 82%;
        }
        100%
        {
            right: 90%;
        }
    }

    .banner-right
    {
        animation: sub-banner-right 1s cubic-bezier(0.5, 0.1, 0.15, 1) alternate infinite;
    }

    @keyframes sub-banner-right
    {
        0%
        {
            left: 82%;
        }
        100%
        {
            left: 90%;
        }
    }

    .banner-left::before, .banner-right::before
    {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: -1px;
        border: 22px solid;
        border-color: transparent;
    }

    .banner-left::before
    {
        left: -1px;
        border-left-color: #18506F;
    }

    .banner-right::before
    {
        right: -1px;
        border-right-color: #18506F;
    }

</style>
