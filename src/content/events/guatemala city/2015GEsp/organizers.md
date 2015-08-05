---
title: Organizadores Locales
cwd: src/content/events/Guatemala City/2015gesp/organizers
---

## <i class="icon fa-group"></i> <b>Organizadores Locales</b>

Conozca a sus organizadores locales
<div class="row">
{{#compose src='*.md' cwd=cwd}}
<div class="6u">
  <div class="mentor-card expander">
      <span class="mentor-picture">
       ![{{@name}}]({{assets}}/images/mentors/{{@picture}} "{{@name}}")       
      </span>
      <p class="mentor-titles">
        {{@name}}<br/>
        {{@description}}
      </p>
  </div>
  <div class="6u content mentor-description">
    {{{@content}}}
  </div>
</div>
{{/compose}}
</div>

<h3>La visión de sus organizadores locales para el hackathon de la Ciudad de Guatemala</h3>
<blockquote>"Nuestra visión es proporcionar oportunidades para que las comunidades alrededor del mundo puedan participar y exhibir proyectos de innovación y emprendimiento en sus comunidades. Esperamos la participación de más de 1000 personas y así abordar una serie de desafíos destinados a ayudar a liberar a los oprimidos, a enseñar la Palabra de Dios, a sanar a los enfermos, a alimentar a los hambrientos, a vestir al desnudo y a apoyar a la iglesia y el cuerpo de Cristo." - Sus Organizadores Locales</blockquote>


