<template>
    <div>
        <Header>
            <HeaderTitle 
                avatarSrc="/assets/images/avatar.png" 
                title="Mathäus Sander" 
                subtitle="Full-Stack Developer">
            </HeaderTitle>

            <Menu></Menu>
        </Header>
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import Header from "./components/header/Header.vue";
import HeaderTitle from "./components/header/HeaderTitle.vue";
import Menu from "./components/header/Menu.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: { Header, HeaderTitle, Menu }
})
export default class Main extends Vue {
}
</script>
<style lang="scss">
  body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #ffffff;
      color: #1c1c1c;
      overflow: hidden;
  }
  
</style>