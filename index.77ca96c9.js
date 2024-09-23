// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"eaXE1":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "9db7c82677ca96c9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"264pe":[function(require,module,exports) {
//create 3 divs called unit_view, deck_view and stats_view, and a wrapper to contain them
var _fastSort = require("fast-sort");
//load units.json
//#tag load-unit-json
var jsonUnitsBase = require("a49a4cf24aad666e");
var unitList = [];
//#region unit-definition creates units from json entry
//create an empty object to use as a base of the units, that has a new constructor to create a object
class Unit {
    constructor(jsonEntry){
        const keyLen = Object.keys(jsonEntry).length;
        var count = 0;
        Object.keys(jsonEntry).forEach((key)=>{
            count++;
            //if key == 'name' call the removeSpaces function to make the new variable
            var cleanNameKey = key;
            cleanNameKey = removeSpacesCapitalsSpecialCharacters(key);
            var value = jsonEntry[key];
            if (value.constructor == String) {
                if (cleanNameKey != "emoji") value = removeSpacesCapitalsSpecialCharacters(value);
            }
            if (key == "image") value = jsonEntry.Name;
            if (cleanNameKey == "supply") this["bandwidth"] = value;
            else if (cleanNameKey == "damageg") this["damage"] = value;
            else this[cleanNameKey] = value;
            if (this["building"] == "core") this["tier"] = "1";
            else if (this["building"] == "foundry" || this["building"] == "starforge") this["tier"] = "2";
            else if (this["building"] == "advancedfoundry" || this["building"] == "advancedstarforge") this["tier"] = "3";
            else this["tier"] = "0";
            if (value == "splash" || value == "small" || value == "antibig" || value == "big" || value == "antiair") {
                if (this.traits == undefined) this.traits = [];
                this.traits.push(value);
            }
            if (cleanNameKey == "antiair") {
                if (this.traits == undefined) {
                    this.traits = [];
                    this.traits.push("none");
                }
            }
        });
        //#tag testheader this works for testing the unit table header
        //this['testHeader'] = 'test';
        //sort each key in this alphabetically
        //this.sortObjectKeys(this);
        unitList.push(this);
        console.log("pushing unit to unit_list");
        console.log(this);
    }
}
for(let i = 0; i < jsonUnitsBase.length; i++){
    new Unit(jsonUnitsBase[i]);
    console.log(i);
}
//#endregion
//helper function which takes a string and removes any spaces and capitilisation or the '-' symbol or + symbol or any other symbols... just letters and numbers
function removeSpacesCapitalsSpecialCharacters(string) {
    var newString = "";
    //loop through the string
    for(var i = 0; i < string.length; i++)//if the character is a letter or a number, add it to the new string
    if (string[i].match(/[a-zA-Z0-9]/)) newString += string[i];
    //return the new string
    return newString.toLowerCase();
}
//#tag define-deck-contents
var decks = [];
var deck1Contents = [];
var deck2Contents = [];
var deck1Slots = [];
var deck2Slots = [];
var slotBuildings = [
    "core",
    "foundry",
    "advancedfoundry",
    "wildfoundry",
    "core",
    "starforge",
    "advancedstarforge",
    "wildstarforge"
];
decks.push(deck1Contents, deck2Contents);
var currentDeck = 0; //currentDeck defaults to 1 until deck 2 is selected
//#region views-contents-headers definitions for all 3 views
const unit_view = document.createElement("div");
unit_view.id = "unit_view-h";
unit_view.classList.add("view");
const unit_view_header = document.createElement("div");
unit_view_header.classList.add("view_header");
unit_view.appendChild(unit_view_header);
const unit_content = document.createElement("div");
unit_content.classList.add("view_content");
unit_content.id = "unit_content";
unit_view.appendChild(unit_content);
const deck_view = document.createElement("div");
deck_view.id = "deck_view-h";
deck_view.classList.add("view");
const deck_view_header = document.createElement("div");
deck_view_header.classList.add("view_header");
deck_view.appendChild(deck_view_header);
const deck_content = document.createElement("div");
deck_content.classList.add("view_content");
deck_content.id = "deck_content";
deck_view.appendChild(deck_content);
const stats_view = document.createElement("div");
stats_view.id = "stats_view-h";
stats_view.classList.add("view");
const stats_view_header = document.createElement("div");
stats_view_header.classList.add("view_header");
stats_view.appendChild(stats_view_header);
const stats_content = document.createElement("div");
stats_content.classList.add("view_content");
stats_content.id = "stats_content";
stats_view.appendChild(stats_content);
const wrapper = document.createElement("div");
wrapper.id = "wrapper";
wrapper.appendChild(unit_view);
wrapper.appendChild(deck_view);
wrapper.appendChild(stats_view);
//set the wrapper width and height to the size of the window
document.body.appendChild(wrapper);
//#endregion
//#region deck-header section of the deck view
const deck1_button = document.createElement("button");
deck1_button.innerHTML = "Deck 1";
deck1_button.id = "deck1_button";
deck1_button.classList.add("header_element");
deck_view_header.appendChild(deck1_button);
const deck2_button = document.createElement("button");
deck2_button.innerHTML = "Deck 2";
deck2_button.id = "deck2_button";
deck2_button.classList.add("header_element");
deck_view_header.appendChild(deck2_button);
//#endregion
//#region deck-content section of the deck view, includes: addUnitToDeck
//create a text input box
var deck_stats_div = document.createElement("div");
deck_stats_div.classList.add("deck_stats_div");
//create a table with 2 columns and 4 rows
var deck_stats_table = document.createElement("table");
deck_stats_table.classList.add("deck_stats_table");
var deck_stats_table2 = document.createElement("table");
deck_stats_table2.classList.add("deck_stats_table");
var stat_categories = [
    "energy",
    "matter",
    "bandwidth",
    "health",
    "speed",
    "range",
    "damage",
    "ability",
    "traits",
    "manufacturer"
];
var stat_category_cells = {} //stores the cells for each stat category to be updated
;
for(var i = 0; i < stat_categories.length; i++){
    //only every second category create a new row
    var tr;
    if (i < 7) {
        if (i % 2 == 0) tr = document.createElement("tr");
    } else tr = document.createElement("tr");
    for(var j = 0; j < 2; j++){
        var td = document.createElement("td");
        td.classList.add("deck_stats_td");
        if (j == 1) stat_category_cells[stat_categories[i]] = td;
        else td.innerHTML = stat_categories[i];
        tr.appendChild(td);
    }
    if (i < 7) deck_stats_table.appendChild(tr);
    else deck_stats_table2.appendChild(tr);
}
deck_stats_div.appendChild(deck_stats_table);
deck_stats_div.appendChild(deck_stats_table2);
stat_category_cells.range.innerHTML = "test";
var deck_text_div = document.createElement("div");
//create 1 div to hold all the unit deck slots
var unit_deck_slots_div = document.createElement("div");
unit_deck_slots_div.classList.add("unit_deck_slots_div");
deck_content.appendChild(unit_deck_slots_div);
//create 8 square divs
for(var i = 0; i < 8; i++){
    var div = document.createElement("div");
    deck1Slots[i] = div;
    div.classList.add("unit_deck_slot_div");
    div.id = "unit_deck_slot_div" + i;
    var img = document.createElement("img");
    img.id = "deckSlotImage" + i;
    img.src = "images/techtiers/" + slotBuildings[i] + ".png";
    img.setAttribute("alt", "deck slot" + i);
    img.setAttribute("title", "deck slot" + i);
    img.classList.add("deckSlotImage");
    div.appendChild(img);
    console.log("hello console" + i);
    console.log(div.firstElementChild);
    unit_deck_slots_div.appendChild(div);
}
deck_stats_div.appendChild(deck_text_div);
deck_content.appendChild(deck_stats_div);
function calculateDeckStats() {
    var deck = decks[currentDeck];
    var stats = {
        energy: 0,
        matter: 0,
        bandwidth: 0,
        health: 0,
        speed: 0,
        range: 0,
        damage: 0,
        ability: [],
        type: [],
        traits: [],
        manufacturer: []
    };
    for(var i = 0; i < deck.length; i++)if (deck[i] != undefined) {
        for(var key in stats)if (deck[i][key] != undefined) {
            if (key == "ability" || key == "type" || key == "traits" || key == "manufacturer") stats[key].push(deck[i][key]);
            else stats[key] += deck[i][key];
        }
    }
    //stat_category_cells.range.innerHTML = 'test'
    //for each stat set stat_category_cells['statname'].innerHTML to the correct stat
    //console.log(stats);
    for(var key in stats)if (stat_category_cells[key] != undefined) {
        stat_category_cells[key].innerHTML = "";
        if (key == "ability") {
            for(var i = 0; i < stats[key].length; i++)if (stats[key][i] != undefined && stats[key][i] != "") {
                var img = document.createElement("img");
                img.src = "images/abilities/" + stats[key][i] + ".png";
                img.setAttribute("alt", stats[key][i]);
                img.setAttribute("title", stats[key][i]);
                img.classList.add("unitTableImage");
                stat_category_cells[key].appendChild(img);
            }
        } else if (key == "traits") {
            for(var i = 0; i < stats[key].length; i++)if (stats[key][i] != undefined && stats[key][i] != "") {
                var img = document.createElement("img");
                //we need to seperate traits if there are multiple
                if (stats[key][i].length > 1) {
                    console.log(stats[key][i]);
                    for(var j = 0; j < stats[key][i].length; j++){
                        img = document.createElement("img");
                        img.src = "images/traits/" + stats[key][i][j] + ".png";
                        img.setAttribute("alt", stats[key][i][j]);
                        img.setAttribute("title", stats[key][i][j]);
                        img.classList.add("unitTableImage");
                        stat_category_cells[key].appendChild(img);
                    }
                } else if (stats[key][i] != "none") {
                    img.src = "images/traits/" + stats[key][i] + ".png";
                    img.setAttribute("alt", stats[key][i]);
                    img.setAttribute("title", stats[key][i]);
                    img.classList.add("unitTableImage");
                    stat_category_cells[key].appendChild(img);
                }
                /*
						stat_category_cells[key].sort(function (a, b) {
							return a.alt.localeCompare(b.alt);
						})
						
						*/ //sort children of stat_category_cells[key]
                var sortedChildren = Array.from(stat_category_cells[key].children).sort(function(a, b) {
                    return a.alt.localeCompare(b.alt);
                });
                stat_category_cells[key].innerHTML = "";
                sortedChildren.forEach(function(child) {
                    stat_category_cells[key].appendChild(child);
                });
            }
        } else if (key == "manufacturer") for(var i = 0; i < stats[key].length; i++){
            if (stats[key][i] != undefined && stats[key][i] != "") {
                var img = document.createElement("img");
                img.src = "images/manuf/" + stats[key][i] + ".png";
                img.setAttribute("alt", stats[key][i]);
                img.setAttribute("title", stats[key][i]);
                img.classList.add("unitTableImage");
                stat_category_cells[key].appendChild(img);
            }
            //sort children of stat_category_cells[key]
            var sortedChildren = Array.from(stat_category_cells[key].children).sort(function(a, b) {
                return a.alt.localeCompare(b.alt);
            });
            stat_category_cells[key].innerHTML = "";
            sortedChildren.forEach(function(child) {
                stat_category_cells[key].appendChild(child);
            });
        }
        else if (key == "type" || key == "traits" || key == "manufacturer") ;
        else stat_category_cells[key].innerHTML = stats[key];
    }
    return stats;
}
function redrawDeckContent(deckID) {
    calculateDeckStats();
    //iterate through deckslots
    //deck_stats.innerHTML = 'deck stats:\nhello';
    var deck = decks[deckID];
    deck_text_div.innerHTML = "";
    deck1Slots.forEach((slot, index)=>{
        if (deck[index] == undefined) ;
        else {
            deck_text_div.innerHTML += deck[index].emoji + " ";
            //slot.innerHTML = deck[index].name;
            slot.firstElementChild.src = "images/units/" + deck[index].name + ".png";
        }
    });
}
//on unit_deck_input update
deck_text_div.onchange = function() {
    console.log("unit_deck_input");
    redrawDeckContent();
};
function addUnitToDeck(unit, deckID) {
    var deck = decks[deckID];
    console.log("Adding unit to deck " + deckID + ": " + unit.name);
    //console.log(unit);about:blank#blocked
    //add the unit name to the unit_deck_input text box
    //unit_deck_input.value += unit.name + '\n';
    //addToDeck(unitList[i]);
    var decklen = 0;
    var exists = false;
    //for each value in deck add +1 to decklen
    deck.forEach((u)=>{
        console.log(u.name);
        if (u != undefined) decklen++;
        if (u.name == unit.name) {
            console.log("unit not added, already in deck");
            exists = true;
        }
    });
    if (!exists && decklen < 8) {
        //loop through deck and find if deck slotbuildings[i] matches the current units building
        for(var i = 0; i < 8; i++)if (deck[i] == undefined) {
            if (slotBuildings[i] == unit.building) {
                deck[i] = unit;
                break;
            } else if (slotBuildings[i] == "wildfoundry" && (unit.building == "foundry" || unit.building == "advancedfoundry")) {
                deck[i] = unit;
                break;
            } else if (slotBuildings[i] == "wildstarforge" && (unit.building == "starforge" || unit.building == "advancedstarforge")) {
                deck[i] = unit;
                break;
            }
        }
    //deck.push(unit);
    } else console.log("deck limit reached");
    console.log(decklen + "/8");
    redrawDeckContent(deckID);
}
//#endregion
//#region stats-header
const stats_button = document.createElement("button");
stats_button.innerHTML = "stats";
stats_button.id = "deck1_button";
stats_button.classList.add("header_element");
stats_view_header.appendChild(stats_button);
const compare_button = document.createElement("button");
compare_button.innerHTML = "compare";
compare_button.id = "deck2_button";
compare_button.classList.add("header_element");
stats_view_header.appendChild(compare_button);
//#endregion
//#endregion
//#region unit-div-header
//label
const sort_label = document.createElement("p");
sort_label.innerHTML = "sort: ";
unit_view_header.appendChild(sort_label);
//create a dropdown selector for sorting
const unit_header_sort = document.createElement("select");
//add an option called test
unit_header_sort.options.add(new Option("name", "name"));
unit_header_sort.options.add(new Option("health", "health"));
unit_header_sort.options.add(new Option("damage", "damage"));
unit_header_sort.options.add(new Option("air damage", "damagea"));
unit_header_sort.options.add(new Option("dps", "dpsg"));
unit_header_sort.options.add(new Option("air dps", "dpsa"));
unit_header_sort.options.add(new Option("speed", "speed"));
unit_header_sort.options.add(new Option("range", "range"));
unit_header_sort.options.add(new Option("matter", "matter"));
unit_header_sort.options.add(new Option("energy", "energy"));
unit_header_sort.options.add(new Option("bandwidth", "bandwidth"));
unit_header_sort.options.add(new Option("ability", "ability"));
unit_header_sort.options.add(new Option("tech", "building"));
unit_header_sort.options.add(new Option("tier", "tier"));
unit_header_sort.options.add(new Option("big", "big"));
unit_header_sort.options.add(new Option("small", "small"));
unit_header_sort.options.add(new Option("antibig", "antibig"));
unit_header_sort.options.add(new Option("splash", "splash"));
unit_header_sort.options.add(new Option("antiair", "antiair"));
unit_header_sort.options.add(new Option("manufacturer", "manufacturer"));
unit_header_sort.id = "unit_header_sort";
unit_header_sort.classList.add("header_element");
unit_view_header.appendChild(unit_header_sort);
//label
const view_label = document.createElement("p");
view_label.innerHTML = "view: ";
unit_view_header.appendChild(view_label);
//table view button
const unit_view_table_btn = document.createElement("button");
unit_view_table_btn.innerHTML = "table";
unit_view_table_btn.id = "unit_view_table_btn";
unit_view_table_btn.classList.add("header_element");
unit_view_header.appendChild(unit_view_table_btn);
//card view button
const unit_view_card_btn = document.createElement("button");
unit_view_card_btn.innerHTML = "card";
unit_view_card_btn.id = "unit_view_card_btn";
unit_view_card_btn.classList.add("header_element");
unit_view_header.appendChild(unit_view_card_btn);
//#endregion
//#region redrawUnitContent expensive function: draws unit content div, iterates unitList for display
function redrawUnitContent() {
    //for each object in unitsJson_base create a new unit passing the object
    console.log("Redrawing Unit Content\n-----------------");
    console.log(unitList);
    //create a table element
    var unit_table = document.createElement("table");
    unit_table.id = "unit_table";
    unit_table.classList.add("unit_table");
    //add table head
    var unit_table_head = document.createElement("thead");
    unit_table_head.id = "unit_table_head";
    unit_table.appendChild(unit_table_head);
    //add table body
    var unit_table_body = document.createElement("tbody");
    unit_table.appendChild(unit_table_body);
    //create table header and add it to the table head
    var unit_table_header = document.createElement("th");
    unit_table_header.id = "unit_table_header";
    unit_table_header.innerHTML = "add";
    unit_table_head.appendChild(unit_table_header);
    //##tag unit-content-table-loop
    for (const [key, value] of Object.entries(unitList[1])){
        if (key == "attackrate" || key == "tier" || key == "splash" || key == "small" || key == "big" || key == "antiair" || key == "antibig" || key == "slug" || key == "videoturnaround" || key == "videogameplay" || key == "emoji" || key == "website") ;
        else {
            unit_table_header = document.createElement("th");
            //add some images to certain headers
            if (key == "health" || key == "damage" || key == "damagea" || key == "speed" || key == "range") {
                var img = document.createElement("img");
                img.src = "images/stats/" + key + ".png";
                img.classList.add("unit_table_header_image");
                if (key == "damagea") {
                    img.setAttribute("alt", "air damage");
                    img.setAttribute("title", "air damage");
                } else {
                    img.setAttribute("alt", key);
                    img.setAttribute("title", key);
                }
                unit_table_header.appendChild(img);
            } else if (key == "dpsg") {
                var img = document.createElement("img");
                img.src = "images/stats/damage.png";
                img.classList.add("unit_table_header_image");
                img.setAttribute("alt", "ground dps");
                img.setAttribute("title", "ground dps");
                unit_table_header.appendChild(img);
                unit_table_header.innerHTML += "/s";
            } else if (key == "dpsa") {
                var img = document.createElement("img");
                img.src = "images/stats/damagea.png";
                img.classList.add("unit_table_header_image");
                img.setAttribute("alt", "air dps");
                img.setAttribute("title", " air dps");
                unit_table_header.appendChild(img);
                unit_table_header.innerHTML += "/s";
            } else if (key == "matter" || key == "energy" || key == "bandwidth") {
                var img = document.createElement("img");
                img.src = "images/resources/" + key + ".svg";
                img.classList.add("unit_table_header_image");
                img.setAttribute("alt", key);
                img.setAttribute("title", key);
                unit_table_header.appendChild(img);
            } else if (key == "image") {
                key;
                unit_table_header.innerHTML = "image";
            //no header name for images
            } else if (key == "ability") unit_table_header.innerHTML = "skill";
            else if (key == "manufacturer") unit_table_header.innerHTML = "manf.";
            else if (key == "building") unit_table_header.innerHTML = "tech";
            else unit_table_header.innerHTML = key;
            if (key != "attacktype" && key != "attacktype2" && key != "unittype") unit_table_head.appendChild(unit_table_header);
        }
    }
    //this is the unit content table loop
    for(let i = 0; i < unitList.length; i++){
        //create a table row element
        var unit_table_row = document.createElement("tr");
        unit_table_row.id = "unit_table_row_" + i;
        unit_table_row.classList.add("unit_table_row");
        //
        //for the first row list the nake of each key as a header
        //if i == 0 then create a table header element
        //##tag unit-table-header element
        i;
        //create a table cell element for each unit property
        //add the unit property to the table cell
        //for each key in the current unit
        //the first cell of each row, we will add a button to add the unit to the deck
        var unit_table_cell = document.createElement("td");
        unit_table_cell.id = "unit_table_cell_" + i;
        //add the unit property to the table cell
        var div = document.createElement("div");
        //div.innerHTML = unitList[i].name;
        unit_table_cell.appendChild(div);
        unit_table_cell.classList.add("unit_table_cell");
        //#tag table_add_unit_button
        //add the button
        var table_add_unit_button = document.createElement("button");
        //add text to the button
        table_add_unit_button.innerHTML = "+";
        //add the button to the cell
        unit_table_cell.appendChild(table_add_unit_button);
        table_add_unit_button.onclick = function() {
            addUnitToDeck(unitList[i], currentDeck);
        };
        //add the cell to the row
        unit_table_row.appendChild(unit_table_cell);
        for (var [key, value] of Object.entries(unitList[i])){
            if (key == "attackrate" || key == "tier" || key == "splash" || key == "small" || key == "big" || key == "antiair" || key == "antibig" || key == "slug" || key == "videoturnaround" || key == "videogameplay" || key == "emoji" || key == "website") ;
            else {
                console.log(`${key}: ${value}`);
                var div = document.createElement("div");
                //div.innerHTML = key + ': ' + value;
                //unit_table_cell.appendChild(div)
                var unit_table_cell = document.createElement("td");
                unit_table_cell.id = "unit_table_cell_" + i;
                unit_table_cell.appendChild(div);
                unit_table_cell.classList.add("unit_table_cell");
                //if i is an alternate number
                if (i % 2 == 0) unit_table_cell.classList.add("unit_table_cell_alt");
                unit_table_row.appendChild(unit_table_cell);
                if (key == "image") {
                    var img = document.createElement("img");
                    img.src = "images/units/" + value + ".png";
                    img.setAttribute("alt", value);
                    img.setAttribute("title", value);
                    img.classList.add("unitTableImage");
                    div.appendChild(img);
                } else if (key == "building") {
                    var img = document.createElement("img");
                    img.src = "images/techtiers/" + value + ".svg";
                    img.setAttribute("alt", value);
                    img.setAttribute("title", value);
                    img.classList.add("unitTableImage");
                    div.appendChild(img);
                } else if (key == "ability") {
                    if (value != "") {
                        var img = document.createElement("img");
                        img.src = "images/abilities/" + value + ".png";
                        img.setAttribute("alt", value);
                        img.setAttribute("title", value);
                        img.classList.add("unitTableImage");
                        div.appendChild(img);
                    }
                } else if (key == "manufacturer") {
                    if (value != "") {
                        var img = document.createElement("img");
                        img.src = "images/manuf/" + value + ".png";
                        img.setAttribute("alt", value);
                        img.setAttribute("title", value);
                        img.classList.add("unitTableImage");
                        div.appendChild(img);
                    }
                } else if (key == "splash" || key == "small" || key == "antibig" || key == "big" || key == "antiair") {
                    if (value != "") {
                        var img = document.createElement("img");
                        img.src = "images/traits/" + key + ".png";
                        img.classList.add("unit_table_header_image");
                        img.setAttribute("alt", key);
                        img.setAttribute("title", key);
                        div.appendChild(img);
                    }
                } else if (key == "traits") {
                    value.forEach((trait)=>{
                        if (trait != "none") {
                            var img = document.createElement("img");
                            img.src = "images/traits/" + trait + ".png";
                            img.classList.add("unit_table_image_traits");
                            img.setAttribute("alt", trait);
                            img.setAttribute("title", trait);
                            div.appendChild(img);
                        } else div.innerHTML = value;
                    });
                    unit_table_cell.classList.add("unit_table_cell_traits");
                } else if (value != 0) div.innerHTML = value;
                if (key == "health" || key == "damage" || key == "speed" || key == "range") unit_table_cell.classList.add("unit_table_cell_stats");
            }
        }
        //div.innerHTML = unitList[i].name;
        //unit_table_cell.add(div);
        //create a table body element
        unit_table_body.appendChild(unit_table_row);
    }
    //attach the unit_table to the unit_content div
    unit_content.appendChild(unit_table);
}
redrawUnitContent(); //upon loading the page we redraw the UnitContentDiv once to initialise it
//#endregion
//#region change-sort
unit_header_sort.onchange = function() {
    //update the unit_content.innerHTML to the new sort by option
    //unit_content.innerHTML = unit_header_sort.value;
    //sort the units by the new option
    //new function for sorting units
    console.log(unit_header_sort.value);
    //sort units
    function sortUnits(value, unitlist) {
        // Sort users (array of objects) by firstName in descending order
        var sorted = undefined;
        if (value == "name" || value == "manufacturer") sorted = (0, _fastSort.sort)(unitlist).asc((u)=>u[value]);
        else sorted = (0, _fastSort.sort)(unitlist).desc((u)=>u[value]);
        unitList = sorted;
        //sort the units by the new option
        //new function for sorting units
        unitList = sorted;
        lastSortValue = value;
    }
    sortUnits(unit_header_sort.value, unitList);
    //update the unit_content.innerHTML to the new sort by option
    unit_content.innerHTML = "";
    redrawUnitContent();
};
//#endregion
//#region window-resize
//create a function that runs when the window is resized
function resize() {
    console.log("resized");
    //get the width and height of the window
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (width > height) {
        unit_view.id = "unit_view-h";
        deck_view.id = "deck_view-h";
        stats_view.id = "stats_view-h";
    } else {
        unit_view.id = "unit_view-v";
        deck_view.id = "deck_view-v";
        stats_view.id = "stats_view-v";
    }
}
window.addEventListener("resize", resize);
resize();
//#endregion
console.log(wrapper);

},{"fast-sort":"dcUgN","a49a4cf24aad666e":"kJ7AW"}],"dcUgN":[function(require,module,exports) {
// >>> INTERFACES <<<
// >>> HELPERS <<<
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createNewSortInstance", ()=>createNewSortInstance);
parcelHelpers.export(exports, "defaultComparer", ()=>defaultComparer);
parcelHelpers.export(exports, "inPlaceSort", ()=>inPlaceSort);
parcelHelpers.export(exports, "sort", ()=>sort);
var castComparer = function(comparer) {
    return function(a, b, order) {
        return comparer(a, b, order) * order;
    };
};
var throwInvalidConfigErrorIfTrue = function(condition, context) {
    if (condition) throw Error("Invalid sort config: " + context);
};
var unpackObjectSorter = function(sortByObj) {
    var _a = sortByObj || {}, asc = _a.asc, desc = _a.desc;
    var order = asc ? 1 : -1;
    var sortBy = asc || desc;
    // Validate object config
    throwInvalidConfigErrorIfTrue(!sortBy, "Expected `asc` or `desc` property");
    throwInvalidConfigErrorIfTrue(asc && desc, "Ambiguous object with `asc` and `desc` config properties");
    var comparer = sortByObj.comparer && castComparer(sortByObj.comparer);
    return {
        order: order,
        sortBy: sortBy,
        comparer: comparer
    };
};
// >>> SORTERS <<<
var multiPropertySorterProvider = function(defaultComparer) {
    return function multiPropertySorter(sortBy, sortByArr, depth, order, comparer, a, b) {
        var valA;
        var valB;
        if (typeof sortBy === "string") {
            valA = a[sortBy];
            valB = b[sortBy];
        } else if (typeof sortBy === "function") {
            valA = sortBy(a);
            valB = sortBy(b);
        } else {
            var objectSorterConfig = unpackObjectSorter(sortBy);
            return multiPropertySorter(objectSorterConfig.sortBy, sortByArr, depth, objectSorterConfig.order, objectSorterConfig.comparer || defaultComparer, a, b);
        }
        var equality = comparer(valA, valB, order);
        if ((equality === 0 || valA == null && valB == null) && sortByArr.length > depth) return multiPropertySorter(sortByArr[depth], sortByArr, depth + 1, order, comparer, a, b);
        return equality;
    };
};
function getSortStrategy(sortBy, comparer, order) {
    // Flat array sorter
    if (sortBy === undefined || sortBy === true) return function(a, b) {
        return comparer(a, b, order);
    };
    // Sort list of objects by single object key
    if (typeof sortBy === "string") {
        throwInvalidConfigErrorIfTrue(sortBy.includes("."), "String syntax not allowed for nested properties.");
        return function(a, b) {
            return comparer(a[sortBy], b[sortBy], order);
        };
    }
    // Sort list of objects by single function sorter
    if (typeof sortBy === "function") return function(a, b) {
        return comparer(sortBy(a), sortBy(b), order);
    };
    // Sort by multiple properties
    if (Array.isArray(sortBy)) {
        var multiPropSorter_1 = multiPropertySorterProvider(comparer);
        return function(a, b) {
            return multiPropSorter_1(sortBy[0], sortBy, 1, order, comparer, a, b);
        };
    }
    // Unpack object config to get actual sorter strategy
    var objectSorterConfig = unpackObjectSorter(sortBy);
    return getSortStrategy(objectSorterConfig.sortBy, objectSorterConfig.comparer || comparer, objectSorterConfig.order);
}
var sortArray = function(order, ctx, sortBy, comparer) {
    var _a;
    if (!Array.isArray(ctx)) return ctx;
    // Unwrap sortBy if array with only 1 value to get faster sort strategy
    if (Array.isArray(sortBy) && sortBy.length < 2) _a = sortBy, sortBy = _a[0];
    return ctx.sort(getSortStrategy(sortBy, comparer, order));
};
function createNewSortInstance(opts) {
    var comparer = castComparer(opts.comparer);
    return function(arrayToSort) {
        var ctx = Array.isArray(arrayToSort) && !opts.inPlaceSorting ? arrayToSort.slice() : arrayToSort;
        return {
            asc: function(sortBy) {
                return sortArray(1, ctx, sortBy, comparer);
            },
            desc: function(sortBy) {
                return sortArray(-1, ctx, sortBy, comparer);
            },
            by: function(sortBy) {
                return sortArray(1, ctx, sortBy, comparer);
            }
        };
    };
}
var defaultComparer = function(a, b, order) {
    if (a == null) return order;
    if (b == null) return -order;
    if (typeof a !== typeof b) return typeof a < typeof b ? -1 : 1;
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
};
var sort = createNewSortInstance({
    comparer: defaultComparer
});
var inPlaceSort = createNewSortInstance({
    comparer: defaultComparer,
    inPlaceSorting: true
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"kJ7AW":[function(require,module,exports) {
module.exports = JSON.parse('[{"image":"https://cdn.playbattleaces.com/images/icons/units/katbus.png","Name":"Katbus","Type":"Air","Building":"Advanced Starforge","Matter":250,"Energy":250,"Supply":10,"Health":11000,"Speed":8,"Range":8,"Damage_g":150,"Damage_a":0,"Attack Rate":0.25,"DPS_g":600,"DPS_a":0,"Ability":"","Splash":"","Small":"","Anti-Big":"","Big":"Big","Anti-Air":"","Manufacturer":"CORONA CENTRAL SYSTEMS","slug":"katbus","emoji":":Katbus:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/katbus.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/katbus.mp4","website":"https://www.playbattleaces.com/units/katbus"},{"image":"https://cdn.playbattleaces.com/images/icons/units/shocker.png","Name":"Shocker","Type":"Ground","Building":"Foundry","Matter":125,"Energy":125,"Supply":5,"Health":1400,"Speed":6,"Range":10,"Damage_g":600,"Damage_a":0,"Attack Rate":2.6,"DPS_g":231,"DPS_a":0,"Ability":"","Splash":"Splash","Small":"","Anti-Big":"","Big":"","Anti-Air":"","Manufacturer":"CORONA CENTRAL SYSTEMS","slug":"shocker","emoji":":Shocker:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/shocker.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/shocker.mp4","website":"https://www.playbattleaces.com/units/shocker"},{"image":"https://cdn.playbattleaces.com/images/icons/units/dragonfly.png","Name":"Dragonfly","Type":"Air","Building":"Starforge","Matter":125,"Energy":125,"Supply":5,"Health":2200,"Speed":11,"Range":6,"Damage_g":170,"Damage_a":170,"Attack Rate":0.75,"DPS_g":227,"DPS_a":227,"Ability":"","Splash":"","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"","Manufacturer":"CORONA CENTRAL SYSTEMS","slug":"dragonfly","emoji":":Dragonfly:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/dragonfly.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/dragonfly.mp4","website":"https://www.playbattleaces.com/units/dragonfly"},{"image":"https://cdn.playbattleaces.com/images/icons/units/swiftshocker.png","Name":"SwiftShocker","Type":"Ground","Building":"Foundry","Matter":125,"Energy":125,"Supply":5,"Health":1100,"Speed":11,"Range":8,"Damage_g":105,"Damage_a":0,"Attack Rate":0.5,"DPS_g":210,"DPS_a":0,"Ability":"","Splash":"Splash","Small":"","Anti-Big":"","Big":"","Anti-Air":"","Manufacturer":"CORONA CENTRAL SYSTEMS","slug":"swiftshocker","emoji":":SwiftShocker:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/swiftshocker.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/swiftshocker.mp4","website":"https://www.playbattleaces.com/units/swiftshocker"},{"image":"https://cdn.playbattleaces.com/images/icons/units/locust.png","Name":"Locust","Type":"Air","Building":"Advanced Starforge","Matter":50,"Energy":50,"Supply":2,"Health":600,"Speed":11,"Range":6,"Damage_g":160,"Damage_a":160,"Attack Rate":0.85,"DPS_g":188,"DPS_a":188,"Ability":"","Splash":"","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"","Manufacturer":"CORONA CENTRAL SYSTEMS","slug":"locust","emoji":":Locust:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/locust.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/locust.mp4","website":"https://www.playbattleaces.com/units/locust"},{"image":"https://cdn.playbattleaces.com/images/icons/units/valkyrie.png","Name":"Valkyrie","Type":"Air","Building":"Advanced Starforge","Matter":125,"Energy":125,"Supply":5,"Health":2200,"Speed":9,"Range":10,"Damage_g":65,"Damage_a":685,"Attack Rate":0.65,"DPS_g":100,"DPS_a":1054,"Ability":"","Splash":"","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"Anti-Air","Manufacturer":"CORONA CENTRAL SYSTEMS","slug":"valkyrie","emoji":":Valkyrie:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/valkyrie.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/valkyrie.mp4","website":"https://www.playbattleaces.com/units/valkyrie"},{"image":"https://cdn.playbattleaces.com/images/icons/units/hornet.png","Name":"Hornet","Type":"Ground","Building":"Core","Matter":75,"Energy":25,"Supply":2,"Health":650,"Speed":13,"Range":10,"Damage_g":18,"Damage_a":36,"Attack Rate":0.2,"DPS_g":90,"DPS_a":180,"Ability":"","Splash":"","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"Anti-Air","Manufacturer":"CORONA CENTRAL SYSTEMS","slug":"hornet","emoji":":Hornet:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/hornet.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/hornet.mp4","website":"https://www.playbattleaces.com/units/hornet"},{"image":"https://cdn.playbattleaces.com/images/icons/units/kraken.png","Name":"Kraken","Type":"Air","Building":"Advanced Starforge","Matter":3000,"Energy":3000,"Supply":80,"Health":130000,"Speed":6,"Range":12,"Damage_g":1000,"Damage_a":1000,"Attack Rate":0.35,"DPS_g":2857,"DPS_a":2857,"Ability":"","Splash":"","Small":"","Anti-Big":"","Big":"Big","Anti-Air":"","Manufacturer":"FAR HORIZON COLLECTIVE","slug":"kraken","emoji":":Kraken:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/kraken.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/kraken.mp4","website":"https://www.playbattleaces.com/units/kraken"},{"image":"https://cdn.playbattleaces.com/images/icons/units/advancedblink.png","Name":"AdvancedBlink","Type":"Ground","Building":"Advanced Foundry","Matter":50,"Energy":50,"Supply":2,"Health":2400,"Speed":8,"Range":8,"Damage_g":160,"Damage_a":160,"Attack Rate":0.85,"DPS_g":188,"DPS_a":188,"Ability":"Blink","Splash":"","Small":"","Anti-Big":"Anti-Big","Big":"Big","Anti-Air":"","Manufacturer":"FAR HORIZON COLLECTIVE","slug":"advancedblink","emoji":":AdvancedBlink:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/advancedblink.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/advancedblink.mp4","website":"https://www.playbattleaces.com/units/advancedblink"},{"image":"https://cdn.playbattleaces.com/images/icons/units/blink.png","Name":"Blink","Type":"Ground","Building":"Core","Matter":100,"Energy":0,"Supply":2,"Health":1200,"Speed":8,"Range":8,"Damage_g":120,"Damage_a":0,"Attack Rate":1.11,"DPS_g":108,"DPS_a":0,"Ability":"Blink","Splash":"","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"","Manufacturer":"FAR HORIZON COLLECTIVE","slug":"blink","emoji":":Blink:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/blink.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/blink.mp4","website":"https://www.playbattleaces.com/units/blink"},{"image":"https://cdn.playbattleaces.com/images/icons/units/blinkhunter.png","Name":"BlinkHunter","Type":"Ground","Building":"Core","Matter":75,"Energy":25,"Supply":2,"Health":1000,"Speed":8,"Range":10,"Damage_g":90,"Damage_a":150,"Attack Rate":1.25,"DPS_g":72,"DPS_a":120,"Ability":"Blink","Splash":"","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"Anti-Air","Manufacturer":"FAR HORIZON COLLECTIVE","slug":"blinkhunter","emoji":":BlinkHunter:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/blinkhunter.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/blinkhunter.mp4","website":"https://www.playbattleaces.com/units/blinkhunter"},{"image":"https://cdn.playbattleaces.com/images/icons/units/falcon.png","Name":"Falcon","Type":"Air","Building":"Starforge","Matter":125,"Energy":125,"Supply":5,"Health":2900,"Speed":5,"Range":10,"Damage_g":220,"Damage_a":0,"Attack Rate":0.7,"DPS_g":314,"DPS_a":0,"Ability":"","Splash":"","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"","Manufacturer":"GHOSTS OF VENUS","slug":"falcon","emoji":":Falcon:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/falcon.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/falcon.mp4","website":"https://www.playbattleaces.com/units/falcon"},{"image":"https://cdn.playbattleaces.com/images/icons/units/advancedbot.png","Name":"AdvancedRecall","Type":"Ground","Building":"Starforge","Matter":50,"Energy":50,"Supply":2,"Health":600,"Speed":6,"Range":10,"Damage_g":115,"Damage_a":0,"Attack Rate":0.4,"DPS_g":288,"DPS_a":0,"Ability":"Recall","Splash":"","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"","Manufacturer":"GHOSTS OF VENUS","slug":"advancedbot","emoji":":AdvancedRecall:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/advancedbot.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/advancedbot.mp4","website":"https://www.playbattleaces.com/units/advancedbot"},{"image":"https://cdn.playbattleaces.com/images/icons/units/recallshocker.png","Name":"RecallShocker","Type":"Ground","Building":"Foundry","Matter":125,"Energy":125,"Supply":5,"Health":2200,"Speed":4,"Range":10,"Damage_g":600,"Damage_a":0,"Attack Rate":3,"DPS_g":200,"DPS_a":0,"Ability":"Recall","Splash":"Splash","Small":"","Anti-Big":"","Big":"","Anti-Air":"","Manufacturer":"GHOSTS OF VENUS","slug":"recallshocker","emoji":":RecallShocker:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/recallshocker.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/recallshocker.mp4","website":"https://www.playbattleaces.com/units/recallshocker"},{"image":"https://cdn.playbattleaces.com/images/icons/units/recall.png","Name":"Recall","Type":"Ground","Building":"Core","Matter":100,"Energy":0,"Supply":2,"Health":1200,"Speed":6,"Range":8,"Damage_g":170,"Damage_a":0,"Attack Rate":1.15,"DPS_g":148,"DPS_a":0,"Ability":"Recall","Splash":"","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"","Manufacturer":"GHOSTS OF VENUS","slug":"recall","emoji":":Recall:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/recall.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/recall.mp4","website":"https://www.playbattleaces.com/units/recall"},{"image":"https://cdn.playbattleaces.com/images/icons/units/recallhunter.png","Name":"RecallHunter","Type":"Ground","Building":"Core","Matter":75,"Energy":25,"Supply":2,"Health":1000,"Speed":5,"Range":10,"Damage_g":140,"Damage_a":190,"Attack Rate":1.25,"DPS_g":112,"DPS_a":152,"Ability":"Recall","Splash":"","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"Anti-Air","Manufacturer":"GHOSTS OF VENUS","slug":"recallhunter","emoji":":RecallHunter:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/recallhunter.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/recallhunter.mp4","website":"https://www.playbattleaces.com/units/recallhunter"},{"image":"https://cdn.playbattleaces.com/images/icons/units/wasp.png","Name":"Wasp","Type":"Ground","Building":"Core","Matter":25,"Energy":0,"Supply":1,"Health":500,"Speed":13,"Range":0,"Damage_g":40,"Damage_a":0,"Attack Rate":0.5,"DPS_g":80,"DPS_a":0,"Ability":"","Splash":"","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"","Manufacturer":"GHOSTS OF VENUS","slug":"wasp","emoji":":Wasp:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/wasp.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/wasp.mp4","website":"https://www.playbattleaces.com/units/wasp"},{"image":"https://cdn.playbattleaces.com/images/icons/units/mortar.png","Name":"Mortar","Type":"Ground","Building":"Foundry","Matter":125,"Energy":125,"Supply":5,"Health":2000,"Speed":6,"Range":22,"Damage_g":600,"Damage_a":0,"Attack Rate":1.3,"DPS_g":462,"DPS_a":0,"Ability":"Setup","Splash":"Splash","Small":"","Anti-Big":"","Big":"","Anti-Air":"","Manufacturer":"HEAVY UNION ALLIANCE","slug":"mortar","emoji":":Mortar:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/mortar.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/mortar.mp4","website":"https://www.playbattleaces.com/units/mortar"},{"image":"https://cdn.playbattleaces.com/images/icons/units/behemoth.png","Name":"Behemoth","Type":"Ground","Building":"Advanced Foundry","Matter":250,"Energy":0,"Supply":5,"Health":7000,"Speed":8,"Range":6,"Damage_g":280,"Damage_a":0,"Attack Rate":0.8,"DPS_g":350,"DPS_a":0,"Ability":"","Splash":"","Small":"","Anti-Big":"","Big":"Big","Anti-Air":"","Manufacturer":"HEAVY UNION ALLIANCE","slug":"behemoth","emoji":":Behemoth:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/behemoth.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/behemoth.mp4","website":"https://www.playbattleaces.com/units/behemoth"},{"image":"https://cdn.playbattleaces.com/images/icons/units/destroyer.png","Name":"Destroyer","Type":"Ground","Building":"Foundry","Matter":125,"Energy":125,"Supply":5,"Health":1300,"Speed":6,"Range":12,"Damage_g":700,"Damage_a":0,"Attack Rate":3,"DPS_g":233,"DPS_a":0,"Ability":"","Splash":"","Small":"","Anti-Big":"Anti-Big","Big":"","Anti-Air":"","Manufacturer":"HEAVY UNION ALLIANCE","slug":"destroyer","emoji":":Destroyer:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/destroyer.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/destroyer.mp4","website":"https://www.playbattleaces.com/units/destroyer"},{"image":"https://cdn.playbattleaces.com/images/icons/units/artillery.png","Name":"Artillery","Type":"Ground","Building":"Advanced Starforge","Matter":125,"Energy":125,"Supply":5,"Health":1400,"Speed":5,"Range":18,"Damage_g":600,"Damage_a":0,"Attack Rate":2.8,"DPS_g":214,"DPS_a":0,"Ability":"","Splash":"Splash","Small":"","Anti-Big":"","Big":"","Anti-Air":"","Manufacturer":"HEAVY UNION ALLIANCE","slug":"artillery","emoji":":Artillery:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/artillery.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/artillery.mp4","website":"https://www.playbattleaces.com/units/artillery"},{"image":"https://cdn.playbattleaces.com/images/icons/units/predator.png","Name":"Predator","Type":"Ground","Building":"Advanced Foundry","Matter":125,"Energy":125,"Supply":5,"Health":1250,"Speed":6,"Range":22,"Damage_g":100,"Damage_a":500,"Attack Rate":2.6,"DPS_g":38,"DPS_a":192,"Ability":"","Splash":"Splash","Small":"","Anti-Big":"","Big":"","Anti-Air":"Anti-Air","Manufacturer":"HEAVY UNION ALLIANCE","slug":"predator","emoji":":Predator:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/predator.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/predator.mp4","website":"https://www.playbattleaces.com/units/predator"},{"image":"https://cdn.playbattleaces.com/images/icons/units/raider.png","Name":"Raider","Type":"Ground","Building":"Foundry","Matter":125,"Energy":125,"Supply":5,"Health":650,"Speed":8,"Range":8,"Damage_g":600,"Damage_a":0,"Attack Rate":0.4,"DPS_g":1500,"DPS_a":0,"Ability":"","Splash":"","Small":"","Anti-Big":"","Big":"","Anti-Air":"","Manufacturer":"IRON AND SONS","slug":"raider","emoji":":Raider:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/raider.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/raider.mp4","website":"https://www.playbattleaces.com/units/raider"},{"image":"https://cdn.playbattleaces.com/images/icons/units/stinger.png","Name":"Stinger","Type":"Ground","Building":"Starforge","Matter":125,"Energy":125,"Supply":5,"Health":1300,"Speed":13,"Range":6,"Damage_g":120,"Damage_a":0,"Attack Rate":0.25,"DPS_g":480,"DPS_a":0,"Ability":"","Splash":"","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"","Manufacturer":"IRON AND SONS","slug":"stinger","emoji":":Stinger:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/stinger.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/stinger.mp4","website":"https://www.playbattleaces.com/units/stinger"},{"image":"https://cdn.playbattleaces.com/images/icons/units/crusader.png","Name":"Crusader","Type":"Ground","Building":"Foundry","Matter":125,"Energy":125,"Supply":5,"Health":7500,"Speed":8,"Range":2,"Damage_g":280,"Damage_a":0,"Attack Rate":0.65,"DPS_g":431,"DPS_a":0,"Ability":"","Splash":"","Small":"","Anti-Big":"","Big":"Big","Anti-Air":"","Manufacturer":"IRON AND SONS","slug":"crusader","emoji":":Crusader:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/crusader.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/crusader.mp4","website":"https://www.playbattleaces.com/units/crusader"},{"image":"https://cdn.playbattleaces.com/images/icons/units/heavyturret.png","Name":"HeavyTurret","Type":"Base Defense","Building":"Starforge","Matter":200,"Energy":100,"Supply":0,"Health":5200,"Speed":0,"Range":17,"Damage_g":340,"Damage_a":340,"Attack Rate":0.9,"DPS_g":378,"DPS_a":378,"Ability":"","Splash":"Splash","Small":"","Anti-Big":"","Big":"","Anti-Air":"Anti-Air","Manufacturer":"IRON AND SONS","slug":"heavyturret","emoji":":HeavyTurret:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/heavyturret.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/heavyturret.mp4","website":"https://www.playbattleaces.com/units/heavyturret"},{"image":"https://cdn.playbattleaces.com/images/icons/units/mammoth.png","Name":"Mammoth","Type":"Ground","Building":"Starforge","Matter":125,"Energy":125,"Supply":5,"Health":7000,"Speed":8,"Range":6,"Damage_g":280,"Damage_a":0,"Attack Rate":1,"DPS_g":280,"DPS_a":0,"Ability":"","Splash":"","Small":"","Anti-Big":"","Big":"Big","Anti-Air":"","Manufacturer":"IRON AND SONS","slug":"mammoth","emoji":":Mammoth:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/mammoth.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/mammoth.mp4","website":"https://www.playbattleaces.com/units/mammoth"},{"image":"https://cdn.playbattleaces.com/images/icons/units/turret.png","Name":"Turret","Type":"Base Defense","Building":"Foundry","Matter":100,"Energy":50,"Supply":0,"Health":2600,"Speed":0,"Range":15,"Damage_g":170,"Damage_a":170,"Attack Rate":0.9,"DPS_g":189,"DPS_a":189,"Ability":"","Splash":"Splash","Small":"","Anti-Big":"","Big":"","Anti-Air":"Anti-Air","Manufacturer":"IRON AND SONS","slug":"turret","emoji":":Turret:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/turret.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/turret.mp4","website":"https://www.playbattleaces.com/units/turret"},{"image":"https://cdn.playbattleaces.com/images/icons/units/scorpion.png","Name":"Scorpion","Type":"Ground","Building":"Core","Matter":50,"Energy":0,"Supply":1,"Health":1350,"Speed":9,"Range":0,"Damage_g":120,"Damage_a":0,"Attack Rate":1.25,"DPS_g":96,"DPS_a":0,"Ability":"","Splash":"","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"","Manufacturer":"IRON AND SONS","slug":"scorpion","emoji":":Scorpion:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/scorpion.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/scorpion.mp4","website":"https://www.playbattleaces.com/units/scorpion"},{"image":"https://cdn.playbattleaces.com/images/icons/units/beetle.png","Name":"Beetle","Type":"Ground","Building":"Core","Matter":75,"Energy":25,"Supply":2,"Health":1200,"Speed":8,"Range":10,"Damage_g":120,"Damage_a":170,"Attack Rate":1.5,"DPS_g":80,"DPS_a":113,"Ability":"","Splash":"","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"Anti-Air","Manufacturer":"IRON AND SONS","slug":"beetle","emoji":":Beetle:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/beetle.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/beetle.mp4","website":"https://www.playbattleaces.com/units/beetle"},{"image":"https://cdn.playbattleaces.com/images/icons/units/bomber.png","Name":"Bomber","Type":"Ground","Building":"Foundry","Matter":50,"Energy":50,"Supply":2,"Health":700,"Speed":13,"Range":0,"Damage_g":250,"Damage_a":0,"Attack Rate":0,"DPS_g":0,"DPS_a":0,"Ability":"","Splash":"Splash","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"","Manufacturer":"IRON AND SONS","slug":"bomber","emoji":":Bomber:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/bomber.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/bomber.mp4","website":"https://www.playbattleaces.com/units/bomber"},{"image":"https://cdn.playbattleaces.com/images/icons/units/heavyballista.png","Name":"HeavyBallista","Type":"Ground","Building":"Advanced Foundry","Matter":250,"Energy":250,"Supply":10,"Health":3600,"Speed":6,"Range":10,"Damage_g":600,"Damage_a":0,"Attack Rate":0.7,"DPS_g":857,"DPS_a":0,"Ability":"","Splash":"Splash","Small":"","Anti-Big":"","Big":"Big","Anti-Air":"","Manufacturer":"NORTH PERFORMANCE","slug":"heavyballista","emoji":":HeavyBallista:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/heavyballista.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/heavyballista.mp4","website":"https://www.playbattleaces.com/units/heavyballista"},{"image":"https://cdn.playbattleaces.com/images/icons/units/kingcrab.png","Name":"KingCrab","Type":"Ground","Building":"Foundry","Matter":125,"Energy":125,"Supply":5,"Health":4000,"Speed":9,"Range":2,"Damage_g":350,"Damage_a":0,"Attack Rate":0.5,"DPS_g":700,"DPS_a":0,"Ability":"","Splash":"Splash","Small":"","Anti-Big":"","Big":"Big","Anti-Air":"","Manufacturer":"NORTH PERFORMANCE","slug":"kingcrab","emoji":":KingCrab:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/kingcrab.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/kingcrab.mp4","website":"https://www.playbattleaces.com/units/kingcrab"},{"image":"https://cdn.playbattleaces.com/images/icons/units/bulwark.png","Name":"Bulwark","Type":"Air","Building":"Advanced Starforge","Matter":250,"Energy":250,"Supply":10,"Health":6000,"Speed":5,"Range":10,"Damage_g":280,"Damage_a":280,"Attack Rate":0.5,"DPS_g":560,"DPS_a":560,"Ability":"","Splash":"","Small":"","Anti-Big":"","Big":"Big","Anti-Air":"","Manufacturer":"NORTH PERFORMANCE","slug":"bulwark","emoji":":Bulwark:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/bulwark.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/bulwark.mp4","website":"https://www.playbattleaces.com/units/bulwark"},{"image":"https://cdn.playbattleaces.com/images/icons/units/butterfly.png","Name":"Butterfly","Type":"Air","Building":"Starforge","Matter":125,"Energy":125,"Supply":5,"Health":1100,"Speed":8,"Range":8,"Damage_g":220,"Damage_a":0,"Attack Rate":0.45,"DPS_g":489,"DPS_a":0,"Ability":"","Splash":"","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"","Manufacturer":"NORTH PERFORMANCE","slug":"butterfly","emoji":":Butterfly:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/butterfly.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/butterfly.mp4","website":"https://www.playbattleaces.com/units/butterfly"},{"image":"https://cdn.playbattleaces.com/images/icons/units/ballista.png","Name":"Ballista","Type":"Ground","Building":"Foundry","Matter":125,"Energy":125,"Supply":5,"Health":1000,"Speed":6,"Range":10,"Damage_g":100,"Damage_a":0,"Attack Rate":0.5,"DPS_g":200,"DPS_a":0,"Ability":"","Splash":"Splash","Small":"","Anti-Big":"","Big":"","Anti-Air":"","Manufacturer":"NORTH PERFORMANCE","slug":"ballista","emoji":":Ballista:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/ballista.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/ballista.mp4","website":"https://www.playbattleaces.com/units/ballista"},{"image":"https://cdn.playbattleaces.com/images/icons/units/crab.png","Name":"Crab","Type":"Ground","Building":"Core","Matter":100,"Energy":0,"Supply":2,"Health":2200,"Speed":9,"Range":0,"Damage_g":200,"Damage_a":0,"Attack Rate":1.25,"DPS_g":160,"DPS_a":0,"Ability":"","Splash":"","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"","Manufacturer":"NORTH PERFORMANCE","slug":"crab","emoji":":Crab:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/crab.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/crab.mp4","website":"https://www.playbattleaces.com/units/crab"},{"image":"https://cdn.playbattleaces.com/images/icons/units/airship.png","Name":"Airship","Type":"Air","Building":"Starforge","Matter":125,"Energy":125,"Supply":5,"Health":2200,"Speed":9,"Range":10,"Damage_g":65,"Damage_a":375,"Attack Rate":0.85,"DPS_g":76,"DPS_a":441,"Ability":"","Splash":"","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"Anti-Air","Manufacturer":"NORTH PERFORMANCE","slug":"airship","emoji":":Airship:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/airship.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/airship.mp4","website":"https://www.playbattleaces.com/units/airship"},{"image":"https://cdn.playbattleaces.com/images/icons/units/hunter.png","Name":"Hunter","Type":"Ground","Building":"Core","Matter":75,"Energy":25,"Supply":2,"Health":1000,"Speed":8,"Range":10,"Damage_g":120,"Damage_a":180,"Attack Rate":1.65,"DPS_g":73,"DPS_a":109,"Ability":"","Splash":"","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"Anti-Air","Manufacturer":"NORTH PERFORMANCE","slug":"hunter","emoji":":Hunter:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/hunter.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/hunter.mp4","website":"https://www.playbattleaces.com/units/hunter"},{"image":"https://cdn.playbattleaces.com/images/icons/units/sniper.png","Name":"Sniper","Type":"Ground","Building":"Advanced Foundry","Matter":125,"Energy":125,"Supply":5,"Health":1000,"Speed":5,"Range":23,"Damage_g":700,"Damage_a":0,"Attack Rate":1.8,"DPS_g":389,"DPS_a":0,"Ability":"","Splash":"Splash","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"","Manufacturer":"SENKAISHU LIMITED","slug":"sniper","emoji":":Sniper:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/sniper.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/sniper.mp4","website":"https://www.playbattleaces.com/units/sniper"},{"image":"https://cdn.playbattleaces.com/images/icons/units/assaultbot.png","Name":"Assaultbot","Type":"Ground","Building":"Advanced Foundry","Matter":50,"Energy":0,"Supply":1,"Health":650,"Speed":6,"Range":10,"Damage_g":70,"Damage_a":0,"Attack Rate":0.4,"DPS_g":175,"DPS_a":0,"Ability":"Overclock","Splash":"","Small":"Small","Anti-Big":"Anti-Big","Big":"","Anti-Air":"","Manufacturer":"SENKAISHU LIMITED","slug":"assaultbot","emoji":":AssaultBot:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/assaultbot.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/assaultbot.mp4","website":"https://www.playbattleaces.com/units/assaultbot"},{"image":"https://cdn.playbattleaces.com/images/icons/units/advancedbot.png","Name":"Advancedbot","Type":"Ground","Building":"Advanced Foundry","Matter":50,"Energy":0,"Supply":1,"Health":650,"Speed":6,"Range":10,"Damage_g":50,"Damage_a":65,"Attack Rate":0.4,"DPS_g":125,"DPS_a":163,"Ability":"","Splash":"","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"Anti-Air","Manufacturer":"SENKAISHU LIMITED","slug":"advancedrecall","emoji":":AdvancedBot:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/advancedbot.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/advancedbot.mp4","website":"https://www.playbattleaces.com/units/advancedbot"},{"image":"https://cdn.playbattleaces.com/images/icons/units/missilebot.png","Name":"MissileBot","Type":"Ground","Building":"Core","Matter":75,"Energy":25,"Supply":2,"Health":1000,"Speed":6,"Range":10,"Damage_g":80,"Damage_a":120,"Attack Rate":0.8,"DPS_g":100,"DPS_a":150,"Ability":"Overclock","Splash":"","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"Anti-Air","Manufacturer":"SENKAISHU LIMITED","slug":"missilebot","emoji":":MissileBot:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/missilebot.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/missilebot.mp4","website":"https://www.playbattleaces.com/units/missilebot"},{"image":"https://cdn.playbattleaces.com/images/icons/units/heavyhunter.png","Name":"HeavyHunter","Type":"Ground","Building":"Foundry","Matter":125,"Energy":125,"Supply":5,"Health":2500,"Speed":9,"Range":14,"Damage_g":100,"Damage_a":750,"Attack Rate":1.25,"DPS_g":80,"DPS_a":600,"Ability":"","Splash":"","Small":"","Anti-Big":"","Big":"","Anti-Air":"Anti-Air","Manufacturer":"SENKAISHU LIMITED","slug":"heavyhunter","emoji":":HeavyHunter:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/heavyhunter.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/heavyhunter.mp4","website":"https://www.playbattleaces.com/units/heavyhunter"},{"image":"https://cdn.playbattleaces.com/images/icons/units/gunbot.png","Name":"Gunbot","Type":"Ground","Building":"Core","Matter":50,"Energy":0,"Supply":1,"Health":600,"Speed":6,"Range":10,"Damage_g":50,"Damage_a":0,"Attack Rate":0.7,"DPS_g":71,"DPS_a":0,"Ability":"Overclock","Splash":"","Small":"Small","Anti-Big":"","Big":"","Anti-Air":"","Manufacturer":"SENKAISHU LIMITED","slug":"gunbot","emoji":":GunBot:","videoTurnaround":"https://cdn.playbattleaces.com/videos/turnarounds/gunbot.mp4","videoGameplay":"https://cdn.playbattleaces.com/videos/gameplay/gunbot.mp4","website":"https://www.playbattleaces.com/units/gunbot"}]');

},{}]},["eaXE1","264pe"], "264pe", "parcelRequire716c")

//# sourceMappingURL=index.77ca96c9.js.map
