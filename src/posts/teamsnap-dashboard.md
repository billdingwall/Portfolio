---
title: "TeamSnap Dashboard"
intro: An onboarding experiences for TeamSnap's enterprise app
thumb: img/dashboard/portfolio_dashboard_cover.jpg
collection: portfolioWork
collection_label: UX + UI Design, Visual Design
project_link: true
featured: true
layout: article.html
id: TS-Dashboard
date: 2000-05-01
---

<section class="Article-section">

<header>

<h2 class="Section-title">Product Background</h2>

TeamSnap’s Sports Org product is a an all in one platform for sports organizations of all sizes and sport to manage their business. There’s a wide range of features from invoicing, team management, scheduling, messaging and registration. 

Originally it was built as an MVP by duplicating the team product then adding in capabilities to link multiple teams together and organize them within divisions. Given that, there wasn’t always a lot of thought out into usability of the app, more the basic functionality.

</header>

### The Problem

<figure class="Article-image">
  <img src="/../../img/dashboard/adoption_funnel.jpg" />
</figure>

<blockquote class="Blockquote Blockquote--centered Blockquote--largeText u-spaceBottomXl">
We were seeing extremely low product adoption without a personal onboarding from CX. <b>Less than 20%</b> success without onboarding vs greater than 85% adoption with CX.
</blockquote>

Our customer support is great, but having to manually onboard everyone leads to lower profit margins and forced us to stop serving lower tier customers.

Churn rates were also on the rise going up more than 5% over the last couple years. Part of this was our competitors catching up in the Team space and new competitors pulling ahead in other aspects of org management, but also our app was becoming more complex as we tried to keep up and to hit product market fit.

### Opportunity 

One of our primary business goals was to expand our Club user base. We had worked on climbing the pyramid and targeting National Governing Bodies and Leagues, but ultimately decided the best market opportunity was in the Club space.

<figure class="Article-image">
  <img src="/../../img/dashboard/market_adoption.jpg" />
</figure>

With tier C & D customers no longer receiving a personal onboarding, there was a lot of opportunity from a design standpoint to keep those customers by improving the onboarding experience.

While they are lower paying customers, we could still make decent profit off those customers by keeping the operating costs down. Improving those onboarding experience could also help with churn on our higher level customers when CX isn’t available.

</section>

<section class="Article-section">

<header>

## Strategy

Pair with customer facing parts of the company to analyze user flows both within the sports org product and with their overall journey to become a TeamSnap Sports Organizations customer. 

<figure class="Article-image">
  <img src="/../../img/dashboard/adoption_map.jpg" />
</figure>

#### Goals
* Highlight customer pain points that may lead to decreased adoption
* Implement multiple solutions to increase overall adoption.
* Incrementally reduce churn across all tiers and increase immediate adoption with tier C & D customers.

</header>

### Primary User in Tier C & D

<div class="Grid Persona">
<figure class="Grid-cell u-xs-size6of12 u-sm-size5of12">
  <img  class="u-border" src="/../../img/dashboard/manager_martha.jpg" />
</figure>
<div class="Grid-cell u-xs-size6of12 u-sm-size7of12">
  <h4 class="Persona-name u-padTopMd u-xs-padTopNone">Manager Martha</h4>
  <ul class="Persona-details">
    <li><span class="Persona-detailsTitle">Age:</span> 36</li>
    <li><span class="Persona-detailsTitle">Location:</span> Boulder Colorado</li>
    <li><span class="Persona-detailsTitle">Education:</span> BA, History</li>
    <li><span class="Persona-detailsTitle">Job:</span> Softball Coach and Manager</li>
    <li><span class="Persona-detailsTitle">Bio:</span> Martha loves softball. She played throughout high school and one year in college, now she takes that passion for soccer and brings that to her small travel softball club business.</li>
    <li><span class="Persona-detailsTitle">Organization:</span> Boulder Sports is a softball organization that manages 4 travel soccer teams. There’s only a handful of teams but players pay up to $1,000 for the season.</li>
  </ul>
