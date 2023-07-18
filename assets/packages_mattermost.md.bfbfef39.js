import{_ as s,o as a,c as e,V as n}from"./chunks/framework.c495fe11.js";const F=JSON.parse('{"title":"Mattermost","description":"","frontmatter":{},"headers":[],"relativePath":"packages/mattermost.md","filePath":"packages/mattermost.md"}'),o={name:"packages/mattermost.md"},t=n(`<h1 id="mattermost" tabindex="-1">Mattermost <a class="header-anchor" href="#mattermost" aria-label="Permalink to &quot;Mattermost&quot;">​</a></h1><p><a href="https://escolalms.github.io/Mattermost/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/documentation-swagger-green" alt="swagger"></a><a href="https://codecov.io/gh/EscolaLMS/Mattermost" target="_blank" rel="noreferrer"><img src="https://codecov.io/gh/EscolaLMS/Mattermost/branch/main/graph/badge.svg?token=NRAN4R8AGZ" alt="codecov"></a><a href="https://github.com/EscolaLMS/Mattermost/actions/workflows/test.yml" target="_blank" rel="noreferrer"><img src="https://github.com/EscolaLMS/Mattermost/actions/workflows/test.yml/badge.svg" alt="phpunit"></a><a href="https://packagist.org/packages/escolalms/mattermost" target="_blank" rel="noreferrer"><img src="https://img.shields.io/packagist/dt/escolalms/mattermost" alt="downloads"></a><a href="https://packagist.org/packages/escolalms/mattermost" target="_blank" rel="noreferrer"><img src="https://img.shields.io/packagist/v/escolalms/mattermost" alt="downloads"></a><a href="https://packagist.org/packages/escolalms/mattermost" target="_blank" rel="noreferrer"><img src="https://img.shields.io/packagist/l/escolalms/mattermost" alt="downloads"></a><a href="https://codeclimate.com/github/EscolaLMS/Mattermost/maintainability" target="_blank" rel="noreferrer"><img src="https://api.codeclimate.com/v1/badges/00725c6ea461fcfa2754/maintainability" alt="Maintainability"></a><a href="https://codeclimate.com/github/EscolaLMS/Mattermost/test_coverage" target="_blank" rel="noreferrer"><img src="https://api.codeclimate.com/v1/badges/00725c6ea461fcfa2754/test_coverage" alt="Test Coverage"></a></p><h2 id="what-does-it-do" tabindex="-1">What does it do <a class="header-anchor" href="#what-does-it-do" aria-label="Permalink to &quot;What does it do&quot;">​</a></h2><p>This package is used for <a href="https://mattermost.com/" target="_blank" rel="noreferrer">Mattermost</a> integration.</p><p>It listens for Events then add/remove user for mattermost and particular channels either as standard user or admin.</p><h2 id="installing" tabindex="-1">Installing <a class="header-anchor" href="#installing" aria-label="Permalink to &quot;Installing&quot;">​</a></h2><ul><li><code>composer require escolalms/mattermost</code></li></ul><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>You can configure the package using Facade</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Config::set(&#39;mattermost.package_status&#39;, PackageStatusEnum::ENABLED);</span></span>
<span class="line"><span style="color:#A6ACCD;">Config::set(&#39;mattermost.servers.default.host&#39;, &#39;localhost&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">Config::set(&#39;mattermost.servers.default.login&#39;, &#39;login&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">Config::set(&#39;mattermost.servers.default.password&#39;, &#39;password&#39;);</span></span></code></pre></div><p>or <code>/api/admin/config</code> endpoint</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$this-&gt;</span><span style="color:#82AAFF;">actingAs</span><span style="color:#89DDFF;">($this-&gt;</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">api</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)-&gt;</span><span style="color:#82AAFF;">json</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">POST</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/api/admin/config</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">config</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">key</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mattermost.package_status</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PackageStatusEnum</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">ENABLED</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">key</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mattermost.servers.default.host</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">key</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mattermost.servers.default.login</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">login</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">key</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mattermost.servers.default.password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">);</span></span></code></pre></div><h2 id="endpoints" tabindex="-1">Endpoints <a class="header-anchor" href="#endpoints" aria-label="Permalink to &quot;Endpoints&quot;">​</a></h2><p>All the endpoints are defined in <a href="https://escolalms.github.io/Mattermost/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/documentation-swagger-green" alt="swagger"></a></p><h2 id="test" tabindex="-1">Test <a class="header-anchor" href="#test" aria-label="Permalink to &quot;Test&quot;">​</a></h2><p>Run <code>./vendor/bin/phpunit</code> to run tests. See tests folder as it&#39;s quite good staring point as documentation appendix. Test details <a href="https://codecov.io/gh/EscolaLMS/Mattermost" target="_blank" rel="noreferrer"><img src="https://codecov.io/gh/EscolaLMS/Mattermost/branch/main/graph/badge.svg?token=NRAN4R8AGZ" alt="codecov"></a><a href="https://github.com/EscolaLMS/Mattermost/actions/workflows/test.yml" target="_blank" rel="noreferrer"><img src="https://github.com/EscolaLMS/Mattermost/actions/workflows/test.yml/badge.svg" alt="phpunit"></a></p><h2 id="listeners" tabindex="-1">Listeners <a class="header-anchor" href="#listeners" aria-label="Permalink to &quot;Listeners&quot;">​</a></h2><p>Handling events</p><ul><li><code>EscolaLms\\Auth\\Events\\AccountConfirmed</code> =&gt; add user to Mattermost</li><li><code>EscolaLms\\Auth\\Events\\AccountDeleted</code> =&gt; remove user from Mattermost</li><li><code>EscolaLms\\Auth\\Events\\AccountBlocked</code> =&gt; block user account</li><li><code>EscolaLms\\Courses\\Events\\CourseAssigned</code> =&gt; add user to course channel with member role</li><li><code>EscolaLms\\Courses\\Events\\CourseUnassigned</code> =&gt; remove user from course channel</li><li><code>EscolaLms\\Courses\\Events\\CourseTutorAssigned</code> =&gt; add user to course channel with channel_admin role</li><li><code>EscolaLms\\Courses\\Events\\CourseTutorUnassigned</code> =&gt; remove user from course channel</li><li><code>EscolaLms\\Webinar\\Events\\WebinarUserAssigned</code> =&gt; add user to webinar channel with member role</li><li><code>EscolaLms\\Webinar\\Events\\WebinarUserUnassigned</code> =&gt; remove user from webinar channel</li><li><code>EscolaLms\\Webinar\\Events\\WebinarTrainerAssigned</code> =&gt; add user to webinar channel with channel_admin role</li><li><code>EscolaLms\\Webinar\\Events\\WebinarTrainerUnassigned</code> =&gt; remove user from webinar channel</li></ul>`,19),l=[t];function r(p,c,i,D,m,d){return a(),e("div",null,l)}const g=s(o,[["render",r]]);export{F as __pageData,g as default};
