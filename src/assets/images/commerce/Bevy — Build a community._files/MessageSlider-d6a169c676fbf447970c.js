(window.driftWebpackJsonp=window.driftWebpackJsonp||[]).push([[9],{1515:function(e,t,n){"use strict";n.r(t),function(e){var r=n(11),a=n.n(r),s=n(24),i=n.n(s),o=n(47),c=n.n(o),l=n(156),u=n.n(l),p=n(144),d=n.n(p),m=n(199),h=n.n(m),f=n(198),v=n.n(f),g=n(197),T=n.n(g),b=n(15),y=n(57),C=n(249),_=n(9),w=n(1654),E=n(1732),I=n(1731),P=n(1604),k=n(78),S=n(61),O=n(5),A=n(7),M=n(50),N=n(23),j=n(34),R=n(25),B=n(1581),D=n(68),W=n(10),x=n(12),z=n(145),L=n(45),U=n(187),H=n(202),q=n(126),G=n(270),Y=function(t){var n=t.attachmentCount,r=t.messagePreview,a=t.maxLength;if("string"==typeof r){var s=r.length>a?r.trim().slice(0,a)+"…":r.trim();if(s)return e.createElement("span",null,s)}return n>0?e.createElement(E.a,{count:n}):e.createElement("span",null,e.createElement("em",null,"No preview"))};Y.propTypes={messagePreview:b.PropTypes.string,attachmentCount:b.PropTypes.number,maxLength:b.PropTypes.number},Y.defaultProps={attachmentCount:0,maxLength:100};var K=function(t){function n(){var e,t,r,a,s=this;d()(this,n);for(var o=arguments.length,l=Array(o),p=0;p<o;p++)l[p]=arguments[p];return t=r=v()(this,(e=n.__proto__||u()(n)).call.apply(e,[this].concat(l))),r.getShowMessageSlider=c()(i.a.mark(function e(){var t,n,a,o,c,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props,n=t.orgId,a=t.authorizationHeader,o=t.endUserId,c=t.actions,e.prev=1,e.next=4,Object(W.b)(x.e+"/cutover/organizations/"+n+"?namespace=WIDGET_MOBILE_SLIDER",{method:"GET",headers:a});case 4:l=e.sent,c.setShowMessageSlider({isMessageSliderTest:l.WIDGET_MOBILE_SLIDER,shouldShowMessageSlider:!l.WIDGET_MOBILE_SLIDER||o%2==0}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),c.setShowMessageSlider({isMessageSliderTest:!1,shouldShowMessageSlider:!0}),console.warn("failed to fetch",e.t0);case 12:case"end":return e.stop()}},e,s,[[1,8]])})),r.handleClick=function(){var e=r.props,t=e.actions,n=e.view,a=e.botAvatarVersion,s=e.message;t.trackClick({ctaType:"content",view:n,botAvatarVersion:a}),t.markConversationAsRead(s.get("conversationId")),t.goToConversation(s.get("conversationId")),t.setHasInteracted({hasInteracted:!0})},r.handleDismissClick=function(){var e=r.props,t=e.actions,n=e.botAvatarVersion,a=e.view,s=e.driftUsersById,i=e.message,o=e.conversation;t.trackClick({ctaType:"dismiss",view:a,botAvatarVersion:n});var c=s[i.get("authorId")];t.setHasInteracted({hasInteracted:!0}),t.sliderMessageDismissed({botMessage:c&&!!c.bot,userInteractedWithConversation:"BULK_SENT"===!o.get("status")}),t.markConversationAsRead(i.get("conversationId"))},r.handleResize=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.height,n=e.width;r.props.actions.iframeOverrideSize({height:t?t+"px":void 0,width:n?n+"px":void 0})},a=t,v()(r,a)}return T()(n,t),h()(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.showMessageSlider,n=e.actions,r=e.isPlaybookImpression,a=e.firstMessageIdInConversation,s=e.conversationCampaign;r&&(n.trackImpression({source:H.b.ACTIVE_PLAYBOOK,campaignId:s?s.id:void 0}),n.removeTriggerablePlaybookImpression({source:H.a.ACTIVE,messageId:a})),void 0===t&&Object(z.b)()?this.getShowMessageSlider():n.setShowMessageSlider({isMessageSliderTest:!1,shouldShowMessageSlider:!0})}},{key:"render",value:function(){var t=this.props,n=t.message,r=t.avatarUrl,a=t.bot,s=t.name,i=t.showNewCallout,o=t.showMessageSlider,c=n.get("attachments").size,l=n.getIn(["attributes","preview"]);return e.createElement(w.a,{avatarUrl:r,bot:a,iconType:P.a.CHAT,onResize:this.handleResize,onWidgetClick:this.handleClick},o&&e.createElement(I.a,{onClick:this.handleClick,name:s,bot:a,onDismissClick:this.handleDismissClick,showNewCallout:i,showBranding:A.G},e.createElement(Y,{attachmentCount:c,messagePreview:l})))}}]),n}(b.Component);K.propTypes={message:b.PropTypes.object.isRequired,avatarUrl:b.PropTypes.string,bot:b.PropTypes.bool,name:b.PropTypes.string.isRequired,conversation:b.PropTypes.object,driftUsersById:b.PropTypes.object,actions:b.PropTypes.shape({iframeOverrideSize:b.PropTypes.func.isRequired,goToConversation:b.PropTypes.func.isRequired,markConversationAsRead:b.PropTypes.func.isRequired,sliderMessageDismissed:b.PropTypes.func.isRequired})},t.default=Object(C.b)(function(e){var t,n=Object(M.i)(e),r=Object(A.z)(n.get("authorId"))(e),s=n.get("conversationId"),i=Object(M.e)(e,s),o=Object(U.f)(e,{messageId:i,source:H.a.ACTIVE}),c=r&&r.bot,l=Object(G.a)(n.getIn(["attributes","interactionId"]))(e);return t={message:n,showBranding:Object(A.G)(e),avatarUrl:r&&r.avatarUrl,bot:r&&r.bot,name:Object(_.a)(r,"name",""),conversation:Object(j.c)(e,{conversationId:s}),driftUsersById:Object(A.A)(e),view:c?D.j.MESSAGE_CALLOUT_BOT:D.j.MESSAGE_CALLOUT_USER,botAvatarVersion:c?Object(O.d)(e):void 0,orgId:Object(A.w)(e),authorizationHeaders:Object(O.c)(e),endUserId:Object(O.i)(e).id,showMessageSlider:Object(L.p)(e)},a()(t,"bot",c),a()(t,"isPlaybookImpression",o),a()(t,"firstMessageIdInConversation",i),a()(t,"conversationCampaign",l),t},function(e){return{actions:Object(y.b)({iframeOverrideSize:k.iframeOverrideSize,goToConversation:S.f,markConversationAsRead:S.g,sliderMessageDismissed:N.O,trackImpression:R.f,trackClick:R.e,setShowMessageSlider:B.b,setHasInteracted:B.a,removeTriggerablePlaybookImpression:q.j},e)}})(K)}.call(this,n(15))},1531:function(e,t,n){"use strict";t.__esModule=!0;var r=s(n(1520)),a=s(n(1521));function s(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return e};t.default=(0,r.default)(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;return function(r){var s=void 0,i=void 0;return function(o){return e(o)?(s=s||(0,a.default)(t(r)))(o):(i=i||(0,a.default)(n(r)))(o)}}},"branch")},1535:function(e,t,n){"use strict";t.__esModule=!0;var r=n(15),a=function(e){return e&&e.__esModule?e:{default:e}}(n(1520));var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return null},t}(r.Component);s.displayName="Nothing";t.default=(0,a.default)(function(e){return s},"renderNothing",!1,!0)},1581:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return i});var r=n(2),a=n(424),s=Object(r.b)(a.a),i=Object(r.b)(a.b)},1603:function(e,t,n){e.exports=n.p+"static/images/4a3c1161b81f906ccb7e41df6b548811.svg"},1606:function(e,t,n){e.exports={Badge:"_23adWK3Uprf4Ktba9B88ed"}},1607:function(e,t,n){"use strict";(function(e){var r=n(15),a=n(423),s=n.n(a),i=n(1606),o=n.n(i),c=n(1531),l=n.n(c),u=n(1535),p=n.n(u),d=function(t){var n=t.count,r=t.max,a=t.className,i=t.theme,c=t.widgetButton,l=t.hasInteracted;return!c||i.unreadBadgeEnabled||l?e.createElement("div",{className:s()(o.a.Badge,a),"aria-label":(n>r?r:n)+" unread messages"},n>r?r+"+":n):null};d.propTypes={count:r.PropTypes.number.isRequired,max:r.PropTypes.number,className:r.PropTypes.string},d.defaultProps={max:99};var m=l()(function(e){return e.count<1},p.a);t.a=m(d)}).call(this,n(15))},1610:function(e,t,n){"use strict";(function(e){var r=n(4),a=n.n(r),s=n(156),i=n.n(s),o=n(144),c=n.n(o),l=n(199),u=n.n(l),p=n(198),d=n.n(p),m=n(197),h=n.n(m),f=n(15),v=n(512),g=n(518),T=n.n(g),b=n(423),y=n.n(b),C=n(1647),_=n.n(C),w=function(t){function n(e){c()(this,n);var t=d()(this,(n.__proto__||i()(n)).call(this,e));return t.handleWheel=function(e){var n=void 0;try{n=Object(v.findDOMNode)(t)}catch(e){return void console.error(e)}if(n)return e.deltaY<0&&0===n.scrollTop?(e.preventDefault(),!1):e.deltaY>0&&n.clientHeight+n.scrollTop+e.deltaY>=n.scrollHeight?(e.preventDefault(),!1):void 0},t.handleWheel=T()(t.handleWheel,100),t}return h()(n,t),u()(n,[{key:"render",value:function(){return e.createElement("div",a()({},this.props,{className:y()(_.a.ScrollableContent,this.props.className)}),this.props.children)}}]),n}(f.Component);w.propTypes={className:f.PropTypes.string,children:f.PropTypes.node},t.a=w}).call(this,n(15))},1611:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return h});var r=n(4),a=n.n(r),s=n(200),i=n.n(s),o=n(15),c=n(423),l=n.n(c),u=n(1603),p=n.n(u),d=n(1649),m=n.n(d);function h(t){var n=t.className,r=i()(t,["className"]);return e.createElement("button",a()({},r,{className:l()(m.a.DismissButton,n),title:"Dismiss","aria-label":"Dismiss"}),e.createElement("img",{className:m.a.DismissButtonIcon,src:p.a,alt:"×"}))}h.propTypes={className:o.PropTypes.string,onClick:o.PropTypes.func.isRequired}}).call(this,n(15))},1612:function(e,t,n){"use strict";(function(e){var r=n(4),a=n.n(r),s=n(11),i=n.n(s),o=n(200),c=n.n(o),l=n(15),u=n(423),p=n.n(u),d=n(1651),m=n.n(d),h=e.createElement("span",{className:m.a.CalloutTail});function f(t){var n,r=t.className,s=t.children,o=t.hasTail,l=t.onClick,u=c()(t,["className","children","hasTail","onClick"]);return e.createElement("div",a()({},u,{onClick:l,className:p()(m.a.Callout,(n={},i()(n,m.a.hasTail,o),i()(n,m.a.hasClickHandler,l),n),r)}),o&&h,e.createElement("div",{className:m.a.Content},s))}f.propTypes={onClick:l.PropTypes.func,className:l.PropTypes.string,children:l.PropTypes.node,hasTail:l.PropTypes.bool},f.defaultProps={hasTail:!0},t.a=f}).call(this,n(15))},1613:function(e,t,n){"use strict";var r=n(249),a=n(1607),s=n(50),i=n(17),o=n(45);t.a=Object(r.b)(function(e){return{count:Object(s.l)(e),theme:Object(i.t)(e),hasInteracted:Object(o.i)(e)}})(a.a)},1640:function(e,t,n){"use strict";var r=n(1612),a=n(1611),s=function(e){window&&(window.requestAnimationFrame&&window.requestAnimationFrame(e),window.setTimeout(e,0))},i=n(1610);n.d(t,"a",function(){return r.a}),n.d(t,"b",function(){return a.a}),n.d(t,!1,function(){return s}),n.d(t,"c",function(){return i.a})},1644:function(e,t,n){e.exports={sliderTransitionEnter:"RleSeSSshUnxBU54Ju-Kg",sliderTransitionAppear:"yZ8m6oJqdYiWLMMseLe71",sliderTransitionLeave:"_2REwem2ttd38R0rWXhgPB3",sliderTransitionLeaveActive:"_2PYlwCQUwR96W4dGlZoidv",sliderTransitionEnterActive:"_1A1yWaMm_2RUCDFzylxa4q",sliderTransitionAppearActive:"_1HkBS3rdb0dAn10UW3DlfS"}},1645:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return u});var r=n(4),a=n.n(r),s=n(15),i=n(1525),o=n.n(i),c=n(1644),l=n.n(c),u=function(t){return e.createElement(o.a,a()({},t,{transitionName:{enter:l.a.sliderTransitionEnter,enterActive:l.a.sliderTransitionEnterActive,appear:l.a.sliderTransitionAppear,appearActive:l.a.sliderTransitionAppearActive,leave:l.a.sliderTransitionLeave,leaveActive:l.a.sliderTransitionLeaveActive},transitionAppear:!0,transitionAppearTimeout:250,transitionEnterTimeout:250,transitionLeaveTimeout:200}))};u.propTypes={children:s.PropTypes.node}}).call(this,n(15))},1647:function(e,t,n){e.exports={ScrollableContent:"_3qJrcSln-TzTgp5jAZsvE-"}},1649:function(e,t,n){e.exports={DismissButton:"_1lVdwgQwG8iYSXC1rtIUn-",DismissButtonIcon:"_3sY_jwfgYHGUb3-n-s6cwm"}},1651:function(e,t,n){e.exports={CalloutTail:"_2IOZNDmRPpIkWq7_LHNMMH",Callout:"_2Am0IsT9lH_Ptdj-CW2uiy",hasClickHandler:"_1w6YXZ6Lh2aJD2goJRtLx3",hasTail:"_2hJjohH-EqiCHgHG2iPxnD",Content:"_2fl3RiMFMzxYgTM_TjTg8I"}},1653:function(e,t,n){e.exports={Wrapper:"AsmHNMwa8V6JFxwzpR6dG",SliderLayout:"_3GvcBFnnOqEvAbpxb4K9_",WidgetButton:"j8lkf_ta2sl2WMvjiqiaK",Content:"-zOcMNdFsi7uCebRFihg7",UnreadCountBadgeWrapper:"_2zlCNz6GWncyQ9b6a9KhmX"}},1654:function(e,t,n){"use strict";(function(e){var r=n(156),a=n.n(r),s=n(144),i=n.n(s),o=n(199),c=n.n(o),l=n(198),u=n.n(l),p=n(197),d=n.n(p),m=n(15),h=n(1539),f=n.n(h),v=n(1613),g=n(1538),T=n(1604),b=n(1653),y=n.n(b),C=function(t){function n(){var e,t,r,s;i()(this,n);for(var o=arguments.length,c=Array(o),l=0;l<o;l++)c[l]=arguments[l];return t=r=u()(this,(e=n.__proto__||a()(n)).call.apply(e,[this].concat(c))),r.handleMeasure=function(e){var t=e.width,n=e.height;r.props.onResize&&r.props.onResize({width:t,height:n})},s=t,u()(r,s)}return d()(n,t),c()(n,[{key:"render",value:function(){return e.createElement(f.a,{onMeasure:this.handleMeasure,whitelist:["width","height"]},this.props.children)}}]),n}(m.Component);C.propTypes={onResize:m.PropTypes.func.isRequired,children:m.PropTypes.node.isRequired};var _=function(t){function n(){return i()(this,n),u()(this,(n.__proto__||a()(n)).apply(this,arguments))}return d()(n,t),c()(n,[{key:"render",value:function(){var t=this.props,n=t.children,r=t.avatarUrl,a=t.bot,s=t.onWidgetClick,i=t.iconType,o=t.onResize;return e.createElement("div",{className:y.a.Wrapper},e.createElement(C,{onResize:o},e.createElement("div",{"aria-haspopup":"dialog","aria-label":"Open new message",className:y.a.SliderLayout},e.createElement(g.a,{className:y.a.WidgetButton,onClick:s,iconType:i,avatarUrl:r,bot:a}),e.createElement("div",{className:y.a.UnreadCountBadgeWrapper},e.createElement(v.a,{widgetButton:!0})),e.createElement("div",{className:y.a.Content},n))))}}]),n}(m.Component);_.propTypes={children:m.PropTypes.node,avatarUrl:m.PropTypes.string,bot:m.PropTypes.bool,onWidgetClick:m.PropTypes.func,onResize:m.PropTypes.func,iconType:m.PropTypes.oneOf([T.a.ANNOUNCEMENT,T.a.NPS,T.a.CHAT])},t.a=_}).call(this,n(15))},1730:function(e,t,n){e.exports={Slider:"_2d_Bp-Kt5gkBPBdwssn49b",DismissButton:"_6eWTYUKsxoA_IdO5RL7zQ",Content:"_1QMEkp0zgBS93G6kHWmAHJ",FlexContentWrapper:"l82_D_KImuLA5zRjJBNjH",DismissButtonWrapper:"mTzHPSKdhS7SRFrqMCAlW"}},1731:function(e,t,n){"use strict";(function(e){var r=n(156),a=n.n(r),s=n(144),i=n.n(s),o=n(199),c=n.n(o),l=n(198),u=n.n(l),p=n(197),d=n.n(p),m=n(15),h=n(1640),f=n(1645),v=n(1730),g=n.n(v),T=function(t){function n(){return i()(this,n),u()(this,(n.__proto__||a()(n)).apply(this,arguments))}return d()(n,t),c()(n,[{key:"render",value:function(){var t=this.props,n=t.onClick,r=t.onDismissClick,a=t.children;return e.createElement("div",{className:g.a.Slider,role:"dialog","aria-label":"You have received a message"},e.createElement(f.a,null,e.createElement("div",{className:g.a.FlexContentWrapper,key:"slider"},e.createElement("div",{className:g.a.DismissButtonWrapper},e.createElement(h.b,{className:g.a.DismissButton,onClick:r})),e.createElement(h.a,{onClick:n},e.createElement("div",{className:g.a.Content},a)))))}}]),n}(m.Component);T.propTypes={children:m.PropTypes.node,onClick:m.PropTypes.func.isRequired,onDismissClick:m.PropTypes.func.isRequired},t.a=T}).call(this,n(15))},1732:function(e,t,n){"use strict";(function(e){var r=n(4),a=n.n(r),s=n(15),i=n(33),o=Object(i.h)({attachmentCount:{id:"app.message.attachmentCount",description:"Displays a messages's number of attachments",defaultMessage:"{count, plural,\n        =0 {No attachments}\n        one {1 attachment}\n        other {# attachments}\n      }"}}),c=function(t){return e.createElement(i.b,a()({},o.attachmentCount,{values:{count:t.count}}))};c.propTypes={count:s.PropTypes.number.isRequired},t.a=c}).call(this,n(15))}}]);