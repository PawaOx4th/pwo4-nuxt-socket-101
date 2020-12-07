<template>
  <div>
    <b-container class="mt-5">
      <b-row>
        <b-col>
          <b-form-input
            id="input-small"
            v-model="message"
            placeholder="Enter your name"
            @keydown.enter="getMessage()"
          ></b-form-input>
          <div>
            <b-button variant="primary" block @click="getMessage()">
              SEND
            </b-button>
          </div>
        </b-col>
        <b-col>
          <b-list-group>
            <b-list-group-item
              v-for="(messages, index) in listmessages"
              :key="index"
            >
              <div>
                <p>🐶 : {{ messages.id }}</p>
                <span> 💬 : {{ messages.content }}</span>
                <hr />
                {{ messages.createAt }}
              </div>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data() {
    return {
      message: '',
      listmessages: [],
    }
  },
  mounted() {
    this.socket = this.$nuxtSocket({
      // nuxt-socket-io opts:
      // name: 'home', // Use socket "home"
      // channel: '/index', // connect to '/index'

      // socket.io-client opts:
      reconnection: true,
    })

    this.socket.on('start', (msg, cb) => {
      this.listmessages.push(msg)
    })
  },
  methods: {
    getMessage() {
      this.socket.emit('start', this.message)
      this.message = ''
    },
  },
}
</script>

<style lang="scss" scoped></style>
