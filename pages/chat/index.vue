<template>
  <div class="chat">
    <b-container class="mt-5">
      <b-row>
        <b-col cols="6" md="6" lg="6" xl="6">
          <b-form-input
            id="input-small"
            v-model="message"
            placeholder="Enter your name"
            @keydown.enter="getMessage()"
          >
          </b-form-input>
          <div>
            <b-button variant="primary" block @click="getMessage()">
              SEND
            </b-button>
          </div>
        </b-col>
        <!--  -->
        <b-col cols="6" md="6" lg="6" xl="6">
          <div ref="group" class="groupchat">
            <b-list-group v-if="listmessages.lenght !== 0">
              <b-list-group-item
                v-for="(messages, index) in listmessages"
                :key="index"
                :class="{ sub: twoNumber(index) }"
              >
                <div>
                  <p>🐶 : {{ messages.id }}</p>
                  <span> 💬 : {{ messages.content }}</span>
                  <hr />
                  {{ messages.createAt }}
                </div>
              </b-list-group-item>
            </b-list-group>
          </div>
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
  // computed: {

  // },
  mounted() {
    // console.log('ENV', process.env.SOCKET_URL)
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
    twoNumber(index) {
      if (index % 2 === 0) {
        return false
      } else {
        return true
      }
    },
    getMessage() {
      this.socket.emit('start', this.message)
      this.message = ''
      const groupEle = this.$refs.group
      groupEle.scrollTop = groupEle.scrollHeight
    },
  },
}
</script>

<style lang="scss" scoped>
@import './assets/variable.scss';
.chat {
  .groupchat {
    max-height: 645px;
    overflow-y: auto;
    // overflow-y: scroll;
    border: 2px solid salmon;
    .list-group-item {
      border: none;
      background-color: #dcf2f4;

      &.sub {
        background-color: #fdf7bd;
      }
    }
  }
}
</style>
