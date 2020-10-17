<template>
    <div class="content fade-in">
        <div class="intro" v-html="markdown">
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Converter } from "showdown";
import IntroApi from "./api/IntroApi";

@Component
export default class Intro extends Vue {
    loading: boolean = false;
    markdown: string = "";
    mkConverter: Converter = new Converter();

    created() {
        this.renderMarkdown();
    }

    async renderMarkdown() {
        this.loading = true;
        let markdown = await IntroApi.fetch();
        this.markdown = this.mkConverter.makeHtml(markdown);
        this.loading = false;
    }
}
</script>
<style lang="scss">
.intro {
    padding-top: 50px;
    width: 710px;
    margin: auto;
}

.intro .name {
    font-weight: 100;
    font-style: italic;
}

.intro p {
    font-size: 20px;
    font-weight: 100;
}

.intro blockquote { 
    background-color: #eee;
    color: #696969;
    margin-left: 0;
    border-radius: 10px;
    font-style: italic;
    font-weight: 100;
}

.intro blockquote p {
    padding: 10px;
}
</style>