---
title: Sponsors
cwd1: src/content/events/global/2016/sponsors

cwd: src/content/events/manila/2016/sponsors
---
## <i class="icon fa-heart"></i> Global Sponsors

<div class="row">
{{#compose src='*.md' cwd=cwd1}}
  <div class="4u">
  <a href="{{@url}}" class="sponsor-image">
    ![{{@name}}]({{assets}}/images/sponsors/{{@image}} "{{@name}}")
  </a>
  </div>
{{/compose}}
</div>
## <i class="icon fa-heart"></i> Local Sponsors

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
