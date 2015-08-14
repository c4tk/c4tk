---
title: Local Organizers
cwd: src/content/events/nairobi/2015g/organizers
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

<h3>Your Local Organizers' vision for the Nairobi hackathon </h3>
<blockquote>"How can we use technology to sensitise Kenyans about corruption and fight it while using the Gospel of Jesus Christ? This October, several technologists, digital strategists and entrepreneurs will come together in Nairobi to develop technologies that will transform the lives of Kenyans through the word of God and help create awareness on the ill-effects of corruption to our society. The event will be part of Code For The Kingdom, a weekend hackathon event where global issues are tackled from a Christian perspective." - Your Local Organizers</blockquote>

