<template>
    <div class="homepage container-screen flex flex-center flex-col">
        <div class="container flex flex-center flex-col">
            <h1 class="title my-2">Tierlist Generator</h1>
            <div class="img-container">
                <div class="view-source">
                    <p>View Source</p>
                </div>
                <a
                    href="https://twitter.com/tabisumika/status/1350754761662885888/photo/1"
                    target="__blank"
                >
                    <img
                        src="https://pbs.twimg.com/media/Er7YOZTVEAUAr0_?format=jpg&name=medium"
                        alt="art"
                    />
                </a>
            </div>

            <div class="search my-2">
                <i
                    @click="navigateToList"
                    class="fas fa-search search__icon"
                ></i>
                <input
                    v-model="userName"
                    @keyup.enter="navigateToList"
                    type="text"
                    class="search__bar"
                    placeholder="Anilist username"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            userName: '',
        }
    },
    methods: {
        navigateToList() {
            this.$router.push(`/user/${this.userName}`)
        },
    },
}
</script>

<style lang="scss" scoped>
.homepage {
    margin-top: -5rem;
}

.img-container {
    cursor: pointer;
    overflow: hidden;
    position: relative;
    max-width: 50rem;
    padding: 0;
    img {
        width: 100%;
        height: 100%;
    }
    &:hover .view-source {
        right: 0;
    }
    .view-source {
        position: absolute;
        width: 30%;
        height: 100%;
        right: -100%;
        background: rgba(0, 0, 0, 0.2);
        color: white;
        font-weight: bold;
        font-size: 2rem;
        transition: all 0.5s;
    }
}

.title {
    align-self: flex-start;
    letter-spacing: 0.3rem;
    font-family: 'Righteous', cursive;
    font-size: 3rem;
    color: white;
    @media (max-width: 450px) {
        font-size: 2.5rem;
    }
}

.search {
    height: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50rem;
    &__icon {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        height: 100%;
        background: #a6dfe7;
        color: white;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        font-size: 3rem;
    }
    &__bar {
        text-align: center;
        font-weight: 200;
        color: rgba(0, 0, 0, 0.8);
        padding: 0;
        width: 45rem;
        height: 100%;
        font-size: 2rem;
        border: none;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        @media (max-width: 550px) {
            width: 100%;
        }
    }
}
</style>
