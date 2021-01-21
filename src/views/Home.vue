<template>
    <div class="homepage container-screen flex flex-center flex-col">
        <div class="container flex flex-center flex-col">
            <h1 class="title my-2">Tierlist Generator</h1>
            <div class="img-container">
                <!-- <div class="view-source">
                    <p>View Source</p>
                </div> -->
                <!-- <a
                    href="#"
                    target="__blank"
                > -->
                <img src="../assets/example.png" alt="art" />
                <!-- </a> -->
            </div>

            <div class="search my-2">
                <i @click="navigateToList" class="material-icons">search</i>

                <input
                    v-model="userName"
                    @keyup.enter="navigateToList"
                    type="text"
                    class="search__bar"
                    placeholder="Anilist username"
                />
            </div>
            <div class="buttons">
                <button
                    class="anime-btn"
                    @click="navigateToList, (type = 'anime')"
                    ref="anime"
                >
                    Anime
                </button>
                <button
                    class="manga-btn"
                    @click="navigateToList, (type = 'manga')"
                    ref="manga"
                >
                    Manga
                </button>
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
            type: 'anime',
        }
    },
    watch: {
        type(value) {
            if (value == 'anime') {
                this.$refs.anime.style.backgroundColor = '#7b2cbf'
                this.$refs.manga.style.backgroundColor = '#333'
            } else {
                this.$refs.manga.style.backgroundColor = '#7b2cbf'
                this.$refs.anime.style.backgroundColor = '#333'
            }
        },
    },
    methods: {
        navigateToList() {
            this.$router.push(`/${this.type}/${this.userName}`)
        },
    },
}
</script>

<style lang="scss" scoped>
button {
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    border: none;
    background: #333;
    color: white;
    margin: 0 0.5rem;
}

.buttons {
    align-self: flex-start;
}

.anime-btn {
    background: #7b2cbf;
}

.manga-btn {
    background: #333;
}

i {
    position: absolute;
    right: 0.5rem;
    bottom: 0.75rem;
    cursor: pointer;
}

.homepage {
    margin-top: -5rem;
}

.img-container {
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
    font-size: 3rem;
    color: #333;
    @media (max-width: 450px) {
        font-size: 2.5rem;
    }
}

.search {
    position: relative;
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
        background: #10002b;
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
        // width: 45rem;
        width: 100%;
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
