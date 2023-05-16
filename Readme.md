## For sample output:

```
git clone https://github.com/tony-zhu/SignedAdaptiveCardSample-node.git
cd SignedAdaptiveCardSample-node
npm install
node index.js 

```

## Modfiy below for your need
### Update private key into developer.key 

```
ssh-keygen -P "" -t rsa -b 4096 -m pem -f my-key-pair
```
Get the content from my-key-pair to developer.key file 

### Update card.json 

Update card.json file based on your need. You can design your own at: https://amdesigner.azurewebsites.net/  or few samples are at: https://messagecardplayground.azurewebsites.net/ 

### Update index.js
Update index.js for valid originator (that you used on developer dashboard), sender and recipients
