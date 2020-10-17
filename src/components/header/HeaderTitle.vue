<template>
    <div class="header-title-box">
        <div class="header-avatar">
            <img :src=avatarSrc />
        </div>

        <div class="header-title">
            <h1>{{ title }}</h1>
            <h2>{{ subtitle }}</h2>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HeaderTitle extends Vue {
    @Prop(String) avatarSrc: string;
    @Prop(String) title: string;
    @Prop(String) subtitle: string;
}
</script>
<style lang="scss">
.header-title-box { 
    display: flex;
}

.header-title {
    padding-top: 4px;
    
    h1 {
      font-size: 20px;
      padding-left: 10px;
      padding-right: 10px;
      margin: 0;
    }

    h2 {
      font-size: 10px;
      margin: 0;
      padding-left: 10px;
      color: #696969;
    }
}
.header-avatar {
    margin-left: 10px;
    margin-right: 5px;
    
    img {
        border-radius: 100px;
        height: 40px;
        width: 40px;
        border: 3px #0c0c0c solid;
    }

    img:hover {
        animation-name: flip_animation;
        animation-duration: 1s;
    }
}
@keyframes flip_animation {
    from {transform: rotateY(0deg);}
    to {transform: rotateY(360deg);}
}
</style>