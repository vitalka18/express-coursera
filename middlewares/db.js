


db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  // we're connected!
});