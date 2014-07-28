---
title: Winners
cwd: src/content/events/bayarea/2013/winners
---
## <i class="icon fa-flag"></i> WINNERS


Here are the winners.

{{#compose src="*.md" cwd=cwd}}
<div class="row">
  <div class="3u">
    <h3>{{@title}}</h3> 
  </div>
  <div class="9u winner-description">
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



