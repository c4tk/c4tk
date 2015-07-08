---
title: Local Organizers
cwd: src/content/events/Houston/2015g/organizers
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

<h3>Your Local Organizers' vision for the Houston hackathon </h3>
<blockquote>"Houston is a metropolis of talented entrepreneurs, designers, technologists, philanthropists, engineers, coders, and artists. The Code for the Kingdom Houston Hackathon's vision is to bring Houston's innovators together for a weekend of ideation as to how we can use technology to help local churches, ministries, and non­profits bring social justice to Houston. We will tackle challenges which can change this city and the world. Bring yourself and your creative friends as we help code for the Kingdom in Houston." - Your Local Organizers</blockquote>
