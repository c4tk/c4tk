---
title: Mentors and Judges
cwd: src/content/events/seattle/2019/mentors
cwd1: src/content/events/seattle/2019/judges
---
## <i class="icon fa-group"></i> Mentors and Judges

Meet with Mentors is a great opportunity to connect with industry experts who can guide you and your concepts. Schedule your sessions with mentors of your choice on Friday/Saturday and get connected. Judges will determine the hackathon winner.

### Mentors
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

### Judges
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