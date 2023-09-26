---
title: TeamSnap Design System
intro: Modernizing TeamSnap's web presence with a pattern-driven approach.
thumb: img/teamsnap-system-cover.jpg
collection: portfolioWork
collection_label: UI Design + Development, Visual Design
project_link: true
featured: false
layout: case-study.html
id: TS-UI
type_productStrategy: false
type_productDesign: true
type_designSystem: false
type_research: true
type_leadership: true
type_dev: true
date: 2000-04-01
---

<section class="Article-section">

<header>

<h2 class="Section-title">Background</h2>
<h2 class="Article-sectionTitle">Introduction</h2>

</header>

TeamSnap is an all in one sports management platform that helps players, coaches, managers and sports organizations run all things sports. Features range from things like team and individual focused features around availability and maps to large level business reporting, payment collections and tournament scheduling functionality. I had just started with the company, brought in as a contractor to rebuild the marketing site and picked up some product design work for the sports organization line of business.  

### The Problem

Our mobile apps and logo had just been refreshed, we were wrapping up the new marketing site, but the entire web app was a bit dated. It was a sore thumb in our overall brand presence and was difficult to work on due to the massive amount of inconsistencies; both in code and design. Pages were laid out in tables, styles were inlined and designs were cobbled together in photoshop. It was difficult to get out new features because there was so much focus on maintenance. Way too often as one problem was solved, another would pop up as a result.

<figure class="Article-image">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-before.jpg" />
</figure>


> For a company with the brand promise of being the all in one platform for everything sports, our product offerings were disjointed due to the lack of visual consistency, feature parody and interactions.

### Primary User(s)

Being an internal project, the users for this project range pretty widely across the company and even extend to prospective employees and potential company acquisitions. It’s hard to bring in talented people with a core piece of the company offering in the state it was. The lack of a brand presence in our web app made it more difficult to demo and slowed customer growth. Ultimately focus was set around our product teams.

> Feature development was slow. We were constantly reinventing the wheel. Every decision in design, development and testing was unique. As a company our teams were isolated.

<figure class="Article-image">
  <img src="/../../img/teamsnap-ui/non-systems-team.jpg" />
</figure>

</section>

<section class="Article-section">

<header>

<h2 class="Section-title">
  Iteration One
  <small class="u-block u-padTopSm u-padBottomSm">Reskining the Web app</small>
</h2>

</header>

### Where to Start?
The immediate business need was to update the style of our web app to match our mobile apps, specifically the team web app. The team product designer at the time had a nice UI kit started for the team product and one of the devs had the idea around rewriting the HTML to support both the new styles and the old. I was split between marketing and the sports org product at the time but thought this was a project I could help with so asked to take the lead.

<figure class="Article-image u-padTopMd">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-start.jpg" />
</figure>

Coming off leading the effort to rebuild the marketing site I was eager to dive in get going in the web app, rewriting the HTML to support the newer styles and retrofitting the old styles to the new markup so we could toggle back and forth with a rollout.

### Goals

* Update the web app to match mobile.
* Make the web app styles toggle with a rollout.
* Build out a framework for easy reuse of design components.

### Early Conflict

<blockquote class="Blockquote Blockquote--centered Blockquote--largeText u-spaceBottomXl">
A few features into the Team Product, I realized scope needed to be cut and the project refocused to the most immediate point of value.
</blockquote>

<figure class="Article-image u-padTopMd">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-scope.jpg" />
</figure>

At first the three goals seemed reasonable but I failed to recognize the scale of the web app, the amount of resources that would be invested (including my own time) and how constraints of the project would effect long term decisions. 

### Redefining Goals
* Update the web app to match mobile.
* Make the web app styles toggle with a rollout.
* <s>Build out a framework for easy reuse of design components.</s>

Trying to do it all at once not only led to an unrealistic goal but clouded the work being done for the framework, since juggling styles had to be taken into account. So I came up with a plan to just deal with the current HTML that was there by combining old and new styles then overriding with additive classes.

<figure class="Article-image u-padTopMd">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/half-reskin.jpg" />
</figure>

<figure class="Article-image">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-team-products.jpg" />
</figure>

<blockquote class="Blockquote Blockquote--centered Blockquote--largeText u-spaceBottomXxl">
It added a little tech debt sure, but it was the fastest way to meet the most immediate business goals. That simple strategy also provided a great way of getting others involved since the specific tasks and immediate goal was better defined.
</blockquote>

<figure class="Article-image">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-Workflow.jpg" />
</figure>

