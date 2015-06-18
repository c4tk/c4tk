---
title: Mentors
cwd: src/content/events/microsoft/2015/mentors
---
## <i class="icon fa-group"></i> Mentors

Meet with Mentors to get feedback and insight on your concepts and products. Schedule your sessions with mentors of your choice on Friday/Saturday and get connected.

__TBD__

<div class="row">
{{#compose src='*.md' cwd=cwd}}
<div class="6u">
  <div class="mentor-card expander">
      <span class="mentor-picture">
       ![{{@name}}]({{assets}}/images/mentors/{{@picture}} "{{@name}}")       
      </span>
      <p class="mentor-titles">
        {{@name}}<br/>
        {{@description}}
      </p>
  </div>
  <div class="6u content mentor-description">
    {{{@content}}}
  </div>
</div>
{{/compose}}
</div>

{{> register-button}}
