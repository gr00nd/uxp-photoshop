(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{q4Mo:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var o=a("wx14"),n=a("zLVn"),s=(a("q1tI"),a("7ljp")),r=a("LHWr"),c=(a("qKvR"),{}),l={_frontmatter:c},i=r.a;function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.mdx)(i,Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"batchplay"},"batchPlay"),Object(s.mdx)("p",null,"Photoshop is complex software, with many internal classes and methods. Not all of these are as yet exposed via UXP. New interfaces are in development and will be shipped along with each release of Photoshop. In the meantime, if there is something your plugin needs to do that is not exposed in the current DOM, you may be able to use batchPlay."),Object(s.mdx)("p",null,"BatchPlay is for accessing Photoshop functionality that has not yet been exposed via APIs. BatchPlay is a way to send multiple actions into the Photoshop event queue and return their results."),Object(s.mdx)("p",null,"ExtendScript has executeAction; this is analagous to UXP's batchPlay. However, whereas executeAction could only play one descriptor at a time, batchPlay accepts an array of action descriptors. If you have multiple Photoshop operations that need to execute in series, using an array of action descriptors in a single batchPlay call is probably what you want."),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"TBD: See ",Object(s.mdx)("a",Object(o.a)({parentName:"strong"},{href:"https://forums.adobeprerelease.com/photoshop/discussion/1740/batchplay-alert-error-messages#latest",target:"_blank",rel:"nofollow noopener noreferrer"}),"https://forums.adobeprerelease.com/photoshop/discussion/1740/batchplay-alert-error-messages#latest")," about async calls.")),Object(s.mdx)("p",null,"Unlike ExtendScript, where there were classes to construction action descriptors, references, and values, in batchPlay these are all built from JSON objects."),Object(s.mdx)("p",null,"The ",Object(s.mdx)("a",Object(o.a)({parentName:"p"},{href:"../api-reference/media/advanced/batchplay.md"}),"batchPlay Reference")," has examples of constructing action descriptors using JSON, as well as using batchPlay in general."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-ps-basics-batchplay-md-72c76c17f672387db69d.js.map