## Continuous integration (CI) i Continuous Delivery

### Backend

- backend is set of Laravel Package modules that are combined into Modularized Monolith within [API project](https://github.com/EscolaLMS/API)
- each package after creating new release on github is deployed automatically to packagist.org
- manually API releases docker image for development from `develop` branch into [escolalms/api:develop](https://hub.docker.com/r/escolalms/api/tags) image.
- After creating new release on github API releases docker image for production from `main` branch into [escolalms/api:latest](https://hub.docker.com/r/escolalms/api/tags) and [escolalms/api:version](https://hub.docker.com/r/escolalms/api/tags) image

```mermaid
sequenceDiagram
    actor Maintainer

    Maintainer->>Package (git): manually release<br/> new version
    Package (git)->>Packagist.org: manually published<br/> new version
    Maintainer->>API (git): manually create a development build<br/> from `develop` branch
    API (git)->>hub.docker: automatically image `escolalms/api`<br/> with tag `develop` updated (overwriten)
    API (git)->>stage: automatically k8s rollout image `escolalms/api:develop` <br/>on api-stage.escolalms.com
    Maintainer->>API (git): manually release new version from `main` branch version `X.Y.Z`
    API (git)->>hub.docker: automatically image `escolalms/api` <br/>with tag `latest` updated (overwriten) <br/>with tag `X.Y.Z` created
    API (git)->>production: automatically k8s rollout <br/>image `escolalms/api:latest` on api.escolalms.com and <br/>all production services
    actor Developer
    Developer->>production: manually k8s rollout image <br/>`escolalms/api:latest` on <br/>all production services


```
