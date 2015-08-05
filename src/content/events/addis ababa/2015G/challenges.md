---
title: Challenges
cwd: src/content/events/global/2015/challenges
cwd1: src/content/events/addis ababa/2015g//challenges
---
## <i class="icon fa-flag"></i> Challenges

The challenges will be announced on September 1 2015



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
      <a href="{{this.url}}">
      <img src="{{../assets}}/images/sponsors/{{this.logo}}" alt="{{this.name}}"/></a>
    {{/each}}
    </div>
  </div>
</div>
{{/compose}}
<br/>
{{> register-button}}
