/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

var jwt = require('jsonwebtoken');
var fs = require('fs');

// This is the Outlook Actionable Message developer key (private key), which is only valid in self-sending senario.
// Production services should generate their own key pairs and register the public key with Actionable Message team.
var signingKey = fs.readFileSync('developer.key');

var card = fs.readFileSync('card.json');

// Minifi the json string
var cardMinified = JSON.stringify(JSON.parse(card));

// The Actionable Message provider ID generated during provider registration
var originator = "65c680ef-36a6-4a1b-b84c-a7b5c6198792";

// Sender of the email
var sender = "service-account@contoso.com";

// Recipients of the email
var recipients = ["john@contoso.com", "jane@contoso.com"];

var payload = {
    sender: sender,
    recipientsSerialized: JSON.stringify(recipients),
    adaptiveCardSerialized: cardMinified,
    originator: originator,
    iat: Math.floor(Date.now() / 1000)
}

var token = jwt.sign(payload, signingKey, { algorithm: 'RS256'});

var template = fs.readFileSync('signed_adaptive_template.html'); 
var htmlPayload = template.toString().replace("{{signedCardPayload}}", token);

console.log(htmlPayload);