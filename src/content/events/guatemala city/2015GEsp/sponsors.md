---
title: Patrocinadores
cwd: src/content/events/Guatemala City/2015gesp/sponsors
---
## <i class="icon fa-heart"></i> Patrocinadores

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
