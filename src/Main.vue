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
  .fade-in {
    animation: fadeIn ease 0.3s;
    -webkit-animation: fadeIn ease 0.3s;
    -moz-animation: fadeIn ease 0.3s;
    -o-animation: fadeIn ease 0.3s;
    -ms-animation: fadeIn ease 0.3s;
  }
  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
    
  @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
    
  @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
</style>