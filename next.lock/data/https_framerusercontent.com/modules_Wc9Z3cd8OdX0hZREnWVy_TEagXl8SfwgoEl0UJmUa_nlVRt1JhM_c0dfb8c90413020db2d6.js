import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (3a1f960)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{useActiveVariantCallback,Image,addFonts,withCSS,addPropertyControls,ControlType,cx,useVariantState,RichText,getFonts}from"framer";import{Icon as Phosphor}from"https://framerusercontent.com/modules/tYScH7LTqUtz5KUaUAYP/1Ug7Oa5QuxbjTOPEhCOW/Phosphor.js";const PhosphorFonts=getFonts(Phosphor);const cycleOrder=["ie9_639vo","S2w4rryZL","xzu1GyQ_E","MZrUpsPZK"];const variantClassNames={ie9_639vo:"framer-v-1y60dtq",S2w4rryZL:"framer-v-1v80n9x",xzu1GyQ_E:"framer-v-16b1qc0",MZrUpsPZK:"framer-v-d9uorq"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const humanReadableVariantMap={LiveEvent:"ie9_639vo","Variant 2":"S2w4rryZL",Workshop:"xzu1GyQ_E","Variant 4":"MZrUpsPZK"};const transitions={default:{type:"spring",ease:[.44,0,.56,1],duration:.3,delay:0,stiffness:500,damping:60,mass:1}};const BASE62="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";const useRandomID=()=>{const ref=React.useRef(null);if(ref.current===null){ref.current=Array(5).fill(0).map(()=>BASE62[Math.floor(Math.random()*BASE62.length)]).join("");}return ref.current;};const Component=/*#__PURE__*/ React.forwardRef(function({id,style:externalStyle={},className,width,height,layoutId,variant:outerVariant="ie9_639vo",eventType:kpZndV5xG="Live In-Studio",eventName:muxtHqcHO="Watercolor Workbook Series",teacher:cI8FxdTCw="Sarah Simon",date:jfyREujj4="September 7, 2022",time:UC2rkMcOs="6:30 PM",duration:eIrAOBhFl="2.5 hours",image:pKTkOWGWQ=new URL("assets/0YpR9cyrd0uqBaJ7RlNV3Rns64.webp",import.meta.url).href,shortDesc:iY_txVMRG="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",tap:EIBCf5pD6,cta:itFQRZKQT="Sign Up",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"ie9_639vo",variant,transitions,variantClassNames,cycleOrder});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onTap9hpxsb=activeVariantCallback(async(...args)=>{if(EIBCf5pD6){const res=await EIBCf5pD6(...args);if(res===false)return false;}});const onClickqsfv7u=activeVariantCallback(async(...args)=>{setVariant("S2w4rryZL");});const onClick25ieex=activeVariantCallback(async(...args)=>{setVariant("ie9_639vo");});const onClick19d7ew1=activeVariantCallback(async(...args)=>{setVariant("MZrUpsPZK");});const onClicknxk1qu=activeVariantCallback(async(...args)=>{setVariant("xzu1GyQ_E");});const isDisplayed1=()=>{if(["S2w4rryZL","MZrUpsPZK"].includes(baseVariant))return true;return false;};const isDisplayed2=()=>{if(["xzu1GyQ_E","MZrUpsPZK"].includes(baseVariant))return false;return true;};const isDisplayed3=()=>{if(["xzu1GyQ_E","MZrUpsPZK"].includes(baseVariant))return false;return true;};const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return /*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-XbKtp",classNames),style:{display:"contents",pointerEvents:pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:undefined},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,className:cx("framer-1y60dtq",className),style:{borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopRightRadius:10,borderTopLeftRadius:10,boxShadow:"0px 0.6032302072222955px 0.6032302072222955px -1.25px rgba(0, 0, 0, 0.17996), 0px 2.290210571630906px 2.290210571630906px -2.5px rgba(0, 0, 0, 0.15887), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.0625)",backgroundColor:"rgb(255, 255, 255)","--border-bottom-width":"1px","--border-top-width":"1px","--border-right-width":"1px","--border-left-width":"1px","--border-style":"solid","--border-color":"rgba(34, 34, 34, 0.05)",...style},layoutId:"ie9_639vo",transition:transition,layoutDependency:layoutDependency,"data-framer-name":"LiveEvent","data-border":true,ref:ref,...addPropertyOverrides({S2w4rryZL:{"data-framer-name":"Variant 2"},xzu1GyQ_E:{"data-framer-name":"Workshop"},MZrUpsPZK:{"data-framer-name":"Variant 4"}},baseVariant,gestureVariant),children:[/*#__PURE__*/ _jsx(Image,{className:"framer-enlds",style:{},layoutId:"IeDVqt03B",transition:transition,layoutDependency:layoutDependency,background:{src:pKTkOWGWQ,pixelWidth:1032,pixelHeight:1296,intrinsicWidth:1032,intrinsicHeight:1296,fit:"fill"},alt:"",...addPropertyOverrides({S2w4rryZL:{background:{src:pKTkOWGWQ,pixelWidth:1032,pixelHeight:1296,intrinsicWidth:1032,intrinsicHeight:1296,fit:"fill"}}},baseVariant,gestureVariant),children:/*#__PURE__*/ _jsxs(motion.div,{className:"framer-eotisx",style:{borderBottomLeftRadius:"100%",borderBottomRightRadius:"100%",borderTopRightRadius:"100%",borderTopLeftRadius:"100%",backgroundColor:"rgb(255, 255, 255)"},layoutId:"wcUGijpnO",transition:transition,layoutDependency:layoutDependency,"data-framer-name":"Short description",variants:{S2w4rryZL:{borderBottomLeftRadius:0,borderBottomRightRadius:0,borderTopRightRadius:0,borderTopLeftRadius:0,backgroundColor:"rgba(255, 255, 255, 0.95)"},MZrUpsPZK:{borderBottomLeftRadius:0,borderBottomRightRadius:0,borderTopRightRadius:0,borderTopLeftRadius:0,backgroundColor:"rgba(255, 255, 255, 0.95)"}},...addPropertyOverrides({S2w4rryZL:{transformTemplate:undefined},xzu1GyQ_E:{onTap:undefined,"data-highlight":false},MZrUpsPZK:{onTap:undefined,"data-highlight":false,transformTemplate:undefined}},baseVariant,gestureVariant),children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-sa5u5",style:{backgroundColor:"transparent"},layoutId:"Si_ZkOXj3",transition:transition,layoutDependency:layoutDependency,background:null,variants:{S2w4rryZL:{backgroundColor:"transparent"}},...addPropertyOverrides({S2w4rryZL:{transformTemplate:undefined,background:null},MZrUpsPZK:{onTap:undefined,transformTemplate:undefined,background:null,"data-highlight":false}},baseVariant,gestureVariant),children:/*#__PURE__*/ _jsx(motion.div,{style:{},className:"framer-qsfv7u-container",layoutId:"ECLfpGySB-container",transition:transition,layoutDependency:layoutDependency,...addPropertyOverrides({S2w4rryZL:{transformTemplate:undefined},MZrUpsPZK:{transformTemplate:undefined}},baseVariant,gestureVariant),children:/*#__PURE__*/ _jsx(Phosphor,{width:"100%",height:"100%",layoutId:"ECLfpGySB",id:"ECLfpGySB",selectByList:true,iconSelection:"Info",iconSearch:"House",color:"rgb(119, 119, 119)",weight:"regular",mirrored:false,onClick:onClickqsfv7u,style:{width:"100%",height:"100%"},...addPropertyOverrides({S2w4rryZL:{color:"rgb(0, 0, 0)",iconSelection:"XCircle",onClick:onClick25ieex,style:{width:"100%",height:"100%"}},xzu1GyQ_E:{onClick:onClick19d7ew1},MZrUpsPZK:{iconSelection:"XCircle",color:"rgb(0, 0, 0)",onClick:onClicknxk1qu,style:{width:"100%",height:"100%"}}},baseVariant,gestureVariant)})})}),isDisplayed1()&&/*#__PURE__*/ _jsx(RichText,{className:"framer-1mkg1hc",style:{"--framer-paragraph-spacing":"0px","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline",whiteSpace:"pre-wrap",wordWrap:"break-word",wordBreak:"break-word",opacity:1},transformTemplate:(_,t)=>`translate(-50%, -50%) ${t}`,layoutId:"fvryCpTZU",transition:transition,layoutDependency:layoutDependency,fonts:["Helvetica-Light"],withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,__htmlStructure:'<p style="--framer-line-height:1.5em;"><span style="--framer-font-family:&quot;Helvetica-Light&quot;, sans-serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:SGVsdmV0aWNhLUxpZ2h0; --framer-font-size:18px;">{{ text-placeholder }}</span></p>',htmlFromDesign:'<p style="--framer-line-height:1.5em;"><span style="--framer-font-family:&quot;Helvetica-Light&quot;, sans-serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:SGVsdmV0aWNhLUxpZ2h0; --framer-font-size:18px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></p>',textFromDesign:iY_txVMRG,variants:{xzu1GyQ_E:{opacity:0},MZrUpsPZK:{opacity:1}}})]})}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-qnq6ax",style:{},layoutId:"PbVwWh02S",transition:transition,layoutDependency:layoutDependency,background:null,children:[/*#__PURE__*/ _jsx(RichText,{className:"framer-mtpmmd",style:{"--framer-paragraph-spacing":"0px","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline",whiteSpace:"pre-wrap",wordWrap:"break-word",wordBreak:"break-word","--extracted-1w3ko1f":"rgb(85, 85, 85)"},layoutId:"lujPQEcUJ",transition:transition,layoutDependency:layoutDependency,fonts:["GF;Open Sans-regular"],withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,__htmlStructure:'<p><span style="--framer-font-family:&quot;Open Sans&quot;, sans-serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=; --framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',htmlFromDesign:'<p><span style="--framer-font-family:&quot;Open Sans&quot;, sans-serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=; --framer-text-color:var(--extracted-1w3ko1f);">Live In-Studio</span></p>',textFromDesign:kpZndV5xG}),/*#__PURE__*/ _jsx(RichText,{className:"framer-19cqgvw",style:{"--framer-paragraph-spacing":"0px","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline",whiteSpace:"pre-wrap",wordWrap:"break-word",wordBreak:"break-word"},layoutId:"UHvyvXqMq",transition:transition,layoutDependency:layoutDependency,fonts:["GF;Open Sans-regular"],withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,__htmlStructure:'<p><span style="--framer-font-family:&quot;Open Sans&quot;, sans-serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=; --framer-font-size:20px;">{{ text-placeholder }}</span></p>',htmlFromDesign:'<p><span style="--framer-font-family:&quot;Open Sans&quot;, sans-serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=; --framer-font-size:20px;">Watercolor Workbook Series</span></p>',textFromDesign:muxtHqcHO}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-15upvzr",style:{},layoutId:"Y2EDTjCmq",transition:transition,layoutDependency:layoutDependency,background:null,children:[/*#__PURE__*/ _jsx(RichText,{className:"framer-1k2j7dz",style:{"--framer-paragraph-spacing":"0px","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline",whiteSpace:"pre","--extracted-1w3ko1f":"rgb(85, 85, 85)"},layoutId:"pNDE_SKlr",transition:transition,layoutDependency:layoutDependency,fonts:["GF;Open Sans-regular"],withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,__htmlStructure:'<p><span style="--framer-font-family:&quot;Open Sans&quot;, sans-serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=; --framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',htmlFromDesign:'<p><span style="--framer-font-family:&quot;Open Sans&quot;, sans-serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=; --framer-text-color:var(--extracted-1w3ko1f);">taught by:</span></p>',...addPropertyOverrides({S2w4rryZL:{textFromDesign:undefined}},baseVariant,gestureVariant)}),/*#__PURE__*/ _jsx(RichText,{className:"framer-58lp6g",style:{"--framer-paragraph-spacing":"0px","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline",whiteSpace:"pre","--extracted-1w3ko1f":"rgb(85, 85, 85)"},layoutId:"nDXlPvxHb",transition:transition,layoutDependency:layoutDependency,fonts:["GF;Open Sans-regular"],withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,__htmlStructure:'<p><span style="--framer-font-family:&quot;Open Sans&quot;, sans-serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=; --framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',htmlFromDesign:'<p><span style="--framer-font-family:&quot;Open Sans&quot;, sans-serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=; --framer-text-color:var(--extracted-1w3ko1f);">Sarah Simon</span></p>',textFromDesign:cI8FxdTCw})]})]}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-1jp6d2i",style:{},layoutId:"zkMndJiTh",transition:transition,layoutDependency:layoutDependency,background:null,children:[isDisplayed2()&&/*#__PURE__*/ _jsx(RichText,{className:"framer-1nwxqse",style:{"--framer-paragraph-spacing":"0px","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline",whiteSpace:"pre","--extracted-1w3ko1f":"rgb(85, 85, 85)"},layoutId:"TSN3cf8LC",transition:transition,layoutDependency:layoutDependency,fonts:["GF;Open Sans-regular"],withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,__htmlStructure:'<p><span style="--framer-font-family:&quot;Open Sans&quot;, sans-serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=; --framer-text-color:var(--extracted-1w3ko1f); --framer-font-size:18px;">{{ text-placeholder }}</span></p>',htmlFromDesign:'<p><span style="--framer-font-family:&quot;Open Sans&quot;, sans-serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=; --framer-text-color:var(--extracted-1w3ko1f); --framer-font-size:18px;">September 7, 2022</span></p>',textFromDesign:jfyREujj4}),isDisplayed3()&&/*#__PURE__*/ _jsx(RichText,{className:"framer-49v07u",style:{"--framer-paragraph-spacing":"0px","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline",whiteSpace:"pre","--extracted-1w3ko1f":"rgb(85, 85, 85)"},layoutId:"TXPd_MdjW",transition:transition,layoutDependency:layoutDependency,fonts:["GF;Open Sans-regular"],withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,__htmlStructure:'<p><span style="--framer-font-family:&quot;Open Sans&quot;, sans-serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=; --framer-text-color:var(--extracted-1w3ko1f); --framer-font-size:18px;">{{ text-placeholder }}</span></p>',htmlFromDesign:'<p><span style="--framer-font-family:&quot;Open Sans&quot;, sans-serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=; --framer-text-color:var(--extracted-1w3ko1f); --framer-font-size:18px;">6:30 PM</span></p>',textFromDesign:UC2rkMcOs}),/*#__PURE__*/ _jsx(RichText,{className:"framer-8gk8sr",style:{"--framer-paragraph-spacing":"0px","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline",whiteSpace:"pre","--extracted-1w3ko1f":"rgb(85, 85, 85)"},layoutId:"KxNszRuph",transition:transition,layoutDependency:layoutDependency,fonts:["GF;Open Sans-regular"],withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,__htmlStructure:'<p><span style="--framer-font-family:&quot;Open Sans&quot;, sans-serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=; --framer-text-color:var(--extracted-1w3ko1f); --framer-font-size:18px;">{{ text-placeholder }}</span></p>',htmlFromDesign:'<p><span style="--framer-font-family:&quot;Open Sans&quot;, sans-serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=; --framer-text-color:var(--extracted-1w3ko1f); --framer-font-size:18px;">2.5 hours</span></p>',textFromDesign:eIrAOBhFl})]}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-16ge0sq",style:{},layoutId:"nulhj_Icj",transition:transition,layoutDependency:layoutDependency,background:null,children:/*#__PURE__*/ _jsx(motion.div,{className:"framer-9hpxsb",style:{borderBottomLeftRadius:6,borderBottomRightRadius:6,borderTopRightRadius:6,borderTopLeftRadius:6,backgroundColor:"rgb(199, 213, 195)"},layoutId:"sN5Fubohn",transition:transition,layoutDependency:layoutDependency,"data-highlight":true,onTap:onTap9hpxsb,children:/*#__PURE__*/ _jsx(RichText,{className:"framer-xr78ay",style:{"--framer-paragraph-spacing":"0px","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline",whiteSpace:"pre","--extracted-1w3ko1f":"rgb(26, 32, 44)"},layoutId:"JjXZF8G63",transition:transition,layoutDependency:layoutDependency,fonts:["GF;Open Sans-600"],withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,__htmlStructure:'<p style="--framer-text-alignment:center;"><span style="--framer-font-family:&quot;Open Sans&quot;, sans-serif; --framer-font-style:normal; --framer-font-weight:600; --font-selector:R0Y7T3BlbiBTYW5zLTYwMA==; --framer-text-color:var(--extracted-1w3ko1f); --framer-font-size:18px; --framer-text-transform:lowercase;">{{ text-placeholder }}</span></p>',htmlFromDesign:'<p style="--framer-text-alignment:center;"><span style="--framer-font-family:&quot;Open Sans&quot;, sans-serif; --framer-font-style:normal; --framer-font-weight:600; --font-selector:R0Y7T3BlbiBTYW5zLTYwMA==; --framer-text-color:var(--extracted-1w3ko1f); --framer-font-size:18px; --framer-text-transform:lowercase;">Sign Up</span></p>',textFromDesign:itFQRZKQT,...addPropertyOverrides({S2w4rryZL:{textFromDesign:undefined}},baseVariant,gestureVariant)})})})]})})});});const css=['.framer-XbKtp [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-XbKtp * { box-sizing: border-box; }",".framer-XbKtp .framer-1y60dtq { position: relative; overflow: hidden; will-change: transform; width: min-content; height: min-content; display: flex; flex-direction: column; justify-content: flex-start; align-content: flex-start; align-items: flex-start; flex-wrap: nowrap; gap: 20px; padding: 0px 0px 20px 0px; }",".framer-XbKtp .framer-enlds { position: relative; overflow: visible; width: 300px; height: 300px; flex: none; }",".framer-XbKtp .framer-eotisx { position: absolute; overflow: visible; width: 29px; height: 30px; right: 13px; top: 9px; flex: none; }",".framer-XbKtp .framer-sa5u5 { position: absolute; overflow: visible; width: 18px; height: 18px; left: calc(51.724137931034505% - 18px / 2); top: calc(50.00000000000002% - 18px / 2); flex: none; }",".framer-XbKtp .framer-qsfv7u-container { position: absolute; right: 0px; bottom: 0px; left: 0px; top: 0px; flex: none; }",".framer-XbKtp .framer-1mkg1hc { position: absolute; width: 240px; height: auto; left: 49%; top: 48%; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }",".framer-XbKtp .framer-qnq6ax { position: relative; overflow: visible; width: auto; height: min-content; flex: none; align-self: stretch; display: flex; flex-direction: column; justify-content: flex-start; align-content: flex-start; align-items: flex-start; flex-wrap: nowrap; gap: 6px; padding: 0px 20px 0px 20px; }",".framer-XbKtp .framer-mtpmmd { position: relative; width: 198px; height: 19px; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }",".framer-XbKtp .framer-19cqgvw { position: relative; width: 100%; height: auto; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }",".framer-XbKtp .framer-15upvzr { position: relative; overflow: visible; width: 209px; height: 24px; flex: none; display: flex; flex-direction: row; justify-content: flex-start; align-content: center; align-items: center; flex-wrap: nowrap; gap: 4px; padding: 2px 0px 2px 0px; }",".framer-XbKtp .framer-1k2j7dz, .framer-XbKtp .framer-58lp6g, .framer-XbKtp .framer-1nwxqse, .framer-XbKtp .framer-49v07u, .framer-XbKtp .framer-8gk8sr, .framer-XbKtp .framer-xr78ay { position: relative; width: auto; height: auto; flex: none; white-space: pre; }",".framer-XbKtp .framer-1jp6d2i { position: relative; overflow: visible; width: auto; height: min-content; flex: none; align-self: stretch; display: flex; flex-direction: column; justify-content: center; align-content: flex-start; align-items: flex-start; flex-wrap: nowrap; gap: 4px; padding: 0px 20px 0px 20px; }",".framer-XbKtp .framer-16ge0sq { position: relative; overflow: visible; width: min-content; height: 39px; flex: none; display: flex; flex-direction: row; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 10px; padding: 0px 0px 0px 20px; }",".framer-XbKtp .framer-9hpxsb { position: relative; cursor: pointer; overflow: visible; width: min-content; height: 39px; flex: none; display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 10px; padding: 9px 19px 9px 18px; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-XbKtp framer-1y60dtq > * { margin: 0px; margin-top: calc(20px / 2); margin-bottom: calc(20px / 2); } .framer-XbKtp framer-1y60dtq > :first-child, .framer-XbKtp framer-qnq6ax > :first-child, .framer-XbKtp framer-1jp6d2i > :first-child, .framer-XbKtp framer-9hpxsb > :first-child { margin-top: 0px; } .framer-XbKtp framer-1y60dtq > :last-child, .framer-XbKtp framer-qnq6ax > :last-child, .framer-XbKtp framer-1jp6d2i > :last-child, .framer-XbKtp framer-9hpxsb > :last-child { margin-bottom: 0px; } .framer-XbKtp framer-qnq6ax > * { margin: 0px; margin-top: calc(6px / 2); margin-bottom: calc(6px / 2); } .framer-XbKtp framer-15upvzr > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-XbKtp framer-15upvzr > :first-child, .framer-XbKtp framer-16ge0sq > :first-child { margin-left: 0px; } .framer-XbKtp framer-15upvzr > :last-child, .framer-XbKtp framer-16ge0sq > :last-child { margin-right: 0px; } .framer-XbKtp framer-1jp6d2i > * { margin: 0px; margin-top: calc(4px / 2); margin-bottom: calc(4px / 2); } .framer-XbKtp framer-16ge0sq > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-XbKtp framer-9hpxsb > * { margin: 0px; margin-top: calc(10px / 2); margin-bottom: calc(10px / 2); } }",".framer-XbKtp.framer-v-1v80n9x .framer-enlds { width: 300px; height: 300px; right: auto; bottom: auto; left: auto; top: auto; flex: none; align-self: auto; aspect-ratio: unset; }",".framer-XbKtp.framer-v-1v80n9x .framer-eotisx { width: auto; height: auto; right: 0px; bottom: 0px; left: 0px; top: 0px; flex: none; aspect-ratio: unset; overflow: hidden; }",".framer-XbKtp.framer-v-1v80n9x .framer-sa5u5 { width: 18px; height: 18px; right: 5px; bottom: auto; left: auto; top: 6px; flex: none; aspect-ratio: unset; overflow: visible; }",".framer-XbKtp.framer-v-1v80n9x .framer-qsfv7u-container { width: auto; height: auto; right: 0px; bottom: 0px; left: 0px; top: 0px; flex: none; aspect-ratio: unset; }",".framer-XbKtp.framer-v-16b1qc0 .framer-eotisx { cursor: auto; }",".framer-XbKtp.framer-v-d9uorq .framer-eotisx { cursor: auto; width: auto; height: auto; right: 0px; bottom: -4px; left: 0px; top: 0px; flex: none; aspect-ratio: unset; }",".framer-XbKtp.framer-v-d9uorq .framer-sa5u5 { width: 18px; height: 18px; right: 5px; bottom: auto; left: auto; top: 6px; flex: none; aspect-ratio: unset; cursor: auto; }",".framer-XbKtp.framer-v-d9uorq .framer-qsfv7u-container { width: auto; height: auto; right: 0px; bottom: -6px; left: 0px; top: 0px; flex: none; aspect-ratio: unset; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 595
 * @framerIntrinsicWidth 300
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"S2w4rryZL":{"layout":["auto","auto"]},"xzu1GyQ_E":{"layout":["auto","auto"]},"MZrUpsPZK":{"layout":["auto","auto"]}}}
 * @framerVariables {"kpZndV5xG":"eventType","muxtHqcHO":"eventName","cI8FxdTCw":"teacher","jfyREujj4":"date","UC2rkMcOs":"time","eIrAOBhFl":"duration","pKTkOWGWQ":"image","iY_txVMRG":"shortDesc","EIBCf5pD6":"tap","itFQRZKQT":"cta"}
 */ const FramernlVRt1JhM=withCSS(Component,css);export default FramernlVRt1JhM;FramernlVRt1JhM.displayName="Event Card";FramernlVRt1JhM.defaultProps={width:300,height:595};addPropertyControls(FramernlVRt1JhM,{variant:{type:ControlType.Enum,title:"Variant",options:["ie9_639vo","S2w4rryZL","xzu1GyQ_E","MZrUpsPZK"],optionTitles:["LiveEvent","Variant 2","Workshop","Variant 4"]},kpZndV5xG:{type:ControlType.String,title:"Event Type",defaultValue:"Live In-Studio",displayTextArea:false},muxtHqcHO:{type:ControlType.String,title:"Event Name",defaultValue:"Watercolor Workbook Series",displayTextArea:false},cI8FxdTCw:{type:ControlType.String,title:"Teacher",defaultValue:"Sarah Simon",displayTextArea:false},jfyREujj4:{type:ControlType.String,title:"Date",defaultValue:"September 7, 2022",displayTextArea:false},UC2rkMcOs:{type:ControlType.String,title:"Time",defaultValue:"6:30 PM",displayTextArea:false},eIrAOBhFl:{type:ControlType.String,title:"Duration",defaultValue:"2.5 hours",displayTextArea:false},pKTkOWGWQ:{type:ControlType.Image,title:"Image",__defaultAssetReference:"data:framer/asset-reference,0YpR9cyrd0uqBaJ7RlNV3Rns64.webp?originalFilename=sarah-simon-watercolor-workshop.webp&preferredSize=auto"},iY_txVMRG:{type:ControlType.String,title:"Short Desc",defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",displayTextArea:false},EIBCf5pD6:{type:ControlType.EventHandler,title:"Tap"},itFQRZKQT:{type:ControlType.String,title:"Cta",defaultValue:"Sign Up",displayTextArea:false}});addFonts(FramernlVRt1JhM,[{url:"https://fonts.gstatic.com/s/opensans/v29/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf",family:"Open Sans",style:"normal",weight:"400",moduleAsset:{url:"https://fonts.gstatic.com/s/opensans/v29/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf",localModuleIdentifier:"local-module:canvasComponent/nlVRt1JhM:default"}},{url:"https://fonts.gstatic.com/s/opensans/v29/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1y4nY1M2xLER.ttf",family:"Open Sans",style:"normal",weight:"600",moduleAsset:{url:"https://fonts.gstatic.com/s/opensans/v29/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1y4nY1M2xLER.ttf",localModuleIdentifier:"local-module:canvasComponent/nlVRt1JhM:default"}},...PhosphorFonts]);
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"FramernlVRt1JhM","slots":[],"annotations":{"framerContractVersion":"1","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"auto\",\"auto\"]},\"S2w4rryZL\":{\"layout\":[\"auto\",\"auto\"]},\"xzu1GyQ_E\":{\"layout\":[\"auto\",\"auto\"]},\"MZrUpsPZK\":{\"layout\":[\"auto\",\"auto\"]}}}","framerVariables":"{\"kpZndV5xG\":\"eventType\",\"muxtHqcHO\":\"eventName\",\"cI8FxdTCw\":\"teacher\",\"jfyREujj4\":\"date\",\"UC2rkMcOs\":\"time\",\"eIrAOBhFl\":\"duration\",\"pKTkOWGWQ\":\"image\",\"iY_txVMRG\":\"shortDesc\",\"EIBCf5pD6\":\"tap\",\"itFQRZKQT\":\"cta\"}","framerIntrinsicHeight":"595","framerIntrinsicWidth":"300"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./nlVRt1JhM.map