<template>
    <div class="content fade-in">
        <div class="print" @click="print">
            <printerlogo></printerlogo>
        </div>
        <div class="cv">
            <CVstep v-for="step in steps" :key="step.title"
                :duration="step.duration"
                :company="step.company"
                :role="step.role"
                :technologies="step.technologies"
            ></CVstep>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import CVstep from './components/cv/CVstep.vue';
import printerlogo from "./components/printerlogo.vue";
import { Step, CVApi } from './api/CVApi';

@Component({
    name: "cv",
    components: { CVstep, printerlogo }
})
export default class CV extends Vue {
    loading: boolean = false;
    steps: Array<Step> = [];

    created() { 
        this.fetchData();
    }

    async fetchData() {
        this.loading = true;
        this.steps = await CVApi.fetch();
        this.loading = false;
    }

    print() {
        window.print();
    }
}
</script>
<style lang="scss">
.content {
    margin-top: 80px;
}

.cv {
    overflow: auto;
    max-height: 89vh;
    width: 102%;
}
.print {
    position: absolute;
    bottom: 20px;
    right: 20px;
    padding: 5px;
    border-radius: 100px;
    border-style: solid;
    border-width: 3px;
    cursor: pointer;
    transition: box-shadow ease-in-out 0.2s;

    &:hover {
        box-shadow: 0px 0px 10px #696969;
    }
    svg {
        width: 30px;
        height: 30px;
    }
}

@page { size: auto;  margin: 0mm; }
@media print {
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #ffffff;
    color: #1c1c1c;
    overflow: hidden;
  }

  .header {
    position: fixed;
    background-color: #ffffff;
    color: #0c0c0c;
    width: 100%;
    left: 0px;
    display: flex;
    top: 0;
    padding-top: 1cm;
    padding-bottom: 1cm;
    box-shadow: none;
  }

  .header-menu {
      display: none;
  }

  .header-title {
      padding-top: 4px;
  }

  .header-title h1 {
      font-size: 20px;
      padding-left: 10px;
      padding-right: 10px;
      margin: 0;
  }

  .header-title h2 {
      font-size: 10px;
      margin: 0;
      padding-left: 10px;
      color: #696969;
  }

  .header-avatar {
    margin-left: 1cm;
    margin-right: 5px;
  }

  .header-avatar img {
      border-radius: 100px;
      height: 40px;
      width: 40px;
      border: 3px #0c0c0c solid;
  }

  .content {
      margin-top: 150px;
      width: 100%;
  }

  .cv {
    width: 100%;
  }

  .cvstep {
      display: flex;
      width: 710px;
      margin: auto;
  }

  .cvstep-title {
      padding-top: 60px;
      font-weight: 900;
      font-size: 20px;
      border-right: 2px solid #0c0c0c;
      padding-right: 20px;
      width: 250px;
  }

  .cvstep-content {
      padding-top: 60px;
      padding-bottom: 20px;
      padding-left: 40px;
      width: 400px;
  }

  .cvstep-detail-title {
      font-size: 20px;
      font-weight: 900;
  }

  .cvstep-detail-role {
      font-size: 20px;
      font-weight: 100;
  }

  .cvstep-detail-technologies {
      margin-top: 25px;
      font-size: 20px;
      font-weight: 100;
  }

  .cvstep-detail-content {

  }

  .print {
      display: none;
  }
}
</style>