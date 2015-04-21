---
title: Challenges
cwd: src/content/events/orlando/2015/challenges
---
## <i class="icon fa-flag"></i> <b>Challenges</b>


Here are the challenges to get you started. Please remember that more challenges may be presented between now and the first day of the event. If you would like to discuss with potential team members, or even with the champions of these challenges, please join and leverage our Google Plus community.


The challenges of Code for the Kingdom Orlando are focused on the following areas:

* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="icon fa-flag"></i> Bible Translation to Unserved Millions 
* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="icon fa-flag"></i> Providing Scripture to the Oppressed
* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="icon fa-flag"></i> Sharing Bible Stories
* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="icon fa-flag"></i> Challenging Spiritual Apathy
* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="icon fa-flag"></i> Building Scriptural Relationships
* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="icon fa-flag"></i> Equipping Ministry Leaders


In case you are already interested or working on a project, don’t change course. But please keep in mind that your project must be aligned with the spirit of the Hackathon: Eradicating Spiritual Poverty. Please come prepared to pitch your project at the Hackathon so that you can recruit teams to work on them.


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
