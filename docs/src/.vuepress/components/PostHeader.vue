<template>
  <small>
    <span>Published at:  {{
        `${formatDate($frontmatter.published)}`
      }}</span>
    <a class="back" href="/blog">Back to blog </a>
    <div class="keywords">
      <span>Keywords:</span>
      <a
        class="keyword"
        v-bind:href="getTagURL(key)"
        v-for="key in $frontmatter.keywords"
        >{{ key }}</a
      >
    </div>
    <br/> 
    <hr />
</small>
</template>

<script>
export default {
  data() {
    return { loading: true, keywordMap: new Map(), keywordList: [] };
  },
  computed: {},
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString(this.$lang, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
    },
    getTagURL(tag) {
      return `/blog/?tag=${tag}`;
    },
  },
};
</script>
<style lang="stylus" scoped>
.article {
  margin-bottom: 20px;
  border-left: solid 5px $accentColor;
  padding: 20px;
}

.banner {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.keywords {
  margin-top: 20px;
}

.keyword {
  padding: 5px;
  border-radius: 7px;
  font-size: small;
  background: $accentColor;
  margin: 2px 5px;
  color: white;
  font-weight: 500;
}
</style>
