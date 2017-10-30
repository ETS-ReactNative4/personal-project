const express = require('express')
, bodyParser = require('body-parser')
, cors = require('cors')
, massive = require('massive')
, session = require('express-session')
, passport = require('passport')
, Auth0Strategy = require('passport-auth0')
require('dotenv').config()

const projectsController = require('./controller/projectsController')


const app = express()
// app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
massive(process.env.CONNECTION_STRING).then( db =>{
    console.log('connected')  
    app.set('db', db)
}  );


//ENDPOINTS
app.get('/projects/img', (req, res) => {
    app.get('db').getAllProjects().then( response => {
        res.status(200).send(response)
    })
})

app.get('/users/admin', (req, res) => {
    app.get('db').getAllUsers().then( response => {
        res.status(200).send(response)
    })
})

app.put('/update/project/:id', (req, res) => {
    let { title, comment } = req.body
    let { id } = req.params
    console.log(title, comment, id)
    app.get('db').updateProjects( [id, title, comment] ).then( () => {
        app.get('db').getAllProjects().then(response =>{
        res.status(200).send(response)})
    })
})

app.post('/new/project', (req, res) => {
    let { title, comment, img, id} = req.body
    app.get('db').addNewProject([ title, comment, img, id ]).then( () => {
        app.get('db').getAllProjects().then( response => {
            res.status(200).send(response)
        })
    })
})

app.delete('/remove/project/:id', (req, res) => {
    let { id } = req.params
    app.get('db').deletePost([id]).then( () => {
        app.get('db').getAllProjects().then(response => {
            res.status(200).send(response)
        })
    })
})


//AUTH0
app.use(session({
secret: process.env.SECRET,
resave: false,
saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());//allowing the passport library to use our sessions

passport.use(new Auth0Strategy({
domain: process.env.AUTH_DOMAIN,
clientID: process.env.AUTH_CLIENTID,
clientSecret: process.env.AUTH_CLIENT_SECRET,
callbackURL: process.env.AUTH_CALLBACK
}, function(accessToken, refreshToken, extraParams, profile, done){
const db = app.get('db')
console.log('auth user', profile._json)

db.find_user([ profile._json.email ]).then( user => {
    console.log('db user', user)
    if(user[0]){
        return done(null, user[0]);
    } else {
        return done(null, false);
    }
})
}));

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
successRedirect: process.env.SUCCESS_REDIRECT,
failureRedirect: process.env.FAILURE_REDIRECT
}))

app.get('/auth/me', (req, res) => {
    console.log('session user', req.user)
if(!req.user) {
return res.status(200).send(false)
}
return res.status(200).send(req.user)
})

app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(302, process.env.SUCCESS_REDIRECT)
})

passport.serializeUser( (user, done) => {
//user = profile from above
//
done(null, user);
})
passport.deserializeUser( (user, done) => {
done(null, user);
})


require("./router")(app)





const PORT = 3013
app.listen(PORT, () => {
console.log(`listening on ${PORT}`)
})

