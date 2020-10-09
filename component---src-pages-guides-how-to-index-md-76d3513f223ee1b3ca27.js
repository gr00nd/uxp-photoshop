(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{C8bs:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return r})),o.d(t,"default",(function(){return d}));var n=o("wx14"),a=o("zLVn"),i=(o("q1tI"),o("7ljp")),s=o("LHWr"),r=(o("qKvR"),{}),l={_frontmatter:r},c=s.a;function d(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.mdx)(c,Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"how-do-i"},"How Do I..."),Object(i.mdx)("p",null,"This section provides snippets of HTML, CMS, and JavaScript code needed to accomplish common operations needed in many plugins. There are no complete plugins in this section, only code snippets. Copy and paste these snippets into sections of your plugin as needed."),Object(i.mdx)("h2",{id:"basic-javascript"},"Basic JavaScript"),Object(i.mdx)("p",null,"If you're already a JavaScript expert, skip this section. But if you're coming to UXP from ExtendScript, you might want to read it."),Object(i.mdx)("h3",{id:"how-to-include-an-external-javascript-file"},"How to ",Object(i.mdx)("inlineCode",{parentName:"h3"},"#include")," An External JavaScript File"),Object(i.mdx)("p",null,"JavaScript has never had the ",Object(i.mdx)("inlineCode",{parentName:"p"},"#include")," syntax of C and its descendants, nor the ",Object(i.mdx)("inlineCode",{parentName:"p"},"import"),' of Python. However, recent JavaScript (including that used in UXP) has "modules" and the ',Object(i.mdx)("inlineCode",{parentName:"p"},"require")," statement. Here's how to use them:"),Object(i.mdx)("p",null,"In the JavaScript file you want to be included, structure it like this:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// file "includeMe.js"\n// this file will be included by some other file\nfunction foo(someNumber) {\n    return(someNumber * 2);\n}\n\nfunction bar() {\n    return(42);\n}\nmodule.exports = {\n    foo,\n    bar\n}\n')),Object(i.mdx)("p",null,"and then in the file that wants to include the above file, add this line at the top:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const {foo, bar} = require("./includeMe.js");\n. . .\n    result = foo(3); // will return 6\n')),Object(i.mdx)("p",null,"The ",Object(i.mdx)("inlineCode",{parentName:"p"},"require")," in UXP isn't as robust as some other include systems (e.g., it doesn't search any global paths to find the file you want), but careful use of relative paths allows you to structure your plugin directory the way you want. For example, you can have a subdirectory named ",Object(i.mdx)("inlineCode",{parentName:"p"},"lib")," and require a file in there this way:"),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},'const {foo, bar} = require("./lib/includeMe.js");')),Object(i.mdx)("h3",{id:"how-to-write-debugging-statements"},"How to write debugging statements"),Object(i.mdx)("p",null,"This one is easy. It's no longer ",Object(i.mdx)("inlineCode",{parentName:"p"},"console.writeln()"),":"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'console.log("foo"); // writes "foo" to the UXP Developer Toolkit console.\n\nconsole.error("foo"); // does the same thing, but the text is shown in red so errors are more easily seen.\n')),Object(i.mdx)("h3",{id:"how-to-use-promises-and-asyncawait"},"How to Use Promises and async/await"),Object(i.mdx)("p",null,"This is one of the most puzzling features of modern JavaScript for those new to the latest language versions. Basically, ",Object(i.mdx)("inlineCode",{parentName:"p"},"await")," allows your code to wait for an operation to complete, without blocking the host application (e.g., Photoshop). But the trick is you ",Object(i.mdx)("em",{parentName:"p"},"cannot")," use ",Object(i.mdx)("inlineCode",{parentName:"p"},"await")," in a regular function; any function in which ",Object(i.mdx)("inlineCode",{parentName:"p"},"await")," is used has to be declared like this:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"    async function foo(argument1, argument2...) {\n\n    }\n")),Object(i.mdx)("h3",{id:"how-to-determine-the-host-and-os-a-plugin-is-using"},"How to determine the host and OS a plugin is using"),Object(i.mdx)("p",null,"Sometimes it's necesssary (for localization or other reasons) to find out what a plugin's host environment is. Here's how to do that:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const host = require('uxp').host;\nconst locale = host.uiLocale;\nconst hostName = host.name\nconst hostVersion = host.version;\nconst hostOS = require('os').platform(); // note that this is a method, not a property\nconsole.log(`locale: ${locale}  host ${hostName} version ${hostVersion} running on ${hostOS}`);\n")),Object(i.mdx)("h2",{id:"file-io"},"File I/O"),Object(i.mdx)("p",null,"Files and folders in UXP for Photoshop can exist in four different places:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"Your plugin's home directory. Files in this directory are ",Object(i.mdx)("em",{parentName:"p"},"read-only"),". This is a good place to keep localizations, data files that never change, etc.")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"Your plugin's data directory. This is a directory managed by UXP which allows read/write access for ",Object(i.mdx)("em",{parentName:"p"},"only")," your plugin. Files in this directory survive application restarts and OS reboots.")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"Your plugin's temp directory. This is a place to store session-specific data which will not necessarily persist. You shouldn't rely on anything in this directory lasting beyond an application restart.")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"The host OS filesystem. Access to specific files or folders in the computer's filesystem must be requested of the user by your plugin, by showing a file or folder picker. If the user selects a file and does not cancel, your plugin code receives a ",Object(i.mdx)("inlineCode",{parentName:"p"},"token")," which you can use to access that file or folder.")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"UXP also provids ",Object(i.mdx)("inlineCode",{parentName:"p"},"Secure Storage"),". This is a UXP-managed facility that holds encrypted key/value pairs. This is good for storing login information and any other data that needs to be securely stored. As such, it's not for general file access, but if you're not writing a lot of data it might be appropriate."))),Object(i.mdx)("h3",{id:"how-to-read-a-file"},"How to Read a File"),Object(i.mdx)("h3",{id:"how-to-write-a-file"},"How to Write a File"),Object(i.mdx)("h3",{id:"how-to-display-a-simple-alert"},"How to Display a Simple Alert"),Object(i.mdx)("p",null,"Sometimes you don't need a complicated dialog box, just a simple alert message. If you don't need any icons or special branding in your alert, this will do the trick:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const psCore = require('photoshop').core;\npsCore.showAlert({ message: 'Warp Factor 9!'});\n")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-how-to-index-md-76d3513f223ee1b3ca27.js.map