</section>

<section class="Article-section">

<header>

<h2 class="Section-title">
  Iteration Two
  <small class="u-block u-padTopSm u-padBottomSm">Building a Design System</small>
</h2>

The CSS was a little bloated and some of the finer details were off, but all in all it was close to being consistent across all product.  More importantly though, now that we were only dealing with the new styles, we were in a great spot to focus on a framework, fine tune the web apps and tie up the design patterns being used across our ecosystem.

<div class="Grid u-flexAlignItemsCenter u-padTopMd">
  <div class="Grid-cell u-size1of12 u-sm-size2of12">
    <figure class="Article-image">
      <img class="u-centerBlock" src="/../../img/teamsnap-ui/jakobs-law.jpg" />
    </figure>
  </div>
    <div class="Grid-cell u-size11of12 u-sm-size10of12 u-padLeftMd">
    <blockquote class="Blockquote Blockquote--largeText u-padLeftMd">
      By leveraging existing mental models, we can create superior user experiences in which the user can focus on their task rather than learning new models. Patterns are foundational to that.
    </blockquote>
  </div>
</div>

</header>

### Where to Start?
One learning from iteration one was that this was a large undertaking and brining on another designer that had a lot of UI development experience to pair with would be extremely valuable and speed up the process. I started working with our Chief Creative Officer to bring on other designers with experience building frameworks. Brining on help allowed me to take on more of a PM role and focus on defining requirements and adoption. 

> Building a framework is one thing but getting people to buy in and use it is something else all together. In order to achieve consistency across all of TeamSnap, adoption was key.

### Defining Needs

Focusing on the users adopting our this framework, I started talking more with all the different teams working on various parts of our web presence, getting an idea of their needs and looking ahead at some of the business goals. It sounded like we needed to expand our scope a little to setup the foundation for all of TeamSnap web.

* Both the team and sports org product needed to share basic design elements  and components, as well as a way to contribute and collaborate on how the system fit into all parts of the app. The product front ends were a combination or ruby in parts, angular in parts and react in parts.
* Marketing Team needed to take advantage of basic design elements like color and typography, as well as some shared components. The marketing site frontend was basic html. They also wanted a way to contribute.
* Talking with some of the PMs, it sounded like we were looking to purchase other products and integrate them with ours so there was a need for new apps to at least use our basic design elements easily. Their front ends were unknown at this point.

<blockquote class="Blockquote Blockquote--centered Blockquote--largeText u-spaceTopMd u-spaceBottomXl">
We needed a solution that was flexible enough to be used on any part of the web, with any team and at various scales.
</blockquote>

<figure class="Article-image u-padTopMd">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-scale_two.jpg" />
  <figcaption>Estimating our adoption goals.</figcaption>
</figure>

### Framework Goals

* Can support entire web presence, including the marketing site.
* Consistency both in the visual design but also in the UX.
* Guidelines to adopt TeamSnap’s brand presence during a company acquisition.
* Speed up our design and development processes.
* Make contributing easy for people of various backgrounds.

<blockquote class="Blockquote Blockquote--largeText u-spaceTopLg">
Given the amount of flexibility needed I started focusing on basic design elements creating repeatable scales for color, typography and spacing to extend our base brand elements.
</blockquote>

### The Linear Color Scale

<div class="Grid">
  <figure class="Article-image Grid-cell u-sm-size8of12">
    <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-colorscale.jpg" />
  </figure>
  <figure class="Article-image Grid-cell u-sm-size4of12">
    <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-colorscalefunction.jpg" />
  </figure>
</div>

> A lot of times designers and developers will use the color picker to get a lighter or darker version but end up adjusting the hue in the process. The brand green for example can take on a more yellow or blueish hue.

Starting with color I created a color scale for lighter and darker variations without affecting the hue. Now it’s easy to create this in sketch and share with other designers, but the problem is there’s a lot of room for error in the various handoffs from person to person, so I wrote a <b>SASS function to directly reflect the scale being created in sketch to code</B>. So instead of trying to figure out the hex value for the shade of green that’s 10% darker, you could simply call the function scaleColor($colorVariable, x). X as a value could be positive or negative to make the color lighter of darker.

<figure class="Article-image">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/Thmeing.jpg" />
</figure>

One large benefit of the color scales backed by a function and variable architecture was that it opened the door for creating themes. On the team product I found that by using the same color scale and simply resetting the base color value, it allowed us to pretty widely change the color schemes, but since the underplaying structure for everything was still consistent they themes were too.

