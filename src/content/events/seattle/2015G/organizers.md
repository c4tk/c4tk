---
title: Local Organizers
cwd: src/content/events/Seattle/2015g/organizers
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

<h3>Your Local Organizers' vision for the Seattle hackathon </h3>
<blockquote>"We want Code for the Kingdom in Seattle to be an inspiring foretaste of God's Kingdom where believers work together to use their gifts in technology, design, entrepreneurship, and every other discipline to deliver amazing and creative solutions that demonstrate the love of Christ for the world." - Your Local Organizers</blockquote>
