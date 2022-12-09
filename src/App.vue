<template>
  <router-view />
</template>

<style>
    * {
        margin: 0;
    }

    :root {
        --primary-color: #000000;
        --secondary-color: #7E7F83;
        --tertiary-color: #00205B;
        --quaternary-color: #F3F3F4;
        --linkedin-blue: #0072b1;
    }

    #backgroundVideo {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
        z-index: -10;
    }
</style>
