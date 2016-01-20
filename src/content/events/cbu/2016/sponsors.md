---
title: Sponsors
cwd: src/content/events/cbu/2016/sponsors
---
## <i class="icon fa-heart"></i> <b>Sponsors</b>

<div class="row">
{{#compose src='*.md' cwd=cwd}}
  <div class="4u">
  <a href="{{@url}}" class="sponsor-image">
    ![{{@name}}]({{assets}}/images/sponsors/{{@image}} "{{@name}}")
  </a>
  </div>
{{/compose}}
</div>
{{> register-button}}
