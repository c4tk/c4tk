---
title: Mentors
cwd: src/content/events/seattle/2014/mentors
---
## <i class="icon fa-group"></i> Mentors

Meet with Mentors is a great opportunity to connect with industry experts who can guide you and your concepts. Schedule your sessions with mentors of your choice on Friday/Saturday and get connected.
<hr/>
<div class="row">
{{#compose src='*.md' cwd=cwd}}
<div style="float: left; width: 50%; position: relative">
  <div class="expander">
    <span style="float:left">
    ![Alternate]({{assets}}/images/mentors/{{@picture}} "{{@name}}")
    </span>
    <span>{{@name}}</span>
    {{@description}}
    {{@twitter}}

  </div>
  <div class="content" style="position:absolute; background-color:gray; color: white; z-index:1">
        {{{@content}}}
  </div>
</div>
{{/compose}}
</div>

# Organizers

* Leadership Network
* Carpentar's Labs
* SF Bay Christian Entrepreneurs
* Crazy Love

