---
title: Frequently Asked Questions
---

## Can anyone use wellms?

Anyone can use Wellms - there are no limitations. [Components](https://components.wellms.io/) that one use to build front applications are a11y optimized

## Is the Wellms license paid? How much does wellms cost?

Wellms is [open core](https://en.wikipedia.org/wiki/Open-core_model). You pay for

- [extra features](/faq/paid-features) that are not in the core
- consultancy hours
- hosting
- bespoke features you require

## What is the privacy policy like? When hosting on your AWS, do we sign any data processing agreements or is there a specific policy that describes and resolves it differently?

Creating privacy policy is client responsibility. Of course we're here to help.

## Can I integrate my Wellms with Google Analytics to track referral sources, user sessions, and other metrics on my website?

The front of you app uses headless architecture which means you can implement all web tools as you like including Google Analytics.

## Is wellms an application or a larger project composed of multiple products? What is wellms? - What is it used for?

Wellms is a open source project built with [MACH Architecture](https://macharchitecture.com/) that includes

- REST API for communication
- Admin Panel for management (optional)
- SDKs to consume our logic in your bespoke applications (optional)
- Components to visually build your bespoke applications (optional)

## If it's an application, what is its purpose? If it's a project, what is the purpose behind its creation and what problems does it solve? How can it be useful to me?

It has all benefits that headless, [MACH Architecture](https://macharchitecture.com/) does

> MACH Architecture proposes a set of principles, patterns and associated technologies that enable adopters to solve business problems by composing solutions using best-in-class services and technologies. It supports the composable enterprise where businesses adopt in-house and third-party components that are pluggable, replaceable, scalable and independently deployed and improved.

## Can I install Wellms as easily as WordPress on a shared, inexpensive hosting like mydevil?

The REST API is based on [Laravel](https://laravel.com/docs/10.x/installation), if this framework can be launch then Wellms REST API should work as well. Yet there are some minor limitations.

## Why should I use wellms at all? What makes it better than others? What sets Wellms apart from other similar platforms? What can wellms do? Its main/distinguishing features.

## What integrations are available out of the box?

See list of [integrations](/faq/integrations)

## Is wellms widely used in escola?

Yes, [Escola](https://escolasoft.com/) use it for many project on day-to-day basis.

## Is it complicated to use?

External developers that used it said it's quite simple.

## How popular is this tool? Is it very popular?

It's not as popular as Moodle :P

## What can be configured in it? Examples of options/standards.

Wellms is extendable totally, you can extend, overwrite and create your own configurations

## What are the advantages of wellms over the competition?

So far Wellms is the only open source headless LMS.

## What deployments do we recommend wellms for? Corporate? Small businesses? Individual trainings?

Wellms fits all the needs.

## Where can I find wellms licenses?

All open source packages are under MIT license, rest are under commercial license.

## Where can I find a description of its functionality?

[https://docs.wellms.io/](https://docs.wellms.io/)

## Where can I find marketing materials in English? In Polish?

Use contact form on the [website](https://www.wellms.io/).

## Who estimates new features if I wanted to?

Use contact form on the [website](https://www.wellms.io/).

## Where can I find user manuals in Polish and English?

[https://docs.wellms.io/](https://docs.wellms.io/).

## How secure is wellms?

Headless archicture by design is more secure then monolith, except of that we do follow security measures such as

1. Secure API endpoints: Implement strong authentication and authorization mechanisms to control access to the APIs.
2. Input validation and sanitization: Validate and sanitize all user inputs to prevent common security vulnerabilities such as injection attacks.
3. Secure communication: Use encryption (such as HTTPS) to secure the communication between the frontend and backend.
4. Role-based access control: Implement granular access control to ensure that users only have access to the resources they need.
5. Regular security audits and updates: Stay up to date with security patches and conduct regular security audits to identify and address vulnerabilities.

## What are the server requirements for installation and usage? What server should I buy?

That depends on the traffic volume you're expecting and feature you require

For instance self hosted Jitsi requires a [lot of resources](https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-requirements/) - yet webinar package that use Jitsi is optional.
Another example to process video into streaming HLS files requires more resources that rest of packages. Yet you can disable [video process](https://github.com/EscolaLMS/Video) with one click in Admin Panel.

## Does it work on any cloud?

We use AWS and OVH cloud on day to day basis. You can check our [terraform boilerplate](https://github.com/EscolaLMS/aws-ecs-terraform).

## How is the issue of intellectual property and the possibility of reselling custom solutions purchased from you solved? The core is open source, and you add my customizations to it. I have my own domain and host. I receive files from you that I place in my remote repository and can do whatever I want with them, or does the code from your (Escola) GIT flow to my server and domain?

You have dual licensing: MIT & Commercial license

## What feature are planned? Do you have a road map?

Road map is hosted at [wellms.canny.io](https://wellms.canny.io/)

## What are hosting options for Wellms?

At the moment wellms is self hosted. You either host it on machine/cloud you provide or on ours

The cloud SaaS is going to be published in nearest future.