<figure class="Article-image">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/color_recomendations.jpg" />
</figure>

<blockquote class="Blockquote Blockquote--largeText u-spaceTopMd">
Having this standardized set of colors also allows us to provide guidance on which color range to use for things like text, borders and backgrounds.
</blockquote> 

### The Modular Type Scale

<div class="Grid">
  <figure class="Article-image Grid-cell u-sm-size8of12">
    <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-typescale.jpg" />
  </figure>
  <figure class="Article-image Grid-cell u-sm-size4of12">
    <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-typescalefunction.jpg" />
  </figure>
</div>

Then taking that notion of scaling further to typography, a modular scale was adopted so the way we size and space fonts all follow a consistent progression. With a modular scale of 1.125 every aspect of our typography progresses either by continually multiplying or dividing by 1.125; a 1/8 increment. The base of the scale could also be changed to adjust the font size throughout a project too. While a 16px base works well for marketing purposes, product needing to fit more content on the page could shift to a 13 or 14 pixel base and still remain consistent across the board. See more at <a href="https://www.modularscale.com/" target="_blank">modularscale.com</a>

<figure class="Article-image u-padTopMd">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/Typography-steps.jpg" />
</figure>

Using a modular scale provided a wide variety of font sizes that followed a consistent progression in a cleaner way compared to a linear scale like with color. Since modular steps progress slowly at smaller levels then increase as the font size increases, there was more of a cohesive contrast between steps.

### The 8pt Grid

<div class="Grid">
  <figure class="Article-image Grid-cell u-sm-size8of12">
    <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-spacescale.jpg" />
  </figure>
  <figure class="Article-image Grid-cell u-sm-size4of12">
    <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-spacescalefunction.jpg" />
  </figure>
</div>

Continuing with sizing and spacing, we decided on using an 8pt grid. Much of the time a standard increment for design and development is 5, but the difference between 5, 10, 15 and 20 can be pretty minimal leaving the creator left to make decisions around which value to use. A slightly more distanced set of values like 8, 16 and 24 however is much easier to see the difference in values and ultimately leads to more consistent decisions. Starting from a base unit of 8px, every step forward is an increment of 8 (16, 24, 32…) and every step backwards halves the base unit (4, 2, 1…), so every defined unit is a either a multiple or factor of 8. These units can be used to define the height of elements like buttons, inputs, and progress bars, as well as spacing of block elements like table cells, feedback, and panels, so as each progresses in size for various uses they do so in symmetry. Learn more about the 8pt grid at here

<figure class="Article-image u-padTopLg u-padBottomMd u-sm-size10of12 u-centerBlock">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-pixel-density.jpg" />
</figure>

<blockquote class="Blockquote Blockquote--largeText u-spaceTopMd">
When thinking about different devices and pixel densities, the 8pt grid also provides a clean way of scaling styles to various screens since 8 is easily divided into whole numbers.
</blockquote>

### Building up Components

Next we took those basic atoms and started applying them to molecules. We designed and built things like buttons, panels, tabs, tables, form inputs and stepped navigation, then documented them in a pattern library which highlighted the HTML structures and stored the CSS for reuse.

<h4 class="u-padTopMd u-padBottomLg u-colorInfo">Buttons Example</h4>

<figure class="Article-image">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/Components-buttons.jpg" />
</figure>

<h4 class="u-padTopMd u-padBottomLg u-colorInfo">Step Navigation Example</h4>

<figure class="Article-image">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/Components-stepnav.jpg" />
</figure>

<h4 class="u-padTopMd u-padBottomLg u-colorInfo">Progress Bars Example</h4>

<figure class="Article-image">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/Components-progress.jpg" />
</figure>

### Putting it all Together

And of course took those further to building components, screens, features and products for our customers to use. Our team liked to move fast, design in the browser and discuss flows, rather than be handed huge sets of mocks. This led to a lot of questions from both development and QA as to things like “which button do I use?”, “what spacing should I use here?”, “which alignment?” and so on. So I started defining all these decisions ahead of time, so in the flow of a project I just could simply hand over a link with guidance for specific patterns.

<figure class="Article-image u-padTopMd">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-flow.jpg" />
</figure>

<blockquote class="Blockquote Blockquote--centered Blockquote--largeText u-spaceTopMd">
One thing I realized was that it didn’t matter if the components were consistent if the usage was inconsistent, or if the details of the component were shifting based on who implemented.
</blockquote>

