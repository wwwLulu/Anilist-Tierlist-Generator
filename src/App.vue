<template>
    <div id="nav"></div>
    <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

:root {
    --bg-primary: #f3f3f3;
    --bg-secondary: rgba(0, 0, 0, 0);
}

html {
    font-size: 62.5%;
    @media (max-width: 500px) {
        font-size: 50%;
    }
    @media (max-width: 425px) {
        font-size: 40%;
    }
    @media (max-width: 320px) {
        font-size: 30%;
    }
}
body {
    background-color: var(--bg-primary);
    position: relative;
    display: flex;
    background: var(--bg-primary);
}

* {
    box-sizing: border-box;
    margin: 0;
}

.wrapper {
    position: relative;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}

// Utitility classes
.container-screen {
    width: 100vw;
    height: 100vh;
}

.my-1 {
    margin: 0.5rem 0;
}

.my-2 {
    margin: 1rem 0;
}

.mx-1 {
    margin: 0 0.5rem;
}

.w-100 {
    width: 100%;
}

.h-100 {
    height: 100%;
}

.flex {
    display: flex;
}

.flex-center {
    justify-content: center;
    align-items: center;
}

.flex-col {
    flex-direction: column;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0 auto;
}
</style>
