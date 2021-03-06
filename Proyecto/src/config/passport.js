const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.use(new LocalStrategy({
    usernameField: 'ipnID',
    passwordField: 'password'
}, async (ipnID, password, done) => {
    
    //confirmar si la boleta existe existe
    const user = await User.findOne({ipnID});
    if(!user){
        return done(null, false, {message: 'No se encontró un usuario existente'});
    } else{
        //valdiar contraseña 
        const match = await user.matchPassword(password);
        if(match){
            return done(null, user);
        } else{
            return done(null, false, {message: 'usuario y/o contraseña incorrecta'})
        }
    }
    
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    })
});