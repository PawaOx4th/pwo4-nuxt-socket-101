<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">pw04-nuxt-socket-101</h1>
      <div class="links">
        <b-button to="/chat" block variant="outline-primary">Chat</b-button>
      </div>
      <hr />

      <b-alert
        v-for="(post, index) in posts"
        :key="index"
        variant="primary"
        show
      >
        <nuxt-link :to="{ name: 'posts-id', params: { id: post.id } }">{{
          post.id
        }}</nuxt-link>
      </b-alert>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: '',
    }
  },
  async mounted() {
    const response = await this.$axios.$get(
      'https://jsonplaceholder.typicode.com/posts'
    )

    this.posts = response
  },
  head() {
    return {
      title: 'Home Page 🍕',
      meta: [
        { name: 'twitter:title', content: 'Nuxt Async by Vue School' },
        { name: 'twitter:description', content: 'Nuxt + Vue School = 🍕' },
        { name: 'twitter:image', content: 'https://i.imgur.com/UYP2umJ.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
