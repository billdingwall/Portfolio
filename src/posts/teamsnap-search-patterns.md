---
title: "TeamSnap Search Patterns"
intro: Simplifying search patterns for TeamSnap's enterprise app.
thumb: img/search-patterns/portfolio_search_cover.jpg
collection: portfolioWork
collection_label: UX + UI Design, Visual Design
project_link: true
featured: true
layout: article.html
id: TS-Search
date: 2000-03-01
---

<section class="Article-section">

<header>

<h2 class="Section-title">Product Background</h2>

TeamSnap’s Sports Org product is a an all in one platform for sports businesses of all sizes and sport to manage their business. Smaller organizations might have less than a hundred members across a handful of teams, while larger ones may have up to <b>10,000 members</b> and over a hundred teams. Features range from scheduling games, running tournaments, league standings, managing locations, organizing teams, messaging members, invoicing, registration, data exports and so on.

Now, the current product only handles one season at a time but our upcoming plans include features like cross season member management which would bring the potential number of users on the system from 10k to 20k, 30k,  <b>40k members spread across hundreds of teams in past and present seasons</b>.

Our general product strategy moving forward is geared around bringing reporting in app too. A lot of our competitors also relied on data exports as the way to satisfy reporting needs and as a whole their products were very disjointed. 

> We viewed easy access to data that helps them run their business as a big differentiator. Search is a backbone for surfacing that data.

</header>

### Primary User

<div class="Grid Persona">
<figure class="Grid-cell u-xs-size6of12 u-sm-size5of12">
  <img  class="u-border" src="/../../img/search-patterns/admin-anthony.jpg" />
</figure>
<div class="Grid-cell u-xs-size6of12 u-sm-size7of12">
  <h4 class="Persona-name u-padTopMd u-xs-padTopNone">Admin Anthony</h4>
  <ul class="Persona-details">
    <li><span class="Persona-detailsTitle">Age:</span> 44</li>
    <li><span class="Persona-detailsTitle">Location:</span> Kansas City, MO</li>
    <li><span class="Persona-detailsTitle">Education:</span> BA, Communications</li>
    <li><span class="Persona-detailsTitle">Job:</span> Supply Chain Manager</li>
    <li><span class="Persona-detailsTitle">Bio:</span> Married with 2 kids. Tony grew up playing basketball and now volunteers as the admin for his oldest son’s basketball league.</li>
    <li><span class="Persona-detailsTitle">Organization:</span> Boulder Sports is a multi sport organization that manages up to 10,000 members across several sports in a single season.</li>
  </ul>
</div>
</div>

#### The key things to know about Anthony are: 
* He’s a volunteer, sports management is not his day job and he’s really only in it for his kids. He doesn't have time for complexity.
* Being a father to a kid in a travel organization he’s familiar with a lot of travel accommodation sites like Expedia, AirBnB, South West Airlines.

Typically he’s trying to accomplish a few tasks here and there after work or on the weekends. So when he starts hitting snags because somethings hard to use, slow, cumbersome or just plain confusing, the drop off rates for that session skyrocket and his satisfaction with the product plummets.

</div>

### The Problem

Our search experiences weren't great to say the least and we were getting a lot of negative feedback from our customers. We had other searches in places like invoicing, messaging and reporting, some better than others, but all them inconsitent and hard to use. With Rostering, we made some search updates in the past but never really set a great foundation and over time, search inputs piled up as new requirements came in and different teams added on.

<blockquote class="Blockquote Blockquote--largeText">

“It’s not always clear who is showing up in results and why”

“Search is intimidating and hard to use”

“I wish it was easier.”

</blockquote>

<figure class="Article-image">
  <figcaption class="u-padBottomMd">Member Tab Search</figcaption>
  <img  class="u-border" src="/../../img/search-patterns/Old_UI_article.jpg" />
</figure>

<figure class="Article-image">
  <figcaption class="u-padBottomMd">Rostering Tab Search</figcaption>
  <img  class="u-border" src="/../../img/search-patterns/Old_UI_two_article.jpg" />
</figure>

</section>

<section class="Article-section">

<header>

<h2 class="Section-title">Search Research</h2>

</header>

### Strategy

<figure class="Article-image u-padBottomNone">
  <img src="/../../img/search-patterns/search-scope.jpg" />
</figure>

<blockquote class="Blockquote Blockquote--centered Blockquote--largeText">
Two different teams I was on were updating the members and rostering tabs searches respectively, but given our past struggles, the amount of searching we had across the app and the data heavy roadmap, I wanted to provide a strategy for search moving forward.
</blockquote>

### Quantitative Findings

