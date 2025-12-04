(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/birthday/floating-balloons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingBalloons",
    ()=>FloatingBalloons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function FloatingBalloons() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const balloonsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingBalloons.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const resizeCanvas = {
                "FloatingBalloons.useEffect.resizeCanvas": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["FloatingBalloons.useEffect.resizeCanvas"];
            resizeCanvas();
            window.addEventListener("resize", resizeCanvas);
            // Initialize balloons
            const colors = [
                "rgba(244, 114, 182, 0.6)",
                "rgba(251, 207, 232, 0.7)",
                "rgba(253, 164, 175, 0.6)",
                "rgba(249, 168, 212, 0.65)",
                "rgba(236, 72, 153, 0.5)"
            ];
            for(let i = 0; i < 15; i++){
                balloonsRef.current.push({
                    id: i,
                    x: Math.random() * canvas.width,
                    y: canvas.height + Math.random() * 200,
                    size: 30 + Math.random() * 40,
                    speed: 0.3 + Math.random() * 0.5,
                    wobble: Math.random() * Math.PI * 2,
                    color: colors[Math.floor(Math.random() * colors.length)]
                });
            }
            const animate = {
                "FloatingBalloons.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    balloonsRef.current.forEach({
                        "FloatingBalloons.useEffect.animate": (balloon)=>{
                            balloon.y -= balloon.speed;
                            balloon.wobble += 0.02;
                            const wobbleX = Math.sin(balloon.wobble) * 20;
                            if (balloon.y < -100) {
                                balloon.y = canvas.height + 50;
                                balloon.x = Math.random() * canvas.width;
                            }
                            // Draw balloon
                            ctx.beginPath();
                            ctx.fillStyle = balloon.color;
                            ctx.ellipse(balloon.x + wobbleX, balloon.y, balloon.size * 0.7, balloon.size, 0, 0, Math.PI * 2);
                            ctx.fill();
                            // Draw string
                            ctx.beginPath();
                            ctx.strokeStyle = "rgba(200, 200, 200, 0.5)";
                            ctx.lineWidth = 1;
                            ctx.moveTo(balloon.x + wobbleX, balloon.y + balloon.size);
                            ctx.quadraticCurveTo(balloon.x + wobbleX + 10, balloon.y + balloon.size + 30, balloon.x + wobbleX - 5, balloon.y + balloon.size + 60);
                            ctx.stroke();
                            // Balloon highlight
                            ctx.beginPath();
                            ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
                            ctx.ellipse(balloon.x + wobbleX - balloon.size * 0.25, balloon.y - balloon.size * 0.3, balloon.size * 0.15, balloon.size * 0.2, -0.5, 0, Math.PI * 2);
                            ctx.fill();
                        }
                    }["FloatingBalloons.useEffect.animate"]);
                    animationRef.current = requestAnimationFrame(animate);
                }
            }["FloatingBalloons.useEffect.animate"];
            animate();
            return ({
                "FloatingBalloons.useEffect": ()=>{
                    window.removeEventListener("resize", resizeCanvas);
                    if (animationRef.current) {
                        cancelAnimationFrame(animationRef.current);
                    }
                }
            })["FloatingBalloons.useEffect"];
        }
    }["FloatingBalloons.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 pointer-events-none z-0",
        style: {
            background: "transparent"
        }
    }, void 0, false, {
        fileName: "[project]/components/birthday/floating-balloons.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(FloatingBalloons, "7ljezXk6/1j8QoDXaoWx3IRWb9Q=");
_c = FloatingBalloons;
var _c;
__turbopack_context__.k.register(_c, "FloatingBalloons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/birthday/sparkle-effect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SparkleEffect",
    ()=>SparkleEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function SparkleEffect() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sparklesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SparkleEffect.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const resizeCanvas = {
                "SparkleEffect.useEffect.resizeCanvas": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["SparkleEffect.useEffect.resizeCanvas"];
            resizeCanvas();
            window.addEventListener("resize", resizeCanvas);
            // Initialize sparkles
            for(let i = 0; i < 50; i++){
                sparklesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: 1 + Math.random() * 3,
                    opacity: Math.random(),
                    speed: 0.5 + Math.random() * 1,
                    angle: Math.random() * Math.PI * 2
                });
            }
            const animate = {
                "SparkleEffect.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    sparklesRef.current.forEach({
                        "SparkleEffect.useEffect.animate": (sparkle)=>{
                            sparkle.angle += 0.05;
                            sparkle.opacity = 0.3 + Math.abs(Math.sin(sparkle.angle)) * 0.7;
                            // Draw sparkle
                            ctx.save();
                            ctx.translate(sparkle.x, sparkle.y);
                            ctx.rotate(sparkle.angle);
                            const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, sparkle.size * 2);
                            gradient.addColorStop(0, `rgba(255, 255, 255, ${sparkle.opacity})`);
                            gradient.addColorStop(0.5, `rgba(251, 207, 232, ${sparkle.opacity * 0.5})`);
                            gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
                            ctx.fillStyle = gradient;
                            ctx.beginPath();
                            // Draw 4-point star
                            for(let i = 0; i < 4; i++){
                                const angle = i * Math.PI / 2;
                                ctx.lineTo(Math.cos(angle) * sparkle.size * 2, Math.sin(angle) * sparkle.size * 2);
                                ctx.lineTo(Math.cos(angle + Math.PI / 4) * sparkle.size * 0.5, Math.sin(angle + Math.PI / 4) * sparkle.size * 0.5);
                            }
                            ctx.closePath();
                            ctx.fill();
                            ctx.restore();
                            // Slowly move sparkles
                            sparkle.y -= sparkle.speed * 0.1;
                            if (sparkle.y < -10) {
                                sparkle.y = canvas.height + 10;
                                sparkle.x = Math.random() * canvas.width;
                            }
                        }
                    }["SparkleEffect.useEffect.animate"]);
                    animationRef.current = requestAnimationFrame(animate);
                }
            }["SparkleEffect.useEffect.animate"];
            animate();
            return ({
                "SparkleEffect.useEffect": ()=>{
                    window.removeEventListener("resize", resizeCanvas);
                    if (animationRef.current) {
                        cancelAnimationFrame(animationRef.current);
                    }
                }
            })["SparkleEffect.useEffect"];
        }
    }["SparkleEffect.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 pointer-events-none z-10",
        style: {
            background: "transparent"
        }
    }, void 0, false, {
        fileName: "[project]/components/birthday/sparkle-effect.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s(SparkleEffect, "390w0dM4tlcCvBXtQ5HtgWFeZf0=");
_c = SparkleEffect;
var _c;
__turbopack_context__.k.register(_c, "SparkleEffect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/birthday/landing-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingScreen",
    ()=>LandingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$floating$2d$balloons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/floating-balloons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$sparkle$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/sparkle-effect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function LandingScreen({ onEnter }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExiting, setIsExiting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingScreen.useEffect": ()=>{
            // GSAP-style entrance animation using CSS
            const timer = setTimeout({
                "LandingScreen.useEffect.timer": ()=>setIsVisible(true)
            }["LandingScreen.useEffect.timer"], 300);
            return ({
                "LandingScreen.useEffect": ()=>clearTimeout(timer)
            })["LandingScreen.useEffect"];
        }
    }["LandingScreen.useEffect"], []);
    const handleEnter = ()=>{
        setIsExiting(true);
        setTimeout(onEnter, 800);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `min-h-screen relative flex items-center justify-center overflow-hidden transition-opacity duration-700 ${isExiting ? "opacity-0" : "opacity-100"}`,
        style: {
            background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$floating$2d$balloons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingBalloons"], {}, void 0, false, {
                fileName: "[project]/components/birthday/landing-screen.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$sparkle$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparkleEffect"], {}, void 0, false, {
                fileName: "[project]/components/birthday/landing-screen.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute w-[200%] h-[200%] -top-1/2 -left-1/2 animate-spin",
                    style: {
                        background: "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.1) 60deg, transparent 120deg)",
                        animationDuration: "20s"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/birthday/landing-screen.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/birthday/landing-screen.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cardRef,
                className: `relative z-20 glass-card rounded-3xl p-8 md:p-12 max-w-lg mx-4 text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"}`,
                style: {
                    boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.25)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-4 -left-4 text-primary opacity-60 animate-float",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: "w-8 h-8 fill-current"
                        }, void 0, false, {
                            fileName: "[project]/components/birthday/landing-screen.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/landing-screen.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-2 -right-6 text-primary opacity-40 animate-float",
                        style: {
                            animationDelay: "1s"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: "w-6 h-6 fill-current"
                        }, void 0, false, {
                            fileName: "[project]/components/birthday/landing-screen.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/landing-screen.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-3 -right-4 text-primary opacity-50 animate-float",
                        style: {
                            animationDelay: "0.5s"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: "w-7 h-7 fill-current"
                        }, void 0, false, {
                            fileName: "[project]/components/birthday/landing-screen.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/landing-screen.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        className: "w-10 h-10 text-primary fill-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/birthday/landing-screen.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/birthday/landing-screen.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/landing-screen.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance",
                                children: "Welcome to Your Birthday Room"
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/landing-screen.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight text-balance",
                                children: "Bubu Jaan ❤️"
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/landing-screen.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-lg leading-relaxed",
                                children: "A little world made only for you... tap to enter."
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/landing-screen.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: buttonRef,
                                onClick: handleEnter,
                                className: "mt-6 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse-glow",
                                children: "Enter Your Surprise"
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/landing-screen.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/birthday/landing-screen.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/birthday/landing-screen.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/birthday/landing-screen.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(LandingScreen, "1oc33d8a1mZrnT2rXWRRRp30M2Y=");
_c = LandingScreen;
var _c;
__turbopack_context__.k.register(_c, "LandingScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/birthday/heart-particles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeartParticles",
    ()=>HeartParticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function HeartParticles() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeartParticles.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const resizeCanvas = {
                "HeartParticles.useEffect.resizeCanvas": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["HeartParticles.useEffect.resizeCanvas"];
            resizeCanvas();
            window.addEventListener("resize", resizeCanvas);
            // Initialize particles
            for(let i = 0; i < 20; i++){
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: canvas.height + Math.random() * 100,
                    size: 8 + Math.random() * 12,
                    speed: 0.5 + Math.random() * 1,
                    opacity: 0.3 + Math.random() * 0.5,
                    wobble: Math.random() * Math.PI * 2
                });
            }
            const drawHeart = {
                "HeartParticles.useEffect.drawHeart": (x, y, size, opacity)=>{
                    ctx.save();
                    ctx.translate(x, y);
                    ctx.scale(size / 30, size / 30);
                    ctx.beginPath();
                    ctx.moveTo(0, -8);
                    ctx.bezierCurveTo(-15, -22, -30, -5, 0, 15);
                    ctx.bezierCurveTo(30, -5, 15, -22, 0, -8);
                    ctx.fillStyle = `rgba(236, 72, 153, ${opacity})`;
                    ctx.fill();
                    ctx.restore();
                }
            }["HeartParticles.useEffect.drawHeart"];
            const animate = {
                "HeartParticles.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    particlesRef.current.forEach({
                        "HeartParticles.useEffect.animate": (particle)=>{
                            particle.y -= particle.speed;
                            particle.wobble += 0.03;
                            const wobbleX = Math.sin(particle.wobble) * 30;
                            if (particle.y < -50) {
                                particle.y = canvas.height + 50;
                                particle.x = Math.random() * canvas.width;
                            }
                            drawHeart(particle.x + wobbleX, particle.y, particle.size, particle.opacity);
                        }
                    }["HeartParticles.useEffect.animate"]);
                    animationRef.current = requestAnimationFrame(animate);
                }
            }["HeartParticles.useEffect.animate"];
            animate();
            return ({
                "HeartParticles.useEffect": ()=>{
                    window.removeEventListener("resize", resizeCanvas);
                    if (animationRef.current) {
                        cancelAnimationFrame(animationRef.current);
                    }
                }
            })["HeartParticles.useEffect"];
        }
    }["HeartParticles.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 pointer-events-none z-5",
        style: {
            background: "transparent"
        }
    }, void 0, false, {
        fileName: "[project]/components/birthday/heart-particles.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(HeartParticles, "in4Kgcnry5iKT75klnRmU24pzoE=");
_c = HeartParticles;
var _c;
__turbopack_context__.k.register(_c, "HeartParticles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/birthday/intro-animation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IntroAnimation",
    ()=>IntroAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$heart$2d$particles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/heart-particles.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$sparkle$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/sparkle-effect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function IntroAnimation({ onContinue }) {
    _s();
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentLine, setCurrentLine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showButton, setShowButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExiting, setIsExiting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lines = [
        "Even though I can’t sit's beside you today…",
        "I still wanted to make you feel my presence.",
        "So I created a little world for you,",
        "filled with our memories, love, and magical surprises."
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IntroAnimation.useEffect": ()=>{
            if (currentLine >= lines.length) {
                setTimeout({
                    "IntroAnimation.useEffect": ()=>setShowButton(true)
                }["IntroAnimation.useEffect"], 500);
                return;
            }
            const text = lines[currentLine];
            let charIndex = 0;
            const typeInterval = setInterval({
                "IntroAnimation.useEffect.typeInterval": ()=>{
                    if (charIndex <= text.length) {
                        setDisplayedText(text.slice(0, charIndex));
                        charIndex++;
                    } else {
                        clearInterval(typeInterval);
                        setTimeout({
                            "IntroAnimation.useEffect.typeInterval": ()=>{
                                setCurrentLine({
                                    "IntroAnimation.useEffect.typeInterval": (prev)=>prev + 1
                                }["IntroAnimation.useEffect.typeInterval"]);
                                setDisplayedText("");
                            }
                        }["IntroAnimation.useEffect.typeInterval"], 800);
                    }
                }
            }["IntroAnimation.useEffect.typeInterval"], 50);
            return ({
                "IntroAnimation.useEffect": ()=>clearInterval(typeInterval)
            })["IntroAnimation.useEffect"];
        }
    }["IntroAnimation.useEffect"], [
        currentLine
    ]);
    const handleContinue = ()=>{
        setIsExiting(true);
        setTimeout(onContinue, 700);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `min-h-screen relative flex items-center justify-center overflow-hidden transition-opacity duration-700 ${isExiting ? "opacity-0" : "opacity-100"}`,
        style: {
            background: "linear-gradient(180deg, #fdf2f8 0%, #fce7f3 100%)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$heart$2d$particles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeartParticles"], {}, void 0, false, {
                fileName: "[project]/components/birthday/intro-animation.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$sparkle$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparkleEffect"], {}, void 0, false, {
                fileName: "[project]/components/birthday/intro-animation.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 max-w-2xl mx-4 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 mb-6",
                        children: lines.slice(0, currentLine).map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-serif text-2xl md:text-3xl text-foreground/80 leading-relaxed animate-in fade-in duration-500",
                                children: line
                            }, index, false, {
                                fileName: "[project]/components/birthday/intro-animation.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/intro-animation.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    currentLine < lines.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-serif text-2xl md:text-3xl text-foreground leading-relaxed min-h-[2.5rem]",
                        children: [
                            displayedText,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/intro-animation.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/birthday/intro-animation.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mt-12 transition-all duration-700 ${showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleContinue,
                            className: "group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto",
                            children: [
                                "Take me in",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-5 h-5 group-hover:translate-x-1 transition-transform"
                                }, void 0, false, {
                                    fileName: "[project]/components/birthday/intro-animation.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/birthday/intro-animation.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/intro-animation.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/birthday/intro-animation.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/birthday/intro-animation.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(IntroAnimation, "0zZy91UYldRWyUGEwUPsMMGligM=");
_c = IntroAnimation;
var _c;
__turbopack_context__.k.register(_c, "IntroAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/birthday/quiz-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuizSection",
    ()=>QuizSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$sparkle$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/sparkle-effect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const questions = [
    {
        question: "First thing that made me fall for you?",
        options: [
            "Your smile",
            "Your eyes",
            "Your laugh",
            "Everything"
        ],
        correctIndex: 3,
        response: "Correct! It was literally everything about you."
    },
    {
        question: "Our favorite thing to do together?",
        options: [
            "Watch movies",
            "Long talks",
            "Adventures",
            "Just being together"
        ],
        correctIndex: 1,
        response: "Yes! Nothing beats just being with you."
    },
    {
        question: "What do I love most about you?",
        options: [
            "Your kindness",
            "Your strength",
            "Your heart",
            "All of the above"
        ],
        correctIndex: 3,
        response: "Obviously all of the above! How could I choose?"
    },
    {
        question: "What do I miss the most?",
        options: [
            "Your smile",
            "The time I spent with you",
            "Your voice",
            "Your messages"
        ],
        correctIndex: 1,
        response: "Of course… I miss every moment I spent with you the most."
    },
    {
        question: "What do I love the most when you cook for me?",
        options: [
            "Fancy dishes",
            "Spicy food",
            "Street-style snacks",
            "Simple food (Rice, Dal, and Bhaja)"
        ],
        correctIndex: 3,
        response: "Your simple home-cooked food… Rice, Dal, and Bhaja… it always hits differently."
    }
];
function QuizSection({ onComplete }) {
    _s();
    const [currentQuestion, setCurrentQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedAnswer, setSelectedAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showResponse, setShowResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExiting, setIsExiting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [floatingHearts, setFloatingHearts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSelect = (index)=>{
        // Prevent double selection
        if (selectedAnswer !== null) return;
        const q = questions[currentQuestion];
        // WRONG OPTION CLICKED
        if (index !== q.correctIndex) {
            setError("Galat jawab hai ❤️");
            const wrongBtn = document.getElementById(`option-${index}`);
            wrongBtn?.classList.add("wrong-flash");
            setTimeout(()=>{
                wrongBtn?.classList.remove("wrong-flash");
            }, 600);
            return;
        }
        // CORRECT ANSWER
        setSelectedAnswer(index);
        setShowResponse(true);
        setError(null);
        const newHearts = Array.from({
            length: 5
        }, (_, i)=>({
                id: Date.now() + i,
                x: Math.random() * 100,
                y: Math.random() * 20 + 80
            }));
        setFloatingHearts(newHearts);
        setTimeout(()=>{
            setFloatingHearts([]);
        }, 2000);
    };
    const handleNext = ()=>{
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev)=>prev + 1);
            setSelectedAnswer(null);
            setShowResponse(false);
            setError(null);
        } else {
            setIsExiting(true);
            setTimeout(onComplete, 700);
        }
    };
    const question = questions[currentQuestion];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen relative flex items-center justify-center overflow-hidden transition-opacity duration-700 ${isExiting ? "opacity-0" : "opacity-100"}`,
        style: {
            background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$sparkle$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparkleEffect"], {}, void 0, false, {
                fileName: "[project]/components/birthday/quiz-section.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            floatingHearts.map((heart)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute pointer-events-none z-30",
                    style: {
                        left: `${heart.x}%`,
                        bottom: `${heart.y}%`,
                        animation: "heart-float 2s ease-out forwards"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                        className: "w-6 h-6 text-primary fill-primary"
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/quiz-section.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this)
                }, heart.id, false, {
                    fileName: "[project]/components/birthday/quiz-section.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 max-w-xl mx-4 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            "Question ",
                                            currentQuestion + 1,
                                            " of ",
                                            questions.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/birthday/quiz-section.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1",
                                        children: questions.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-3 h-3 rounded-full transition-colors ${i <= currentQuestion ? "bg-primary" : "bg-muted"}`
                                            }, i, false, {
                                                fileName: "[project]/components/birthday/quiz-section.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/birthday/quiz-section.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/birthday/quiz-section.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1 bg-muted rounded-full overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-primary transition-all duration-500",
                                    style: {
                                        width: `${(currentQuestion + 1) / questions.length * 100}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/birthday/quiz-section.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/quiz-section.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/birthday/quiz-section.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card rounded-3xl p-8 shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-2xl md:text-3xl text-foreground text-center mb-8",
                                children: question.question
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/quiz-section.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4",
                                children: question.options.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        id: `option-${index}`,
                                        onClick: ()=>handleSelect(index),
                                        disabled: selectedAnswer !== null,
                                        className: `p-4 rounded-2xl text-left font-medium text-lg transition-all duration-300 border-2 ${selectedAnswer === null ? "bg-card hover:bg-secondary hover:border-primary hover:scale-[1.02] border-border" : selectedAnswer === index ? index === question.correctIndex ? "bg-primary/20 border-primary" : "bg-accent/30 border-accent" : "bg-muted/50 border-transparent opacity-50"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                selectedAnswer === index && index === question.correctIndex && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "w-5 h-5 text-primary shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/birthday/quiz-section.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-card-foreground",
                                                    children: option
                                                }, void 0, false, {
                                                    fileName: "[project]/components/birthday/quiz-section.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/birthday/quiz-section.tsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/components/birthday/quiz-section.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/quiz-section.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-red-500 font-semibold mt-4 animate-pulse",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/quiz-section.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `mt-6 transition-all duration-500 ${showResponse ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-primary font-medium text-lg",
                                    children: question.response
                                }, void 0, false, {
                                    fileName: "[project]/components/birthday/quiz-section.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/quiz-section.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/birthday/quiz-section.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mt-8 flex justify-center transition-all duration-500 ${showResponse ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleNext,
                            className: "group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3",
                            children: [
                                currentQuestion < questions.length - 1 ? "Next Question" : "Continue",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-5 h-5 group-hover:translate-x-1 transition-transform"
                                }, void 0, false, {
                                    fileName: "[project]/components/birthday/quiz-section.tsx",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/birthday/quiz-section.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/quiz-section.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/birthday/quiz-section.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/birthday/quiz-section.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s(QuizSection, "A1jIX54Rkg5FFCxujZIPeBz/8jI=");
_c = QuizSection;
var _c;
__turbopack_context__.k.register(_c, "QuizSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/birthday/memory-gallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MemoryGallery",
    ()=>MemoryGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$sparkle$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/sparkle-effect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const memories = [
    {
        id: 1,
        src: "/fromwe.jpg",
        caption: "The Beginning",
        subtitle: "Where our story started..."
    },
    {
        id: 2,
        src: "/bubu smile.jpg",
        caption: "Her smile? Dangerous weapon.",
        subtitle: "Still gets me every time"
    },
    {
        id: 3,
        src: "/First meet.jpg",
        caption: "The day my heart did a backflip.",
        subtitle: "I knew right then..."
    },
    {
        id: 4,
        src: "/Our smile.jpg",
        caption: "The day we laughed like idiots",
        subtitle: "For 30 minutes straight"
    },
    {
        id: 5,
        src: "/4.jpg",
        caption: "My safe place",
        subtitle: "Home is wherever you are"
    },
    {
        id: 6,
        src: "/5.jpg",
        caption: "Counting stars with you",
        subtitle: "Best nights of my life"
    },
    {
        id: 7,
        src: "/3.jpg",
        caption: "Every dance with you",
        subtitle: "Feels like floating"
    },
    {
        id: 8,
        src: "/6.jpg",
        caption: "Forever My Favorite Person",
        subtitle: "Yesterday, today, always"
    },
    {
        id: 9,
        src: "/1.jpg",
        caption: "The Life I cant Imagine",
        subtitle: "Yesterday, today, always"
    }
];
function MemoryGallery({ onContinue }) {
    _s();
    const [isBookOpen, setIsBookOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isFlipping, setIsFlipping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [flipDirection, setFlipDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isExiting, setIsExiting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showHearts, setShowHearts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [captionVisible, setCaptionVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLastPage, setIsLastPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const totalPages = memories.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemoryGallery.useEffect": ()=>{
            if (isBookOpen && !isFlipping) {
                setCaptionVisible(false);
                const timer = setTimeout({
                    "MemoryGallery.useEffect.timer": ()=>setCaptionVisible(true)
                }["MemoryGallery.useEffect.timer"], 300);
                return ({
                    "MemoryGallery.useEffect": ()=>clearTimeout(timer)
                })["MemoryGallery.useEffect"];
            }
        }
    }["MemoryGallery.useEffect"], [
        currentPage,
        isBookOpen,
        isFlipping
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemoryGallery.useEffect": ()=>{
            setIsLastPage(currentPage === totalPages - 1);
        }
    }["MemoryGallery.useEffect"], [
        currentPage,
        totalPages
    ]);
    const openBook = ()=>{
        setIsBookOpen(true);
        setTimeout(()=>setShowHearts(true), 700);
    };
    const flipPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemoryGallery.useCallback[flipPage]": (direction)=>{
            if (isFlipping) return;
            if (direction === "next" && currentPage >= totalPages - 1) return;
            if (direction === "prev" && currentPage <= 0) return;
            setIsFlipping(true);
            setFlipDirection(direction);
            setShowHearts(true);
            setTimeout({
                "MemoryGallery.useCallback[flipPage]": ()=>{
                    setCurrentPage({
                        "MemoryGallery.useCallback[flipPage]": (prev)=>direction === "next" ? prev + 1 : prev - 1
                    }["MemoryGallery.useCallback[flipPage]"]);
                    setIsFlipping(false);
                    setFlipDirection(null);
                    setTimeout({
                        "MemoryGallery.useCallback[flipPage]": ()=>setShowHearts(false)
                    }["MemoryGallery.useCallback[flipPage]"], 900);
                }
            }["MemoryGallery.useCallback[flipPage]"], 620);
        }
    }["MemoryGallery.useCallback[flipPage]"], [
        isFlipping,
        currentPage,
        totalPages
    ]);
    const handleContinue = ()=>{
        setIsExiting(true);
        setTimeout(onContinue, 700);
    };
    const [touchStart, setTouchStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleTouchStart = (e)=>setTouchStart(e.touches[0].clientX);
    const handleTouchEnd = (e)=>{
        if (touchStart === null) return;
        const touchEnd = e.changedTouches[0].clientX;
        const diff = touchStart - touchEnd;
        if (Math.abs(diff) > 50) {
            diff > 0 ? flipPage("next") : flipPage("prev");
        }
        setTouchStart(null);
    };
    const currentMemory = memories[currentPage];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "linear-gradient(180deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)"
        },
        className: "jsx-4160c0d8c00445b1" + " " + `min-h-screen relative flex flex-col items-center justify-center overflow-hidden transition-opacity duration-700 ${isExiting ? "opacity-0" : "opacity-100"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$sparkle$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparkleEffect"], {}, void 0, false, {
                fileName: "[project]/components/birthday/memory-gallery.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            showHearts && isBookOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-4160c0d8c00445b1" + " " + "fixed inset-0 pointer-events-none z-30",
                children: [
                    ...Array(12)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            left: `${20 + Math.random() * 60}%`,
                            bottom: "30%",
                            animationDelay: `${i * 0.1}s`,
                            fontSize: `${12 + Math.random() * 16}px`
                        },
                        className: "jsx-4160c0d8c00445b1" + " " + "absolute text-pink-400 animate-float-heart",
                        children: "❤"
                    }, i, false, {
                        fileName: "[project]/components/birthday/memory-gallery.tsx",
                        lineNumber: 115,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/birthday/memory-gallery.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-4160c0d8c00445b1" + " " + "relative z-20 w-full max-w-[900px] px-4 py-8",
                children: [
                    !isBookOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4160c0d8c00445b1" + " " + "flex flex-col items-center justify-center animate-fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: openBook,
                                style: {
                                    perspective: "1000px"
                                },
                                className: "jsx-4160c0d8c00445b1" + " " + "relative cursor-pointer transform hover:scale-105 transition-all duration-500 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4160c0d8c00445b1" + " " + "absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-black/20 rounded-full blur-xl"
                                    }, void 0, false, {
                                        fileName: "[project]/components/birthday/memory-gallery.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "linear-gradient(135deg, #fecdd3 0%, #fda4af 50%, #fb7185 100%)",
                                            boxShadow: "8px 8px 20px rgba(0,0,0,0.3), inset -3px 0 10px rgba(0,0,0,0.1)",
                                            transformStyle: "preserve-3d"
                                        },
                                        className: "jsx-4160c0d8c00445b1" + " " + "relative w-[88vw] max-w-[350px] h-[70vh] max-h-[550px] rounded-r-lg rounded-l-sm overflow-hidden group-hover:rotate-y-[-5deg] transition-transform duration-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "linear-gradient(90deg, #f43f5e 0%, #fb7185 100%)",
                                                    boxShadow: "inset -2px 0 5px rgba(0,0,0,0.2)"
                                                },
                                                className: "jsx-4160c0d8c00445b1" + " " + "absolute left-0 top-0 bottom-0 w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-4160c0d8c00445b1" + " " + "absolute inset-4 left-8 border-2 border-white/30 rounded-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-4160c0d8c00445b1" + " " + "absolute top-8 left-1/2 -translate-x-1/2 text-white/80 text-5xl animate-pulse-soft",
                                                children: "❤"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-4160c0d8c00445b1" + " " + "absolute inset-0 flex flex-col items-center justify-center px-8 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        style: {
                                                            fontFamily: "'Playfair Display', serif"
                                                        },
                                                        className: "jsx-4160c0d8c00445b1" + " " + "text-white text-2xl md:text-3xl mb-2 drop-shadow-lg",
                                                        children: "Our Memory Book"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-4160c0d8c00445b1" + " " + "text-white/80 text-sm",
                                                        children: "A collection of us"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/birthday/memory-gallery.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/birthday/memory-gallery.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-4160c0d8c00445b1" + " " + "mt-8 text-foreground/70 text-lg animate-pulse-soft",
                                children: "Tap to open your Memory Book"
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/memory-gallery.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/birthday/memory-gallery.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this),
                    isBookOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onTouchStart: handleTouchStart,
                        onTouchEnd: handleTouchEnd,
                        className: "jsx-4160c0d8c00445b1" + " " + "animate-book-open",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    perspective: "2000px",
                                    maxWidth: "820px"
                                },
                                className: "jsx-4160c0d8c00445b1" + " " + "relative mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4160c0d8c00445b1" + " " + "absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-10 bg-black/25 rounded-full blur-2xl"
                                    }, void 0, false, {
                                        fileName: "[project]/components/birthday/memory-gallery.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            transformStyle: "preserve-3d"
                                        },
                                        className: "jsx-4160c0d8c00445b1" + " " + "relative flex",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "linear-gradient(90deg, #fef3e2 0%, #fefce8 100%)",
                                                    boxShadow: "inset 5px 0 15px rgba(0,0,0,0.1)"
                                                },
                                                className: "jsx-4160c0d8c00445b1" + " " + "w-1/2 aspect-[3/4] rounded-l-lg overflow-hidden relative page",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4160c0d8c00445b1" + " " + "relative h-full p-4 md:p-6 flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4160c0d8c00445b1" + " " + "text-center text-pink-400/60 text-xs mb-2",
                                                            children: [
                                                                "Page ",
                                                                currentPage + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4160c0d8c00445b1" + " " + "flex-1 border border-pink-200/50 rounded-lg p-3 flex flex-col items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    boxShadow: "3px 3px 10px rgba(0,0,0,0.15)"
                                                                },
                                                                className: "jsx-4160c0d8c00445b1" + " " + "bg-white p-2 pb-8 shadow-lg transform -rotate-2 max-w-[90%] w-full aspect-square",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-4160c0d8c00445b1" + " " + "relative w-full h-full overflow-hidden rounded",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: currentMemory.src,
                                                                        alt: currentMemory.caption,
                                                                        fill: true,
                                                                        className: "object-contain",
                                                                        sizes: "80vw",
                                                                        priority: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                                        lineNumber: 216,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                                    lineNumber: 215,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "linear-gradient(90deg, #d4a574 0%, #c9956c 50%, #d4a574 100%)"
                                                },
                                                className: "jsx-4160c0d8c00445b1" + " " + "w-4 relative z-10"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "linear-gradient(270deg, #fef3e2 0%, #fefce8 100%)",
                                                    transformOrigin: "left center"
                                                },
                                                className: "jsx-4160c0d8c00445b1" + " " + `w-1/2 aspect-[3/4] rounded-r-lg overflow-hidden relative page ${isFlipping && flipDirection === "next" ? "animate-page-flip-next" : ""} ${isFlipping && flipDirection === "prev" ? "animate-page-flip-prev" : ""}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-4160c0d8c00445b1" + " " + "relative h-full p-4 md:p-6 flex flex-col items-center justify-center text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4160c0d8c00445b1" + " " + `transition-all duration-700 ${captionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    style: {
                                                                        fontFamily: "'Caveat', cursive"
                                                                    },
                                                                    className: "jsx-4160c0d8c00445b1" + " " + "text-xl md:text-2xl text-pink-700 mb-3",
                                                                    children: [
                                                                        '"',
                                                                        currentMemory.caption,
                                                                        '"'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                                    lineNumber: 254,
                                                                    columnNumber: 23
                                                                }, this),
                                                                currentMemory.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        fontFamily: "'Caveat', cursive"
                                                                    },
                                                                    className: "jsx-4160c0d8c00445b1" + " " + "text-pink-500/80 text-base md:text-lg italic",
                                                                    children: currentMemory.subtitle
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                                    lineNumber: 262,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4160c0d8c00445b1" + " " + "mt-6 text-pink-300 text-3xl",
                                                            children: "∿∿∿"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                background: "linear-gradient(135deg, #fef08a 0%, #fde047 100%)"
                                                            },
                                                            className: "jsx-4160c0d8c00445b1" + " " + "absolute bottom-8 right-4 w-16 h-16 flex items-center justify-center transform rotate-6",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-4160c0d8c00445b1" + " " + "text-2xl",
                                                                children: "💕"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                                lineNumber: 278,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-4160c0d8c00445b1" + " " + "text-center text-pink-400/60 text-xs absolute bottom-2",
                                                            children: [
                                                                currentPage + 1,
                                                                " of ",
                                                                totalPages
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                            lineNumber: 281,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/birthday/memory-gallery.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>flipPage("prev"),
                                        disabled: currentPage === 0 || isFlipping,
                                        className: "jsx-4160c0d8c00445b1" + " " + "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-md hover:scale-110 disabled:opacity-30",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            className: "w-5 h-5 text-pink-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/birthday/memory-gallery.tsx",
                                            lineNumber: 295,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/birthday/memory-gallery.tsx",
                                        lineNumber: 290,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>flipPage("next"),
                                        disabled: currentPage === totalPages - 1 || isFlipping,
                                        className: "jsx-4160c0d8c00445b1" + " " + "absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-md hover:scale-110 disabled:opacity-30",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "w-5 h-5 text-pink-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/birthday/memory-gallery.tsx",
                                            lineNumber: 303,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/birthday/memory-gallery.tsx",
                                        lineNumber: 298,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/birthday/memory-gallery.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4160c0d8c00445b1" + " " + "flex justify-center gap-2 mt-6",
                                children: memories.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4160c0d8c00445b1" + " " + `w-2 h-2 rounded-full transition-all duration-300 ${index === currentPage ? "bg-pink-500 w-4" : index < currentPage ? "bg-pink-300" : "bg-pink-200"}`
                                    }, index, false, {
                                        fileName: "[project]/components/birthday/memory-gallery.tsx",
                                        lineNumber: 310,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/memory-gallery.tsx",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this),
                            isLastPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4160c0d8c00445b1" + " " + "mt-8 text-center animate-fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "'Caveat', cursive"
                                        },
                                        className: "jsx-4160c0d8c00445b1" + " " + "text-pink-700 text-lg md:text-xl mb-6 px-4",
                                        children: [
                                            '"Thank you for creating these beautiful memories with me.',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                className: "jsx-4160c0d8c00445b1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                lineNumber: 326,
                                                columnNumber: 19
                                            }, this),
                                            'More pages will be added… with every moment we share."'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/birthday/memory-gallery.tsx",
                                        lineNumber: 321,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleContinue,
                                        className: "jsx-4160c0d8c00445b1" + " " + "group px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-all flex items-center gap-3 mx-auto",
                                        children: [
                                            "Let's Play Some Games",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-5 h-5 group-hover:translate-x-1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/memory-gallery.tsx",
                                                lineNumber: 335,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/birthday/memory-gallery.tsx",
                                        lineNumber: 330,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/birthday/memory-gallery.tsx",
                                lineNumber: 320,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/birthday/memory-gallery.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/birthday/memory-gallery.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "4160c0d8c00445b1",
                children: '@import "https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Playfair+Display:wght@500;700&display=swap";@keyframes float-heart{0%{opacity:1;transform:translateY(0)scale(1)}to{opacity:0;transform:translateY(-150px)scale(.6)}}.animate-float-heart{animation:2s ease-out forwards float-heart}@keyframes book-open{0%{opacity:0;transform:scale(.85)rotateY(-30deg)}to{opacity:1;transform:scale(1)rotateY(0)}}.animate-book-open{animation:.8s ease-out forwards book-open}@keyframes page-flip-next{0%{transform:rotateY(0)}50%{transform:rotateY(-92deg)}to{transform:rotateY(0)}}@keyframes page-flip-prev{0%{transform:rotateY(0)}50%{transform:rotateY(92deg)}to{transform:rotateY(0)}}.animate-page-flip-next{transform-origin:0;animation:.62s forwards page-flip-next}.animate-page-flip-prev{transform-origin:0;animation:.62s forwards page-flip-prev}.animate-fade-in{animation:.6s ease-out both fadeIn}@keyframes fadeIn{0%{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}.animate-pulse-soft{animation:2s ease-in-out infinite pulseSoft}@keyframes pulseSoft{0%{opacity:.85}50%{opacity:1}to{opacity:.85}}@media (width<=640px){.page{transform-origin:50%}}'
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/birthday/memory-gallery.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(MemoryGallery, "VE0urHaKCtGwXJuFnWWp2//h6gk=");
_c = MemoryGallery;
var _c;
__turbopack_context__.k.register(_c, "MemoryGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/birthday/games/puzzle-game.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PuzzleGame",
    ()=>PuzzleGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// --- Configuration ---
const PUZZLE_SIZE = 3;
const IMAGE_URL = "/5.jpg" // The full, uncropped image
;
const GRID_SIZE_TW = "w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px]";
// --- Helper Functions ---
const createAndShuffleTiles = ()=>{
    const tiles = Array.from({
        length: PUZZLE_SIZE * PUZZLE_SIZE
    }, (_, i)=>({
            id: i,
            correctPos: i,
            currentPos: i,
            imgRow: Math.floor(i / PUZZLE_SIZE),
            imgCol: i % PUZZLE_SIZE
        }));
    // Fisher-Yates shuffle on currentPos
    for(let i = tiles.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [tiles[i].currentPos, tiles[j].currentPos] = [
            tiles[j].currentPos,
            tiles[i].currentPos
        ];
    }
    // To ensure it's solvable, we can add more robust checks, but for a 3x3 simple shuffle is usually fine.
    // A simple way to guarantee a solvable puzzle is to perform a number of random swaps from the solved state.
    return tiles;
};
function PuzzleGame({ onComplete, onBack }) {
    _s();
    const [tiles, setTiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isComplete, setIsComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showHint, setShowHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Memoize sorted tiles to prevent re-sorting on every render
    const sortedTiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PuzzleGame.useMemo[sortedTiles]": ()=>{
            return [
                ...tiles
            ].sort({
                "PuzzleGame.useMemo[sortedTiles]": (a, b)=>a.currentPos - b.currentPos
            }["PuzzleGame.useMemo[sortedTiles]"]);
        }
    }["PuzzleGame.useMemo[sortedTiles]"], [
        tiles
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PuzzleGame.useEffect": ()=>{
            setTiles(createAndShuffleTiles());
        }
    }["PuzzleGame.useEffect"], []);
    // Check for completion whenever tiles change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PuzzleGame.useEffect": ()=>{
            if (tiles.length > 0 && tiles.every({
                "PuzzleGame.useEffect": (t)=>t.currentPos === t.correctPos
            }["PuzzleGame.useEffect"])) {
                // A short delay to let the user see the final tile in place
                setTimeout({
                    "PuzzleGame.useEffect": ()=>setIsComplete(true)
                }["PuzzleGame.useEffect"], 300);
            }
        }
    }["PuzzleGame.useEffect"], [
        tiles
    ]);
    const handleTileClick = (tileId)=>{
        if (isComplete) return;
        if (selectedId === null) {
            setSelectedId(tileId);
        } else {
            // Immutable state update for swapping tiles
            setTiles((currentTiles)=>{
                const selectedTile = currentTiles.find((t)=>t.id === selectedId);
                const clickedTile = currentTiles.find((t)=>t.id === tileId);
                return currentTiles.map((t)=>{
                    if (t.id === selectedId) return {
                        ...t,
                        currentPos: clickedTile.currentPos
                    };
                    if (t.id === tileId) return {
                        ...t,
                        currentPos: selectedTile.currentPos
                    };
                    return t;
                });
            });
            setSelectedId(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100 p-4 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onBack,
                className: "absolute top-6 left-6 flex items-center gap-2 text-rose-500 hover:text-rose-700 transition-colors z-30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/games/puzzle-game.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold",
                        children: "Back"
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/games/puzzle-game.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/birthday/games/puzzle-game.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center justify-center transition-opacity duration-1000", isComplete ? "opacity-0" : "opacity-100"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-4xl font-bold text-rose-500",
                                children: "Puzzle of Us"
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/games/puzzle-game.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-rose-400 mt-1",
                                children: "Piece together a special moment."
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/games/puzzle-game.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/birthday/games/puzzle-game.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative rounded-2xl shadow-2xl", GRID_SIZE_TW),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-1.5 p-1.5 bg-white/50 rounded-2xl",
                                children: sortedTiles.map((tile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PuzzleTile, {
                                        tile: tile,
                                        isSelected: selectedId === tile.id,
                                        onClick: ()=>handleTileClick(tile.id)
                                    }, tile.id, false, {
                                        fileName: "[project]/components/birthday/games/puzzle-game.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/games/puzzle-game.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 rounded-2xl overflow-hidden transition-opacity duration-300 pointer-events-none", showHint ? "opacity-100" : "opacity-0"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: IMAGE_URL,
                                    alt: "Hint",
                                    layout: "fill",
                                    objectFit: "cover"
                                }, void 0, false, {
                                    fileName: "[project]/components/birthday/games/puzzle-game.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/games/puzzle-game.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/birthday/games/puzzle-game.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onMouseDown: ()=>setShowHint(true),
                        onMouseUp: ()=>setShowHint(false),
                        onTouchStart: ()=>setShowHint(true),
                        onTouchEnd: ()=>setShowHint(false),
                        className: "mt-6 flex items-center gap-2 px-5 py-2.5 bg-white/70 text-rose-500 rounded-full shadow-lg hover:bg-white transition-all focus:outline-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/games/puzzle-game.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Hold for Hint"
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/games/puzzle-game.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/birthday/games/puzzle-game.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/birthday/games/puzzle-game.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 p-4", isComplete ? "opacity-100 z-20" : "opacity-0 pointer-events-none"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-5xl font-bold text-rose-600 mb-4",
                                children: "You did it!"
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/games/puzzle-game.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-rose-400 text-lg mb-6",
                                children: "Our beautiful memory, revealed."
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/games/puzzle-game.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/birthday/games/puzzle-game.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative rounded-2xl shadow-2xl overflow-hidden", GRID_SIZE_TW),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: IMAGE_URL,
                            alt: "Completed Puzzle",
                            layout: "fill",
                            objectFit: "cover"
                        }, void 0, false, {
                            fileName: "[project]/components/birthday/games/puzzle-game.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/games/puzzle-game.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onComplete,
                        className: "mt-8 px-8 py-4 bg-pink-500 text-white font-bold text-lg rounded-full shadow-lg hover:bg-pink-600 hover:scale-105 transform transition-all duration-300 animate-pulse",
                        children: "Continue to next surprise ❤"
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/games/puzzle-game.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/birthday/games/puzzle-game.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/birthday/games/puzzle-game.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(PuzzleGame, "+JLCtxZkg2R/6Id5n60UUJrgCKU=");
_c = PuzzleGame;
function PuzzleTile({ tile, isSelected, onClick }) {
    const { imgRow, imgCol } = tile;
    const backgroundStyle = {
        backgroundImage: `url(${IMAGE_URL})`,
        backgroundSize: `${PUZZLE_SIZE * 100}% ${PUZZLE_SIZE * 100}%`,
        backgroundPosition: `${imgCol * (100 / (PUZZLE_SIZE - 1))}% ${imgRow * (100 / (PUZZLE_SIZE - 1))}%`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-square rounded-lg cursor-pointer transition-all duration-300", "shadow-md hover:shadow-xl hover:scale-[1.03]", "focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-opacity-70", isSelected && "ring-4 ring-pink-500 scale-[0.97] shadow-inner"),
        style: backgroundStyle
    }, void 0, false, {
        fileName: "[project]/components/birthday/games/puzzle-game.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
_c1 = PuzzleTile;
var _c, _c1;
__turbopack_context__.k.register(_c, "PuzzleGame");
__turbopack_context__.k.register(_c1, "PuzzleTile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/birthday/games/love-meter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoveMeter",
    ()=>LoveMeter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LoveMeter({ onComplete, onBack }) {
    _s();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isComplete, setIsComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hearts, setHearts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [emoji, setEmoji] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("😊");
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Romantic emojis based on % love
    const getEmoji = (v)=>{
        if (v < 20) return "🥺";
        if (v < 40) return "😊";
        if (v < 60) return "😳";
        if (v < 80) return "🥰";
        if (v < 100) return "❤️‍🔥";
        return "💖";
    };
    const getMessage = ()=>{
        if (value < 25) return "Keep going, baby...";
        if (value < 50) return "Now it’s getting warm…";
        if (value < 75) return "You’re making my heart race…";
        if (value < 100) return "Almost overflowing…";
        return "My heart is yours completely.";
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoveMeter.useEffect": ()=>{
            setEmoji(getEmoji(value));
            // Heart burst effect every 10%
            if (value % 10 === 0 && value !== 0) {
                const burst = Array.from({
                    length: 12
                }, {
                    "LoveMeter.useEffect.burst": (_, i)=>({
                            id: Date.now() + i,
                            x: Math.random() * 100,
                            delay: Math.random() * 0.5
                        })
                }["LoveMeter.useEffect.burst"]);
                setHearts(burst);
                setTimeout({
                    "LoveMeter.useEffect": ()=>setHearts([])
                }["LoveMeter.useEffect"], 2000);
            }
            if (value >= 100 && !isComplete) {
                setIsComplete(true);
                const finalBurst = Array.from({
                    length: 30
                }, {
                    "LoveMeter.useEffect.finalBurst": (_, i)=>({
                            id: Date.now() + i,
                            x: Math.random() * 100,
                            delay: Math.random() * 0.5
                        })
                }["LoveMeter.useEffect.finalBurst"]);
                setHearts(finalBurst);
            }
        }
    }["LoveMeter.useEffect"], [
        value,
        isComplete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "jsx-c6411802498b8751" + " " + "text-center relative min-h-screen flex flex-col items-center pt-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onBack,
                className: "jsx-c6411802498b8751" + " " + "absolute top-4 left-4 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/games/love-meter.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    "Back"
                ]
            }, void 0, true, {
                fileName: "[project]/components/birthday/games/love-meter.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            hearts.map((heart)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        left: `${heart.x}%`,
                        animation: `heartFloat 2.2s ease-out ${heart.delay}s forwards`
                    },
                    className: "jsx-c6411802498b8751" + " " + "absolute bottom-40 pointer-events-none z-30",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                        className: "w-7 h-7 text-pink-500 fill-pink-500"
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/games/love-meter.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                }, heart.id, false, {
                    fileName: "[project]/components/birthday/games/love-meter.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "jsx-c6411802498b8751" + " " + "font-serif text-4xl text-primary mb-2",
                children: "Love Meter"
            }, void 0, false, {
                fileName: "[project]/components/birthday/games/love-meter.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "jsx-c6411802498b8751" + " " + "text-muted-foreground mb-8 text-lg",
                children: "Slide to measure my love for you ❤️"
            }, void 0, false, {
                fileName: "[project]/components/birthday/games/love-meter.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-c6411802498b8751" + " " + "glass-card rounded-3xl p-8 max-w-md w-full mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c6411802498b8751" + " " + "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c6411802498b8751" + " " + "text-6xl font-bold text-primary mb-2 animate-softPulse",
                                children: [
                                    value,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/birthday/games/love-meter.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c6411802498b8751" + " " + "text-4xl mb-2 animate-emojiPop",
                                children: emoji
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/games/love-meter.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-c6411802498b8751" + " " + "text-lg text-foreground font-medium italic transition-all duration-300",
                                children: getMessage()
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/games/love-meter.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/birthday/games/love-meter.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c6411802498b8751" + " " + "relative w-40 h-40 mx-auto mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: "absolute inset-0 w-full h-full text-primary",
                                style: {
                                    fill: `rgba(236, 72, 153, ${value / 100})`,
                                    filter: value === 100 ? "drop-shadow(0 0 20px rgba(236,72,153,0.9))" : "none",
                                    transform: `scale(${1 + value * 0.003})`,
                                    transition: "0.3s ease"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/games/love-meter.tsx",
                                lineNumber: 114,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c6411802498b8751" + " " + "absolute inset-0 flex items-end justify-center pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: `${value}%`,
                                        WebkitMask: "url('/heart-mask.svg') center/contain no-repeat",
                                        mask: "url('/heart-mask.svg') center/contain no-repeat"
                                    },
                                    className: "jsx-c6411802498b8751" + " " + "w-[70%] bg-pink-400/50 transition-all duration-700"
                                }, void 0, false, {
                                    fileName: "[project]/components/birthday/games/love-meter.tsx",
                                    lineNumber: 126,
                                    columnNumber: 5
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/games/love-meter.tsx",
                                lineNumber: 125,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/birthday/games/love-meter.tsx",
                        lineNumber: 111,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c6411802498b8751" + " " + "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "0",
                                max: "100",
                                value: value,
                                onChange: (e)=>setValue(Number(e.target.value)),
                                style: {
                                    background: `linear-gradient(to right, #ec4899 0%, #ec4899 ${value}%, var(--muted) ${value}%)`
                                },
                                className: "jsx-c6411802498b8751" + " " + "w-full h-3 bg-muted rounded-full appearance-none cursor-pointer accent-primary"
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/games/love-meter.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c6411802498b8751" + " " + "flex justify-between text-sm text-muted-foreground px-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-c6411802498b8751",
                                        children: "0%"
                                    }, void 0, false, {
                                        fileName: "[project]/components/birthday/games/love-meter.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-c6411802498b8751",
                                        children: "Infinite 💘"
                                    }, void 0, false, {
                                        fileName: "[project]/components/birthday/games/love-meter.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/birthday/games/love-meter.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/birthday/games/love-meter.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/birthday/games/love-meter.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            isComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-c6411802498b8751" + " " + "mt-10 animate-fadePop",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-c6411802498b8751" + " " + "text-primary font-semibold text-xl mb-4",
                        children: "My love for you is beyond all numbers ❤️"
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/games/love-meter.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onComplete,
                        className: "jsx-c6411802498b8751" + " " + "px-10 py-4 bg-primary text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300",
                        children: "Continue"
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/games/love-meter.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/birthday/games/love-meter.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "c6411802498b8751",
                children: "@keyframes heartFloat{0%{opacity:1;transform:translateY(0)scale(1)}to{opacity:0;transform:translateY(-140px)scale(.6)}}.animate-softPulse{animation:1.3s ease-in-out infinite softPulse}@keyframes softPulse{0%{transform:scale(1)}50%{transform:scale(1.05)}to{transform:scale(1)}}.animate-emojiPop{animation:.6s ease-out emojiPop}@keyframes emojiPop{0%{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.animate-fadePop{animation:.7s ease-out forwards fadePop}@keyframes fadePop{0%{opacity:0;transform:scale(.9)translateY(10px)}to{opacity:1;transform:scale(1)translateY(0)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/birthday/games/love-meter.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(LoveMeter, "AU4/eplESefVMrdQplAuDhRjGi0=");
_c = LoveMeter;
var _c;
__turbopack_context__.k.register(_c, "LoveMeter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/birthday/games/memory-guess.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MemoryGuess",
    ()=>MemoryGuess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function MemoryGuess({ onComplete, onBack }) {
    _s();
    const [memories, setMemories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            src: "/2.jpg",
            caption: "Our first rain together 💕",
            revealed: false
        },
        {
            id: 2,
            src: "/Our smile.jpg",
            caption: "The day we couldn’t stop laughing 😄",
            revealed: false
        },
        {
            id: 3,
            src: "/5.jpg",
            caption: "The moment everything felt perfect ✨",
            revealed: false
        },
        {
            id: 4,
            src: "/Where We start.jpg",
            caption: "Where We Start Our Journey💕",
            revealed: false
        },
        {
            id: 5,
            src: "/4.jpg",
            caption: "Moment We feel the most 😄",
            revealed: false
        },
        {
            id: 6,
            src: "/bubu smile.jpg",
            caption: "You smile my home✨",
            revealed: false
        }
    ]);
    const [selectedMemory, setSelectedMemory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [confetti, setConfetti] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleReveal = (id)=>{
        const memory = memories.find((m)=>m.id === id);
        if (!memory || memory.revealed) return;
        setMemories((prev)=>prev.map((m)=>m.id === id ? {
                    ...m,
                    revealed: true
                } : m));
        setSelectedMemory(memory);
        // heart burst confetti
        const burst = Array.from({
            length: 18
        }, (_, i)=>({
                id: Date.now() + i,
                x: Math.random() * 100,
                y: 20 + Math.random() * 30,
                size: 12 + Math.random() * 18,
                delay: Math.random() * 0.4
            }));
        setConfetti(burst);
        setTimeout(()=>setConfetti([]), 2000);
    };
    const allRevealed = memories.every((m)=>m.revealed);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "linear-gradient(180deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)"
        },
        className: "jsx-e3c7fd14237ebe80" + " " + "relative text-center min-h-screen pb-20 pt-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onBack,
                className: "jsx-e3c7fd14237ebe80" + " " + "absolute top-4 left-4 flex items-center gap-2 text-muted-foreground hover:text-pink-600 transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/games/memory-guess.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    "Back"
                ]
            }, void 0, true, {
                fileName: "[project]/components/birthday/games/memory-guess.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e3c7fd14237ebe80" + " " + "pointer-events-none absolute inset-0 overflow-hidden",
                children: [
                    ...Array(16)
                ].map((_, i)=>{
                    const duration = 4 + Math.random() * 4; // seconds
                    const delay = i * 0.2;
                    // Put duration and delay inside same shorthand string to avoid mixing shorthand + longhand
                    const anim = `sparkleFloat ${duration}s linear ${delay}s infinite`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            fontSize: `${6 + Math.random() * 10}px`,
                            // NOTE: use only 'animation' shorthand (with delay included). Do not set 'animationDelay' separately.
                            animation: anim
                        },
                        className: "jsx-e3c7fd14237ebe80" + " " + "absolute text-pink-300",
                        children: "✦"
                    }, i, false, {
                        fileName: "[project]/components/birthday/games/memory-guess.tsx",
                        lineNumber: 80,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/birthday/games/memory-guess.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "jsx-e3c7fd14237ebe80" + " " + "font-serif text-4xl text-pink-700 mb-2 drop-shadow-sm",
                children: "Guess the Memory"
            }, void 0, false, {
                fileName: "[project]/components/birthday/games/memory-guess.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "jsx-e3c7fd14237ebe80" + " " + "text-pink-500 mb-8 text-lg",
                children: allRevealed ? "All memories revealed! 💖" : "Tap to reveal the hidden memories ✨"
            }, void 0, false, {
                fileName: "[project]/components/birthday/games/memory-guess.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            confetti.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        left: `${c.x}%`,
                        top: `${c.y}%`,
                        fontSize: c.size,
                        // include delay in shorthand (no mixing)
                        animation: `heartPop 1.8s ease-out ${c.delay}s forwards`
                    },
                    className: "jsx-e3c7fd14237ebe80" + " " + "absolute z-50 text-pink-500",
                    children: "❤️"
                }, c.id, false, {
                    fileName: "[project]/components/birthday/games/memory-guess.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e3c7fd14237ebe80" + " " + "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto px-6",
                children: memories.map((memory)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>handleReveal(memory.id),
                        className: "jsx-e3c7fd14237ebe80" + " " + "relative group perspective-1000 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e3c7fd14237ebe80" + " " + `relative w-full aspect-square rounded-2xl shadow-lg transition-all duration-700 transform-style-preserve-3d ${memory.revealed ? "rotate-y-180" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e3c7fd14237ebe80" + " " + "absolute inset-0 backface-hidden rounded-2xl overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e3c7fd14237ebe80" + " " + "absolute inset-0 bg-pink-400/20 animate-pulse rounded-2xl"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/games/memory-guess.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e3c7fd14237ebe80" + " " + "absolute inset-0 flex items-center justify-center text-5xl text-pink-600 opacity-80",
                                                children: "?"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/games/memory-guess.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e3c7fd14237ebe80" + " " + "absolute inset-0 rounded-2xl border border-pink-300/50 shadow-inner"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/games/memory-guess.tsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/birthday/games/memory-guess.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e3c7fd14237ebe80" + " " + "absolute inset-0 rotate-y-180 backface-hidden rounded-2xl overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: memory.src,
                                            alt: "Memory",
                                            fill: true,
                                            className: "object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/components/birthday/games/memory-guess.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/birthday/games/memory-guess.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/birthday/games/memory-guess.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            memory.revealed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-e3c7fd14237ebe80" + " " + "mt-3 text-sm text-pink-700 italic animate-fadeIn",
                                children: [
                                    "“",
                                    memory.caption,
                                    "”"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/birthday/games/memory-guess.tsx",
                                lineNumber: 149,
                                columnNumber: 15
                            }, this)
                        ]
                    }, memory.id, true, {
                        fileName: "[project]/components/birthday/games/memory-guess.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/birthday/games/memory-guess.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            selectedMemory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setSelectedMemory(null),
                className: "jsx-e3c7fd14237ebe80" + " " + "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-e3c7fd14237ebe80" + " " + "bg-white rounded-3xl max-w-sm w-full overflow-hidden shadow-xl animate-zoomIn",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-e3c7fd14237ebe80" + " " + "relative aspect-square",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: selectedMemory.src,
                                alt: "Memory",
                                fill: true,
                                className: "object-cover"
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/games/memory-guess.tsx",
                                lineNumber: 165,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/birthday/games/memory-guess.tsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-e3c7fd14237ebe80" + " " + "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-e3c7fd14237ebe80" + " " + "text-center text-lg text-pink-700 italic",
                                children: [
                                    "“",
                                    selectedMemory.caption,
                                    "”"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/birthday/games/memory-guess.tsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/birthday/games/memory-guess.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/birthday/games/memory-guess.tsx",
                    lineNumber: 163,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/birthday/games/memory-guess.tsx",
                lineNumber: 159,
                columnNumber: 9
            }, this),
            allRevealed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e3c7fd14237ebe80" + " " + "mt-10 animate-fadeIn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e3c7fd14237ebe80" + " " + "flex items-center justify-center gap-2 text-pink-600 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/games/memory-guess.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-e3c7fd14237ebe80" + " " + "font-medium text-lg",
                                children: "Every memory with you is precious 💗"
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/games/memory-guess.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/birthday/games/memory-guess.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onComplete,
                        className: "jsx-e3c7fd14237ebe80" + " " + "px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300",
                        children: "Continue"
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/games/memory-guess.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/birthday/games/memory-guess.tsx",
                lineNumber: 176,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "e3c7fd14237ebe80",
                children: "@keyframes sparkleFloat{0%{opacity:.7;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}@keyframes heartPop{0%{opacity:1;transform:translateY(0)scale(.7)}to{opacity:0;transform:translateY(-120px)scale(1.2)}}.perspective-1000{perspective:1000px}.transform-style-preserve-3d{transform-style:preserve-3d}.backface-hidden{backface-visibility:hidden}.rotate-y-180{transform:rotateY(180deg)}.animate-fadeIn{animation:.5s ease-out forwards fadeIn}@keyframes fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.animate-zoomIn{animation:.4s ease-out forwards zoomIn}@keyframes zoomIn{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/birthday/games/memory-guess.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(MemoryGuess, "1v/gIWgEyjliF0hr/7ockcPCO7M=");
_c = MemoryGuess;
var _c;
__turbopack_context__.k.register(_c, "MemoryGuess");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/birthday/mini-games.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MiniGames",
    ()=>MiniGames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$sparkle$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/sparkle-effect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$games$2f$puzzle$2d$game$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/games/puzzle-game.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$games$2f$love$2d$meter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/games/love-meter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$games$2f$memory$2d$guess$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/games/memory-guess.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$puzzle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Puzzle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/puzzle.js [app-client] (ecmascript) <export default as Puzzle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as ImageIcon>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function MiniGames({ onComplete }) {
    _s();
    const [currentGame, setCurrentGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("select");
    const [completedGames, setCompletedGames] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [isExiting, setIsExiting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleGameComplete = (game)=>{
        setCompletedGames((prev)=>new Set([
                ...prev,
                game
            ]));
        setCurrentGame("select");
    };
    const handleContinue = ()=>{
        setIsExiting(true);
        setTimeout(onComplete, 700);
    };
    const allGamesCompleted = completedGames.size >= 3;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen relative flex items-center justify-center overflow-hidden transition-opacity duration-700 ${isExiting ? "opacity-0" : "opacity-100"}`,
        style: {
            background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$sparkle$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparkleEffect"], {}, void 0, false, {
                fileName: "[project]/components/birthday/mini-games.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 w-full max-w-4xl mx-auto px-4 py-8",
                children: [
                    currentGame === "select" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-3xl md:text-4xl text-foreground mb-4",
                                children: "Mini Games"
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/mini-games.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-lg mb-8",
                                children: allGamesCompleted ? "You completed all games! Ready for your birthday card?" : "Complete all games to unlock your special surprise!"
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/mini-games.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-3 gap-6 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCurrentGame("puzzle"),
                                        disabled: completedGames.has("puzzle"),
                                        className: `glass-card rounded-3xl p-6 text-center transition-all duration-300 ${completedGames.has("puzzle") ? "opacity-50 cursor-not-allowed" : "hover:scale-105 hover:shadow-xl"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$puzzle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Puzzle$3e$__["Puzzle"], {
                                                    className: "w-8 h-8 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/birthday/mini-games.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/mini-games.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-lg text-foreground mb-2",
                                                children: "Puzzle Reveal"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/mini-games.tsx",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: completedGames.has("puzzle") ? "Completed!" : "Piece together the photo"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/mini-games.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/birthday/mini-games.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCurrentGame("love-meter"),
                                        disabled: completedGames.has("love-meter"),
                                        className: `glass-card rounded-3xl p-6 text-center transition-all duration-300 ${completedGames.has("love-meter") ? "opacity-50 cursor-not-allowed" : "hover:scale-105 hover:shadow-xl"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                    className: "w-8 h-8 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/birthday/mini-games.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/mini-games.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-lg text-foreground mb-2",
                                                children: "Love Meter"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/mini-games.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: completedGames.has("love-meter") ? "Completed!" : "How much do I love you?"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/mini-games.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/birthday/mini-games.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCurrentGame("memory-guess"),
                                        disabled: completedGames.has("memory-guess"),
                                        className: `glass-card rounded-3xl p-6 text-center transition-all duration-300 ${completedGames.has("memory-guess") ? "opacity-50 cursor-not-allowed" : "hover:scale-105 hover:shadow-xl"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                                                    className: "w-8 h-8 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/birthday/mini-games.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/mini-games.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-lg text-foreground mb-2",
                                                children: "Guess the Memory"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/mini-games.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: completedGames.has("memory-guess") ? "Completed!" : "Reveal hidden memories"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/mini-games.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/birthday/mini-games.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/birthday/mini-games.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            allGamesCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleContinue,
                                className: "group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto",
                                children: [
                                    "Open Birthday Card",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-5 h-5 group-hover:translate-x-1 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/components/birthday/mini-games.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/birthday/mini-games.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/birthday/mini-games.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    currentGame === "puzzle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$games$2f$puzzle$2d$game$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PuzzleGame"], {
                        onComplete: ()=>handleGameComplete("puzzle"),
                        onBack: ()=>setCurrentGame("select")
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/mini-games.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    currentGame === "love-meter" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$games$2f$love$2d$meter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoveMeter"], {
                        onComplete: ()=>handleGameComplete("love-meter"),
                        onBack: ()=>setCurrentGame("select")
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/mini-games.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    currentGame === "memory-guess" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$games$2f$memory$2d$guess$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MemoryGuess"], {
                        onComplete: ()=>handleGameComplete("memory-guess"),
                        onBack: ()=>setCurrentGame("select")
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/mini-games.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/birthday/mini-games.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/birthday/mini-games.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(MiniGames, "r2bMD++KcTXJwDtkN3SsXm+H6qM=");
_c = MiniGames;
var _c;
__turbopack_context__.k.register(_c, "MiniGames");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/birthday/birthday-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BirthdayCard",
    ()=>BirthdayCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$sparkle$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/sparkle-effect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function BirthdayCard({ onContinue }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMessage, setShowMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExiting, setIsExiting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleOpenCard = ()=>{
        setIsOpen(true);
        setTimeout(()=>setShowMessage(true), 800);
    };
    const handleContinue = ()=>{
        setIsExiting(true);
        setTimeout(onContinue, 700);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen relative flex items-center justify-center overflow-hidden transition-opacity duration-700 ${isExiting ? "opacity-0" : "opacity-100"}`,
        style: {
            background: "linear-gradient(180deg, #fdf2f8 0%, #fce7f3 100%)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$sparkle$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparkleEffect"], {}, void 0, false, {
                fileName: "[project]/components/birthday/birthday-card.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 max-w-lg mx-4 perspective-1000",
                children: [
                    !isOpen ? // Closed card
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: handleOpenCard,
                        className: "glass-card rounded-3xl p-12 cursor-pointer hover:scale-105 transition-transform duration-300 text-center",
                        style: {
                            boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.25)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-24 h-24 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    className: "w-12 h-12 text-primary fill-primary animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/components/birthday/birthday-card.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/birthday-card.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-2xl text-foreground mb-4",
                                children: "A Special Card For You"
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/birthday-card.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: "Tap to open"
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/birthday-card.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/birthday/birthday-card.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this) : // Opened card with 3D effect
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card rounded-3xl p-8 transform origin-right transition-all duration-1000",
                                style: {
                                    transform: isOpen ? "rotateY(-160deg)" : "rotateY(0)",
                                    backfaceVisibility: "hidden",
                                    position: "absolute",
                                    inset: 0,
                                    zIndex: showMessage ? 0 : 10
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        className: "w-16 h-16 mx-auto text-primary fill-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/birthday/birthday-card.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/birthday/birthday-card.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/birthday-card.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `glass-card rounded-3xl p-8 transition-all duration-500 ${showMessage ? "opacity-100" : "opacity-0"}`,
                                style: {
                                    boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.3)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center gap-2 mb-4",
                                            children: [
                                                ...Array(5)
                                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                    className: "w-4 h-4 text-primary fill-primary animate-float",
                                                    style: {
                                                        animationDelay: `${i * 0.2}s`
                                                    }
                                                }, i, false, {
                                                    fileName: "[project]/components/birthday/birthday-card.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/birthday/birthday-card.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-serif text-3xl text-foreground mb-4",
                                            children: "Happy 23rd Birthday, Bubu Jaan ❤️"
                                        }, void 0, false, {
                                            fileName: "[project]/components/birthday/birthday-card.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 text-foreground leading-relaxed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "To the most precious part of my life,"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/birthday/birthday-card.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Even from miles away, tumhari yaad mere din ko chalati hai. Tumhari hasi, tumhari awaaz, aur tumhara naam — sab mere liye ek sukoon jaisa hai. Aaj tumhara birthday hai… aur kaash main wahin hota, tumhare saath, tumhari aankhon ki woh khushi dekhne ke liye."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/birthday/birthday-card.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Hum dono ke beech jo bhi up & downs aaye, un sabke baad bhi tum meri zindagi ki woh jagah ho jise koi replace nahi kar sakta. Tum sirf meri love nahi ho — tum meri strength ho, mera comfort ho, aur mere har kal ka sabse khoobsurat hissa ho."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/birthday/birthday-card.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Distance hoke bhi tumhari kami har moment mehsoos hoti hai, par pyaar kabhi kam nahi hota — bas aur gehra hota jaata hai. Aur mera tumhare liye pyaar… woh waise hi hai — pure, honest aur dil se."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/birthday/birthday-card.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-primary",
                                                    children: "Aaj ke din bas ek hi wish hai — khuda tumhe woh sab de jiske tum sapne dekhti ho, aur mujhe itni taqat de ki main hamesha tumhari zindagi mein garv ban kar khada rahun."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/birthday/birthday-card.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Happy Birthday, My Moon, My Bubu Jaan ❤️. I love you — more than distance, more than doubt, more than anything."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/birthday/birthday-card.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 3
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/birthday/birthday-card.tsx",
                                            lineNumber: 93,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-serif text-xl text-primary italic",
                                                children: "Forever yours."
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/birthday-card.tsx",
                                                lineNumber: 137,
                                                columnNumber: 3
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/birthday/birthday-card.tsx",
                                            lineNumber: 136,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center gap-2 pt-4",
                                            children: [
                                                ...Array(5)
                                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                    className: "w-4 h-4 text-primary fill-primary animate-float",
                                                    style: {
                                                        animationDelay: `${i * 0.2}s`
                                                    }
                                                }, i, false, {
                                                    fileName: "[project]/components/birthday/birthday-card.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/birthday/birthday-card.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/birthday/birthday-card.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/birthday-card.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/birthday/birthday-card.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    showMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleContinue,
                            className: "group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3",
                            children: [
                                "Time For Cake!",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-5 h-5 group-hover:translate-x-1 transition-transform"
                                }, void 0, false, {
                                    fileName: "[project]/components/birthday/birthday-card.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/birthday/birthday-card.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/birthday-card.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/birthday/birthday-card.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/birthday/birthday-card.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(BirthdayCard, "UCe2apSMq7Gy0N1H5Ju8NqswRJM=");
_c = BirthdayCard;
var _c;
__turbopack_context__.k.register(_c, "BirthdayCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/birthday/cake-ceremony.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ⚡ FULL OPTIMIZED VERSION — NO DESIGN CHANGE ⚡
__turbopack_context__.s([
    "CakeCeremony",
    ()=>CakeCeremony
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$sparkle$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/sparkle-effect.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CakeCeremony({ onComplete }) {
    _s();
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("cutting");
    // Knife state
    const [knifePosition, setKnifePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 50,
        y: 20
    });
    const [knifeRotation, setKnifeRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-45);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cutProgress, setCutProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Cake state
    const [isCut, setIsCut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSliceLine, setShowSliceLine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cakeShake, setCakeShake] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Candle state
    const [candlesLit, setCandlesLit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [flameIntensity, setFlameIntensity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        1,
        1,
        1
    ]);
    const [flameTilt, setFlameTilt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        0,
        0,
        0
    ]);
    const [showSmoke, setShowSmoke] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        false,
        false,
        false
    ]);
    const [candlesBlown, setCandlesBlown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        false,
        false,
        false
    ]);
    // Effects
    const [confetti, setConfetti] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [crumbs, setCrumbs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showMessage, setShowMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isExiting, setIsExiting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Mic
    const [micPermission, setMicPermission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("pending");
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const analyserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Refs
    const cakeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const hasCutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // 🌟 Precomputed BACKGROUND CONFETTI (no lag)
    const backgroundConfetti = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CakeCeremony.useMemo[backgroundConfetti]": ()=>{
            return [
                ...Array(20)
            ].map({
                "CakeCeremony.useMemo[backgroundConfetti]": (_, i)=>({
                        id: i,
                        left: Math.random() * 100,
                        top: Math.random() * 100,
                        color: [
                            "#ec4899",
                            "#f472b6",
                            "#fda4af"
                        ][i % 3],
                        duration: 3 + Math.random() * 4,
                        delay: Math.random() * 3
                    })
            }["CakeCeremony.useMemo[backgroundConfetti]"]);
        }
    }["CakeCeremony.useMemo[backgroundConfetti]"], []);
    // 🌟 Optimize ACTIVE confetti animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CakeCeremony.useEffect": ()=>{
            if (confetti.length === 0) return;
            const interval = setInterval({
                "CakeCeremony.useEffect.interval": ()=>{
                    setConfetti({
                        "CakeCeremony.useEffect.interval": (prev)=>prev.map({
                                "CakeCeremony.useEffect.interval": (c)=>({
                                        ...c,
                                        y: c.y + c.velocityY,
                                        x: c.x + c.velocityX,
                                        rotation: c.rotation + 4
                                    })
                            }["CakeCeremony.useEffect.interval"]).filter({
                                "CakeCeremony.useEffect.interval": (c)=>c.y < 150
                            }["CakeCeremony.useEffect.interval"])
                    }["CakeCeremony.useEffect.interval"]);
                }
            }["CakeCeremony.useEffect.interval"], 16);
            return ({
                "CakeCeremony.useEffect": ()=>clearInterval(interval)
            })["CakeCeremony.useEffect"];
        }
    }["CakeCeremony.useEffect"], [
        confetti.length
    ]);
    // ----------------- Cutting Events -------------------
    const handlePointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CakeCeremony.useCallback[handlePointerDown]": (e)=>{
            if (stage !== "cutting" || isCut) return;
            setIsDragging(true);
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;
            startXRef.current = e.clientX;
            const x = (e.clientX - rect.left) / rect.width * 100;
            setKnifePosition({
                "CakeCeremony.useCallback[handlePointerDown]": (prev)=>({
                        ...prev,
                        x: Math.max(10, Math.min(90, x))
                    })
            }["CakeCeremony.useCallback[handlePointerDown]"]);
        }
    }["CakeCeremony.useCallback[handlePointerDown]"], [
        stage,
        isCut
    ]);
    const handlePointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CakeCeremony.useCallback[handlePointerMove]": (e)=>{
            if (!isDragging || stage !== "cutting" || isCut) return;
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;
            const x = (e.clientX - rect.left) / rect.width * 100;
            const clampedX = Math.max(10, Math.min(90, x));
            // Smooth knife tilt
            const deltaX = e.clientX - startXRef.current;
            const targetRotation = -45 + deltaX * 0.1;
            setKnifeRotation(Math.max(-60, Math.min(-30, targetRotation)));
            // Smooth follow
            setKnifePosition({
                "CakeCeremony.useCallback[handlePointerMove]": (prev)=>({
                        x: prev.x + (clampedX - prev.x) * 0.3,
                        y: 45 + Math.sin(clampedX * 0.1) * 5
                    })
            }["CakeCeremony.useCallback[handlePointerMove]"]);
            // Cut progress
            const cakeBounds = cakeRef.current?.getBoundingClientRect();
            if (cakeBounds) {
                const cakeLeft = (cakeBounds.left - rect.left) / rect.width * 100;
                const cakeRight = (cakeBounds.right - rect.left) / rect.width * 100;
                const cakeWidth = cakeRight - cakeLeft;
                if (clampedX >= cakeLeft && clampedX <= cakeRight) {
                    const progress = (clampedX - cakeLeft) / cakeWidth * 100;
                    setCutProgress(progress);
                    if (progress > 80 && !hasCutRef.current) {
                        hasCutRef.current = true;
                        triggerCakeCut();
                    }
                }
            }
        }
    }["CakeCeremony.useCallback[handlePointerMove]"], [
        isDragging,
        stage,
        isCut
    ]);
    const handlePointerUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CakeCeremony.useCallback[handlePointerUp]": ()=>{
            setIsDragging(false);
            setKnifeRotation(-45);
        }
    }["CakeCeremony.useCallback[handlePointerUp]"], []);
    // --------------- Cake Cut Animation -----------------
    const triggerCakeCut = ()=>{
        setShowSliceLine(true);
        setCakeShake(true);
        playSound("cut");
        setTimeout(()=>{
            setShowSliceLine(false);
            setCakeShake(false);
            setIsCut(true);
            // Add crumbs
            const newCrumbs = Array.from({
                length: 12
            }, (_, i)=>({
                    id: i,
                    x: 45 + Math.random() * 10,
                    y: 60 + Math.random() * 10,
                    size: 3 + Math.random() * 5,
                    rotation: Math.random() * 360
                }));
            setCrumbs(newCrumbs);
            setTimeout(()=>{
                setShowMessage("Perfect Cut!");
                playSound("celebration");
                createConfettiBurst(30);
                setTimeout(()=>{
                    setShowMessage("");
                    setStage("blowing");
                    requestMicPermission();
                }, 1300);
            }, 400);
        }, 150);
    };
    // -------------- Confetti Generator -------------------
    const createConfettiBurst = (count)=>{
        const colors = [
            "#ec4899",
            "#f472b6",
            "#fbcfe8",
            "#fda4af",
            "#fecdd3",
            "#fcd34d",
            "#a78bfa"
        ];
        const newItems = Array.from({
            length: count
        }, (_, i)=>({
                id: Date.now() + i,
                x: 40 + Math.random() * 20,
                y: 30 + Math.random() * 10,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
                size: 6 + Math.random() * 8,
                velocityX: (Math.random() - 0.5) * 2,
                velocityY: 1 + Math.random() * 2,
                borderRadius: Math.random() > 0.5 ? "50%" : "3px"
            }));
        setConfetti((prev)=>[
                ...prev,
                ...newItems
            ]);
    };
    // ---------------------- Sound FX ---------------------
    const playSound = (type)=>{
        try {
            const ctx = new AudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            if (type === "cut") {
                osc.frequency.setValueAtTime(800, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.1);
                gain.gain.setValueAtTime(0.3, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);
            }
            if (type === "celebration") {
                osc.frequency.setValueAtTime(523, ctx.currentTime);
                osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
                osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
            }
            if (type === "blow") {
                osc.type = "sine";
                osc.frequency.setValueAtTime(400, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.3);
            }
            osc.start();
            osc.stop(ctx.currentTime + 0.3);
        } catch  {}
    };
    // ------------------- Mic Detection --------------------
    const requestMicPermission = async ()=>{
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            setMicPermission("granted");
            audioContextRef.current = new AudioContext();
            const source = audioContextRef.current.createMediaStreamSource(stream);
            analyserRef.current = audioContextRef.current.createAnalyser();
            analyserRef.current.fftSize = 256;
            source.connect(analyserRef.current);
            startBlowDetection();
        } catch  {
            setMicPermission("denied");
        }
    };
    const startBlowDetection = ()=>{
        if (!analyserRef.current) return;
        const bufferLength = analyserRef.current.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        let blowCount = 0;
        const detect = ()=>{
            if (!analyserRef.current || stage !== "blowing") return;
            analyserRef.current.getByteFrequencyData(dataArray);
            const avg = dataArray.reduce((a, b)=>a + b, 0) / bufferLength;
            if (avg > 40) {
                blowCount++;
                // tilt flames
                setFlameTilt([
                    20 + Math.random() * 20,
                    25 + Math.random() * 15,
                    15 + Math.random() * 25
                ]);
                setFlameIntensity((prev)=>prev.map((i)=>Math.max(0, i - 0.15)));
                if (blowCount > 5 && !candlesBlown[0]) blowOutCandle(0);
                if (blowCount > 10 && !candlesBlown[1]) blowOutCandle(1);
                if (blowCount > 15 && !candlesBlown[2]) blowOutCandle(2);
            } else {
                setFlameTilt((prev)=>prev.map((t)=>t * 0.9));
                setFlameIntensity((prev)=>prev.map((i, idx)=>candlesBlown[idx] ? 0 : Math.min(1, i + 0.05)));
            }
            animationFrameRef.current = requestAnimationFrame(detect);
        };
        detect();
    };
    const blowOutCandle = (index)=>{
        playSound("blow");
        setCandlesBlown((prev)=>{
            const n = [
                ...prev
            ];
            n[index] = true;
            return n;
        });
        setFlameIntensity((prev)=>{
            const n = [
                ...prev
            ];
            n[index] = 0;
            return n;
        });
        setShowSmoke((prev)=>{
            const n = [
                ...prev
            ];
            n[index] = true;
            return n;
        });
        setTimeout(()=>{
            setCandlesBlown((c)=>{
                if (c.every((x)=>x)) triggerCelebration();
                return c;
            });
        }, 300);
    };
    const handleManualBlow = ()=>{
        const i = candlesBlown.findIndex((c)=>!c);
        if (i !== -1) blowOutCandle(i);
    };
    // ------------------- Celebration ---------------------
    const triggerCelebration = ()=>{
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        setStage("celebration");
        setCandlesLit(false);
        setShowMessage("Candles Blown!");
        playSound("celebration");
        createConfettiBurst(100);
        setTimeout(()=>{
            setShowMessage("Happy 23rd Birthday!");
            createConfettiBurst(40);
        }, 1500);
    };
    const handleContinue = ()=>{
        setIsExiting(true);
        setTimeout(onComplete, 700);
    };
    // Cleanup  
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CakeCeremony.useEffect": ()=>{
            return ({
                "CakeCeremony.useEffect": ()=>{
                    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
                    audioContextRef.current?.close();
                }
            })["CakeCeremony.useEffect"];
        }
    }["CakeCeremony.useEffect"], []);
    // ----------------------------------------------------------------
    // ------------------------ UI START -------------------------------
    // ----------------------------------------------------------------
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            background: "linear-gradient(180deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)",
            touchAction: "none"
        },
        onPointerDown: handlePointerDown,
        onPointerMove: handlePointerMove,
        onPointerUp: handlePointerUp,
        onPointerLeave: handlePointerUp,
        className: "jsx-643748a0b7af09d1" + " " + `min-h-screen relative flex flex-col items-center justify-center overflow-hidden transition-opacity duration-700 select-none ${isExiting ? "opacity-0" : "opacity-100"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$sparkle$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparkleEffect"], {}, void 0, false, {
                fileName: "[project]/components/birthday/cake-ceremony.tsx",
                lineNumber: 395,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.1) 100%)"
                },
                className: "jsx-643748a0b7af09d1" + " " + "absolute inset-0 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/birthday/cake-ceremony.tsx",
                lineNumber: 398,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-643748a0b7af09d1" + " " + "absolute inset-0 overflow-hidden pointer-events-none",
                children: backgroundConfetti.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            left: `${p.left}%`,
                            top: `${p.top}%`,
                            backgroundColor: p.color,
                            animation: `float ${p.duration}s ease-in-out infinite`,
                            animationDelay: `${p.delay}s`
                        },
                        className: "jsx-643748a0b7af09d1" + " " + "absolute w-2 h-2 rounded-full opacity-30"
                    }, `bg-${p.id}`, false, {
                        fileName: "[project]/components/birthday/cake-ceremony.tsx",
                        lineNumber: 408,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/birthday/cake-ceremony.tsx",
                lineNumber: 406,
                columnNumber: 7
            }, this),
            confetti.map((piece)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        left: `${piece.x}%`,
                        top: `${piece.y}%`,
                        width: piece.size,
                        height: piece.size,
                        backgroundColor: piece.color,
                        transform: `rotate(${piece.rotation}deg)`,
                        borderRadius: piece.borderRadius
                    },
                    className: "jsx-643748a0b7af09d1" + " " + "absolute pointer-events-none z-50"
                }, piece.id, false, {
                    fileName: "[project]/components/birthday/cake-ceremony.tsx",
                    lineNumber: 424,
                    columnNumber: 9
                }, this)),
            crumbs.map((crumb)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        left: `${crumb.x}%`,
                        top: `${crumb.y}%`,
                        width: crumb.size,
                        height: crumb.size,
                        backgroundColor: "#fde68a",
                        borderRadius: "50%",
                        transform: `rotate(${crumb.rotation}deg)`,
                        animation: "crumb-fall 1s ease-out forwards"
                    },
                    className: "jsx-643748a0b7af09d1" + " " + "absolute pointer-events-none z-30"
                }, crumb.id, false, {
                    fileName: "[project]/components/birthday/cake-ceremony.tsx",
                    lineNumber: 441,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-643748a0b7af09d1" + " " + "relative z-20 text-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "jsx-643748a0b7af09d1" + " " + "font-serif text-3xl md:text-4xl text-pink-800",
                        children: [
                            stage === "cutting" && "Time to Cut the Cake!",
                            stage === "blowing" && "Now Blow Out the Candles!",
                            stage === "celebration" && showMessage
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/birthday/cake-ceremony.tsx",
                        lineNumber: 459,
                        columnNumber: 9
                    }, this),
                    stage === "cutting" && !isCut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-643748a0b7af09d1" + " " + "text-pink-600 mt-2 animate-pulse",
                        children: "Drag your finger across the cake to cut it"
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/cake-ceremony.tsx",
                        lineNumber: 466,
                        columnNumber: 11
                    }, this),
                    stage === "blowing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-643748a0b7af09d1" + " " + "text-pink-600 mt-2",
                        children: micPermission === "granted" ? "Blow into your microphone!" : "Tap the candles to blow them out"
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/cake-ceremony.tsx",
                        lineNumber: 470,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/birthday/cake-ceremony.tsx",
                lineNumber: 458,
                columnNumber: 7
            }, this),
            stage === "cutting" && !isCut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    left: `${knifePosition.x}%`,
                    top: `${knifePosition.y}%`,
                    transform: `translate(-50%, -50%) rotate(${knifeRotation}deg)`,
                    filter: isDragging ? "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" : "drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
                },
                className: "jsx-643748a0b7af09d1" + " " + "absolute z-40 pointer-events-none transition-all duration-75",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "120",
                    height: "40",
                    viewBox: "0 0 120 40",
                    className: "jsx-643748a0b7af09d1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M10 20 L100 20 L110 15 L100 20 L10 20",
                            fill: "linear-gradient(#e5e7eb, #9ca3af)",
                            stroke: "#6b7280",
                            strokeWidth: "1",
                            className: "jsx-643748a0b7af09d1"
                        }, void 0, false, {
                            fileName: "[project]/components/birthday/cake-ceremony.tsx",
                            lineNumber: 490,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "10",
                            y: "15",
                            width: "90",
                            height: "10",
                            rx: "1",
                            fill: "url(#blade-gradient)",
                            className: "jsx-643748a0b7af09d1"
                        }, void 0, false, {
                            fileName: "[project]/components/birthday/cake-ceremony.tsx",
                            lineNumber: 496,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "15",
                            y: "17",
                            width: "80",
                            height: "2",
                            rx: "1",
                            fill: "rgba(255,255,255,0.6)",
                            className: "jsx-643748a0b7af09d1"
                        }, void 0, false, {
                            fileName: "[project]/components/birthday/cake-ceremony.tsx",
                            lineNumber: 498,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "0",
                            y: "12",
                            width: "15",
                            height: "16",
                            rx: "3",
                            fill: "#8b4513",
                            className: "jsx-643748a0b7af09d1"
                        }, void 0, false, {
                            fileName: "[project]/components/birthday/cake-ceremony.tsx",
                            lineNumber: 500,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "2",
                            y: "14",
                            width: "2",
                            height: "12",
                            rx: "1",
                            fill: "#654321",
                            className: "jsx-643748a0b7af09d1"
                        }, void 0, false, {
                            fileName: "[project]/components/birthday/cake-ceremony.tsx",
                            lineNumber: 501,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            className: "jsx-643748a0b7af09d1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "blade-gradient",
                                x1: "0%",
                                y1: "0%",
                                x2: "0%",
                                y2: "100%",
                                className: "jsx-643748a0b7af09d1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#f3f4f6",
                                        className: "jsx-643748a0b7af09d1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                        lineNumber: 505,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "50%",
                                        stopColor: "#d1d5db",
                                        className: "jsx-643748a0b7af09d1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                        lineNumber: 506,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#9ca3af",
                                        className: "jsx-643748a0b7af09d1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                        lineNumber: 507,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                lineNumber: 504,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/birthday/cake-ceremony.tsx",
                            lineNumber: 503,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/birthday/cake-ceremony.tsx",
                    lineNumber: 489,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/birthday/cake-ceremony.tsx",
                lineNumber: 478,
                columnNumber: 9
            }, this),
            showSliceLine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    left: "50%",
                    top: "35%",
                    height: "30%",
                    boxShadow: "0 0 20px 5px rgba(255,255,255,0.8)",
                    animation: "slice-flash 0.15s ease-out"
                },
                className: "jsx-643748a0b7af09d1" + " " + "absolute z-35 w-1 bg-white"
            }, void 0, false, {
                fileName: "[project]/components/birthday/cake-ceremony.tsx",
                lineNumber: 516,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cakeRef,
                style: {
                    width: 300,
                    height: 350
                },
                className: "jsx-643748a0b7af09d1" + " " + `relative z-20 ${cakeShake ? "animate-shake" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)",
                            boxShadow: "0 8px 30px rgba(0,0,0,0.15), inset 0 2px 4px rgba(255,255,255,0.8)"
                        },
                        className: "jsx-643748a0b7af09d1" + " " + "absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-10 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/cake-ceremony.tsx",
                        lineNumber: 535,
                        columnNumber: 9
                    }, this),
                    !isCut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: "linear-gradient(180deg, #fbcfe8 0%, #f9a8d4 50%, #f472b6 100%)",
                                    boxShadow: "inset 0 -15px 30px rgba(0,0,0,0.15), 0 4px 20px rgba(0,0,0,0.1)"
                                },
                                className: "jsx-643748a0b7af09d1" + " " + "absolute bottom-8 left-1/2 -translate-x-1/2 w-60 h-28 rounded-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-643748a0b7af09d1" + " " + "absolute inset-0 rounded-2xl overflow-hidden",
                                        children: [
                                            ...Array(8)
                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    left: `${10 + i * 12}%`,
                                                    width: 12 + Math.random() * 8,
                                                    height: 15 + Math.random() * 10,
                                                    background: "linear-gradient(180deg, #fce7f3 0%, #fbcfe8 100%)"
                                                },
                                                className: "jsx-643748a0b7af09d1" + " " + "absolute -top-2 rounded-b-full"
                                            }, i, false, {
                                                fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                                lineNumber: 556,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                        lineNumber: 554,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-643748a0b7af09d1" + " " + "absolute bottom-4 left-0 right-0 flex justify-center gap-6",
                                        children: [
                                            ...Array(5)
                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-643748a0b7af09d1" + " " + "w-3 h-3 rounded-full bg-pink-300 shadow-inner"
                                            }, i, false, {
                                                fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                                lineNumber: 571,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                        lineNumber: 569,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                lineNumber: 547,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: "linear-gradient(180deg, #fce7f3 0%, #fbcfe8 50%, #f9a8d4 100%)",
                                    boxShadow: "inset 0 -12px 25px rgba(0,0,0,0.12), 0 4px 15px rgba(0,0,0,0.08)"
                                },
                                className: "jsx-643748a0b7af09d1" + " " + "absolute bottom-32 left-1/2 -translate-x-1/2 w-44 h-24 rounded-2xl",
                                children: [
                                    ...Array(6)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            left: `${8 + i * 16}%`,
                                            width: 10 + Math.random() * 6,
                                            height: 12 + Math.random() * 8,
                                            background: "linear-gradient(180deg, #fff 0%, #fce7f3 100%)"
                                        },
                                        className: "jsx-643748a0b7af09d1" + " " + "absolute -top-2 rounded-b-full"
                                    }, i, false, {
                                        fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                        lineNumber: 585,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                lineNumber: 577,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    isCut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: "translateX(-55%) translateX(-12px)",
                            background: "linear-gradient(180deg, #fbcfe8 0%, #f9a8d4 50%, #f472b6 100%)",
                            clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
                            animation: "slide-left 0.5s ease-out forwards"
                        },
                        className: "jsx-643748a0b7af09d1" + " " + "absolute bottom-8 left-1/2 w-60 h-28 rounded-2xl origin-right"
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/cake-ceremony.tsx",
                        lineNumber: 602,
                        columnNumber: 11
                    }, this),
                    isCut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: "translateX(-45%) translateX(12px)",
                            background: "linear-gradient(180deg, #fbcfe8 0%, #f9a8d4 50%, #f472b6 100%)",
                            clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
                            animation: "slide-right 0.5s ease-out forwards"
                        },
                        className: "jsx-643748a0b7af09d1" + " " + "absolute bottom-8 left-1/2 w-60 h-28 rounded-2xl origin-left",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "linear-gradient(90deg, #fef3c7 0%, #fde68a 40%, #fcd34d 100%)",
                                borderLeft: "3px solid #f9a8d4"
                            },
                            className: "jsx-643748a0b7af09d1" + " " + "absolute left-0 top-2 bottom-2 w-8"
                        }, void 0, false, {
                            fileName: "[project]/components/birthday/cake-ceremony.tsx",
                            lineNumber: 624,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/cake-ceremony.tsx",
                        lineNumber: 615,
                        columnNumber: 11
                    }, this),
                    isCut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    transform: "translateX(-55%) translateX(-8px)",
                                    background: "linear-gradient(180deg, #fce7f3 0%, #fbcfe8 50%, #f9a8d4 100%)",
                                    clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
                                    animation: "slide-left 0.5s ease-out forwards"
                                },
                                className: "jsx-643748a0b7af09d1" + " " + "absolute bottom-32 left-1/2 w-44 h-24 rounded-2xl"
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                lineNumber: 637,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    transform: "translateX(-45%) translateX(8px)",
                                    background: "linear-gradient(180deg, #fce7f3 0%, #fbcfe8 50%, #f9a8d4 100%)",
                                    clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
                                    animation: "slide-right 0.5s ease-out forwards"
                                },
                                className: "jsx-643748a0b7af09d1" + " " + "absolute bottom-32 left-1/2 w-44 h-24 rounded-2xl"
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                lineNumber: 646,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-643748a0b7af09d1" + " " + "absolute bottom-52 left-1/2 -translate-x-1/2 flex gap-6",
                        children: [
                            0,
                            1,
                            2
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>stage === "blowing" && handleManualBlow(),
                                className: "jsx-643748a0b7af09d1" + " " + "relative cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "linear-gradient(90deg, #fbbf24 0%, #fcd34d 50%, #fbbf24 100%)",
                                            boxShadow: "inset -2px 0 4px rgba(0,0,0,0.1)"
                                        },
                                        className: "jsx-643748a0b7af09d1" + " " + "w-4 h-14 rounded-t-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-643748a0b7af09d1" + " " + "absolute inset-0 rounded-t-full overflow-hidden",
                                            children: [
                                                ...Array(3)
                                            ].map((_, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        top: `${25 + j * 25}%`
                                                    },
                                                    className: "jsx-643748a0b7af09d1" + " " + "absolute w-full h-1 bg-white/30"
                                                }, j, false, {
                                                    fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                                    lineNumber: 671,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                            lineNumber: 669,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                        lineNumber: 662,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-643748a0b7af09d1" + " " + "absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-3 bg-gray-800 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                        lineNumber: 676,
                                        columnNumber: 15
                                    }, this),
                                    !candlesBlown[i] && candlesLit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            transform: `translateX(-50%) rotate(${flameTilt[i]}deg) scale(${flameIntensity[i]})`,
                                            opacity: flameIntensity[i]
                                        },
                                        className: "jsx-643748a0b7af09d1" + " " + "absolute -top-8 left-1/2 -translate-x-1/2 transition-all duration-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "radial-gradient(ellipse at bottom, #fcd34d 0%, #f97316 40%, #ef4444 70%, transparent 100%)",
                                                    filter: "blur(1px)",
                                                    animation: "flicker 0.15s ease-in-out infinite alternate"
                                                },
                                                className: "jsx-643748a0b7af09d1" + " " + "w-4 h-8 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                                lineNumber: 687,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "radial-gradient(ellipse at bottom, #fff 0%, #fef3c7 50%, transparent 100%)",
                                                    animation: "flicker 0.1s ease-in-out infinite alternate"
                                                },
                                                className: "jsx-643748a0b7af09d1" + " " + "absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-4 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                                lineNumber: 696,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "radial-gradient(circle, rgba(251,191,36,0.4) 0%, transparent 70%)",
                                                    animation: "pulse 1s ease-in-out infinite"
                                                },
                                                className: "jsx-643748a0b7af09d1" + " " + "absolute -inset-4 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                                lineNumber: 703,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                        lineNumber: 680,
                                        columnNumber: 17
                                    }, this),
                                    showSmoke[i] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-643748a0b7af09d1" + " " + "absolute -top-12 left-1/2 -translate-x-1/2",
                                        children: [
                                            ...Array(3)
                                        ].map((_, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    animation: `smoke-rise 1s ease-out forwards`,
                                                    animationDelay: `${j * 0.15}s`,
                                                    left: `${(j - 1) * 4}px`
                                                },
                                                className: "jsx-643748a0b7af09d1" + " " + "absolute w-2 h-2 rounded-full bg-gray-400/50"
                                            }, j, false, {
                                                fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                                lineNumber: 717,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                        lineNumber: 715,
                                        columnNumber: 17
                                    }, this),
                                    candlesBlown[i] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "radial-gradient(circle, #ef4444 0%, #991b1b 100%)",
                                            boxShadow: "0 0 4px 1px rgba(239,68,68,0.6)",
                                            animation: "pulse 2s ease-in-out infinite"
                                        },
                                        className: "jsx-643748a0b7af09d1" + " " + "absolute -top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                        lineNumber: 732,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/birthday/cake-ceremony.tsx",
                                lineNumber: 661,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/cake-ceremony.tsx",
                        lineNumber: 659,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/birthday/cake-ceremony.tsx",
                lineNumber: 529,
                columnNumber: 7
            }, this),
            stage === "cutting" && !isCut && isDragging && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-643748a0b7af09d1" + " " + "absolute bottom-32 left-1/2 -translate-x-1/2 w-48 h-2 bg-pink-200 rounded-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: `${cutProgress}%`
                    },
                    className: "jsx-643748a0b7af09d1" + " " + "h-full bg-pink-500 rounded-full transition-all duration-100"
                }, void 0, false, {
                    fileName: "[project]/components/birthday/cake-ceremony.tsx",
                    lineNumber: 749,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/birthday/cake-ceremony.tsx",
                lineNumber: 748,
                columnNumber: 9
            }, this),
            showMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-643748a0b7af09d1" + " " + "absolute top-1/4 left-1/2 -translate-x-1/2 z-50 animate-bounce-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "rgba(255,255,255,0.9)",
                        boxShadow: "0 10px 40px rgba(236,72,153,0.3)",
                        backdropFilter: "blur(10px)"
                    },
                    className: "jsx-643748a0b7af09d1" + " " + "px-8 py-4 rounded-2xl text-3xl font-bold text-pink-700",
                    children: showMessage
                }, void 0, false, {
                    fileName: "[project]/components/birthday/cake-ceremony.tsx",
                    lineNumber: 756,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/birthday/cake-ceremony.tsx",
                lineNumber: 755,
                columnNumber: 9
            }, this),
            stage === "celebration" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleContinue,
                className: "jsx-643748a0b7af09d1" + " " + "absolute bottom-16 left-1/2 -translate-x-1/2 px-8 py-4 bg-pink-500 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-pink-600 transform hover:scale-105 transition-all duration-300 z-50 animate-pulse-glow",
                children: "Continue Your Surprise"
            }, void 0, false, {
                fileName: "[project]/components/birthday/cake-ceremony.tsx",
                lineNumber: 771,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "643748a0b7af09d1",
                children: "@keyframes flicker{0%{transform:scaleY(1)scaleX(1)}to{transform:scaleY(1.1)scaleX(.9)}}@keyframes smoke-rise{0%{opacity:.6;transform:translateY(0)scale(1)}to{opacity:0;transform:translateY(-30px)scale(2)}}@keyframes crumb-fall{0%{opacity:1;transform:translateY(0)rotate(0)}to{opacity:0;transform:translateY(100px)rotate(360deg)}}@keyframes slice-flash{0%{opacity:0;transform:translate(-50%)scaleY(0)}50%{opacity:1;transform:translate(-50%)scaleY(1)}to{opacity:0;transform:translate(-50%)scaleY(1)}}@keyframes slide-left{0%{transform:translate(-50%)}to{transform:translate(-55%)translate(-12px)}}@keyframes slide-right{0%{transform:translate(-50%)}to{transform:translate(-45%)translate(12px)}}@keyframes bounce-in{0%{opacity:0;transform:translate(-50%)scale(0)}50%{transform:translate(-50%)scale(1.2)}to{opacity:1;transform:translate(-50%)scale(1)}}@keyframes shake{0%,to{transform:translate(0)}25%{transform:translate(-3px)}75%{transform:translate(3px)}}.animate-shake.jsx-643748a0b7af09d1{animation:.15s ease-in-out 2 shake}.animate-bounce-in.jsx-643748a0b7af09d1{animation:.4s ease-out forwards bounce-in}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/birthday/cake-ceremony.tsx",
        lineNumber: 381,
        columnNumber: 5
    }, this);
}
_s(CakeCeremony, "GlJ530g12xgXBAOi5OXWI3I1d4o=");
_c = CakeCeremony;
var _c;
__turbopack_context__.k.register(_c, "CakeCeremony");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/birthday/final-surprise.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FinalSurprise",
    ()=>FinalSurprise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$sparkle$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/sparkle-effect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FinalSurprise({ onContinue }) {
    _s();
    const [showVideo, setShowVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExiting, setIsExiting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleContinue = ()=>{
        setIsExiting(true);
        setTimeout(onContinue, 700);
    };
    // Local video (public/myvideo.mp4)
    const videoUrl = "/my-video.mp4" // <-- Yahin apna exact file name daalna
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen relative flex items-center justify-center overflow-hidden transition-opacity duration-700 ${isExiting ? "opacity-0" : "opacity-100"}`,
        style: {
            background: "linear-gradient(180deg, #fdf2f8 0%, #fce7f3 100%)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$sparkle$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparkleEffect"], {}, void 0, false, {
                fileName: "[project]/components/birthday/final-surprise.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 max-w-lg mx-4 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-serif text-3xl md:text-4xl text-foreground mb-4",
                        children: "Surprise Chamber"
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/final-surprise.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-lg mb-8",
                        children: "A special message, just for you"
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/final-surprise.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card rounded-3xl p-8",
                        children: !showVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-48 h-48 mx-auto bg-card rounded-2xl flex items-center justify-center border-4 border-primary/20 relative overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 border-4 border-primary rounded-lg",
                                                    style: {
                                                        animation: "pulse 2s ease-in-out infinite"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/birthday/final-surprise.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-5 gap-1 p-4",
                                                    children: [
                                                        ...Array(25)
                                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-6 h-6 rounded-sm ${Math.random() > 0.3 ? "bg-foreground" : "bg-transparent"}`
                                                        }, i, false, {
                                                            fileName: "[project]/components/birthday/final-surprise.tsx",
                                                            lineNumber: 54,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/birthday/final-surprise.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/birthday/final-surprise.tsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground mt-4",
                                            children: "Point your camera at the QR code"
                                        }, void 0, false, {
                                            fileName: "[project]/components/birthday/final-surprise.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/birthday/final-surprise.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative py-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full border-t border-border"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/final-surprise.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/birthday/final-surprise.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-card px-4 text-muted-foreground text-sm",
                                                children: "or"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/final-surprise.tsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/birthday/final-surprise.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/birthday/final-surprise.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowVideo(true),
                                    className: "group w-full px-6 py-4 bg-secondary text-secondary-foreground rounded-2xl font-medium text-lg  hover:bg-secondary/80 transition-colors flex items-center justify-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/birthday/final-surprise.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this),
                                        "Tap to play video"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/birthday/final-surprise.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-video rounded-2xl overflow-hidden bg-foreground/10 mb-6 shadow-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        src: videoUrl,
                                        controls: true,
                                        autoPlay: true,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/components/birthday/final-surprise.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/birthday/final-surprise.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleContinue,
                                    className: "group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg  hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto",
                                    children: [
                                        "Continue",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-5 h-5 group-hover:translate-x-1 transition-transform"
                                        }, void 0, false, {
                                            fileName: "[project]/components/birthday/final-surprise.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/birthday/final-surprise.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/final-surprise.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/birthday/final-surprise.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/birthday/final-surprise.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(FinalSurprise, "jujtDS925B/d9T8g8heIoG92NC0=");
_c = FinalSurprise;
var _c;
__turbopack_context__.k.register(_c, "FinalSurprise");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/birthday/ending-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EndingScreen",
    ()=>EndingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$sparkle$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/sparkle-effect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$heart$2d$particles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/heart-particles.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$floating$2d$balloons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/floating-balloons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function EndingScreen() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPopup, setShowPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EndingScreen.useEffect": ()=>{
            setTimeout({
                "EndingScreen.useEffect": ()=>setIsVisible(true)
            }["EndingScreen.useEffect"], 300);
        }
    }["EndingScreen.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "linear-gradient(180deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)"
        },
        className: "jsx-854152ed82853cd6" + " " + "min-h-screen relative flex items-center justify-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$floating$2d$balloons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingBalloons"], {}, void 0, false, {
                fileName: "[project]/components/birthday/ending-screen.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$heart$2d$particles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeartParticles"], {}, void 0, false, {
                fileName: "[project]/components/birthday/ending-screen.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$sparkle$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparkleEffect"], {}, void 0, false, {
                fileName: "[project]/components/birthday/ending-screen.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-854152ed82853cd6" + " " + `relative z-20 max-w-lg mx-4 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-854152ed82853cd6" + " " + "glass-card rounded-3xl p-8 md:p-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-854152ed82853cd6" + " " + "flex justify-center gap-3 mb-6",
                                children: [
                                    ...Array(5)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        className: "w-6 h-6 text-primary fill-primary animate-float",
                                        style: {
                                            animationDelay: `${i * 0.3}s`
                                        }
                                    }, i, false, {
                                        fileName: "[project]/components/birthday/ending-screen.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/ending-screen.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "jsx-854152ed82853cd6" + " " + "font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight text-balance",
                                children: "You're the brightest part of my life."
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/ending-screen.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-854152ed82853cd6" + " " + "text-lg text-muted-foreground mb-4",
                                children: "Thank you for being you."
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/ending-screen.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-854152ed82853cd6" + " " + "text-2xl font-serif text-primary mb-8",
                                children: "Happy 23rd Birthday, my love."
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/ending-screen.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-854152ed82853cd6" + " " + "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/birthday-wallpaper.jpg",
                                        download: "Happy-Birthday-Wallpaper.png",
                                        className: "jsx-854152ed82853cd6" + " " + "w-full px-6 py-4 bg-primary text-primary-foreground rounded-2xl font-medium text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/ending-screen.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this),
                                            "Download Birthday Wallpaper"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/birthday/ending-screen.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowPopup(true),
                                        className: "jsx-854152ed82853cd6" + " " + "w-full px-6 py-4 bg-secondary text-secondary-foreground rounded-2xl font-medium text-lg hover:bg-secondary/80 transition-colors flex items-center justify-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/ending-screen.tsx",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, this),
                                            "Read My Love Letter"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/birthday/ending-screen.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/birthday/ending-screen.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-854152ed82853cd6" + " " + "mt-8 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-854152ed82853cd6" + " " + "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            className: "w-16 h-16 text-primary fill-primary animate-pulse",
                                            style: {
                                                filter: "drop-shadow(0 0 20px rgba(236, 72, 153, 0.5))"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/birthday/ending-screen.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-854152ed82853cd6" + " " + "absolute inset-0 animate-ping",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                className: "w-16 h-16 text-primary/30 fill-primary/30"
                                            }, void 0, false, {
                                                fileName: "[project]/components/birthday/ending-screen.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/birthday/ending-screen.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/birthday/ending-screen.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/ending-screen.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-854152ed82853cd6" + " " + "mt-6 text-sm text-muted-foreground",
                                children: "Made with all my love, just for you"
                            }, void 0, false, {
                                fileName: "[project]/components/birthday/ending-screen.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/birthday/ending-screen.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            localStorage.removeItem("bday_progress");
                            window.location.reload();
                        },
                        className: "jsx-854152ed82853cd6" + " " + "mt-6 px-6 py-3 bg-pink-500 text-white rounded-full font-medium text-lg shadow-lg hover:bg-pink-600 transition-all",
                        children: "Restart the Surprise 🎀"
                    }, void 0, false, {
                        fileName: "[project]/components/birthday/ending-screen.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/birthday/ending-screen.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            showPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-854152ed82853cd6" + " " + "fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "rgba(255, 240, 245, 0.95)",
                        boxShadow: "0 10px 50px rgba(236,72,153,0.25)"
                    },
                    className: "jsx-854152ed82853cd6" + " " + "bg-white rounded-3xl p-8 w-[85%] max-w-md text-center shadow-2xl animate-scaleIn",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "jsx-854152ed82853cd6" + " " + "text-2xl font-semibold text-pink-700 mb-4",
                            children: "Arey bubu jaan… 💖"
                        }, void 0, false, {
                            fileName: "[project]/components/birthday/ending-screen.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-854152ed82853cd6" + " " + "text-pink-600 leading-relaxed text-lg",
                            children: "Kitne badmaash ho tum… itna pyaar bhara letter padhna chahte ho? Mela Podu, mera rasmalai, rasgulaa 😌💗"
                        }, void 0, false, {
                            fileName: "[project]/components/birthday/ending-screen.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-854152ed82853cd6" + " " + "mt-6 flex justify-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowPopup(false),
                                    className: "jsx-854152ed82853cd6" + " " + "px-6 py-3 rounded-xl bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/birthday/ending-screen.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "jsx-854152ed82853cd6" + " " + "px-6 py-3 rounded-xl bg-pink-500 text-white font-medium hover:bg-pink-600 transition shadow-lg",
                                    children: "Choo Abb Sooo Ja 💌"
                                }, void 0, false, {
                                    fileName: "[project]/components/birthday/ending-screen.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/birthday/ending-screen.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/birthday/ending-screen.tsx",
                    lineNumber: 109,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/birthday/ending-screen.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "854152ed82853cd6",
                children: "@keyframes scaleIn{0%{opacity:0;transform:scale(.7)}to{opacity:1;transform:scale(1)}}.animate-scaleIn.jsx-854152ed82853cd6{animation:.25s ease-out forwards scaleIn}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/birthday/ending-screen.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(EndingScreen, "M4B16RqwRHy4j20AObeVq30arm0=");
_c = EndingScreen;
var _c;
__turbopack_context__.k.register(_c, "EndingScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/birthday/audio-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioProvider",
    ()=>AudioProvider,
    "useAudio",
    ()=>useAudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const AudioContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function AudioProvider({ children }) {
    _s();
    const [isMusicPlaying, setIsMusicPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const playSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AudioProvider.useCallback[playSound]": (sound)=>{
            // Sound effects would be loaded here in production
            console.log(`Playing sound: ${sound}`);
        }
    }["AudioProvider.useCallback[playSound]"], []);
    const toggleMusic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AudioProvider.useCallback[toggleMusic]": ()=>{
            setIsMusicPlaying({
                "AudioProvider.useCallback[toggleMusic]": (prev)=>!prev
            }["AudioProvider.useCallback[toggleMusic]"]);
        }
    }["AudioProvider.useCallback[toggleMusic]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AudioContext.Provider, {
        value: {
            playSound,
            toggleMusic,
            isMusicPlaying
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/birthday/audio-provider.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
_s(AudioProvider, "M98ea/BkZ6hsFVrbic5FhoskDhk=");
_c = AudioProvider;
function useAudio() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AudioContext);
    if (!context) {
        throw new Error("useAudio must be used within AudioProvider");
    }
    return context;
}
_s1(useAudio, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AudioProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BirthdayPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$landing$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/landing-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$intro$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/intro-animation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$quiz$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/quiz-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$memory$2d$gallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/memory-gallery.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$mini$2d$games$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/mini-games.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$birthday$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/birthday-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$cake$2d$ceremony$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/cake-ceremony.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$final$2d$surprise$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/final-surprise.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$ending$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/ending-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$audio$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/birthday/audio-provider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function BirthdayPage() {
    _s();
    // Start always at landing safely
    const [currentSection, setCurrentSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("landing");
    // Load saved progress ONLY after page loads in browser (SSR fix)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BirthdayPage.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const saved = localStorage.getItem("bday_progress");
                if (saved) {
                    setCurrentSection(saved);
                }
            }
        }
    }["BirthdayPage.useEffect"], []);
    // Navigate + save progress
    const navigateTo = (section)=>{
        setCurrentSection(section);
        // Protect from SSR crash
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem("bday_progress", section);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$audio$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen overflow-hidden",
            children: [
                currentSection === "landing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$landing$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingScreen"], {
                    onEnter: ()=>navigateTo("intro")
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this),
                currentSection === "intro" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$intro$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IntroAnimation"], {
                    onContinue: ()=>navigateTo("quiz")
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, this),
                currentSection === "quiz" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$quiz$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuizSection"], {
                    onComplete: ()=>navigateTo("memory")
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                }, this),
                currentSection === "memory" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$memory$2d$gallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MemoryGallery"], {
                    onContinue: ()=>navigateTo("games")
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this),
                currentSection === "games" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$mini$2d$games$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MiniGames"], {
                    onComplete: ()=>navigateTo("card")
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this),
                currentSection === "card" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$birthday$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BirthdayCard"], {
                    onContinue: ()=>navigateTo("cake")
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this),
                currentSection === "cake" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$cake$2d$ceremony$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CakeCeremony"], {
                    onComplete: ()=>navigateTo("surprise")
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this),
                currentSection === "surprise" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$final$2d$surprise$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FinalSurprise"], {
                    onContinue: ()=>navigateTo("ending")
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, this),
                currentSection === "ending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$birthday$2f$ending$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EndingScreen"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 87,
                    columnNumber: 41
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(BirthdayPage, "1EnVSbc6YojyCkvl7Z/wm6qQaco=");
_c = BirthdayPage;
var _c;
__turbopack_context__.k.register(_c, "BirthdayPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_9aac5130._.js.map