</div>
</div>

#### The key things to know about Martha are: 
* She’s a coach at heart and does not want to sit in front of a computer, she wants to be on the field working with her coaches and her players. 
* She’s not very tech savvy. Has a smart phone and computer but doesn’t spend much time on either and using an interface isn’t the most intuitive thing for her.
* She doesn’t enjoy sitting in front of a computer so doesn’t have much patience for complexity, tedious process or time wasted in front of a screen.

</div>

### Martha’s Journey with TeamSnap

Pairing with CX & Sales to map our customer’s experiences we were able to gain initial insights into our customer problems at different stages in a more rapid manor compared to reaching out to customers directly.

<figure class="Article-image">
  <img src="/../../img/dashboard/Journey-map.jpg" />
</figure>

#### Key Insights
* Issues with creating a team and divisions. Uncertainty about what to do with a division.
* Users don’t always know how to setup their division structure and sometimes it’s easier to do after knowing who’s playing this season.
* Users have to hunt and peck through the tabs to figure out what the proper next step is.
* After purchasing, users often feel let down and abandoned since its not as intuitive as the team product and they no longer have someone holding their hand along the way.
* After people get past onboarding it’s also hard to see how their org is doing
* People have to export spreadsheets from the app and piece together the info for the full view
* Hard to run a business through TeamSnap, just manages teams and games

#### Comparing Insights to Production

When comparing notes from the journey mapping session to the UI it was really easy to see that we weren’t doing much to help them get started. 

<figure class="Article-image">
  <img src="/../../img/dashboard/Old-Site-Arch.jpg" />
</figure>

* There was little to no info in the welcome email and their first screen when after navigating to their org is a choice to add a team or division, which we know isn’t necessarily a choice they can easily make off the bat.
* Also when ranking the key tasks for user success, they’re very scattered through the products tab order and don’t necessarily follow a common order for setting up a sports organization.

#### Discussing Ideas from Our Analysis

<figure class="Article-image">
  <img src="/../../img/dashboard/Impact-graph.jpg" />
</figure>

When looking over some of the recommendations covered in the journey map we started weighing them against each other with onboarding and reporting being the primary factors for assessing impact. 

<blockquote class="Blockquote Blockquote--centered Blockquote--largeText u-spaceBottomXl">
We decided to move forward with a few ideas but the primary was to build an org level dashboard that could both help new users get started with the product and give seasoned users a space to see a consolidated overview of key org functions.
</blockquote>

</section>

<section class="Article-section">

<header>

# Building the Dashboard

</header>

### Ideating & Scoping

A dashboard can consist of a lot of things and provide a lot of detail into many things, so we kicked off this project with a cross department brainstorming session including everyone from our product team, but also people from sales and support.

<figure class="Article-image">
  <img src="/../../img/dashboard/Brainstorm-ideas.jpg" />
</figure>

> We had a lot of great ideas but one wrinkle with building the dashboard was that we decided to do it as a one week hackathon, so defining scope was paramount

I then took those ideas and started mocking up how they might work in a set of componentized widgets. Below are a just a couple examples. We went through a process of vetting scope on a handful of ideas, talking through endpoints that would be required, ones we already had and level of difficulty in the new ones that were needed. 

<figure class="Article-image">
  <figcaption class="u-padBottomMd">Getting Started Panel Scoping</figcaption>
  <img src="/../../img/dashboard/wireframes_getting-started.jpg" />
</figure>

State management was also a key talking point since we many of these widgets would ideally change based on the stage of the journey the user was in. Getting started would go away after completing all the tasks and the body widgets would respond to various system states.

<figure class="Article-image">
  <figcaption class="u-padBottomMd">Widget Scoping</figcaption>
  <img src="/../../img/dashboard/wireframe_body.jpg" />
</figure>

<blockquote class="Blockquote Blockquote--centered Blockquote--largeText u-spaceTopMd u-spaceBottomXl">
Early collaboration between design and development, with both sides getting a good idea of what needed to be built was really effective in defining a reasonable scope.
</blockquote>

