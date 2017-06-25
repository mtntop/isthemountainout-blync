# "The mountain is out!" - Blync edition

This allows the manipulation of a Blync light to tell you if Mt. Rainier is out using `themtn.top`'s webhook feature.

See [the actual service repo](https://github.com/mtntop/isthemountainout) for more information.

## Getting Started
First you need to get yourself a Blynclight.

Once you have one, clone/download this repo and do:
`npm install`

Then, to start the server, run:
`node app.js`

That's it! It will fetch the latest status at `themtn.top/api/simple`, then wait for notifications from `themtn.top`'s `mountain_change` webhook.

In order to use the webhook, I recommend using a tool like [ngrok](https://ngrok.com) to make your service known to the outside world - then you can send the generated ngrok url to me either via Twitter or email and we can work out the details.

I'll eventually make this process a form... eventually.
