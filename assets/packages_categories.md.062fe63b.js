import{_ as e,o as a,c as t,V as s}from"./chunks/framework.c495fe11.js";const u=JSON.parse('{"title":"Categories","description":"","frontmatter":{},"headers":[],"relativePath":"packages/categories.md","filePath":"packages/categories.md"}'),o={name:"packages/categories.md"},r=s(`<h1 id="categories" tabindex="-1">Categories <a class="header-anchor" href="#categories" aria-label="Permalink to &quot;Categories&quot;">​</a></h1><p><a href="https://escolalms.github.io/Categories/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/documentation-swagger-green" alt="swagger"></a><a href="https://codecov.io/gh/EscolaLMS/Categories" target="_blank" rel="noreferrer"><img src="https://codecov.io/gh/EscolaLMS/Categories/branch/main/graph/badge.svg?token=ci4VPQbrOI" alt="codecov"></a><a href="https://github.com/EscolaLMS/Categories/actions/workflows/test.yml" target="_blank" rel="noreferrer"><img src="https://github.com/EscolaLMS/Categories/actions/workflows/test.yml/badge.svg" alt="phpunit"></a><a href="https://packagist.org/packages/escolalms/categories" target="_blank" rel="noreferrer"><img src="https://img.shields.io/packagist/dt/escolalms/categories" alt="downloads"></a><a href="https://packagist.org/packages/escolalms/categories" target="_blank" rel="noreferrer"><img src="https://img.shields.io/packagist/v/escolalms/categories" alt="downloads"></a><a href="https://packagist.org/packages/escolalms/categories" target="_blank" rel="noreferrer"><img src="https://img.shields.io/packagist/l/escolalms/categories" alt="downloads"></a><a href="https://codeclimate.com/github/EscolaLMS/Categories/maintainability" target="_blank" rel="noreferrer"><img src="https://api.codeclimate.com/v1/badges/f0a1f2b4df55306155eb/maintainability" alt="Maintainability"></a></p><h2 id="what-does-it-do" tabindex="-1">What does it do <a class="header-anchor" href="#what-does-it-do" aria-label="Permalink to &quot;What does it do&quot;">​</a></h2><p>This package is used for creating Categories for EscolaLms.</p><h2 id="installing" tabindex="-1">Installing <a class="header-anchor" href="#installing" aria-label="Permalink to &quot;Installing&quot;">​</a></h2><ul><li><code>composer require escolalms/categories</code></li><li><code>php artisan migrate</code></li><li><code>php artisan db:seed --class=&quot;EscolaLms\\Consultations\\Database\\Seeders\\ConsultationsPermissionSeeder&quot;</code></li></ul><h2 id="endpoints" tabindex="-1">Endpoints <a class="header-anchor" href="#endpoints" aria-label="Permalink to &quot;Endpoints&quot;">​</a></h2><p>All the endpoints are defined in <a href="https://escolalms.github.io/Categories/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/documentation-swagger-green" alt="swagger"></a></p><h2 id="tests" tabindex="-1">Tests <a class="header-anchor" href="#tests" aria-label="Permalink to &quot;Tests&quot;">​</a></h2><p>Run <code>./vendor/bin/phpunit --filter &#39;EscolaLms\\\\Categories\\\\Tests&#39;</code> to run tests. See <a href="https://github.com/EscolaLMS/Categories/tree/main/tests" target="_blank" rel="noreferrer">tests</a> folder as it&#39;s quite good staring point as documentation appendix.</p><h3 id="admin-panel" tabindex="-1">Admin panel <a class="header-anchor" href="#admin-panel" aria-label="Permalink to &quot;Admin panel&quot;">​</a></h3><p><strong>Left menu</strong></p><p><img src="https://raw.githubusercontent.com/EscolaLMS/Categories/main/docs/menu.png" alt="Menu" title="Menu"></p><p><strong>List of consultations</strong></p><p><img src="https://raw.githubusercontent.com/EscolaLMS/Categories/main/docs/list.png" alt="List of categories" title="List of categories"></p><p><strong>Creating/editing consultation</strong></p><p><img src="https://raw.githubusercontent.com/EscolaLMS/Categories/main/docs/create.png" alt="Creating/editing category" title="Creating or editing category"></p><h2 id="permissions" tabindex="-1">Permissions <a class="header-anchor" href="#permissions" aria-label="Permalink to &quot;Permissions&quot;">​</a></h2><p>Permissions are defined in <a href="https://github.com/EscolaLMS/Categories/tree/main/vendor/escolalms/categories/database/seeders/CategoriesPermissionSeeder.php" target="_blank" rel="noreferrer">seeder</a></p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><p>The lib allows categories</p><ul><li>adding a category</li><li>generate slug for category</li><li>edit category</li><li>delete category</li><li>show list categories</li><li>if you want to remove category which has sub categories, earlier delete sub categories</li></ul><p>To play the content you can use <a href="https://github.com/EscolaLMS/Categories" target="_blank" rel="noreferrer">EscolaLMS Categories</a></p><h3 id="seeder" tabindex="-1">Seeder <a class="header-anchor" href="#seeder" aria-label="Permalink to &quot;Seeder&quot;">​</a></h3><p>You can seed library and content with build-in seeders that are accessible with</p><ul><li><code>php artisan category-permissions:seed</code> to add permissions</li><li><code>php artisan db:seed --class=&quot;\\EscolaLms\\Categories\\Database\\Seeders\\CategoriesSeeder&quot;</code></li></ul><ol><li><code>Parent</code> Category is related belong to with other category</li><li><code>Children</code> Category is related has many with other categories</li><li><code>Courses</code> Category belongs to many with models Course</li><li><code>Users</code> Category is related belongs to many with User</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Category 1 -&gt; 1 Category (Parent)</span></span>
<span class="line"><span style="color:#A6ACCD;">Category 1 -&gt; n Category (Children)</span></span>
<span class="line"><span style="color:#A6ACCD;">Category 1 -&gt; n Course</span></span>
<span class="line"><span style="color:#A6ACCD;">Category 1 -&gt; n Users</span></span></code></pre></div>`,28),i=[r];function l(n,c,g,d,h,p){return a(),t("div",null,i)}const b=e(o,[["render",l]]);export{u as __pageData,b as default};
