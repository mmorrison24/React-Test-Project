
** Porst Mortem**
Wanted to approach some new starter kits I usually don't get to use. I appreciate this excerise for the time to re-adjust process and profile to new libraries and styles.

**Install / Running instructions**
```
git clone git@github.com:mmorrison24/br-food.git this-one-guys-stuff
npm run setup ?? - not sure if you need to run this
```

running
```
npm start -s
```

**Tech Overview**

Foundation:

1. react-slingshot - start-kit, saw some older tutorials using it. [see regrets]
2. standard redux stuff
3. redux-saga + axios for api integration
4. smart containers - stateless components

**Few thoughts on Requirments**

1. **Avenir** - I personally don't have Avenir on my machine - I did some searching and found conversation that the google font Nunito Sans.
2. **SVG vs PNG** - Noticed the 2x image assets were provided - they are quite small in size; but in a real project would suggest these images be SVG's.
3. **Shadow asset vs CSS3** - The shadow asset image I would implement as a css3 dropshadow, perhaps using a filter if per-se a multiply affect was wanted. (forgot to add that in tho...please forgive)

**Improvements** 
Given an opprtunity to do this again, I would use something simpler boilerplate project as a starting point. There was alot to work through , and with the current new features, I wish I did a bit less wrangler with platform.

I probably would have used something simpler like [react-root](https://www.npmjs.com/package/react-root) or [bae](https://github.com/siddharthkp/bae) . 
But there is always that consideration that needs to be taken towards how opinionated , recently updated etc a starter kit may be.

Would have loved to have explored some of the React16 features especially Provider-Consumer context, but really wanted to try and look at React-Saga and wasnt sure how those would fit together.

**Regrets**
Utilize Router: With the requirement to pull the VenueDetail page, somewhat consisdered attaching a route such that linking to venue:id would open the drawer automatically, in a real project this would have added the ability to link to restaurants when sharing etc.

Sizing / Dimensionality: I wanted to use vw and vh units. I know we may be off spec in some areas because of it - but where it works, it does add some efficancy towards sizing and scaling

**Caveats**
Sizing (as listing in regrets)

Some strange issues with CORS on the Brave browsers - I believe this is just a Brave specific security issue

Did not test the production deployment process at all

Thank you for the consideration