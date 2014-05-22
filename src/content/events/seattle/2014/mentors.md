---
title: Mentors
cwd: src/content/events/seattle/2014/mentors
---
# Mentors

Meet with Mentors is a great opportunity to connect with industry experts who can guide you and your concepts. Schedule your sessions with mentors of your choice on Friday/Saturday and get connected.
<hr/>
<div class="row">
{{#compose src='*.md' cwd=cwd}}
<div style="float: left; width: 50%">
  <div>
    ![Alternate]({{assets}}/images/mentors/{{@picture}} "piano man")
    <span>{{@name}}</span>
    {{@description}}
    {{@twitter}}

  </div>
  <div>
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

