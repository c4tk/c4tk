---
title: Winners
cwd: src/content/events/cbu/2016/projects
---
## <i class="icon fa-flag"></i> SUBMITTED PROJECTS


Here are the projects presented at the end of the hackathon.
Congratulations to all participants for your amazing work and passion. You created technology that matters!!! 

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