Numerical table columns for example should be right aligned so decimals line up making the column easier to scan, while text based columns should be left aligned since people read text left to right, scanning the first few letters of a column first.

<figure class="Article-image Grid-cell u-padBottomNone">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/component-definition.jpg" />
</figure>

<figure class="Article-image Grid-cell u-padBottomXxl">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/table-categories-definition.jpg" />
</figure>

Of course a pattern based design system needs central place of documentation for reference. The designer we hired to help lead our design system brought a lot of great experience with upgrading our Fabricator toolkit to Drizzle, and adding in a utility class system based on the Suit naming convention. I then went back and reworked the flow of the library to help provide help for devs getting started with the framework.

<figure class="Article-image u-padTopMd u-padBottomNone">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-pattern-library.jpg" />
</figure>

<figure class="Article-image u-padBottomMd">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/framework-distribution.jpg" />
</figure>

### Product Branding

With amount of consistency that we were creating I started looking at and playing with the notion of subtle inconsistencies to shift the design of a touchpoint to brand them in different ways, while still remaining consistent with the overall TeamSnap brand.

<h4 class="u-padTopMd">Team Product</h4>

* <strong>Personas:</strong> parent, player and fan
* <strong>Personality:</strong> fun, light hearted and active
* <strong>Content:</strong> light, personal
* <strong>Note:</strong> pairs with mobile app

<figure class="Article-image u-centerBlock">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/team-product-branding.jpg" />
</figure>

<h4 class="u-padTopMd">Sports Organizations Product</h4>

* <strong>Personas:</strong> sports admin, business owner
* <strong>Personality:</strong> professional, helpful and fun
* <strong>Content:</strong> heavy, work related
* <strong>Note:</strong> pairs with tournaments

<figure class="Article-image u-centerBlock">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/so-product-branding.jpg" />
</figure>

The team product leaned towards the light brand colors and open spacing for a more easy going look, while our sports org product could swing towards the darker brand colors and tighter spacing for a buttoned up professional look. These shifts in visual design details could be extended down to the things like border radius and component settings. Marketing needed to combine elements of both styles and expand on them in more eye catching ways

</section>

<figure class="Article-image Grid-cell u-padTopXxl">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/TeamSnap_UI_Screens.jpg" />
</figure>

<section class="Article-section">

<header>

<h2 class="Section-title">Measuring Success</h2>

</header>

<figure class="Article-image">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/measuring-adoption.jpg" />
</figure>

Going back to the goals of the framework, consistency in visual design, help new companies adopt our brand presence and make contribution easy, adoption was the primary measure of all three. So started reaching out to various teams to measure adoption, trying to gather an understanding of why some adopt and other don't. 

> Development speed was difficult to measure in a quantitative way, so focused on the speed of specific projects to and developer satisfaction. The consistent patterns definitely seemed to be speeding things up.

### Individual Adoption

<figure class="Article-image">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/analyzing_adoption.jpg" />
</figure>

As time went on pattern adoption became easier and it was more a matter of inserting into other company processes like design, development and QA on-boarding, as well as the hiring processes. The hope was to create future advocates by by helping them get started initially.

Analyzing where and how our design system could be included became increasingly important over time. Mapping employee flows and focusing my attention on specific points provided insight as to what parts of the process could be helped.

### Key Contributors

<figure class="Article-image">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/systems-team.jpg" />
</figure>

<blockquote class="Blockquote Blockquote--centered Blockquote--largeText u-spaceTopMd">
"Alone we can do so little; together we can do so much." – <i>Helen Keller</i>. This was very much a project about collaboration so I want to highlight some of the key contributor roles along with my own.
</blockquote>

#### Shane Foster, Designer & UI Developer:
The original web product designer with the initial UI Kit and a really smart idea about keeping the layouts and functionality of the site the same as to not disrupt the user flows on top of the large visual change. Also helped with the initial implementation.

#### Sara Lohr, Designer & UI Developer:
A really great designer and UI developer with a ton of experience building pattern libraries. Led our pattern library update by creating a utility based CSS strategy from the Suit naming convention, moving us from Fabricator to Drizzle, worked with ops to get the CSS moved to a CDN and setup the git submodule connection of our library repos. Also designed and developed many of the new components.

#### Mike Rienmiller, React Developer:
Took lead on converting our CSS components to React components, building the foundation for our how our CSS components were embedded in React. Collaborated on implementation of the new framework.

#### Josh Ray, React Developer:
Collaborated with Mike, Sara and I on implementation and led implementation of the library as an NPM module. 

