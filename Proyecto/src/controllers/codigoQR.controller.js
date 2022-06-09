const qrcode = require("qrcode");
const codigoQRlCtrl = {};

codigoQRlCtrl.renderCodigo = async (req, res)=>{
    var url = "http://127.0.0.1:4000/perfilpub/"+req.params.id;
    const QR = await qrcode.toDataURL(url);

    const codigoGenerado = {codigoQR: QR};

    res.render('codigo/codigo',{codigoGenerado});

};

module.exports = codigoQRlCtrl;