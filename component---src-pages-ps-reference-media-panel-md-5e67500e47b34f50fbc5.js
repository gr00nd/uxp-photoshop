(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{duiz:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return p})),o.d(t,"default",(function(){return d}));var n=o("wx14"),i=o("zLVn"),a=(o("q1tI"),o("7ljp")),l=o("LHWr"),p=(o("qKvR"),{}),s={_frontmatter:p},r=l.a;function d(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.mdx)(r,Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"One way to expose your plugin UI to user is to host it in a Photoshop panel. This approach is most similar to CEP panels, and we hope to provide a guide for migration from CEP to UXP panels in this page."),Object(a.mdx)("h2",{id:"sample-plugin"},"Sample Plugin"),Object(a.mdx)("p",null,"The easiest way to start writing your own panel plugin is to grab the template repo of our ",Object(a.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://www.github.com/adobe-photoshop/uxp-starter-panel",target:"_blank",rel:"nofollow noopener noreferrer"}),"uxp-starter-panel"),". By following the instructions on the README, you can get a sample panel repo ready to be built in both dev and production modes. We will keep it up-to-date as we develop UXP in Photoshop."),Object(a.mdx)("h2",{id:"prerelease-prerequisites"},"(PreRelease) Prerequisites"),Object(a.mdx)("p",null,"While we're still developing UXP, we want to make sure these features are behind flags so they don't affect end users. To enable UXP development and see your panels in Photoshop, you will need to add a line to your PSUserConfig.txt file."),Object(a.mdx)("p",null,"Windows:"),Object(a.mdx)("blockquote",null,Object(a.mdx)("p",{parentName:"blockquote"},"C:\\Users","{","user}\\AppData\\Roaming\\Adobe\\Adobe Photoshop 2020 Settings\\PSUserConfig.txt")),Object(a.mdx)("p",null,"Mac:"),Object(a.mdx)("blockquote",null,Object(a.mdx)("p",{parentName:"blockquote"},"/Users/{user}/Library/Preferences/Adobe Photoshop 2020 Settings/PSUserConfig.txt")),Object(a.mdx)("p",null,"Open (or create) this text file, and add the following line:"),Object(a.mdx)("blockquote",null,Object(a.mdx)("p",{parentName:"blockquote"},Object(a.mdx)("inlineCode",{parentName:"p"},"ScriptDeveloper 1"))),Object(a.mdx)("p",null,"This will enable Photoshop to start loading UXP plugins, and support your custom panels. "),Object(a.mdx)("h2",{id:"panel-entrypoints"},"Panel Entrypoints"),Object(a.mdx)("p",null,"The ui entrypoint of a UXP plugin as a panel is defined in it's ",Object(a.mdx)("inlineCode",{parentName:"p"},"manifest.json")," file. This is subject to change, so please refer to latest copy of the starter repository as above."),Object(a.mdx)("p",null,"The plugin will be available in Window > Extensions menu with the plugin's name. This will open up a PS panel with your plugin loaded in it."),Object(a.mdx)("h2",{id:"debugging"},"Debugging"),Object(a.mdx)("p",null,"In Chrome, navigate to ",Object(a.mdx)("inlineCode",{parentName:"p"},"chrome://inspect"),". Press Configure... next to Discover network targets checkbox, and add localhost:9240 (or the port you declared in your debug.json). "),Object(a.mdx)("p",null,"When the plugin is loaded, it should show up with it's ID on this page."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-media-panel-md-5e67500e47b34f50fbc5.js.map