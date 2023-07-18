import{_ as s,o as n,c as a,V as p}from"./chunks/framework.c495fe11.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"packages/laravel-docker.md","filePath":"packages/laravel-docker.md"}'),l={name:"packages/laravel-docker.md"},o=p(`<p>Escolas Laravel Docker</p><p>Example usage</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3.5</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">networks</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">app</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">driver</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bridge</span></span>
<span class="line"><span style="color:#F07178;">services</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">nginx</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx:latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ports</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1000:80</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./:/var/www/html</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./docker/conf/:/etc/nginx/conf.d/</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./docker/www_logs/nginx:/var/log/nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">links</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">networks</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">php</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker/containers/php-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">command</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bash -c &quot;/etc/init.d/cron start &amp;&amp; php-fpm -F&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./:/var/www/html:cached</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./docker/php-custom.ini:/usr/local/etc/php/conf.d/php-custom.ini</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">networks</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mysql</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">networks</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mariadb:10.5</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./docker/mysql-data:/var/lib/mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./docker/conf/mysql:/etc/mysql/conf.d</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">environment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">MYSQL_ROOT_PASSWORD</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">MYSQL_DATABASE</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">database</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">phpmyadmin</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">networks</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">phpmyadmin/phpmyadmin</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">depends_on</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ports</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">8079:80</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">environment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">MYSQL_ROOT_PASSWORD</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">MYSQL_USERNAME</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">PMA_HOST</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">postgres</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">postgres:12</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">networks</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./docker/postgres-data:/var/lib/postgresql/data</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">environment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POSTGRES_DB=default</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POSTGRES_USER=default</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POSTGRES_PASSWORD=secret</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TZ=Europe/Warsaw</span></span></code></pre></div>`,3),e=[o];function c(t,r,D,y,C,A){return n(),a("div",null,e)}const m=s(l,[["render",c]]);export{i as __pageData,m as default};
