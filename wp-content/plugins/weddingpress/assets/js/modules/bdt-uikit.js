/*! bdtUIkit 3.16.3 | https://www.getuikit.com | (c) 2014 - 2023 YOOtheme | MIT License */
(function(ge, me) {
    typeof exports == "object" && typeof module < "u" ? module.exports = me() : typeof define == "function" && define.amd ? define("uikit", me) : (ge = typeof globalThis < "u" ? globalThis : ge || self,
        ge.bdtUIkit = me())
})(this, function() {
    "use strict";
    const {
        hasOwnProperty: ge,
        toString: me
    } = Object.prototype;

    function Mt(t, e) {
        return ge.call(t, e)
    }
    const wo = /\B([A-Z])/g,
        Zt = ft(t => t.replace(wo, "-$1").toLowerCase()),
        bo = /-(\w)/g,
        ve = ft(t => t.replace(bo, bs)),
        _t = ft(t => t.length ? bs(null, t.charAt(0)) + t.slice(1) : "");

    function bs(t, e) {
        return e ? e.toUpperCase() : ""
    }

    function ht(t, e) {
        var i;
        return (i = t == null ? void 0 : t.startsWith) == null ? void 0 : i.call(t, e)
    }

    function Qt(t, e) {
        var i;
        return (i = t == null ? void 0 : t.endsWith) == null ? void 0 : i.call(t, e)
    }

    function v(t, e) {
        var i;
        return (i = t == null ? void 0 : t.includes) == null ? void 0 : i.call(t, e)
    }

    function $t(t, e) {
        var i;
        return (i = t == null ? void 0 : t.findIndex) == null ? void 0 : i.call(t, e)
    }
    const {
        isArray: Q,
        from: _i
    } = Array, {
        assign: xt
    } = Object;

    function dt(t) {
        return typeof t == "function"
    }

    function Et(t) {
        return t !== null && typeof t == "object"
    }

    function yt(t) {
        return me.call(t) === "[object Object]"
    }

    function Ut(t) {
        return Et(t) && t === t.window
    }

    function je(t) {
        return Ei(t) === 9
    }

    function qe(t) {
        return Ei(t) >= 1
    }

    function te(t) {
        return Ei(t) === 1
    }

    function Ei(t) {
        return !Ut(t) && Et(t) && t.nodeType
    }

    function Ii(t) {
        return typeof t == "boolean"
    }

    function N(t) {
        return typeof t == "string"
    }

    function ee(t) {
        return typeof t == "number"
    }

    function vt(t) {
        return ee(t) || N(t) && !isNaN(t - parseFloat(t))
    }

    function we(t) {
        return !(Q(t) ? t.length : Et(t) && Object.keys(t).length)
    }

    function V(t) {
        return t === void 0
    }

    function Pi(t) {
        return Ii(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t
    }

    function kt(t) {
        const e = Number(t);
        return isNaN(e) ? !1 : e
    }

    function $(t) {
        return parseFloat(t) || 0
    }

    function R(t) {
        return k(t)[0]
    }

    function k(t) {
        return qe(t) ? [t] : Array.from(t || []).filter(qe)
    }

    function ie(t) {
        if (Ut(t))
            return t;
        t = R(t);
        const e = je(t) ? t : t == null ? void 0 : t.ownerDocument;
        return (e == null ? void 0 : e.defaultView) || window
    }

    function be(t, e) {
        return t === e || Et(t) && Et(e) && Object.keys(t).length === Object.keys(e).length && St(t, (i, s) => i === e[s])
    }

    function Ai(t, e, i) {
        return t.replace(new RegExp(`${e}|${i}`, "g"), s => s === e ? i : e)
    }

    function se(t) {
        return t[t.length - 1]
    }

    function St(t, e) {
        for (const i in t)
            if (e(t[i], i) === !1)
                return !1;
        return !0
    }

    function Ve(t, e) {
        return t.slice().sort(({
            [e]: i = 0
        }, {
            [e]: s = 0
        }) => i > s ? 1 : s > i ? -1 : 0)
    }

    function Nt(t, e) {
        return t.reduce((i, s) => i + $(dt(e) ? e(s) : s[e]), 0)
    }

    function $s(t, e) {
        const i = new Set;
        return t.filter(({
            [e]: s
        }) => i.has(s) ? !1 : i.add(s))
    }

    function U(t, e = 0, i = 1) {
        return Math.min(Math.max(kt(t) || 0, e), i)
    }

    function P() {}

    function Oi(...t) {
        return [
            ["bottom", "top"],
            ["right", "left"]
        ].every(([e, i]) => Math.min(...t.map(({
            [e]: s
        }) => s)) - Math.max(...t.map(({
            [i]: s
        }) => s)) > 0)
    }

    function Ye(t, e) {
        return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top
    }

    function Di(t, e, i) {
        const s = e === "width" ? "height" : "width";
        return {
            [s]: t[e] ? Math.round(i * t[s] / t[e]) : t[s],
            [e]: i
        }
    }

    function xs(t, e) {
        t = {
            ...t
        };
        for (const i in t)
            t = t[i] > e[i] ? Di(t, i, e[i]) : t;
        return t
    }

    function $o(t, e) {
        t = xs(t, e);
        for (const i in t)
            t = t[i] < e[i] ? Di(t, i, e[i]) : t;
        return t
    }
    const Ge = {
        ratio: Di,
        contain: xs,
        cover: $o
    };

    function ct(t, e, i = 0, s = !1) {
        e = k(e);
        const {
            length: n
        } = e;
        return n ? (t = vt(t) ? kt(t) : t === "next" ? i + 1 : t === "previous" ? i - 1 : t === "last" ? n - 1 : e.indexOf(R(t)),
            s ? U(t, 0, n - 1) : (t %= n,
                t < 0 ? t + n : t)) : -1
    }

    function ft(t) {
        const e = Object.create(null);
        return i => e[i] || (e[i] = t(i))
    }
    class Xe {
        constructor() {
            this.promise = new Promise((e, i) => {
                this.reject = i,
                    this.resolve = e
            })
        }
    }

    function f(t, e, i) {
        var s;
        if (Et(e)) {
            for (const n in e)
                f(t, n, e[n]);
            return
        }
        if (V(i))
            return (s = R(t)) == null ? void 0 : s.getAttribute(e);
        for (const n of k(t))
            dt(i) && (i = i.call(n, f(n, e))),
            i === null ? $e(n, e) : n.setAttribute(e, i)
    }

    function wt(t, e) {
        return k(t).some(i => i.hasAttribute(e))
    }

    function $e(t, e) {
        k(t).forEach(i => i.removeAttribute(e))
    }

    function tt(t, e) {
        for (const i of [e, `data-${e}`])
            if (wt(t, i))
                return f(t, i)
    }
    const xo = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };

    function Bi(t) {
        return k(t).some(e => xo[e.tagName.toLowerCase()])
    }

    function q(t) {
        return k(t).some(e => e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    const xe = "input,select,textarea,button";

    function Mi(t) {
        return k(t).some(e => _(e, xe))
    }
    const ye = `${xe},a[href],[tabindex]`;

    function Je(t) {
        return _(t, ye)
    }

    function A(t) {
        var e;
        return (e = R(t)) == null ? void 0 : e.parentElement
    }

    function ke(t, e) {
        return k(t).filter(i => _(i, e))
    }

    function _(t, e) {
        return k(t).some(i => i.matches(e))
    }

    function Y(t, e) {
        return te(t) ? t.closest(ht(e, ">") ? e.slice(1) : e) : k(t).map(i => Y(i, e)).filter(Boolean)
    }

    function D(t, e) {
        return N(e) ? !!Y(t, e) : R(e).contains(R(t))
    }

    function ne(t, e) {
        const i = [];
        for (; t = A(t);)
            (!e || _(t, e)) && i.push(t);
        return i
    }

    function E(t, e) {
        t = R(t);
        const i = t ? k(t.children) : [];
        return e ? ke(i, e) : i
    }

    function oe(t, e) {
        return e ? k(t).indexOf(R(e)) : E(A(t)).indexOf(t)
    }

    function ut(t, e) {
        return Ni(t, ks(t, e))
    }

    function Se(t, e) {
        return Te(t, ks(t, e))
    }

    function Ni(t, e) {
        return R(Ss(t, R(e), "querySelector"))
    }

    function Te(t, e) {
        return k(Ss(t, R(e), "querySelectorAll"))
    }
    const yo = /(^|[^\\],)\s*[!>+~-]/,
        ys = ft(t => t.match(yo));

    function ks(t, e = document) {
        return N(t) && ys(t) || je(e) ? e : e.ownerDocument
    }
    const ko = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g,
        So = ft(t => t.replace(ko, "$1 *"));

    function Ss(t, e = document, i) {
        if (!t || !N(t))
            return t;
        if (t = So(t),
            ys(t)) {
            const s = Co(t);
            t = "";
            for (let n of s) {
                let o = e;
                if (n[0] === "!") {
                    const r = n.substr(1).trim().split(" ");
                    if (o = Y(A(e), r[0]),
                        n = r.slice(1).join(" ").trim(), !n.length && s.length === 1)
                        return o
                }
                if (n[0] === "-") {
                    const r = n.substr(1).trim().split(" "),
                        a = (o || e).previousElementSibling;
                    o = _(a, n.substr(1)) ? a : null,
                        n = r.slice(1).join(" ")
                }
                o && (t += `${t ? "," : ""}${_o(o)} ${n}`)
            }
            e = document
        }
        try {
            return e[i](t)
        } catch {
            return null
        }
    }
    const To = /.*?[^\\](?:,|$)/g,
        Co = ft(t => t.match(To).map(e => e.replace(/,$/, "").trim()));

    function _o(t) {
        const e = [];
        for (; t.parentNode;) {
            const i = f(t, "id");
            if (i) {
                e.unshift(`#${zi(i)}`);
                break
            } else {
                let {
                    tagName: s
                } = t;
                s !== "HTML" && (s += `:nth-child(${oe(t) + 1})`),
                    e.unshift(s),
                    t = t.parentNode
            }
        }
        return e.join(" > ")
    }

    function zi(t) {
        return N(t) ? CSS.escape(t) : ""
    }

    function x(...t) {
        let [e, i, s, n, o = !1] = Fi(t);
        n.length > 1 && (n = Io(n)),
            o != null && o.self && (n = Po(n)),
            s && (n = Eo(s, n));
        for (const r of i)
            for (const a of e)
                a.addEventListener(r, n, o);
        return () => zt(e, i, n, o)
    }

    function zt(...t) {
        let [e, i, , s, n = !1] = Fi(t);
        for (const o of i)
            for (const r of e)
                r.removeEventListener(o, s, n)
    }

    function L(...t) {
        const [e, i, s, n, o = !1, r] = Fi(t), a = x(e, i, s, l => {
            const c = !r || r(l);
            c && (a(),
                n(l, c))
        }, o);
        return a
    }

    function m(t, e, i) {
        return Hi(t).every(s => s.dispatchEvent(Ft(e, !0, !0, i)))
    }

    function Ft(t, e = !0, i = !1, s) {
        return N(t) && (t = new CustomEvent(t, {
                bubbles: e,
                cancelable: i,
                detail: s
            })),
            t
    }

    function Fi(t) {
        return t[0] = Hi(t[0]),
            N(t[1]) && (t[1] = t[1].split(" ")),
            dt(t[2]) && t.splice(2, 0, !1),
            t
    }

    function Eo(t, e) {
        return i => {
            const s = t[0] === ">" ? Te(t, i.currentTarget).reverse().filter(n => D(i.target, n))[0] : Y(i.target, t);
            s && (i.current = s,
                e.call(this, i),
                delete i.current)
        }
    }

    function Io(t) {
        return e => Q(e.detail) ? t(e, ...e.detail) : t(e)
    }

    function Po(t) {
        return function(e) {
            if (e.target === e.currentTarget || e.target === e.current)
                return t.call(null, e)
        }
    }

    function Ts(t) {
        return t && "addEventListener" in t
    }

    function Ao(t) {
        return Ts(t) ? t : R(t)
    }

    function Hi(t) {
        return Q(t) ? t.map(Ao).filter(Boolean) : N(t) ? Te(t) : Ts(t) ? [t] : k(t)
    }

    function Tt(t) {
        return t.pointerType === "touch" || !!t.touches
    }

    function re(t) {
        var e, i;
        const {
            clientX: s,
            clientY: n
        } = ((e = t.touches) == null ? void 0 : e[0]) || ((i = t.changedTouches) == null ? void 0 : i[0]) || t;
        return {
            x: s,
            y: n
        }
    }
    const Oo = {
        "animation-iteration-count": !0,
        "column-count": !0,
        "fill-opacity": !0,
        "flex-grow": !0,
        "flex-shrink": !0,
        "font-weight": !0,
        "line-height": !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        "stroke-dasharray": !0,
        "stroke-dashoffset": !0,
        widows: !0,
        "z-index": !0,
        zoom: !0
    };

    function h(t, e, i, s) {
        const n = k(t);
        for (const o of n)
            if (N(e)) {
                if (e = Li(e),
                    V(i))
                    return getComputedStyle(o).getPropertyValue(e);
                o.style.setProperty(e, vt(i) && !Oo[e] ? `${i}px` : i || ee(i) ? i : "", s)
            } else if (Q(e)) {
            const r = {};
            for (const a of e)
                r[a] = h(o, a);
            return r
        } else
            Et(e) && (s = i,
                St(e, (r, a) => h(o, a, r, s)));
        return n[0]
    }
    const Li = ft(t => Do(t));

    function Do(t) {
        if (ht(t, "--"))
            return t;
        t = Zt(t);
        const {
            style: e
        } = document.documentElement;
        if (t in e)
            return t;
        for (const i of ["webkit", "moz"]) {
            const s = `-${i}-${t}`;
            if (s in e)
                return s
        }
    }

    function y(t, ...e) {
        Cs(t, e, "add")
    }

    function z(t, ...e) {
        Cs(t, e, "remove")
    }

    function Wi(t, e) {
        f(t, "class", i => (i || "").replace(new RegExp(`\\b${e}\\b\\s?`, "g"), ""))
    }

    function Ri(t, ...e) {
        e[0] && z(t, e[0]),
            e[1] && y(t, e[1])
    }

    function B(t, e) {
        return [e] = ji(e), !!e && k(t).some(i => i.classList.contains(e))
    }

    function j(t, e, i) {
        const s = ji(e);
        V(i) || (i = !!i);
        for (const n of k(t))
            for (const o of s)
                n.classList.toggle(o, i)
    }

    function Cs(t, e, i) {
        e = e.reduce((s, n) => s.concat(ji(n)), []);
        for (const s of k(t))
            s.classList[i](...e)
    }

    function ji(t) {
        return String(t).split(/[ ,]/).filter(Boolean)
    }

    function Bo(t, e, i = 400, s = "linear") {
        return i = Math.round(i),
            Promise.all(k(t).map(n => new Promise((o, r) => {
                for (const l in e) {
                    const c = h(n, l);
                    c === "" && h(n, l, c)
                }
                const a = setTimeout(() => m(n, "transitionend"), i);
                L(n, "transitionend transitioncanceled", ({
                        type: l
                    }) => {
                        clearTimeout(a),
                            z(n, "bdt-transition"),
                            h(n, {
                                transitionProperty: "",
                                transitionDuration: "",
                                transitionTimingFunction: ""
                            }),
                            l === "transitioncanceled" ? r() : o(n)
                    }, {
                        self: !0
                    }),
                    y(n, "bdt-transition"),
                    h(n, {
                        transitionProperty: Object.keys(e).map(Li).join(","),
                        transitionDuration: `${i}ms`,
                        transitionTimingFunction: s,
                        ...e
                    })
            })))
    }
    const S = {
            start: Bo,
            async stop(t) {
                m(t, "transitionend"),
                    await Promise.resolve()
            },
            async cancel(t) {
                m(t, "transitioncanceled"),
                    await Promise.resolve()
            },
            inProgress(t) {
                return B(t, "bdt-transition")
            }
        },
        Ce = "bdt-animation-";

    function _s(t, e, i = 200, s, n) {
        return Promise.all(k(t).map(o => new Promise((r, a) => {
            m(o, "animationcanceled");
            const l = setTimeout(() => m(o, "animationend"), i);
            L(o, "animationend animationcanceled", ({
                    type: c
                }) => {
                    clearTimeout(l),
                        c === "animationcanceled" ? a() : r(o),
                        h(o, "animationDuration", ""),
                        Wi(o, `${Ce}\\S*`)
                }, {
                    self: !0
                }),
                h(o, "animationDuration", `${i}ms`),
                y(o, e, Ce + (n ? "leave" : "enter")),
                ht(e, Ce) && (s && y(o, `bdt-transform-origin-${s}`),
                    n && y(o, `${Ce}reverse`))
        })))
    }
    const Mo = new RegExp(`${Ce}(enter|leave)`),
        pt = { in: _s,
            out(t, e, i, s) {
                return _s(t, e, i, s, !0)
            },
            inProgress(t) {
                return Mo.test(f(t, "class"))
            },
            cancel(t) {
                m(t, "animationcanceled")
            }
        };

    function No(t) {
        if (document.readyState !== "loading") {
            t();
            return
        }
        L(document, "DOMContentLoaded", t)
    }

    function X(t, ...e) {
        return e.some(i => {
            var s;
            return ((s = t == null ? void 0 : t.tagName) == null ? void 0 : s.toLowerCase()) === i.toLowerCase()
        })
    }

    function Es(t) {
        return t = w(t),
            t.innerHTML = "",
            t
    }

    function It(t, e) {
        return V(e) ? w(t).innerHTML : W(Es(t), e)
    }
    const zo = Qe("prepend"),
        W = Qe("append"),
        Ke = Qe("before"),
        Ze = Qe("after");

    function Qe(t) {
        return function(e, i) {
            var s;
            const n = k(N(i) ? Ht(i) : i);
            return (s = w(e)) == null || s[t](...n),
                Is(n)
        }
    }

    function ot(t) {
        k(t).forEach(e => e.remove())
    }

    function Ue(t, e) {
        for (e = R(Ke(t, e)); e.firstChild;)
            e = e.firstChild;
        return W(e, t),
            e
    }

    function qi(t, e) {
        return k(k(t).map(i => i.hasChildNodes() ? Ue(k(i.childNodes), e) : W(i, e)))
    }

    function _e(t) {
        k(t).map(A).filter((e, i, s) => s.indexOf(e) === i).forEach(e => e.replaceWith(...e.childNodes))
    }
    const Fo = /^\s*<(\w+|!)[^>]*>/,
        Ho = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

    function Ht(t) {
        const e = Ho.exec(t);
        if (e)
            return document.createElement(e[1]);
        const i = document.createElement("div");
        return Fo.test(t) ? i.insertAdjacentHTML("beforeend", t.trim()) : i.textContent = t,
            Is(i.childNodes)
    }

    function Is(t) {
        return t.length > 1 ? t : t[0]
    }

    function Ct(t, e) {
        if (te(t))
            for (e(t),
                t = t.firstElementChild; t;) {
                const i = t.nextElementSibling;
                Ct(t, e),
                    t = i
            }
    }

    function w(t, e) {
        return Ps(t) ? R(Ht(t)) : Ni(t, e)
    }

    function O(t, e) {
        return Ps(t) ? k(Ht(t)) : Te(t, e)
    }

    function Ps(t) {
        return N(t) && ht(t.trim(), "<")
    }
    const Lt = {
        width: ["left", "right"],
        height: ["top", "bottom"]
    };

    function b(t) {
        const e = te(t) ? R(t).getBoundingClientRect() : {
            height: et(t),
            width: Ee(t),
            top: 0,
            left: 0
        };
        return {
            height: e.height,
            width: e.width,
            top: e.top,
            left: e.left,
            bottom: e.top + e.height,
            right: e.left + e.width
        }
    }

    function I(t, e) {
        const i = b(t);
        if (t) {
            const {
                scrollY: n,
                scrollX: o
            } = ie(t), r = {
                height: n,
                width: o
            };
            for (const a in Lt)
                for (const l of Lt[a])
                    i[l] += r[a]
        }
        if (!e)
            return i;
        const s = h(t, "position");
        St(h(t, ["left", "top"]), (n, o) => h(t, o, e[o] - i[o] + $(s === "absolute" && n === "auto" ? ti(t)[o] : n)))
    }

    function ti(t) {
        let {
            top: e,
            left: i
        } = I(t);
        const {
            ownerDocument: {
                body: s,
                documentElement: n
            },
            offsetParent: o
        } = R(t);
        let r = o || n;
        for (; r && (r === s || r === n) && h(r, "position") === "static";)
            r = r.parentNode;
        if (te(r)) {
            const a = I(r);
            e -= a.top + $(h(r, "borderTopWidth")),
                i -= a.left + $(h(r, "borderLeftWidth"))
        }
        return {
            top: e - $(h(t, "marginTop")),
            left: i - $(h(t, "marginLeft"))
        }
    }

    function Wt(t) {
        t = R(t);
        const e = [t.offsetTop, t.offsetLeft];
        for (; t = t.offsetParent;)
            if (e[0] += t.offsetTop + $(h(t, "borderTopWidth")),
                e[1] += t.offsetLeft + $(h(t, "borderLeftWidth")),
                h(t, "position") === "fixed") {
                const i = ie(t);
                return e[0] += i.scrollY,
                    e[1] += i.scrollX,
                    e
            }
        return e
    }
    const et = As("height"),
        Ee = As("width");

    function As(t) {
        const e = _t(t);
        return (i, s) => {
            if (V(s)) {
                if (Ut(i))
                    return i[`inner${e}`];
                if (je(i)) {
                    const n = i.documentElement;
                    return Math.max(n[`offset${e}`], n[`scroll${e}`])
                }
                return i = R(i),
                    s = h(i, t),
                    s = s === "auto" ? i[`offset${e}`] : $(s) || 0,
                    s - ae(i, t)
            } else
                return h(i, t, !s && s !== 0 ? "" : +s + ae(i, t) + "px")
        }
    }

    function ae(t, e, i = "border-box") {
        return h(t, "boxSizing") === i ? Nt(Lt[e].map(_t), s => $(h(t, `padding${s}`)) + $(h(t, `border${s}Width`))) : 0
    }

    function ei(t) {
        for (const e in Lt)
            for (const i in Lt[e])
                if (Lt[e][i] === t)
                    return Lt[e][1 - i];
        return t
    }

    function rt(t, e = "width", i = window, s = !1) {
        return N(t) ? Nt(Wo(t), n => {
            const o = jo(n);
            return o ? qo(o === "vh" ? Vo() : o === "vw" ? Ee(ie(i)) : s ? i[`offset${_t(e)}`] : b(i)[e], n) : n
        }) : $(t)
    }
    const Lo = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g,
        Wo = ft(t => t.toString().replace(/\s/g, "").match(Lo) || []),
        Ro = /(?:v[hw]|%)$/,
        jo = ft(t => (t.match(Ro) || [])[0]);

    function qo(t, e) {
        return t * $(e) / 100
    }
    let Ie, le;

    function Vo() {
        return Ie || (le || (le = w("<div>"),
                h(le, {
                    height: "100vh",
                    position: "fixed"
                }),
                x(window, "resize", () => Ie = null)),
            W(document.body, le),
            Ie = le.clientHeight,
            ot(le),
            Ie)
    }
    const Rt = typeof window < "u",
        J = Rt && document.dir === "rtl",
        jt = Rt && "ontouchstart" in window,
        he = Rt && window.PointerEvent,
        gt = he ? "pointerdown" : jt ? "touchstart" : "mousedown",
        ii = he ? "pointermove" : jt ? "touchmove" : "mousemove",
        Pt = he ? "pointerup" : jt ? "touchend" : "mouseup",
        At = he ? "pointerenter" : jt ? "" : "mouseenter",
        qt = he ? "pointerleave" : jt ? "" : "mouseleave",
        si = he ? "pointercancel" : "touchcancel",
        G = {
            reads: [],
            writes: [],
            read(t) {
                return this.reads.push(t),
                    Yi(),
                    t
            },
            write(t) {
                return this.writes.push(t),
                    Yi(),
                    t
            },
            clear(t) {
                Ds(this.reads, t),
                    Ds(this.writes, t)
            },
            flush: Vi
        };

    function Vi(t) {
        Os(G.reads),
            Os(G.writes.splice(0)),
            G.scheduled = !1,
            (G.reads.length || G.writes.length) && Yi(t + 1)
    }
    const Yo = 4;

    function Yi(t) {
        G.scheduled || (G.scheduled = !0,
            t && t < Yo ? Promise.resolve().then(() => Vi(t)) : requestAnimationFrame(() => Vi(1)))
    }

    function Os(t) {
        let e;
        for (; e = t.shift();)
            try {
                e()
            } catch (i) {
                console.error(i)
            }
    }

    function Ds(t, e) {
        const i = t.indexOf(e);
        return ~i && t.splice(i, 1)
    }

    function Gi() {}
    Gi.prototype = {
        positions: [],
        init() {
            this.positions = [];
            let t;
            this.unbind = x(document, "mousemove", e => t = re(e)),
                this.interval = setInterval(() => {
                    t && (this.positions.push(t),
                        this.positions.length > 5 && this.positions.shift())
                }, 50)
        },
        cancel() {
            var t;
            (t = this.unbind) == null || t.call(this),
                clearInterval(this.interval)
        },
        movesTo(t) {
            if (this.positions.length < 2)
                return !1;
            const e = t.getBoundingClientRect(),
                {
                    left: i,
                    right: s,
                    top: n,
                    bottom: o
                } = e,
                [r] = this.positions,
                a = se(this.positions),
                l = [r, a];
            return Ye(a, e) ? !1 : [
                [{
                    x: i,
                    y: n
                }, {
                    x: s,
                    y: o
                }],
                [{
                    x: i,
                    y: o
                }, {
                    x: s,
                    y: n
                }]
            ].some(u => {
                const d = Go(l, u);
                return d && Ye(d, e)
            })
        }
    };

    function Go([{
        x: t,
        y: e
    }, {
        x: i,
        y: s
    }], [{
        x: n,
        y: o
    }, {
        x: r,
        y: a
    }]) {
        const l = (a - o) * (i - t) - (r - n) * (s - e);
        if (l === 0)
            return !1;
        const c = ((r - n) * (e - o) - (a - o) * (t - n)) / l;
        return c < 0 ? !1 : {
            x: t + c * (i - t),
            y: e + c * (s - e)
        }
    }

    function ce(t, e, i, s = !0) {
        const n = new IntersectionObserver(s ? (o, r) => {
                o.some(a => a.isIntersecting) && e(o, r)
            } :
            e, i);
        for (const o of k(t))
            n.observe(o);
        return n
    }
    const Xo = Rt && window.ResizeObserver;

    function Pe(t, e, i = {
        box: "border-box"
    }) {
        return Xo ? Ms(ResizeObserver, t, e, i) : (Jo(),
            Ae.add(e), {
                disconnect() {
                    Ae.delete(e)
                }
            })
    }
    let Ae;

    function Jo() {
        if (Ae)
            return;
        Ae = new Set;
        let t;
        const e = () => {
            if (!t) {
                t = !0,
                    requestAnimationFrame(() => t = !1);
                for (const i of Ae)
                    i()
            }
        };
        x(window, "load resize", e),
            x(document, "loadedmetadata load", e, !0)
    }

    function Bs(t, e, i) {
        return Ms(MutationObserver, t, e, i)
    }

    function Ms(t, e, i, s) {
        const n = new t(i);
        for (const o of k(e))
            n.observe(o, s);
        return n
    }
    const K = {};
    K.events = K.created = K.beforeConnect = K.connected = K.beforeDisconnect = K.disconnected = K.destroy = Xi,
        K.args = function(t, e) {
            return e !== !1 && Xi(e || t)
        },
        K.update = function(t, e) {
            return Ve(Xi(t, dt(e) ? {
                read: e
            } : e), "order")
        },
        K.props = function(t, e) {
            if (Q(e)) {
                const i = {};
                for (const s of e)
                    i[s] = String;
                e = i
            }
            return K.methods(t, e)
        },
        K.computed = K.methods = function(t, e) {
            return e ? t ? {
                ...t,
                ...e
            } : e : t
        },
        K.i18n = K.data = function(t, e, i) {
            return i ? Ns(t, e, i) : e ? t ? function(s) {
                    return Ns(t, e, s)
                } :
                e : t
        };

    function Ns(t, e, i) {
        return K.computed(dt(t) ? t.call(i, i) : t, dt(e) ? e.call(i, i) : e)
    }

    function Xi(t, e) {
        return t = t && !Q(t) ? [t] : t,
            e ? t ? t.concat(e) : Q(e) ? e : [e] : t
    }

    function Ko(t, e) {
        return V(e) ? t : e
    }

    function ue(t, e, i) {
        const s = {};
        if (dt(e) && (e = e.options),
            e.extends && (t = ue(t, e.extends, i)),
            e.mixins)
            for (const o of e.mixins)
                t = ue(t, o, i);
        for (const o in t)
            n(o);
        for (const o in e)
            Mt(t, o) || n(o);

        function n(o) {
            s[o] = (K[o] || Ko)(t[o], e[o], i)
        }
        return s
    }

    function de(t, e = []) {
        try {
            return t ? ht(t, "{") ? JSON.parse(t) : e.length && !v(t, ":") ? {
                [e[0]]: t
            } : t.split(";").reduce((i, s) => {
                const [n, o] = s.split(/:(.*)/);
                return n && !V(o) && (i[n.trim()] = o.trim()),
                    i
            }, {}) : {}
        } catch {
            return {}
        }
    }

    function zs(t) {
        if (oi(t) && Ji(t, {
                func: "playVideo",
                method: "play"
            }),
            ni(t))
            try {
                t.play().catch(P)
            } catch {}
    }

    function Fs(t) {
        oi(t) && Ji(t, {
                func: "pauseVideo",
                method: "pause"
            }),
            ni(t) && t.pause()
    }

    function Hs(t) {
        oi(t) && Ji(t, {
                func: "mute",
                method: "setVolume",
                value: 0
            }),
            ni(t) && (t.muted = !0)
    }

    function Ls(t) {
        return ni(t) || oi(t)
    }

    function ni(t) {
        return X(t, "video")
    }

    function oi(t) {
        return X(t, "iframe") && (Ws(t) || Rs(t))
    }

    function Ws(t) {
        return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)
    }

    function Rs(t) {
        return !!t.src.match(/vimeo\.com\/video\/.*/)
    }
    async function Ji(t, e) {
        await Qo(t),
            js(t, e)
    }

    function js(t, e) {
        try {
            t.contentWindow.postMessage(JSON.stringify({
                event: "command",
                ...e
            }), "*")
        } catch {}
    }
    const Ki = "_ukPlayer";
    let Zo = 0;

    function Qo(t) {
        if (t[Ki])
            return t[Ki];
        const e = Ws(t),
            i = Rs(t),
            s = ++Zo;
        let n;
        return t[Ki] = new Promise(o => {
            e && L(t, "load", () => {
                    const r = () => js(t, {
                        event: "listening",
                        id: s
                    });
                    n = setInterval(r, 100),
                        r()
                }),
                L(window, "message", o, !1, ({
                    data: r
                }) => {
                    try {
                        return r = JSON.parse(r),
                            e && (r == null ? void 0 : r.id) === s && r.event === "onReady" || i && Number(r == null ? void 0 : r.player_id) === s
                    } catch {}
                }),
                t.src = `${t.src}${v(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${s}`}`
        }).then(() => clearInterval(n))
    }

    function Zi(t, e = 0, i = 0) {
        return q(t) ? Oi(...Vt(t).map(s => {
            const {
                top: n,
                left: o,
                bottom: r,
                right: a
            } = at(s);
            return {
                top: n - e,
                left: o - i,
                bottom: r + e,
                right: a + i
            }
        }).concat(I(t))) : !1
    }

    function qs(t, {
        offset: e = 0
    } = {}) {
        const i = q(t) ? mt(t, !1, ["hidden"]) : [];
        return i.reduce((r, a, l) => {
            const {
                scrollTop: c,
                scrollHeight: u,
                offsetHeight: d
            } = a, p = at(a), g = u - p.height, {
                height: T,
                top: F
            } = i[l - 1] ? at(i[l - 1]) : I(t);
            let M = Math.ceil(F - p.top - e + c);
            return e > 0 && d < T + e ? M += e : e = 0,
                M > g ? (e -= M - g,
                    M = g) : M < 0 && (e -= M,
                    M = 0),
                () => s(a, M - c).then(r)
        }, () => Promise.resolve())();

        function s(r, a) {
            return new Promise(l => {
                const c = r.scrollTop,
                    u = n(Math.abs(a)),
                    d = Date.now();
                (function p() {
                    const g = o(U((Date.now() - d) / u));
                    r.scrollTop = c + a * g,
                        g === 1 ? l() : requestAnimationFrame(p)
                })()
            })
        }

        function n(r) {
            return 40 * Math.pow(r, .375)
        }

        function o(r) {
            return .5 * (1 - Math.cos(Math.PI * r))
        }
    }

    function Qi(t, e = 0, i = 0) {
        if (!q(t))
            return 0;
        const [s] = mt(t, !0), {
            scrollHeight: n,
            scrollTop: o
        } = s, {
            height: r
        } = at(s), a = n - r, l = Wt(t)[0] - Wt(s)[0], c = Math.max(0, l - r + e), u = Math.min(a, l + t.offsetHeight - i);
        return U((o - c) / (u - c))
    }

    function mt(t, e = !1, i = []) {
        const s = Vs(t);
        let n = ne(t).reverse();
        n = n.slice(n.indexOf(s) + 1);
        const o = $t(n, r => h(r, "position") === "fixed");
        return ~o && (n = n.slice(o)), [s].concat(n.filter(r => h(r, "overflow").split(" ").some(a => v(["auto", "scroll", ...i], a)) && (!e || r.scrollHeight > at(r).height))).reverse()
    }

    function Vt(t) {
        return mt(t, !1, ["hidden", "clip"])
    }

    function at(t) {
        const e = ie(t),
            {
                document: {
                    documentElement: i
                }
            } = e;
        let s = t === Vs(t) ? e : t;
        const {
            visualViewport: n
        } = e;
        if (Ut(s) && n) {
            let {
                height: r,
                width: a,
                scale: l,
                pageTop: c,
                pageLeft: u
            } = n;
            return r = Math.round(r * l),
                a = Math.round(a * l), {
                    height: r,
                    width: a,
                    top: c,
                    left: u,
                    bottom: c + r,
                    right: u + a
                }
        }
        let o = I(s);
        if (h(s, "display") === "inline")
            return o;
        for (let [r, a, l, c] of [
                ["width", "x", "left", "right"],
                ["height", "y", "top", "bottom"]
            ])
            Ut(s) ? s = i : o[l] += $(h(s, `border-${l}-width`)),
            o[r] = o[a] = s[`client${_t(r)}`],
            o[c] = o[r] + o[l];
        return o
    }

    function Vs(t) {
        return ie(t).document.scrollingElement
    }
    const lt = [
        ["width", "x", "left", "right"],
        ["height", "y", "top", "bottom"]
    ];

    function Ys(t, e, i) {
        i = {
                attach: {
                    element: ["left", "top"],
                    target: ["left", "top"],
                    ...i.attach
                },
                offset: [0, 0],
                placement: [],
                ...i
            },
            Q(e) || (e = [e, e]),
            I(t, Gs(t, e, i))
    }

    function Gs(t, e, i) {
        const s = Xs(t, e, i),
            {
                boundary: n,
                viewportOffset: o = 0,
                placement: r
            } = i;
        let a = s;
        for (const [l, [c, , u, d]] of Object.entries(lt)) {
            const p = Uo(t, e[l], o, n, l);
            if (ri(s, p, l))
                continue;
            let g = 0;
            if (r[l] === "flip") {
                const T = i.attach.target[l];
                if (T === d && s[d] <= p[d] || T === u && s[u] >= p[u])
                    continue;
                g = er(t, e, i, l)[u] - s[u];
                const F = tr(t, e[l], o, l);
                if (!ri(Ui(s, g, l), F, l)) {
                    if (ri(s, F, l))
                        continue;
                    if (i.recursion)
                        return !1;
                    const M = ir(t, e, i);
                    if (M && ri(M, F, 1 - l))
                        return M;
                    continue
                }
            } else if (r[l] === "shift") {
                const T = I(e[l]),
                    {
                        offset: F
                    } = i;
                g = U(U(s[u], p[u], p[d] - s[c]), T[u] - s[c] + F[l], T[d] - F[l]) - s[u]
            }
            a = Ui(a, g, l)
        }
        return a
    }

    function Xs(t, e, i) {
        let {
            attach: s,
            offset: n
        } = {
            attach: {
                element: ["left", "top"],
                target: ["left", "top"],
                ...i.attach
            },
            offset: [0, 0],
            ...i
        }, o = I(t);
        for (const [r, [a, , l, c]] of Object.entries(lt)) {
            const u = s.target[r] === s.element[r] ? at(e[r]) : I(e[r]);
            o = Ui(o, u[l] - o[l] + Js(s.target[r], c, u[a]) - Js(s.element[r], c, o[a]) + +n[r], r)
        }
        return o
    }

    function Ui(t, e, i) {
        const [, s, n, o] = lt[i], r = {
            ...t
        };
        return r[n] = t[s] = t[n] + e,
            r[o] += e,
            r
    }

    function Js(t, e, i) {
        return t === "center" ? i / 2 : t === e ? i : 0
    }

    function Uo(t, e, i, s, n) {
        let o = Zs(...Ks(t, e).map(at));
        return i && (o[lt[n][2]] += i,
                o[lt[n][3]] -= i),
            s && (o = Zs(o, I(Q(s) ? s[n] : s))),
            o
    }

    function tr(t, e, i, s) {
        const [n, o, r, a] = lt[s], [l] = Ks(t, e), c = at(l);
        return ["auto", "scroll"].includes(h(l, `overflow-${o}`)) && (c[r] -= l[`scroll${_t(r)}`],
                c[a] = c[r] + l[`scroll${_t(n)}`]),
            c[r] += i,
            c[a] -= i,
            c
    }

    function Ks(t, e) {
        return Vt(e).filter(i => D(t, i))
    }

    function Zs(...t) {
        let e = {};
        for (const i of t)
            for (const [, , s, n] of lt)
                e[s] = Math.max(e[s] || 0, i[s]),
                e[n] = Math.min(...[e[n], i[n]].filter(Boolean));
        return e
    }

    function ri(t, e, i) {
        const [, , s, n] = lt[i];
        return t[s] >= e[s] && t[n] <= e[n]
    }

    function er(t, e, {
        offset: i,
        attach: s
    }, n) {
        return Xs(t, e, {
            attach: {
                element: Qs(s.element, n),
                target: Qs(s.target, n)
            },
            offset: sr(i, n)
        })
    }

    function ir(t, e, i) {
        return Gs(t, e, {
            ...i,
            attach: {
                element: i.attach.element.map(Us).reverse(),
                target: i.attach.target.map(Us).reverse()
            },
            offset: i.offset.reverse(),
            placement: i.placement.reverse(),
            recursion: !0
        })
    }

    function Qs(t, e) {
        const i = [...t],
            s = lt[e].indexOf(t[e]);
        return ~s && (i[e] = lt[e][1 - s % 2 + 2]),
            i
    }

    function Us(t) {
        for (let e = 0; e < lt.length; e++) {
            const i = lt[e].indexOf(t);
            if (~i)
                return lt[1 - e][i % 2 + 2]
        }
    }

    function sr(t, e) {
        return t = [...t],
            t[e] *= -1,
            t
    }
    var nr = Object.freeze({
        __proto__: null,
        $: w,
        $$: O,
        Animation: pt,
        Deferred: Xe,
        Dimensions: Ge,
        MouseTracker: Gi,
        Transition: S,
        addClass: y,
        after: Ze,
        append: W,
        apply: Ct,
        assign: xt,
        attr: f,
        before: Ke,
        boxModelAdjust: ae,
        camelize: ve,
        children: E,
        clamp: U,
        closest: Y,
        createEvent: Ft,
        css: h,
        data: tt,
        dimensions: b,
        each: St,
        empty: Es,
        endsWith: Qt,
        escape: zi,
        fastdom: G,
        filter: ke,
        find: Ni,
        findAll: Te,
        findIndex: $t,
        flipPosition: ei,
        fragment: Ht,
        getEventPos: re,
        getIndex: ct,
        hasAttr: wt,
        hasClass: B,
        hasOwn: Mt,
        hasTouch: jt,
        height: et,
        html: It,
        hyphenate: Zt,
        inBrowser: Rt,
        includes: v,
        index: oe,
        intersectRect: Oi,
        isArray: Q,
        isBoolean: Ii,
        isDocument: je,
        isElement: te,
        isEmpty: we,
        isEqual: be,
        isFocusable: Je,
        isFunction: dt,
        isInView: Zi,
        isInput: Mi,
        isNode: qe,
        isNumber: ee,
        isNumeric: vt,
        isObject: Et,
        isPlainObject: yt,
        isRtl: J,
        isString: N,
        isTag: X,
        isTouch: Tt,
        isUndefined: V,
        isVideo: Ls,
        isVisible: q,
        isVoidElement: Bi,
        isWindow: Ut,
        last: se,
        matches: _,
        memoize: ft,
        mergeOptions: ue,
        mute: Hs,
        noop: P,
        observeIntersection: ce,
        observeMutation: Bs,
        observeResize: Pe,
        off: zt,
        offset: I,
        offsetPosition: Wt,
        offsetViewport: at,
        on: x,
        once: L,
        overflowParents: Vt,
        parent: A,
        parents: ne,
        parseOptions: de,
        pause: Fs,
        play: zs,
        pointInRect: Ye,
        pointerCancel: si,
        pointerDown: gt,
        pointerEnter: At,
        pointerLeave: qt,
        pointerMove: ii,
        pointerUp: Pt,
        position: ti,
        positionAt: Ys,
        prepend: zo,
        propName: Li,
        query: ut,
        queryAll: Se,
        ready: No,
        remove: ot,
        removeAttr: $e,
        removeClass: z,
        removeClasses: Wi,
        replaceClass: Ri,
        scrollIntoView: qs,
        scrollParents: mt,
        scrolledOver: Qi,
        selFocusable: ye,
        selInput: xe,
        sortBy: Ve,
        startsWith: ht,
        sumBy: Nt,
        swap: Ai,
        toArray: _i,
        toBoolean: Pi,
        toEventTargets: Hi,
        toFloat: $,
        toNode: R,
        toNodes: k,
        toNumber: kt,
        toPx: rt,
        toWindow: ie,
        toggleClass: j,
        trigger: m,
        ucfirst: _t,
        uniqueBy: $s,
        unwrap: _e,
        width: Ee,
        within: D,
        wrapAll: Ue,
        wrapInner: qi
    });

    function or(t) {
        const e = t.data;
        t.use = function(n) {
                if (!n.installed)
                    return n.call(null, this),
                        n.installed = !0,
                        this
            },
            t.mixin = function(n, o) {
                o = (N(o) ? t.component(o) : o) || this,
                    o.options = ue(o.options, n)
            },
            t.extend = function(n) {
                n = n || {};
                const o = this,
                    r = function(l) {
                        this._init(l)
                    };
                return r.prototype = Object.create(o.prototype),
                    r.prototype.constructor = r,
                    r.options = ue(o.options, n),
                    r.super = o,
                    r.extend = o.extend,
                    r
            },
            t.update = function(n, o) {
                n = n ? R(n) : document.body;
                for (const r of ne(n).reverse())
                    s(r[e], o);
                Ct(n, r => s(r[e], o))
            };
        let i;
        Object.defineProperty(t, "container", {
            get() {
                return i || document.body
            },
            set(n) {
                i = w(n)
            }
        });

        function s(n, o) {
            if (n)
                for (const r in n)
                    n[r]._connected && n[r]._callUpdate(o)
        }
    }

    function rr(t) {
        t.prototype._callHook = function(s) {
                var n;
                (n = this.$options[s]) == null || n.forEach(o => o.call(this))
            },
            t.prototype._callConnected = function() {
                this._connected || (this._data = {},
                    this._computed = {},
                    this._initProps(),
                    this._callHook("beforeConnect"),
                    this._connected = !0,
                    this._initEvents(),
                    this._initObservers(),
                    this._callHook("connected"),
                    this._callUpdate())
            },
            t.prototype._callDisconnected = function() {
                this._connected && (this._callHook("beforeDisconnect"),
                    this._disconnectObservers(),
                    this._unbindEvents(),
                    this._callHook("disconnected"),
                    this._connected = !1,
                    delete this._watch)
            },
            t.prototype._callUpdate = function(s = "update") {
                this._connected && ((s === "update" || s === "resize") && this._callWatches(),
                    this.$options.update && (this._updates || (this._updates = new Set,
                            G.read(() => {
                                this._connected && e.call(this, this._updates),
                                    delete this._updates
                            })),
                        this._updates.add(s.type || s)))
            },
            t.prototype._callWatches = function() {
                if (this._watch)
                    return;
                const s = !Mt(this, "_watch");
                this._watch = G.read(() => {
                    this._connected && i.call(this, s),
                        this._watch = null
                })
            };

        function e(s) {
            for (const {
                    read: n,
                    write: o,
                    events: r = []
                } of this.$options.update) {
                if (!s.has("update") && !r.some(l => s.has(l)))
                    continue;
                let a;
                n && (a = n.call(this, this._data, s),
                        a && yt(a) && xt(this._data, a)),
                    o && a !== !1 && G.write(() => {
                        this._connected && o.call(this, this._data, s)
                    })
            }
        }

        function i(s) {
            const {
                $options: {
                    computed: n
                }
            } = this, o = {
                ...this._computed
            };
            this._computed = {};
            for (const r in n) {
                const {
                    watch: a,
                    immediate: l
                } = n[r];
                a && (s && l || Mt(o, r) && !be(o[r], this[r])) && a.call(this, this[r], o[r])
            }
        }
    }

    function ar(t) {
        let e = 0;
        t.prototype._init = function(i) {
                i = i || {},
                    i.data = ur(i, this.constructor.options),
                    this.$options = ue(this.constructor.options, i, this),
                    this.$el = null,
                    this.$props = {},
                    this._uid = e++,
                    this._initData(),
                    this._initMethods(),
                    this._initComputeds(),
                    this._callHook("created"),
                    i.el && this.$mount(i.el)
            },
            t.prototype._initData = function() {
                const {
                    data: i = {}
                } = this.$options;
                for (const s in i)
                    this.$props[s] = this[s] = i[s]
            },
            t.prototype._initMethods = function() {
                const {
                    methods: i
                } = this.$options;
                if (i)
                    for (const s in i)
                        this[s] = i[s].bind(this)
            },
            t.prototype._initComputeds = function() {
                const {
                    computed: i
                } = this.$options;
                if (this._computed = {},
                    i)
                    for (const s in i)
                        lr(this, s, i[s])
            },
            t.prototype._initProps = function(i) {
                let s;
                i = i || tn(this.$options);
                for (s in i)
                    V(i[s]) || (this.$props[s] = i[s]);
                const n = [this.$options.computed, this.$options.methods];
                for (s in this.$props)
                    s in i && hr(n, s) && (this[s] = this.$props[s])
            },
            t.prototype._initEvents = function() {
                this._events = [];
                for (const i of this.$options.events || [])
                    if (Mt(i, "handler"))
                        ai(this, i);
                    else
                        for (const s in i)
                            ai(this, i[s], s)
            },
            t.prototype._unbindEvents = function() {
                this._events.forEach(i => i()),
                    delete this._events
            },
            t.prototype._initObservers = function() {
                this._observers = [fr(this), dr(this)]
            },
            t.prototype.registerObserver = function(...i) {
                this._observers.push(...i)
            },
            t.prototype._disconnectObservers = function() {
                this._observers.forEach(i => i == null ? void 0 : i.disconnect())
            }
    }

    function tn(t) {
        const e = {},
            {
                args: i = [],
                props: s = {},
                el: n,
                id: o
            } = t;
        if (!s)
            return e;
        for (const a in s) {
            const l = Zt(a);
            let c = tt(n, l);
            V(c) || (c = s[a] === Boolean && c === "" ? !0 : ts(s[a], c), !(l === "target" && ht(c, "_")) && (e[a] = c))
        }
        const r = de(tt(n, o), i);
        for (const a in r) {
            const l = ve(a);
            V(s[l]) || (e[l] = ts(s[l], r[a]))
        }
        return e
    }

    function lr(t, e, i) {
        Object.defineProperty(t, e, {
            enumerable: !0,
            get() {
                const {
                    _computed: s,
                    $props: n,
                    $el: o
                } = t;
                return Mt(s, e) || (s[e] = (i.get || i).call(t, n, o)),
                    s[e]
            },
            set(s) {
                const {
                    _computed: n
                } = t;
                n[e] = i.set ? i.set.call(t, s) : s,
                    V(n[e]) && delete n[e]
            }
        })
    }

    function ai(t, e, i) {
        yt(e) || (e = {
            name: i,
            handler: e
        });
        let {
            name: s,
            el: n,
            handler: o,
            capture: r,
            passive: a,
            delegate: l,
            filter: c,
            self: u
        } = e;
        if (n = dt(n) ? n.call(t) : n || t.$el,
            Q(n)) {
            n.forEach(d => ai(t, {
                ...e,
                el: d
            }, i));
            return
        }!n || c && !c.call(t) || t._events.push(x(n, s, l ? N(l) ? l : l.call(t) : null, N(o) ? t[o] : o.bind(t), {
            passive: a,
            capture: r,
            self: u
        }))
    }

    function hr(t, e) {
        return t.every(i => !i || !Mt(i, e))
    }

    function ts(t, e) {
        return t === Boolean ? Pi(e) : t === Number ? kt(e) : t === "list" ? cr(e) : t === Object && N(e) ? de(e) : t ? t(e) : e
    }

    function cr(t) {
        return Q(t) ? t : N(t) ? t.split(/,(?![^(]*\))/).map(e => vt(e) ? kt(e) : Pi(e.trim())) : [t]
    }

    function ur({
        data: t = {}
    }, {
        args: e = [],
        props: i = {}
    }) {
        Q(t) && (t = t.slice(0, e.length).reduce((s, n, o) => (yt(n) ? xt(s, n) : s[e[o]] = n,
            s), {}));
        for (const s in t)
            V(t[s]) ? delete t[s] : i[s] && (t[s] = ts(i[s], t[s]));
        return t
    }

    function dr(t) {
        let {
            el: e,
            computed: i
        } = t.$options;
        if (!i)
            return;
        for (const n in i)
            if (i[n].document) {
                e = e.ownerDocument;
                break
            }
        const s = new MutationObserver(() => t._callWatches());
        return s.observe(e, {
                childList: !0,
                subtree: !0
            }),
            s
    }

    function fr(t) {
        const {
            $options: e,
            $props: i
        } = t, {
            id: s,
            attrs: n,
            props: o,
            el: r
        } = e;
        if (!o || n === !1)
            return;
        const a = Q(n) ? n : Object.keys(o),
            l = a.map(u => Zt(u)).concat(s),
            c = new MutationObserver(u => {
                const d = tn(e);
                u.some(({
                    attributeName: p
                }) => {
                    const g = p.replace("data-", "");
                    return (g === s ? a : [ve(g), ve(p)]).some(T => !V(d[T]) && d[T] !== i[T])
                }) && t.$reset()
            });
        return c.observe(r, {
                attributes: !0,
                attributeFilter: l.concat(l.map(u => `data-${u}`))
            }),
            c
    }

    function pr(t) {
        const e = t.data;
        t.prototype.$create = function(i, s, n) {
                return t[i](s, n)
            },
            t.prototype.$mount = function(i) {
                const {
                    name: s
                } = this.$options;
                i[e] || (i[e] = {}), !i[e][s] && (i[e][s] = this,
                    this.$el = this.$options.el = this.$options.el || i,
                    D(i, document) && this._callConnected())
            },
            t.prototype.$reset = function() {
                this._callDisconnected(),
                    this._callConnected()
            },
            t.prototype.$destroy = function(i = !1) {
                const {
                    el: s,
                    name: n
                } = this.$options;
                s && this._callDisconnected(),
                    this._callHook("destroy"),
                    s != null && s[e] && (delete s[e][n],
                        we(s[e]) || delete s[e],
                        i && ot(this.$el))
            },
            t.prototype.$emit = function(i) {
                this._callUpdate(i)
            },
            t.prototype.$update = function(i = this.$el, s) {
                t.update(i, s)
            },
            t.prototype.$getComponent = t.getComponent,
            Object.defineProperty(t.prototype, "$container", Object.getOwnPropertyDescriptor(t, "container"))
    }
    const Ot = {};

    function gr(t) {
        const {
            data: e,
            prefix: i
        } = t;
        t.component = function(s, n) {
                var o;
                s = Zt(s);
                const r = i + s;
                if (!n)
                    return yt(Ot[r]) && (Ot[r] = Ot[`data-${r}`] = t.extend(Ot[r])),
                        Ot[r];
                s = ve(s),
                    t[s] = function(l, c) {
                        const u = t.component(s);
                        return u.options.functional ? new u({
                            data: yt(l) ? l : [...arguments]
                        }) : l ? O(l).map(d)[0] : d();

                        function d(p) {
                            const g = t.getComponent(p, s);
                            if (g)
                                if (c)
                                    g.$destroy();
                                else
                                    return g;
                            return new u({
                                el: p,
                                data: c
                            })
                        }
                    };
                const a = yt(n) ? {
                    ...n
                } : n.options;
                return a.id = r,
                    a.name = s,
                    (o = a.install) == null || o.call(a, t, a, s),
                    t._initialized && !a.functional && requestAnimationFrame(() => t[s](`[${r}],[data-${r}]`)),
                    Ot[r] = Ot[`data-${r}`] = yt(n) ? a : n
            },
            t.getComponents = s => (s == null ? void 0 : s[e]) || {},
            t.getComponent = (s, n) => t.getComponents(s)[n],
            t.connect = s => {
                if (s[e])
                    for (const n in s[e])
                        s[e][n]._callConnected();
                for (const n of s.getAttributeNames()) {
                    const o = en(n);
                    o && t[o](s)
                }
            },
            t.disconnect = s => {
                for (const n in s[e])
                    s[e][n]._callDisconnected()
            }
    }

    function en(t) {
        const e = Ot[t];
        return e && (yt(e) ? e : e.options).name
    }
    const it = function(t) {
        this._init(t)
    };
    it.util = nr,
        it.data = "__uikit__",
        it.prefix = "bdt-",
        it.options = {},
        it.version = "3.16.3",
        or(it),
        rr(it),
        ar(it),
        gr(it),
        pr(it);

    function mr(t) {
        const {
            connect: e,
            disconnect: i
        } = t;
        if (!Rt || !window.MutationObserver)
            return;
        requestAnimationFrame(function() {
            m(document, "uikit:init", t),
                document.body && Ct(document.body, e),
                new MutationObserver(o => o.forEach(s)).observe(document, {
                    childList: !0,
                    subtree: !0
                }),
                new MutationObserver(o => o.forEach(n)).observe(document, {
                    attributes: !0,
                    subtree: !0
                }),
                t._initialized = !0
        });

        function s({
            addedNodes: o,
            removedNodes: r
        }) {
            for (const a of o)
                Ct(a, e);
            for (const a of r)
                Ct(a, i)
        }

        function n({
            target: o,
            attributeName: r
        }) {
            var a;
            const l = en(r);
            if (l) {
                if (wt(o, r)) {
                    t[l](o);
                    return
                }
                (a = t.getComponent(o, l)) == null || a.$destroy()
            }
        }
    }
    var st = {
            connected() {
                y(this.$el, this.$options.id)
            }
        },
        Oe = {
            data: {
                preload: 5
            },
            methods: {
                lazyload(t = this.$el, e = this.$el) {
                    this.registerObserver(ce(t, (i, s) => {
                        for (const n of k(dt(e) ? e() : e))
                            O('[loading="lazy"]', n).slice(0, this.preload - 1).forEach(o => $e(o, "loading"));
                        for (const n of i.filter(({
                                isIntersecting: o
                            }) => o).map(({
                                target: o
                            }) => o))
                            s.unobserve(n)
                    }))
                }
            }
        },
        Yt = {
            props: {
                cls: Boolean,
                animation: "list",
                duration: Number,
                velocity: Number,
                origin: String,
                transition: String
            },
            data: {
                cls: !1,
                animation: [!1],
                duration: 200,
                velocity: .2,
                origin: !1,
                transition: "ease",
                clsEnter: "bdt-togglabe-enter",
                clsLeave: "bdt-togglabe-leave"
            },
            computed: {
                hasAnimation({
                    animation: t
                }) {
                    return !!t[0]
                },
                hasTransition({
                    animation: t
                }) {
                    return ["slide", "reveal"].some(e => ht(t[0], e))
                }
            },
            methods: {
                toggleElement(t, e, i) {
                    return new Promise(s => Promise.all(k(t).map(n => {
                        const o = Ii(e) ? e : !this.isToggled(n);
                        if (!m(n, `before${o ? "show" : "hide"}`, [this]))
                            return Promise.reject();
                        const r = (dt(i) ? i : i === !1 || !this.hasAnimation ? vr : this.hasTransition ? wr : br)(n, o, this),
                            a = o ? this.clsEnter : this.clsLeave;
                        y(n, a),
                            m(n, o ? "show" : "hide", [this]);
                        const l = () => {
                            z(n, a),
                                m(n, o ? "shown" : "hidden", [this])
                        };
                        return r ? r.then(l, () => (z(n, a),
                            Promise.reject())) : l()
                    })).then(s, P))
                },
                isToggled(t = this.$el) {
                    return [t] = k(t),
                        B(t, this.clsEnter) ? !0 : B(t, this.clsLeave) ? !1 : this.cls ? B(t, this.cls.split(" ")[0]) : q(t)
                },
                _toggle(t, e) {
                    if (!t)
                        return;
                    e = Boolean(e);
                    let i;
                    this.cls ? (i = v(this.cls, " ") || e !== B(t, this.cls),
                            i && j(t, this.cls, v(this.cls, " ") ? void 0 : e)) : (i = e === t.hidden,
                            i && (t.hidden = !e)),
                        O("[autofocus]", t).some(s => q(s) ? s.focus() || !0 : s.blur()),
                        i && m(t, "toggled", [e, this])
                }
            }
        };

    function vr(t, e, {
        _toggle: i
    }) {
        return pt.cancel(t),
            S.cancel(t),
            i(t, e)
    }
    async function wr(t, e, {
        animation: i,
        duration: s,
        velocity: n,
        transition: o,
        _toggle: r
    }) {
        var a;
        const [l = "reveal", c = "top"] = ((a = i[0]) == null ? void 0 : a.split("-")) || [], u = [
            ["left", "right"],
            ["top", "bottom"]
        ], d = u[v(u[0], c) ? 0 : 1], p = d[1] === c, T = ["width", "height"][u.indexOf(d)], F = `margin-${d[0]}`, M = `margin-${c}`;
        let Bt = b(t)[T];
        const vs = S.inProgress(t);
        await S.cancel(t),
            e && r(t, !0);
        const rh = Object.fromEntries(["padding", "border", "width", "height", "minWidth", "minHeight", "overflowY", "overflowX", F, M].map(vo => [vo, t.style[vo]])),
            Re = b(t),
            ws = $(h(t, F)),
            po = $(h(t, M)),
            Kt = Re[T] + po;
        !vs && !e && (Bt += po);
        const [Ci] = qi(t, "<div>");
        h(Ci, {
                boxSizing: "border-box",
                height: Re.height,
                width: Re.width,
                ...h(t, ["overflow", "padding", "borderTop", "borderRight", "borderBottom", "borderLeft", "borderImage", M])
            }),
            h(t, {
                padding: 0,
                border: 0,
                minWidth: 0,
                minHeight: 0,
                [M]: 0,
                width: Re.width,
                height: Re.height,
                overflow: "hidden",
                [T]: Bt
            });
        const go = Bt / Kt;
        s = (n * Kt + s) * (e ? 1 - go : go);
        const mo = {
            [T]: e ? Kt : 0
        };
        p && (h(t, F, Kt - Bt + ws),
            mo[F] = e ? ws : Kt + ws), !p ^ l === "reveal" && (h(Ci, F, -Kt + Bt),
            S.start(Ci, {
                [F]: e ? 0 : -Kt
            }, s, o));
        try {
            await S.start(t, mo, s, o)
        } finally {
            h(t, rh),
                _e(Ci.firstChild),
                e || r(t, !1)
        }
    }

    function br(t, e, i) {
        pt.cancel(t);
        const {
            animation: s,
            duration: n,
            _toggle: o
        } = i;
        return e ? (o(t, !0),
            pt.in(t, s[0], n, i.origin)) : pt.out(t, s[1] || s[0], n, i.origin).then(() => o(t, !1))
    }

    function sn(t) {
        return Math.ceil(Math.max(0, ...O("[stroke]", t).map(e => {
            try {
                return e.getTotalLength()
            } catch {
                return 0
            }
        })))
    }
    let es;

    function nn(t) {
        const e = x(t, "touchmove", s => {
            if (s.targetTouches.length !== 1)
                return;
            let [{
                scrollHeight: n,
                clientHeight: o
            }] = mt(s.target);
            o >= n && s.cancelable && s.preventDefault()
        }, {
            passive: !1
        });
        if (es)
            return e;
        es = !0;
        const {
            scrollingElement: i
        } = document;
        return h(i, {
                overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden",
                touchAction: "none",
                paddingRight: Ee(window) - i.clientWidth || ""
            }),
            () => {
                es = !1,
                    e(),
                    h(i, {
                        overflowY: "",
                        touchAction: "",
                        paddingRight: ""
                    })
            }
    }

    function De(t) {
        return ["origin", "pathname", "search"].every(e => t[e] === location[e])
    }

    function on(t) {
        if (De(t)) {
            const e = decodeURIComponent(t.hash).substring(1);
            return document.getElementById(e) || document.getElementsByName(e)[0]
        }
    }

    function Dt(t, e = t.$el, i = "") {
        if (e.id)
            return e.id;
        let s = `${t.$options.id}-${t._uid}${i}`;
        return w(`#${s}`) && (s = Dt(t, e, `${i}-2`)),
            s
    }
    const C = {
        TAB: 9,
        ESC: 27,
        SPACE: 32,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    };
    var rn = {
        mixins: [st, Oe, Yt],
        props: {
            animation: Boolean,
            targets: String,
            active: null,
            collapsible: Boolean,
            multiple: Boolean,
            toggle: String,
            content: String,
            offset: Number
        },
        data: {
            targets: "> *",
            active: !1,
            animation: !0,
            collapsible: !0,
            multiple: !1,
            clsOpen: "bdt-open",
            toggle: "> .bdt-accordion-title",
            content: "> .bdt-accordion-content",
            offset: 0
        },
        computed: {
            items: {
                get({
                    targets: t
                }, e) {
                    return O(t, e)
                },
                watch(t, e) {
                    if (e || B(t, this.clsOpen))
                        return;
                    const i = this.active !== !1 && t[Number(this.active)] || !this.collapsible && t[0];
                    i && this.toggle(i, !1)
                },
                immediate: !0
            },
            toggles: {
                get({
                    toggle: t
                }) {
                    return this.items.map(e => w(t, e))
                },
                watch() {
                    this.$emit()
                },
                immediate: !0
            },
            contents: {
                get({
                    content: t
                }) {
                    return this.items.map(e => {
                        var i;
                        return ((i = e._wrapper) == null ? void 0 : i.firstElementChild) || w(t, e)
                    })
                },
                watch(t) {
                    for (const e of t)
                        li(e, !B(this.items.find(i => D(e, i)), this.clsOpen));
                    this.$emit()
                },
                immediate: !0
            }
        },
        connected() {
            this.lazyload()
        },
        events: [{
            name: "click keydown",
            delegate() {
                return `${this.targets} ${this.$props.toggle}`
            },
            async handler(t) {
                var e;
                t.type === "keydown" && t.keyCode !== C.SPACE || (t.preventDefault(),
                    (e = this._off) == null || e.call(this),
                    this._off = xr(t.target),
                    await this.toggle(oe(this.toggles, t.current)),
                    this._off())
            }
        }, {
            name: "shown hidden",
            self: !0,
            delegate() {
                return this.targets
            },
            handler() {
                this.$emit()
            }
        }],
        update() {
            const t = ke(this.items, `.${this.clsOpen}`);
            for (const e in this.items) {
                const i = this.toggles[e],
                    s = this.contents[e];
                if (!i || !s)
                    continue;
                i.id = Dt(this, i, `-title-${e}`),
                    s.id = Dt(this, s, `-content-${e}`);
                const n = v(t, this.items[e]);
                f(i, {
                        role: X(i, "a") ? "button" : null,
                        "aria-controls": s.id,
                        "aria-expanded": n,
                        "aria-disabled": !this.collapsible && t.length < 2 && n
                    }),
                    f(s, {
                        role: "region",
                        "aria-labelledby": i.id
                    })
            }
        },
        methods: {
            async toggle(t, e) {
                t = this.items[ct(t, this.items)];
                let i = [t];
                const s = ke(this.items, `.${this.clsOpen}`);
                !this.multiple && !v(s, i[0]) && (i = i.concat(s)), !(!this.collapsible && s.length < 2 && v(s, t)) && await Promise.all(i.map(n => this.toggleElement(n, !v(s, n), (o, r) => {
                    if (j(o, this.clsOpen, r),
                        e === !1 || !this.animation) {
                        li(w(this.content, o), !r);
                        return
                    }
                    return $r(o, r, this)
                })))
            }
        }
    };

    function li(t, e) {
        t && (t.hidden = e)
    }
    async function $r(t, e, {
        content: i,
        duration: s,
        velocity: n,
        transition: o
    }) {
        var r;
        i = ((r = t._wrapper) == null ? void 0 : r.firstElementChild) || w(i, t),
            t._wrapper || (t._wrapper = Ue(i, "<div>"));
        const a = t._wrapper;
        h(a, "overflow", "hidden");
        const l = $(h(a, "height"));
        await S.cancel(a),
            li(i, !1);
        const c = Nt(["marginTop", "marginBottom"], d => h(i, d)) + b(i).height,
            u = l / c;
        s = (n * c + s) * (e ? 1 - u : u),
            h(a, "height", l),
            await S.start(a, {
                height: e ? c : 0
            }, s, o),
            _e(i),
            delete t._wrapper,
            e || li(i, !0)
    }

    function xr(t) {
        const [e] = mt(t, !0);
        let i;
        return function s() {
                i = requestAnimationFrame(() => {
                    const {
                        top: n
                    } = t.getBoundingClientRect();
                    n < 0 && (e.scrollTop += n),
                        s()
                })
            }(),
            () => requestAnimationFrame(() => cancelAnimationFrame(i))
    }
    var yr = {
        mixins: [st, Yt],
        args: "animation",
        props: {
            animation: Boolean,
            close: String
        },
        data: {
            animation: !0,
            selClose: ".bdt-alert-close",
            duration: 150
        },
        events: {
            name: "click",
            delegate() {
                return this.selClose
            },
            handler(t) {
                t.preventDefault(),
                    this.close()
            }
        },
        methods: {
            async close() {
                await this.toggleElement(this.$el, !1, kr),
                    this.$destroy(!0)
            }
        }
    };

    function kr(t, e, {
        duration: i,
        transition: s,
        velocity: n
    }) {
        const o = $(h(t, "height"));
        return h(t, "height", o),
            S.start(t, {
                height: 0,
                marginTop: 0,
                marginBottom: 0,
                paddingTop: 0,
                paddingBottom: 0,
                borderTop: 0,
                borderBottom: 0,
                opacity: 0
            }, n * o + i, s)
    }
    var an = {
            args: "autoplay",
            props: {
                automute: Boolean,
                autoplay: Boolean
            },
            data: {
                automute: !1,
                autoplay: !0
            },
            connected() {
                this.inView = this.autoplay === "inview",
                    this.inView && !wt(this.$el, "preload") && (this.$el.preload = "none"),
                    X(this.$el, "iframe") && !wt(this.$el, "allow") && (this.$el.allow = "autoplay"),
                    this.automute && Hs(this.$el),
                    this.registerObserver(ce(this.$el, () => this.$emit(), {}, !1))
            },
            update: {
                read({
                    visible: t
                }) {
                    return Ls(this.$el) ? {
                        prev: t,
                        visible: q(this.$el) && h(this.$el, "visibility") !== "hidden",
                        inView: this.inView && Zi(this.$el)
                    } : !1
                },
                write({
                    prev: t,
                    visible: e,
                    inView: i
                }) {
                    !e || this.inView && !i ? Fs(this.$el) : (this.autoplay === !0 && !t || this.inView && i) && zs(this.$el)
                }
            }
        },
        bt = {
            connected() {
                var t;
                this.registerObserver(Pe(((t = this.$options.resizeTargets) == null ? void 0 : t.call(this)) || this.$el, () => this.$emit("resize")))
            }
        },
        Sr = {
            mixins: [bt, an],
            props: {
                width: Number,
                height: Number
            },
            data: {
                automute: !0
            },
            events: {
                "load loadedmetadata" () {
                    this.$emit("resize")
                }
            },
            resizeTargets() {
                return [this.$el, ln(this.$el) || A(this.$el)]
            },
            update: {
                read() {
                    const {
                        ratio: t,
                        cover: e
                    } = Ge, {
                        $el: i,
                        width: s,
                        height: n
                    } = this;
                    let o = {
                        width: s,
                        height: n
                    };
                    if (!o.width || !o.height) {
                        const c = {
                            width: i.naturalWidth || i.videoWidth || i.clientWidth,
                            height: i.naturalHeight || i.videoHeight || i.clientHeight
                        };
                        o.width ? o = t(c, "width", o.width) : n ? o = t(c, "height", o.height) : o = c
                    }
                    const {
                        offsetHeight: r,
                        offsetWidth: a
                    } = ln(i) || A(i), l = e(o, {
                        width: a + (a % 2 ? 1 : 0),
                        height: r + (r % 2 ? 1 : 0)
                    });
                    return !l.width || !l.height ? !1 : l
                },
                write({
                    height: t,
                    width: e
                }) {
                    h(this.$el, {
                        height: t,
                        width: e
                    })
                },
                events: ["resize"]
            }
        };

    function ln(t) {
        for (; t = A(t);)
            if (h(t, "position") !== "static")
                return t
    }
    var Be = {
            props: {
                container: Boolean
            },
            data: {
                container: !0
            },
            computed: {
                container({
                    container: t
                }) {
                    return t === !0 && this.$container || t && w(t)
                }
            }
        },
        hn = {
            props: {
                pos: String,
                offset: null,
                flip: Boolean,
                shift: Boolean,
                inset: Boolean
            },
            data: {
                pos: `bottom-${J ? "right" : "left"}`,
                offset: !1,
                flip: !0,
                shift: !0,
                inset: !1
            },
            connected() {
                this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), [this.dir, this.align] = this.pos,
                    this.axis = v(["top", "bottom"], this.dir) ? "y" : "x"
            },
            methods: {
                positionAt(t, e, i) {
                    let s = [this.getPositionOffset(t), this.getShiftOffset(t)];
                    const n = [this.flip && "flip", this.shift && "shift"],
                        o = {
                            element: [this.inset ? this.dir : ei(this.dir), this.align],
                            target: [this.dir, this.align]
                        };
                    if (this.axis === "y") {
                        for (const l in o)
                            o[l].reverse();
                        s.reverse(),
                            n.reverse()
                    }
                    const r = Tr(t),
                        a = b(t);
                    h(t, {
                            top: -a.height,
                            left: -a.width
                        }),
                        Ys(t, e, {
                            attach: o,
                            offset: s,
                            boundary: i,
                            placement: n,
                            viewportOffset: this.getViewportOffset(t)
                        }),
                        r()
                },
                getPositionOffset(t) {
                    return rt(this.offset === !1 ? h(t, "--bdt-position-offset") : this.offset, this.axis === "x" ? "width" : "height", t) * (v(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1)
                },
                getShiftOffset(t) {
                    return this.align === "center" ? 0 : rt(h(t, "--bdt-position-shift-offset"), this.axis === "y" ? "width" : "height", t) * (v(["left", "top"], this.align) ? 1 : -1)
                },
                getViewportOffset(t) {
                    return rt(h(t, "--bdt-position-viewport-offset"))
                }
            }
        };

    function Tr(t) {
        const [e] = mt(t), {
            scrollTop: i
        } = e;
        return () => {
            i !== e.scrollTop && (e.scrollTop = i)
        }
    }
    let Z;
    var cn = {
        mixins: [Be, Oe, hn, Yt],
        args: "pos",
        props: {
            mode: "list",
            toggle: Boolean,
            boundary: Boolean,
            boundaryX: Boolean,
            boundaryY: Boolean,
            target: Boolean,
            targetX: Boolean,
            targetY: Boolean,
            stretch: Boolean,
            delayShow: Number,
            delayHide: Number,
            autoUpdate: Boolean,
            clsDrop: String,
            animateOut: Boolean,
            bgScroll: Boolean
        },
        data: {
            mode: ["click", "hover"],
            toggle: "- *",
            boundary: !1,
            boundaryX: !1,
            boundaryY: !1,
            target: !1,
            targetX: !1,
            targetY: !1,
            stretch: !1,
            delayShow: 0,
            delayHide: 800,
            autoUpdate: !0,
            clsDrop: !1,
            animateOut: !1,
            bgScroll: !0,
            animation: ["bdt-animation-fade"],
            cls: "bdt-open",
            container: !1
        },
        computed: {
            boundary({
                boundary: t,
                boundaryX: e,
                boundaryY: i
            }, s) {
                return [ut(e || t, s) || window, ut(i || t, s) || window]
            },
            target({
                target: t,
                targetX: e,
                targetY: i
            }, s) {
                return e = e || t || this.targetEl,
                    i = i || t || this.targetEl, [e === !0 ? window : ut(e, s), i === !0 ? window : ut(i, s)]
            }
        },
        created() {
            this.tracker = new Gi
        },
        beforeConnect() {
            this.clsDrop = this.$props.clsDrop || `bdt-${this.$options.name}`
        },
        connected() {
            y(this.$el, "bdt-drop", this.clsDrop),
                this.toggle && !this.targetEl && (this.targetEl = Er(this)),
                this._style = (({
                    width: t,
                    height: e
                }) => ({
                    width: t,
                    height: e
                }))(this.$el.style)
        },
        disconnected() {
            this.isActive() && (this.hide(!1),
                    Z = null),
                h(this.$el, this._style)
        },
        events: [{
            name: "click",
            delegate() {
                return ".bdt-drop-close"
            },
            handler(t) {
                t.preventDefault(),
                    this.hide(!1)
            }
        }, {
            name: "click",
            delegate() {
                return 'a[href*="#"]'
            },
            handler({
                defaultPrevented: t,
                current: e
            }) {
                const {
                    hash: i
                } = e;
                !t && i && De(e) && !D(i, this.$el) && this.hide(!1)
            }
        }, {
            name: "beforescroll",
            handler() {
                this.hide(!1)
            }
        }, {
            name: "toggle",
            self: !0,
            handler(t, e) {
                t.preventDefault(),
                    this.isToggled() ? this.hide(!1) : this.show(e == null ? void 0 : e.$el, !1)
            }
        }, {
            name: "toggleshow",
            self: !0,
            handler(t, e) {
                t.preventDefault(),
                    this.show(e == null ? void 0 : e.$el)
            }
        }, {
            name: "togglehide",
            self: !0,
            handler(t) {
                t.preventDefault(),
                    _(this.$el, ":focus,:hover") || this.hide()
            }
        }, {
            name: `${At} focusin`,
            filter() {
                return v(this.mode, "hover")
            },
            handler(t) {
                Tt(t) || this.clearTimers()
            }
        }, {
            name: `${qt} focusout`,
            filter() {
                return v(this.mode, "hover")
            },
            handler(t) {
                !Tt(t) && t.relatedTarget && this.hide()
            }
        }, {
            name: "toggled",
            self: !0,
            handler(t, e) {
                f(this.targetEl, "aria-expanded", e ? !0 : null),
                    e && (this.clearTimers(),
                        this.position())
            }
        }, {
            name: "show",
            self: !0,
            handler() {
                Z = this,
                    this.tracker.init();
                const t = [Ir(this), Ar(this), Or(this), this.autoUpdate && Pr(this), !this.bgScroll && nn(this.$el)];
                L(this.$el, "hide", () => t.forEach(e => e && e()), {
                    self: !0
                })
            }
        }, {
            name: "beforehide",
            self: !0,
            handler() {
                this.clearTimers()
            }
        }, {
            name: "hide",
            handler({
                target: t
            }) {
                if (this.$el !== t) {
                    Z = Z === null && D(t, this.$el) && this.isToggled() ? this : Z;
                    return
                }
                Z = this.isActive() ? null : Z,
                    this.tracker.cancel()
            }
        }],
        update: {
            write() {
                this.isToggled() && !B(this.$el, this.clsEnter) && this.position()
            }
        },
        methods: {
            show(t = this.targetEl, e = !0) {
                if (this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(!1, !1),
                    this.targetEl = t,
                    this.clearTimers(), !this.isActive()) {
                    if (Z) {
                        if (e && Z.isDelaying) {
                            this.showTimer = setTimeout(() => _(t, ":hover") && this.show(), 10);
                            return
                        }
                        let i;
                        for (; Z && i !== Z && !D(this.$el, Z.$el);)
                            i = Z,
                            Z.hide(!1, !1)
                    }
                    this.container && A(this.$el) !== this.container && W(this.container, this.$el),
                        this.showTimer = setTimeout(() => this.toggleElement(this.$el, !0), e && this.delayShow || 0)
                }
            },
            hide(t = !0, e = !0) {
                const i = () => this.toggleElement(this.$el, !1, this.animateOut && e);
                this.clearTimers(),
                    this.isDelaying = Cr(this.$el).some(s => this.tracker.movesTo(s)),
                    t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i()
            },
            clearTimers() {
                clearTimeout(this.showTimer),
                    clearTimeout(this.hideTimer),
                    this.showTimer = null,
                    this.hideTimer = null,
                    this.isDelaying = !1
            },
            isActive() {
                return Z === this
            },
            position() {
                z(this.$el, "bdt-drop-stack"),
                    h(this.$el, this._style),
                    this.$el.hidden = !0;
                const t = this.target.map(n => _r(this.$el, n)),
                    e = this.getViewportOffset(this.$el),
                    i = [
                        [0, ["x", "width", "left", "right"]],
                        [1, ["y", "height", "top", "bottom"]]
                    ];
                for (const [n, [o, r]] of i)
                    this.axis !== o && v([o, !0], this.stretch) && h(this.$el, {
                        [r]: Math.min(I(this.boundary[n])[r], t[n][r] - 2 * e),
                        [`overflow-${o}`]: "auto"
                    });
                const s = t[0].width - 2 * e;
                this.$el.hidden = !1,
                    h(this.$el, "maxWidth", ""),
                    this.$el.offsetWidth > s && y(this.$el, "bdt-drop-stack"),
                    h(this.$el, "maxWidth", s),
                    this.positionAt(this.$el, this.target, this.boundary);
                for (const [n, [o, r, a, l]] of i)
                    if (this.axis === o && v([o, !0], this.stretch)) {
                        const c = Math.abs(this.getPositionOffset(this.$el)),
                            u = I(this.target[n]),
                            d = I(this.$el);
                        h(this.$el, {
                                [r]: (u[a] > d[a] ? u[a] - Math.max(I(this.boundary[n])[a], t[n][a] + e) : Math.min(I(this.boundary[n])[l], t[n][l] - e) - u[l]) - c,
                                [`overflow-${o}`]: "auto"
                            }),
                            this.positionAt(this.$el, this.target, this.boundary)
                    }
            }
        }
    };

    function Cr(t) {
        const e = [];
        return Ct(t, i => h(i, "position") !== "static" && e.push(i)),
            e
    }

    function _r(t, e) {
        return at(Vt(e).find(i => D(t, i)))
    }

    function Er(t) {
        const {
            $el: e
        } = t.$create("toggle", ut(t.toggle, t.$el), {
            target: t.$el,
            mode: t.mode
        });
        return f(e, "aria-haspopup", !0),
            t.lazyload(e),
            e
    }

    function Ir(t) {
        const e = () => t.$emit(),
            i = x(window, "resize", e),
            s = Pe(Vt(t.$el).concat(t.target), e);
        return () => {
            s.disconnect(),
                i()
        }
    }

    function Pr(t) {
        return x([document, ...Vt(t.$el)], "scroll", () => t.$emit(), {
            passive: !0
        })
    }

    function Ar(t) {
        return x(document, "keydown", e => {
            e.keyCode === C.ESC && t.hide(!1)
        })
    }

    function Or(t) {
        return x(document, gt, ({
            target: e
        }) => {
            D(e, t.$el) || L(document, `${Pt} ${si} scroll`, ({
                defaultPrevented: i,
                type: s,
                target: n
            }) => {
                !i && s === Pt && e === n && !(t.targetEl && D(e, t.targetEl)) && t.hide(!1)
            }, !0)
        })
    }
    var un = {
        mixins: [st, Be],
        props: {
            dropdown: String,
            align: String,
            clsDrop: String,
            boundary: Boolean,
            dropbar: Boolean,
            dropbarAnchor: Boolean,
            duration: Number,
            mode: Boolean,
            offset: Boolean,
            stretch: Boolean,
            delayShow: Boolean,
            delayHide: Boolean,
            target: Boolean,
            targetX: Boolean,
            targetY: Boolean,
            animation: Boolean,
            animateOut: Boolean
        },
        data: {
            dropdown: "> li > a, > ul > li > a",
            align: J ? "right" : "left",
            clsDrop: "bdt-dropdown",
            clsDropbar: "bdt-dropnav-dropbar",
            boundary: !0,
            dropbar: !1,
            dropbarAnchor: !1,
            duration: 200,
            container: !1
        },
        computed: {
            dropbarAnchor({
                dropbarAnchor: t
            }, e) {
                return ut(t, e) || e
            },
            dropbar: {
                get({
                    dropbar: t
                }) {
                    return t ? (t = this._dropbar || ut(t, this.$el) || w(`+ .${this.clsDropbar}`, this.$el),
                        t || (this._dropbar = w("<div></div>"))) : null
                },
                watch(t) {
                    y(t, "bdt-dropbar", "bdt-dropbar-top", this.clsDropbar, `bdt-${this.$options.name}-dropbar`)
                },
                immediate: !0
            },
            dropContainer(t, e) {
                return this.container || e
            },
            dropdowns: {
                get({
                    clsDrop: t
                }, e) {
                    var i;
                    const s = O(`.${t}`, e);
                    if (this.dropContainer !== e)
                        for (const n of O(`.${t}`, this.dropContainer)) {
                            const o = (i = this.getDropdown(n)) == null ? void 0 : i.targetEl;
                            !v(s, n) && o && D(o, this.$el) && s.push(n)
                        }
                    return s
                },
                watch(t) {
                    this.$create("drop", t.filter(e => !this.getDropdown(e)), {
                        ...this.$props,
                        flip: !1,
                        shift: !0,
                        pos: `bottom-${this.align}`,
                        boundary: this.boundary === !0 ? this.$el : this.boundary
                    })
                },
                immediate: !0
            },
            items: {
                get({
                    dropdown: t
                }, e) {
                    return O(t, e)
                },
                watch(t) {
                    f(E(this.$el), "role", "presentation"),
                        f(t, {
                            tabindex: -1,
                            role: "menuitem"
                        }),
                        f(t[0], "tabindex", 0)
                },
                immediate: !0
            }
        },
        connected() {
            f(this.$el, "role", "menubar")
        },
        disconnected() {
            ot(this._dropbar),
                delete this._dropbar
        },
        events: [{
            name: "mouseover focusin",
            delegate() {
                return this.dropdown
            },
            handler({
                current: t,
                type: e
            }) {
                const i = this.getActive();
                if (i && v(i.mode, "hover") && i.targetEl && !D(i.targetEl, t) && !i.isDelaying && i.hide(!1),
                    e === "focusin")
                    for (const s of this.items)
                        f(s, "tabindex", t === s ? 0 : -1)
            }
        }, {
            name: "keydown",
            delegate() {
                return this.dropdown
            },
            handler(t) {
                const {
                    current: e,
                    keyCode: i
                } = t, s = this.getActive();
                i === C.DOWN && wt(e, "aria-expanded") && (t.preventDefault(), !s || s.targetEl !== e ? (e.click(),
                        L(this.dropContainer, "show", ({
                            target: n
                        }) => fn(n))) : fn(s.$el)),
                    dn(t, this.items, s)
            }
        }, {
            name: "keydown",
            el() {
                return this.dropContainer
            },
            delegate() {
                return `.${this.clsDrop}`
            },
            handler(t) {
                var e;
                const {
                    current: i,
                    keyCode: s
                } = t;
                if (!v(this.dropdowns, i))
                    return;
                const n = this.getActive();
                let o = -1;
                if (s === C.HOME ? o = 0 : s === C.END ? o = "last" : s === C.UP ? o = "previous" : s === C.DOWN ? o = "next" : s === C.ESC && ((e = n.targetEl) == null || e.focus()), ~o) {
                    t.preventDefault();
                    const r = O(ye, i);
                    r[ct(o, r, $t(r, a => _(a, ":focus")))].focus()
                }
                dn(t, this.items, n)
            }
        }, {
            name: "mouseleave",
            el() {
                return this.dropbar
            },
            filter() {
                return this.dropbar
            },
            handler() {
                const t = this.getActive();
                t && v(t.mode, "hover") && !this.dropdowns.some(e => _(e, ":hover")) && t.hide()
            }
        }, {
            name: "beforeshow",
            el() {
                return this.dropContainer
            },
            filter() {
                return this.dropbar
            },
            handler({
                target: t
            }) {
                this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && Ze(this.dropbarAnchor, this.dropbar),
                    y(t, `${this.clsDrop}-dropbar`))
            }
        }, {
            name: "show",
            el() {
                return this.dropContainer
            },
            filter() {
                return this.dropbar
            },
            handler({
                target: t
            }) {
                if (!this.isDropbarDrop(t))
                    return;
                const e = this.getDropdown(t),
                    i = () => {
                        const s = ne(t, `.${this.clsDrop}`).concat(t).map(a => I(a)),
                            n = Math.min(...s.map(({
                                top: a
                            }) => a)),
                            o = Math.max(...s.map(({
                                bottom: a
                            }) => a)),
                            r = I(this.dropbar);
                        h(this.dropbar, "top", this.dropbar.offsetTop - (r.top - n)),
                            this.transitionTo(o - n + $(h(t, "marginBottom")), t)
                    };
                this._observer = Pe([e.$el, ...e.target], i),
                    i()
            }
        }, {
            name: "beforehide",
            el() {
                return this.dropContainer
            },
            filter() {
                return this.dropbar
            },
            handler(t) {
                const e = this.getActive();
                _(this.dropbar, ":hover") && e.$el === t.target && !this.items.some(i => e.targetEl !== i && _(i, ":focus")) && t.preventDefault()
            }
        }, {
            name: "hide",
            el() {
                return this.dropContainer
            },
            filter() {
                return this.dropbar
            },
            handler({
                target: t
            }) {
                var e;
                if (!this.isDropbarDrop(t))
                    return;
                (e = this._observer) == null || e.disconnect();
                const i = this.getActive();
                (!i || i.$el === t) && this.transitionTo(0)
            }
        }],
        methods: {
            getActive() {
                var t;
                return v(this.dropdowns, (t = Z) == null ? void 0 : t.$el) && Z
            },
            async transitionTo(t, e) {
                const {
                    dropbar: i
                } = this, s = et(i);
                e = s < t && e,
                    await S.cancel([e, i]),
                    h(e, "clipPath", `polygon(0 0,100% 0,100% ${s}px,0 ${s}px)`),
                    et(i, s),
                    await Promise.all([S.start(i, {
                        height: t
                    }, this.duration), S.start(e, {
                        clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)`
                    }, this.duration).finally(() => h(e, {
                        clipPath: ""
                    }))]).catch(P)
            },
            getDropdown(t) {
                return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown")
            },
            isDropbarDrop(t) {
                return this.getDropdown(t) && B(t, this.clsDrop)
            }
        }
    };

    function dn(t, e, i) {
        var s, n, o;
        const {
            current: r,
            keyCode: a
        } = t;
        let l = -1;
        a === C.HOME ? l = 0 : a === C.END ? l = "last" : a === C.LEFT ? l = "previous" : a === C.RIGHT ? l = "next" : a === C.TAB && ((s = i.targetEl) == null || s.focus(),
            (n = i.hide) == null || n.call(i, !1)), ~l && (t.preventDefault(),
            (o = i.hide) == null || o.call(i, !1),
            e[ct(l, e, e.indexOf(i.targetEl || r))].focus())
    }

    function fn(t) {
        var e;
        w(":focus", t) || (e = w(ye, t)) == null || e.focus()
    }
    var Dr = {
            mixins: [st],
            args: "target",
            props: {
                target: Boolean
            },
            data: {
                target: !1
            },
            computed: {
                input(t, e) {
                    return w(xe, e)
                },
                state() {
                    return this.input.nextElementSibling
                },
                target({
                    target: t
                }, e) {
                    return t && (t === !0 && A(this.input) === e && this.input.nextElementSibling || w(t, e))
                }
            },
            update() {
                var t;
                const {
                    target: e,
                    input: i
                } = this;
                if (!e)
                    return;
                let s;
                const n = Mi(e) ? "value" : "textContent",
                    o = e[n],
                    r = (t = i.files) != null && t[0] ? i.files[0].name : _(i, "select") && (s = O("option", i).filter(a => a.selected)[0]) ? s.textContent : i.value;
                o !== r && (e[n] = r)
            },
            events: [{
                name: "change",
                handler() {
                    this.$emit()
                }
            }, {
                name: "reset",
                el() {
                    return Y(this.$el, "form")
                },
                handler() {
                    this.$emit()
                }
            }]
        },
        pn = {
            mixins: [bt],
            props: {
                margin: String,
                firstColumn: Boolean
            },
            data: {
                margin: "bdt-margin-small-top",
                firstColumn: "bdt-first-column"
            },
            resizeTargets() {
                return [this.$el, ..._i(this.$el.children)]
            },
            connected() {
                this.registerObserver(Bs(this.$el, () => this.$reset(), {
                    childList: !0,
                    attributes: !0,
                    attributeFilter: ["style"]
                }))
            },
            update: {
                read() {
                    const t = is(this.$el.children);
                    return {
                        rows: t,
                        columns: Br(t)
                    }
                },
                write({
                    columns: t,
                    rows: e
                }) {
                    for (const i of e)
                        for (const s of i)
                            j(s, this.margin, e[0] !== i),
                            j(s, this.firstColumn, t[0].includes(s))
                },
                events: ["resize"]
            }
        };

    function is(t) {
        return gn(t, "top", "bottom")
    }

    function Br(t) {
        const e = [];
        for (const i of t) {
            const s = gn(i, "left", "right");
            for (let n = 0; n < s.length; n++)
                e[n] = e[n] ? e[n].concat(s[n]) : s[n]
        }
        return J ? e.reverse() : e
    }

    function gn(t, e, i) {
        const s = [
            []
        ];
        for (const n of t) {
            if (!q(n))
                continue;
            let o = hi(n);
            for (let r = s.length - 1; r >= 0; r--) {
                const a = s[r];
                if (!a[0]) {
                    a.push(n);
                    break
                }
                let l;
                if (a[0].offsetParent === n.offsetParent ? l = hi(a[0]) : (o = hi(n, !0),
                        l = hi(a[0], !0)),
                    o[e] >= l[i] - 1 && o[e] !== l[e]) {
                    s.push([n]);
                    break
                }
                if (o[i] - 1 > l[e] || o[e] === l[e]) {
                    a.push(n);
                    break
                }
                if (r === 0) {
                    s.unshift([n]);
                    break
                }
            }
        }
        return s
    }

    function hi(t, e = !1) {
        let {
            offsetTop: i,
            offsetLeft: s,
            offsetHeight: n,
            offsetWidth: o
        } = t;
        return e && ([i, s] = Wt(t)), {
            top: i,
            left: s,
            bottom: i + n,
            right: s + o
        }
    }
    var ci = {
        connected() {
            mn(this._uid, () => this.$emit("scroll"))
        },
        disconnected() {
            vn(this._uid)
        }
    };
    const ui = new Map;
    let Me;

    function mn(t, e) {
        Me = Me || x(window, "scroll", () => ui.forEach(i => i()), {
                passive: !0,
                capture: !0
            }),
            ui.set(t, e)
    }

    function vn(t) {
        ui.delete(t),
            Me && !ui.size && (Me(),
                Me = null)
    }
    var Mr = {
        extends: pn,
        mixins: [st],
        name: "grid",
        props: {
            masonry: Boolean,
            parallax: Number
        },
        data: {
            margin: "bdt-grid-margin",
            clsStack: "bdt-grid-stack",
            masonry: !1,
            parallax: 0
        },
        connected() {
            this.masonry && y(this.$el, "bdt-flex-top bdt-flex-wrap-top"),
                this.parallax && mn(this._uid, () => this.$emit("scroll"))
        },
        disconnected() {
            vn(this._uid)
        },
        update: [{
            write({
                columns: t
            }) {
                j(this.$el, this.clsStack, t.length < 2)
            },
            events: ["resize"]
        }, {
            read(t) {
                let {
                    columns: e,
                    rows: i
                } = t;
                if (!e.length || !this.masonry && !this.parallax || wn(this.$el))
                    return t.translates = !1, !1;
                let s = !1;
                const n = E(this.$el),
                    o = e.map(c => Nt(c, "offsetHeight")),
                    r = zr(n, this.margin) * (i.length - 1),
                    a = Math.max(...o) + r;
                this.masonry && (e = e.map(c => Ve(c, "offsetTop")),
                    s = Nr(i, e));
                let l = Math.abs(this.parallax);
                return l && (l = o.reduce((c, u, d) => Math.max(c, u + r + (d % 2 ? l : l / 8) - a), 0)), {
                    padding: l,
                    columns: e,
                    translates: s,
                    height: s ? a : ""
                }
            },
            write({
                height: t,
                padding: e
            }) {
                h(this.$el, "paddingBottom", e || ""),
                    t !== !1 && h(this.$el, "height", t)
            },
            events: ["resize"]
        }, {
            read() {
                return this.parallax && wn(this.$el) ? !1 : {
                    scrolled: this.parallax ? Qi(this.$el) * Math.abs(this.parallax) : !1
                }
            },
            write({
                columns: t,
                scrolled: e,
                translates: i
            }) {
                e === !1 && !i || t.forEach((s, n) => s.forEach((o, r) => h(o, "transform", !e && !i ? "" : `translateY(${(i && -i[n][r]) + (e ? n % 2 ? e : e / 8 : 0)}px)`)))
            },
            events: ["scroll", "resize"]
        }]
    };

    function wn(t) {
        return E(t).some(e => h(e, "position") === "absolute")
    }

    function Nr(t, e) {
        const i = t.map(s => Math.max(...s.map(n => n.offsetHeight)));
        return e.map(s => {
            let n = 0;
            return s.map((o, r) => n += r ? i[r - 1] - s[r - 1].offsetHeight : 0)
        })
    }

    function zr(t, e) {
        const [i] = t.filter(s => B(s, e));
        return $(i ? h(i, "marginTop") : h(t[0], "paddingLeft"))
    }
    var Fr = {
        mixins: [bt],
        args: "target",
        props: {
            target: String,
            row: Boolean
        },
        data: {
            target: "> *",
            row: !0
        },
        computed: {
            elements: {
                get({
                    target: t
                }, e) {
                    return O(t, e)
                },
                watch() {
                    this.$reset()
                }
            }
        },
        resizeTargets() {
            return [this.$el, ...this.elements]
        },
        update: {
            read() {
                return {
                    rows: (this.row ? is(this.elements) : [this.elements]).map(Hr)
                }
            },
            write({
                rows: t
            }) {
                for (const {
                        heights: e,
                        elements: i
                    } of t)
                    i.forEach((s, n) => h(s, "minHeight", e[n]))
            },
            events: ["resize"]
        }
    };

    function Hr(t) {
        if (t.length < 2)
            return {
                heights: [""],
                elements: t
            };
        h(t, "minHeight", "");
        let e = t.map(Lr);
        const i = Math.max(...e);
        return {
            heights: t.map((s, n) => e[n].toFixed(2) === i.toFixed(2) ? "" : i),
            elements: t
        }
    }

    function Lr(t) {
        let e = !1;
        q(t) || (e = t.style.display,
            h(t, "display", "block", "important"));
        const i = b(t).height - ae(t, "height", "content-box");
        return e !== !1 && h(t, "display", e),
            i
    }
    var Wr = {
            mixins: [bt],
            props: {
                expand: Boolean,
                offsetTop: Boolean,
                offsetBottom: Boolean,
                minHeight: Number
            },
            data: {
                expand: !1,
                offsetTop: !1,
                offsetBottom: !1,
                minHeight: 0
            },
            resizeTargets() {
                return [this.$el, ...mt(this.$el)]
            },
            update: {
                read({
                    minHeight: t
                }) {
                    if (!q(this.$el))
                        return !1;
                    let e = "";
                    const i = ae(this.$el, "height", "content-box"),
                        {
                            body: s,
                            scrollingElement: n
                        } = document,
                        [o] = mt(this.$el),
                        {
                            height: r
                        } = at(o === s ? n : o);
                    if (this.expand)
                        e = Math.max(r - (b(o).height - b(this.$el).height) - i, 0);
                    else {
                        const a = n === o || s === o;
                        if (e = `calc(${a ? "100vh" : `${r}px`}`,
                            this.offsetTop)
                            if (a) {
                                const l = Wt(this.$el)[0] - Wt(o)[0];
                                e += l > 0 && l < r / 2 ? ` - ${l}px` : ""
                            } else
                                e += ` - ${h(o, "paddingTop")}`;
                        this.offsetBottom === !0 ? e += ` - ${b(this.$el.nextElementSibling).height}px` : vt(this.offsetBottom) ? e += ` - ${this.offsetBottom}vh` : this.offsetBottom && Qt(this.offsetBottom, "px") ? e += ` - ${$(this.offsetBottom)}px` : N(this.offsetBottom) && (e += ` - ${b(ut(this.offsetBottom, this.$el)).height}px`),
                            e += `${i ? ` - ${i}px` : ""})`
                    }
                    return {
                        minHeight: e,
                        prev: t
                    }
                },
                write({
                    minHeight: t
                }) {
                    h(this.$el, {
                            minHeight: t
                        }),
                        this.minHeight && $(h(this.$el, "minHeight")) < this.minHeight && h(this.$el, "minHeight", this.minHeight)
                },
                events: ["resize"]
            }
        },
        bn = {
            args: "src",
            props: {
                id: Boolean,
                icon: String,
                src: String,
                style: String,
                width: Number,
                height: Number,
                ratio: Number,
                class: String,
                strokeAnimation: Boolean,
                attributes: "list"
            },
            data: {
                ratio: 1,
                include: ["style", "class"],
                class: "",
                strokeAnimation: !1
            },
            beforeConnect() {
                this.class += " bdt-svg"
            },
            connected() {
                !this.icon && v(this.src, "#") && ([this.src, this.icon] = this.src.split("#")),
                    this.svg = this.getSvg().then(t => {
                        if (this._connected) {
                            const e = Vr(t, this.$el);
                            return this.svgEl && e !== this.svgEl && ot(this.svgEl),
                                this.applyAttributes(e, t),
                                this.svgEl = e
                        }
                    }, P),
                    this.strokeAnimation && this.svg.then(t => {
                        this._connected && t && (xn(t),
                            this.registerObserver(ce(t, (e, i) => {
                                xn(t),
                                    i.disconnect()
                            })))
                    })
            },
            disconnected() {
                this.svg.then(t => {
                        this._connected || (Bi(this.$el) && (this.$el.hidden = !1),
                            ot(t),
                            this.svgEl = null)
                    }),
                    this.svg = null
            },
            methods: {
                async getSvg() {
                    return X(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" ? new Promise(t => L(this.$el, "load", () => t(this.getSvg()))) : jr(await Rr(this.src), this.icon) || Promise.reject("SVG not found.")
                },
                applyAttributes(t, e) {
                    for (const o in this.$options.props)
                        v(this.include, o) && o in this && f(t, o, this[o]);
                    for (const o in this.attributes) {
                        const [r, a] = this.attributes[o].split(":", 2);
                        f(t, r, a)
                    }
                    this.id || $e(t, "id");
                    const i = ["width", "height"];
                    let s = i.map(o => this[o]);
                    s.some(o => o) || (s = i.map(o => f(e, o)));
                    const n = f(e, "viewBox");
                    n && !s.some(o => o) && (s = n.split(" ").slice(2)),
                        s.forEach((o, r) => f(t, i[r], $(o) * this.ratio || null))
                }
            }
        };
    const Rr = ft(async t => t ? ht(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());

    function jr(t, e) {
        return e && v(t, "<symbol") && (t = qr(t, e) || t),
            t = w(t.substr(t.indexOf("<svg"))),
            (t == null ? void 0 : t.hasChildNodes()) && t
    }
    const $n = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
        di = {};

    function qr(t, e) {
        if (!di[t]) {
            di[t] = {},
                $n.lastIndex = 0;
            let i;
            for (; i = $n.exec(t);)
                di[t][i[3]] = `<svg xmlns="http://www.w3.org/2000/svg"${i[1]}svg>`
        }
        return di[t][e]
    }

    function xn(t) {
        const e = sn(t);
        e && t.style.setProperty("--bdt-animation-stroke", e)
    }

    function Vr(t, e) {
        if (Bi(e) || X(e, "canvas")) {
            e.hidden = !0;
            const s = e.nextElementSibling;
            return yn(t, s) ? s : Ze(e, t)
        }
        const i = e.lastElementChild;
        return yn(t, i) ? i : W(e, t)
    }

    function yn(t, e) {
        return X(t, "svg") && X(e, "svg") && t.innerHTML === e.innerHTML
    }
    var ss = {
            props: {
                i18n: Object
            },
            data: {
                i18n: null
            },
            methods: {
                t(t, ...e) {
                    var i, s, n;
                    let o = 0;
                    return ((n = ((i = this.i18n) == null ? void 0 : i[t]) || ((s = this.$options.i18n) == null ? void 0 : s[t])) == null ? void 0 : n.replace(/%s/g, () => e[o++] || "")) || ""
                }
            }
        },
        Yr = '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
        Gr = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
        Xr = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
        Jr = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
        Kr = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
        Zr = '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>',
        Qr = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
        Ur = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><style>.bdt-navbar-toggle-animate svg>[class*=line-]{transition:.2s ease-in-out;transition-property:transform,opacity;transform-origin:center;opacity:1}.bdt-navbar-toggle svg>.line-3{opacity:0}.bdt-navbar-toggle-animate[aria-expanded=true] svg>.line-3{opacity:1}.bdt-navbar-toggle-animate[aria-expanded=true] svg>.line-2{transform:rotate(45deg)}.bdt-navbar-toggle-animate[aria-expanded=true] svg>.line-3{transform:rotate(-45deg)}.bdt-navbar-toggle-animate[aria-expanded=true] svg>.line-1,.bdt-navbar-toggle-animate[aria-expanded=true] svg>.line-4{opacity:0}.bdt-navbar-toggle-animate[aria-expanded=true] svg>.line-1{transform:translateY(6px) scaleX(0)}.bdt-navbar-toggle-animate[aria-expanded=true] svg>.line-4{transform:translateY(-6px) scaleX(0)}</style><rect class="line-1" y="3" width="20" height="2"/><rect class="line-2" y="9" width="20" height="2"/><rect class="line-3" y="9" width="20" height="2"/><rect class="line-4" y="15" width="20" height="2"/></svg>',
        ta = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
        ea = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
        ia = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
        sa = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
        na = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
        oa = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
        ra = '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
        aa = '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
        la = '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
        ha = '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>',
        ca = '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
        ua = '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>';
    const fi = {
            spinner: ca,
            totop: ua,
            marker: Jr,
            "close-icon": Yr,
            "close-large": Gr,
            "drop-parent-icon": Xr,
            "nav-parent-icon": Kr,
            "nav-parent-icon-large": Zr,
            "navbar-parent-icon": Qr,
            "navbar-toggle-icon": Ur,
            "overlay-icon": ta,
            "pagination-next": ea,
            "pagination-previous": ia,
            "search-icon": sa,
            "search-large": na,
            "search-navbar": oa,
            "slidenav-next": ra,
            "slidenav-next-large": aa,
            "slidenav-previous": la,
            "slidenav-previous-large": ha
        },
        ns = {
            install: xa,
            extends: bn,
            args: "icon",
            props: ["icon"],
            data: {
                include: []
            },
            isIcon: !0,
            beforeConnect() {
                y(this.$el, "bdt-icon")
            },
            methods: {
                async getSvg() {
                    const t = ya(this.icon);
                    if (!t)
                        throw "Icon not found.";
                    return t
                }
            }
        },
        Gt = {
            args: !1,
            extends: ns,
            data: t => ({
                icon: Zt(t.constructor.options.name)
            }),
            beforeConnect() {
                y(this.$el, this.$options.id)
            }
        },
        da = {
            extends: Gt,
            beforeConnect() {
                const t = this.$props.icon;
                this.icon = Y(this.$el, ".bdt-nav-primary") ? `${t}-large` : t
            }
        },
        fa = {
            extends: Gt,
            beforeConnect() {
                this.icon = B(this.$el, "bdt-search-icon") && ne(this.$el, ".bdt-search-large").length ? "search-large" : ne(this.$el, ".bdt-search-navbar").length ? "search-navbar" : this.$props.icon
            }
        },
        pa = {
            extends: Gt,
            beforeConnect() {
                f(this.$el, "role", "status")
            },
            methods: {
                async getSvg() {
                    const t = await ns.methods.getSvg.call(this);
                    return this.ratio !== 1 && h(w("circle", t), "strokeWidth", 1 / this.ratio),
                        t
                }
            }
        },
        Xt = {
            extends: Gt,
            mixins: [ss],
            beforeConnect() {
                const t = Y(this.$el, "a,button");
                f(t, "role", this.role !== null && X(t, "a") ? "button" : this.role);
                const e = this.t("label");
                e && !wt(t, "aria-label") && f(t, "aria-label", e)
            }
        },
        kn = {
            extends: Xt,
            beforeConnect() {
                y(this.$el, "bdt-slidenav");
                const t = this.$props.icon;
                this.icon = B(this.$el, "bdt-slidenav-large") ? `${t}-large` : t
            }
        },
        ga = {
            extends: Xt,
            i18n: {
                label: "Open menu"
            }
        },
        ma = {
            extends: Xt,
            i18n: {
                label: "Close"
            },
            beforeConnect() {
                this.icon = `close-${B(this.$el, "bdt-close-large") ? "large" : "icon"}`
            }
        },
        va = {
            extends: Xt,
            i18n: {
                label: "Open"
            }
        },
        wa = {
            extends: Xt,
            i18n: {
                label: "Back to top"
            }
        },
        ba = {
            extends: Xt,
            i18n: {
                label: "Next page"
            },
            data: {
                role: null
            }
        },
        $a = {
            extends: Xt,
            i18n: {
                label: "Previous page"
            },
            data: {
                role: null
            }
        },
        pi = {};

    function xa(t) {
        t.icon.add = (e, i) => {
            const s = N(e) ? {
                [e]: i
            } : e;
            St(s, (n, o) => {
                    fi[o] = n,
                        delete pi[o]
                }),
                t._initialized && Ct(document.body, n => St(t.getComponents(n), o => {
                    o.$options.isIcon && o.icon in s && o.$reset()
                }))
        }
    }

    function ya(t) {
        return fi[t] ? (pi[t] || (pi[t] = w((fi[ka(t)] || fi[t]).trim())),
            pi[t].cloneNode(!0)) : null
    }

    function ka(t) {
        return J ? Ai(Ai(t, "left", "right"), "previous", "next") : t
    }
    const Sa = Rt && "loading" in HTMLImageElement.prototype;
    var Ta = {
        args: "dataSrc",
        props: {
            dataSrc: String,
            sources: String,
            margin: String,
            target: String,
            loading: String
        },
        data: {
            dataSrc: "",
            sources: !1,
            margin: "50%",
            target: !1,
            loading: "lazy"
        },
        connected() {
            if (this.loading !== "lazy") {
                this.load();
                return
            }
            const t = [this.$el, ...Se(this.$props.target, this.$el)];
            Sa && gi(this.$el) && (this.$el.loading = "lazy",
                os(this.$el),
                t.length === 1) || (Pa(this.$el),
                this.registerObserver(ce(t, (e, i) => {
                    this.load(),
                        i.disconnect()
                }, {
                    rootMargin: this.margin
                })))
        },
        disconnected() {
            this._data.image && (this._data.image.onload = "")
        },
        methods: {
            load() {
                if (this._data.image)
                    return this._data.image;
                const t = gi(this.$el) ? this.$el : _a(this.$el, this.dataSrc, this.sources);
                return $e(t, "loading"),
                    os(this.$el, t.currentSrc),
                    this._data.image = t
            }
        }
    };

    function os(t, e) {
        if (gi(t)) {
            const i = A(t);
            (X(i, "picture") ? E(i) : [t]).forEach(n => Sn(n, n))
        } else
            e && !v(t.style.backgroundImage, e) && (h(t, "backgroundImage", `url(${zi(e)})`),
                m(t, Ft("load", !1)))
    }
    const Ca = ["data-src", "data-srcset", "sizes"];

    function Sn(t, e) {
        Ca.forEach(i => {
            const s = tt(t, i);
            s && f(e, i.replace(/^(data-)+/, ""), s)
        })
    }

    function _a(t, e, i) {
        const s = new Image;
        return Ea(s, i),
            Sn(t, s),
            s.onload = () => {
                os(t, s.currentSrc)
            },
            f(s, "src", e),
            s
    }

    function Ea(t, e) {
        if (e = Ia(e),
            e.length) {
            const i = Ht("<picture>");
            for (const s of e) {
                const n = Ht("<source>");
                f(n, s),
                    W(i, n)
            }
            W(i, t)
        }
    }

    function Ia(t) {
        if (!t)
            return [];
        if (ht(t, "["))
            try {
                t = JSON.parse(t)
            } catch {
                t = []
            }
        else
            t = de(t);
        return Q(t) || (t = [t]),
            t.filter(e => !we(e))
    }

    function Pa(t) {
        gi(t) && !wt(t, "src") && f(t, "src", 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>')
    }

    function gi(t) {
        return X(t, "img")
    }
    var mi = {
        props: {
            media: Boolean
        },
        data: {
            media: !1
        },
        connected() {
            const t = Aa(this.media, this.$el);
            if (this.matchMedia = !0,
                t) {
                this.mediaObj = window.matchMedia(t);
                const e = () => {
                    this.matchMedia = this.mediaObj.matches,
                        m(this.$el, Ft("mediachange", !1, !0, [this.mediaObj]))
                };
                this.offMediaObj = x(this.mediaObj, "change", () => {
                        e(),
                            this.$emit("resize")
                    }),
                    e()
            }
        },
        disconnected() {
            var t;
            (t = this.offMediaObj) == null || t.call(this)
        }
    };

    function Aa(t, e) {
        if (N(t)) {
            if (ht(t, "@"))
                t = $(h(e, `--bdt-breakpoint-${t.substr(1)}`));
            else if (isNaN(t))
                return t
        }
        return t && vt(t) ? `(min-width: ${t}px)` : ""
    }
    var Oa = {
        mixins: [st, mi, bt],
        props: {
            fill: String
        },
        data: {
            fill: "",
            clsWrapper: "bdt-leader-fill",
            clsHide: "bdt-leader-hide",
            attrFill: "data-fill"
        },
        computed: {
            fill({
                fill: t
            }) {
                return t || h(this.$el, "--bdt-leader-fill-content")
            }
        },
        connected() {
            [this.wrapper] = qi(this.$el, `<span class="${this.clsWrapper}">`)
        },
        disconnected() {
            _e(this.wrapper.childNodes)
        },
        update: {
            read() {
                return {
                    width: Math.trunc(this.$el.offsetWidth / 2),
                    fill: this.fill,
                    hide: !this.matchMedia
                }
            },
            write({
                width: t,
                fill: e,
                hide: i
            }) {
                j(this.wrapper, this.clsHide, i),
                    f(this.wrapper, this.attrFill, new Array(t).join(e))
            },
            events: ["resize"]
        }
    };
    const nt = [];
    var rs = {
        mixins: [st, Be, Yt],
        props: {
            selPanel: String,
            selClose: String,
            escClose: Boolean,
            bgClose: Boolean,
            stack: Boolean,
            role: String
        },
        data: {
            cls: "bdt-open",
            escClose: !0,
            bgClose: !0,
            overlay: !0,
            stack: !1,
            role: "dialog"
        },
        computed: {
            panel({
                selPanel: t
            }, e) {
                return w(t, e)
            },
            transitionElement() {
                return this.panel
            },
            bgClose({
                bgClose: t
            }) {
                return t && this.panel
            }
        },
        connected() {
            f(this.panel || this.$el, "role", this.role),
                this.overlay && f(this.panel || this.$el, "aria-modal", !0)
        },
        beforeDisconnect() {
            v(nt, this) && this.toggleElement(this.$el, !1, !1)
        },
        events: [{
            name: "click",
            delegate() {
                return `${this.selClose},a[href*="#"]`
            },
            handler(t) {
                const {
                    current: e,
                    defaultPrevented: i
                } = t, {
                    hash: s
                } = e;
                !i && s && De(e) && !D(s, this.$el) && w(s, document.body) ? this.hide() : _(e, this.selClose) && (t.preventDefault(),
                    this.hide())
            }
        }, {
            name: "toggle",
            self: !0,
            handler(t) {
                t.defaultPrevented || (t.preventDefault(),
                    this.isToggled() === v(nt, this) && this.toggle())
            }
        }, {
            name: "beforeshow",
            self: !0,
            handler(t) {
                if (v(nt, this))
                    return !1;
                !this.stack && nt.length ? (Promise.all(nt.map(e => e.hide())).then(this.show),
                    t.preventDefault()) : nt.push(this)
            }
        }, {
            name: "show",
            self: !0,
            handler() {
                this.stack && h(this.$el, "zIndex", $(h(this.$el, "zIndex")) + nt.length);
                const t = [this.overlay && Ba(this), this.overlay && nn(this.$el), this.bgClose && Ma(this), this.escClose && Na(this)];
                L(this.$el, "hidden", () => t.forEach(e => e && e()), {
                        self: !0
                    }),
                    y(document.documentElement, this.clsPage)
            }
        }, {
            name: "shown",
            self: !0,
            handler() {
                Je(this.$el) || f(this.$el, "tabindex", "-1"),
                    _(this.$el, ":focus-within") || this.$el.focus()
            }
        }, {
            name: "hidden",
            self: !0,
            handler() {
                v(nt, this) && nt.splice(nt.indexOf(this), 1),
                    h(this.$el, "zIndex", ""),
                    nt.some(t => t.clsPage === this.clsPage) || z(document.documentElement, this.clsPage)
            }
        }],
        methods: {
            toggle() {
                return this.isToggled() ? this.hide() : this.show()
            },
            show() {
                return this.container && A(this.$el) !== this.container ? (W(this.container, this.$el),
                    new Promise(t => requestAnimationFrame(() => this.show().then(t)))) : this.toggleElement(this.$el, !0, Tn)
            },
            hide() {
                return this.toggleElement(this.$el, !1, Tn)
            }
        }
    };

    function Tn(t, e, {
        transitionElement: i,
        _toggle: s
    }) {
        return new Promise((n, o) => L(t, "show hide", () => {
            var r;
            (r = t._reject) == null || r.call(t),
                t._reject = o,
                s(t, e);
            const a = L(i, "transitionstart", () => {
                    L(i, "transitionend transitioncancel", n, {
                            self: !0
                        }),
                        clearTimeout(l)
                }, {
                    self: !0
                }),
                l = setTimeout(() => {
                    a(),
                        n()
                }, Da(h(i, "transitionDuration")))
        })).then(() => delete t._reject)
    }

    function Da(t) {
        return t ? Qt(t, "ms") ? $(t) : $(t) * 1e3 : 0
    }

    function Ba(t) {
        return x(document, "focusin", e => {
            se(nt) === t && !D(e.target, t.$el) && t.$el.focus()
        })
    }

    function Ma(t) {
        return x(document, gt, ({
            target: e
        }) => {
            se(nt) !== t || t.overlay && !D(e, t.$el) || D(e, t.panel) || L(document, `${Pt} ${si} scroll`, ({
                defaultPrevented: i,
                type: s,
                target: n
            }) => {
                !i && s === Pt && e === n && t.hide()
            }, !0)
        })
    }

    function Na(t) {
        return x(document, "keydown", e => {
            e.keyCode === 27 && se(nt) === t && t.hide()
        })
    }
    var za = {
        install: Fa,
        mixins: [rs],
        data: {
            clsPage: "bdt-modal-page",
            selPanel: ".bdt-modal-dialog",
            selClose: ".bdt-modal-close, .bdt-modal-close-default, .bdt-modal-close-outside, .bdt-modal-close-full"
        },
        events: [{
            name: "show",
            self: !0,
            handler() {
                B(this.panel, "bdt-margin-auto-vertical") ? y(this.$el, "bdt-flex") : h(this.$el, "display", "block"),
                    et(this.$el)
            }
        }, {
            name: "hidden",
            self: !0,
            handler() {
                h(this.$el, "display", ""),
                    z(this.$el, "bdt-flex")
            }
        }]
    };

    function Fa({
        modal: t
    }) {
        t.dialog = function(i, s) {
                const n = t(`<div class="bdt-modal"> <div class="bdt-modal-dialog">${i}</div> </div>`, s);
                return n.show(),
                    x(n.$el, "hidden", async () => {
                        await Promise.resolve(),
                            n.$destroy(!0)
                    }, {
                        self: !0
                    }),
                    n
            },
            t.alert = function(i, s) {
                return e(({
                    i18n: n
                }) => `<div class="bdt-modal-body">${N(i) ? i : It(i)}</div> <div class="bdt-modal-footer bdt-text-right"> <button class="bdt-button bdt-button-primary bdt-modal-close" autofocus>${n.ok}</button> </div>`, s, n => n.resolve())
            },
            t.confirm = function(i, s) {
                return e(({
                    i18n: n
                }) => `<form> <div class="bdt-modal-body">${N(i) ? i : It(i)}</div> <div class="bdt-modal-footer bdt-text-right"> <button class="bdt-button bdt-button-default bdt-modal-close" type="button">${n.cancel}</button> <button class="bdt-button bdt-button-primary" autofocus>${n.ok}</button> </div> </form>`, s, n => n.reject())
            },
            t.prompt = function(i, s, n) {
                return e(({
                    i18n: o
                }) => `<form class="bdt-form-stacked"> <div class="bdt-modal-body"> <label>${N(i) ? i : It(i)}</label> <input class="bdt-input" value="${s || ""}" autofocus> </div> <div class="bdt-modal-footer bdt-text-right"> <button class="bdt-button bdt-button-default bdt-modal-close" type="button">${o.cancel}</button> <button class="bdt-button bdt-button-primary">${o.ok}</button> </div> </form>`, n, o => o.resolve(null), o => w("input", o.$el).value)
            },
            t.i18n = {
                ok: "Ok",
                cancel: "Cancel"
            };

        function e(i, s, n, o) {
            s = {
                bgClose: !1,
                escClose: !0,
                role: "alertdialog",
                i18n: t.i18n,
                ...s
            };
            const r = t.dialog(i(s), s),
                a = new Xe;
            let l = !1;
            return x(r.$el, "submit", "form", c => {
                    c.preventDefault(),
                        a.resolve(o == null ? void 0 : o(r)),
                        l = !0,
                        r.hide()
                }),
                x(r.$el, "hide", () => !l && n(a)),
                a.promise.dialog = r,
                a.promise
        }
    }
    var Ha = {
            extends: rn,
            data: {
                targets: "> .bdt-parent",
                toggle: "> a",
                content: "> ul"
            }
        },
        La = {
            extends: un,
            data: {
                dropdown: ".bdt-navbar-nav > li > a, .bdt-navbar-item, .bdt-navbar-toggle",
                clsDrop: "bdt-navbar-dropdown"
            },
            computed: {
                items: {
                    get({
                        dropdown: t
                    }, e) {
                        return O(t, e)
                    },
                    watch(t) {
                        const e = B(this.$el, "bdt-navbar-justify");
                        for (const i of O(".bdt-navbar-nav, .bdt-navbar-left, .bdt-navbar-right", this.$el))
                            h(i, "flexGrow", e ? O(this.dropdown, i).length : "");
                        f(O(".bdt-navbar-nav", this.$el), "role", "group"),
                            f(O(".bdt-navbar-nav > *", this.$el), "role", "presentation"),
                            f(t, {
                                tabindex: -1,
                                role: "menuitem"
                            }),
                            f(t[0], "tabindex", 0)
                    },
                    immediate: !0
                }
            }
        },
        Cn = {
            props: {
                swiping: Boolean
            },
            data: {
                swiping: !0
            },
            computed: {
                swipeTarget(t, e) {
                    return e
                }
            },
            connected() {
                this.swiping && ai(this, {
                    el: this.swipeTarget,
                    name: gt,
                    passive: !0,
                    handler(t) {
                        if (!Tt(t))
                            return;
                        const e = re(t),
                            i = "tagName" in t.target ? t.target : A(t.target);
                        L(document, `${Pt} ${si} scroll`, s => {
                            const {
                                x: n,
                                y: o
                            } = re(s);
                            (s.type !== "scroll" && i && n && Math.abs(e.x - n) > 100 || o && Math.abs(e.y - o) > 100) && setTimeout(() => {
                                m(i, "swipe"),
                                    m(i, `swipe${Wa(e.x, e.y, n, o)}`)
                            })
                        })
                    }
                })
            }
        };

    function Wa(t, e, i, s) {
        return Math.abs(t - i) >= Math.abs(e - s) ? t - i > 0 ? "Left" : "Right" : e - s > 0 ? "Up" : "Down"
    }
    var Ra = {
        mixins: [rs, Cn],
        args: "mode",
        props: {
            mode: String,
            flip: Boolean,
            overlay: Boolean
        },
        data: {
            mode: "slide",
            flip: !1,
            overlay: !1,
            clsPage: "bdt-offcanvas-page",
            clsContainer: "bdt-offcanvas-container",
            selPanel: ".bdt-offcanvas-bar",
            clsFlip: "bdt-offcanvas-flip",
            clsContainerAnimation: "bdt-offcanvas-container-animation",
            clsSidebarAnimation: "bdt-offcanvas-bar-animation",
            clsMode: "bdt-offcanvas",
            clsOverlay: "bdt-offcanvas-overlay",
            selClose: ".bdt-offcanvas-close",
            container: !1
        },
        computed: {
            clsFlip({
                flip: t,
                clsFlip: e
            }) {
                return t ? e : ""
            },
            clsOverlay({
                overlay: t,
                clsOverlay: e
            }) {
                return t ? e : ""
            },
            clsMode({
                mode: t,
                clsMode: e
            }) {
                return `${e}-${t}`
            },
            clsSidebarAnimation({
                mode: t,
                clsSidebarAnimation: e
            }) {
                return t === "none" || t === "reveal" ? "" : e
            },
            clsContainerAnimation({
                mode: t,
                clsContainerAnimation: e
            }) {
                return t !== "push" && t !== "reveal" ? "" : e
            },
            transitionElement({
                mode: t
            }) {
                return t === "reveal" ? A(this.panel) : this.panel
            }
        },
        update: {
            read() {
                this.isToggled() && !q(this.$el) && this.hide()
            },
            events: ["resize"]
        },
        events: [{
            name: "touchmove",
            self: !0,
            passive: !1,
            filter() {
                return this.overlay
            },
            handler(t) {
                t.cancelable && t.preventDefault()
            }
        }, {
            name: "show",
            self: !0,
            handler() {
                this.mode === "reveal" && !B(A(this.panel), this.clsMode) && (Ue(this.panel, "<div>"),
                    y(A(this.panel), this.clsMode));
                const {
                    body: t,
                    scrollingElement: e
                } = document;
                y(t, this.clsContainer, this.clsFlip),
                    h(t, "touch-action", "pan-y pinch-zoom"),
                    h(this.$el, "display", "block"),
                    h(this.panel, "maxWidth", e.clientWidth),
                    y(this.$el, this.clsOverlay),
                    y(this.panel, this.clsSidebarAnimation, this.mode === "reveal" ? "" : this.clsMode),
                    et(t),
                    y(t, this.clsContainerAnimation),
                    this.clsContainerAnimation && ja()
            }
        }, {
            name: "hide",
            self: !0,
            handler() {
                z(document.body, this.clsContainerAnimation),
                    h(document.body, "touch-action", "")
            }
        }, {
            name: "hidden",
            self: !0,
            handler() {
                this.clsContainerAnimation && qa(),
                    this.mode === "reveal" && _e(this.panel),
                    z(this.panel, this.clsSidebarAnimation, this.clsMode),
                    z(this.$el, this.clsOverlay),
                    h(this.$el, "display", ""),
                    h(this.panel, "maxWidth", ""),
                    z(document.body, this.clsContainer, this.clsFlip)
            }
        }, {
            name: "swipeLeft swipeRight",
            handler(t) {
                this.isToggled() && Qt(t.type, "Left") ^ this.flip && this.hide()
            }
        }]
    };

    function ja() {
        _n().content += ",user-scalable=0"
    }

    function qa() {
        const t = _n();
        t.content = t.content.replace(/,user-scalable=0$/, "")
    }

    function _n() {
        return w('meta[name="viewport"]', document.head) || W(document.head, '<meta name="viewport">')
    }
    var Va = {
            mixins: [st, bt],
            props: {
                selContainer: String,
                selContent: String,
                minHeight: Number
            },
            data: {
                selContainer: ".bdt-modal",
                selContent: ".bdt-modal-dialog",
                minHeight: 150
            },
            computed: {
                container({
                    selContainer: t
                }, e) {
                    return Y(e, t)
                },
                content({
                    selContent: t
                }, e) {
                    return Y(e, t)
                }
            },
            resizeTargets() {
                return [this.container, this.content]
            },
            update: {
                read() {
                    return !this.content || !this.container || !q(this.$el) ? !1 : {
                        max: Math.max(this.minHeight, et(this.container) - (b(this.content).height - et(this.$el)))
                    }
                },
                write({
                    max: t
                }) {
                    h(this.$el, {
                        minHeight: this.minHeight,
                        maxHeight: t
                    })
                },
                events: ["resize"]
            }
        },
        Ya = {
            mixins: [bt],
            props: ["width", "height"],
            resizeTargets() {
                return [this.$el, A(this.$el)]
            },
            connected() {
                y(this.$el, "bdt-responsive-width")
            },
            update: {
                read() {
                    return q(this.$el) && this.width && this.height ? {
                        width: Ee(A(this.$el)),
                        height: this.height
                    } : !1
                },
                write(t) {
                    et(this.$el, Ge.contain({
                        height: this.height,
                        width: this.width
                    }, t).height)
                },
                events: ["resize"]
            }
        },
        Ga = {
            props: {
                offset: Number
            },
            data: {
                offset: 0
            },
            connected() {
                Xa(this)
            },
            disconnected() {
                Ja(this)
            },
            methods: {
                async scrollTo(t) {
                    t = t && w(t) || document.body,
                        m(this.$el, "beforescroll", [this, t]) && (await qs(t, {
                                offset: this.offset
                            }),
                            m(this.$el, "scrolled", [this, t]))
                }
            }
        };
    const Ne = new Set;

    function Xa(t) {
        Ne.size || x(document, "click", En),
            Ne.add(t)
    }

    function Ja(t) {
        Ne.delete(t),
            Ne.size || zt(document, "click", En)
    }

    function En(t) {
        if (!t.defaultPrevented)
            for (const e of Ne)
                D(t.target, e.$el) && De(e.$el) && (t.preventDefault(),
                    e.scrollTo(on(e.$el)))
    }
    var Ka = {
            mixins: [ci],
            args: "cls",
            props: {
                cls: String,
                target: String,
                hidden: Boolean,
                margin: String,
                repeat: Boolean,
                delay: Number
            },
            data: () => ({
                cls: "",
                target: !1,
                hidden: !0,
                margin: "-1px",
                repeat: !1,
                delay: 0,
                inViewClass: "bdt-scrollspy-inview"
            }),
            computed: {
                elements: {
                    get({
                        target: t
                    }, e) {
                        return t ? O(t, e) : [e]
                    },
                    watch(t, e) {
                        this.hidden && h(ke(t, `:not(.${this.inViewClass})`), "opacity", 0),
                            be(t, e) || this.$reset()
                    },
                    immediate: !0
                }
            },
            connected() {
                this._data.elements = new Map,
                    this.registerObserver(ce(this.elements, t => {
                        const e = this._data.elements;
                        for (const {
                                target: i,
                                isIntersecting: s
                            } of t) {
                            e.has(i) || e.set(i, {
                                cls: tt(i, "bdt-scrollspy-class") || this.cls
                            });
                            const n = e.get(i);
                            !this.repeat && n.show || (n.show = s)
                        }
                        this.$emit()
                    }, {
                        rootMargin: this.margin
                    }, !1))
            },
            disconnected() {
                for (const [t, e] of this._data.elements.entries())
                    z(t, this.inViewClass, (e == null ? void 0 : e.cls) || "")
            },
            update: [{
                write(t) {
                    for (const [e, i] of t.elements.entries())
                        i.show && !i.inview && !i.queued ? (i.queued = !0,
                            t.promise = (t.promise || Promise.resolve()).then(() => new Promise(s => setTimeout(s, this.delay))).then(() => {
                                this.toggle(e, !0),
                                    setTimeout(() => {
                                        i.queued = !1,
                                            this.$emit()
                                    }, 300)
                            })) : !i.show && i.inview && !i.queued && this.repeat && this.toggle(e, !1)
                }
            }],
            methods: {
                toggle(t, e) {
                    var i;
                    const s = this._data.elements.get(t);
                    if (s) {
                        if ((i = s.off) == null || i.call(s),
                            h(t, "opacity", !e && this.hidden ? 0 : ""),
                            j(t, this.inViewClass, e),
                            j(t, s.cls),
                            /\bbdt-animation-/.test(s.cls)) {
                            const n = () => Wi(t, "bdt-animation-[\\w-]+");
                            e ? s.off = L(t, "animationcancel animationend", n) : n()
                        }
                        m(t, e ? "inview" : "outview"),
                            s.inview = e,
                            this.$update(t)
                    }
                }
            }
        },
        Za = {
            mixins: [ci],
            props: {
                cls: String,
                closest: String,
                scroll: Boolean,
                overflow: Boolean,
                offset: Number
            },
            data: {
                cls: "bdt-active",
                closest: !1,
                scroll: !1,
                overflow: !0,
                offset: 0
            },
            computed: {
                links: {
                    get(t, e) {
                        return O('a[href*="#"]', e).filter(i => i.hash && De(i))
                    },
                    watch(t) {
                        this.scroll && this.$create("scroll", t, {
                            offset: this.offset || 0
                        })
                    },
                    immediate: !0
                },
                elements({
                    closest: t
                }) {
                    return Y(this.links, t || "*")
                }
            },
            update: [{
                read() {
                    const t = this.links.map(on).filter(Boolean),
                        {
                            length: e
                        } = t;
                    if (!e || !q(this.$el))
                        return !1;
                    const [i] = mt(t, !0), {
                        scrollTop: s,
                        scrollHeight: n
                    } = i, o = at(i), r = n - o.height;
                    let a = !1;
                    if (s === r)
                        a = e - 1;
                    else {
                        for (let l = 0; l < t.length && !(I(t[l]).top - o.top - this.offset > 0); l++)
                            a = +l;
                        a === !1 && this.overflow && (a = 0)
                    }
                    return {
                        active: a
                    }
                },
                write({
                    active: t
                }) {
                    const e = t !== !1 && !B(this.elements[t], this.cls);
                    this.links.forEach(i => i.blur());
                    for (let i = 0; i < this.elements.length; i++)
                        j(this.elements[i], this.cls, +i === t);
                    e && m(this.$el, "active", [t, this.elements[t]])
                },
                events: ["scroll", "resize"]
            }]
        },
        Qa = {
            mixins: [st, mi, bt, ci],
            props: {
                position: String,
                top: null,
                bottom: null,
                start: null,
                end: null,
                offset: String,
                overflowFlip: Boolean,
                animation: String,
                clsActive: String,
                clsInactive: String,
                clsFixed: String,
                clsBelow: String,
                selTarget: String,
                showOnUp: Boolean,
                targetOffset: Number
            },
            data: {
                position: "top",
                top: !1,
                bottom: !1,
                start: !1,
                end: !1,
                offset: 0,
                overflowFlip: !1,
                animation: "",
                clsActive: "bdt-active",
                clsInactive: "",
                clsFixed: "bdt-sticky-fixed",
                clsBelow: "bdt-sticky-below",
                selTarget: "",
                showOnUp: !1,
                targetOffset: !1
            },
            computed: {
                selTarget({
                    selTarget: t
                }, e) {
                    return t && w(t, e) || e
                }
            },
            resizeTargets() {
                return document.documentElement
            },
            connected() {
                this.start = In(this.start || this.top),
                    this.end = In(this.end || this.bottom),
                    this.placeholder = w("+ .bdt-sticky-placeholder", this.$el) || w('<div class="bdt-sticky-placeholder"></div>'),
                    this.isFixed = !1,
                    this.setActive(!1),
                    this.registerObserver(Pe(this.$el, () => !this.isFixed && this.$emit("resize")))
            },
            disconnected() {
                this.isFixed && (this.hide(),
                        z(this.selTarget, this.clsInactive)),
                    Pn(this.$el),
                    ot(this.placeholder),
                    this.placeholder = null
            },
            events: [{
                name: "resize",
                el() {
                    return [window, window.visualViewport]
                },
                handler() {
                    this.$emit("resizeViewport")
                }
            }, {
                name: "load hashchange popstate",
                el() {
                    return window
                },
                filter() {
                    return this.targetOffset !== !1
                },
                handler() {
                    const {
                        scrollingElement: t
                    } = document;
                    !location.hash || t.scrollTop === 0 || setTimeout(() => {
                        const e = I(w(location.hash)),
                            i = I(this.$el);
                        this.isFixed && Oi(e, i) && (t.scrollTop = e.top - i.height - rt(this.targetOffset, "height", this.placeholder) - rt(this.offset, "height", this.placeholder))
                    })
                }
            }],
            update: [{
                read({
                    height: t,
                    width: e,
                    margin: i,
                    sticky: s
                }, n) {
                    if (this.inactive = !this.matchMedia || !q(this.$el),
                        this.inactive)
                        return;
                    const o = this.isFixed && n.has("resize") && !s;
                    o && (h(this.selTarget, "transition", "0s"),
                            this.hide()),
                        this.active || ({
                                height: t,
                                width: e
                            } = I(this.$el),
                            i = h(this.$el, "margin")),
                        o && (this.show(),
                            requestAnimationFrame(() => h(this.selTarget, "transition", "")));
                    const r = rt("100vh", "height"),
                        a = et(window),
                        l = document.scrollingElement.scrollHeight - r;
                    let c = this.position;
                    this.overflowFlip && t > r && (c = c === "top" ? "bottom" : "top");
                    const u = this.isFixed ? this.placeholder : this.$el;
                    let d = rt(this.offset, "height", s ? this.$el : u);
                    c === "bottom" && (t < a || this.overflowFlip) && (d += a - t);
                    const p = this.overflowFlip ? 0 : Math.max(0, t + d - r),
                        g = I(u).top,
                        T = I(this.$el).height,
                        F = (this.start === !1 ? g : as(this.start, this.$el, g)) - d,
                        M = this.end === !1 ? l : Math.min(l, as(this.end, this.$el, g + t, !0) - T - d + p);
                    return s = l && !this.showOnUp && F + d === g && M === Math.min(l, as("!*", this.$el, 0, !0) - T - d + p) && h(A(this.$el), "overflowY") === "visible", {
                        start: F,
                        end: M,
                        offset: d,
                        overflow: p,
                        topOffset: g,
                        height: t,
                        elHeight: T,
                        width: e,
                        margin: i,
                        top: Wt(u)[0],
                        sticky: s
                    }
                },
                write({
                    height: t,
                    width: e,
                    margin: i,
                    offset: s,
                    sticky: n
                }) {
                    if ((this.inactive || n || !this.isFixed) && Pn(this.$el),
                        this.inactive)
                        return;
                    n && (t = e = i = 0,
                        h(this.$el, {
                            position: "sticky",
                            top: s
                        }));
                    const {
                        placeholder: o
                    } = this;
                    h(o, {
                            height: t,
                            width: e,
                            margin: i
                        }),
                        D(o, document) || (o.hidden = !0),
                        (n ? Ke : Ze)(this.$el, o)
                },
                events: ["resize", "resizeViewport"]
            }, {
                read({
                    scroll: t = 0,
                    dir: e = "down",
                    overflow: i,
                    overflowScroll: s = 0,
                    start: n,
                    end: o
                }) {
                    const r = document.scrollingElement.scrollTop;
                    return {
                        dir: t <= r ? "down" : "up",
                        prevDir: e,
                        scroll: r,
                        prevScroll: t,
                        offsetParentTop: I((this.isFixed ? this.placeholder : this.$el).offsetParent).top,
                        overflowScroll: U(s + U(r, n, o) - U(t, n, o), 0, i)
                    }
                },
                write(t, e) {
                    const i = e.has("scroll"),
                        {
                            initTimestamp: s = 0,
                            dir: n,
                            prevDir: o,
                            scroll: r,
                            prevScroll: a = 0,
                            top: l,
                            start: c,
                            topOffset: u,
                            height: d
                        } = t;
                    if (r < 0 || r === a && i || this.showOnUp && !i && !this.isFixed)
                        return;
                    const p = Date.now();
                    if ((p - s > 300 || n !== o) && (t.initScroll = r,
                            t.initTimestamp = p), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - r) <= 30 && Math.abs(a - r) <= 10))
                        if (this.inactive || r < c || this.showOnUp && (r <= c || n === "down" && i || n === "up" && !this.isFixed && r <= u + d)) {
                            if (!this.isFixed) {
                                pt.inProgress(this.$el) && l > r && (pt.cancel(this.$el),
                                    this.hide());
                                return
                            }
                            this.animation && r > u ? (pt.cancel(this.$el),
                                pt.out(this.$el, this.animation).then(() => this.hide(), P)) : this.hide()
                        } else
                            this.isFixed ? this.update() : this.animation && r > u ? (pt.cancel(this.$el),
                                this.show(),
                                pt.in(this.$el, this.animation).catch(P)) : this.show()
                },
                events: ["resize", "resizeViewport", "scroll"]
            }],
            methods: {
                show() {
                    this.isFixed = !0,
                        this.update(),
                        this.placeholder.hidden = !1
                },
                hide() {
                    const {
                        offset: t,
                        sticky: e
                    } = this._data;
                    this.setActive(!1),
                        z(this.$el, this.clsFixed, this.clsBelow),
                        e ? h(this.$el, "top", t) : h(this.$el, {
                            position: "",
                            top: "",
                            width: "",
                            marginTop: ""
                        }),
                        this.placeholder.hidden = !0,
                        this.isFixed = !1
                },
                update() {
                    let {
                        width: t,
                        scroll: e = 0,
                        overflow: i,
                        overflowScroll: s = 0,
                        start: n,
                        end: o,
                        offset: r,
                        topOffset: a,
                        height: l,
                        elHeight: c,
                        offsetParentTop: u,
                        sticky: d
                    } = this._data;
                    const p = n !== 0 || e > n;
                    if (!d) {
                        let g = "fixed";
                        e > o && (r += o - u,
                                g = "absolute"),
                            h(this.$el, {
                                position: g,
                                width: t
                            }),
                            h(this.$el, "marginTop", 0, "important")
                    }
                    i && (r -= s),
                        h(this.$el, "top", r),
                        this.setActive(p),
                        j(this.$el, this.clsBelow, e > a + (d ? Math.min(l, c) : l)),
                        y(this.$el, this.clsFixed)
                },
                setActive(t) {
                    const e = this.active;
                    this.active = t,
                        t ? (Ri(this.selTarget, this.clsInactive, this.clsActive),
                            e !== t && m(this.$el, "active")) : (Ri(this.selTarget, this.clsActive, this.clsInactive),
                            e !== t && m(this.$el, "inactive"))
                }
            }
        };

    function as(t, e, i, s) {
        if (!t)
            return 0;
        if (vt(t) || N(t) && t.match(/^-?\d/))
            return i + rt(t, "height", e, !0); {
            const n = t === !0 ? A(e) : ut(t, e);
            return I(n).bottom - (s && n && D(e, n) ? $(h(n, "paddingBottom")) : 0)
        }
    }

    function In(t) {
        return t === "true" ? !0 : t === "false" ? !1 : t
    }

    function Pn(t) {
        h(t, {
            position: "",
            top: "",
            marginTop: "",
            width: ""
        })
    }
    const ls = ".bdt-disabled *, .bdt-disabled, [disabled]";
    var An = {
            mixins: [Oe, Cn, Yt],
            args: "connect",
            props: {
                connect: String,
                toggle: String,
                itemNav: String,
                active: Number,
                followFocus: Boolean
            },
            data: {
                connect: "~.bdt-switcher",
                toggle: "> * > :first-child",
                itemNav: !1,
                active: 0,
                cls: "bdt-active",
                attrItem: "bdt-switcher-item",
                selVertical: ".bdt-nav",
                followFocus: !1
            },
            computed: {
                connects: {
                    get({
                        connect: t
                    }, e) {
                        return Se(t, e)
                    },
                    watch(t) {
                        this.swiping && h(t, "touchAction", "pan-y pinch-zoom"),
                            this.$emit()
                    },
                    document: !0,
                    immediate: !0
                },
                connectChildren: {
                    get() {
                        return this.connects.map(t => E(t)).flat()
                    },
                    watch() {
                        const t = this.index();
                        for (const e of this.connects)
                            E(e).forEach((i, s) => j(i, this.cls, s === t)),
                            this.lazyload(this.$el, E(e));
                        this.$emit()
                    },
                    immediate: !0
                },
                toggles: {
                    get({
                        toggle: t
                    }, e) {
                        return O(t, e)
                    },
                    watch(t) {
                        this.$emit();
                        const e = this.index();
                        this.show(~e ? e : t[this.active] || t[0])
                    },
                    immediate: !0
                },
                children() {
                    return E(this.$el).filter(t => this.toggles.some(e => D(e, t)))
                },
                swipeTarget() {
                    return this.connects
                }
            },
            connected() {
                f(this.$el, "role", "tablist")
            },
            events: [{
                name: "click keydown",
                delegate() {
                    return this.toggle
                },
                handler(t) {
                    !_(t.current, ls) && (t.type === "click" || t.keyCode === C.SPACE) && (t.preventDefault(),
                        this.show(t.current))
                }
            }, {
                name: "keydown",
                delegate() {
                    return this.toggle
                },
                handler(t) {
                    const {
                        current: e,
                        keyCode: i
                    } = t, s = _(this.$el, this.selVertical);
                    let n = i === C.HOME ? 0 : i === C.END ? "last" : i === C.LEFT && !s || i === C.UP && s ? "previous" : i === C.RIGHT && !s || i === C.DOWN && s ? "next" : -1;
                    if (~n) {
                        t.preventDefault();
                        const o = this.toggles.filter(a => !_(a, ls)),
                            r = o[ct(n, o, o.indexOf(e))];
                        r.focus(),
                            this.followFocus && this.show(r)
                    }
                }
            }, {
                name: "click",
                el() {
                    return this.connects.concat(this.itemNav ? Se(this.itemNav, this.$el) : [])
                },
                delegate() {
                    return `[${this.attrItem}],[data-${this.attrItem}]`
                },
                handler(t) {
                    Y(t.target, "a,button") && (t.preventDefault(),
                        this.show(tt(t.current, this.attrItem)))
                }
            }, {
                name: "swipeRight swipeLeft",
                filter() {
                    return this.swiping
                },
                el() {
                    return this.connects
                },
                handler({
                    type: t
                }) {
                    this.show(Qt(t, "Left") ? "next" : "previous")
                }
            }],
            update() {
                var t;
                f(this.connects, "role", "presentation"),
                    f(E(this.$el), "role", "presentation");
                for (const e in this.toggles) {
                    const i = this.toggles[e],
                        s = (t = this.connects[0]) == null ? void 0 : t.children[e];
                    f(i, "role", "tab"),
                        s && (i.id = Dt(this, i, `-tab-${e}`),
                            s.id = Dt(this, s, `-tabpanel-${e}`),
                            f(i, "aria-controls", s.id),
                            f(s, {
                                role: "tabpanel",
                                "aria-labelledby": i.id
                            }))
                }
                f(this.$el, "aria-orientation", _(this.$el, this.selVertical) ? "vertical" : null)
            },
            methods: {
                index() {
                    return $t(this.children, t => B(t, this.cls))
                },
                show(t) {
                    const e = this.toggles.filter(r => !_(r, ls)),
                        i = this.index(),
                        s = ct(!qe(t) || v(e, t) ? t : 0, e, ct(this.toggles[i], e)),
                        n = ct(e[s], this.toggles);
                    this.children.forEach((r, a) => {
                        j(r, this.cls, n === a),
                            f(this.toggles[a], {
                                "aria-selected": n === a,
                                tabindex: n === a ? null : -1
                            })
                    });
                    const o = i >= 0 && i !== s;
                    this.connects.forEach(async ({
                        children: r
                    }) => {
                        await this.toggleElement(k(r).filter(a => B(a, this.cls)), !1, o),
                            await this.toggleElement(r[n], !0, o)
                    })
                }
            }
        },
        Ua = {
            mixins: [st],
            extends: An,
            props: {
                media: Boolean
            },
            data: {
                media: 960,
                attrItem: "bdt-tab-item",
                selVertical: ".bdt-tab-left,.bdt-tab-right"
            },
            connected() {
                const t = B(this.$el, "bdt-tab-left") ? "bdt-tab-left" : B(this.$el, "bdt-tab-right") ? "bdt-tab-right" : !1;
                t && this.$create("toggle", this.$el, {
                    cls: t,
                    mode: "media",
                    media: this.media
                })
            }
        };
    const tl = 32;
    var el = {
            mixins: [Oe, mi, Yt],
            args: "target",
            props: {
                href: String,
                target: null,
                mode: "list",
                queued: Boolean
            },
            data: {
                href: !1,
                target: !1,
                mode: "click",
                queued: !0
            },
            computed: {
                target({
                    href: t,
                    target: e
                }, i) {
                    return e = Se(e || t, i),
                        e.length && e || [i]
                }
            },
            connected() {
                v(this.mode, "media") || (Je(this.$el) || f(this.$el, "tabindex", "0"), !this.cls && X(this.$el, "a") && f(this.$el, "role", "button")),
                    this.lazyload(this.$el, () => this.target)
            },
            events: [{
                name: gt,
                filter() {
                    return v(this.mode, "hover")
                },
                handler(t) {
                    this._preventClick = null, !(!Tt(t) || this._showState || this.$el.disabled) && (m(this.$el, "focus"),
                        L(document, gt, () => m(this.$el, "blur"), !0, e => !D(e.target, this.$el)),
                        v(this.mode, "click") && (this._preventClick = !0))
                }
            }, {
                name: `${At} ${qt} focus blur`,
                filter() {
                    return v(this.mode, "hover")
                },
                handler(t) {
                    if (Tt(t) || this.$el.disabled)
                        return;
                    const e = v([At, "focus"], t.type),
                        i = this.isToggled(this.target);
                    if (!(!e && (t.type === qt && _(this.$el, ":focus") || t.type === "blur" && _(this.$el, ":hover")))) {
                        if (this._showState && e && i !== this._showState) {
                            e || (this._showState = null);
                            return
                        }
                        this._showState = e ? i : null,
                            this.toggle(`toggle${e ? "show" : "hide"}`)
                    }
                }
            }, {
                name: "keydown",
                filter() {
                    return v(this.mode, "click") && !X(this.$el, "input")
                },
                handler(t) {
                    t.keyCode === tl && (t.preventDefault(),
                        this.$el.click())
                }
            }, {
                name: "click",
                filter() {
                    return ["click", "hover"].some(t => v(this.mode, t))
                },
                handler(t) {
                    let e;
                    (this._preventClick || Y(t.target, 'a[href="#"], a[href=""]') || (e = Y(t.target, "a[href]")) && (!this.isToggled(this.target) || e.hash && _(this.target, e.hash))) && t.preventDefault(), !this._preventClick && v(this.mode, "click") && this.toggle()
                }
            }, {
                name: "mediachange",
                filter() {
                    return v(this.mode, "media")
                },
                el() {
                    return this.target
                },
                handler(t, e) {
                    e.matches ^ this.isToggled(this.target) && this.toggle()
                }
            }],
            methods: {
                async toggle(t) {
                    if (!m(this.target, t || "toggle", [this]))
                        return;
                    if (wt(this.$el, "aria-expanded") && f(this.$el, "aria-expanded", !this.isToggled(this.target)), !this.queued)
                        return this.toggleElement(this.target);
                    const e = this.target.filter(s => B(s, this.clsLeave));
                    if (e.length) {
                        for (const s of this.target) {
                            const n = v(e, s);
                            this.toggleElement(s, n, n)
                        }
                        return
                    }
                    const i = this.target.filter(this.isToggled);
                    await this.toggleElement(i, !1),
                        await this.toggleElement(this.target.filter(s => !v(i, s)), !0)
                }
            }
        },
        il = Object.freeze({
            __proto__: null,
            Accordion: rn,
            Alert: yr,
            Close: ma,
            Cover: Sr,
            Drop: cn,
            DropParentIcon: Gt,
            Dropdown: cn,
            Dropnav: un,
            FormCustom: Dr,
            Grid: Mr,
            HeightMatch: Fr,
            HeightViewport: Wr,
            Icon: ns,
            Img: Ta,
            Leader: Oa,
            Margin: pn,
            Marker: va,
            Modal: za,
            Nav: Ha,
            NavParentIcon: da,
            Navbar: La,
            NavbarParentIcon: Gt,
            NavbarToggleIcon: ga,
            Offcanvas: Ra,
            OverflowAuto: Va,
            OverlayIcon: Gt,
            PaginationNext: ba,
            PaginationPrevious: $a,
            Responsive: Ya,
            Scroll: Ga,
            Scrollspy: Ka,
            ScrollspyNav: Za,
            SearchIcon: fa,
            SlidenavNext: kn,
            SlidenavPrevious: kn,
            Spinner: pa,
            Sticky: Qa,
            Svg: bn,
            Switcher: An,
            Tab: Ua,
            Toggle: el,
            Totop: wa,
            Video: an
        });
    St(il, (t, e) => it.component(e, t)),
        mr(it);
    const sl = ["days", "hours", "minutes", "seconds"];
    var nl = {
        mixins: [st],
        props: {
            date: String,
            clsWrapper: String,
            role: String
        },
        data: {
            date: "",
            clsWrapper: ".bdt-countdown-%unit%",
            role: "timer"
        },
        connected() {
            f(this.$el, "role", this.role),
                this.date = $(Date.parse(this.$props.date)),
                this.end = !1,
                this.start()
        },
        disconnected() {
            this.stop()
        },
        events: [{
            name: "visibilitychange",
            el() {
                return document
            },
            handler() {
                document.hidden ? this.stop() : this.start()
            }
        }],
        methods: {
            start() {
                this.stop(),
                    this.update(),
                    this.timer || (m(this.$el, "countdownstart"),
                        this.timer = setInterval(this.update, 1e3))
            },
            stop() {
                this.timer && (clearInterval(this.timer),
                    m(this.$el, "countdownstop"),
                    this.timer = null)
            },
            update() {
                const t = ol(this.date);
                t.total || (this.stop(),
                    this.end || (m(this.$el, "countdownend"),
                        this.end = !0));
                for (const e of sl) {
                    const i = w(this.clsWrapper.replace("%unit%", e), this.$el);
                    if (!i)
                        continue;
                    let s = String(Math.trunc(t[e]));
                    s = s.length < 2 ? `0${s}` : s,
                        i.textContent !== s && (s = s.split(""),
                            s.length !== i.children.length && It(i, s.map(() => "<span></span>").join("")),
                            s.forEach((n, o) => i.children[o].textContent = n))
                }
            }
        }
    };

    function ol(t) {
        const e = Math.max(0, t - Date.now()) / 1e3;
        return {
            total: e,
            seconds: e % 60,
            minutes: e / 60 % 60,
            hours: e / 60 / 60 % 24,
            days: e / 60 / 60 / 24
        }
    }
    const hs = "bdt-transition-leave",
        cs = "bdt-transition-enter";

    function On(t, e, i, s = 0) {
        const n = vi(e, !0),
            o = {
                opacity: 1
            },
            r = {
                opacity: 0
            },
            a = u => () => n === vi(e) ? u() : Promise.reject(),
            l = a(async () => {
                y(e, hs),
                    await Promise.all(Bn(e).map((u, d) => new Promise(p => setTimeout(() => S.start(u, r, i / 2, "ease").then(p), d * s)))),
                    z(e, hs)
            }),
            c = a(async () => {
                const u = et(e);
                y(e, cs),
                    t(),
                    h(E(e), {
                        opacity: 0
                    }),
                    await rl();
                const d = E(e),
                    p = et(e);
                h(e, "alignContent", "flex-start"),
                    et(e, u);
                const g = Bn(e);
                h(d, r);
                const T = g.map(async (F, M) => {
                    await al(M * s),
                        await S.start(F, o, i / 2, "ease")
                });
                u !== p && T.push(S.start(e, {
                        height: p
                    }, i / 2 + g.length * s, "ease")),
                    await Promise.all(T).then(() => {
                        z(e, cs),
                            n === vi(e) && (h(e, {
                                    height: "",
                                    alignContent: ""
                                }),
                                h(d, {
                                    opacity: ""
                                }),
                                delete e.dataset.transition)
                    })
            });
        return B(e, hs) ? Dn(e).then(c) : B(e, cs) ? Dn(e).then(l).then(c) : l().then(c)
    }

    function vi(t, e) {
        return e && (t.dataset.transition = 1 + vi(t)),
            kt(t.dataset.transition) || 0
    }

    function Dn(t) {
        return Promise.all(E(t).filter(S.inProgress).map(e => new Promise(i => L(e, "transitionend transitioncanceled", i))))
    }

    function Bn(t) {
        return is(E(t)).reduce((e, i) => e.concat(Ve(i.filter(s => Zi(s)), "offsetLeft")), [])
    }

    function rl() {
        return new Promise(t => requestAnimationFrame(t))
    }

    function al(t) {
        return new Promise(e => setTimeout(e, t))
    }
    async function ll(t, e, i) {
        await zn();
        let s = E(e);
        const n = s.map(p => Mn(p, !0)),
            o = {
                ...h(e, ["height", "padding"]),
                display: "block"
            };
        await Promise.all(s.concat(e).map(S.cancel)),
            t(),
            s = s.concat(E(e).filter(p => !v(s, p))),
            await Promise.resolve(),
            G.flush();
        const r = f(e, "style"),
            a = h(e, ["height", "padding"]),
            [l, c] = hl(e, s, n),
            u = s.map(p => ({
                style: f(p, "style")
            }));
        s.forEach((p, g) => c[g] && h(p, c[g])),
            h(e, o),
            m(e, "scroll"),
            G.flush(),
            await zn();
        const d = s.map((p, g) => A(p) === e && S.start(p, l[g], i, "ease")).concat(S.start(e, a, i, "ease"));
        try {
            await Promise.all(d),
                s.forEach((p, g) => {
                    f(p, u[g]),
                        A(p) === e && h(p, "display", l[g].opacity === 0 ? "none" : "")
                }),
                f(e, "style", r)
        } catch {
            f(s, "style", ""),
                cl(e, o)
        }
    }

    function Mn(t, e) {
        const i = h(t, "zIndex");
        return q(t) ? {
            display: "",
            opacity: e ? h(t, "opacity") : "0",
            pointerEvents: "none",
            position: "absolute",
            zIndex: i === "auto" ? oe(t) : i,
            ...Nn(t)
        } : !1
    }

    function hl(t, e, i) {
        const s = e.map((o, r) => A(o) && r in i ? i[r] ? q(o) ? Nn(o) : {
                opacity: 0
            } : {
                opacity: q(o) ? 1 : 0
            } : !1),
            n = s.map((o, r) => {
                const a = A(e[r]) === t && (i[r] || Mn(e[r]));
                if (!a)
                    return !1;
                if (!o)
                    delete a.opacity;
                else if (!("opacity" in o)) {
                    const {
                        opacity: l
                    } = a;
                    l % 1 ? o.opacity = 1 : delete a.opacity
                }
                return a
            });
        return [s, n]
    }

    function cl(t, e) {
        for (const i in e)
            h(t, i, "")
    }

    function Nn(t) {
        const {
            height: e,
            width: i
        } = I(t);
        return {
            height: e,
            width: i,
            transform: "",
            ...ti(t),
            ...h(t, ["marginTop", "marginLeft"])
        }
    }

    function zn() {
        return new Promise(t => requestAnimationFrame(t))
    }
    var Fn = {
            props: {
                duration: Number,
                animation: Boolean
            },
            data: {
                duration: 150,
                animation: "slide"
            },
            methods: {
                animate(t, e = this.$el) {
                    const i = this.animation;
                    return (i === "fade" ? On : i === "delayed-fade" ? (...n) => On(...n, 40) : i ? ll : () => (t(),
                        Promise.resolve()))(t, e, this.duration).catch(P)
                }
            }
        },
        ul = {
            mixins: [Fn],
            args: "target",
            props: {
                target: Boolean,
                selActive: Boolean
            },
            data: {
                target: null,
                selActive: !1,
                attrItem: "bdt-filter-control",
                cls: "bdt-active",
                duration: 250
            },
            computed: {
                toggles: {
                    get({
                        attrItem: t
                    }, e) {
                        return O(`[${t}],[data-${t}]`, e)
                    },
                    watch(t) {
                        this.updateState();
                        const e = O(this.selActive, this.$el);
                        for (const i of t) {
                            this.selActive !== !1 && j(i, this.cls, v(e, i));
                            const s = wl(i);
                            X(s, "a") && f(s, "role", "button")
                        }
                    },
                    immediate: !0
                },
                children: {
                    get({
                        target: t
                    }, e) {
                        return O(`${t} > *`, e)
                    },
                    watch(t, e) {
                        e && !gl(t, e) && this.updateState()
                    },
                    immediate: !0
                }
            },
            events: [{
                name: "click keydown",
                delegate() {
                    return `[${this.attrItem}],[data-${this.attrItem}]`
                },
                handler(t) {
                    t.type === "keydown" && t.keyCode !== C.SPACE || Y(t.target, "a,button") && (t.preventDefault(),
                        this.apply(t.current))
                }
            }],
            methods: {
                apply(t) {
                    const e = this.getState(),
                        i = Ln(t, this.attrItem, this.getState());
                    dl(e, i) || this.setState(i)
                },
                getState() {
                    return this.toggles.filter(t => B(t, this.cls)).reduce((t, e) => Ln(e, this.attrItem, t), {
                        filter: {
                            "": ""
                        },
                        sort: []
                    })
                },
                async setState(t, e = !0) {
                    t = {
                            filter: {
                                "": ""
                            },
                            sort: [],
                            ...t
                        },
                        m(this.$el, "beforeFilter", [this, t]);
                    for (const i of this.toggles)
                        j(i, this.cls, pl(i, this.attrItem, t));
                    await Promise.all(O(this.target, this.$el).map(i => {
                            const s = () => {
                                fl(t, i, E(i)),
                                    this.$update(this.$el)
                            };
                            return e ? this.animate(s, i) : s()
                        })),
                        m(this.$el, "afterFilter", [this])
                },
                updateState() {
                    G.write(() => this.setState(this.getState(), !1))
                }
            }
        };

    function Hn(t, e) {
        return de(tt(t, e), ["filter"])
    }

    function dl(t, e) {
        return ["filter", "sort"].every(i => be(t[i], e[i]))
    }

    function fl(t, e, i) {
        const s = ml(t);
        i.forEach(r => h(r, "display", s && !_(r, s) ? "none" : ""));
        const [n, o] = t.sort;
        if (n) {
            const r = vl(i, n, o);
            be(r, i) || W(e, r)
        }
    }

    function Ln(t, e, i) {
        const {
            filter: s,
            group: n,
            sort: o,
            order: r = "asc"
        } = Hn(t, e);
        return (s || V(o)) && (n ? s ? (delete i.filter[""],
                i.filter[n] = s) : (delete i.filter[n],
                (we(i.filter) || "" in i.filter) && (i.filter = {
                    "": s || ""
                })) : i.filter = {
                "": s || ""
            }),
            V(o) || (i.sort = [o, r]),
            i
    }

    function pl(t, e, {
        filter: i = {
            "": ""
        },
        sort: [s, n]
    }) {
        const {
            filter: o = "",
            group: r = "",
            sort: a,
            order: l = "asc"
        } = Hn(t, e);
        return V(a) ? r in i && o === i[r] || !o && r && !(r in i) && !i[""] : s === a && n === l
    }

    function gl(t, e) {
        return t.length === e.length && t.every(i => e.includes(i))
    }

    function ml({
        filter: t
    }) {
        let e = "";
        return St(t, i => e += i || ""),
            e
    }

    function vl(t, e, i) {
        return [...t].sort((s, n) => tt(s, e).localeCompare(tt(n, e), void 0, {
            numeric: !0
        }) * (i === "asc" || -1))
    }

    function wl(t) {
        return w("a,button", t) || t
    }
    var us = {
        slide: {
            show(t) {
                return [{
                    transform: H(t * -100)
                }, {
                    transform: H()
                }]
            },
            percent(t) {
                return ze(t)
            },
            translate(t, e) {
                return [{
                    transform: H(e * -100 * t)
                }, {
                    transform: H(e * 100 * (1 - t))
                }]
            }
        }
    };

    function ze(t) {
        return Math.abs(h(t, "transform").split(",")[4] / t.offsetWidth) || 0
    }

    function H(t = 0, e = "%") {
        return t += t ? e : "",
            `translate3d(${t}, 0, 0)`
    }

    function fe(t) {
        return `scale3d(${t}, ${t}, 1)`
    }
    var Wn = {
        ...us,
        fade: {
            show() {
                return [{
                    opacity: 0
                }, {
                    opacity: 1
                }]
            },
            percent(t) {
                return 1 - h(t, "opacity")
            },
            translate(t) {
                return [{
                    opacity: 1 - t
                }, {
                    opacity: t
                }]
            }
        },
        scale: {
            show() {
                return [{
                    opacity: 0,
                    transform: fe(1 - .2)
                }, {
                    opacity: 1,
                    transform: fe(1)
                }]
            },
            percent(t) {
                return 1 - h(t, "opacity")
            },
            translate(t) {
                return [{
                    opacity: 1 - t,
                    transform: fe(1 - .2 * t)
                }, {
                    opacity: t,
                    transform: fe(1 - .2 + .2 * t)
                }]
            }
        }
    };

    function bl(t, e, i, {
        animation: s,
        easing: n
    }) {
        const {
            percent: o,
            translate: r,
            show: a = P
        } = s, l = a(i), c = new Xe;
        return {
            dir: i,
            show(u, d = 0, p) {
                const g = p ? "linear" : n;
                return u -= Math.round(u * U(d, -1, 1)),
                    this.translate(d),
                    wi(e, "itemin", {
                        percent: d,
                        duration: u,
                        timing: g,
                        dir: i
                    }),
                    wi(t, "itemout", {
                        percent: 1 - d,
                        duration: u,
                        timing: g,
                        dir: i
                    }),
                    Promise.all([S.start(e, l[1], u, g), S.start(t, l[0], u, g)]).then(() => {
                        this.reset(),
                            c.resolve()
                    }, P),
                    c.promise
            },
            cancel() {
                S.cancel([e, t])
            },
            reset() {
                for (const u in l[0])
                    h([e, t], u, "")
            },
            forward(u, d = this.percent()) {
                return S.cancel([e, t]),
                    this.show(u, d, !0)
            },
            translate(u) {
                this.reset();
                const d = r(u, i);
                h(e, d[1]),
                    h(t, d[0]),
                    wi(e, "itemtranslatein", {
                        percent: u,
                        dir: i
                    }),
                    wi(t, "itemtranslateout", {
                        percent: 1 - u,
                        dir: i
                    })
            },
            percent() {
                return o(t || e, e, i)
            },
            getDistance() {
                return t == null ? void 0 : t.offsetWidth
            }
        }
    }

    function wi(t, e, i) {
        m(t, Ft(e, !1, !1, i))
    }
    var $l = {
        i18n: {
            next: "Next slide",
            previous: "Previous slide",
            slideX: "Slide %s",
            slideLabel: "%s of %s"
        },
        data: {
            selNav: !1
        },
        computed: {
            nav: {
                get({
                    selNav: t
                }, e) {
                    return w(t, e)
                },
                watch(t, e) {
                    f(t, "role", "tablist"),
                        e && this.$emit()
                },
                immediate: !0
            },
            selNavItem({
                attrItem: t
            }) {
                return `[${t}],[data-${t}]`
            },
            navItems: {
                get(t, e) {
                    return O(this.selNavItem, e)
                },
                watch() {
                    this.$emit()
                }
            }
        },
        connected() {
            f(this.$el, "aria-roledescription", "carousel")
        },
        update: [{
            write() {
                this.slides.forEach((t, e) => f(t, {
                        role: this.nav ? "tabpanel" : "group",
                        "aria-label": this.t("slideLabel", e + 1, this.length),
                        "aria-roledescription": this.nav ? null : "slide"
                    })),
                    this.nav && this.length !== this.nav.children.length && It(this.nav, this.slides.map((t, e) => `<li ${this.attrItem}="${e}"><a href></a></li>`).join("")),
                    f(E(this.nav).concat(this.list), "role", "presentation");
                for (const t of this.navItems) {
                    const e = tt(t, this.attrItem),
                        i = w("a,button", t) || t;
                    let s, n = null;
                    if (vt(e)) {
                        const o = kt(e),
                            r = this.slides[o];
                        r && (r.id || (r.id = Dt(this, r, `-item-${e}`)),
                                n = r.id),
                            s = this.t("slideX", $(e) + 1),
                            f(i, "role", "tab")
                    } else
                        this.list && (this.list.id || (this.list.id = Dt(this, this.list, "-items")),
                            n = this.list.id),
                        s = this.t(e);
                    f(i, {
                        "aria-controls": n,
                        "aria-label": f(i, "aria-label") || s
                    })
                }
            }
        }, {
            write() {
                this.navItems.concat(this.nav).forEach(t => t && (t.hidden = !this.maxIndex)),
                    this.updateNav()
            },
            events: ["resize"]
        }],
        events: [{
            name: "click keydown",
            delegate() {
                return this.selNavItem
            },
            handler(t) {
                Y(t.target, "a,button") && (t.type === "click" || t.keyCode === C.SPACE) && (t.preventDefault(),
                    this.show(tt(t.current, this.attrItem)))
            }
        }, {
            name: "itemshow",
            handler: "updateNav"
        }, {
            name: "keydown",
            delegate() {
                return this.selNavItem
            },
            handler(t) {
                const {
                    current: e,
                    keyCode: i
                } = t, s = tt(e, this.attrItem);
                if (!vt(s))
                    return;
                let n = i === C.HOME ? 0 : i === C.END ? "last" : i === C.LEFT ? "previous" : i === C.RIGHT ? "next" : -1;
                ~n && (t.preventDefault(),
                    this.show(n))
            }
        }],
        methods: {
            updateNav() {
                const t = this.getValidIndex();
                let e, i;
                for (const s of this.navItems) {
                    const n = tt(s, this.attrItem),
                        o = w("a,button", s) || s;
                    if (vt(n)) {
                        const a = kt(n) === t;
                        j(s, this.clsActive, a),
                            f(o, {
                                "aria-selected": a,
                                tabindex: a ? null : -1
                            }),
                            a && (i = o),
                            e = e || _(o, ":focus")
                    } else
                        j(s, "bdt-invisible", this.finite && (n === "previous" && t === 0 || n === "next" && t >= this.maxIndex));
                    e && i && i.focus()
                }
            }
        }
    };
    const ds = {
            passive: !1,
            capture: !0
        },
        Rn = {
            passive: !0,
            capture: !0
        },
        xl = "touchstart mousedown",
        fs = "touchmove mousemove",
        jn = "touchend touchcancel mouseup click input scroll";
    var yl = {
        props: {
            draggable: Boolean
        },
        data: {
            draggable: !0,
            threshold: 10
        },
        created() {
            for (const t of ["start", "move", "end"]) {
                const e = this[t];
                this[t] = i => {
                    const s = re(i).x * (J ? -1 : 1);
                    this.prevPos = s === this.pos ? this.prevPos : this.pos,
                        this.pos = s,
                        e(i)
                }
            }
        },
        events: [{
            name: xl,
            passive: !0,
            delegate() {
                return `${this.selList} > *`
            },
            handler(t) {
                !this.draggable || !Tt(t) && kl(t.target) || Y(t.target, xe) || t.button > 0 || this.length < 2 || this.start(t)
            }
        }, {
            name: "dragstart",
            handler(t) {
                t.preventDefault()
            }
        }, {
            name: fs,
            el() {
                return this.list
            },
            handler: P,
            ...ds
        }],
        methods: {
            start() {
                this.drag = this.pos,
                    this._transitioner ? (this.percent = this._transitioner.percent(),
                        this.drag += this._transitioner.getDistance() * this.percent * this.dir,
                        this._transitioner.cancel(),
                        this._transitioner.translate(this.percent),
                        this.dragging = !0,
                        this.stack = []) : this.prevIndex = this.index,
                    x(document, fs, this.move, ds),
                    x(document, jn, this.end, Rn),
                    h(this.list, "userSelect", "none")
            },
            move(t) {
                const e = this.pos - this.drag;
                if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold)
                    return;
                h(this.list, "pointerEvents", "none"),
                    t.cancelable && t.preventDefault(),
                    this.dragging = !0,
                    this.dir = e < 0 ? 1 : -1;
                const {
                    slides: i
                } = this;
                let {
                    prevIndex: s
                } = this, n = Math.abs(e), o = this.getIndex(s + this.dir, s), r = this._getDistance(s, o) || i[s].offsetWidth;
                for (; o !== s && n > r;)
                    this.drag -= r * this.dir,
                    s = o,
                    n -= r,
                    o = this.getIndex(s + this.dir, s),
                    r = this._getDistance(s, o) || i[s].offsetWidth;
                this.percent = n / r;
                const a = i[s],
                    l = i[o],
                    c = this.index !== o,
                    u = s === o;
                let d;
                [this.index, this.prevIndex].filter(p => !v([o, s], p)).forEach(p => {
                        m(i[p], "itemhidden", [this]),
                            u && (d = !0,
                                this.prevIndex = s)
                    }),
                    (this.index === s && this.prevIndex !== s || d) && m(i[this.index], "itemshown", [this]),
                    c && (this.prevIndex = s,
                        this.index = o, !u && m(a, "beforeitemhide", [this]),
                        m(l, "beforeitemshow", [this])),
                    this._transitioner = this._translate(Math.abs(this.percent), a, !u && l),
                    c && (!u && m(a, "itemhide", [this]),
                        m(l, "itemshow", [this]))
            },
            end() {
                if (zt(document, fs, this.move, ds),
                    zt(document, jn, this.end, Rn),
                    this.dragging)
                    if (this.dragging = null,
                        this.index === this.prevIndex)
                        this.percent = 1 - this.percent,
                        this.dir *= -1,
                        this._show(!1, this.index, !0),
                        this._transitioner = null;
                    else {
                        const t = (J ? this.dir * (J ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
                        this.index = t ? this.index : this.prevIndex,
                            t && (this.percent = 1 - this.percent),
                            this.show(this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous", !0)
                    }
                h(this.list, {
                        userSelect: "",
                        pointerEvents: ""
                    }),
                    this.drag = this.percent = null
            }
        }
    };

    function kl(t) {
        return h(t, "userSelect") !== "none" && k(t.childNodes).some(e => e.nodeType === 3 && e.textContent.trim())
    }
    var Sl = {
            props: {
                autoplay: Boolean,
                autoplayInterval: Number,
                pauseOnHover: Boolean
            },
            data: {
                autoplay: !1,
                autoplayInterval: 7e3,
                pauseOnHover: !0
            },
            connected() {
                f(this.list, "aria-live", "polite"),
                    this.autoplay && this.startAutoplay()
            },
            disconnected() {
                this.stopAutoplay()
            },
            update() {
                f(this.slides, "tabindex", "-1")
            },
            events: [{
                name: "visibilitychange",
                el() {
                    return document
                },
                filter() {
                    return this.autoplay
                },
                handler() {
                    document.hidden ? this.stopAutoplay() : this.startAutoplay()
                }
            }, {
                name: `${At} focusin`,
                filter() {
                    return this.autoplay
                },
                handler: "stopAutoplay"
            }, {
                name: `${qt} focusout`,
                filter() {
                    return this.autoplay
                },
                handler: "startAutoplay"
            }],
            methods: {
                startAutoplay() {
                    this.draggable && _(this.$el, ":focus-within") || this.pauseOnHover && _(this.$el, ":hover") || (this.stopAutoplay(),
                        this.interval = setInterval(() => !this.stack.length && this.show("next"), this.autoplayInterval),
                        f(this.list, "aria-live", "off"))
                },
                stopAutoplay() {
                    clearInterval(this.interval),
                        f(this.list, "aria-live", "polite")
                }
            }
        },
        qn = {
            mixins: [Sl, yl, $l, bt, ss],
            props: {
                clsActivated: Boolean,
                easing: String,
                index: Number,
                finite: Boolean,
                velocity: Number
            },
            data: () => ({
                easing: "ease",
                finite: !1,
                velocity: 1,
                index: 0,
                prevIndex: -1,
                stack: [],
                percent: 0,
                clsActive: "bdt-active",
                clsActivated: !1,
                Transitioner: !1,
                transitionOptions: {}
            }),
            connected() {
                this.prevIndex = -1,
                    this.index = this.getValidIndex(this.$props.index),
                    this.stack = []
            },
            disconnected() {
                z(this.slides, this.clsActive)
            },
            computed: {
                duration({
                    velocity: t
                }, e) {
                    return Vn(e.offsetWidth / t)
                },
                list({
                    selList: t
                }, e) {
                    return w(t, e)
                },
                maxIndex() {
                    return this.length - 1
                },
                slides: {
                    get() {
                        return E(this.list)
                    },
                    watch() {
                        this.$emit()
                    }
                },
                length() {
                    return this.slides.length
                }
            },
            methods: {
                show(t, e = !1) {
                    var i;
                    if (this.dragging || !this.length)
                        return;
                    const {
                        stack: s
                    } = this, n = e ? 0 : s.length, o = () => {
                        s.splice(n, 1),
                            s.length && this.show(s.shift(), !0)
                    };
                    if (s[e ? "unshift" : "push"](t), !e && s.length > 1) {
                        s.length === 2 && ((i = this._transitioner) == null || i.forward(Math.min(this.duration, 200)));
                        return
                    }
                    const r = this.getIndex(this.index),
                        a = B(this.slides, this.clsActive) && this.slides[r],
                        l = this.getIndex(t, this.index),
                        c = this.slides[l];
                    if (a === c) {
                        o();
                        return
                    }
                    if (this.dir = Tl(t, r),
                        this.prevIndex = r,
                        this.index = l,
                        a && !m(a, "beforeitemhide", [this]) || !m(c, "beforeitemshow", [this, a])) {
                        this.index = this.prevIndex,
                            o();
                        return
                    }
                    const u = this._show(a, c, e).then(() => {
                        a && m(a, "itemhidden", [this]),
                            m(c, "itemshown", [this]),
                            s.shift(),
                            this._transitioner = null,
                            requestAnimationFrame(() => s.length && this.show(s.shift(), !0))
                    });
                    return a && m(a, "itemhide", [this]),
                        m(c, "itemshow", [this]),
                        u
                },
                getIndex(t = this.index, e = this.index) {
                    return U(ct(t, this.slides, e, this.finite), 0, this.maxIndex)
                },
                getValidIndex(t = this.index, e = this.prevIndex) {
                    return this.getIndex(t, e)
                },
                _show(t, e, i) {
                    if (this._transitioner = this._getTransitioner(t, e, this.dir, {
                            easing: i ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing,
                            ...this.transitionOptions
                        }), !i && !t)
                        return this._translate(1),
                            Promise.resolve();
                    const {
                        length: s
                    } = this.stack;
                    return this._transitioner[s > 1 ? "forward" : "show"](s > 1 ? Math.min(this.duration, 75 + 75 / (s - 1)) : this.duration, this.percent)
                },
                _getDistance(t, e) {
                    return this._getTransitioner(t, t !== e && e).getDistance()
                },
                _translate(t, e = this.prevIndex, i = this.index) {
                    const s = this._getTransitioner(e === i ? !1 : e, i);
                    return s.translate(t),
                        s
                },
                _getTransitioner(t = this.prevIndex, e = this.index, i = this.dir || 1, s = this.transitionOptions) {
                    return new this.Transitioner(ee(t) ? this.slides[t] : t, ee(e) ? this.slides[e] : e, i * (J ? -1 : 1), s)
                }
            }
        };

    function Tl(t, e) {
        return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1
    }

    function Vn(t) {
        return .5 * t + 300
    }
    var Yn = {
            mixins: [qn],
            props: {
                animation: String
            },
            data: {
                animation: "slide",
                clsActivated: "bdt-transition-active",
                Animations: us,
                Transitioner: bl
            },
            computed: {
                animation({
                    animation: t,
                    Animations: e
                }) {
                    return {
                        ...e[t] || e.slide,
                        name: t
                    }
                },
                transitionOptions() {
                    return {
                        animation: this.animation
                    }
                }
            },
            events: {
                beforeitemshow({
                    target: t
                }) {
                    y(t, this.clsActive)
                },
                itemshown({
                    target: t
                }) {
                    y(t, this.clsActivated)
                },
                itemhidden({
                    target: t
                }) {
                    z(t, this.clsActive, this.clsActivated)
                }
            }
        },
        Gn = {
            mixins: [rs, Yn],
            functional: !0,
            props: {
                delayControls: Number,
                preload: Number,
                videoAutoplay: Boolean,
                template: String
            },
            data: () => ({
                preload: 1,
                videoAutoplay: !1,
                delayControls: 3e3,
                items: [],
                cls: "bdt-open",
                clsPage: "bdt-lightbox-page",
                selList: ".bdt-lightbox-items",
                attrItem: "bdt-lightbox-item",
                selClose: ".bdt-close-large",
                selCaption: ".bdt-lightbox-caption",
                pauseOnHover: !1,
                velocity: 2,
                Animations: Wn,
                template: '<div class="bdt-lightbox bdt-overflow-hidden"> <ul class="bdt-lightbox-items"></ul> <div class="bdt-lightbox-toolbar bdt-position-top bdt-text-right bdt-transition-slide-top bdt-transition-opaque"> <button class="bdt-lightbox-toolbar-icon bdt-close-large" type="button" bdt-close></button> </div> <a class="bdt-lightbox-button bdt-position-center-left bdt-position-medium bdt-transition-fade" href bdt-slidenav-previous bdt-lightbox-item="previous"></a> <a class="bdt-lightbox-button bdt-position-center-right bdt-position-medium bdt-transition-fade" href bdt-slidenav-next bdt-lightbox-item="next"></a> <div class="bdt-lightbox-toolbar bdt-lightbox-caption bdt-position-bottom bdt-text-center bdt-transition-slide-bottom bdt-transition-opaque"></div> </div>'
            }),
            created() {
                const t = w(this.template),
                    e = w(this.selList, t);
                this.items.forEach(() => W(e, "<li>"));
                const i = w("[bdt-close]", t),
                    s = this.t("close");
                i && s && (i.dataset.i18n = JSON.stringify({
                        label: s
                    })),
                    this.$mount(W(this.container, t))
            },
            computed: {
                caption({
                    selCaption: t
                }, e) {
                    return w(t, e)
                }
            },
            events: [{
                name: `${ii} ${gt} keydown`,
                handler: "showControls"
            }, {
                name: "click",
                self: !0,
                delegate() {
                    return `${this.selList} > *`
                },
                handler(t) {
                    t.defaultPrevented || this.hide()
                }
            }, {
                name: "shown",
                self: !0,
                handler() {
                    this.showControls()
                }
            }, {
                name: "hide",
                self: !0,
                handler() {
                    this.hideControls(),
                        z(this.slides, this.clsActive),
                        S.stop(this.slides)
                }
            }, {
                name: "hidden",
                self: !0,
                handler() {
                    this.$destroy(!0)
                }
            }, {
                name: "keyup",
                el() {
                    return document
                },
                handler({
                    keyCode: t
                }) {
                    if (!this.isToggled(this.$el) || !this.draggable)
                        return;
                    let e = -1;
                    t === C.LEFT ? e = "previous" : t === C.RIGHT ? e = "next" : t === C.HOME ? e = 0 : t === C.END && (e = "last"), ~e && this.show(e)
                }
            }, {
                name: "beforeitemshow",
                handler(t) {
                    this.isToggled() || (this.draggable = !1,
                        t.preventDefault(),
                        this.toggleElement(this.$el, !0, !1),
                        this.animation = Wn.scale,
                        z(t.target, this.clsActive),
                        this.stack.splice(1, 0, this.index))
                }
            }, {
                name: "itemshow",
                handler() {
                    It(this.caption, this.getItem().caption || "");
                    for (let t = -this.preload; t <= this.preload; t++)
                        this.loadItem(this.index + t)
                }
            }, {
                name: "itemshown",
                handler() {
                    this.draggable = this.$props.draggable
                }
            }, {
                name: "itemload",
                async handler(t, e) {
                    const {
                        source: i,
                        type: s,
                        alt: n = "",
                        poster: o,
                        attrs: r = {}
                    } = e;
                    if (this.setItem(e, "<span bdt-spinner></span>"), !i)
                        return;
                    let a;
                    const l = {
                        allowfullscreen: "",
                        style: "max-width: 100%; box-sizing: border-box;",
                        "bdt-responsive": "",
                        "bdt-video": `${this.videoAutoplay}`
                    };
                    if (s === "image" || i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)) {
                        const c = Fe("img", {
                            src: i,
                            alt: n,
                            ...r
                        });
                        x(c, "load", () => this.setItem(e, c)),
                            x(c, "error", () => this.setError(e))
                    } else if (s === "video" || i.match(/\.(mp4|webm|ogv)($|\?)/i)) {
                        const c = Fe("video", {
                            src: i,
                            poster: o,
                            controls: "",
                            playsinline: "",
                            "bdt-video": `${this.videoAutoplay}`,
                            ...r
                        });
                        x(c, "loadedmetadata", () => this.setItem(e, c)),
                            x(c, "error", () => this.setError(e))
                    } else if (s === "iframe" || i.match(/\.(html|php)($|\?)/i))
                        this.setItem(e, Fe("iframe", {
                            src: i,
                            allowfullscreen: "",
                            class: "bdt-lightbox-iframe",
                            ...r
                        }));
                    else if (a = i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))
                        this.setItem(e, Fe("iframe", {
                            src: `https://www.youtube${a[1] || ""}.com/embed/${a[2]}${a[3] ? `?${a[3]}` : ""}`,
                            width: 1920,
                            height: 1080,
                            ...l,
                            ...r
                        }));
                    else if (a = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))
                        try {
                            const {
                                height: c,
                                width: u
                            } = await (await fetch(`https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(i)}`, {
                                credentials: "omit"
                            })).json();
                            this.setItem(e, Fe("iframe", {
                                src: `https://player.vimeo.com/video/${a[1]}${a[2] ? `?${a[2]}` : ""}`,
                                width: u,
                                height: c,
                                ...l,
                                ...r
                            }))
                        } catch {
                            this.setError(e)
                        }
                }
            }],
            methods: {
                loadItem(t = this.index) {
                    const e = this.getItem(t);
                    this.getSlide(e).childElementCount || m(this.$el, "itemload", [e])
                },
                getItem(t = this.index) {
                    return this.items[ct(t, this.slides)]
                },
                setItem(t, e) {
                    m(this.$el, "itemloaded", [this, It(this.getSlide(t), e)])
                },
                getSlide(t) {
                    return this.slides[this.items.indexOf(t)]
                },
                setError(t) {
                    this.setItem(t, '<span bdt-icon="icon: bolt; ratio: 2"></span>')
                },
                showControls() {
                    clearTimeout(this.controlsTimer),
                        this.controlsTimer = setTimeout(this.hideControls, this.delayControls),
                        y(this.$el, "bdt-active", "bdt-transition-active")
                },
                hideControls() {
                    z(this.$el, "bdt-active", "bdt-transition-active")
                }
            }
        };

    function Fe(t, e) {
        const i = Ht(`<${t}>`);
        return f(i, e),
            i
    }
    var Cl = {
        install: _l,
        props: {
            toggle: String
        },
        data: {
            toggle: "a"
        },
        computed: {
            toggles: {
                get({
                    toggle: t
                }, e) {
                    return O(t, e)
                },
                watch(t) {
                    this.hide();
                    for (const e of t)
                        X(e, "a") && f(e, "role", "button")
                },
                immediate: !0
            }
        },
        disconnected() {
            this.hide()
        },
        events: [{
            name: "click",
            delegate() {
                return `${this.toggle}:not(.bdt-disabled)`
            },
            handler(t) {
                t.preventDefault(),
                    this.show(t.current)
            }
        }],
        methods: {
            show(t) {
                const e = $s(this.toggles.map(Xn), "source");
                if (te(t)) {
                    const {
                        source: i
                    } = Xn(t);
                    t = $t(e, ({
                        source: s
                    }) => i === s)
                }
                return this.panel = this.panel || this.$create("lightboxPanel", {
                        ...this.$props,
                        items: e
                    }),
                    x(this.panel.$el, "hidden", () => this.panel = null),
                    this.panel.show(t)
            },
            hide() {
                var t;
                return (t = this.panel) == null ? void 0 : t.hide()
            }
        }
    };

    function _l(t, e) {
        t.lightboxPanel || t.component("lightboxPanel", Gn),
            xt(e.props, t.component("lightboxPanel").options.props)
    }

    function Xn(t) {
        const e = {};
        for (const i of ["href", "caption", "type", "poster", "alt", "attrs"])
            e[i === "href" ? "source" : i] = tt(t, i);
        return e.attrs = de(e.attrs),
            e
    }
    var El = {
        mixins: [Be],
        functional: !0,
        args: ["message", "status"],
        data: {
            message: "",
            status: "",
            timeout: 5e3,
            group: null,
            pos: "top-center",
            clsContainer: "bdt-notification",
            clsClose: "bdt-notification-close",
            clsMsg: "bdt-notification-message"
        },
        install: Il,
        computed: {
            marginProp({
                pos: t
            }) {
                return `margin${ht(t, "top") ? "Top" : "Bottom"}`
            },
            startProps() {
                return {
                    opacity: 0,
                    [this.marginProp]: -this.$el.offsetHeight
                }
            }
        },
        created() {
            const t = w(`.${this.clsContainer}-${this.pos}`, this.container) || W(this.container, `<div class="${this.clsContainer} ${this.clsContainer}-${this.pos}" style="display: block"></div>`);
            this.$mount(W(t, `<div class="${this.clsMsg}${this.status ? ` ${this.clsMsg}-${this.status}` : ""}" role="alert"> <a href class="${this.clsClose}" data-bdt-close></a> <div>${this.message}</div> </div>`))
        },
        async connected() {
            const t = $(h(this.$el, this.marginProp));
            await S.start(h(this.$el, this.startProps), {
                    opacity: 1,
                    [this.marginProp]: t
                }),
                this.timeout && (this.timer = setTimeout(this.close, this.timeout))
        },
        events: {
            click(t) {
                Y(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(),
                    this.close()
            },
            [At]() {
                this.timer && clearTimeout(this.timer)
            },
            [qt]() {
                this.timeout && (this.timer = setTimeout(this.close, this.timeout))
            }
        },
        methods: {
            async close(t) {
                const e = i => {
                    const s = A(i);
                    m(i, "close", [this]),
                        ot(i),
                        s != null && s.hasChildNodes() || ot(s)
                };
                this.timer && clearTimeout(this.timer),
                    t || await S.start(this.$el, this.startProps),
                    e(this.$el)
            }
        }
    };

    function Il(t) {
        t.notification.closeAll = function(e, i) {
            Ct(document.body, s => {
                const n = t.getComponent(s, "notification");
                n && (!e || e === n.group) && n.close(i)
            })
        }
    }
    const bi = {
            x: $i,
            y: $i,
            rotate: $i,
            scale: $i,
            color: ps,
            backgroundColor: ps,
            borderColor: ps,
            blur: Jt,
            hue: Jt,
            fopacity: Jt,
            grayscale: Jt,
            invert: Jt,
            saturate: Jt,
            sepia: Jt,
            opacity: Al,
            stroke: Ol,
            bgx: Zn,
            bgy: Zn
        },
        {
            keys: Jn
        } = Object;
    var Kn = {
        mixins: [mi],
        props: eo(Jn(bi), "list"),
        data: eo(Jn(bi), void 0),
        computed: {
            props(t, e) {
                const i = {};
                for (const n in t)
                    n in bi && !V(t[n]) && (i[n] = t[n].slice());
                const s = {};
                for (const n in i)
                    s[n] = bi[n](n, e, i[n], i);
                return s
            }
        },
        events: {
            load() {
                this.$emit()
            }
        },
        methods: {
            reset() {
                for (const t in this.getCss(0))
                    h(this.$el, t, "")
            },
            getCss(t) {
                const e = {
                    transform: "",
                    filter: ""
                };
                for (const i in this.props)
                    this.props[i](e, t);
                return e.willChange = Object.keys(e).filter(i => e[i] !== "").join(","),
                    e
            }
        }
    };

    function $i(t, e, i) {
        let s = yi(i) || {
                x: "px",
                y: "px",
                rotate: "deg"
            }[t] || "",
            n;
        return t === "x" || t === "y" ? (t = `translate${_t(t)}`,
                n = o => $($(o).toFixed(s === "px" ? 0 : 6))) : t === "scale" && (s = "",
                n = o => yi([o]) ? rt(o, "width", e, !0) / e.offsetWidth : o),
            i.length === 1 && i.unshift(t === "scale" ? 1 : 0),
            i = pe(i, n),
            (o, r) => {
                o.transform += ` ${t}(${He(i, r)}${s})`
            }
    }

    function ps(t, e, i) {
        return i.length === 1 && i.unshift(Le(e, t, "")),
            i = pe(i, s => Pl(e, s)),
            (s, n) => {
                const [o, r, a] = to(i, n), l = o.map((c, u) => (c += a * (r[u] - c),
                    u === 3 ? $(c) : parseInt(c, 10))).join(",");
                s[t] = `rgba(${l})`
            }
    }

    function Pl(t, e) {
        return Le(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map($)
    }

    function Jt(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = yi(i) || {
            blur: "px",
            hue: "deg"
        }[t] || "%";
        return t = {
                fopacity: "opacity",
                hue: "hue-rotate"
            }[t] || t,
            i = pe(i),
            (n, o) => {
                const r = He(i, o);
                n.filter += ` ${t}(${r + s})`
            }
    }

    function Al(t, e, i) {
        return i.length === 1 && i.unshift(Le(e, t, "")),
            i = pe(i),
            (s, n) => {
                s[t] = He(i, n)
            }
    }

    function Ol(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = yi(i),
            n = sn(e);
        return i = pe(i.reverse(), o => (o = $(o),
                s === "%" ? o * n / 100 : o)),
            i.some(([o]) => o) ? (h(e, "strokeDasharray", n),
                (o, r) => {
                    o.strokeDashoffset = He(i, r)
                }
            ) : P
    }

    function Zn(t, e, i, s) {
        i.length === 1 && i.unshift(0);
        const n = t === "bgy" ? "height" : "width";
        s[t] = pe(i, a => rt(a, n, e));
        const o = ["bgx", "bgy"].filter(a => a in s);
        if (o.length === 2 && t === "bgx")
            return P;
        if (Le(e, "backgroundSize", "") === "cover")
            return Dl(t, e, i, s);
        const r = {};
        for (const a of o)
            r[a] = Qn(e, a);
        return Un(o, r, s)
    }

    function Dl(t, e, i, s) {
        const n = Bl(e);
        if (!n.width)
            return P;
        const o = {
                width: e.offsetWidth,
                height: e.offsetHeight
            },
            r = ["bgx", "bgy"].filter(u => u in s),
            a = {};
        for (const u of r) {
            const d = s[u].map(([M]) => M),
                p = Math.min(...d),
                g = Math.max(...d),
                T = d.indexOf(p) < d.indexOf(g),
                F = g - p;
            a[u] = `${(T ? -F : 0) - (T ? p : g)}px`,
                o[u === "bgy" ? "height" : "width"] += F
        }
        const l = Ge.cover(n, o);
        for (const u of r) {
            const d = u === "bgy" ? "height" : "width",
                p = l[d] - o[d];
            a[u] = `max(${Qn(e, u)},-${p}px) + ${a[u]}`
        }
        const c = Un(r, a, s);
        return (u, d) => {
            c(u, d),
                u.backgroundSize = `${l.width}px ${l.height}px`,
                u.backgroundRepeat = "no-repeat"
        }
    }

    function Qn(t, e) {
        return Le(t, `background-position-${e.substr(-1)}`, "")
    }

    function Un(t, e, i) {
        return function(s, n) {
            for (const o of t) {
                const r = He(i[o], n);
                s[`background-position-${o.substr(-1)}`] = `calc(${e[o]} + ${r}px)`
            }
        }
    }
    const xi = {};

    function Bl(t) {
        const e = h(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
        if (xi[e])
            return xi[e];
        const i = new Image;
        return e && (i.src = e, !i.naturalWidth) ? (i.onload = () => {
                xi[e] = gs(i),
                    m(t, Ft("load", !1))
            },
            gs(i)) : xi[e] = gs(i)
    }

    function gs(t) {
        return {
            width: t.naturalWidth,
            height: t.naturalHeight
        }
    }

    function pe(t, e = $) {
        const i = [],
            {
                length: s
            } = t;
        let n = 0;
        for (let o = 0; o < s; o++) {
            let [r, a] = N(t[o]) ? t[o].trim().split(" ") : [t[o]];
            if (r = e(r),
                a = a ? $(a) / 100 : null,
                o === 0 ? a === null ? a = 0 : a && i.push([r, 0]) : o === s - 1 && (a === null ? a = 1 : a !== 1 && (i.push([r, a]),
                    a = 1)),
                i.push([r, a]),
                a === null)
                n++;
            else if (n) {
                const l = i[o - n - 1][1],
                    c = (a - l) / (n + 1);
                for (let u = n; u > 0; u--)
                    i[o - u][1] = l + c * (n - u + 1);
                n = 0
            }
        }
        return i
    }

    function to(t, e) {
        const i = $t(t.slice(1), ([, s]) => e <= s) + 1;
        return [t[i - 1][0], t[i][0], (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])]
    }

    function He(t, e) {
        const [i, s, n] = to(t, e);
        return ee(i) ? i + Math.abs(i - s) * n * (i < s ? 1 : -1) : +s
    }
    const Ml = /^-?\d+(\S+)?/;

    function yi(t, e) {
        var i;
        for (const s of t) {
            const n = (i = s.match) == null ? void 0 : i.call(s, Ml);
            if (n)
                return n[1]
        }
        return e
    }

    function Le(t, e, i) {
        const s = t.style[e],
            n = h(h(t, e, i), e);
        return t.style[e] = s,
            n
    }

    function eo(t, e) {
        return t.reduce((i, s) => (i[s] = e,
            i), {})
    }
    var Nl = {
        mixins: [Kn, bt, ci],
        props: {
            target: String,
            viewport: Number,
            easing: Number,
            start: String,
            end: String
        },
        data: {
            target: !1,
            viewport: 1,
            easing: 1,
            start: 0,
            end: 0
        },
        computed: {
            target({
                target: t
            }, e) {
                return io(t && ut(t, e) || e)
            },
            start({
                start: t
            }) {
                return rt(t, "height", this.target, !0)
            },
            end({
                end: t,
                viewport: e
            }) {
                return rt(t || (e = (1 - e) * 100) && `${e}vh+${e}%`, "height", this.target, !0)
            }
        },
        resizeTargets() {
            return [this.$el, this.target]
        },
        update: {
            read({
                percent: t
            }, e) {
                if (e.has("scroll") || (t = !1), !q(this.$el))
                    return !1;
                if (!this.matchMedia)
                    return;
                const i = t;
                return t = zl(Qi(this.target, this.start, this.end), this.easing), {
                    percent: t,
                    style: i === t ? !1 : this.getCss(t)
                }
            },
            write({
                style: t
            }) {
                if (!this.matchMedia) {
                    this.reset();
                    return
                }
                t && h(this.$el, t)
            },
            events: ["scroll", "resize"]
        }
    };

    function zl(t, e) {
        return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e)
    }

    function io(t) {
        return t ? "offsetTop" in t ? t : io(A(t)) : document.documentElement
    }
    var so = {
            update: {
                write() {
                    if (this.stack.length || this.dragging)
                        return;
                    const t = this.getValidIndex(this.index);
                    !~this.prevIndex || this.index !== t ? this.show(t) : this._translate(1, this.prevIndex, this.index)
                },
                events: ["resize"]
            }
        },
        no = {
            mixins: [Oe],
            connected() {
                this.lazyload(this.slides, this.getAdjacentSlides)
            }
        };

    function Fl(t, e, i, {
        center: s,
        easing: n,
        list: o
    }) {
        const r = new Xe,
            a = t ? We(t, o, s) : We(e, o, s) + b(e).width * i,
            l = e ? We(e, o, s) : a + b(t).width * i * (J ? -1 : 1);
        return {
            dir: i,
            show(c, u = 0, d) {
                const p = d ? "linear" : n;
                return c -= Math.round(c * U(u, -1, 1)),
                    this.translate(u),
                    u = t ? u : U(u, 0, 1),
                    ms(this.getItemIn(), "itemin", {
                        percent: u,
                        duration: c,
                        timing: p,
                        dir: i
                    }),
                    t && ms(this.getItemIn(!0), "itemout", {
                        percent: 1 - u,
                        duration: c,
                        timing: p,
                        dir: i
                    }),
                    S.start(o, {
                        transform: H(-l * (J ? -1 : 1), "px")
                    }, c, p).then(r.resolve, P),
                    r.promise
            },
            cancel() {
                S.cancel(o)
            },
            reset() {
                h(o, "transform", "")
            },
            forward(c, u = this.percent()) {
                return S.cancel(o),
                    this.show(c, u, !0)
            },
            translate(c) {
                const u = this.getDistance() * i * (J ? -1 : 1);
                h(o, "transform", H(U(-l + (u - u * c), -ki(o), b(o).width) * (J ? -1 : 1), "px"));
                const d = this.getActives(),
                    p = this.getItemIn(),
                    g = this.getItemIn(!0);
                c = t ? U(c, -1, 1) : 0;
                for (const T of E(o)) {
                    const F = v(d, T),
                        M = T === p,
                        Bt = T === g,
                        vs = M || !Bt && (F || i * (J ? -1 : 1) === -1 ^ Si(T, o) > Si(t || e));
                    ms(T, `itemtranslate${vs ? "in" : "out"}`, {
                        dir: i,
                        percent: Bt ? 1 - c : M ? c : F ? 1 : 0
                    })
                }
            },
            percent() {
                return Math.abs((h(o, "transform").split(",")[4] * (J ? -1 : 1) + a) / (l - a))
            },
            getDistance() {
                return Math.abs(l - a)
            },
            getItemIn(c = !1) {
                let u = this.getActives(),
                    d = ro(o, We(e || t, o, s));
                if (c) {
                    const p = u;
                    u = d,
                        d = p
                }
                return d[$t(d, p => !v(u, p))]
            },
            getActives() {
                return ro(o, We(t || e, o, s))
            }
        }
    }

    function We(t, e, i) {
        const s = Si(t, e);
        return i ? s - Hl(t, e) : Math.min(s, oo(e))
    }

    function oo(t) {
        return Math.max(0, ki(t) - b(t).width)
    }

    function ki(t) {
        return Nt(E(t), e => b(e).width)
    }

    function Hl(t, e) {
        return b(e).width / 2 - b(t).width / 2
    }

    function Si(t, e) {
        return t && (ti(t).left + (J ? b(t).width - b(e).width : 0)) * (J ? -1 : 1) || 0
    }

    function ro(t, e) {
        e -= 1;
        const i = b(t).width,
            s = e + i + 2;
        return E(t).filter(n => {
            const o = Si(n, t),
                r = o + Math.min(b(n).width, i);
            return o >= e && r <= s
        })
    }

    function ms(t, e, i) {
        m(t, Ft(e, !1, !1, i))
    }
    var Ll = {
        mixins: [st, qn, so, no],
        props: {
            center: Boolean,
            sets: Boolean
        },
        data: {
            center: !1,
            sets: !1,
            attrItem: "bdt-slider-item",
            selList: ".bdt-slider-items",
            selNav: ".bdt-slider-nav",
            clsContainer: "bdt-slider-container",
            Transitioner: Fl
        },
        computed: {
            avgWidth() {
                return ki(this.list) / this.length
            },
            finite({
                finite: t
            }) {
                return t || Wl(this.list, this.center)
            },
            maxIndex() {
                if (!this.finite || this.center && !this.sets)
                    return this.length - 1;
                if (this.center)
                    return se(this.sets);
                let t = 0;
                const e = oo(this.list),
                    i = $t(this.slides, s => {
                        if (t >= e)
                            return !0;
                        t += b(s).width
                    });
                return ~i ? i : this.length - 1
            },
            sets({
                sets: t
            }) {
                if (!t)
                    return;
                let e = 0;
                const i = [],
                    s = b(this.list).width;
                for (let n = 0; n < this.length; n++) {
                    const o = b(this.slides[n]).width;
                    e + o > s && (e = 0),
                        this.center ? e < s / 2 && e + o + b(this.slides[+n + 1]).width / 2 > s / 2 && (i.push(+n),
                            e = s / 2 - o / 2) : e === 0 && i.push(Math.min(+n, this.maxIndex)),
                        e += o
                }
                if (i.length)
                    return i
            },
            transitionOptions() {
                return {
                    center: this.center,
                    list: this.list
                }
            }
        },
        connected() {
            j(this.$el, this.clsContainer, !w(`.${this.clsContainer}`, this.$el))
        },
        update: {
            write() {
                for (const t of this.navItems) {
                    const e = kt(tt(t, this.attrItem));
                    e !== !1 && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !v(this.sets, e))
                }
                this.length && !this.dragging && !this.stack.length && (this.reorder(),
                        this._translate(1)),
                    this.updateActiveClasses()
            },
            events: ["resize"]
        },
        events: {
            beforeitemshow(t) {
                !this.dragging && this.sets && this.stack.length < 2 && !v(this.sets, this.index) && (this.index = this.getValidIndex());
                const e = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
                if (!this.dragging && e > 1) {
                    for (let s = 0; s < e; s++)
                        this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
                    t.preventDefault();
                    return
                }
                const i = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
                this.duration = Vn(this.avgWidth / this.velocity) * (b(this.slides[i]).width / this.avgWidth),
                    this.reorder()
            },
            itemshow() {
                ~this.prevIndex && y(this._getTransitioner().getItemIn(), this.clsActive)
            },
            itemshown() {
                this.updateActiveClasses()
            }
        },
        methods: {
            reorder() {
                if (this.finite) {
                    h(this.slides, "order", "");
                    return
                }
                const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
                if (this.slides.forEach((n, o) => h(n, "order", this.dir > 0 && o < t ? 1 : this.dir < 0 && o >= this.index ? -1 : "")), !this.center)
                    return;
                const e = this.slides[t];
                let i = b(this.list).width / 2 - b(e).width / 2,
                    s = 0;
                for (; i > 0;) {
                    const n = this.getIndex(--s + t, t),
                        o = this.slides[n];
                    h(o, "order", n > t ? -2 : -1),
                        i -= b(o).width
                }
            },
            updateActiveClasses() {
                const t = this._getTransitioner(this.index).getActives(),
                    e = [this.clsActive, (!this.sets || v(this.sets, $(this.index))) && this.clsActivated || ""];
                for (const i of this.slides) {
                    const s = v(t, i);
                    j(i, e, s),
                        f(i, "aria-hidden", !s),
                        f(O(ye, i), "tabindex", s ? null : -1)
                }
            },
            getValidIndex(t = this.index, e = this.prevIndex) {
                if (t = this.getIndex(t, e), !this.sets)
                    return t;
                let i;
                do {
                    if (v(this.sets, t))
                        return t;
                    i = t,
                        t = this.getIndex(t + this.dir, e)
                } while (t !== i);
                return t
            },
            getAdjacentSlides() {
                const {
                    width: t
                } = b(this.list), e = -t, i = t * 2, s = b(this.slides[this.index]).width, n = this.center ? t / 2 - s / 2 : 0, o = new Set;
                for (const r of [-1, 1]) {
                    let a = n + (r > 0 ? s : 0),
                        l = 0;
                    do {
                        const c = this.slides[this.getIndex(this.index + r + l++ * r)];
                        a += b(c).width * r,
                            o.add(c)
                    } while (this.length > l && a > e && a < i)
                }
                return Array.from(o)
            }
        }
    };

    function Wl(t, e) {
        if (!t || t.length < 2)
            return !0;
        const {
            width: i
        } = b(t);
        if (!e)
            return Math.ceil(ki(t)) < Math.trunc(i + Rl(t));
        const s = E(t),
            n = Math.trunc(i / 2);
        for (const o in s) {
            const r = s[o],
                a = b(r).width,
                l = new Set([r]);
            let c = 0;
            for (const u of [-1, 1]) {
                let d = a / 2,
                    p = 0;
                for (; d < n;) {
                    const g = s[ct(+o + u + p++ * u, s)];
                    if (l.has(g))
                        return !0;
                    d += b(g).width,
                        l.add(g)
                }
                c = Math.max(c, a / 2 + b(s[ct(+o + u, s)]).width / 2 - (d - n))
            }
            if (c > Nt(s.filter(u => !l.has(u)), u => b(u).width))
                return !0
        }
        return !1
    }

    function Rl(t) {
        return Math.max(0, ...E(t).map(e => b(e).width))
    }
    var ao = {
        mixins: [Kn],
        data: {
            selItem: "!li"
        },
        beforeConnect() {
            this.item = ut(this.selItem, this.$el)
        },
        disconnected() {
            this.item = null
        },
        events: [{
            name: "itemin itemout",
            self: !0,
            el() {
                return this.item
            },
            handler({
                type: t,
                detail: {
                    percent: e,
                    duration: i,
                    timing: s,
                    dir: n
                }
            }) {
                G.read(() => {
                    if (!this.matchMedia)
                        return;
                    const o = this.getCss(ho(t, n, e)),
                        r = this.getCss(lo(t) ? .5 : n > 0 ? 1 : 0);
                    G.write(() => {
                        h(this.$el, o),
                            S.start(this.$el, r, i, s).catch(P)
                    })
                })
            }
        }, {
            name: "transitioncanceled transitionend",
            self: !0,
            el() {
                return this.item
            },
            handler() {
                S.cancel(this.$el)
            }
        }, {
            name: "itemtranslatein itemtranslateout",
            self: !0,
            el() {
                return this.item
            },
            handler({
                type: t,
                detail: {
                    percent: e,
                    dir: i
                }
            }) {
                G.read(() => {
                    if (!this.matchMedia) {
                        this.reset();
                        return
                    }
                    const s = this.getCss(ho(t, i, e));
                    G.write(() => h(this.$el, s))
                })
            }
        }]
    };

    function lo(t) {
        return Qt(t, "in")
    }

    function ho(t, e, i) {
        return i /= 2,
            lo(t) ^ e < 0 ? i : 1 - i
    }
    var jl = {
            ...us,
            fade: {
                show() {
                    return [{
                        opacity: 0,
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                },
                percent(t) {
                    return 1 - h(t, "opacity")
                },
                translate(t) {
                    return [{
                        opacity: 1 - t,
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                }
            },
            scale: {
                show() {
                    return [{
                        opacity: 0,
                        transform: fe(1 + .5),
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                },
                percent(t) {
                    return 1 - h(t, "opacity")
                },
                translate(t) {
                    return [{
                        opacity: 1 - t,
                        transform: fe(1 + .5 * t),
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                }
            },
            pull: {
                show(t) {
                    return t < 0 ? [{
                        transform: H(30),
                        zIndex: -1
                    }, {
                        transform: H(),
                        zIndex: 0
                    }] : [{
                        transform: H(-100),
                        zIndex: 0
                    }, {
                        transform: H(),
                        zIndex: -1
                    }]
                },
                percent(t, e, i) {
                    return i < 0 ? 1 - ze(e) : ze(t)
                },
                translate(t, e) {
                    return e < 0 ? [{
                        transform: H(30 * t),
                        zIndex: -1
                    }, {
                        transform: H(-100 * (1 - t)),
                        zIndex: 0
                    }] : [{
                        transform: H(-t * 100),
                        zIndex: 0
                    }, {
                        transform: H(30 * (1 - t)),
                        zIndex: -1
                    }]
                }
            },
            push: {
                show(t) {
                    return t < 0 ? [{
                        transform: H(100),
                        zIndex: 0
                    }, {
                        transform: H(),
                        zIndex: -1
                    }] : [{
                        transform: H(-30),
                        zIndex: -1
                    }, {
                        transform: H(),
                        zIndex: 0
                    }]
                },
                percent(t, e, i) {
                    return i > 0 ? 1 - ze(e) : ze(t)
                },
                translate(t, e) {
                    return e < 0 ? [{
                        transform: H(t * 100),
                        zIndex: 0
                    }, {
                        transform: H(-30 * (1 - t)),
                        zIndex: -1
                    }] : [{
                        transform: H(-30 * t),
                        zIndex: -1
                    }, {
                        transform: H(100 * (1 - t)),
                        zIndex: 0
                    }]
                }
            }
        },
        ql = {
            mixins: [st, Yn, so, no],
            props: {
                ratio: String,
                minHeight: Number,
                maxHeight: Number
            },
            data: {
                ratio: "16:9",
                minHeight: !1,
                maxHeight: !1,
                selList: ".bdt-slideshow-items",
                attrItem: "bdt-slideshow-item",
                selNav: ".bdt-slideshow-nav",
                Animations: jl
            },
            update: {
                read() {
                    if (!this.list)
                        return !1;
                    let [t, e] = this.ratio.split(":").map(Number);
                    return e = e * this.list.offsetWidth / t || 0,
                        this.minHeight && (e = Math.max(this.minHeight, e)),
                        this.maxHeight && (e = Math.min(this.maxHeight, e)), {
                            height: e - ae(this.list, "height", "content-box")
                        }
                },
                write({
                    height: t
                }) {
                    t > 0 && h(this.list, "minHeight", t)
                },
                events: ["resize"]
            },
            methods: {
                getAdjacentSlides() {
                    return [1, -1].map(t => this.slides[this.getIndex(this.index + t)])
                }
            }
        },
        Vl = {
            mixins: [st, Fn],
            props: {
                group: String,
                threshold: Number,
                clsItem: String,
                clsPlaceholder: String,
                clsDrag: String,
                clsDragState: String,
                clsBase: String,
                clsNoDrag: String,
                clsEmpty: String,
                clsCustom: String,
                handle: String
            },
            data: {
                group: !1,
                threshold: 5,
                clsItem: "bdt-sortable-item",
                clsPlaceholder: "bdt-sortable-placeholder",
                clsDrag: "bdt-sortable-drag",
                clsDragState: "bdt-drag",
                clsBase: "bdt-sortable",
                clsNoDrag: "bdt-sortable-nodrag",
                clsEmpty: "bdt-sortable-empty",
                clsCustom: "",
                handle: !1,
                pos: {}
            },
            created() {
                for (const t of ["init", "start", "move", "end"]) {
                    const e = this[t];
                    this[t] = i => {
                        xt(this.pos, re(i)),
                            e(i)
                    }
                }
            },
            events: {
                name: gt,
                passive: !1,
                handler: "init"
            },
            computed: {
                target() {
                    return (this.$el.tBodies || [this.$el])[0]
                },
                items() {
                    return E(this.target)
                },
                isEmpty: {
                    get() {
                        return we(this.items)
                    },
                    watch(t) {
                        j(this.target, this.clsEmpty, t)
                    },
                    immediate: !0
                },
                handles: {
                    get({
                        handle: t
                    }, e) {
                        return t ? O(t, e) : this.items
                    },
                    watch(t, e) {
                        h(e, {
                                touchAction: "",
                                userSelect: ""
                            }),
                            h(t, {
                                touchAction: jt ? "none" : "",
                                userSelect: "none"
                            })
                    },
                    immediate: !0
                }
            },
            update: {
                write(t) {
                    if (!this.drag || !A(this.placeholder))
                        return;
                    const {
                        pos: {
                            x: e,
                            y: i
                        },
                        origin: {
                            offsetTop: s,
                            offsetLeft: n
                        },
                        placeholder: o
                    } = this;
                    h(this.drag, {
                        top: i - s,
                        left: e - n
                    });
                    const r = this.getSortable(document.elementFromPoint(e, i));
                    if (!r)
                        return;
                    const {
                        items: a
                    } = r;
                    if (a.some(S.inProgress))
                        return;
                    const l = Jl(a, {
                        x: e,
                        y: i
                    });
                    if (a.length && (!l || l === o))
                        return;
                    const c = this.getSortable(o),
                        u = Kl(r.target, l, o, e, i, r === c && t.moved !== l);
                    u !== !1 && (u && o === u || (r !== c ? (c.remove(o),
                            t.moved = l) : delete t.moved,
                        r.insert(o, u),
                        this.touched.add(r)))
                },
                events: ["move"]
            },
            methods: {
                init(t) {
                    const {
                        target: e,
                        button: i,
                        defaultPrevented: s
                    } = t, [n] = this.items.filter(o => D(e, o));
                    !n || s || i > 0 || Mi(e) || D(e, `.${this.clsNoDrag}`) || this.handle && !D(e, this.handle) || (t.preventDefault(),
                        this.touched = new Set([this]),
                        this.placeholder = n,
                        this.origin = {
                            target: e,
                            index: oe(n),
                            ...this.pos
                        },
                        x(document, ii, this.move),
                        x(document, Pt, this.end),
                        this.threshold || this.start(t))
                },
                start(t) {
                    this.drag = Xl(this.$container, this.placeholder);
                    const {
                        left: e,
                        top: i
                    } = this.placeholder.getBoundingClientRect();
                    xt(this.origin, {
                            offsetLeft: this.pos.x - e,
                            offsetTop: this.pos.y - i
                        }),
                        y(this.drag, this.clsDrag, this.clsCustom),
                        y(this.placeholder, this.clsPlaceholder),
                        y(this.items, this.clsItem),
                        y(document.documentElement, this.clsDragState),
                        m(this.$el, "start", [this, this.placeholder]),
                        Yl(this.pos),
                        this.move(t)
                },
                move(t) {
                    this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t)
                },
                end() {
                    if (zt(document, ii, this.move),
                        zt(document, Pt, this.end), !this.drag)
                        return;
                    Gl();
                    const t = this.getSortable(this.placeholder);
                    this === t ? this.origin.index !== oe(this.placeholder) && m(this.$el, "moved", [this, this.placeholder]) : (m(t.$el, "added", [t, this.placeholder]),
                            m(this.$el, "removed", [this, this.placeholder])),
                        m(this.$el, "stop", [this, this.placeholder]),
                        ot(this.drag),
                        this.drag = null;
                    for (const {
                            clsPlaceholder: e,
                            clsItem: i
                        } of this.touched)
                        for (const s of this.touched)
                            z(s.items, e, i);
                    this.touched = null,
                        z(document.documentElement, this.clsDragState)
                },
                insert(t, e) {
                    y(this.items, this.clsItem);
                    const i = () => e ? Ke(e, t) : W(this.target, t);
                    this.animate(i)
                },
                remove(t) {
                    D(t, this.target) && this.animate(() => ot(t))
                },
                getSortable(t) {
                    do {
                        const e = this.$getComponent(t, "sortable");
                        if (e && (e === this || this.group !== !1 && e.group === this.group))
                            return e
                    } while (t = A(t))
                }
            }
        };
    let co;

    function Yl(t) {
        let e = Date.now();
        co = setInterval(() => {
            let {
                x: i,
                y: s
            } = t;
            s += document.scrollingElement.scrollTop;
            const n = (Date.now() - e) * .3;
            e = Date.now(),
                mt(document.elementFromPoint(i, t.y)).reverse().some(o => {
                    let {
                        scrollTop: r,
                        scrollHeight: a
                    } = o;
                    const {
                        top: l,
                        bottom: c,
                        height: u
                    } = at(o);
                    if (l < s && l + 35 > s)
                        r -= n;
                    else if (c > s && c - 35 < s)
                        r += n;
                    else
                        return;
                    if (r > 0 && r < a - u)
                        return o.scrollTop = r, !0
                })
        }, 15)
    }

    function Gl() {
        clearInterval(co)
    }

    function Xl(t, e) {
        let i;
        if (X(e, "li", "tr")) {
            i = w("<div>"),
                W(i, e.cloneNode(!0).children);
            for (const s of e.getAttributeNames())
                f(i, s, e.getAttribute(s))
        } else
            i = e.cloneNode(!0);
        return W(t, i),
            h(i, "margin", "0", "important"),
            h(i, {
                boxSizing: "border-box",
                width: e.offsetWidth,
                height: e.offsetHeight,
                padding: h(e, "padding")
            }),
            et(i.firstElementChild, et(e.firstElementChild)),
            i
    }

    function Jl(t, e) {
        return t[$t(t, i => Ye(e, i.getBoundingClientRect()))]
    }

    function Kl(t, e, i, s, n, o) {
        if (!E(t).length)
            return;
        const r = e.getBoundingClientRect();
        if (!o)
            return Zl(t, i) || n < r.top + r.height / 2 ? e : e.nextElementSibling;
        const a = i.getBoundingClientRect(),
            l = uo([r.top, r.bottom], [a.top, a.bottom]),
            [c, u, d, p] = l ? [s, "width", "left", "right"] : [n, "height", "top", "bottom"],
            g = a[u] < r[u] ? r[u] - a[u] : 0;
        return a[d] < r[d] ? g && c < r[d] + g ? !1 : e.nextElementSibling : g && c > r[p] - g ? !1 : e
    }

    function Zl(t, e) {
        const i = E(t).length === 1;
        i && W(t, e);
        const s = E(t),
            n = s.some((o, r) => {
                const a = o.getBoundingClientRect();
                return s.slice(r + 1).some(l => {
                    const c = l.getBoundingClientRect();
                    return !uo([a.left, a.right], [c.left, c.right])
                })
            });
        return i && ot(e),
            n
    }

    function uo(t, e) {
        return t[1] > e[0] && e[1] > t[0]
    }
    var Ql = {
        mixins: [Be, Yt, hn],
        args: "title",
        props: {
            delay: Number,
            title: String
        },
        data: {
            pos: "top",
            title: "",
            delay: 0,
            animation: ["bdt-animation-scale-up"],
            duration: 100,
            cls: "bdt-active"
        },
        beforeConnect() {
            this.id = Dt(this),
                this._hasTitle = wt(this.$el, "title"),
                f(this.$el, {
                    title: "",
                    "aria-describedby": this.id
                }),
                Ul(this.$el)
        },
        disconnected() {
            this.hide(),
                f(this.$el, "title") || f(this.$el, "title", this._hasTitle ? this.title : null)
        },
        methods: {
            show() {
                this.isToggled(this.tooltip || null) || !this.title || (clearTimeout(this.showTimer),
                    this.showTimer = setTimeout(this._show, this.delay))
            },
            async hide() {
                _(this.$el, "input:focus") || (clearTimeout(this.showTimer),
                    this.isToggled(this.tooltip || null) && (await this.toggleElement(this.tooltip, !1, !1),
                        ot(this.tooltip),
                        this.tooltip = null))
            },
            _show() {
                this.tooltip = W(this.container, `<div id="${this.id}" class="bdt-${this.$options.name}" role="tooltip"> <div class="bdt-${this.$options.name}-inner">${this.title}</div> </div>`),
                    x(this.tooltip, "toggled", (t, e) => {
                        if (!e)
                            return;
                        const i = () => this.positionAt(this.tooltip, this.$el);
                        i();
                        const [s, n] = th(this.tooltip, this.$el, this.pos);
                        this.origin = this.axis === "y" ? `${ei(s)}-${n}` : `${n}-${ei(s)}`;
                        const o = [L(document, `keydown ${gt}`, this.hide, !1, r => r.type === gt && !D(r.target, this.$el) || r.type === "keydown" && r.keyCode === C.ESC), x([document, ...Vt(this.$el)], "scroll", i, {
                            passive: !0
                        })];
                        L(this.tooltip, "hide", () => o.forEach(r => r()), {
                            self: !0
                        })
                    }),
                    this.toggleElement(this.tooltip, !0)
            }
        },
        events: {
            focus: "show",
            blur: "hide",
            [`${At} ${qt}`](t) {
                Tt(t) || this[t.type === At ? "show" : "hide"]()
            },
            [gt](t) {
                Tt(t) && this.show()
            }
        }
    };

    function Ul(t) {
        Je(t) || f(t, "tabindex", "0")
    }

    function th(t, e, [i, s]) {
        const n = I(t),
            o = I(e),
            r = [
                ["left", "right"],
                ["top", "bottom"]
            ];
        for (const l of r) {
            if (n[l[0]] >= o[l[1]]) {
                i = l[1];
                break
            }
            if (n[l[1]] <= o[l[0]]) {
                i = l[0];
                break
            }
        }
        const a = v(r[0], i) ? r[1] : r[0];
        return n[a[0]] === o[a[0]] ? s = a[0] : n[a[1]] === o[a[1]] ? s = a[1] : s = "center", [i, s]
    }
    var eh = {
        mixins: [ss],
        i18n: {
            invalidMime: "Invalid File Type: %s",
            invalidName: "Invalid File Name: %s",
            invalidSize: "Invalid File Size: %s Kilobytes Max"
        },
        props: {
            allow: String,
            clsDragover: String,
            concurrent: Number,
            maxSize: Number,
            method: String,
            mime: String,
            multiple: Boolean,
            name: String,
            params: Object,
            type: String,
            url: String
        },
        data: {
            allow: !1,
            clsDragover: "bdt-dragover",
            concurrent: 1,
            maxSize: 0,
            method: "POST",
            mime: !1,
            multiple: !1,
            name: "files[]",
            params: {},
            type: "",
            url: "",
            abort: P,
            beforeAll: P,
            beforeSend: P,
            complete: P,
            completeAll: P,
            error: P,
            fail: P,
            load: P,
            loadEnd: P,
            loadStart: P,
            progress: P
        },
        events: {
            change(t) {
                _(t.target, 'input[type="file"]') && (t.preventDefault(),
                    t.target.files && this.upload(t.target.files),
                    t.target.value = "")
            },
            drop(t) {
                Ti(t);
                const e = t.dataTransfer;
                e != null && e.files && (z(this.$el, this.clsDragover),
                    this.upload(e.files))
            },
            dragenter(t) {
                Ti(t)
            },
            dragover(t) {
                Ti(t),
                    y(this.$el, this.clsDragover)
            },
            dragleave(t) {
                Ti(t),
                    z(this.$el, this.clsDragover)
            }
        },
        methods: {
            async upload(t) {
                if (t = _i(t), !t.length)
                    return;
                m(this.$el, "upload", [t]);
                for (const s of t) {
                    if (this.maxSize && this.maxSize * 1e3 < s.size) {
                        this.fail(this.t("invalidSize", this.maxSize));
                        return
                    }
                    if (this.allow && !fo(this.allow, s.name)) {
                        this.fail(this.t("invalidName", this.allow));
                        return
                    }
                    if (this.mime && !fo(this.mime, s.type)) {
                        this.fail(this.t("invalidMime", this.mime));
                        return
                    }
                }
                this.multiple || (t = t.slice(0, 1)),
                    this.beforeAll(this, t);
                const e = ih(t, this.concurrent),
                    i = async s => {
                        const n = new FormData;
                        s.forEach(o => n.append(this.name, o));
                        for (const o in this.params)
                            n.append(o, this.params[o]);
                        try {
                            const o = await sh(this.url, {
                                data: n,
                                method: this.method,
                                responseType: this.type,
                                beforeSend: r => {
                                    const {
                                        xhr: a
                                    } = r;
                                    x(a.upload, "progress", this.progress);
                                    for (const l of ["loadStart", "load", "loadEnd", "abort"])
                                        x(a, l.toLowerCase(), this[l]);
                                    return this.beforeSend(r)
                                }
                            });
                            this.complete(o),
                                e.length ? await i(e.shift()) : this.completeAll(o)
                        } catch (o) {
                            this.error(o)
                        }
                    };
                await i(e.shift())
            }
        }
    };

    function fo(t, e) {
        return e.match(new RegExp(`^${t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.")}$`, "i"))
    }

    function ih(t, e) {
        const i = [];
        for (let s = 0; s < t.length; s += e)
            i.push(t.slice(s, s + e));
        return i
    }

    function Ti(t) {
        t.preventDefault(),
            t.stopPropagation()
    }

    function sh(t, e) {
        const i = {
            data: null,
            method: "GET",
            headers: {},
            xhr: new XMLHttpRequest,
            beforeSend: P,
            responseType: "",
            ...e
        };
        return Promise.resolve().then(() => i.beforeSend(i)).then(() => nh(t, i))
    }

    function nh(t, e) {
        return new Promise((i, s) => {
            const {
                xhr: n
            } = e;
            for (const o in e)
                if (o in n)
                    try {
                        n[o] = e[o]
                    } catch {}
            n.open(e.method.toUpperCase(), t);
            for (const o in e.headers)
                n.setRequestHeader(o, e.headers[o]);
            x(n, "load", () => {
                    n.status === 0 || n.status >= 200 && n.status < 300 || n.status === 304 ? i(n) : s(xt(Error(n.statusText), {
                        xhr: n,
                        status: n.status
                    }))
                }),
                x(n, "error", () => s(xt(Error("Network Error"), {
                    xhr: n
                }))),
                x(n, "timeout", () => s(xt(Error("Network Timeout"), {
                    xhr: n
                }))),
                n.send(e.data)
        })
    }
    var oh = Object.freeze({
        __proto__: null,
        Countdown: nl,
        Filter: ul,
        Lightbox: Cl,
        LightboxPanel: Gn,
        Notification: El,
        Parallax: Nl,
        Slider: Ll,
        SliderParallax: ao,
        Slideshow: ql,
        SlideshowParallax: ao,
        Sortable: Vl,
        Tooltip: Ql,
        Upload: eh
    });
    return St(oh, (t, e) => it.component(e, t)),
        it
});