<h2>一、前言</h2>
不知道你有没有遇到这样的情况，做首页的时候，样式公用的很好，随着页面越来越多，公用样式越来越难提取，到最后需求一改，代码越来越乱，越来越复杂。比如本来两个页面是分开的，后来要合一起，蛋疼了，很多样式冲突，结构和样式都得改。再比如侧边栏本来是公用模块1，后面改成模块2，样式得重新提取一遍。所以一开始最好是把所有样式写在一个文件里面，布局和模块严格的区分，命名不重复，也就没有了样式冲突，不用再纠结如何公用代码。<!--more-->
<h2>二、正文</h2>
这次博饼的网站非常赶，10个页面2天完成，只能设计一个做一个。前期不能很好的构思，所以一开始就要为以后的修改做准备，尽量不修改结构，减少和程序沟通的成本。
<h3>1、元件</h3>
<pre class="brush:css">
/*-------------------文章模块--------------------------*/
.article h3{text-align:center;}
.article p {text-indent:2em;}
/*-------------------新闻列表模块--------------------------*/
.list li{position:relative;}
.list li b{color:#FF0000; font-weight:normal;}
.list li span{position:absolute; right:0; top:0;}
.list2 li{float:left; display:inline; width:50%;}
/*-------------------图片列表模块--------------------------*/
.img dl{float:left;display:inline;}
.img dt{text-align:center;}
/*-------------------选项卡模块--------------------------*/
.tab .h li{float:left; display:inline;}
.tab .b{display:none;}
.tab .active{display:block;}
/*-------------------数字幻灯模块--------------------------*/
.slider{ position:relative; height:283px; overflow:hidden}
.slider .b{ padding:0;}
.slider .f{position:absolute; right:17px; bottom:17px; z-index:999}
.slider .f a{background:#B5B5B5; margin-left:4px; float:left; display:inline; width:11px; height:11px; overflow:hidden; border-radius:6px; text-indent:-999em;}
.slider .f .activeSlide{background:#FCFF00;}
</pre>

把一些常用的元件名字修改了下，跟role属性对应一起（<a href="http://www.zhouwenbin.com/archives/1900">http://www.zhouwenbin.com/archives/1900</a>），更好记忆，dreamweaver对role的提示也比较好，所以一直喜欢用dw。
<h3>2、图标</h3>
<pre class="brush:css">
/*-------------------图标--------------------------*/
i{display:inline-block; margin-right:5px; font-style:normal;}
.i{ display:inline-block; text-align:center;}
.i1{background:url(../img/i1.png) no-repeat; width:14px; height:14px;}
.i2{background:url(../img/i2.png) no-repeat; width:13px; height:14px;}
.i3{background:url(../img/i3.png) no-repeat; width:16px; height:16px;}
.i4{background:url(../img/i4.png) no-repeat; width:16px; height:16px;}
.i5{background:url(../img/i5.png) no-repeat; width:16px; height:16px;}
.i6{background:url(../img/i6.png) no-repeat; width:78px; height:28px; line-height:28px; font-size:14px; color:#CF3600;}
.i7{background:url(../img/i7.png) no-repeat; width:14px; height:14px; line-height:14px; color:#fff; font-size:10px;}
.i8{background:url(../img/i8.png) no-repeat; width:14px; height:14px; line-height:14px; color:#fff; font-size:10px;}
.i9{background:url(../img/i9.png) no-repeat; width:15px; height:16px;}
.btn1{width:45px; height:22px; background:url(../img/btn1.jpg) no-repeat; color:#fff;}
.btn2{width:45px; height:22px; line-height:22px; display:inline-block; background:url(../img/btn2.jpg) no-repeat; text-align:center; color:#fff;}
.btn3{ width:82px; height:34px; font-size:18px; background:url(../img/m22-btn1.png) no-repeat; color:#fff;}
</pre>
把所有小图标的样式写在一起，方便后期有时间做css精灵的优化。
<h3>3、中部</h3>
<pre class="brush:css">
#b .r1{margin-bottom:10px;}
#b .r1 .c1{width:342px; margin-right:9px;}
#b .r1 .c2{width:342px;}
#b .r1 .c3{width:263px;}
#b .r2{ margin-bottom:10px;}
#b .r2 .c1{width:669px;}
#b .r2 .c2{width:245px;}
#b .r2{background:url(../img/r2.png) no-repeat; height:324px; padding:9px; margin-bottom:10px;}
#b .r3{margin-bottom:3px;}
#b .r3 .c1{ width:695px; height:1090px; background:url(../img/r3-c1.png) no-repeat;}
#b .r3 .c2{ width:262px;}
#b .r4 .c1{ width:695px;}
#b .r4 .c2{ width:262px;}
#b .r5 .c1{ width:695px; height:1051px; padding-top:14px; background:url(../img/r5-c1.png) no-repeat;}
#b .r5 .c2{ width:262px;}
</pre>

这次主要把中部整一起了，不再每个页面都从r1开始，以防止多页面整合。本来想把布局单独抽出来放页头，但是如果修改还要改结构，所以还是整一起好。只有布局才用r命名，这样每个r(n)选择器都能用到，也就不会乱了。
<h3>4、内页</h3>
<pre class="brush:css">
.pga{background:url(../img/pgn-body.jpg) no-repeat center 33px;}
.pga #h{padding-top:332px;}
.pga .m12{background:url(../img/pg3-m12.png) no-repeat; height:356px; padding:6px; margin-bottom:6px;}
.pg2 .m12{background:url(../img/m12.png) no-repeat; height:499px;}
.pg4 .m13{background:url(../img/pg4-m13.png) no-repeat; margin:0 8px; padding:8px 0;}
.pg2 #h .r1 .li2 a,
.pg3 #h .r1 .li3 a,
.pg4 #h .r1 .li4 a,
.pg5 #h .r1 .li5 a,
.pg6 #h .r1 .li6 a,
.pg7 #h .r1 .li7 a,
.pg8 #h .r1 .li8 a,
.pg9 #h .r1 .li9 a,
.pg10 #h .r1 .li10 a{color:#FFFC00;}
</pre>

内页使用pg区分，这里主要用来设置内页的公用头部和侧边栏模块样式调整，还有不同页面导航的选中状态，这样头部的结构就能公用了。
<h2>三、结语</h2>
代码放github了，页面地址（<a href="http://wenbin5243.github.com/bobing/">http://wenbin5243.github.com/bobing/</a>），代码地址（<a href="https://github.com/wenbin5243/bobing">https://github.com/wenbin5243/bobing</a>） 