---
title: Organizers
cwd: src/content/events/dfw/2015/organizers
---
## <i class="icon fa-magic"></i> Organizers

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
