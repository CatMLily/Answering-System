    // 使用须知动画定义
    $(function(){
      $("#help").bind("click",function(){
        var $content = $(this).next();
        if($content.is(":visible")){
          $content.slideUp(500);
        }else{
          $content.slideDown(500);
        }
      })
    })
    // 历史记录动画定义，点击显示历史记录，展开显示历史记录
    $(function(){
      $("#showhis").bind("click",function(){
        var $content = $(this).next();
        if($content.is(":visible")){
          $content.slideUp(500);
        }else{
          $content.slideDown(500);
        }
      })
    })

    //个性化人物的选择，点击按钮更换图片及语气
    $(function(){
        $("#replace").toggle(function(){
            $("img.place").attr("src","image/mai.gif");
            $("#display p:first").empty().append("En...I think...");
        },
        function(){
            $("img.place").attr("src","image/nice.gif");
            $("#display p:first").empty().append("Whatever you ask, I will give you a good answer~  (´・ω・`)");
        },
        function(){
            $("img.place").attr("src","image/cute.gif");
            $("#display p:first").empty().append("Just ask");
        }
        );
    });

        // 表单的异步提交，与中间件对接返回数据
    (function($) {
      var config = {
        url: 'http://115.28.26.5/middleware',
        form: $('#form1')
      }
      $('document').ready(function() {
        $('input[name=form_submit]').click(function(event) {
          // console.log($('#form1').serialize());
          $.post(config.url, $('#form1').serialize(), function(data) {
            // console.log(data);
            data = JSON.parse(data);
              if (data.error == '200') {
                $('#usercom').html(data.content);
              } else {
                alert(data.content);
              }
          });

          return false;
        });      
      })

    })(jQuery);
     
    // 历史记录面板，使用localstorage
    // 存储
    function saveStorage(id){
      var data = document.getElementById(id).innerHTML; //获取输入内容
      var time = new Date().getTime();
      localStorage.setItem(time,data);//以时间来操作为键值,时间不会有重复
      //alert("success");
      loadStorage("showmsg");

    }
    // 将对象存储到数组中去，并将其按照时间先后排序
    function loadarr(){
      var arr = new Array();
      for(var i = 0; i<localStorage.length; i++){
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        if(value != ""){
        arr.push({value: value, key: key});
        }
      }
      arr.sort(function(a, b) {
        return a.key - b.key;
      });

      console.log(arr);
      return arr;

    }

    //取出并显示数据
    function loadStorage(id){
      var arr = loadarr();
      var result = "";
      for( var j = 0; j<arr.length; j++){
        result += arr[j].value+"</br>";

      }
      var target = document.getElementById(id);
      target.innerHTML = result;

    }

    // 清除历史记录
    /*$(function(){
        $("#clear").click(function(){
            localStorage.clear();
        })
    })*/

    // 测试localstorage
    // setInterval(function(){
    //   $('input[name=question_input]').value = 'a';
    //   saveStorage('usercom');
    // },100);
