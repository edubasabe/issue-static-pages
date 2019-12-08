const InstaApp = new Vue({
  name: 'InstaApp',
  el: '#instaApp',
  data: {
    accountUrl: 'https://api.instagram.com/v1/users/self/media/recent',
    token: '3558323490.b315aeb.ac3af522d6284ef6a6e6dbe88370186d',
    clientID: 'b315aeb1bcc844298f552bde0f7860c4',
    posts: []
  },
  methods: {
    getInstaPosts: function () {
      let self = this;
      axios.get(this.accountUrl, {
          params: {
            access_token: this.token,
            client_id: this.clientID,
            count: 6
          }
        })
        .then(function (response) {
          self.posts = response.data.data;
          console.log(self.posts);
        })
        .catch(function (error) {
          console.error(error);
        })
    }
  },
  mounted: function () {
    this.getInstaPosts();
  }
});