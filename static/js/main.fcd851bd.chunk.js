(this["webpackJsonpreact-homework-3-image-finder"]=this["webpackJsonpreact-homework-3-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__vAQmn",search_form:"SearchBar_search_form__2dbc0",input_field:"SearchBar_input_field__2U-9a",input_label:"SearchBar_input_label__1pSiD"}},12:function(e,t,a){e.exports={information_container:"Api_information_container__nJCo_",close_btn:"Api_close_btn__2jPk0",modal_img:"Api_modal_img__UXvek"}},13:function(e,t,a){e.exports={modal:"Modal_modal__1vwov",modal_overlay:"Modal_modal_overlay__1rG9E",modal_content:"Modal_modal_content__o8ujy","is-open":"Modal_is-open__1g2Nb",large_img_container:"Modal_large_img_container__24FON",img_card:"Modal_img_card__3VxXo"}},15:function(e,t,a){e.exports={btn_container:"LoadMoreButton_btn_container__2Ca94",load_more_btn:"LoadMoreButton_load_more_btn__3maKU"}},19:function(e,t,a){e.exports={loading:"Loading_loading__2Kl1U"}},21:function(e,t,a){e.exports={type_something:"MainScreen_type_something__qqS-i"}},26:function(e,t,a){},3:function(e,t,a){e.exports={gallery:"Hits_gallery__3qoOr",showGallery:"Hits_showGallery__xaYoc",img_list:"Hits_img_list__7D-Aj",showLists:"Hits_showLists__14YJ5",img_list_link:"Hits_img_list_link__1v2PS",main_img:"Hits_main_img__306Ce",home_page_link:"Hits_home_page_link__-7g3q",statistics:"Hits_statistics__z4GDs",statistics_item:"Hits_statistics_item__2ku6g",result_container:"Hits_result_container__2l_jc"}},57:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(8),o=a.n(i),r=(a(26),a(4)),c=a(5),l=a(7),h=a(6),d=a(10),m=a.n(d),u=a(18),_=a.n(u),g=a(9),j=(a(17),a(1)),p=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={search:""},e.uniqueId=_.a.generate(),e.handleChangeName=function(t){e.setState({search:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.search.trim()?(e.props.onSubmit(e.state.search),e.setState({search:""})):Object(g.b)("Your form is empty!")},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.search;return Object(j.jsxs)("header",{className:m.a.Searchbar,children:[Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:m.a.search_form,children:[Object(j.jsx)("input",{className:m.a.input_field,type:"text",autoComplete:"off",id:this.uniqueId,autoFocus:!0,value:e,onChange:this.handleChangeName,placeholder:"Search images and photos"}),Object(j.jsx)("label",{htmlFor:this.uniqueId,className:m.a.input_label,children:"Search Images..."}),Object(j.jsx)("button",{type:"submit",children:Object(j.jsx)("span",{children:"Search"})})]}),Object(j.jsx)(g.a,{position:"top-right",autoClose:2500,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,theme:"dark",pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!0})]})}}]),a}(s.a.Component),b=p,O=a(16),f=a(12),v=a.n(f),x=a(3),w=a.n(x),y=function(e){var t=e.id,a=e.onImageClick,n=e.largeImageURL,s=e.webformatURL,i=e.comments,o=e.downloads,r=e.tags,c=e.views,l=e.pageURL,h=e.likes;return Object(j.jsxs)("li",{onClick:function(){return a(n)},id:t,className:w.a.img_list,"data-url":n,children:[Object(j.jsx)("a",{className:w.a.img_list_link,children:Object(j.jsx)("img",{src:s,alt:r})}),Object(j.jsxs)("div",{className:w.a.statistics,children:[Object(j.jsxs)("p",{className:w.a.statistics_item,children:[Object(j.jsx)("i",{className:"material-icons",children:"thumb_up"}),h]}),Object(j.jsxs)("p",{className:w.a.statistics_item,children:[Object(j.jsx)("i",{className:"material-icons",children:"visibility"}),c]}),Object(j.jsxs)("p",{className:w.a.statistics_item,children:[Object(j.jsx)("i",{className:"material-icons",children:"comment"}),i]}),Object(j.jsxs)("p",{className:w.a.statistics_item,children:[Object(j.jsx)("i",{className:"material-icons",children:"cloud_download"}),o]}),Object(j.jsxs)("a",{href:l,className:w.a.statistics_item,target:"_blank",rel:"noreferrer",children:[Object(j.jsx)("i",{className:"material-icons",children:"home"}),"link to home page"]})]})]})};var k,S,L=function(e){var t=e.hits,a=e.onImageClick;return Object(j.jsx)("ul",{className:w.a.gallery,children:t.map((function(e){return Object(j.jsx)(y,{onImageClick:a,largeImageURL:e.largeImageURL,webformatURL:e.webformatURL,comments:e.comments,downloads:e.downloads,tags:e.tags,views:e.views,pageURL:e.pageURL,likes:e.likes},e.id)}))})},N=a(19),M=a.n(N),C=(a(36),a(20)),I=a.n(C),B=function(){return Object(j.jsxs)("div",{className:M.a.loading,children:[Object(j.jsx)("p",{children:"Loading your request brother..."}),Object(j.jsx)(I.a,{type:"Oval",color:"#FF00FFFF",height:80,width:80,timeout:3e3})]})},T=a(21),E=a.n(T),U=function(){return Object(j.jsxs)("span",{className:E.a.type_something,children:[Object(j.jsx)("p",{children:"TYPE WHATEVER TOU WANT IN SEARCH FORM BRO!!!"}),Object(j.jsx)("span",{className:"material-icons",children:"sentiment_dissatisfied"})]})},R=a(13),H=a.n(R),A=document.querySelector("#modal-root"),F=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).handleKeyDown=function(t){"Escape"===t.code&&e.props.closeModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.closeModal()},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(i.createPortal)(Object(j.jsxs)("div",{className:H.a.modal,children:[Object(j.jsx)("div",{className:H.a.modal_overlay,onClick:this.handleBackdropClick}),Object(j.jsx)("div",{className:H.a.large_img_container,children:this.props.children})]}),A)}}]),a}(s.a.Component),q=F,D=["title","titleId"];function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},P.apply(this,arguments)}function K(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}function G(e,t){var a=e.title,s=e.titleId,i=K(e,D);return n.createElement("svg",P({width:70,height:71,viewBox:"0 0 70 71",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},i),a?n.createElement("title",{id:s},a):null,k||(k=n.createElement("path",{d:"M26.25 27.115L43.75 44.615",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),S||(S=n.createElement("path",{d:"M43.75 27.115L26.25 44.615",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var Y=n.forwardRef(G),W=(a.p,a(15)),J=a.n(W),V=function(e){var t=e.onClick;return Object(j.jsx)("div",{className:J.a.btn_container,children:Object(j.jsx)("button",{className:J.a.load_more_btn,onClick:t,type:"button",children:"Load More"})})},X=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={hits:[],loading:!1,showModal:!1,page:1,largeImage:"",showLoadMoreBtn:!1},e.api={hitsTags:"",KEY:"23101955-6369c6792be6f6752905e3e3e",BASE_URL:"https://pixabay.com/api/",orientation:"all",imgType:"all"},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.getImages=function(){var t=e.api,a=t.BASE_URL,n=t.imgType,s=t.orientation,i=t.KEY,o=e.props.hitsTags,r=e.state.page;e.setState({loading:!0,showLoadMoreBtn:!1}),fetch("".concat(a,"?image_type=").concat(n,"&orientation=").concat(s,"&page=").concat(r,"&per_page=12&key=").concat(i,"&q=").concat(o)).then((function(e){return e.json()})).then((function(t){e.setState({hits:[].concat(Object(O.a)(e.state.hits),Object(O.a)(t.hits))}),e.setState({showLoadMoreBtn:!0}),e.setState((function(e){return{page:e.page+1}})),t.hits.length||(Object(g.b)("Nothing found!"),e.setState({showLoadMoreBtn:!1})),1!==r&&e.scrollOnLoadButton()})).finally((function(){return e.setState({loading:!1})}))},e.handleGalleryItem=function(t){e.setState({largeImage:t,showModal:!0})},e.scrollOnLoadButton=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.hitsTags!==this.props.hitsTags&&(this.state.hits="",this.state.page=1,this.getImages(),this.setState({showLoadMoreBtn:!1}))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.hits,n=e.showModal,s=e.largeImage,i=e.showLoadMoreBtn,o=this.props.hitsTags;return Object(j.jsxs)("div",{className:v.a.information_container,children:[Object(j.jsx)(g.a,{position:"top-right",autoClose:3500,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,theme:"dark",pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!0}),t&&Object(j.jsx)(B,{}),!o&&Object(j.jsx)(U,{}),a&&Object(j.jsx)(L,{onImageClick:this.handleGalleryItem,hits:a}),n&&Object(j.jsxs)(q,{closeModal:this.toggleModal,children:[Object(j.jsx)("img",{className:v.a.modal_img,src:s,alt:"modal"}),Object(j.jsx)("button",{className:v.a.close_btn,onClick:this.toggleModal,children:Object(j.jsx)(Y,{width:40,height:40})})]}),i&&Object(j.jsx)(V,{onClick:this.getImages})]})}}]),a}(s.a.Component),z=X,Q=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={hitsTags:""},e.handleSearchSubmit=function(t){e.setState({hitsTags:t})},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"main_content",children:[Object(j.jsx)(b,{onSubmit:this.handleSearchSubmit}),Object(j.jsx)(z,{hitsTags:this.state.hitsTags})]})}}]),a}(s.a.Component);o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(Q,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.fcd851bd.chunk.js.map