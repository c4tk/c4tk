---
title: Retos

cwd: src/content/events/Guatemala City/2015gesp/challenges
cwd1: src/content/events/Guatemala City/2015gesp/localchallenges
---
## <i class="icon fa-flag"></i> Retos

Estos son los desafíos con lo cuales iniciaremos. Por favor recuerde que se presentarán más desafíos o cambiarán hasta el primer día del hackathon.
Si ya están trabajando en un proyecto, fantástico! Puede presentar su proyecto en Indigitous.org así como revisar los proyectos que otros compañeros están presentando.

Tenga en cuenta que el proyecto debe estar alineado con el espíritu del Código para el Reino. Por favor, venga preparado para lanzar su proyecto en el hackathon para que pueda reclutar a su equipo de trabajo para este evento.

# Retos Globales
{{#compose src="*.md" cwd=cwd}}
<div class="row">
  <div class="3u">
    <h3>{{@title}}</h3> 
  </div>
  <div class="9u challenge-description">
    <div class="expander intro">
      <span class="toggle-switch"></span>
      {{@intro}} 
    </div>
    <div class="content">
{{#markdown}}
{{{@content}}}
{{/markdown}}

    <h3>Campeon</h3>
    {{#each champions}}
      <a href="{{this.url}}">
      <img src="{{../assets}}/images/sponsors/{{this.logo}}" alt="{{this.name}}"/></a>
    {{/each}}
    </div>
  </div>
</div>
{{/compose}}

# Retos Locales
{{#compose src="*.md" cwd=cwd1}}
<div class="row">
  <div class="3u">
    <h3>{{@title}}</h3> 
  </div>
  <div class="9u challenge-description">
    <div class="expander intro">
      <span class="toggle-switch"></span>
      {{@intro}} 
    </div>
    <div class="content">
{{#markdown}}
{{{@content}}}
{{/markdown}}

    <h3>Campeon</h3>
    {{#each champions}}
      <a href="{{this.url}}">
      <img src="{{../assets}}/images/sponsors/{{this.logo}}" alt="{{this.name}}"/></a>
    {{/each}}
    </div>
  </div>
</div>


{{/compose}}
<div>
  <div style="display:inline-block">
  <a class="button special-alternate"  href="https://indigitous.org/c4tk-project/guatemala-city-guatemala/" target="_blank">
    VER MÁS RETOS LOCALES Y PROYECTOS EN INDIGITOUS
  </a>
  </div>


<br/>
{{> register-button}}
