---
title: Sponsors
cwd: src/content/events/seattle/2019/sponsors
---
## Sponsors

<div class="row">
{{#compose src='*.md' cwd=cwd}}
  <div class="4u">
  <a href="{{@url}}" class="sponsor-image" target="_blank">
    ![{{@name}}]({{assets}}/images/sponsors/{{@image}} "{{@name}}")
  </a>
  </div>
{{/compose}}
</div>