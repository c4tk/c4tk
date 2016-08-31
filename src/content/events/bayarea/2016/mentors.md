---
title: Mentors
cwdsf: src/content/events/bayarea/2016/sfmentors
cwdfm: src/content/events/bayarea/2016/fremontmentors
cwdpa: src/content/events/bayarea/2016/paloaltomentors
---
## <i class="icon fa-group"></i> San Francisco Mentors


{{> mentor-filter}}
<div class="row">
{{#compose src='*.md' cwd=cwdsf}}
<div class="6u mentor-filterable {{@categories}}">
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




## <i class="icon fa-group"></i> Fremont Mentors


{{> mentor-filter}}
<div class="row">
{{#compose src='*.md' cwd=cwdfm}}
<div class="6u mentor-filterable {{@categories}}">
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



## <i class="icon fa-group"></i> Palo Alto Mentors


{{> mentor-filter}}
<div class="row">
{{#compose src='*.md' cwd=cwdpa}}
<div class="6u mentor-filterable {{@categories}}">
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