The goal was to see if we could determine any intent. Based on some conversations with customers, our assumption was that members would be more specific, focused on finding individuals vs rostering which is more about building segments of users. That assumption proved out to be true, but we also got some really good info for setting scope and selecting what criteria was needed on which feature. 

> The current members search had much more than what was needed, adding the the user experiences being cumbersome and intimidating.

<figure class="Article-image">
  <img src="/../../img/search-patterns/Quanitative_members-tab.jpg" />
</figure>

#### Members Tab Findings

1. First Name and Last Name are hands down the most used criteria
2. Email was third, then team or division next
3. Almost always just a single criteria used 

<figure class="Article-image">
  <img src="/../../img/search-patterns/Quanitativ_rostering_tab.jpg" />
</figure>

#### Rostering Tab Findings

1. Whether or not they were on a team was easily the most used
2. Registration was next with about 45% of the searches
3. Custom fields and gender were next at around 10% usage
4. Name searching was getting some usage for individual actions
5. Generally speaking there were multiple pieces of criteria used

### Qualitative Findings

Next, started studying how people where interacting with the two search features through a combination of FullStory and unmoderated user testing, focusing a little more on rostering since it was the more complex one with more negative feedback. There were a handful of things that stood out, but these stood out the most.

<figure class="Article-image">
  <img src="/../../img/search-patterns/Qualitative_findings_article.jpg" />
</figure>

#### Positive Notes
1. The upfront options led to fast searches if the user was comfortable with it.
2. There weren’t many invalid searches being created on the members tab search.

#### Negative Notes

1. We’re applying search criteria without any indication. This is likely the leading cause of confusion, because if someone searches for members on a team and doesn't notice that we automatically remove them from the ui, it doesn't reflect their mental model of who is on the team. 
2. Users read this as “I want to see this AND this AND this..” confusing it with "OR" logic. Once users get tripped up, a common use pattern is to add more filters thinking that will widen the scope when in fact it does the opposite.
3. The false “active” states add to the difficulty of reading the page. In user testing something noticed was that when people start hitting these dead ends and looking around at the UI to self correct, they really struggle to make sense of how it all ties together.
4. Having users select an operator is added complexity and slows them down. Just another piece of complexity that really isn't needed. Users typically just glance over the option or notice it and skip.
5. The amount of options presented at once made it hard to find a starting point. On top of taking up so much space and pushing the actions below the fold, a lot of users in testing mentioned how scary, intimidating or overwhelming the search was to get started with. This matched internal and customer feedback.
6. It’s so much smoother when they don’t need to deal with the search. More just a note for the future, but if we can surface data as they need it, without forcing them to search, that would be the most ideal solution.

<blockquote class="Blockquote Blockquote--centered Blockquote--largeText u-spaceTopMd">
When one of the issues caused an invalid search, all the other issues were magnified as the user tried to evaluate the UI and self correct. Abandonment was the usual result.
</blockquote>

### Interaction Comparisons

Also started looking around at other search experiences and brainstormed with other members of the team. We discussed some of our competitors sure, but also Amazon, Facebook, AirBnb and a few others. Then started comparing those interactions with ours, trying to analyze what it was about those UI that’s made theme so good.

<figure class="Article-image u-padBottomNone">
  <img src="/../../img/search-patterns/interaction_study_intro.jpg" />
</figure>

* Question marks point to a user decision
* Dots mark input interactions
* Screens mark steps in the flow (ex: adding or changing new criteria)

<hr class="Divider--space u-padBottomNone" />

#### Individual Search Comparison

<blockquote class="u-spaceBottomLg Blockquote--largeText">
<b>User Task:</b> Find Coach Carl Aarons by first name
</blockquote>

<figure class="Article-image">
  <img src="/../../img/search-patterns/interaction_comp_one.jpg" />
</figure>

Disconnecting first name from last and forcing them to change criteria was adding an unneeded step and the long list of options just added to it being combersome.

<figure class="Article-image u-padTopMd">
  <img src="/../../img/search-patterns/interaction_comp_two.jpg" />
</figure>

A direct path to search based on first and last name was all 90% of our users needed, the other use cases were secondary. This option played well to those needs.

<figure class="Article-image u-padTopMd">
  <img src="/../../img/search-patterns/individual_comp_three.jpg" />
</figure>

The typeahead solution played to those same user needs but speed up the time to action by removing the need for search results and gave direct paths to users through the input. It also took away the need for initiating the search, removing one more extraneous click.

<hr class="Divider--space u-padBottomNone" />

#### compund Search Comparision

