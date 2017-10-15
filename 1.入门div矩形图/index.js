var data = [30, 86, 168, 281, 303, 365];

d3.select(".chart")  //选择容器
.selectAll("div")  //选择要加载数据的容器(此时还不存在)
.data(data) //加载数据的容器添加数据
.enter() //将数据容器添加到页面
.append("div") //数据容器每一条添加一个div作为容器
.style("width", function(d) { return d + "px"; }) //每一个div设置样式
.text(function(d) { return d; }); //每一个div设置内容
