---
title: Challenges
cwd: src/content/events/global/2016/challenges
cwd1: src/content/events/seattle/2016/challenges
---
## <i class="icon fa-flag"></i> Challenges

Here are the global challenges to get you started. Please remember that more challenges may be presented between now and the first day of the Hackathon.

In case you are already interested or working on a project, don’t change course. Make sure you submit your project on [DevPost](http://c4tkglobal2016.devpost.com/), and check the projects others are submitting there. Keep in mind that your project must be aligned with the spirit of the Code for the Kingdom. Please come prepared to pitch your project at the Hackathon so that you can recruit teams to work on them.

# Global Challenges
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

    <h3>Champion</h3>
    {{#each champions}}
      <a href="{{this.url}}">
      <img src="{{../assets}}/images/sponsors/{{this.logo}}" alt="{{this.name}}"/></a>
    {{/each}}
    </div>
  </div>
</div>
{{/compose}}
# Local Challenges
{{#compose src="*.md" cwd=cwd1}}
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

    <h3>Champion</h3>
    {{#each champions}}
      <a href="{{this.url}}">
      <img style="max-width:320px" src="{{../assets}}/images/sponsors/{{this.logo}}" alt="{{this.name}}"/></a>
    {{/each}}
    </div>
  </div>
</div>


{{/compose}}


<br/>
<div>
  <div style="display:inline-block">
  <a class="button special-alternate"  href="http://c4tkglobal2016.devpost.com/" target="_blank">
    SEE MORE LOCAL CHALLENGES AND PROJECTS ON DEVPOST
  </a>
  </div>

{{> register-button}}
