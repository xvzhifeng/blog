const t=JSON.parse('{"key":"v-ac4721e8","path":"/zh/posts/tools/idea/Idea%E5%AF%BC%E5%85%A5maven%E4%BE%9D%E8%B5%96%E5%A4%B1%E8%B4%A5%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95.html","title":"Idea导入maven依赖失败解决方法","lang":"zh-CN","frontmatter":{"title":"Idea导入maven依赖失败解决方法","date":"2023-06-12T01:47:40.000Z","category":["tools","idea"],"tag":["git","go","github"],"description":"IDEA下载maven依赖报错：Could not transfer artifact org.springfram 可能原因： 网络原因 证书原因（未查证） 解决方法1： 配置国内镜像源 &lt;mirror&gt; \\t\\t &lt;id&gt;alimaven&lt;/id&gt; \\t\\t &lt;mirrorOf&gt;central&lt;/mirrorOf&gt; \\t\\t &lt;name&gt;aliyun maven&lt;/name&gt; \\t\\t &lt;url&gt;http://maven.aliyun.com/nexus/content/repositories/central/&lt;/url&gt; \\t&lt;/mirror&gt;","head":[["meta",{"property":"og:url","content":"https://zhifeng.top/zh/posts/tools/idea/Idea%E5%AF%BC%E5%85%A5maven%E4%BE%9D%E8%B5%96%E5%A4%B1%E8%B4%A5%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"苏木的博客"}],["meta",{"property":"og:title","content":"Idea导入maven依赖失败解决方法"}],["meta",{"property":"og:description","content":"IDEA下载maven依赖报错：Could not transfer artifact org.springfram 可能原因： 网络原因 证书原因（未查证） 解决方法1： 配置国内镜像源 &lt;mirror&gt; \\t\\t &lt;id&gt;alimaven&lt;/id&gt; \\t\\t &lt;mirrorOf&gt;central&lt;/mirrorOf&gt; \\t\\t &lt;name&gt;aliyun maven&lt;/name&gt; \\t\\t &lt;url&gt;http://maven.aliyun.com/nexus/content/repositories/central/&lt;/url&gt; \\t&lt;/mirror&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-11T18:02:50.000Z"}],["meta",{"property":"article:author","content":"Sumu"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:tag","content":"go"}],["meta",{"property":"article:tag","content":"github"}],["meta",{"property":"article:published_time","content":"2023-06-12T01:47:40.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-11T18:02:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Idea导入maven依赖失败解决方法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-12T01:47:40.000Z\\",\\"dateModified\\":\\"2023-06-11T18:02:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Sumu\\",\\"url\\":\\"https://github.com/xvzhifeng\\",\\"email\\":\\"xvzhifeng@126.com\\"}]}"]]},"headers":[{"level":2,"title":"IDEA下载maven依赖报错：Could not transfer artifact org.springfram","slug":"idea下载maven依赖报错-could-not-transfer-artifact-org-springfram","link":"#idea下载maven依赖报错-could-not-transfer-artifact-org-springfram","children":[]}],"git":{"createdTime":1686505802000,"updatedTime":1686506570000,"contributors":[{"name":"xzf","email":"xvzhifeng@126.com","commits":2}]},"readingTime":{"minutes":10.41,"words":1561},"filePathRelative":"zh/posts/tools/idea/Idea导入maven依赖失败解决方法.md","localizedDate":"2023年6月12日","excerpt":"<h2> IDEA下载maven依赖报错：Could not transfer artifact org.springfram</h2>\\n<p><strong>可能原因：</strong></p>\\n<ul>\\n<li>网络原因</li>\\n<li>证书原因（未查证）</li>\\n</ul>\\n<p><strong>解决方法1：</strong></p>\\n<ul>\\n<li>配置国内镜像源</li>\\n</ul>\\n<div class=\\"language-xml line-numbers-mode\\" data-ext=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>mirror</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>id</span><span class=\\"token punctuation\\">&gt;</span></span>alimaven<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>id</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>mirrorOf</span><span class=\\"token punctuation\\">&gt;</span></span>central<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>mirrorOf</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>name</span><span class=\\"token punctuation\\">&gt;</span></span>aliyun maven<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>name</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>url</span><span class=\\"token punctuation\\">&gt;</span></span>http://maven.aliyun.com/nexus/content/repositories/central/<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>url</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>mirror</span><span class=\\"token punctuation\\">&gt;</span></span> \\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
