---
title: Challenges
cwd: src/content/events/austin/2013/challenges
---
## <i class="icon fa-flag"></i> Challenges

Here are a few challenges from our sponsors to get you hackers started. Please remember that more challenges will be presented on the first day of the Hackathon. If you would like to discuss with potential team members or even the sponsors of these challenges, please join and leverage the wonderful group on our Google Plus community.

In case you are already interested or working on other challenges, don’t change course. We are more than happy to add new challenges everyday and look forward to the ones that you are passionate about. Please come prepared to pitch your challenges at the Hackathon so that you can sign up teams to work on them.

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
