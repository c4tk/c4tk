---
title: Local Organizer
cwd: src/content/events/cbu/2016/organizers
---

## <i class="icon fa-group"></i> <b>Local Organizer</b>

Meet your CBU Organizer.
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

<a href="mailto:mhan@calbaptist.edu">For more information about this hackathon, please email Dr. Han</a>

