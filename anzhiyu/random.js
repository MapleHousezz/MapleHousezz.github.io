var posts=["2024/07/19/index/","2024/07/22/CNN/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };