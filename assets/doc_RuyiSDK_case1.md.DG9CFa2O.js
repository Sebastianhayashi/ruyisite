import{_ as s,c as i,o as a,a1 as h}from"./chunks/framework.BWup6HvM.js";const y=JSON.parse('{"title":"使用编译环境进行 Coremark 构建","description":"","frontmatter":{},"headers":[],"relativePath":"doc/RuyiSDK/case1.md","filePath":"doc/RuyiSDK/case1.md"}'),k={name:"doc/RuyiSDK/case1.md"},n=h(`<h1 id="使用编译环境进行-coremark-构建" tabindex="-1">使用编译环境进行 Coremark 构建 <a class="header-anchor" href="#使用编译环境进行-coremark-构建" aria-label="Permalink to &quot;使用编译环境进行 Coremark 构建&quot;">​</a></h1><p>本文使用 Milkv-Duo 编译环境，构建 coremark 。</p><p>首先进入编译环境：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> milkv-venv/bin/ruyi-activate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> milkv-venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $</span></span></code></pre></div><p>coremark 源码可以直接从 RUYI 软件仓库中下载：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> milkv-venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> coremark</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> milkv-venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> coremark</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> milkv-venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> extract</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> coremark</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> downloading</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/RuyiSDK/dist/coremark-1.01.tar.gz</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/myon/.cache/ruyi/distfiles/coremark-1.01.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  %</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Total</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    %</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Received</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> %</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Xferd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Average</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Speed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     Time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Current</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 Dload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Upload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Total</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Spent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Left</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Speed</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">100</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  391k</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  100</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  391k</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  1400k</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --:--:--</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --:--:--</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --:--:--</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1404k</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> extracting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> coremark-1.01.tar.gz</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> coremark-1.0.1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> coremark-1.0.1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> extracted</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> current</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> working</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> directory</span></span></code></pre></div><p>这个操作将从 RUYI 软件源中下载 coremark 源码并解包到<strong>当前目录</strong>。</p><p>由于使用的工具链为 <code>riscv64-plct-linux-gnu-gcc</code> ，需要编辑构建脚本：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> milkv-venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s/\\bgcc\\b/riscv64-plct-linux-gnu-gcc/g&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linux64/core_portme.mak</span></span></code></pre></div><p>构建 coremark：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> milkv-venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PORT_DIR=linux64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plct-linux-gnu-gcc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Ilinux64</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -I.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -DFLAGS_STR=\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-O2   -lrt&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -DITERATIONS=0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  core_list_join.c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> core_main.c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> core_matrix.c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> core_state.c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> core_util.c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linux64/core_portme.c</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./coremark.exe</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -lrt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Link</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> performed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> along</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compile</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> milkv-venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> coremark.exe</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">coremark.exe:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ELF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 64-bit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> LSB</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> executable,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> UCB</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> RISC-V,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> RVC,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> double-float</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ABI,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (SYSV), dynamically linked, interpreter /lib/ld-linux-riscv64-lp64d.so.1, BuildID[sha1]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">d9dbc7115d07d1953087dd2c1e5d46adc2ab0d4f,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GNU/Linux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4.15.0,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> debug_info,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stripped</span></span></code></pre></div><p>可以看到成功构建 RISC-V 架构的二进制。注意这整个过程如果在 riscv64 环境则不是交叉编译。</p><p>退出虚拟环境</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> milkv-venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ruyi-deactivate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span></span></code></pre></div><h2 id="在最新的-milkv-duo-镜像上运行" tabindex="-1">在最新的 Milkv Duo 镜像上运行 <a class="header-anchor" href="#在最新的-milkv-duo-镜像上运行" aria-label="Permalink to &quot;在最新的 Milkv Duo 镜像上运行&quot;">​</a></h2><p>传送 coremark 二进制的 Milkv Duo， Milkv Duo 的 IP 地址请按实际情况更改。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./coremark.exe</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root@192.168.42.1:~</span></span></code></pre></div><p>在 Milkv Duo 上运行</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@milkv-duo]~# ./coremark.exe</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-sh:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./coremark.exe:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> found</span></span></code></pre></div><p>若出现这样的错误，则需要静态链接的二进制。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> milkv-venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PORT_DIR=linux64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> LFLAGS_END=-static</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plct-linux-gnu-gcc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Ilinux64</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -I.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -DFLAGS_STR=\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-O2   -static&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -DITERATIONS=0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  core_list_join.c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> core_main.c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> core_matrix.c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> core_state.c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> core_util.c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linux64/core_portme.c</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./coremark.exe</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -static</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Link</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> performed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> along</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compile</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> milkv-venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> coremark.exe</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">coremark.exe:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ELF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 64-bit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> LSB</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> executable,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> UCB</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> RISC-V,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> RVC,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> double-float</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ABI,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (SYSV), statically linked, BuildID[sha1]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1548f6b30560e1ca6f3fa8ba3ef6aea4188feacf,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GNU/Linux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4.15.0,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> debug_info,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stripped</span></span></code></pre></div><p>重新上传后运行</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@milkv-duo]~# ./coremark.exe</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2K</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> performance</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> parameters</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> coremark.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CoreMark</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Size</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 666</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Total</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ticks</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 14911</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Total</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (secs): 14.911000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Iterations/Sec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2011.937496</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Iterations</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 30000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Compiler</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GCC13.1.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Compiler</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flags</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   -static</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Memory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Please</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> put</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> memory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> here</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">e.g.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> code</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flash,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> heap</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> etc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">seedcrc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0xe9f5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[0]crclist       </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 0xe714</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[0]crcmatrix     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 0x1fd7</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[0]crcstate      </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 0x8e3a</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[0]crcfinal      </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 0x5275</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Correct</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> operation</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> validated.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> See</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> readme.txt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reporting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rules.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CoreMark</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2011.937496</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GCC13.1.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   -static</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Heap</span></span></code></pre></div>`,23),t=[n];function l(p,F,e,r,d,g){return a(),i("div",null,t)}const E=s(k,[["render",l]]);export{y as __pageData,E as default};
