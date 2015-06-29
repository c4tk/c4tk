---
title: Hackathon Challenges
cwd: src/content/events/microsoft/2015/challenges
---
## <i class="icon fa-flag"></i> Challenges

Here are the challenges to get you started thinking. Please remember that more challenges may be presented between now and the first day of the event. If you would like to discuss these ideas with potential team members, or even with the champions of these challenges, please join <a href="mailto:mmfm@microsoft.com">MMFM@microsoft.com</a> and discuss.

If you already have particular interest in a project, don’t be deterred but please keep in mind that your project must be aligned with the theme "Tackling the Giants through Marketplace Miracles" and “Empower every person and every organization on the planet to achieve more”.  Please come prepared to pitch your project at the event so that you can recruit a team to work on it.

__TBD__

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
