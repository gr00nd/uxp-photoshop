(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{ZqKB:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n("wx14"),i=n("zLVn"),a=(n("q1tI"),n("7ljp")),r=n("LHWr"),c=(n("qKvR"),{}),s={_frontmatter:c},l=r.a;function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.mdx)(l,Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Photoshop emits various event notifications when a user is actively interacting with the application."),Object(a.mdx)("p",null,"During development of your plugin, you can use ",Object(a.mdx)("a",Object(o.a)({parentName:"p"},{href:"../../classes/photoshop#eventnotifier"}),"app.eventNotifier")," to enumerate all the event types you'd like to be notified about."),Object(a.mdx)("p",null,"In a production environment, this 'catch-all' notifier is unavailable to you. Once you've created a list of key events you'd like to be notified of, use the following action API to register a listener:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'var listener = (e,d) => { console.log(e,d); }\nrequire(\'photoshop\').action.addNotificationListener([\n    {\n        event: "select"\n    },\n    {\n        event: "open"\n    } // any other events...\n], listener);\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-media-advanced-event-listener-md-95bf77d9f563f87a4d5d.js.map