(this["webpackJsonpgoit-react14-hw-03-image-finder"]=this["webpackJsonpgoit-react14-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={modal:"Modal_modal__1ooGJ",overlay:"Modal_overlay__14ph3"}},22:function(e,t,a){e.exports={searchForm:"SearchForm_searchForm__VM8Pk"}},25:function(e,t,a){e.exports={loader:"Loader_loader__36lC2"}},26:function(e,t,a){e.exports=a(70)},3:function(e,t,a){e.exports={photoCard:"PhotoCard_photoCard__2NWBN",stats:"PhotoCard_stats__ZhFL4",statsItem:"PhotoCard_statsItem__1KxWN",fullscreenButton:"PhotoCard_fullscreenButton__3nCPN",galleryItem:"PhotoCard_galleryItem__3O7jb"}},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(21),r=a.n(l),c=a(11),s=a(4),i=a(5),m=a(7),u=a(6),d=a(8),h=a(3),p=a.n(h),g=function(e){var t=e.webformatURL,a=e.tags,n=e.likes,l=e.comments,r=e.views,c=e.downloads,s=e.ckickToOpenModal;return o.a.createElement("li",{className:p.a.photoCard},o.a.createElement("img",{src:t,alt:a}),o.a.createElement("div",{className:p.a.stats},o.a.createElement("p",{className:p.a.statsItem},o.a.createElement("i",{className:"material-icons"},"thumb_up"),n),o.a.createElement("p",{className:p.a.statsItem},o.a.createElement("i",{className:"material-icons"},"visibility"),r),o.a.createElement("p",{className:p.a.statsItem},o.a.createElement("i",{className:"material-icons"},"comment"),l),o.a.createElement("p",{className:p.a.statsItem},o.a.createElement("i",{className:"material-icons"},"cloud_download"),c)),o.a.createElement("button",{type:"button",className:p.a.fullscreenButton,onClick:s},o.a.createElement("i",{className:"material-icons"},"zoom_out_map")))},f=a(9),v=a.n(f),b=function(e){var t=e.hits,a=e.ckickToOpenModal,n=e.showButtonloadMore,l=e.handleBtnLoadMore;return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:v.a.gallery},t.map((function(e){return o.a.createElement(g,Object.assign({key:e.id},e,{ckickToOpenModal:function(){return a(e.largeImageURL)}}))}))),n&&o.a.createElement("button",{className:v.a.button,type:"button",onClick:l},"Load more"))},_=a(22),E=a.n(_),y=function(e){var t=e.handleInput,a=e.handeleSubmit,n=e.value;return o.a.createElement("form",{className:E.a.searchForm,onSubmit:a},o.a.createElement("input",{type:"text",autoComplete:"off",placeholder:"Search images...",onChange:t,value:n}))},k=a(10),M=a.n(k),O=function(e){var t=e.largeImageURL,a=e.tags,n=e.onCloseModal;return o.a.createElement("div",{className:M.a.overlay,onClick:n,"data-modal":"modal",name:"modal"},o.a.createElement("div",{className:M.a.modal},o.a.createElement("img",{src:t,alt:a})))},C=a(23),w=a.n(C),N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="12916559-bca9cacbc431a253364f58898";return w.a.get("https://pixabay.com/api/?key=".concat(a,"&q=").concat(e,"&image_type=photo&orientation=horizontal&page=").concat(t,"&per_page=12")).then((function(e){return e.data.hits}))},I=a(24),L=a.n(I),j=a(25),S=a.n(j),B=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:S.a.loader},o.a.createElement(L.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={hits:[],isModalOpen:!1,largeImageURL:"",btnLoadmore:!1,inputValue:null,value:"",spiner:!1},a.nextPage=1,a.handleBtnLoadMore=function(){a.setState({spiner:!0});var e=a.state.inputValue;a.nextPage++,N(e,a.nextPage).then((function(e){a.setState((function(t){return{hits:[].concat(Object(c.a)(t.hits),Object(c.a)(e)),spiner:!1}}))})).then((function(){var e=document.body.scrollHeight-window.innerHeight-300;window.scrollTo({top:e,behavior:"smooth"})}))},a.ckickToOpenModal=function(e){a.setState({isModalOpen:!0,largeImageURL:e})},a.onCloseModal=function(e){"Escape"!==e.code&&"modal"!==e.target.dataset.modal||a.setState({isModalOpen:!1})},a.handleInput=function(e){a.setState({inputValue:e.target.value,value:e.target.value})},a.handeleSubmit=function(e){e.preventDefault();var t=a.state.inputValue;a.setState({spiner:!0}),N(t).then((function(e){return a.setState({hits:e,btnLoadmore:!0,value:"",spiner:!1})}))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onCloseModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onCloseModal)}},{key:"render",value:function(){var e=this.state,t=e.hits,a=e.isModalOpen,n=e.largeImageURL,l=e.btnLoadmore,r=e.value,c=e.spiner;return o.a.createElement(o.a.Fragment,null,o.a.createElement(y,{handleInput:this.handleInput,handeleSubmit:this.handeleSubmit,value:r}),c&&o.a.createElement(B,null),t.length>0&&o.a.createElement(b,{hits:t,ckickToOpenModal:this.ckickToOpenModal,showButtonloadMore:l,handleBtnLoadMore:this.handleBtnLoadMore}),a&&o.a.createElement(O,{largeImageURL:n,onCloseModal:this.onCloseModal}))}}]),t}(o.a.Component),F=(a(69),function(){return o.a.createElement(x,null)});r.a.render(o.a.createElement(F,null),document.getElementById("root"))},9:function(e,t,a){e.exports={gallery:"Gallery_gallery__33hVD",button:"Gallery_button__1ZKJ0"}}},[[26,1,2]]]);
//# sourceMappingURL=main.fcf1b4dd.chunk.js.map