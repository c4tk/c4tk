---
title: Challenges
cwd: src/content/events/austin/2014/challenges
---
## <i class="icon fa-flag"></i> Challenges

The challenges will be announced on August 15th. Please come back then to learn more about our challenges.

In case you are already interested in or working on a project that is aligned with the Transforming Lives theme of Create for the Kingdom, don’t change course. Entire, pre-existing teams are welcome to join and individuals should come prepared to pitch your project at the Create for the Kingdom to recruit a team to work with you.

Non-profits that are well aligned the the Create for the Kingdom and have a need for a film, game or software should contact the organizers using the contact form in this page.

{{#compose src="*.md" cwd=cwd}}
<div class="row">
  <div class="3u">
    <h3>{{@title}}</h3> 
  </div>
  <div class="9u challenge-description">
    <div class="expander intro">
      <span class="toggle-switch"></span>
      {{@intro}} 
    </div>
    <div class="content">
{{#markdown}}
{{{@content}}}
{{/markdown}}
    <h3>Champions</h3>
    {{#each champions}}
      <img src="{{../assets}}/images/sponsors/{{this.logo}}" alt="{{this.name}}"/>
    {{/each}}
    </div>
  </div>
</div>
{{/compose}}
<br/>
{{> register-button}}
