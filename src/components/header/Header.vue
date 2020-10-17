<template>
    <div class="header">
        <slot></slot>
    </div>
</template>
<style lang="scss">
  .header {
      position: fixed;
      background-color: #ffffff;
      color: #0c0c0c;
      width: 100%;
      left: 0px;
      display: flex;
      top: 0;
      padding-top: 10px;
      padding-bottom: 5px;
      box-shadow: 0px -8px 18px #1f1f1f;
  }
</style>