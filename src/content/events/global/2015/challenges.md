---
title: Global Challenges
cwd: src/content/events/global/2015/challenges
---
## <i class="icon fa-flag"></i> Global Challenges

Here are the global challenges to get you started. Please remember that more challenges may be presented between now and the first day of the Hackathon.

In case you are already interested or working on a project, don’t change course. Make sure you submit your project on [Indigitous.org](https://indigitous.org), and check the projects others are submitting there. Keep in mind that your project must be aligned with the spirit of the Code for the Kingdom. Please come prepared to pitch your project at the Hackathon so that you can recruit teams to work on them.

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
<div>
  <div style="display:inline-block">
  <a class="button special-alternate"  href="https://indigitous.org/c4tk-project/" target="_blank">
    SEE MORE LOCAL CHALLENGES AND PROJECTS ON INDIGITOUS
  </a>
  </div>