### Finalizing Widget Designs

No that we had a good idea of what to build and had a good idea how long it might take, I started rounding out the visual design of each component and finalized the details of the actions and info surfaced.

<figure class="Article-image">
  <figcaption class="u-padBottomMd">Getting Started Widget</figcaption>
  <img src="/../../img/dashboard/component_getting_started.jpg" />
</figure>

<figure class="Article-image">
  <figcaption class="u-padBottomMd">Invoicing Widget</figcaption>
  <img src="/../../img/dashboard/component_invoice_widget.jpg" />
</figure>

<figure class="Article-image">
  <figcaption class="u-padBottomMd">Registration Widget</figcaption>
  <img src="/../../img/dashboard/component_registration_widget.jpg" />
</figure>

<figure class="Article-image">
  <figcaption class="u-padBottomMd">Organization Widget</figcaption>
  <img src="/../../img/dashboard/component_org_widget.jpg" />
</figure>

<figure class="Article-image">
  <figcaption class="u-padBottomMd">Messaging & Quick links</figcaption>
  <img src="/../../img/dashboard/component_links-upsell_widget.jpg" />
</figure>

<figure class="Article-image">
  <figcaption class="u-padBottomMd">Putting it all together</figcaption>
  <img src="/../../img/dashboard/New-dashboard-full.jpg" />
</figure>

Throughout this whole project we really tried to anchor design decisions and component states to the customer journey, both in each individual component and the dashboard as a whole. 


<blockquote class="Blockquote Blockquote--centered Blockquote--largeText u-spaceTopMd u-spaceBottomXl">
With the scope of the work being so well defined heading into the week and the truly agile mentality of the team we were able to successfully get it done in the defined time frame.
</blockquote>

Everyone jumped in and contributed where they could to meet the goal.  Backend devs and design writing react, react devs creating endpoints, QA & PMs creating AppCues walkthroughs, all in all it was the most agile project I’ve been a part of.

</section>

<section class="Article-section">

## Rounding Out the Dashboard
With the dashboard work coming to an end, I started going back and knocking out some of the smaller projects that played off of and enanced the dashboard changes. For example paring with marketing to update the email to provide more direct entries into specific tasks, then update the screens they landed on had much more contextual help to get them going.

<figure class="Article-image">
  <img src="/../../img/dashboard/new-onboarding-email-no-data.jpg" />
</figure>

And updated reorder the tab structure to flow that better follow the user journey; “being people in”, “organize them on teams” and “run the day to day operations”.

<figure class="Article-image u-padTopMd">
  <img src="/../../img/dashboard/New-Site-Arch.jpg" />
</figure>

</section>

<section class="Article-section u-padBottomMd">

## My Roles

I played a lot of different roles with this project, really tried to own the collaboration aspect of it to help push things along and gain buy in from our key stakeholders.

* Project manager, Designer, Front End Dev
* scheduled all meetings 
* organizing much of the collaboration
* working the team to plan out the week
* Put together the project board in InVision and the wireframe evaluations in Dropbox paper
* Ran the dashboard brainstorming session
* Took part in the journey mapping session run by our head of CX
* Designed the components and dashboard as a whole
* Championed the onboarding strategy as a whole, highlighting the opportunity along the way
* Write the html and css for the graphs
* Write React, HTML and CSS for the parts of the the getting started panel and as space
* Wrote Ruby, HTML and CSS for the tab reorder and no data screens on tabs

</section>


<footer class="Article-footer">
  <div class="Grid">
    <div class="Grid-Cell u-size1of1 u-sm-size1of2 u-textCenter">
      <a class="figma_badge" href="https://projects.invisionapp.com/freehand/document/RkvEijVl7" target="_blank">
      <strong class="u-block u-padBottomMd">View the Project on Invision</strong>
      <img src="/../../img/invision_badge.png" />
      </a>
    </div>
  </div>
</footer>
