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

    // 测试ajax 表单
    $(function(){
    	var options = {
    		target: '#usercom', // 将服务器返回的内容放入id为usercom的元素中
    		beforeSubmit: showRequest, // 提交前的回调函数
    		resetForm: true // 成功提交后，重置表单
    	};

    	// 提交表单
    	$("#form1").ajaxForm(options);
    });

    // 提交前
    function showRequest(formData, jqForm, options){
      // 验证问题输入是否为空
      var form1 = jqForm[0];
      if(!form1.question_input.value){
        alert("Please enter you question.");
        return false;
      }
    	var queryString = $.param(formData);// 组装数据，序列化表单元素
    	return true;
    }

    //历史记录面板，使用localstorage
    //  存储
    function saveStorage(id){
      var data = document.getElementById(id).innerHTML; //获取输入内容
      var time = new Date().getTime();
      localStorage.setItem(time,data);//以时间来操作为键值,时间不会有重复
      //alert("success");
      loadStorage("showmsg");

    }
    //将对象存储到数组中去，并将其按照时间先后排序
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
  //   $(function(){
  //    $('#questioninput').bind("myclick", function(){
  //          //$('#questioninput').attr("value","c");
           
  //       });
  //    $('#questioninput').trigger("myclick");
   
  // })

// function test(){
//     // alert("success1");
//     for(var i=0;i<10;i++){
//       localStorage.setItem(i,"sa");
//     }
// }
  // setInterval(function(){
  //   $('input[name=question_input]').value = 'a';
  //   saveStorage('usercom');
  // },100);
