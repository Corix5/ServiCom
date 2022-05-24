const usersCtrl = {};

const passport = require('passport');

const User = require('../models/User');
const nodemailer = require('nodemailer');

usersCtrl.renderSignUpForm = async (req, res) => {
    res.render('users/signup');
};

usersCtrl.signup = async (req, res) =>{
    const errors = [];

    const {nombre, apellidoPaterno, apellidoMaterno, boleta, carrera, correo, telefono, contrasena, contrasena2} = req.body;
    if(contrasena != contrasena2){
        errors.push({text: 'Contraseñas no coinciden'});
    }
    if(contrasena.length < 8){
        errors.push({text: 'Las contraseñas deben ser de almenos 8 caracteres'})
    }
    if(errors.length > 0){
        res.render('users/signup', {
            errors,
            nombre,
            apellidoMaterno,
            apellidoPaterno,
            boleta,
            carrera,
            telefono,
            correo
        })
    } else {
         const emailUser = await User.findOne({email: correo});
         if(emailUser){
            req.flash('error_msg', 'El correo ya está en uso');
             res.redirect('/users/signup');
         } else{
                const newUser = new User({name: nombre, lastnameP: apellidoPaterno, lastnameM: apellidoMaterno, ipnID: boleta, career: carrera, phone: telefono, email:correo, password: contrasena});
                newUser.password = await newUser.encyptPassword(contrasena);
                await newUser.save(); 

                //Correo de confirmacion
                let transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                      user: "luisdavid201375@gmail.com", // generated ethereal user
                      pass: "ciehfulauhibkmgv", // generated ethereal password
                    },
                  });
            
                    // send mail with defined transport object
                let info = await transporter.sendMail({
                from: '"ServiCom 👻" <foo@example.com>', // sender address
                to: correo, // list of receivers
                subject: "Bienvenido a ServiCom ✔", // Subject line
                text: "Hello world?", // plain text body
                html: `<b>Haz creado una cuenta en ServiCom, desde aquí podrás encontrar la vacante ideal para tu servicio social </b> `, // html body
              });
            
              console.log("Message sent: %s", info.messageId);
              // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            
              // Preview only available when sending through an Ethereal account
              console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
              // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                res.redirect('/users/signin');
            }
    }
};

usersCtrl.renderSigninForm = async (req, res) => {
    // const users = await User.findOne().lean();
    res.render("users/signin");
};

usersCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/userInfo',
    failureFlash: true
});


usersCtrl.logout = (req, res) => {
    req.logout();
    req.flash('success_msg','Se ha cerrado la sesión');
    res.redirect('/users/signin');
}
module.exports = usersCtrl;