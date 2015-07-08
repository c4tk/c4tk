---
title: Local Organizers
cwd: src/content/events/Albuquerque/2015g/organizers
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

<h3>Your Local Organizers' vision for the Albuquerque hackathon </h3>
<blockquote>"Faith Comes By Hearing is on the bleeding edge of technology located in Albuquerque, New Mexico's technology corridor. We are the curators of the world's largest Digital Bible Platform freely available via API in over 1,500 languages.  We believe in technology and we are looking to YOU, the out-of-the-box entrepreneurial thinkers to launch Albuquerque as the next technology hub! This event will provide an atmosphere where incredible technologist, designers, and entrepreneurs can come, collaborate, and create the next solution to advance the Gospel to the whole world." - Your Local Organizers</blockquote>


