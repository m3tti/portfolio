<template>
    <div class="header-menu">
        <ul>
            <router-link to="/cv" tag="li" class="header-menu-item">CV</router-link>
            <router-link to="/intro" tag="li" class="header-menu-item">Personal</router-link>
        </ul>
    </div>
</template>
<style lang="scss">
.header-menu {
    position: absolute;
    right: 15px;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        margin-top: 7px;
    }
}
li {
    display: inline;
}
.header-menu-item {
    margin-right: 20px;
    height: 20px;
    text-align: center;
    margin-left: 20px;
    font-size: 20px;
    font-weight: 100;
    padding-bottom: 15px;
    text-decoration: none;
    color: #0c0c0c;
    cursor: pointer;
    
    &.router-link-active {
        border-bottom: 5px solid #0c0c0c;
        transition: border-bottom ease 0.2s;
    }
}
</style>