<blockquote class="u-spaceBottomLg Blockquote--largeText">
  <b>User Task:</b> Find all players not on a team in <i>either</i> the spring soccer, spring basketball or spring hockey divisions
</blockquote>

<figure class="Article-image">
  <img src="/../../img/search-patterns/compound_interction-comp.jpg" />
</figure>

Some other search patterns we looked at in FullStory and AppCues did follow this same query builder pattern and it can be powerful with the right user, problem though was that Anthony wasn't a power user. This pattern forces users to understand conditional logic, bringing all the complexity straight to the UI and doesn't allow for much guidance to a successful search. In this use case adding multiple teams greatly decreases the chances for search results since players would have to be on both teams. Adding OR logic would require some fairly complicated UI changes too, forcing us to introduce the idea of “logic groups”. Having to “add” criteria also added to the cumbersome nature of our searching.

<figure class="Article-image u-padTopMd">
  <img src="/../../img/search-patterns/compound_interction-comp_two.jpg" />
</figure>

This AirBnb style grouped search did a really nice job of hiding logic complexity, created really clean spaces to explain difficult concepts and converted options selected into human readable terms. Instead of asking users to piece together UI inputs, we gave them easy to read text.

### Defining Patterns

Then taking those interaction studies and breaking them down into some basic patterns that can be re-applied in various ways. The two primary patterns of categorizing and condensing both play on Hick’s Law and the notion of reducing stimuli to give users clear and direct choices.

#### Categorize

<figure class="Article-image u-padTopMd">
  <img src="/../../img/search-patterns/patterns_catergorize.jpg" />
</figure>

Categorizing search inputs was a great way to guide them to successful searches. Ideally building around the most important piece of criteria then giving them the means to refine or change that initial search type. This can be expanded upon for complex segment builders by giving them categories to interact with. Those categoriztions of search inputs builds can be built up to satisfy varying complexity of needs; ranging from a single input to many.

<figure class="Article-image">
  <img src="/../../img/search-patterns/patterns_building.jpg" />
</figure>

<blockquote class="Blockquote u-spaceBottomXl">Ideally when using multiple filter groups, card sorting would be used to either help determine those groupings or refine and validate the grouping we decided on.</blockquote>

<figure class="Article-image">
  <img src="/../../img/search-patterns/patterns_card-sorting.jpg" />
</figure>

#### Condense

Finally complex inputs should be condensed into simplified singular ones. For example first, last and an operator into a single full name input. Stepped inputs like registration form, fee and option could also benefit from this approach; especially with a typeahead component.

<figure class="Article-image">
  <img src="/../../img/search-patterns/patterns_condense.jpg" />
</figure>

### Search UI Kit

To round out the visual design I worked on quick UI kit focusing on the visual design of the new patterns and how those components could fit into our app in different ways.

<figure class="Article-image">
  <img src="/../../img/search-patterns/uI-kit.jpg" />
</figure>

<figure class="Article-image">
  <figcaption class="u-padBottomMd">Simple Search</figcaption>
  <img src="/../../img/search-patterns/future_usage_simple.jpg" />
</figure>

<figure class="Article-image">
  <figcaption class="u-padBottomMd">Simple Search & Filter</figcaption>
  <img src="/../../img/search-patterns/future_usage_simple_plus.jpg" />
</figure>

<figure class="Article-image">
  <figcaption class="u-padBottomMd">Page Level Filter</figcaption>
  <img src="/../../img/search-patterns/future_usage_page-filter.jpg" />
</figure>

<figure class="Article-image">
  <figcaption class="u-padBottomMd">Compound Searching</figcaption>
  <img src="/../../img/search-patterns/future_usage_compound.jpg" />
</figure>

### Distilling Principles

All this research is difficult to bring up in the flow of a conversation so took a moment to distill it all down to some basic principles that tie back to the research and could easily be used as talking points.

<div class="Article-feature">

<figure class="u-padBottomNone">
  <img src="/../../img/search-patterns/ux-principles.png" />
</figure>

1. <span class="u-block u-textLarge">Applied search criteria must have an indicator</span> otherwise users are starting with a false data set and we’re breaking their mental modal of the data from the start.
2. <span class="u-block u-textLarge">Make applied search criteria human readable</span> So favor text strings over conditional logic and large groups of menu options so it takes less work to understand what criteria is applied.
3. <span class="u-block u-textLarge">User intent should drive the design</span> Really consider the primary goal of the feature and how search facilitates that, then make it unique to that goal.
4. <span class="u-block u-textLarge">Categorize inputs to guide users to successful searches</span> By organizing inputs into categories we can help users enter better combinations of criteria and give them clearer paths in compound searches.
5. <span class="u-block u-textLarge">Condense inputs to remove complexity</span> By removing options they don’t need and condensing complex options we can limit the clicks needed as well as remove extraneous inputs that lead to invalid searches.
6. <span class="u-block u-textLarge">The best search is one not needed</span> If we can just show the results they need, do it. Consider the overall flow the user is taking to get to specific information and look for patterns in common searches to define defaults and the overall experience around the search.

