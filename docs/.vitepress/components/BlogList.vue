<template>
  <div>
    <p v-if="loading">{{ loadingText }}</p>
    <div v-if=" this.$route.query.tag" class="keywords banner">        
        <p>Current Tag: {{ this.$route.query.tag }} 
            <a class="keyword" href="/blog">clear tag [x]</a>
        </p>
    </div>
    <div v-if="!loading" class="keywords banner">
        
    <p>Keywords in posts:
      <a
        class="keyword"
        v-for="keywordItem in Object.values(keywordList)"
        v-bind:href="getTagURL(keywordItem.key)"
        >{{ `${keywordItem.key.split(" ").join("&nbsp;")}:&nbsp;${keywordItem.count}` }}</a
      >
    </p>
    </div>
    <h2>Posts</h2>
    <div class="article" v-for="page in files">
      <small>{{formatDate(page.frontmatter.published)}}</small>
      <h3><a v-bind:href="page.path">{{page.title}}</a></h3>             
      <div class="keywords">Keywords:
        <a
          class="keyword"
          v-for="key in page.frontmatter.keywords"
          v-bind:href="getTagURL(key)"
          >{{ key }}</a
        >
      </div>
      <p class="summary">{{page.frontmatter.description.summary}}
        <br/>
        <a v-bind:href="page.path">Read post.</a>
    </p>
      

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { loading: true, keywordList: {} };
  },
  computed: {
    files() {
      const blogs = this.$site.pages.filter((p) => {
        const baseCheck = p.path.indexOf("/blog/") >= 0 && p.path.length > 10;
        if (p.frontmatter && p.frontmatter.keywords)
          p.frontmatter.keywords.forEach((keyword) => {
            this.keywordList[keyword] = {key:keyword, count : this.keywordList[keyword] ? this.keywordList[keyword].count + 1 : 1}   
          });
          return baseCheck;
        const advancedCheck = this.$route.query.tag
          ? p.frontmatter &&
            p.frontmatter.keywords &&
            p.frontmatter.keywords.findIndex(
              (it) => it.toLowerCase() === this.$route.query.tag.toLowerCase()
            ) !== -1
          : true;
        return baseCheck && advancedCheck;
      });
      blogs.sort(
        (a, b) =>
          new Date(b.frontmatter.published).getTime() -
          new Date(a.frontmatter.published).getTime()
      );
      this.loading = false;
      return blogs;
    },
    loadingText() {
      return "Loading Blog List...";
    },
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString('en-GB', {
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
  border-bottom: solid 2px $accentColor;
  padding: 20px 0;
}

.article h3,
.article h2 {
    margin-top:0;
}
.article small {
    font-size:11px;
}

.banner {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.keywords {
  margin:0;
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
