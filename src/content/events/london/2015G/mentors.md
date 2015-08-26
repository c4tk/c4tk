---
title: Mentors
cwd: src/content/events/London/2015g/mentors
cwd1: src/content/events/global/2015/mentors
---
## <i class="icon fa-group"></i> Mentors

Meet with Mentors is a great opportunity to connect with industry experts who can guide you and your concepts. Schedule your sessions with mentors of your choice on Friday/Saturday and get connected.

### On-site Mentors
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

### Virtual Mentors
<div class="row">
{{#compose src='*.md' cwd=cwd1}}
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