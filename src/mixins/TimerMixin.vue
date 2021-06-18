<script>
import Vue from 'vue'

export default {
  data() {
    return {
      totalSeconds: 300,
      seconds: 300,
      endFunction: '',
    };
  },
  methods: {
    count() {
      if (this.seconds == 0) {
        this.stop();
      } else {
        this.seconds--;
      }
      return this.seconds;
    },
    startCount() {
      Vue.prototype.$interval = setInterval(() => {
        this.count();
      }, 1000);
    },
    getTime(){
      return this.totalSeconds - this.seconds;
    },
    stop() {
      clearInterval(this.$interval);
      this.endFunction();
    },
  },
};
</script>