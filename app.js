var
  express = require('express'),
  app     = express(),
  poet    = require('poet');

poet( app, {
  posts: './_posts/',
  postsPerPage: 5,
  metaFormat: 'json'
})
  .createPostRoute()
  .createPageRoute()
  .createTagRoute()
  .createCategoryRoute()
  .init();

app.set( 'view engine', 'jade' );
app.set( 'views', __dirname + '/views' );
app.use( express.static( __dirname + '/public' ));
app.use( app.router );

app.get( '/', function ( req, res ) { res.render( 'index' ) });

app.listen( 3000 );