---
title: Local Organizers
cwd: src/content/events/Guatemala City/2015g/organizers
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

<h3>Your Local Organizers' vision for the Guatemala City hackathon </h3>
<blockquote>"Our vision is to provide opportunities for communities around the world so they can participate and showcase innovation and entrepreneurship projects in their communities. We expect the participation of over 1000 people and thus address a number of challenges intended to help free the oppressed, to teach the Word of God, to heal the sick, feed the hungry, clothe the naked and support the church and the body of Christ." - Your Local Organizers</blockquote>


