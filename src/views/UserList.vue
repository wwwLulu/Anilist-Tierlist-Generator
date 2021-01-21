<template>
    <div class="wrapper screen-container">
        <header>
            <i @click="navigateToHomepage" class="material-icons settings"
                >settings</i
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
        if (this.type.toLowerCase() == 'manga') {
            this.GetUserMangaListCompleted()
        } else {
            this.GetUserAnimeListCompleted()
        }
        this.GetUserProfile()
    },
    data() {
        return {
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
        navigateToHomepage() {
            this.$router.push('/')
        },
        /**
         * @param {AnimeList[{}]} animeList
         */
        createTierList(animeList) {
            animeList.forEach((entry) => {
                let tier = ''
                if (entry.score >= 10) {
                    tier = 'SS'
                } else if (entry.score >= 9) {
                    tier = 'S'
                } else if (entry.score >= 8) {
                    tier = 'A'
                } else if (entry.score >= 7) {
                    tier = 'B'
                } else if (entry.score >= 5) {
                    tier = 'C'
                } else if (entry.score >= 3) {
                    tier = 'D'
                } else if (entry.score >= 1) {
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
