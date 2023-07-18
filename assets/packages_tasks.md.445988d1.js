import{_ as e,o as s,c as a,V as t}from"./chunks/framework.c495fe11.js";const m=JSON.parse('{"title":"Tasks","description":"","frontmatter":{},"headers":[],"relativePath":"packages/tasks.md","filePath":"packages/tasks.md"}'),o={name:"packages/tasks.md"},n=t(`<h1 id="tasks" tabindex="-1">Tasks <a class="header-anchor" href="#tasks" aria-label="Permalink to &quot;Tasks&quot;">​</a></h1><p><a href="https://escolalms.github.io/Tasks/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/documentation-swagger-green" alt="swagger"></a><a href="https://codecov.io/gh/EscolaLMS/Tasks" target="_blank" rel="noreferrer"><img src="https://codecov.io/gh/EscolaLMS/Tasks/branch/main/graph/badge.svg?token=NRAN4R8AGZ" alt="codecov"></a><a href="https://github.com/EscolaLMS/Tasks/actions/workflows/test.yml" target="_blank" rel="noreferrer"><img src="https://github.com/EscolaLMS/Tasks/actions/workflows/test.yml/badge.svg" alt="phpunit"></a><a href="https://packagist.org/packages/escolalms/Tasks" target="_blank" rel="noreferrer"><img src="https://img.shields.io/packagist/dt/escolalms/Tasks" alt="downloads"></a><a href="https://packagist.org/packages/escolalms/Tasks" target="_blank" rel="noreferrer"><img src="https://img.shields.io/packagist/v/escolalms/Tasks" alt="downloads"></a><a href="https://packagist.org/packages/escolalms/Tasks" target="_blank" rel="noreferrer"><img src="https://img.shields.io/packagist/l/escolalms/Tasks" alt="downloads"></a></p><h2 id="what-does-it-do" tabindex="-1">What does it do <a class="header-anchor" href="#what-does-it-do" aria-label="Permalink to &quot;What does it do&quot;">​</a></h2><p>This package is used to manage user tasks. Users can create their own tasks or assign tasks to other system users.</p><p>Tasks can be marked as ready/not ready only by users who created the task. If the task is assigned to another user, a request is sent to checking the correctness of the task. The user sending the request then receives a notification of the task verification status.</p><p>Notes can be added to an assignment. Notes can be added by the task author or assigned user. Each note contains information about who created the note.</p><p>The packet also has a scheduled task that reminds you of overdue tasks. By default, the reminder period is set to 30 days. No notifications will be sent for tasks older than 30 days.</p><h2 id="installing" tabindex="-1">Installing <a class="header-anchor" href="#installing" aria-label="Permalink to &quot;Installing&quot;">​</a></h2><ul><li><code>composer require escolalms/tasks</code></li><li><code>php artisan migrate</code></li><li><code>php artisan db:seed --class=&quot;EscolaLms\\Tasks\\Database\\Seeders\\TaskPermissionSeeder&quot;</code></li></ul><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>In the configuration, you can specify the period until when notifications about overdue tasks should be sent. Parametr możesz określić z poziomu pliku config.php lub ustawień administracyjnych systemu. You can specify the parameter from the <a href="https://github.com/EscolaLMS/Tasks/tree/main/src/config.php" target="_blank" rel="noreferrer">config.php file</a> or <a href="src/Providers/SettingsServiceProvider.php">system administration settings</a>.</p><h4 id="example-config-php" tabindex="-1">Example config.php <a class="header-anchor" href="#example-config-php" aria-label="Permalink to &quot;Example config.php&quot;">​</a></h4><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">notifications</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">overdue_period</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">14</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span></code></pre></div><h2 id="endpoints" tabindex="-1">Endpoints <a class="header-anchor" href="#endpoints" aria-label="Permalink to &quot;Endpoints&quot;">​</a></h2><p>All the endpoints are defined in swagger <a href="https://escolalms.github.io/Tasks/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/documentation-swagger-green" alt="swagger"></a></p><p>Test details <a href="https://codecov.io/gh/EscolaLMS/Tasks" target="_blank" rel="noreferrer"><img src="https://codecov.io/gh/EscolaLMS/Tasks/branch/main/graph/badge.svg?token=O91FHNKI6R" alt="codecov"></a><img src="https://github.com/EscolaLMS/Tasks/actions/workflows/test.yml/badge.svg" alt="Tests PHPUnit in environments"></p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><ul><li><code>TaskAssignedEvent</code> - The task has been assigned to the user.</li><li><code>TaskCompleteRequestEvent</code> - A request has been sent to check the correctness of the task.</li><li><code>TaskCompleteUserConfirmationEvent</code> - The task has been marked as correct.</li><li><code>TaskIncompleteEvent</code> - The task has not been completed.</li><li><code>TaskOverdueEvent</code> - Task overdue, time to complete task has run out.</li><li><code>TaskDeletedEvent</code> - The task has been removed.</li><li><code>TaskUpdatedEvent</code> - The task has been updated.</li><li><code>TaskNoteCreatedEvent</code> - A note for the task has been created.</li></ul><p>These events are listened to by the escolalms/templates-email package, which sends emails. Additionally, notifications are stored in database.</p><h2 id="permissions" tabindex="-1">Permissions <a class="header-anchor" href="#permissions" aria-label="Permalink to &quot;Permissions&quot;">​</a></h2><p>Permissions are defined in <a href="https://github.com/EscolaLMS/Tasks/tree/main/database/seeders/TaskPermissionSeeder.php" target="_blank" rel="noreferrer">seeder</a></p>`,21),r=[n];function i(l,c,p,h,d,g){return s(),a("div",null,r)}const u=e(o,[["render",i]]);export{m as __pageData,u as default};
