<template>
    <div class="wrapper screen-container">
        <div v-show="settingsMode" class="settings-modal">
            <div class="tier-setting">
                <label for="SS">SS</label>
                <input
                    v-model="rankings['SS']"
                    name="SS"
                    type="number"
                    :placeholder="rankings['SS']"
                />
            </div>
            <div class="tier-setting">
                <label for="S">S</label>
                <input
                    v-model="rankings['S']"
                    name="S"
                    type="number"
                    :placeholder="rankings['S']"
                />
            </div>
            <div class="tier-setting">
                <label for="A">A</label>
                <input
                    v-model="rankings['A']"
                    name="A"
                    type="number"
                    :placeholder="rankings['A']"
                />
            </div>
            <div class="tier-setting">
                <label for="B">B</label>
                <input
                    v-model="rankings['B']"
                    name="B"
                    type="number"
                    :placeholder="rankings['B']"
                />
            </div>
            <div class="tier-setting">
                <label for="C">C</label>
                <input
                    v-model="rankings['C']"
                    name="C"
                    type="number"
                    :placeholder="rankings['C']"
                />
            </div>
            <div class="tier-setting">
                <label for="D">D</label>
                <input
                    v-model="rankings['D']"
                    name="D"
                    type="number"
                    :placeholder="rankings['D']"
                />
            </div>
            <div class="tier-setting">
                <label for="F">F</label>
                <input
                    v-model="rankings['F']"
                    name="F"
                    type="number"
                    :placeholder="rankings['F']"
                />
            </div>
            <button @click="changeQuery(), toggleSettingsModal()">Done</button>
        </div>
        <header>
            <i
                v-show="!settingsMode"
                @click="toggleSettingsModal"
                class="material-icons settings"
                >settings</i
            >
            <i
                v-show="settingsMode"
                @click="toggleSettingsModal"
                class="material-icons settings"
                >close</i
            >
            <i @click="navigateToHomepage" class="material-icons home">home</i>
            <a :href="`https://anilist.co/user/` + userName">
                <div class="user">
                    <img :src="userAvatar" alt="avatar" class="user__avatar" />
                    <div class="user__name">
                        <h1>{{ userName }}</h1>
                    </div>
                </div>
            </a>
            <div class="overlay"></div>
            <img :src="userBanner" alt="" />
        </header>
        <div class="tier-list">
            <div class="tier">
                <p class="tier__rank SS">SS</p>
                <div class="tier__grid">
                    <div
                        v-for="anime of tierList['SS']"
                        :key="anime.mediaId"
                        class="tier__entry"
                    >
                        <a
                            :href="
                                `https://anilist.co/${type}/` + anime.mediaId
                            "
                        >
                            <div class="tier__entry__overlay">
                                {{ anime.media.title.userPreferred }}
                            </div>
                        </a>
                        <img
                            loading="lazy"
                            :src="anime.media.coverImage.large"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div class="tier">
                <p class="tier__rank S">S</p>
                <div class="tier__grid">
                    <div
                        v-for="anime of tierList['S']"
                        :key="anime.mediaId"
                        class="tier__entry"
                    >
                        <a :href="'https://anilist.co/anime/' + anime.mediaId">
                            <div class="tier__entry__overlay">
                                {{ anime.media.title.userPreferred }}
                            </div>
                        </a>
                        <img
                            loading="lazy"
                            :src="anime.media.coverImage.large"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div class="tier">
                <p class="tier__rank A">A</p>
                <div class="tier__grid">
                    <div
                        v-for="anime of tierList['A']"
                        :key="anime.mediaId"
                        class="tier__entry"
                    >
                        <a :href="'https://anilist.co/anime/' + anime.mediaId">
                            <div class="tier__entry__overlay">
                                {{ anime.media.title.userPreferred }}
                            </div>
                        </a>
                        <img
                            loading="lazy"
                            :src="anime.media.coverImage.large"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div class="tier">
                <p class="tier__rank B">B</p>
                <div class="tier__grid">
                    <div
                        v-for="anime of tierList['B']"
                        :key="anime.mediaId"
                        class="tier__entry"
                    >
                        <a :href="'https://anilist.co/anime/' + anime.mediaId">
                            <div class="tier__entry__overlay">
                                {{ anime.media.title.userPreferred }}
                            </div>
                        </a>
                        <img
                            loading="lazy"
                            :src="anime.media.coverImage.large"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div class="tier">
                <p class="tier__rank C">C</p>
                <div class="tier__grid">
                    <div
                        v-for="anime of tierList['C']"
                        :key="anime.mediaId"
                        class="tier__entry"
                    >
                        <a :href="'https://anilist.co/anime/' + anime.mediaId">
                            <div class="tier__entry__overlay">
                                {{ anime.media.title.userPreferred }}
                            </div>
                        </a>
                        <img
                            loading="lazy"
                            :src="anime.media.coverImage.large"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="tier">
            <p class="tier__rank D">D</p>
            <div class="tier__grid">
                <div
                    v-for="anime of tierList['D']"
                    :key="anime.mediaId"
                    class="tier__entry"
                >
                    <a :href="'https://anilist.co/anime/' + anime.mediaId">
                        <div class="tier__entry__overlay">
                            {{ anime.media.title.userPreferred }}
                        </div>
                    </a>
                    <img
                        loading="lazy"
                        :src="anime.media.coverImage.large"
                        alt=""
                    />
                </div>
            </div>
        </div>
        <div class="tier">
            <p class="tier__rank F">F</p>
            <div class="tier__grid">
                <div
                    v-for="anime of tierList['F']"
                    :key="anime.mediaId"
                    class="tier__entry"
                >
                    <a :href="'https://anilist.co/anime/' + anime.mediaId">
                        <div class="tier__entry__overlay">
                            {{ anime.media.title.userPreferred }}
                        </div>
                    </a>
                    <img
                        loading="lazy"
                        :src="anime.media.coverImage.large"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['userName', 'type'],
    mounted() {
        this.getUserData()
    },
    data() {
        return {
            settingsMode: false,
            rankings: {
                SS: 10,
                S: 9,
                A: 8,
                B: 7,
                C: 5,
                D: 3,
                F: 1,
            },
            userAvatar: '',
            userBanner: '',
            userList: [],
            tierList: {
                SS: [],
                S: [],
                A: [],
                B: [],
                C: [],
                D: [],
                F: [],
                Unranked: [],
            },
            query: [
                `
                query($name: String) {
                    MediaListCollection(userName: $name, type: ANIME, status: COMPLETED) {
                        lists {
                            entries {
                                mediaId
                                score(format: POINT_10_DECIMAL)
                                media {
                                    coverImage {
                                        medium
                                        large
                                    }
                                    title {
                                        userPreferred
                                    }
                                }
                            }
                        }
                    }
                }
            `,
                `
            query($name: String){
                User(name: $name) {
                    avatar {
                        large
                    }
                    bannerImage
                }
            }
            `,
                `
                query($name: String) {
                    MediaListCollection(userName: $name, type: MANGA, status: COMPLETED) {
                        lists {
                            entries {
                                mediaId
                                score(format: POINT_10_DECIMAL)
                                media {
                                    coverImage {
                                        medium
                                        large
                                    }
                                    title {
                                        userPreferred
                                    }
                                }
                            }
                        }
                    }
                }
            `,
                `
                query($name: String) {
                    MediaListCollection(userName: $name, type: ANIME, status: DROPPED) {
                        lists {
                            entries {
                                mediaId
                                score(format: POINT_10_DECIMAL)
                                media {
                                    coverImage {
                                        medium
                                        large
                                    }
                                    title {
                                        userPreferred
                                    }
                                }
                            }
                        }
                    }
                }
            `,
                `
                query($name: String) {
                    MediaListCollection(userName: $name, type: ANIME, status: CURRENT) {
                        lists {
                            entries {
                                mediaId
                                score(format: POINT_10_DECIMAL)
                                media {
                                    coverImage {
                                        medium
                                        large
                                    }
                                    title {
                                        userPreferred
                                    }
                                }
                            }
                        }
                    }
                }
            `,
            ],
        }
    },
    watch: {
        $route() {
            window.location.reload(false)
        },
    },
    methods: {
        changeQuery() {
            this.$router.push(
                `/anime/${this.userName}/?SS=${this.rankings['SS']}&S=${this.rankings['S']}&A=${this.rankings['A']}&B=${this.rankings['B']}&C=${this.rankings['C']}&D=${this.rankings['D']}&F=${this.rankings['F']}`
            )
        },
        getUserData() {
            if (this.$route.query['SS']) {
                this.rankings.SS = this.$route.query['SS']
            }
            if (this.$route.query['S']) {
                this.rankings.S = this.$route.query['S']
            }
            if (this.$route.query['A']) {
                this.rankings.A = this.$route.query['A']
            }

            if (this.$route.query['B']) {
                this.rankings.B = this.$route.query['B']
            }
            if (this.$route.query['C']) {
                this.rankings.C = this.$route.query['C']
            }
            if (this.$route.query['D']) {
                this.rankings.D = this.$route.query['D']
            }
            if (this.$route.query['F']) {
                this.rankings.F = this.$route.query['F']
            }
            if (this.type.toLowerCase() == 'manga') {
                this.GetUserMangaListCompleted()
            } else {
                this.GetUserAnimeListCompleted()
            }
            this.GetUserProfile()
        },
        toggleSettingsModal() {
            this.settingsMode = !this.settingsMode
        },

        sortTierList(animeList) {
            animeList.sort((a, b) => a.score < b.score)
        },
        navigateToHomepage() {
            this.$router.push('/')
        },
        /**
         * @param {AnimeList[{}]} animeList
         */
        createTierList(animeList) {
            animeList.forEach((entry) => {
                let tier = ''
                if (entry.score >= this.rankings.SS) {
                    tier = 'SS'
                } else if (entry.score >= this.rankings.S) {
                    tier = 'S'
                } else if (entry.score >= this.rankings.A) {
                    tier = 'A'
                } else if (entry.score >= this.rankings.B) {
                    tier = 'B'
                } else if (entry.score >= this.rankings.C) {
                    tier = 'C'
                } else if (entry.score >= this.rankings.D) {
                    tier = 'D'
                } else if (entry.score >= this.rankings.F) {
                    tier = 'F'
                } else if (entry.score >= 0) {
                    tier = 'Unranked'
                }
                this.tierList[tier].push(entry)
            })
        },
        async GetUserAnimeListCompleted() {
            let variables = {
                name: this.userName,
            }
            const url = 'https://graphql.anilist.co'
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    query: this.query[0],
                    variables,
                }),
            }
            const res = await fetch(url, options)
            const data = await res.json()
            this.userList = data.data.MediaListCollection.lists[0].entries
            this.sortTierList(this.userList)
            this.createTierList(this.userList)
        },
        async GetUserMangaListCompleted() {
            let variables = {
                name: this.userName,
            }
            const url = 'https://graphql.anilist.co'
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    query: this.query[2],
                    variables,
                }),
            }
            const res = await fetch(url, options)
            const data = await res.json()
            this.userList = data.data.MediaListCollection.lists[0].entries
            this.createTierList(this.userList)
        },
        async GetUserProfile() {
            let variables = {
                name: this.userName,
            }
            const url = 'https://graphql.anilist.co'
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    query: this.query[1],
                    variables,
                }),
            }
            const res = await fetch(url, options)
            const data = await res.json()
            this.userAvatar = data.data.User.avatar.large
            this.userBanner = data.data.User.bannerImage
        },
    },
}
</script>

<style lang="scss" scoped>
.SS {
    background: #c77dff;
}
.S {
    background: #9d4edd;
}
.A {
    background: #7b2cbf;
}
.B {
    background: #5a189a;
}
.C {
    background: #3c096c;
}
.D {
    background: #240046;
}
.F {
    background: #10002b;
}

.settings-modal {
    border: dotted rgba(0, 0, 0, 0.5) 0.1rem;
    border-top: none;
    padding: 0.5rem;
    z-index: 4000;
    background: #f3f3f3;
    position: absolute;
    top: 10rem;
    right: 0;
    width: 20rem;
    input {
        margin-left: 0.5rem;
    }
    button {
        margin-top: 0.5rem;
    }
}

.wrapper {
    position: relative;
    max-width: 140rem;
    margin: 0 auto;
}

i {
    cursor: pointer;
    z-index: 1400;
    color: white;
}

.home {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    &:hover {
        opacity: 0.8;
    }
}

.settings {
    position: absolute;
    right: 1rem;
    top: 1rem;
    &:hover {
        opacity: 0.8;
    }
}

.tier {
    width: 100%;
    display: flex;
    &__rank {
        font-weight: bold;
        width: 12rem;
        margin-right: 1rem;
        margin: 0.5rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 4rem;
    }
    &__grid {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        @media (max-width: 600px) {
            justify-content: space-around;
        }
    }
    &__entry {
        position: relative;
        width: 12rem;
        height: 15rem;
        margin: 0.5rem;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
        &__overlay {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            width: 100%;
            height: 100%;
            font-size: 1.2rem;
            opacity: 0;
        }
        &:hover &__overlay {
            color: white;
            cursor: pointer;
            opacity: 1;
            background: rgba(0, 0, 0, 0.5);
        }
        @media (max-width: 600px) {
            width: 35%;
            height: 20rem;
        }
    }
}

header {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 10rem;
    background: slategray;
    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
}

.user {
    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;
    height: 10rem;
    width: auto;
    display: flex;
    transition: all 0.3s;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
    &__avatar {
        height: inherit;
        width: auto;
    }
    &__name {
        color: white;
        margin-left: 0.5rem;
        align-self: flex-end;
    }
}

.tier-list {
    width: 100%;
}
</style>
