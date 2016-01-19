(function() {
  var App;

  App = (function() {
    function App() {}

    App.prototype.init = function() {
      return console.log('hello world');
    };

    App.onReady = function(fn) {};

    return App;

  })();

  App.onReady(function() {
    return new App().init();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFNOzs7a0JBRUYsSUFBQSxHQUFNLFNBQUE7YUFDRixPQUFPLENBQUMsR0FBUixDQUFZLGFBQVo7SUFERTs7SUFHTixHQUFDLENBQUEsT0FBRCxHQUFVLFNBQUMsRUFBRCxHQUFBOzs7Ozs7RUFHZCxHQUFHLENBQUMsT0FBSixDQUFZLFNBQUE7V0FBTyxJQUFBLEdBQUEsQ0FBQSxDQUFLLENBQUMsSUFBTixDQUFBO0VBQVAsQ0FBWjtBQVJBIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcFxyXG5cclxuICAgIGluaXQ6IC0+XHJcbiAgICAgICAgY29uc29sZS5sb2cgJ2hlbGxvIHdvcmxkJ1xyXG5cclxuICAgIEBvblJlYWR5OiAoZm4pIC0+XHJcbiAgICAgICAgIyBhZGQgZXZlbnQgbGlzdGVuZXJcclxuXHJcbkFwcC5vblJlYWR5IC0+IG5ldyBBcHAoKS5pbml0KClcclxuXHJcbiJdfQ==
