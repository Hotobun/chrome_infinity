// 隐藏搜索框 
// 鼠标移动到搜索框区域再取消隐藏 
// 5秒内无键盘操作 隐藏搜索框
// 若搜索框已开启 移动鼠标会重置计时器

window.onload = function () {
    var search_flag_id = window.setInterval(function () {
        var search_father = document.getElementsByClassName("gH3horrwzk1vWQb_tjFZ_")[0];
        var search_div = document.getElementsByClassName("j6WjrWzBT0VSJtD8yafTe")[0]; //获取到div的id
        var search_input = document.getElementsByClassName("DmH9A0dYKnyClIjOJ5xWt")[0];
        if (search_father != undefined && search_div != undefined && search_input != undefined) {
            var keyboard_count = 0
            var keyboard_timeout = 6
            search_flag = false
            clearInterval(search_flag_id);
            // 循环已停止 均已获得标签元素
            // 设置搜索框焦点
            search_input.focus()
            // 一开始时 先隐藏掉搜索框 
            search_div.style.display = "none";
            // 为上级div加上鼠标监控  
            search_father.onmouseover = function () {
                search_div.style.display = "block";
                search_input.focus()
                keyboard_count = 0
            }

            window.setInterval(input_style_status, 1000)

            function input_style_status() {
                keyboard_count++;
                if (keyboard_count >= keyboard_timeout) {
                    search_div.style.display = "none";
                }
            }
            // 监听键盘
            document.onkeydown = function () {
                keyboard_count = 0;
            }
            // 监听鼠标
            document.onmousemove = function (event) {
                var x1 = event.clientX;
                var y1 = event.clientY;
                if (search_div.style.display == "block") {
                    if (x != x1 || y != y1) {
                        keyboard_count = 0;
                    }
                }
                x = x1;
                y = y1;
            };
        }
    }, 3)
}