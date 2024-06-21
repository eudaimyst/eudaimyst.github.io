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
})({"ecy6S":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "072be47ed67ac236";
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

},{}],"alK4Z":[function(require,module,exports) {
//#tag top
//load the unit json file
var unitJson = require("8f00d5bd190beb80");
//create a constructor for a unit object with all the stats, which takes a json entry
class Unit {
    constructor(jsonEntry){
        console.log(jsonEntry);
        this.name = jsonEntry.Name;
        this.imagename = jsonEntry.Image;
        this.health = jsonEntry.Health;
        this.damage = jsonEntry.Damage;
        this.speed = jsonEntry.Speed;
        this.range = jsonEntry.Range;
        this.matter = jsonEntry.Matter;
        this.energy = jsonEntry.Energy;
        this.bandwidth = jsonEntry.Bandwidth;
        this.building = jsonEntry.Building;
        this.ability = jsonEntry.Ability;
        this.attackType = jsonEntry["Attack Type"];
        this.attackType2 = jsonEntry["Attack Type 2"];
        this.unitType = jsonEntry["Unit Type"];
        this.strongAgainst = jsonEntry["Strong Against"];
        this.strongAgainst2 = jsonEntry["StrongAgainst 2"];
        this.weakAgainst = jsonEntry["Weak Against"];
        this.weakAgainst2 = jsonEntry["Weak Against 2"];
        this.other = jsonEntry.Other;
        this.manufacturer = jsonEntry.Manufacturer;
    }
}
//create an empty array of units
var units = [];
//units that are selected are added to the deck
var selectedUnits = [];
//create a structure of rules for what units can go in the deck slots
//using the unit's building parameter
var deckrules = [
    {
        building: "Core",
        building2: ""
    },
    {
        building: "Foundry",
        building2: ""
    },
    {
        building: "Advanced Foundry",
        building2: ""
    },
    {
        building: "Advanced Foundry",
        building2: "Foundry"
    },
    {
        building: "Core",
        building2: ""
    },
    {
        building: "Starforge",
        building2: ""
    },
    {
        building: "Advanced Starforge",
        building2: ""
    },
    {
        building: "Advanced Starforge",
        building2: "Starforge"
    }
];
var deckPlaceholders = [
    "core.svg",
    "foundry.svg",
    "advancedfoundry.svg",
    "bothFoundry.png",
    "core.svg",
    "starforge.svg",
    "advancedstarforge.svg",
    "bothStarforge.png"
];
//for each entry in the json file, create a new unit object and add it to the array
unitJson.forEach(function(entry) {
    units.push(new Unit(entry));
});
console.log(units);
//in html we have 2 divs for the left and right side
//		<div id="leftside"></div>
//		<div id="rightside"></div>
//create a div which has the unit information in a box like a card which takes a unit as a parameter
//create a unit container div element with the id unitContainer
var unitContainer = document.createElement("div");
unitContainer.id = "unitContainer";
//add the unit container to the body
document.body.appendChild(unitContainer);
//create a div for the card remaining counter
var cardRemainingContainer = document.createElement("div");
cardRemainingContainer.id = "cardRemainingContainer";
var unitStats = document.createElement("div");
unitStats.id = "unitStats";
cardRemainingContainer.appendChild(unitStats);
document.body.appendChild(cardRemainingContainer);
var deckSlots = [];
var deckDisplay = document.createElement("div");
deckDisplay.innerHTML = "Deck:";
document.body.appendChild(deckDisplay);
//make a 2x4 table for the deck grid
var deckGrid = document.createElement("table");
deckGrid.id = "deckGrid";
//make 2 rows and for columns
for(var i = 0; i < 2; i++){
    var row = document.createElement("tr");
    for(var j = 0; j < 4; j++){
        var cell = document.createElement("td");
        cell.className = "deckSlotCell";
        deckSlots.push(cell);
        //add the cell to the row
        row.appendChild(cell);
        //add the row to the table
        deckGrid.appendChild(row);
    }
}
//iterate through the deck slots
for(var i = 0; i < deckSlots.length; i++){
    //add an image to the cell
    var cell = deckSlots[i];
    //add an image to the cell
    var img = document.createElement("img");
    img.className = "deckSlotImage";
    //set image source to 'foundry.svg'
    img.src = "./images/" + deckPlaceholders[i];
    cell.appendChild(img);
}
//add the deck grid to the deck display
deckDisplay.appendChild(deckGrid);
//create a div for the deck description
deckDisplay.id = "deckDisplay";
//create a deck description container div
var deckDescriptionContainer = document.createElement("div");
deckDescriptionContainer.id = "deckDescriptionContainer";
//add the deck description container to the body
deckDisplay.appendChild(deckDescriptionContainer);
//#tag drawUnitCard
//this is where units are drawn on the pick side
//it also contains its mouse over and on click functions
//it takes a unit object defined above
var unitCardElements = [];
var remainingPicks = {
    Core: 2,
    Foundry: 2,
    "Advanced Foundry": 2,
    Starforge: 2,
    "Advanced Starforge": 2
};
function drawUnitCard(unit) {
    var unitDiv = document.createElement("div");
    //add unitDiv to the unitCardElements array
    unitCardElements.push(unitDiv);
    unitDiv.className = "unitCard";
    //add the unit div to the container
    document.getElementById("unitContainer").appendChild(unitDiv);
    //add unit health to the unit div  by the letter H plus the number of the value
    var cardHealthDiv = document.createElement("div");
    cardHealthDiv.className = "card_health_div";
    cardHealthDiv.innerHTML = unit.health;
    var cardHealthImg = document.createElement("img");
    cardHealthImg.src = "./images/health.png";
    cardHealthImg.className = "cardStatImage";
    cardHealthDiv.insertBefore(cardHealthImg, cardHealthDiv.firstChild);
    //cardHealthDiv.appendChild(cardHealthImg);
    // add  cardNameDiv
    var cardNameDiv = document.createElement("div");
    cardNameDiv.className = "card_name_div";
    cardNameDiv.innerHTML = unit.name;
    //add cardDamageDiv
    var cardDamageDiv = document.createElement("div");
    cardDamageDiv.className = "card_damage_div";
    cardDamageDiv.innerHTML = unit.damage;
    var cardDamageImg = document.createElement("img");
    cardDamageImg.src = "./images/damage.png";
    cardDamageImg.className = "cardStatImage";
    cardDamageDiv.insertBefore(cardDamageImg, cardDamageDiv.firstChild);
    //add cardSpeedDiv
    var cardSpeedDiv = document.createElement("div");
    cardSpeedDiv.className = "card_speed_div";
    cardSpeedDiv.innerHTML = unit.speed;
    var cardSpeedImg = document.createElement("img");
    cardSpeedImg.src = "./images/speed.png";
    cardSpeedImg.className = "cardStatImage";
    cardSpeedDiv.insertBefore(cardSpeedImg, cardSpeedDiv.firstChild);
    //add cardRangeDiv
    var cardRangeDiv = document.createElement("div");
    cardRangeDiv.className = "card_range_div";
    cardRangeDiv.innerHTML = unit.range;
    var cardRangeImg = document.createElement("img");
    cardRangeImg.src = "./images/range.png";
    cardRangeImg.className = "cardStatImage";
    cardRangeDiv.insertBefore(cardRangeImg, cardRangeDiv.firstChild);
    var cardBuildingDiv = document.createElement("div");
    cardBuildingDiv.classList.add("card_building_div");
    var cardBuildingImg = document.createElement("img");
    //covert unit name to lowercase without space
    var imgname = unit.Building;
    cardBuildingImg.src = "./images/" + unit.building + ".png";
    cardBuildingImg.className = "cardBuildingImage";
    cardBuildingDiv.insertBefore(cardBuildingImg, cardBuildingDiv.firstChild);
    //this contains errors because the building name has spaces, convert the class to lowercase removing spaces
    //cardBuildingDiv.classList.add(unit.building);
    //remove spaces from the building name and convert to lowercase
    cardBuildingDiv.classList.add(unit.building.replace(/\s/g, "").toLowerCase());
    cardBuildingDiv.innerHTML = "" + unit.building;
    //add the unit image to the unit div
    var unitImage = document.createElement("img");
    unitImage.className = "card_unit_img";
    //remove spaces and lowercase the unit name to get the imagename
    var imagename = unit.name.replace(/\s/g, "").toLowerCase();
    unitImage.src = "./images/" + imagename + ".png";
    //add the image source
    unitDiv.appendChild(cardNameDiv);
    unitDiv.appendChild(cardHealthDiv);
    unitDiv.appendChild(cardDamageDiv);
    unitDiv.appendChild(cardSpeedDiv);
    unitDiv.appendChild(cardRangeDiv);
    unitDiv.appendChild(cardBuildingDiv);
    unitDiv.appendChild(unitImage);
    //add a click event listener to the unit div which calls the drawUnit function with the clicked unit as a parameter
    unitDiv.addEventListener("click", function() {
        //drawUnit(unit);
        console.log(unit.name + " was clicked");
        //for all the deck rules see if there is a slot in the selectedUnits for the unit's building
        for(var i = 0; i < deckrules.length; i++)if (deckrules[i].building == unit.building || deckrules[i].building2 == unit.building) {
            if (selectedUnits[i] == null) {
                selectedUnits[i] = unit;
                remainingPicks[unit.building] -= 1;
                break;
            }
            //update the unit cards to show the selected units in grey
            updateUnitCards();
        }
        updateUnitCards();
    });
    unitDiv.addEventListener("mouseover", function() {
        console.log(unit.name + " was mouseOver");
        //for each unit stat add a line to unitStats
        var unitStats = document.getElementById("unitStats");
        unitStats.innerHTML = "";
        //for each unit stat add a line as follows
        /*
		this.name = jsonEntry.Name;
		this.imagename = jsonEntry.Image;
		this.health = jsonEntry.Health;
		this.damage = jsonEntry.Damage;
		this.speed = jsonEntry.Speed;
		this.range = jsonEntry.Range;
		this.matter = jsonEntry.Matter;
		this.energy = jsonEntry.Energy;
		this.bandwidth = jsonEntry.Bandwidth;
		this.building = jsonEntry.Building;
		this.ability = jsonEntry.Ability;
		this.attackType = jsonEntry['Attack Type'];
		this.attackType2 = jsonEntry['Attack Type 2'];
		this.unitType = jsonEntry['Unit Type'];
		this.strongAgainst = jsonEntry['Strong Against'];
		this.strongAgainst2 = jsonEntry['StrongAgainst 2'];
		this.weakAgainst = jsonEntry['Weak Against'];
		this.weakAgainst2 = jsonEntry['Weak Against 2'];
		this.other = jsonEntry.Other;
		 */ Object.keys(unit).forEach((key)=>{
            unitStats.innerHTML += key + ": " + unit[key] + "<br>";
        });
    });
}
//this is called whenever a unit is clicked
function updateUnitCards() {
    var selectedUnitCount = 0;
    for(var j = 0; j < selectedUnits.length; j++)if (selectedUnits[j] != null) selectedUnitCount++;
    //for each unit card in unitcarelements
    for(var i = 0; i < unitCardElements.length; i++){
        //if the unit name matches a unit that has been selected add a grey css class
        for(var j = 0; j < selectedUnits.length; j++)if (selectedUnits[j] != null) {
            //find the child element of unitCardElements[i] with the class name card_name_div
            var cardNameDiv = unitCardElements[i].getElementsByClassName("card_name_div")[0];
            if (cardNameDiv.innerHTML == selectedUnits[j].name) unitCardElements[i].classList.add("grey");
        }
        //get the name of the unit of the current element
        var name = unitCardElements[i].getElementsByClassName("card_name_div")[0].innerHTML;
        var building = unitCardElements[i].getElementsByClassName("card_building_div")[0].innerHTML;
        //if remainingPicks[building] is 0 add a grey css class
        if (remainingPicks[building] == 0) unitCardElements[i].classList.add("grey");
        if (building == "Foundry" && remainingPicks["Foundry"] == 1) {
            if (remainingPicks["Advanced Foundry"] == 0) unitCardElements[i].classList.add("grey");
        }
        if (building == "Staforge" && remainingPicks["Staforge"] == 1) {
            if (remainingPicks["Advanced Starforge"] == 0) unitCardElements[i].classList.add("grey");
        }
        if (building == "Advanced Foundry" && remainingPicks["Advanced Foundry"] == 1) {
            if (remainingPicks["Foundry"] == 0) unitCardElements[i].classList.add("grey");
        }
        if (building == "Advanced Starforge" && remainingPicks["Advanced Starforge"] == 1) {
            if (remainingPicks["Starforge"] == 0) unitCardElements[i].classList.add("grey");
        }
        //if there are no remaining picks
        if (selectedUnitCount == 8) unitCardElements[i].classList.add("grey");
    //else remove the grey css class
    }
    //deckDescriptionContainer.innerHTML +=\
    //for each selected unit add its name fo the deckdescriptioncontainer innerhtml
    cardRemainingContainer.innerHTML = "";
    var rempicks = document.createElement("p");
    var remcount = 8 - selectedUnitCount;
    rempicks.innerHTML = "Remaining Picks: " + remcount;
    rempicks.className = "rempicks";
    var corePicks = document.createElement("p");
    corePicks.innerHTML = "Core: " + remainingPicks["Core"];
    corePicks.className = "core";
    var foundryPicks = document.createElement("p");
    foundryPicks.innerHTML = "Foundry: " + remainingPicks["Foundry"];
    foundryPicks.className = "foundry";
    var starforgePicks = document.createElement("p");
    starforgePicks.innerHTML = "Starforge: " + remainingPicks["Starforge"];
    starforgePicks.className = "starforge";
    var advFoundryPicks = document.createElement("p");
    advFoundryPicks.innerHTML = "Advanced Foundry: " + remainingPicks["Advanced Foundry"];
    advFoundryPicks.className = "advancedfoundry";
    var advStarforgePicks = document.createElement("p");
    advStarforgePicks.innerHTML = "Advanced Starforge: " + remainingPicks["Advanced Starforge"];
    advStarforgePicks.className = "advancedstarforge";
    cardRemainingContainer.appendChild(rempicks);
    cardRemainingContainer.appendChild(corePicks);
    cardRemainingContainer.appendChild(foundryPicks);
    cardRemainingContainer.appendChild(starforgePicks);
    cardRemainingContainer.appendChild(advFoundryPicks);
    cardRemainingContainer.appendChild(advStarforgePicks);
    cardRemainingContainer.appendChild(unitStats);
    deckDescriptionContainer.innerHTML = "";
    //for each unit store their selected strengths
    var unitAttackTypes = [];
    var unitTypes = [];
    var unitStrengths = [];
    var unitWeaknesses = [];
    var unitAbilities = [];
    var unitOthers = [];
    /*
		this.health = jsonEntry.Health;
		this.damage = jsonEntry.Damage;
		this.speed = jsonEntry.Speed;
		this.range = jsonEntry.Range;
		this.matter = jsonEntry.Matter;
		this.energy = jsonEntry.Energy;
		this.bandwidth = jsonEntry.Bandwidth;
		this.building = jsonEntry.Building;
		this.ability = jsonEntry.Ability;
	*/ //make an array for each unit parameter above
    var deckHealth = 0;
    var deckDamage = 0;
    var deckSpeed = 0;
    var deckRange = 0;
    var deckMatter = 0;
    var deckEnergy = 0;
    var deckBandwidth = 0;
    for(var i = 0; i < selectedUnits.length; i++)if (selectedUnits[i]) {
        //add the name of the unit to the deck description
        deckDescriptionContainer.innerHTML += selectedUnits[i].name + ",";
        //construct the arrays of the deck stats
        if (selectedUnits[i].strongAgainst) unitStrengths.push(selectedUnits[i].strongAgainst);
        if (selectedUnits[i].strongAgainst2) unitStrengths.push(selectedUnits[i].strongAgainst2);
        if (selectedUnits[i].weakAgainst) unitWeaknesses.push(selectedUnits[i].weakAgainst);
        if (selectedUnits[i].weakAgainst2) unitWeaknesses.push(selectedUnits[i].weakAgainst2);
        if (selectedUnits[i].unitType) unitTypes.push(selectedUnits[i].unitType);
        if (selectedUnits[i].attackType) unitAttackTypes.push(selectedUnits[i].attackType);
        if (selectedUnits[i].attackType2) unitAttackTypes.push(selectedUnits[i].attackType2);
        if (selectedUnits[i].ability) unitAbilities.push(selectedUnits[i].ability);
        if (selectedUnits[i].ability2) unitAbilities.push(selectedUnits[i].ability2);
        if (selectedUnits[i].other) unitOthers.push(selectedUnits[i].other);
        deckHealth += selectedUnits[i].health;
        deckDamage += selectedUnits[i].damage;
        deckSpeed += selectedUnits[i].speed;
        deckRange += selectedUnits[i].range;
        deckMatter += selectedUnits[i].matter;
        deckEnergy += selectedUnits[i].energy;
        deckBandwidth += selectedUnits[i].bandwidth;
    }
    //#region deckDescriptionhtml
    deckDescriptionContainer.innerHTML += "<br>Deck Stats: <br>";
    var statsString = "==========<br>";
    statsString += "Health: " + deckHealth + "<br>";
    statsString += "Damage: " + deckDamage + "<br>";
    statsString += "Speed: " + deckSpeed + "<br>";
    statsString += "Range: " + deckRange + "<br>";
    statsString += "Matter: " + deckMatter + "<br>";
    statsString += "Energy: " + deckEnergy + "<br>";
    statsString += "Bandwidth: " + deckBandwidth + "<br>";
    statsString += "==========<br>";
    deckDescriptionContainer.innerHTML += statsString;
    //for each unit strength in unitstrengths
    var strengthsString = "Strong Against:";
    for(var i = 0; i < unitStrengths.length; i++)//if the unit strength is not null
    if (unitStrengths[i] != null || unitStrengths[i] != "") {
        //add the unit strength to the deck description container
        if (!strengthsString.includes(unitStrengths[i])) strengthsString += unitStrengths[i] + ",";
        else {
            var index = strengthsString.search(unitStrengths[i] + unitStrengths[i].length);
            strengthsString = strengthsString.slice(0, index) + "+" + strengthsString.slice(index);
        }
    }
    deckDescriptionContainer.innerHTML += strengthsString;
    //for each unit strength in unitweaknesses
    var weaknessString = "<br>Weak Against:";
    for(var i = 0; i < unitWeaknesses.length; i++)//if the unit strength is not null
    if (unitWeaknesses[i] != null || unitWeaknesses[i] != "") {
        //add the unit weaknesses to the deck description container only if it's not repeated
        // if deckDescriptionContainer.innerHTML contains the text of the weaknesses, then do not add it, otherwise add it
        if (!weaknessString.includes(unitWeaknesses[i])) weaknessString += unitWeaknesses[i] + ",";
        else {
            var index = weaknessString.search(unitWeaknesses[i] + unitWeaknesses[i].length);
            weaknessString = weaknessString.slice(0, index) + "+" + weaknessString.slice(index);
        }
    }
    deckDescriptionContainer.innerHTML += weaknessString;
    //for each unit strength in
    //unitAttackTypes;
    //unitTypes;
    //unitAbilities;
    var unitAttackTypesString = "<br>Attack Types:";
    for(var i = 0; i < unitAttackTypes.length; i++)//if the unit strength is not null
    if (unitAttackTypes[i] != null || unitAttackTypes[i] != "") {
        //add the unit weaknesses to the deck description container only if it's not repeated
        // if deckDescriptionContainer.innerHTML contains the text of the weaknesses, then do not add it, otherwise add it
        if (!unitAttackTypesString.includes(unitAttackTypes[i])) unitAttackTypesString += unitAttackTypes[i] + ",";
        else {
            //find the index where unitAbilities is in unitAbilitiesString
            var index = unitAttackTypesString.search(unitAttackTypes[i] + unitAttackTypes[i].length);
            unitAttackTypesString = unitAttackTypesString.slice(0, index) + "+" + unitAttackTypesString.slice(index);
        //at the index insert the '+' character into the string
        }
    }
    deckDescriptionContainer.innerHTML += unitAttackTypesString;
    //unitTypes;
    var unitTypesString = "<br>Unit Types:";
    for(var i = 0; i < unitTypes.length; i++)//if the unit strength is not null
    if (unitTypes[i] != null || unitTypes[i] != "") {
        //add the unit weaknesses to the deck description container only if it's not repeated
        // if deckDescriptionContainer.innerHTML contains the text of the weaknesses, then do not add it, otherwise add it
        if (!unitTypesString.includes(unitTypes[i])) unitTypesString += unitTypes[i] + ",";
        else {
            //find the index where unitAbilities is in unitAbilitiesString
            var index = unitTypesString.search(unitTypes[i] + unitTypes[i].length);
            unitTypesString = unitTypesString.slice(0, index) + "+" + unitTypesString.slice(index);
        //at the index insert the '+' character into the string
        }
    }
    deckDescriptionContainer.innerHTML += unitTypesString;
    //unitAbilities;
    var unitAbilitiesString = "<br>Abilities:";
    for(var i = 0; i < unitAbilities.length; i++)//if the unit strength is not null
    if (unitAbilities[i] != null || unitAbilities[i] != "") {
        //add the unit weaknesses to the deck description container only if it's not repeated
        // if deckDescriptionContainer.innerHTML contains the text of the weaknesses, then do not add it, otherwise add it
        if (!unitAbilitiesString.includes(unitAbilities[i])) unitAbilitiesString += unitAbilities[i] + ",";
        else {
            //find the index where unitAbilities is in unitAbilitiesString
            var index = unitAbilitiesString.search(unitAbilities[i] + unitAbilities[i].length);
            unitAbilitiesString = unitAbilitiesString.slice(0, index) + "+" + unitAbilitiesString.slice(index);
        //at the index insert the '+' character into the string
        }
    }
    deckDescriptionContainer.innerHTML += unitAbilitiesString;
    //unitAbilities;
    var unitOthersString = "<br>Other:";
    for(var i = 0; i < unitOthers.length; i++)//if the unit strength is not null
    if (unitOthers[i] != null || unitOthers[i] != "") {
        //add the unit weaknesses to the deck description container only if it's not repeated
        // if deckDescriptionContainer.innerHTML contains the text of the weaknesses, then do not add it, otherwise add it
        if (!unitOthersString.includes(unitOthers[i])) unitOthersString += unitOthers[i] + ",";
        else {
            //find the index where unitAbilities is in unitAbilitiesString
            var index = unitOthersString.search(unitOthers[i] + unitOthers[i].length);
            unitOthersString = unitOthersString.slice(0, index) + "+" + unitOthersString.slice(index);
        //at the index insert the '+' character into the string
        }
    }
    deckDescriptionContainer.innerHTML += unitOthersString;
    //search through deckDescriptionContainer for any commas preceding a new line and remove the commas
    console.log(deckDescriptionContainer.innerHTML);
    deckDescriptionContainer.innerHTML = deckDescriptionContainer.innerHTML.replace(",<br>", "<br>");
    //loop through the selected units and add their details to the deck display
    //for each selected unit add its name fo the deckdescriptioncontainer innerhtml
    for(var i = 0; i < selectedUnits.length; i++)if (selectedUnits[i]) {
        //add the name of the unit to the deck slots
        var imagename = selectedUnits[i].name.replace(/\s/g, "").toLowerCase();
        deckSlots[i].innerHTML = '<img class="deckSlotImage" src="images/' + imagename + '.png">';
        deckSlots[i].innerHTML += '<div class="unit-card">' + selectedUnits[i].name + "</div>";
    //add the image of the unit to the deck slots
    //low case and remove the space from the name ot get the image
    }
//#endregion
}
updateUnitCards();
//for each unit in the array, call the drawUnit function
units.forEach(function(unit) {
    drawUnitCard(unit);
});

},{"8f00d5bd190beb80":"kJ7AW"}],"kJ7AW":[function(require,module,exports) {
module.exports = JSON.parse('[{"Name":"Blink","Image":"blink","Health":2,"Damage":1,"Speed":3,"Range":2,"Matter":100,"Energy":0,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"Blink","Strong Against":"","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"Air","Other":""},{"Name":"Blink Hunter","Image":"blinkhunter","Health":2,"Damage":1,"Speed":2,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Ground","Ability":"Blink","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground","Weak Against 2":"","Other":""},{"Name":"Crab","Image":"crab","Health":4,"Damage":2,"Speed":3,"Range":1,"Matter":100,"Energy":0,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"Air","Other":""},{"Name":"Gunbot","Image":"gunbot","Health":1,"Damage":1,"Speed":2,"Range":2,"Matter":50,"Energy":0,"Bandwidth":1,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"Overclock","Strong Against":"","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"Air","Other":""},{"Name":"Hornet","Image":"hornet","Health":1,"Damage":2,"Speed":5,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground","Weak Against 2":"","Other":""},{"Name":"Hunter","Image":"hunter","Health":2,"Damage":1,"Speed":2,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground","Weak Against 2":"","Other":""},{"Name":"Missilebot","Image":"missilebot","Health":2,"Damage":2,"Speed":2,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Ground","Ability":"Overclock","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground","Weak Against 2":"","Other":""},{"Name":"Recall","Image":"recall","Health":2,"Damage":1,"Speed":2,"Range":2,"Matter":100,"Energy":0,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"Recall","Strong Against":"","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"Air","Other":""},{"Name":"Recall Hunter","Image":"recallhunter","Health":2,"Damage":2,"Speed":1,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Ground","Ability":"Recall","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground","Weak Against 2":"","Other":""},{"Name":"Wasp","Image":"wasp","Health":1,"Damage":1,"Speed":5,"Range":1,"Matter":25,"Energy":0,"Bandwidth":1,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"Air","Other":""},{"Name":"Beetle","Image":"beetle","Health":2,"Damage":1,"Speed":2,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground","Weak Against 2":"","Other":""},{"Name":"Scorpion","Image":"scorpion","Health":3,"Damage":1,"Speed":3,"Range":1,"Matter":50,"Energy":0,"Bandwidth":1,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"Air","Other":""},{"Name":"Ballista","Image":"ballista","Health":2,"Damage":5,"Speed":2,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"High Health","Weak Against 2":"","Other":""},{"Name":"Bomber","Image":"bomber","Health":1,"Damage":5,"Speed":5,"Range":1,"Matter":50,"Energy":50,"Bandwidth":2,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"Self Destructs","Strong Against":"Core Units","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"High Health","Other":""},{"Name":"Crusader","Image":"crusader","Health":5,"Damage":4,"Speed":3,"Range":1,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"Splash","StrongAgainst 2":"","Weak Against":"Burst","Weak Against 2":"","Other":""},{"Name":"Destroyer","Image":"destroyer","Health":3,"Damage":5,"Speed":2,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Burst","Unit Type":"Ground","Ability":"","Strong Against":"High Health","StrongAgainst 2":"","Weak Against":"Core Units","Weak Against 2":"","Other":""},{"Name":"King Crab","Image":"kingcrab","Health":4,"Damage":5,"Speed":3,"Range":1,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"Splash","StrongAgainst 2":"","Weak Against":"Burst","Weak Against 2":"","Other":""},{"Name":"Mortar","Image":"mortar","Health":4,"Damage":5,"Speed":2,"Range":5,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"Setup","Strong Against":"","StrongAgainst 2":"","Weak Against":"Long Range","Weak Against 2":"","Other":"Long Range"},{"Name":"Recall Shocker","Image":"recallshocker","Health":3,"Damage":5,"Speed":1,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"Recall","Strong Against":"","StrongAgainst 2":"","Weak Against":"High Health","Weak Against 2":"","Other":""},{"Name":"Shocker","Image":"shocker","Health":3,"Damage":5,"Speed":2,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"Core Units","StrongAgainst 2":"","Weak Against":"High Health","Weak Against 2":"","Other":"Shock Splash"},{"Name":"Turret","Image":"","Health":4,"Damage":2,"Speed":1,"Range":4,"Matter":100,"Energy":50,"Bandwidth":0,"Building":"Foundry","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Base defense","Ability":"","Strong Against":"Harassment","StrongAgainst 2":"","Weak Against":"Long Range","Weak Against 2":"","Other":"Placed"},{"Name":"Raider","Image":"","Health":3,"Damage":5,"Speed":4,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Worker","Attack Type 2":"Workers","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"Only attacks workers"},{"Name":"Heavy Hunter","Image":"","Health":4,"Damage":4,"Speed":3,"Range":3,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground","Weak Against 2":"","Other":""},{"Name":"Swift Shocker","Image":"swiftshocker","Health":2,"Damage":5,"Speed":4,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"Core Units","StrongAgainst 2":"","Weak Against":"High Health","Weak Against 2":"","Other":"Shock Splash"},{"Name":"Mammoth","Image":"","Health":5,"Damage":3,"Speed":3,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"Splash","StrongAgainst 2":"","Weak Against":"Burst","Weak Against 2":"","Other":"Durable"},{"Name":"Heavy Turret","Image":"heavyturret","Health":5,"Damage":4,"Speed":1,"Range":4,"Matter":200,"Energy":100,"Bandwidth":0,"Building":"Starforge","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Base defense","Ability":"","Strong Against":"Harassment","StrongAgainst 2":"","Weak Against":"Long Range","Weak Against 2":"","Other":"Placed"},{"Name":"Stinger","Image":"stinger","Health":3,"Damage":5,"Speed":5,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"","Other":"Strong With Melee"},{"Name":"Advanced Recall","Image":"advancedrecall","Health":1,"Damage":3,"Speed":2,"Range":2,"Matter":50,"Energy":50,"Bandwidth":2,"Building":"Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"Recall","Strong Against":"Ground","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"","Other":""},{"Name":"Airship","Image":"airship","Health":4,"Damage":4,"Speed":3,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"Air2Air Specialist"},{"Name":"Falcon","Image":"falcon","Health":4,"Damage":3,"Speed":1,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"Ground","StrongAgainst 2":"","Weak Against":"Anti-Air","Weak Against 2":"","Other":""},{"Name":"Dragonfly","Image":"dragonfly","Health":4,"Damage":3,"Speed":4,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"Anti-Air","Weak Against 2":"","Other":"Mobile Harassment"},{"Name":"Butterfly","Image":"butterfly","Health":1,"Damage":5,"Speed":3,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"Ground","StrongAgainst 2":"","Weak Against":"Anti-Air","Weak Against 2":"","Other":""},{"Name":"Predator","Image":"predator","Health":2,"Damage":5,"Speed":2,"Range":5,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Advanced Foundry","Attack Type":"Anti-Air","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground","Weak Against 2":"","Other":"Long Range"},{"Name":"Assaultbot","Image":"","Health":1,"Damage":2,"Speed":2,"Range":2,"Matter":50,"Energy":0,"Bandwidth":1,"Building":"Advanced Foundry","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"Ground","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"","Other":""},{"Name":"Behemoth","Image":"","Health":5,"Damage":4,"Speed":3,"Range":2,"Matter":250,"Energy":0,"Bandwidth":5,"Building":"Advanced Foundry","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"Splash","StrongAgainst 2":"","Weak Against":"Burst","Weak Against 2":"","Other":"Durable"},{"Name":"Sniper","Image":"sniper","Health":2,"Damage":4,"Speed":1,"Range":5,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Advanced Foundry","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"Slow Units","StrongAgainst 2":"","Weak Against":"Fast Units","Weak Against 2":"","Other":"Long Range"},{"Name":"Heavy Ballista","Image":"heavyballista","Health":4,"Damage":5,"Speed":2,"Range":2,"Matter":250,"Energy":250,"Bandwidth":10,"Building":"Advanced Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"Core Units","StrongAgainst 2":"","Weak Against":"High Health","Weak Against 2":"","Other":"High Bandwidth"},{"Name":"Valkyrie","Image":"valkyrie","Health":4,"Damage":5,"Speed":3,"Range":3,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Advanced Starforge","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground Anti-Air","Weak Against 2":"","Other":"Air2Air Specialist"},{"Name":"Locust","Image":"locust","Health":1,"Damage":2,"Speed":4,"Range":2,"Matter":50,"Energy":50,"Bandwidth":2,"Building":"Advanced Starforge","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"Anti-Air","Weak Against 2":"","Other":"Mobile Harassment"},{"Name":"Katbus","Image":"katbus","Health":5,"Damage":5,"Speed":2,"Range":2,"Matter":250,"Energy":250,"Bandwidth":10,"Building":"Advanced Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"Ground","StrongAgainst 2":"Splash","Weak Against":"Anti-Air","Weak Against 2":"","Other":"High Bandwidth"},{"Name":"Bulwark","Image":"bulwark","Health":5,"Damage":5,"Speed":1,"Range":2,"Matter":250,"Energy":250,"Bandwidth":10,"Building":"Advanced Starforge","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"Ground","StrongAgainst 2":"","Weak Against":"Anti-Air","Weak Against 2":"","Other":"High Bandwidth"}]');

},{}]},["ecy6S","alK4Z"], "alK4Z", "parcelRequire716c")

//# sourceMappingURL=index.d67ac236.js.map
