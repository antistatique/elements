export default()=>{$(".tag-input").selectize({plugins:["remove_button"],render:{item:(e,t)=>`<div class="tag tag-primary">${t(e.text)}</div>`},create:e=>({value:e,text:e})})};