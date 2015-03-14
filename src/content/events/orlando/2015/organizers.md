---
title: Organizers
cwd: src/content/events/orlando/2015/organizers
---
## <i class="icon fa-magic"></i> <b>Organizers</b>

<div class="row">
{{#compose src="*.md" cwd=cwd}}
<div class="4u">
  <a href="{{@url}}">
    ![{{@name}}]({{assets}}/images/sponsors/{{@image}} "{{@name}}") 
  </a>
</div>
{{/compose}}
</div>
<br/>
{{> register-button}}
