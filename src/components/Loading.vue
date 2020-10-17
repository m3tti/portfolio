<template>
  <div>
    <div class="content fade-in" v-if="loading">
      <div class="dot-bricks center"></div>
    </div>
    <div class="content fade-in" v-else>
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Loading extends Vue {
  @Prop(Boolean) loading: boolean;
}
</script>
<style lang="scss">
.content {
    margin-top: 80px;
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
/**
* ==============================================
* Dot Bricks
* ==============================================
*/
.dot-bricks.center {
  height: 10px;
  width: 10px;
  margin: auto;
  top: 150px;
}

.dot-bricks {
  position: relative;
  top: 8px;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #0c0c0c;
  color: #0c0c0c;
  box-shadow: 9991px -16px 0 0 #0c0c0c, 9991px 0 0 0 #0c0c0c, 10007px 0 0 0 #0c0c0c;
  -webkit-animation: dot-bricks 2s infinite ease;
  animation: dot-bricks 2s infinite ease;
}

@-webkit-keyframes dot-bricks {
  0% {
    box-shadow: 9991px -16px 0 0 #0c0c0c, 9991px 0 0 0 #0c0c0c, 10007px 0 0 0 #0c0c0c;
  }
  8.333% {
    box-shadow: 10007px -16px 0 0 #0c0c0c, 9991px 0 0 0 #0c0c0c, 10007px 0 0 0 #0c0c0c;
  }
  16.667% {
    box-shadow: 10007px -16px 0 0 #0c0c0c, 9991px -16px 0 0 #0c0c0c, 10007px 0 0 0 #0c0c0c;
  }
  25% {
    box-shadow: 10007px -16px 0 0 #0c0c0c, 9991px -16px 0 0 #0c0c0c, 9991px 0 0 0 #0c0c0c;
  }
  33.333% {
    box-shadow: 10007px 0 0 0 #0c0c0c, 9991px -16px 0 0 #0c0c0c, 9991px 0 0 0 #0c0c0c;
  }
  41.667% {
    box-shadow: 10007px 0 0 0 #0c0c0c, 10007px -16px 0 0 #0c0c0c, 9991px 0 0 0 #0c0c0c;
  }
  50% {
    box-shadow: 10007px 0 0 0 #0c0c0c, 10007px -16px 0 0 #0c0c0c, 9991px -16px 0 0 #0c0c0c;
  }
  58.333% {
    box-shadow: 9991px 0 0 0 #0c0c0c, 10007px -16px 0 0 #0c0c0c, 9991px -16px 0 0 #0c0c0c;
  }
  66.666% {
    box-shadow: 9991px 0 0 0 #0c0c0c, 10007px 0 0 0 #0c0c0c, 9991px -16px 0 0 #0c0c0c;
  }
  75% {
    box-shadow: 9991px 0 0 0 #0c0c0c, 10007px 0 0 0 #0c0c0c, 10007px -16px 0 0 #0c0c0c;
  }
  83.333% {
    box-shadow: 9991px -16px 0 0 #0c0c0c, 10007px 0 0 0 #0c0c0c, 10007px -16px 0 0 #0c0c0c;
  }
  91.667% {
    box-shadow: 9991px -16px 0 0 #0c0c0c, 9991px 0 0 0 #0c0c0c, 10007px -16px 0 0 #0c0c0c;
  }
  100% {
    box-shadow: 9991px -16px 0 0 #0c0c0c, 9991px 0 0 0 #0c0c0c, 10007px 0 0 0 #0c0c0c;
  }
}

@keyframes dot-bricks {
  0% {
    box-shadow: 9991px -16px 0 0 #0c0c0c, 9991px 0 0 0 #0c0c0c, 10007px 0 0 0 #0c0c0c;
  }
  8.333% {
    box-shadow: 10007px -16px 0 0 #0c0c0c, 9991px 0 0 0 #0c0c0c, 10007px 0 0 0 #0c0c0c;
  }
  16.667% {
    box-shadow: 10007px -16px 0 0 #0c0c0c, 9991px -16px 0 0 #0c0c0c, 10007px 0 0 0 #0c0c0c;
  }
  25% {
    box-shadow: 10007px -16px 0 0 #0c0c0c, 9991px -16px 0 0 #0c0c0c, 9991px 0 0 0 #0c0c0c;
  }
  33.333% {
    box-shadow: 10007px 0 0 0 #0c0c0c, 9991px -16px 0 0 #0c0c0c, 9991px 0 0 0 #0c0c0c;
  }
  41.667% {
    box-shadow: 10007px 0 0 0 #0c0c0c, 10007px -16px 0 0 #0c0c0c, 9991px 0 0 0 #0c0c0c;
  }
  50% {
    box-shadow: 10007px 0 0 0 #0c0c0c, 10007px -16px 0 0 #0c0c0c, 9991px -16px 0 0 #0c0c0c;
  }
  58.333% {
    box-shadow: 9991px 0 0 0 #0c0c0c, 10007px -16px 0 0 #0c0c0c, 9991px -16px 0 0 #0c0c0c;
  }
  66.666% {
    box-shadow: 9991px 0 0 0 #0c0c0c, 10007px 0 0 0 #0c0c0c, 9991px -16px 0 0 #0c0c0c;
  }
  75% {
    box-shadow: 9991px 0 0 0 #0c0c0c, 10007px 0 0 0 #0c0c0c, 10007px -16px 0 0 #0c0c0c;
  }
  83.333% {
    box-shadow: 9991px -16px 0 0 #0c0c0c, 10007px 0 0 0 #0c0c0c, 10007px -16px 0 0 #0c0c0c;
  }
  91.667% {
    box-shadow: 9991px -16px 0 0 #0c0c0c, 9991px 0 0 0 #0c0c0c, 10007px -16px 0 0 #0c0c0c;
  }
  100% {
    box-shadow: 9991px -16px 0 0 #0c0c0c, 9991px 0 0 0 #0c0c0c, 10007px 0 0 0 #0c0c0c;
  }
}
</style>