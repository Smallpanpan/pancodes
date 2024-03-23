window.onload = function () {
    //这是外层div
    var tableDiv = document.querySelector("#tableDiv");     //JS 获取dome 元素
    var tableDivbyId = document.getElementById("tableDiv");   //  获取node 节点元素
    var title = document.querySelector('.body-title');
    // 返回body元素
    

    // var tableDivJq = $('#tableDiv')
    console.log('tableDiv',tableDiv.className);
    console.log('tableDivbyId',tableDivbyId);
    console.log('title',title.style);
    // TODO #tableDiv .body-title 获取 节点、子节点CSS 属性
    console.log('title',title.style);
    // console.log('tableDiv',tableDivBody);
    // console.log('title',tableDivBody);
    // TODO #tableDiv .body-title 获取 节点、子节点HTML 标签
    console.log("innerHTML",title.innerHTML);
    // TODO tableDiv 获取 节点、子节点CSS 属性
    console.log("tableinnerHTML",tableDiv.innerHTML);
    console.log("tableinnertext",typeof tableDiv.innerText);
    // TODO CSS 外部
    // TODO获取 事件响应
    // appendChild 创建新节点
    // 

    //这是水平可滚动距离
    var diff = tableDiv.scrollWidth - tableDiv.clientWidth;
    //获取最后一列单元格，在这个例子里，最后一列是第5列
    var opts = tableDiv.querySelectorAll("tr td:nth-child(5),tr th:nth-child(5)");
    //获取前两列单元格
    var names = tableDiv.querySelectorAll(
        "tr td:nth-child(1),tr th:nth-child(1),tr td:nth-child(2),tr th:nth-child(2)");

    //如果水平有滚动条，那一开始就需要让最后一列偏移
    if (diff > 0) {
        for (var i = 0; i < opts.length; i++) {
            opts[i].style.transform = "translateX(-" + diff + "px)";
        }
    }

    /*******固定的逻辑基本就下面这些*********/
    var scroll_x = 0;
    var scroll_y = 0;
    tableDiv.addEventListener("scroll", function (e) {
        //垂直滚动固定头
        if (this.scrollTop != scroll_y) {
            scroll_y = this.scrollTop;
            this.querySelector("thead").style.transform = "translate3d(0," + this.scrollTop +
                "px,.1px)";
        }
        //水平滚动固定前两列和最后一列
        if (this.scrollLeft != scroll_x) {
            scroll_x = this.scrollLeft;
            for (var i = 0; i < opts.length; i++) {
                opts[i].style.transform = "translateX(-" + (diff - scroll_x) + "px)";
            }
            for (var i = 0; i < names.length; i++) {
                names[i].style.transform = "translateX(" + scroll_x + "px)";
            }
        }
    })
}