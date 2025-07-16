    // 滚动导航栏的颜色
    window.addEventListener('scroll',function(){
        if(window.scrollY<=0)
    {
        document.querySelector('.head-container').style.backgroundColor='rgba(255, 103, 151,0)'
    }
    else
    {
        document.querySelector('.head-container').style.backgroundColor='black'
    }
    })
    //通过箭头切换图片
    let mySwiper1=new Swiper('#change1',{
        loop:true,//轮播效果，第三张过后回到第一张
        autoplay:{
            delay:4000,
            disableOnInteraction:false,
        },
        navigation:{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
        },
        pagination: false,
    });
    let mySwiper2=new Swiper('#change2',{
        loop:true,
        autoplay:{
            delay:4000,
            disableOnInteraction:false,
        },
        navigation:{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
        },
        pagination: false,
    });
    let mySwiper3=new Swiper('#change3',{
        loop:true,
        autoplay:{
            delay:4000,
            disableOnInteraction:false,
        },
        navigation:{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
        },
        pagination: false,
    });
    let mySwiper4=new Swiper('#change4',{
        loop:true,
        autoplay:{
            delay:4000,
            disableOnInteraction:false,
        },
        navigation:{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
        },
        pagination: false,
    });
    //分页器动画
    const pagination1=document.querySelector(".custom-pagination1")
    let totalslider=3;

    function upgradesegment1(){
    let start1=(mySwiper1.realIndex/totalslider)*100;
    let end1=((mySwiper1.realIndex+1)/totalslider)*100;
        pagination1.style.setProperty('--start1',`${start1}%`)
        pagination1.style.setProperty('--end1',`${end1}%`)
    }
    const pagination2=document.querySelector(".custom-pagination2")
    function upgradesegment2(){
            let start2=(mySwiper2.realIndex/totalslider)*100;
    let end2=((mySwiper2.realIndex+1)/totalslider)*100;
        pagination2.style.setProperty('--start2',`${start2}%`)
        pagination2.style.setProperty('--end2',`${end2}%`)
    }
    const pagination3=document.querySelector(".custom-pagination3")
    function upgradesegment3(){
            let start3=(mySwiper3.realIndex/5)*100;
    let end3=((mySwiper3.realIndex+1)/5)*100;
        pagination3.style.setProperty('--start3',`${start3}%`)
        pagination3.style.setProperty('--end3',`${end3}%`)
    }
    const pagination4=document.querySelector(".custom-pagination4")
    function upgradesegment4(){
        let start4=(mySwiper4.realIndex/4)*100;
        let end4=((mySwiper4.realIndex+1)/4)*100;
        pagination4.style.setProperty('--start4',`${start4}%`)
        pagination4.style.setProperty('--end4',`${end4}%`)
    }
    //监听事件
    mySwiper1.on('slideChange',upgradesegment1);
    mySwiper2.on('slideChange',upgradesegment2);
    mySwiper3.on('slideChange',upgradesegment3);
    mySwiper4.on('slideChange',upgradesegment4);
    // 分页器的点击跳转
    pagination1.addEventListener('click',function(e){
        const rect=pagination1.getBoundingClientRect();//获取分页器元素的位置与宽度
        const clickposition=e.clientX-rect.left;//通过获取点击事件的X坐标减去分页器元素左边位置的坐标获取差值
        const perc=(clickposition/rect.width)*100;
        const targetindex=Math.floor(perc/33.3)
        mySwiper1.slideTo(targetindex);
        
    })
    pagination2.addEventListener('click',function(e){
        const rect=pagination2.getBoundingClientRect();
        const clickposition=e.clientX-rect.left;
        const perc=(clickposition/rect.width)*100;
        const targetindex=Math.floor(perc/33.3)
        mySwiper2.slideTo(targetindex);
    })
    pagination3.addEventListener('click',function(e){
        const rect=pagination3.getBoundingClientRect();
        const clickposition=e.clientX-rect.left;
        const perc=(clickposition/rect.width)*100;
        const targetindex=Math.floor(perc/20)
        mySwiper3.slideTo(targetindex);
    })
    pagination4.addEventListener('click',function(e){
        const rect=pagination4.getBoundingClientRect();
        const clickposition=e.clientX-rect.left;
        const perc=(clickposition/rect.width)*100;
        const targetindex=Math.floor(perc/25)
        mySwiper4.slideTo(targetindex);
    })
    //分页器：鼠标移动到对应区域时高亮
    pagination1.addEventListener('mousemove',function(e){
        const rect=pagination1.getBoundingClientRect();
        const clickposition=e.clientX-rect.left;
        const perc=(clickposition/rect.width)*100;
        const targetindex=Math.floor(perc/33.3)
        pagination1.style.setProperty('--hover-start1',`${targetindex*33.3}%`)
        pagination1.style.setProperty('--hover-end1',`${(targetindex+1)*33.3}%`)
    });
    pagination1.addEventListener('mouseleave',function(){
        pagination1.style.setProperty('--hover-start1','0%');
        pagination1.style.setProperty('--hover-end1','0%')
    })

    pagination2.addEventListener('mousemove',function(e){
        const rect=pagination2.getBoundingClientRect();
        const clickposition=e.clientX-rect.left;
        const perc=(clickposition/rect.width)*100;
        const targetindex=Math.floor(perc/33.3)
        pagination2.style.setProperty('--hover-start2',`${targetindex*33.3}%`)
        pagination2.style.setProperty('--hover-end2',`${(targetindex+1)*33.3}%`)
    });
    pagination2.addEventListener('mouseleave',function(){
        pagination2.style.setProperty('--hover-start2','0%');
        pagination2.style.setProperty('--hover-end2','0%')
    })

    pagination3.addEventListener('mousemove',function(e){
        const rect=pagination3.getBoundingClientRect();
        const clickposition=e.clientX-rect.left;
        const perc=(clickposition/rect.width)*100;
        const targetindex=Math.floor(perc/20)
        pagination3.style.setProperty('--hover-start3',`${targetindex*20}%`)
        pagination3.style.setProperty('--hover-end3',`${(targetindex+1)*20}%`)
    });
    pagination3.addEventListener('mouseleave',function(){
        pagination3.style.setProperty('--hover-start3','0%');
        pagination3.style.setProperty('--hover-end3','0%')
    })
    pagination4.addEventListener('mousemove',function(e){
        const rect=pagination4.getBoundingClientRect();
        const clickposition=e.clientX-rect.left;
        const perc=(clickposition/rect.width)*100;
        const targetindex=Math.floor(perc/25)
        pagination4.style.setProperty('--hover-start4',`${targetindex*25}%`)
        pagination4.style.setProperty('--hover-end4',`${(targetindex+1)*25}%`)
    });
    pagination4.addEventListener('mouseleave',function(){
        pagination4.style.setProperty('--hover-start4','0%');
        pagination4.style.setProperty('--hover-end4','0%')
    })
    //TOP按钮出现
    let top_button=document.querySelector('.top-button img');
    top_button.style.opacity=0;
    window.addEventListener('scroll',function(){
        if(window.scrollY>0)
        {
            top_button.style.opacity=1;
        }
        else
        {
            top_button.style.opacity=0;
        }
    })
    let top_button1=document.querySelector('.top-button img')
    top_button1.addEventListener('click',function(){
        window.scrollTo({
            top:0,
            behavior:"smooth",
        });
    })
    //TOP按钮的一键到顶
    //页尾图片切换
    let currentindex=0;
    let images=document.querySelectorAll('.image');
    function showimage(){
        images[currentindex].classList.remove('active');
        currentindex=(currentindex+1)%2;
        images[currentindex].classList.add('active');
    }
     images[0].classList.add('active');
    setInterval(showimage,3000)
