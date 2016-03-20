window.onload=function(){
	
  // 主体轮波的实现
	var bimgs=$('.bimgs');
	var anniu=$('.anniu');
	var bannerbox=$('.bannerbox')[0];
	
	console.log(bannerbox)
	 var yanse=["#f85421","#fa2388","#47d9fe","rgb(242, 48, 56)","#ea5a1d","#48c3ef","#eb3f89","#1d3af8"]
	
	var num=0;
	function ceng(type){
		// 判断播放的方向
		if(type=="r"){
			num++
			if(num>=bimgs.length){
				num=0
			}
		}
		if(type=="l"){
			num--
			if(num<0){
				num=bimgs.length-1;
			}
		}
		
		for(var i=0; i<bimgs.length; i++){
			bimgs[i].style.zIndex=2;
			anniu[i].style.background="black";
		}
		bimgs[num].style.zIndex=3;
		anniu[num].style.background="red";
		bannerbox.style.background=yanse[num];
		
	}
	var t=setInterval(function(){ceng("r")},2000) 

	for(var i=0; i<anniu.length; i++){
		anniu[i].index=i;
		anniu[i].onmouseover=function(){
			clearInterval(t);
			for(var j=0; j<anniu.length; j++){
					bimgs[j].style.zIndex=2;
					anniu[j].style.background="black";
			}
			bimgs[this.index].style.zIndex=3;
			anniu[this.index].style.background="red";
			bannerbox.style.background=yanse[this.index];
			}
		anniu[i].onmouseout=function(){
			t=setInterval(function(){ceng("r")},2000)
		    num=this.index;
		}
		
	}

	var leftbtn=$('.leftbtn')[0];
	var rightbtn=$('.rightbtn')[0];
	var bannercenter=$('.banner-center')[0];

	rightbtn.onclick=function(){
		ceng("r")
	}
	leftbtn.onclick=function(){
		ceng("l")
	}

	 bannercenter.onmouseover=function(){
		clearInterval(t);
		leftbtn.style.display="block";
		rightbtn.style.display="block";
	}

	 bannercenter.onmouseout=function(){
		leftbtn.style.display="none";
		rightbtn.style.display="none";
		t=setInterval(function(){ceng("r")},2000)
	}




// // 输入框效果
	var shuru=getClass('ssk-nr')[0];
	console.log(shuru);
	shuru.onfocus=function(){
		if(shuru.value=="圣诞节跨年幸福购 5折抢福袋"){
			shuru.value="";
		}
		
	}
	shuru.onblur=function(){
		if(shuru.value==""){
			shuru.value="圣诞节跨年幸福购 5折抢福袋";
		}
		
	}


// // 二级菜单出现

	var  bannernhd=$('.bannern-hd');
	var list=$('.list');
	console.log(list.length)
	for(var i=0; i<bannernhd.length; i++){
		bannernhd[i].index=i;
		bannernhd[i].onmouseover=function(){
			list[this.index].style.display="block";
			// animate(bannernhd[this.index],{paddingLeft:5},100)
			bannernhd[this.index].style.paddingLeft="5px";
			

		}
		bannernhd[i].onmouseout=function(){
			list[this.index].style.display="none";
			bannernhd[this.index].style.paddingLeft=0;
			// animate(bannernhd[this.index],{paddingLeft:0},100)
		}
	}





 // 今日必团图片左移
	var modimgs=$('.modimgs');
	for(var i=0; i<modimgs.length; i++){
		modimgs[i].index=i;
		modimgs[i].onmouseover=function(){
			animate(modimgs[this.index], {marginLeft:-10},200,Tween.Linear)
			
		}
		modimgs[i].onmouseout=function(){
			animate(modimgs[this.index], {marginLeft:0},200,Tween.Linear)
		
		}

	}

// 图片变亮效果
	var liang=$('.liang');
	for(var i=0; i<liang.length; i++){
		liang[i].index=i;
		liang[i].onmouseover=function(){
			animate(liang[this.index],{opacity:0.6},100,function(){
					animate(liang[this.index],{opacity:1})
			})
		
		}
	}


// // 无缝轮波

  var  fengchang=$(".fengchang")[0];
  var  xiaoleft=$(".xiaoleft")[0];
  var  xiaoright=$(".xiaoright")[0];

      function moveleft(){
      animate(fengchang,{left:-110},600,Tween.Linear,function(){
                        var first=getFirst(fengchang);
                      	var last=getLast(fengchang);
                        fengchang.appendChild(first);
                     	fengchang.style.left=0;
                  })
               }
    
        function moveright(){
                  var last=getLast(fengchang);
                  fengchang.insertBefore(last,getFirst(fengchang));
                  animate(fengchang,{left:110},600,Tween.Linear)
                  fengchang.style.left=-110+"px";
                   animate(fengchang,{left:0},600,Tween.Linear);
         }
         var t1=setInterval(moveleft,2000);
          xiaoleft.onmouseover=xiaoright.onmouseover=function(){
                  clearInterval(t1);
               }
           xiaoleft.onmouseout=xiaoright.onmouseout=function(){
                  t1=setInterval(moveleft,2000);
               }
             	xiaoleft.onclick=function(){
                  moveleft();
               }

               xiaoright.onclick=function(){
                  moveright();
               }





// // 闪购效果

var shiyiz=$('.shiyiz');


var num11=0;
function shan(){
	for(var i=0; i<shiyiz.length; i++){
		if(num11==3){
			num11=0;
		}
		shiyiz[i].style.display="none";
	}
	shiyiz[num11].style.display="block";
	num11++;
}
var t11=setInterval(shan,2000)

var shanxuan=$('.shanxuan');
for(var i=0; i<shanxuan.length; i++){
	shanxuan[i].index=i;
	shanxuan[i].onmouseover=function(){
		clearInterval(t11);
		for(var j=0; j<shanxuan.length; j++){
				shiyiz[j].style.display="none";
		}
		shiyiz[this.index].style.display="block";

	}
	shanxuan[i].onmouseout=function(){
			t11=setInterval(shan,2000)
		}
}


// // 楼层跳转

var turns=$(".turns");
var turn=$(".turn");
var turnbox=$(".floor-turn")[0];
var floors=$(".floor");
for(var i=0;i<turn.length;i++)
{
  turn[i].index=i;
  turn[i].onmouseover=function()
  {
    turns[this.index].style.display="block";
  }
  turn[i].onmouseout=function()
  {
    turns[this.index].style.display="none";
  }
}
window.onscroll=function()
{
   var scrollT=getScrollT();
   document.title=scrollT;
   if(scrollT>888)
   {
     turnbox.style.display="block";
   }
   else
   {
     turnbox.style.display="none";
   }
   for(var i=0;i<floors.length;i++)
   {
     if(scrollT>(floors[i].offsetTop)-150)
     {
        for(var j=0;j<turns.length;j++)
        {
          turns[j].style.display="none";
        }
        turns[i].style.display="block";
     }
   }
}

for(var i=0;i<turn.length;i++)
{
  turn[i].index=i;
  turn[i].onclick=function()
  {
    var obj=document.documentElement.scrollTop?document.documentElement:document.body;
   animate(obj,{scrollTop:floors[this.index].offsetTop-100});
   for(var j=0;j<turns.length;j++)
   {
     turns[j].style.display="none";
   }
    turns[this.index].style.display="block";
  }
}
var fanh=$(".turn-top")[0];
fanh.onclick=function()
{
  var obj=document.documentElement.scrollTop?document.documentElement:document.body;
  animate(obj,{scrollTop:0});
}
fanh.onmouseover=function()
{
  turns[10].style.display="block";
}
fanh.onmouseoout=function()
{
  turns[10].style.display="none";
}

// // 楼层结束


// 顶部二级菜单

var topone=$(".dingdh-dingw")[0];
	var xiala1=$(".dingdh-xialabox")[0];
	var diqu=$(".diqu")[0];
	var xiala2=$(".diqubox")[0];
	var arrow=$(".diqu-xiala")[0];
	var topworda=$(".dingdh-b-1")[0];
    var xiala3=$(".dingdh-b-1-xiala")[0];
    var wordone=$(".ones")[0];
    var wordtwobox=$(".dingdh-b-2")[0];
    var wordtwo=$(".scz")[0];
    var xiala4=$(".dingdh-b-2-xiala")[0];
    topone.onmouseover=function()
    {
       xiala1.style.display="block";
    }
    topone.onmouseout=function()
    {
       xiala1.style.display="none";
    }
    diqu.onmouseover=function()
    {
       xiala2.style.display="block";
       arrow.style.backgroundPosition="-288px -85px";
    }
    diqu.onmouseout=function()
    {
       xiala2.style.display="none";
       arrow.style.backgroundPosition="-288px 0px";
    }
    topworda.onmouseover=function()
    {
       topworda.style.borderColor="#ccc";
       topworda.style.background="#fff";
       xiala3.style.display="block";
       wordone.style.color="#e60012";
    }
    topworda.onmouseout=function()
    {
       xiala3.style.display="none";
       wordone.style.color="#666";
       topworda.style.background="#fafafa";
       topworda.style.borderColor="#fafafa";
    }
    var leftb1=$(".dingdh-b-1box")[0];
    wordtwobox.onmouseover=function()
    {
       wordtwobox.style.borderColor="#ccc";
       wordtwobox.style.background="#fff";
       leftb1.style.borderColor="#fafafa";
       xiala4.style.display="block";
       wordtwo.style.color="#e60012";
    }
    wordtwobox.onmouseout=function()
    {
       xiala4.style.display="none";
       wordtwo.style.color="#666";
       wordtwobox.style.background="#fafafa;"
       wordtwobox.style.borderColor="#fafafa";
       leftb1.style.borderColor="#ccc";
    }
    var leftb2=$(".dingdh-b-2box")[0];
    var word3box=$(".dingdh-b-3")[0];
    var word3=$(".sz")[0];
    var xiala5=$(".dingdh-b-3box-xiala")[0];
    word3box.onmouseover=function()
    {
       word3box.style.borderColor="#ccc";
       xiala5.style.display="block";
       word3box.style.background="#fff";
       word3.style.color="#e60012";
       leftb2.style.borderColor="#fafafa";
    }
    word3box.onmouseout=function()
    {
       xiala5.style.display="none";
       word3box.style.background="#fafafa";
       word3box.style.borderColor="#fafafa";
       word3.style.color="#666";
       leftb2.style.borderColor="#ccc";
    }
    var left3=$(".dingdh-b-3box")[0];
    var word4box=$(".dingdh-b-4")[0];
    var word4=$(".kehu")[0];
    var xiala6=$(".dingdh-b-4-xiala")[0];
     word4box.onmouseover=function()
    {
       word4box.style.borderColor="#ccc";
       word4box.style.background="#fff";
       xiala6.style.display="block";
       word4.style.color="#e60012";
       left3.style.borderColor="#fafafa";
    }
    word4box.onmouseout=function()
    {
       xiala6.style.display="none";
       word4.style.color="#666";
       word4box.style.background="#fafafa";
       word4box.style.borderColor="#fafafa";
       left3.style.borderColor="#ccc";
    }
    var left4=$(".dingdh-b-4box")[0];
    var word5box=$(".net")[0];
    var word5=$(".nets")[0];
    var xiala7=$(".dingdh-b-5-xiala")[0];
      word5box.onmouseover=function()
    {
       word5box.style.borderColor="#ccc";
       xiala7.style.display="block";
       word5.style.color="#e60012";
       word5box.style.background="#fff";
       left4.style.borderColor="#fafafa";
    }
    word5box.onmouseout=function()
    {
       xiala7.style.display="none";
       word5box.style.borderColor="#fafafa";
       word5.style.color="#666";
       word5box.style.background="#fafafa";
       left4.style.borderColor="#ccc";
    }
    var wx=$(".dingdh-b-7")[0];
    var xiala8=$(".dingdh-b-7-xiala")[0];
      wx.onmouseover=function()
    {
       xiala8.style.display="block";
    }
    wx.onmouseout=function()
    {
       xiala8.style.display="none";}
    // var texts=$(".texts")[0];
    // var textsD=$(".texts-xiala")[0];
    // var flag=false;
    // texts.onfocus=texts.onclick=function()
    // {
    // 	var words=texts.value;
    // 	if(words=="年度畅销榜，幸福大盘点")
    // 	{
    // 		texts.value="";
    // 	}
    //   animate(textsD,{height:240});
    //   flag=true;
    // }
    // texts.onblur=function()
    // {
    // 	var words=texts.value;
    // 	if(words=="")
    // 	{
    // 		texts.value="年度畅销榜，幸福大盘点";
    // 	}
    // }
    // texts.onmouseover=function()
    // {
    //   if(flag)
    //   {
    //     animate(textsD,{height:240});
    //     flag=false;
    //   }
    // }
    // textsD.onmouseover=function()
    // {
    //   animate(textsD,{height:240});
    // }
    // texts.onmouseout=textsD.onmouseout=function()
    // {
    //   animate(textsD,{height:0});
    // }
    // var gouwu=$(".check-contentf")[0];
    // var dengL=$(".denglubox")[0]
    // gouwu.onmouseover=function()
    // {
    //   dengL.style.display="block";
    // }
    // gouwu.onmouseout=function()
    // {
    //   dengL.style.display="none";
    // }




// 楼层轮播



// //  楼层小轮波
//   function louceng(a){
//     var bannerchang=$('.floorchang')[a];
//     var btn2=$('.btn2');
//     var btn=$('.btn');
 
//   var num12=1;
//   animate(btn2[0],{width:30},1000,Tween.Linear)
//   function move12(){

//     if(num12==3){
//       num12=0;
//     }
//     for(var i=0; i<btn2.length; i++){
      
//       for(var j=0; j<btn2.length; j++){
//         btn2[j].style.width=0;
//       }
//       animate(btn2[num12],{width:30},1000,Tween.Linear)
//       animate(bannerchang,{left:-330*num12},1000,Tween.Linear)
//     }
    
//     num12++;
//   }
//   var t12=setInterval(move12,3000);

//   }


// louceng(0);
// louceng(1);
// louceng(2);
// louceng(3);
// louceng(4);
// louceng(5);
// louceng(6);
// louceng(7);
  // var btn=$('.btn');
  // console.log(btn)
  
  // for(var i=0; i<btn.length; i++){
  //    btn[i].index=i;
  //    btn[i].onmouseover=function(){
  //     clearInterval(t);
  //     for(var j=0; j<btn2.length; j++){
  //         btn2[j].style.width=0;
  //     }
  //     animate(btn2[this.index],{width:30},1000,Tween.Linear)
  //     animate(bannerchang,{left:-330*this.index},1000,Tween.Linear)

  //    }
  //    btn[i].onmouseout=function(){
  //     t12=setInterval(move12,3000);
  //     num12=this.index+1;
  //    }
  
  // }

 
  
 //楼层轮播
    function luoceng(ceng){
        var imgsbox1=$(".imgsbox1")[ceng];
        var bigbox=$(".bigbox");
        var rec=$("a",bigbox[ceng]);
        var num1=1;
        function move1(){
            if(num1==3){
                animate(imgsbox1,{left:-330*num1},600,Tween.Linear,function(){
                    animate(imgsbox1,{left:0},0);
                })
                num1=0;
            } 
            else{
                animate(imgsbox1,{left:-330*num1},600,Tween.Linear);
                
            } 
            for(var i1=0;i1<rec.length;i1++){
                rec[i1].style.background="#dddddd";
            }
            rec[num1].style.background="#ff3c3c";
            num1++;
        } 
        var t1=setInterval(move1,2000);

        for(var i1=0;i1<rec.length;i1++){
            rec[i1].index=i1;
            rec[i1].onmouseover=function(){
                clearInterval(t2);
                for(var j1=0;j1<rec.length;j1++){
                    // rec[j1].style.background="#dddddd";

                }
                animate(imgsbox1,{left:-330*this.index},600,Tween.Linear);
                this.style.background="#ff3c3c";
            }

            rec[i1].onmouseout=function(){
                num1=this.index+1
                t2=setInterval(move1,2000);
            }
        }
    } 
    
    for(var i=0;i<8;i++){
        luoceng(i);
    }



    var brand=$(".brand")[0];
    var lxz=$(".lxz")[0];
    var lxy=$(".lxy")[0];

    function moveLeft3(){
        animate(brand,{left:-100},600,Tween.Linear,function(){
            var first=getFirst(brand);
            var last=getLast(brand);
            brand.insertAfter(first,last);
            brand.style.left=0;
        });
    }

    function moveRight3(){

        var first=getFirst(brand);
        var last=getLast(brand);
        brand.insertBefore(last,first);
        brand.style.left=-100+"px";
        animate(brand,{left:0},600,Tween.Linear);
    }



    lxz.onmouseover=function(){
        clearInterval(t3);
        this.style.backgroundColor="#f0efef";
    }
    lxy.onmouseover=function(){
        clearInterval(t3);
        this.style.backgroundColor="#f0efef";
    }
    lxz.onmouseout=lxy.onmouseout=function(){
        t3=setInterval(moveLeft3,2000);
        this.style.backgroundColor="";

    }

    lxz.onclick=function(){
        moveLeft3();
    }
    lxy.onclick=function(){
        moveRight3();
    }

    var t3=setInterval(moveLeft3,2000);



}