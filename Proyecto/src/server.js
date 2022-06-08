const express = require('express');
const hbs = require('hbs');
const exphbs = require('express-handlebars');
const res = require('express/lib/response');
const path = require('path');
const methodOverride = require('method-override');
const flash = require("connect-flash");
const session = require('express-session');
// const { nextTick } = require('process');
const passport = require('passport');
const multer = require('multer');
const { urlToHttpOptions } = require('url');

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img'),
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    } 

});


const upload = multer({
    storage,
limits:{
    fieldSize: 1062*624*3
}});


module.exports = upload;

//inicializaciones
const app = express();
require('./config/passport');

//configraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views' ));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Variables Globales
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
})
// res.locals.error_msg = req.flash('error_msg');
// next();
//Rutas
app.use(require('./routes/index.routes'));
app.use(require('./routes/users.routes'));
app.use(require('./routes/userInfo.routes'));
app.use(require('./routes/recuperacion.routes'));
app.use(require('./routes/email.routes'));
app.use(require('./routes/userProfile.routes'));
app.use(require('./routes/vacante.routes'));
app.use(require('./routes/aplicarVacante.routes'));
app.use(require('./routes/carrusel.routes'));
app.use(require('./routes/bitacoracreate.routes'));

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public' )));

module.exports = app; 