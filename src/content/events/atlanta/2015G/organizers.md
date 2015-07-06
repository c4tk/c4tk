---
title: Local Organizers
cwd: src/content/events/atlanta/2015g/organizers
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

<h3>Your Local Organizers' vision for the Atlanta hackathon </h3>
<blockquote>"The church was once the epicenter of innovation in many different fields including healthcare, education, architecture, printing, and the list could go on. These different areas of innovation helped the community and the church connect to one another in unique ways besides worshipping together on Sundays. The point of this hackathon is to see if we can find new ways for the church to connect with the community in terms of innovation. With the City of Alpharetta launching free gigabit speed Wifi in downtown areas, Google partnering with the Alpharetta Tech Commission, and some of the largest congregations in the US coming together each week, we believe this can happen again. Innovations that we would like to see focused are those for the next generation, communication, and bringing awareness to ministries that are in the local area." - Your Local Organizers</blockquote>

