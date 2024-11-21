(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6454],{38548:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/rspack",function(){return s(76003)}])},26261:function(e,t,s){"use strict";s.d(t,{n:function(){return o}});var n=s(85893),i=s(86010),l=s(41664),a=s.n(l);function o({tabs:e,selectedTabIndex:t}){return(0,n.jsx)("div",{className:"flex overflow-auto mb-6 -mx-4 sm:-mx-6",children:(0,n.jsx)("div",{className:"flex-none min-w-full px-4 sm:px-6",children:(0,n.jsx)("ul",{className:"border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5 mb-px",children:e.map((e,s)=>(0,n.jsx)("li",{children:(0,n.jsx)("h2",{children:(0,n.jsx)(a(),{href:e.href,scroll:!1,className:(0,i.Z)("flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px",s===t?"text-sky-500 border-current [&_code]:bg-sky-50":"text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700 [&_code]:bg-slate-100 dark:[&_code]:bg-slate-800"),children:e.name})})},e.key||e.name))})})})}},53974:function(e,t,s){"use strict";s.d(t,{L:function(){return l}});var n=s(11163),i=s(67294);function l(){let e=(0,n.useRouter)(),[t,s]=(0,i.useState)(0);return(0,i.useEffect)(()=>s(window.location.hash),[]),(0,i.useEffect)(()=>{function n(){t!==window.location.hash&&s(window.location.hash)}return e.events.on("hashChangeComplete",n),()=>{e.events.off("hashChangeComplete",n)}},[e.events]),t}},52196:function(e,t,s){"use strict";s.d(t,{a:function(){return l}});var n=s(85893),i=s(76239);function l({title:e,description:t,children:s}){return(0,n.jsxs)(i.i,{children:[(0,n.jsx)("header",{id:"header",className:"mb-10 md:flex md:items-start",children:(0,n.jsxs)("div",{className:"flex-auto max-w-4xl",children:[(0,n.jsx)("p",{className:"mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400",children:"Installation"}),(0,n.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200",children:e}),(0,n.jsx)("p",{className:"mt-4 text-lg text-slate-700 dark:text-slate-400",children:t})]})}),(0,n.jsx)("section",{className:"mb-16 relative",children:s})]})}},76003:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return c},default:function(){return p}});var n=s(85893),i=s(53974),l=s(72788),a=s(52196),o=s(39897),r=s(26261);let d=[{name:"Using React",href:"#react",steps:[{title:"Create your project",body:()=>(0,n.jsxs)("p",{children:["Start by creating a new Rspack project if you don’t have one set up already. The most common approach is to use"," ",(0,n.jsx)("a",{href:"https://rspack.dev/guide/start/quick-start#using-the-rspack-cli",children:"Rspack CLI"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm create rspack@latest"}},{title:"Install Tailwind CSS",body:()=>(0,n.jsxs)("p",{children:["Install ",(0,n.jsx)("code",{children:"tailwindcss"})," and its peer dependencies, then generate your"," ",(0,n.jsx)("code",{children:"tailwind.config.js"})," and ",(0,n.jsx)("code",{children:"postcss.config.js"})," files."]}),code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss postcss-loader autoprefixer\nnpx tailwindcss init -p"}},{title:"Enable PostCSS support",body:()=>(0,n.jsxs)("p",{children:["In your ",(0,n.jsx)("code",{children:"rspack.config.js"})," file, enable the PostCSS loader. See"," ",(0,n.jsx)("a",{href:"https://rspack.dev/guide/tech/css#tailwind-css",children:"the documentation"})," ","for more information."]}),code:{name:"rspack.config.js",lang:"js",code:`  module.exports = {
    // ...
    module: {
      rules: [
>       {
>         test: /\\.css$/,
>         use: ["postcss-loader"],
>         type: "css",
>       },
    // ...`}},{title:"Configure your template paths",body:()=>(0,n.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,n.jsx)("code",{children:"tailwind.config.js"})," ","file."]}),code:{name:"tailwind.config.js",lang:"js",code:`  /** @type {import('tailwindcss').Config} */
  export default {
>   content: [
>     "./src/**/*.{js,ts,jsx,tsx}",
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`}},{title:"Add the Tailwind directives to your CSS",body:()=>(0,n.jsxs)("p",{children:["Add the ",(0,n.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind’s layers to your"," ",(0,n.jsx)("code",{children:"./src/index.css"})," file."]}),code:{name:"index.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Start your build process",body:()=>(0,n.jsxs)("p",{children:["Run your build process with ",(0,n.jsx)("code",{children:"npm run dev"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm run dev"}},{title:"Start using Tailwind in your project",body:()=>(0,n.jsx)("p",{children:"Start using Tailwind’s utility classes to style your content."}),code:{name:"App.jsx",lang:"jsx",code:`  export default function App() {
    return (
>     <h1 className="text-3xl font-bold underline">
>       Hello world!
>     </h1>
    )
  }`}}]},{name:"Using Vue",href:"#vue",steps:[{title:"Create your project",body:()=>(0,n.jsxs)("p",{children:["Start by creating a new Rspack project if you don’t have one set up already. The most common approach is to use"," ",(0,n.jsx)("a",{href:"https://rspack.dev/guide/start/quick-start#using-the-rspack-cli",children:"Rspack CLI"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm create rspack@latest"}},{title:"Install Tailwind CSS",body:()=>(0,n.jsxs)("p",{children:["Install ",(0,n.jsx)("code",{children:"tailwindcss"})," and its peer dependencies, then generate your"," ",(0,n.jsx)("code",{children:"tailwind.config.js"})," and ",(0,n.jsx)("code",{children:"postcss.config.js"})," files."]}),code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss postcss-loader autoprefixer\nnpx tailwindcss init -p"}},{title:"Enable PostCSS support",body:()=>(0,n.jsxs)("p",{children:["In your ",(0,n.jsx)("code",{children:"rspack.config.js"})," file, enable the PostCSS loader. See"," ",(0,n.jsx)("a",{href:"https://rspack.dev/guide/tech/css#tailwind-css",children:"the documentation"})," ","for more information."]}),code:{name:"rspack.config.js",lang:"js",code:`  module.exports = {
    // ...
    module: {
      rules: [
>       {
>         test: /\\.css$/,
>         use: ["postcss-loader"],
>         type: "css",
>       },
    // ...`}},{title:"Configure your template paths",body:()=>(0,n.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,n.jsx)("code",{children:"tailwind.config.js"})," ","file."]}),code:{name:"tailwind.config.js",lang:"js",code:`  /** @type {import('tailwindcss').Config} */
  export default {
>   content: [
>     "./index.html",
>     "./src/**/*.{vue,js,ts,jsx,tsx}",
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`}},{title:"Add the Tailwind directives to your CSS",body:()=>(0,n.jsxs)("p",{children:["Add the ",(0,n.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind’s layers to your"," ",(0,n.jsx)("code",{children:"./src/style.css"})," file."]}),code:{name:"style.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Start your build process",body:()=>(0,n.jsxs)("p",{children:["Run your build process with ",(0,n.jsx)("code",{children:"npm run dev"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm run dev"}},{title:"Start using Tailwind in your project",body:()=>(0,n.jsx)("p",{children:"Start using Tailwind’s utility classes to style your content."}),code:{name:"App.vue",lang:"html",code:`  <template>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </template>`}}]}];var c=!0;function p({code:e}){let t=(0,i.L)(),s=d.findIndex(e=>e.href===t);return -1===s&&(s=0),(0,n.jsxs)(a.a,{title:"Install Tailwind CSS with Rspack",description:"Setting up Tailwind CSS in a Rspack project.",children:[(0,n.jsx)(r.n,{tabs:d,selectedTabIndex:s}),(0,n.jsx)(o.R,{steps:d[s].steps,code:e[s]})]})}p.layoutProps={meta:{title:"Install Tailwind CSS with Rspack",description:"Setting up Tailwind CSS in a Rspack project.",section:"Installation"},Layout:l.L,allowOverflow:!1}}},function(e){e.O(0,[9495,7308,7667,9774,2888,179],function(){return e(e.s=38548)}),_N_E=e.O()}]);