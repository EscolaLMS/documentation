import{_ as e,o as a,c as t,V as s}from"./chunks/framework.c495fe11.js";const m=JSON.parse('{"title":"Headless H5P Laravel API","description":"","frontmatter":{},"headers":[],"relativePath":"packages/h5p.md","filePath":"packages/h5p.md"}'),o={name:"packages/h5p.md"},l=s(`<h1 id="headless-h5p-laravel-api" tabindex="-1">Headless H5P Laravel API <a class="header-anchor" href="#headless-h5p-laravel-api" aria-label="Permalink to &quot;Headless H5P Laravel API&quot;">​</a></h1><p><a href="https://escolalms.github.io/H5P/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/documentation-swagger-green" alt="swagger"></a><a href="https://codecov.io/gh/EscolaLMS/H5P" target="_blank" rel="noreferrer"><img src="https://codecov.io/gh/EscolaLMS/H5P/branch/main/graph/badge.svg?token=ci4VPQbrOI" alt="codecov"></a><a href="https://github.com/EscolaLMS/Core/actions/workflows/test.yml" target="_blank" rel="noreferrer"><img src="https://github.com/EscolaLMS/H5P/actions/workflows/test.yml/badge.svg" alt="phpunit"></a><a href="https://packagist.org/packages/escolalms/headless-h5p" target="_blank" rel="noreferrer"><img src="https://img.shields.io/packagist/dt/escolalms/headless-h5p" alt="downloads"></a><a href="https://packagist.org/packages/escolalms/headless-h5p" target="_blank" rel="noreferrer"><img src="https://img.shields.io/packagist/v/escolalms/headless-h5p" alt="downloads"></a><a href="https://packagist.org/packages/escolalms/headless-h5p" target="_blank" rel="noreferrer"><img src="https://img.shields.io/packagist/l/escolalms/headless-h5p" alt="downloads"></a><a href="https://codeclimate.com/github/EscolaLMS/H5P/maintainability" target="_blank" rel="noreferrer"><img src="https://api.codeclimate.com/v1/badges/6316e8dc93a06d28c6a0/maintainability" alt="Maintainability"></a></p><h2 id="working-demo" tabindex="-1">Working demo <a class="header-anchor" href="#working-demo" aria-label="Permalink to &quot;Working demo&quot;">​</a></h2><p>Proof of concept demo is available at <a href="https://h5p-laravel-demo.stage.etd24.pl/" target="_blank" rel="noreferrer">https://h5p-laravel-demo.stage.etd24.pl/</a>.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><p>All of the features are available thought REST API, there are no blade templates of using server side rendering H5PIntegration global js variable, this is a different approach then <code>moodle</code>, <code>drupal</code> and <code>wordpress</code> h5p plugins.</p><p>This package does provide only REST API access endpoints, this is so far only package that allows to render h5p headlessly.</p><p>The features includes:</p><ul><li>play all h5p content - exposed all essential data, yet player is needed</li><li>edit all h5p content - exposed all essential data, yet editor is needed</li><li>CRUD libraries</li><li>CRUD content</li><li>upload library from <code>.h5p</code> file</li><li>upload content from <code>.h5p</code> file</li><li>all the other h5p features like export etc</li></ul><h2 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h2><p>See <a href="https://escolalms.github.io/H5P/" target="_blank" rel="noreferrer">Swagger</a> documented endpoints.</p><p>Some <a href="https://github.com/EscolaLMS/H5P/tree/main/tests" target="_blank" rel="noreferrer">tests</a> can also be a great point of start.</p><p>To play the content you can use <a href="https://github.com/EscolaLMS/H5P-player" target="_blank" rel="noreferrer">EscolaLMS H5P Player</a></p><p>Demo <a href="https://github.com/EscolaLMS/h5p-laravel-demo/blob/main/resources/js/index.tsx" target="_blank" rel="noreferrer">React source files</a>, are great starting point for frontend tutorial</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><ol><li><code>composer require escolalms/headless-h5p</code></li><li><code>php artisan migrate</code></li><li><code>php artisan h5p:storage-link</code> see below</li><li>\`php db:seed --class=&quot;EscolaLms\\HeadlessH5P\\Database\\Seeders\\PermissionTableSeeder&quot; see below</li></ol><h3 id="storage-links" tabindex="-1">Storage links <a class="header-anchor" href="#storage-links" aria-label="Permalink to &quot;Storage links&quot;">​</a></h3><p>You need to publish many of files to be available as public link.</p><p><code>php artisan h5p:storage-link</code> which creates a symbolic link from <code>storage/app/h5</code> and <code>vendor/h5p/h5p-core</code> and <code>vendor/h5p/h5p-editor</code> to be accessible to public, as follows</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public_path(&#39;h5p&#39;) =&gt; storage_path(&#39;app/h5p&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">public_path(&#39;h5p-core&#39;) =&gt; base_path().&#39;vendor/h5p/h5p-core&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">public_path(&#39;h5p-editor&#39;) =&gt; base_path().&#39;vendor/h5p/h5p-editor&#39;,</span></span></code></pre></div><h3 id="cors" tabindex="-1">Cors <a class="header-anchor" href="#cors" aria-label="Permalink to &quot;Cors&quot;">​</a></h3><p>All the endpoints need to be accessible from other domains, so <a href="https://laravel.com/docs/8.x/routing#cors" target="_blank" rel="noreferrer">CORS</a> must be properly set.</p><p>Except of endpoints assets must expose CORS headers as well. You achieve that by setting <code>Apache/Nginx/Caddy/Whatever</code> settings - below is example for Nginx for wildcard global access.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">location ~* \\.(eot|ttf|woff|woff2|jpg|jpeg|gif|png|wav|mp3|mp4|mov|ogg|webv)$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">    add_header Access-Control-Allow-Origin *;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="authorization" tabindex="-1">Authorization <a class="header-anchor" href="#authorization" aria-label="Permalink to &quot;Authorization&quot;">​</a></h3><p>Most of the endpoints require authorization, this is possible with Laravel passport</p><p>There is a <a href="https://github.com/EscolaLMS/H5P/tree/main/database/seeders/PermissionTableSeeder.php" target="_blank" rel="noreferrer">seeder</a> to must be run in order to authorize</p><p>User model is taken from <a href="https://github.com/EscolaLMS/Auth" target="_blank" rel="noreferrer">Auth</a> package.</p><h3 id="seeder" tabindex="-1">Seeder <a class="header-anchor" href="#seeder" aria-label="Permalink to &quot;Seeder&quot;">​</a></h3><p>To seed content and library</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">php artisan db:seed --class=&quot;\\EscolaLms\\HeadlessH5P\\Database\\Seeders\\ContentLibrarySeeder&quot;</span></span></code></pre></div><p>You can seed library and content with build-in seeders as command that are accessible with</p><ul><li><code>php artisan h5p:seed</code> to add just libraries</li><li><code>php artisan h5p:seed --addContent</code> to add content with libraries</li></ul><h2 id="road-map" tabindex="-1">Road map <a class="header-anchor" href="#road-map" aria-label="Permalink to &quot;Road map&quot;">​</a></h2><ul><li>rewrite h5p core in a way like <a href="https://github.com/lumieducation/lumi" target="_blank" rel="noreferrer">luminare in typescript</a></li></ul><h2 id="running-test-locally" tabindex="-1">Running test locally <a class="header-anchor" href="#running-test-locally" aria-label="Permalink to &quot;Running test locally&quot;">​</a></h2><p>run <code>./test.sh</code></p>`,37),r=[l];function i(n,p,c,h,d,g){return a(),t("div",null,r)}const b=e(o,[["render",i]]);export{m as __pageData,b as default};
