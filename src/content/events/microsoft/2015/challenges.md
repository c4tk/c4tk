---
title: Hackathon Challenges
cwd: src/content/events/microsoft/2015/challenges
---
## <i class="icon fa-flag"></i> Challenges

The challenge for this year&apos;s //oneweek hackathon (and also our current mission statement for Microsoft) is  &quot;Empower every person and every organization on the planet to achieve more.&quot; Your project must be aligned with this theme. More specifically, think about some of the obstacles, aka the &quot;Giants&quot; that prevents this empowerment and how you can tackle these Giants with technology creating life-giving and life-transforming miracles in the world. Please come prepared with your own project idea at the event so that you can recruit a team to work on it. 

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
    </div>
  </div>
</div>
{{/compose}}
<br/>
{{> register-button}}
