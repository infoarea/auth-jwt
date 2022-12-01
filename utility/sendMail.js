
// const dotenv = require('dotenv').config();
const nodemailer = require('nodemailer');


const emailSend = (to, sub) => {

    const transport = nodemailer.createTransport({
        host : process.env.EMAIL_HOST,
        port :  process.env.EMAIL_PORT,
        auth : {
            user : process.env.EMAIL_USER,
            pass : process.env.EMAIL_PASS
        }
    });


    transport.sendMail({
        from : process.env.EMAIL_USER,
        to : to,
        subject : sub,
        text : ``,
        html : `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acount Veryfication</title>
    <style>
        .main {
            background-color: #e9e9e9;
            width: 100%;
        }
        .main-wrap {
            width: 500px;
            margin: auto;
            padding: 20px;
            border-radius: 5px;
            background-color: #fff;
            box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
        }
        .header {
            padding: 15px 0px;
            text-align: center;
        }
        .body img {
            width: 100%;
        }
        .body p {
            padding: 15px 5px;
        }
        .footer a {
            background: #166687;
            color: white;
            padding: 10px 0px;
            width: 100%;
            display: block;
            margin: auto;
            text-align: center;
            text-decoration: none;
        }
    </style>
</head>
<body>
    
<div class="main">
    <div class="main-wrap">
        <div class="header">

            <img src="https://softtech-it.com/wp-content/uploads/2021/04/logo.png" alt="">
        </div>
        <div class="body">
            <img src="https://c0.wallpaperflare.com/preview/737/862/336/woman-work-laptop-computer.jpg" alt="">
            <h2>Hi saiful islam</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, et blanditiis, consequuntur est architecto ex adipisci sed molestias incidunt similique ducimus, vero excepturi minima? Voluptates officiis, beatae voluptate, hic impedit animi perferendis distinctio repellat consectetur voluptatem nemo, dolorem quod ad quidem! Maiores, cumque illo. Nisi obcaecati repellendus sunt odio deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam perspiciatis labore asperiores possimus explicabo nostrum accusantium dolorem ea. Sit, inventore? Unde molestias, deserunt aliquam, labore accusamus hic obcaecati impedit libero animi corrupti accusantium natus deleniti et velit eos, tenetur quam facilis possimus suscipit incidunt tempore tempora repudiandae magnam consequuntur. Distinctio.</p>
        </div>
        <div class="footer">
            <a href="fb.com/wpsaiful">To know more, Please visit</a>
        </div>
    </div>
</div>

</body>
</html>`
    });


}

//Module exports
module.exports = emailSend;