#### Jen Prince, Designer & UI Developer:
New marketing design lead and product designer. Led design implementation of the new design system with the marketing site. Helped define requirements for iteration two. Paired on new design components.

#### Brad Cypert, React Developer:
Took lead on the React aspect of the pattern library and continues to advance JS patterns at TeamSnap.

#### Kyle Bacon, Designer & UI Developer:
Marketing designer and developer that helped bring much of the new design system to marketing. Worked on some of the library components.

#### Other contributors and advocates
Alex Brignac, Jen Shaeffer, Stephanie Cepressie, Amy Russell, Heather Franstik, Heather LeRoy, Josh Antweiler, Matt Hopson... and many others.

### My Role
#### Designer, UI Developer and Project Manager
* Led development for the first iteration, designing and developing components, creating the initial framework, the rollout strategy and pivoting to the simplified implementation approach based on business needs.
* Co-led upgrading our pattern library and implementing the new CSS patterns by defining problems, business needs, helping others contribute through documentation and collaborating on ways to implement. 
* Designed and developed our color, type and spacing systems with the function and variable architecture.
* Designed and developed our color themes and product branding ideas.
* Designed and developed many of the new components.
* Defined and documented usage and details of several components.
* Worked with our CCO and hiring teams to bring in pattern driven designers and developers.
* Worked with managers, designers, developers and QA to adopt and find ways to advance a component-driven approach.


</section>

<section class="Article-section u-padBottomXxl">

<header>

<h2 class="Section-title">Lessons Learned</h2>

</header>

### Start Small
I new right from the start where I wanted to take us, but my initial mistake was trying to get us there right off the bat. Trying to implement a framework and update the HTML to support both old and new styles was overly ambitious. In hindsight I wish I would’ve just hacked on what’s there to get us to the new styles ASAP then implement the new framework after the old styles were gone. Trying to do both led to some decisions that didn’t serve the longer term strategy.

### Map out Milestones
Similar to starting small and hitting more immediate goals, it’s equally important to start by defining those goals so at the very least so they can be communicated out. It’s a lean principle to provide value early and often, and I think that very much applies here too. This allows you to paint the larger picture while setting expectations of what will be delivered when.

### Be Persistent & Play the Role that’s Needed
Much of this was a 10% time project and it can be a long hard fought road to follow when it’s not your primary job, but look to make time when possible, keep chipping away, do what’s needed to push the project toward its goal and just keep adjusting the your process to fit your time and needs.

### Pair with people that know more than you
Lastly, implementing a process is hard and ultimately it comes down to finding people that align with the strategy. Reach out to those that can help and try to set up times to work with them, discuss the vision and see how it can serve you both. Make adjustments as needed. Most importantly, find and pair people with different skills than you. At the very least you can learn a ton in the process.

## What's Next
One part of this project I never got a chance to do but wanted to, pulling the full usage documentation into the pattern library to make it a very clean one stop shop for all things TeamSnap design patterns. Currently the usage docs are in Figma.

<figure class="Article-image u-padTopMd">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/sync-library.jpg" />
</figure>

And I’d like to expand on the component usage documention by creating a system of compnent based testing. Since design patterns are so singular in their purpose it's easy to user test patterns and make subtle refiniments through A/B tests that all build on eachother and progress the system as a whole. The goal is to break it down to a system of pattern A accomplishes X goal more efficiantly than pattern B.

<figure class="Article-image u-padTopMd">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/ab-testing.jpg" />
</figure>

</section>

<footer class="Article-footer">
  <div class="Grid">
    <div class="Grid-Cell u-size1of1 u-sm-size1of2 u-textCenter">
      <a class="figma_badge" href="https://www.figma.com/file/8wE2P48ERYpIlksauLwnNk/TeamSnap-Design-System?node-id=763%3A12319" target="_blank">
      <strong class="u-block u-padBottomMd">View the Project on Figma</strong>
      <img src="/../../img/figma_badge.png" />
      </a>
    </div>
    <div class="Grid-Cell u-size1of1 u-sm-size1of2 u-sm-spaceTopNone u-spaceTopXl">
      <a class="figma_badge" href="https://teamsnap-ui-patterns.netlify.app/" target="_blank">
      <strong class="u-block u-padBottomMd">View the Pattern library</strong>
      <img src="/../../img/teamsnap-ui/ui-pattern-library.jpg" />
      </a>
    </div>
  </div>
</footer>
