---
title: Church Community Builder API
url: https://multisite.ccbchurch.com/login.php
image: ccb.png
headline: Access to the Church Community Builder database via public API. FREE
---
Access to the Church Community Builder API is free for all church partners and developers. However, you still need to have a login and password assigned from each church's cloud-based software. All API services are protected by HTTP Basic Authentication. If your application cannot provide credentials through Basic Authentication, then it will not be able to communicate with the API.

All service calls to the API require a parameter named srv that has the value of the service being called. All API services accept an optional parameter named describe_api with a value of 1. This will cause the service to return the values it accepts as parameters (parameters that must be sent via POST may not be listed).

The API services can be accessed via the https (port 443) protocol. For the security of church partner data, Church Community Builder has chosen to encrypt all transmissions of data, instead of using the standard http (port 80) port.

During and after the event, the API user credentials will be active so developers can immediately use the API and continue after if needed. 

* Software (sandbox) Information:
* Location: https://multisite.ccbchurch.com/login.php
* Username: BetaAdmin
* Password: 5afetynet

* API credentials:
* Post/Get URL: https://multisite.ccbchurch.com/api.php
* Username: C4TK_Denver
* Password: 3a5yP33zy

