---
title: Challenges
cwd: src/content/events/bayarea/2015/challenges
---
## <i class="icon fa-flag"></i> <b>Challenges</b>

The challenges will be announced on Oct 13, 2015

In case you are already interested or working on a project, don’t change course. But please keep in mind that your project must be aligned with the spirit of the Hackathon: Transforming the Bay and Beyond. Please come prepared to pitch your project at the Hackathon so that you can recruit teams to work on them.


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
