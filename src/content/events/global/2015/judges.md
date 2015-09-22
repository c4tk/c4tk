---
title: Global Judges
cwd: src/content/events/global/2015/judges
---
## <i class="icon fa-group"></i> Global Judges

At the end of the hackathons, the local judges of every city will select one or two projects to be submitted to the Global Judging Panel for consideration for the 2015 Best of Code for the Kingdom Global award. 

Our distinguished Global Judging panel included distinguished leaders from Venture Capital, Philanthropy, Higher Education, Non-Profits, Entrepreneurship, Church, Missions, Accelerators, Law, and Finance.

The 2015 Best of Code for the Kingdom Global award will be announced on this website on November 5th, 2015. 

Meet the the global judges
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


