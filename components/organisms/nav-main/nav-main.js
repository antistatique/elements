const nav=()=>{const n="current-menu-parent",s="current-menu-ancestor",e=(n=!1)=>{const s=$(".nav-toggle");s.toggleClass("open");const e=s.offset().left+s.outerWidth(!0),a=s.offset().top-$(window).scrollTop();$(".nav-main").css("top",a),$("body").toggleClass("desktop-menu-open"),n&&$("body").hasClass("desktop-menu-open")?$(".nav-main").css("left",e):$(".nav-main").css("left","")};$(".nav-main .nav-back a").on("click",(function(e){e.preventDefault();const a=$(this).parents(),o=a[2];$(o).removeClass(s).removeClass(n);const t=a[4];$(t).removeClass(s).addClass(n)})),$(".nav-main .nav-arrow").on("click",(function(e){e.preventDefault();const a=$(this).parents(),o=a[0];$(o).addClass(n);const t=a[2];$(t).addClass(s).removeClass(n)})),$(".nav-toggle-mobile").on("click",(()=>{(()=>{const s=$(".nav-main .nav-menu>.current-menu-item");if(s.length>0){const e=s.parents()[1];$(e).addClass(n)}$("body").toggleClass("mobile-menu-open")})()})),$(".overlay").on("click",(n=>{n.preventDefault(),e()})),$(".nav-toggle").on("click",(function(){$(this).hasClass("nav-toggle-async")&&!$(this).hasClass("open")?($(this).addClass("is-loading"),$("#styleguide").length>0&&setTimeout((()=>$(".nav-toggle-async").trigger("loadend")),700)):e(!0)})),$(".nav-toggle").on("loadend",(function(){$(this).removeClass("is-loading"),e(!0)}))};export default nav;