module.exports = function(app, passport) {
    app.get('/', function(req, res){
     res.render('login.html');
    });
   
    app.get('/login', function(req, res){
     res.render('login.html', {message:req.flash('loginMessage')});
    });
   
    app.post('/login', passport.authenticate('local-login', {
     successRedirect: '/home',
     failureRedirect: '/login',
     failureFlash: true
    }),
     function(req, res){
      if(req.body.remember){
       req.session.cookie.maxAge = 1000 * 60 * 3;
      }else{
       req.session.cookie.expires = false;
      }
      res.redirect('/');
     });
   
    app.get('/register', function(req, res){
     res.render('registerhtml', {message: req.flash('signupMessage')});
    });
   
    app.post('/register', passport.authenticate('local-signup', {
     successRedirect: '/login',
     failureRedirect: '/register',
     failureFlash: true
    }));
   
    app.get('/home', isLoggedIn, function(req, res){
     res.render('home.html', {
      user:req.user
     });
    });
   
    app.get('/login', function(req,res){
     req.logout();
     res.redirect('/login');
    })
   };
   
   function isLoggedIn(req, res, next){
    if(req.isAuthenticated())
     return next();
   
    res.redirect('/');
   }