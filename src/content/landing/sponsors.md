---
title: Sponsors
cwd: src/content/landing/sponsors
---
<section class="wrapper style4 container special">
  <header class="special container">
    <h2><span class="icon fa-heart"></span> Special thanks to our sponsors</h2>
  </header> 
<div class="row">
{{#markdown}}
{{#compose src='*.md' cwd=cwd}}
  <div class="4u">
  <a href="{{@url}}" class="sponsor-image">
    ![{{@name}}]({{assets}}/images/sponsors/{{@image}} "{{@name}}")
  </a>
  </div>
{{/compose}}
{{/markdown}}
</div>
</section>
