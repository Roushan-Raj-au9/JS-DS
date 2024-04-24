const { Twilio } = require('twilio');

const client = new Twilio(accountSid, authToken);

let message = await client.messages.create({
    from: `${senderMobile}`,
    to: `${toMobile}`,
    body: `Hey ${userName},\n\t ${textMessage} \n\t Thank you, Omni.us Team`,
  });
  let messageID = message.sid;
  // let status = await client.messages(messageID).fetch()
  return {
    messageId: messageID,
    messageStatus: message.status,
  };