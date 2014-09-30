---
title: APIs
cwd: src/content/events/bangalore/2014/apis
---
## <i class="icon fa-sitemap"></i> API

At Code For The Kingdom, we value your precious time and don’t want you to reinvent the wheel. That’s why our sponsors have come forward to offer their API, in order to enable you to build better and faster. That said, please note that there is no compulsion that these API must be used or any other restrictions on technologies that you may use at the event,

We believe that these platforms may assist you as you create effective solutions to today’s problems. We have also instituted prizes for the best usage of the APIs our sponsors have provided. So leverage these API and the best resources around so that together, we can create something that matters.

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
