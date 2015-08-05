---
title: Mentores
cwd: src/content/events/Guatemala City/2015gesp/mentors
---
## <i class="icon fa-group"></i> Mentoress

Reunirse con los mentores es una gran oportunidad de conectarse con expertos de la industria que pueden guiarlo a usted y sus conceptos. Programe sus sesiones con mentores de su elección el viernes / sábado y conéctese con ellos. 
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

{{> register-button}}
