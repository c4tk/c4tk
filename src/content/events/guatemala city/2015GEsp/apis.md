---
title: APIs
cwd: src/content/events/Guatemala City/2015gesp/apis
---
## <i class="icon fa-sitemap"></i> API

En Code for the Kingdom, valoramos su valioso tiempo y no queremos que reinvente la rueda. Es por eso que nuestros patrocinadores ofrecen sus APIs , con el fin de que usted pueda construir mejor y más rápido. Dicho esto, tenga en cuenta que no hay obligación de que estas API deben ser utilizadas.

Creemos que estas plataformas pueden ayudarle a medida a crear soluciones eficaces a los problemas de hoy. Así que aprovechan estas API y los mejores recursos alrededor para que juntos desarrollemos tecnología que importa.

{{#compose src='*.md' cwd=cwd}}
<div class="row">
  <div class="4u">
    <a href="{{@url}}" class="api-image">
      ![{{@title}}]({{assets}}/images/apis/{{@image}} "{{@title}}")      
    </a>
  </div>
  <div class="8u api-description" style="vertical-align:baseline">
    <span class="expander headline"><span class="toggle-switch"></span>{{@headline}}</span>
    <div class="content">
    {{#markdown}}
{{{@content}}}
    {{/markdown}}
    </div>
  </div>
</div>
{{/compose}}
<br/>
{{> register-button}}
