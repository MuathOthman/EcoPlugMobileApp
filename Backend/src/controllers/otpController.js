const twilio = require('twilio');
const client = twilio("ACfad19283d4eab7089e34af46b35563db","4827e431617d1290178f0341065f5302");
let number = "+358442379461"


const sendOTP = async (req, res) => {
    const { phoneNumber } = req.body;
    number = phoneNumber;
    try {
        const otpResponse = await client.verify.v2.services('VA811ac4149518e8db31520bc9ea4dca49')
            .verifications
            .create({to: phoneNumber, channel: 'sms'});
        console.log(otpResponse);
        otpCode = otpResponse.sid;
        res.status(200).send({message: 'OTP sent successfully.'});
    }
    catch (error) {
        console.log(error);
        res.status(400).send({message: 'Failed to send OTP.'});
    }
}

const verifyOTP = async (req, res) => {
    const {otp, phoneNumber} = req.body;
    try {
        const otpResponse = await client.verify.v2.services('VA811ac4149518e8db31520bc9ea4dca49')
            .verificationChecks
            .create({to: phoneNumber, code: otp});
        console.log(otpResponse);
        res.status(200).send({message: otpResponse.status});
    }
    catch (error) {
        console.log(error);
        res.status(400).send({message: 'Failed to verify OTP.'});
    }
}


module.exports = {
    sendOTP,
    verifyOTP
}
