<script>
export default {
  data() {
    return {
      correct: 0,
      totalScore: 0,
    };
  },
  methods: {
    addCorrect() {
      this.correct++;
    },
    calculateScore(time) {
      this.totalScore = time * this.correct;
    },
  },
};
</script>