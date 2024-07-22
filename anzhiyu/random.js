var posts=["2024/07/19/index/","2024/07/22/post-name/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };