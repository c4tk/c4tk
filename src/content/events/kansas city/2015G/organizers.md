---
title: Local Organizers
cwd: src/content/events/kansas city/2015g/organizers
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

<h3>Your Local Organizers' vision for the Kansas City hackathon </h3>
<blockquote>"This is a unique and exciting time in Kansas City's entrepreneurial history with many burgeoning expressions of innovative collaborationearning KC the tagline of "Silicon Prairie." The goal of our team is to boost the existing work of notable efforts and to identify new opportunities in innovation as we convene bright entrepreneurs and technologists. With Kansas City's rich history of entrepreneurship and innovation anything is possible." - Your Local Organizers</blockquote>
