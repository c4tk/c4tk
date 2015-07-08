---
title: Local Organizers
cwd: src/content/events/los angeles/2015g/organizers
---

## <i class="icon fa-group"></i> <b>Local Organizers</b>

Meet your Local Organizers.
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

<h3>Your Local Organizers' vision for the Los Angeles hackathon </h3>
<blockquote>"LA is the media and entertainment capital of the world. We would like to explore how tech and media can advance the kingdom of God and support the Great Commission.  In this first ever kingdom hackathon we would like to build a community of world change agents from a diverse backgrounds that truly reflect the redeeming character and history of this City of Angeles." - Your Local Organizers</blockquote>

