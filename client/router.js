Router.route('/', function () {
  this.render('home');
});
Router.route('/messages', function () {
  this.render('messages');
});
Router.route('/findfriend', function () {
  this.render('findfriend');
});
Router.route('/browse', function () {
  this.render('browse');
});
Router.route('/events', function () {
  this.render('events');
});
Router.route('/photos', function () {
  this.render('photos');
});
