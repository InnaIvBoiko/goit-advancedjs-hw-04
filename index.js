import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{n as t,r as n,t as r}from"./assets/vendor-D7fSKxL3.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=e(n(),1),a=`42438077-634a4b32cfcaa96ebaa8c4719`,o=`https://pixabay.com/api/`;async function s(e){return(await t.get(o,{params:{key:a,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0}})).data}var c=e(r(),1),l=document.querySelector(`.gallery`),u=document.querySelector(`.loader`),d=new c.default(`.gallery a`,{captionsData:`alt`,captionDelay:250,captionPosition:`bottom`});function f(e){let t=e.map(({webformatURL:e,largeImageURL:t,tags:n,likes:r,views:i,comments:a,downloads:o})=>`
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
        </li>`).join(``);l.insertAdjacentHTML(`beforeend`,t),d.refresh()}function p(){l.innerHTML=``}function m(){u.classList.add(`is-active`)}function h(){u.classList.remove(`is-active`)}var g=document.querySelector(`.form`);g.addEventListener(`submit`,e=>{e.preventDefault();let t=e.target.elements[`search-text`].value.trim();t&&(p(),m(),s(t).then(e=>{if(e.hits.length===0){i.default.error({message:`Sorry, there are no images matching your search query. Please try again!`,position:`topRight`,messageColor:`#fff`,backgroundColor:`#EF4040`,timeout:3e3});return}f(e.hits)}).catch(()=>{i.default.error({message:`Something went wrong. Please try again later.`,position:`topRight`,messageColor:`#fff`,backgroundColor:`#EF4040`,timeout:3e3})}).finally(()=>{h(),g.reset()}))});
//# sourceMappingURL=index.js.map