</div>

### Measuring Success

<figure class="Article-image">
  <img src="/../../img/search-patterns/goals_metrics_funnels.jpg" />
</figure>

* <span class="u-block u-textLarge">Decrease Time to search</span> Gives us an measure of to how simple the search is to use.
* <span class="u-block u-textLarge">Decrease Time to action</span> Serves as an indication of how connected the search is to the actual data.
* <span class="u-block u-textLarge">Increase Valid searches</span> Provides insight as to how confusing the search is.

<b>Hypothesis:</b> by targeting these user metrics we can decrease session dropoff and increase adoption; more so on rostering. The more we can improve key areas of member management the more we can <b>increase our retention rate</b>, increase booking numbers and overall profit.

</section>

<section class="Article-section">

<header>

<h2 class="Section-title">Final Variations & Team Discussion</h2>

</header>

### Members Tab

<figure class="Article-image">
  <img src="/../../img/search-patterns/Members_final.jpg" />
</figure>

The scope of the typeahed component was just too much and ultimately we went with a simple full name input, condensing the first name, last name and operator inputs from before. 

<blockquote class="Blockquote Blockquote--largeText Blockquote--centered u-spaceTopMd">
We felt like the quicker iteration was still a big improvement and really wanted to learn how it effected the time to search and action metrics as well as drop off between search and action, to see if type typeahead was needed.
</blockquote>

### Rostering Tab

<figure class="Article-image">
  <img src="/../../img/search-patterns/Rostering_final.jpg" />
</figure>

With the rostering team they initially wanted to go with the old version of member tab style search, the query builder pattern, since their was already a code in place previously. They wanted to learn how that pattern would effect dropoff on the rostering tab as apposed to members tab.

<blockquote class="Blockquote Blockquote--largeText Blockquote--centered u-spaceTopMd">
After walking through and breaking down the interactions of the new design with the team, comparing them to our goals, we decided to invest in the new categorized search pattern.
</blockquote>

</section>

<section class="Article-section">

### My Role

* Led design of both implementations as well as the patterns.
* Led Research for the qualitative, quantitative and competitor analysis to define requirements.
* Led team discussions around choosing an option and worked with team on defining scope.
* Paired with PMs on measures of success and some of the qualitative analysis
* Collaborated with back end developers on search capabilities given the limitations of our data structure.
* Provided CSS guidence to front end developers on how to build the UI for the new searches patterns.

### Learnings

We didn’t have a lot of resources dedicated to setting up analytics so getting some of these numbers were difficult to do at scale, but measuring a small sample size through FullStory the number of bad searches had dropped to nearly nothing since we weren’t allowing it in the UI, which in term speed up time to results and ultimately time to action significantly.

<blockquote class="u-spaceBottomLg u-spaceTopLg Blockquote--largeText Blockquote--centered">
Providing patterns, principles, tasks and user metrics to tie our efforts back to worked well in leading discussions. It provided a focused and objective platform to speak on.
</blockquote>

### Next Steps

#### Refine our Metrics Funnel
Continue to work on a metrics funnel so as we make updates to both the search and results, we get a clear picture of the changes effect without manual monitoring. Then directly correlating them back to larger product and business goals to try and put a dollar amount on our efforts as a team. The goal is to get it down to a formula of as x decreases, y increases by z.

<figure class="Article-image u-padTopMd">
  <img src="/../../img/search-patterns/next_steps.jpg" />
</figure>

#### Follow up on Principle Six
With this project being specifically focused on the manual search experience, didn’t really get a chance to map out user flows and come up with ideas of how to automatically surface the info they need. I’d like to expand on that notion, especially with all the reporting work coming up.

<figure class="Article-image u-padTopMd">
  <img src="/../../img/search-patterns/next-steps-flow.jpg" />
</figure>

</section>

<footer class="Article-footer">
<a class="figma_badge" href="https://www.figma.com/file/IhYzCH8PprPUFOP2N6jyK3/TeamSnap-Search-Patterns?node-id=734%3A12319" target="_blank">
<strong class="u-block u-padBottomMd">View the Project on Figma</strong>
<img src="/../../img/figma_badge.png" />
</a>
</footer>
