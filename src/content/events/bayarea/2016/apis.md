---
title: APIs
cwd: src/content/events/bayarea/2016/apis
---
## <i class="icon fa-sitemap"></i> <b>APIs</b>

At Code For The Kingdom, we value your precious time and don’t want you to reinvent the wheel. That’s why our friends have come forward to offer their APIs, in order to enable you to build better and faster. That said, please note that there is no compulsion that these APIs must be used or any other restrictions on technologies that you may use at the Hackathon.

We believe that these platforms may assist you as you create effective solutions to today’s problems. So leverage these APIs and the best resources around so that together, we can create technology that matters.

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
