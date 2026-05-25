import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{n as t,r as n,t as r}from"./assets/vendor-Cwl4DhC8.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=e(n(),1),a=`42438077-634a4b32cfcaa96ebaa8c4719`,o=`https://pixabay.com/api/`;async function s(e,n){return(await t.get(o,{params:{key:a,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0,page:n,per_page:15}})).data}var c=document.querySelector(`.gallery`),l=document.querySelector(`.loader`),u=document.querySelector(`.load-more`),d={captionsData:`alt`,captionDelay:250,captionPosition:`bottom`};function f(){let e=new r(`.gallery a`,d);return e.refresh=()=>{e.destroy(),p=f()},e}var p=f();function m(e){let t=e.map(({webformatURL:e,largeImageURL:t,tags:n,likes:r,views:i,comments:a,downloads:o})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${t}">
                <img
                    class="gallery-image"
                    src="${e}"
                    alt="${n}"
                />
            </a>
            <div class="gallery-info">
                <div class="column">
                    <h2>Likes</h2>
                    <p>${r}</p>
                </div>
                <div class="column">
                    <h2>Views</h2>
                    <p>${i}</p>
                </div>
                <div class="column">
                    <h2>Comments</h2>
                    <p>${a}</p>
                </div>
                <div class="column">
                    <h2>Downloads</h2>
                    <p>${o}</p>
                </div>
            </div>
        </li>`).join(``);c.insertAdjacentHTML(`beforeend`,t),p.refresh()}function h(){c.innerHTML=``}function g(){l.classList.add(`is-active`)}function _(){l.classList.remove(`is-active`)}function v(){u.classList.add(`is-visible`)}function y(){u.classList.remove(`is-visible`)}var b=document.querySelector(`.form`),x=document.querySelector(`.load-more`),S=document.querySelector(`.gallery`),C=`We're sorry, but you've reached the end of search results.`,w=``,T=1,E=0;function D(){i.default.info({message:C,position:`topRight`,messageColor:`#fff`,backgroundColor:`#6366f1`,timeout:3e3})}function O(e){i.default.error({message:e,position:`topRight`,messageColor:`#fff`,backgroundColor:`#EF4040`,timeout:3e3})}b.addEventListener(`submit`,async e=>{e.preventDefault();let t=e.target.elements[`search-text`].value.trim();if(t){w=t,T=1,E=0,h(),y(),g();try{let e=await s(w,T);if(E=e.totalHits,e.hits.length===0){O(`Sorry, there are no images matching your search query. Please try again!`);return}m(e.hits),T*15<E?v():D()}catch{O(`Something went wrong. Please try again later.`)}finally{_(),b.reset()}}}),x.addEventListener(`click`,async()=>{T+=1,y(),g();try{m((await s(w,T)).hits);let e=S.firstElementChild;if(e){let{height:t}=e.getBoundingClientRect();window.scrollBy({top:t*2,behavior:`smooth`})}T*15>=E?D():v()}catch{O(`Something went wrong. Please try again later.`)}finally{_()}});
//# sourceMappingURL=index.js.map