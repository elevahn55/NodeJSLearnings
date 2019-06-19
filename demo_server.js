var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'MatrixIanHouse123@gmail.com',
        pass: 'P@ssw0rd1anHouse'
    }
});

var mailOptions = {
    from: 'notavirus@gmail',
    to: 'ian.luck@wipfli.com',
    subject: 'Ian, This Is Not a Game',
    html: '<h1>Ian,</h1><br><p>It is quite appaling that you think this is a virus. This is not a game Ian. Please respond to the message below</p><p>It is my hope that this message finds you in the cycle of deep rumination. This is your last chance. After this, there is no turning back. You take the blue pill – the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill – you stay in Wonderland, and I show you how deep the rabbit hole goes. Remember, all Im offering is the truth, nothing more.</p><p>It is imperative that you respond to this mesaage to inform me of your decision. We are counting on you, Ian.</p><h4>-Morpheus</h4><img src="http://web.nmsu.edu/~gchavez7/red_pill_blue_pill-copy3.gif">' 
}

function spam() {
transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error)
    }
    else{
        console.log('Email sent' + info.response)
    }
})
}
setInterval(spam, 180000)