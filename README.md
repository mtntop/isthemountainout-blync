# "The mountain is out!" - Blync edition

This allows the manipulation of a Blync light to tell you if Mt. Rainier is out using `themtn.top`'s webhook or Socket.io feature.

See [the actual service repo](https://github.com/mtntop/isthemountainout) for more information.

## Getting Started
First you need to get yourself a Blynclight.

Once you have one, clone/download this repo and run:
`npm install` (from the root directory of the project)

Then, to start the server using a webhook, run:
`npm run start_webhook` or `npm start`

To start the server using Socket.io, run:
`npm run start_socketio`

That's it! It will fetch the latest status at `themtn.top/api/simple`, then wait for notifications from `themtn.top`'s `mountainChange` webhook or from the `mountainChange` Socket.io event.

### The Webhook Feature

In order to use the webhook, I recommend using a tool like [ngrok](https://ngrok.com) to make your service known to the outside world - then you can send the generated ngrok url to me either via Twitter or email and we can work out the details.

I'll eventually make this process a form... eventually.

You can, however, use the Socket.io feature without any effort.
