/*
 * Starter Project for Messenger Platform Quick Start Tutorial
 *
 * Remix this as the starting point for following the Messenger Platform
 * quick start tutorial.
 *
 * https://developers.facebook.com/docs/messenger-platform/getting-started/quick-start/
 *
 */

'use strict';
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const TOKEN = process.env.VERIFY_TOKEN
const tips = {
    history: ["Did you know that Napoleon die in 1821?",
        "Saint Petersburg was founded in 1703 by Peter the Great",
        "Biggest empire in history was British Empire in 1920"
    ],
    science: ["Dinosaurs went extinct about 65 million years ago",
        "There is enough DNA in an average person’s body to stretch from the sun to Pluto and back 17 times"
    ],
    science_ar: [
        "هل تعلم أن المهمة الوحيدة لليرقة هي أن تأكل فقط. فهذه المرحلة من حياة الحشرة تنصب في تغذية الجسم حتى تصل إلى مرحلة البلوغ. https://www.facebook.com/PictorialEncyclopedia/photos/a.437534486304952.101319.437530546305346/1255295551195504/?type=3&theater",
        "يتمتع الأخطبوط بقدرة عالية على التخفي. شاهد هنا: https://www.facebook.com/PictorialEncyclopedia/videos/1253085038083222/"
    ],
    history_ar: [
        "هل تعلم أن 'كونراد هاير' هو أقدم شخص التقطت له صورة فوتوغرافية في التاريخ. https://www.facebook.com/PictorialEncyclopedia/photos/a.437534486304952.101319.437530546305346/927320587326337/?type=3&theater",
        "أهرام النوبة في السودان يبلغ عددها حوالي 250 هرماً، بنيت في عهد ممالك كوش النوبية بين وتعود لأكثر من ألف سنة قبل الميلاد https://www.facebook.com/PictorialEncyclopedia/photos/a.437534486304952.101319.437530546305346/935714719820257/?type=3&theater"
    ],
    physics_ar: [
        "هل تعلم أنك لو استطعت أن تصرخ بشدة ١١٠٠٠ ديسبل فإنك ستسبب في تكوين ثقب أسود أضخم من الكون الذي نعرفه؟"
    ],
    cosmology_ar: [
        "كشفت مركبة مارس ريكونيسنس أوربيتر التي تدور حول كوكب المريخ وجود آثار لزجاج على سطح الكوكب في عدة فوهات نيزكية. https://www.facebook.com/PictorialEncyclopedia/photos/a.437534486304952.101319.437530546305346/932757123449350/?type=3&theater"
    ]

};


// Imports dependencies and set up http server
const
    request = require('request'),
    express = require('express'),
    body_parser = require('body-parser'),
    app = express().use(body_parser.json()); // creates express http server

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));

// Accepts POST requests at /webhook endpoint
app.post('/webhook', (req, res) => {
    console.log("POST")
        // Parse the request body from the POST
    let body = req.body;

    // Check the webhook event is from a Page subscription
    if (body.object === 'page') {

        // Iterate over each entry - there may be multiple if batched
        body.entry.forEach(function(entry) {

            // Get the webhook event. entry.messaging is an array, but
            // will only ever contain one event, so we get index 0
            let webhook_event = entry.messaging[0];
            //console.log(webhook_event);

            // Get the sender PSID
            let sender_psid = webhook_event.sender.id;
            console.log('Sender PSID: ' + sender_psid);

            // Check if the event is a message or postback and
            // pass the event to the appropriate handler function
            if (webhook_event.message) {
                handleMessage(sender_psid, webhook_event.message);
            } else if (webhook_event.postback) {
                handlePostback(sender_psid, webhook_event.postback);
            } else {
                //something else
            }
        });

        // Return a '200 OK' response to all events
        res.status(200).send('EVENT_RECEIVED');

    } else {
        // Return a '404 Not Found' if event is not from a page subscription
        res.sendStatus(404);
    }

});

// Accepts GET requests at the /webhook endpoint
app.get('/webhook', (req, res) => {
    console.log("GET")
        /** UPDATE YOUR VERIFY TOKEN **/
    const VERIFY_TOKEN = "discovery";

    // Parse params from the webhook verification request
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];

    console.log("token")
    console.log(token)
        // Check if a token and mode were sent
    if (mode && token) {
        // Check the mode and token sent are correct
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
            // Respond with 200 OK and challenge token from the request
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);
        } else {
            // Responds with '403 Forbidden' if verify tokens do not match
            res.sendStatus(403);
        }
    }
});


// Handles messages events
function handleMessage(sender_psid, received_message) {
    let response;
    let starts_with;

    // Check if the message contains text
    if (received_message.text) {

        // Create the payload for a basic text message
        response = {
            "text": 'You sent the message: "${received_message.text}".'
        }

        starts_with = received_message.text.charAt(0);
        console.log(starts_with)
    }

    //only auto responde if messages starts with #
    if (starts_with == "#") {
        let msg = received_message.text;
        msg = msg.substr(1);
        let topic = getTopic(msg);
        console.log(topic)

        if (topic == "0") {
            response = {
                "text": 'الموضوع غير معلوم. الرجاء استخدام كلمات مثل: #تاريخ، #فلك، #علوم، #فنون...'
            }
        } else {
            let tip = getTip(topic);
            console.log(tip)
            response = {
                "text": tip
            }
        }
        // Sends the response message
        callSendAPI(sender_psid, response);
    }

}

// Handles messaging_postbacks events
function handlePostback(sender_psid, received_postback) {

}

// Sends response messages via the Send API
function callSendAPI(sender_psid, response) {
    // Construct the message body
    let request_body = {
        "recipient": {
            "id": sender_psid
        },
        "message": response
    }

    // Send the HTTP request to the Messenger Platform
    request({
        "uri": "https://graph.facebook.com/v2.6/me/messages",
        "qs": {
            "access_token": PAGE_ACCESS_TOKEN
        },
        "method": "POST",
        "json": request_body
    }, (err, res, body) => {
        if (!err) {
            console.log('message sent!')
        } else {
            console.error("Unable to send message:" + err);
        }
    });
}


//logic functions
function getTopic(msgtext) {
    switch (msgtext) {
        case "history":
            return "history";
            break;
        case "science":
            return "science";
            break;
        case "science":
            return "science";
            break;
        case "فلك":
            return "cosmos_ar";
            break;
        case "علوم":
        case "علم أحياء":
            return "science_ar";
            break;
        case "تاريخ":
            return "history_ar";
            break;
        case "فيزياء":
            return "physics_ar";
            break;
        case "فلك":
            return "cosmology_ar";
            break;
        case "فن":
        case "فنون":
            return "art_ar";
            break;
        default:
            return "0";
            break;
    }
}

function getTip(topic) {
    console.log(topic)
    let index = Math.floor(Math.random() * tips[topic].length)
    return tips[topic][index];
}