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
        building: "Core",
        building2: ""
    },
    {
        building: "Foundry",
        building2: ""
    },
    {
        building: "Starforge",
        building2: ""
    },
    {
        building: "Advanced Foundry",
        building2: ""
    },
    {
        building: "Advanced Starforge",
        building2: ""
    },
    {
        building: "Advanced Foundry",
        building2: "Foundry"
    },
    {
        building: "Advanced Starforge",
        building2: "Starforge"
    }
];
//for each entry in the json file, create a new unit object and add it to the array
unitJson.forEach(function(entry) {
    units.push(new Unit(entry));
});
console.log(units);
//create a div which has the unit information in a box like a card which takes a unit as a parameter
//create a unit container div element with the id unitContainer
var unitContainer = document.createElement("div");
unitContainer.id = "unitContainer";
//add the unit container to the body
document.body.appendChild(unitContainer);
//create a div for the card remaining counter
var cardRemainingContainer = document.createElement("div");
cardRemainingContainer.id = "cardRemainingContainer";
document.body.appendChild(cardRemainingContainer);
//create a deck description container div
var deckDescriptionContainer = document.createElement("div");
deckDescriptionContainer.id = "deckDescriptionContainer";
//add the deck description container to the body
document.body.appendChild(deckDescriptionContainer);
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
    cardHealthDiv.innerHTML = "H" + unit.health;
    // add  cardNameDiv
    var cardNameDiv = document.createElement("div");
    cardNameDiv.className = "card_name_div";
    cardNameDiv.innerHTML = unit.name;
    //add cardDamageDiv
    var cardDamageDiv = document.createElement("div");
    cardDamageDiv.className = "card_damage_div";
    cardDamageDiv.innerHTML = "D" + unit.damage;
    //add cardSpeedDiv
    var cardSpeedDiv = document.createElement("div");
    cardSpeedDiv.className = "card_speed_div";
    cardSpeedDiv.innerHTML = "S" + unit.speed;
    //add cardRangeDiv
    var cardRangeDiv = document.createElement("div");
    cardRangeDiv.className = "card_range_div";
    cardRangeDiv.innerHTML = "R" + unit.range;
    var cardBuildingDiv = document.createElement("div");
    cardBuildingDiv.classList.add("card_building_div");
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
    //cardRemainingContainer.innerHTML += '<p class="core"> Core Remaining: ' + remainingPicks['Core'] + '<br>';
    //cardRemainingContainer.innerHTML += '<p class="foundry">Foundry Remaining: ' + remainingPicks['Foundry'] + '<br>';
    //cardRemainingContainer.innerHTML += '<p class="starforge">Starforge Remaining: ' + remainingPicks['Starforge'] + '<br>';
    //cardRemainingContainer.innerHTML += '<p class="advancedfoundry">Advanced Foundry Remaining: ' + remainingPicks['Advanced Foundry'] + '<br>';
    //cardRemainingContainer.innerHTML += '<p class="advancedstarforge">Advanced Starforge Remaining: ' + remainingPicks['Advanced Starforge'] + '<br>';
    deckDescriptionContainer.innerHTML = "";
    for(var i = 0; i < selectedUnits.length; i++)if (selectedUnits[i] != null) deckDescriptionContainer.innerHTML += selectedUnits[i].name + "<br>";
}
updateUnitCards();
//for each unit in the array, call the drawUnit function
units.forEach(function(unit) {
    drawUnitCard(unit);
});

},{"8f00d5bd190beb80":"kJ7AW"}],"kJ7AW":[function(require,module,exports) {
module.exports = JSON.parse('[{"Confirmed":"y","Name":"Blink","Image":"blink","Health":2,"Damage":1,"Speed":3,"Range":2,"Matter":100,"Energy":0,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"Blink","Strong Against":"","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"Air","Other":"","Manufacturer":"FAR HORIZON COLLECTIVE","Link":"https://www.playbattleaces.com/units/blink","":"","__1":"","z":""},{"Confirmed":"y","Name":"Blink Hunter","Image":"blinkhunter","Health":2,"Damage":1,"Speed":2,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Ground","Ability":"Blink","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground","Weak Against 2":"","Other":"","Manufacturer":"FAR HORIZON COLLECTIVE","Link":"https://www.playbattleaces.com/units/blinkhunter","":"","__1":"","z":""},{"Confirmed":"y","Name":"Crab","Image":"crab","Health":4,"Damage":2,"Speed":3,"Range":1,"Matter":100,"Energy":0,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"Air","Other":"","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/crab","":"","__1":"","z":""},{"Confirmed":"y","Name":"Gunbot","Image":"gunbot","Health":1,"Damage":1,"Speed":2,"Range":2,"Matter":50,"Energy":0,"Bandwidth":1,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"Overclock","Strong Against":"","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"Air","Other":"","Manufacturer":"SENKAISHU LIMITED","Link":"https://www.playbattleaces.com/units/gunbot","":"","__1":"","z":""},{"Confirmed":"y","Name":"Hornet","Image":"hornet","Health":1,"Damage":2,"Speed":5,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground","Weak Against 2":"","Other":"","Manufacturer":"CORONA CENTRAL SYSTEMS","Link":"https://www.playbattleaces.com/units/hornet","":"","__1":"","z":""},{"Confirmed":"y","Name":"Hunter","Image":"hunter","Health":2,"Damage":1,"Speed":2,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/hunter","":"","__1":"","z":""},{"Confirmed":"y","Name":"Missilebot","Image":"missilebot","Health":2,"Damage":2,"Speed":2,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Ground","Ability":"Overclock","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"SENKAISHU LIMITED","Link":"https://www.playbattleaces.com/units/missilebot","":"","__1":"","z":""},{"Confirmed":"y","Name":"Recall","Image":"recall","Health":2,"Damage":1,"Speed":2,"Range":2,"Matter":100,"Energy":0,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"Recall","Strong Against":"","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"Air","Other":"","Manufacturer":"GHOSTS OF VENUS","Link":"https://www.playbattleaces.com/units/recall","":"","__1":"","z":""},{"Confirmed":"y","Name":"Recall Hunter","Image":"recallhunter","Health":2,"Damage":2,"Speed":1,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Ground","Ability":"Recall","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground","Weak Against 2":"","Other":"","Manufacturer":"GHOSTS OF VENUS","Link":"https://www.playbattleaces.com/units/recallhunter","":"","__1":"","z":""},{"Confirmed":"y","Name":"Wasp","Image":"wasp","Health":1,"Damage":1,"Speed":5,"Range":1,"Matter":25,"Energy":0,"Bandwidth":1,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"Air","Other":"","Manufacturer":"GHOSTS OF VENUS","Link":"https://www.playbattleaces.com/units/wasp","":"","__1":"","z":""},{"Confirmed":"y","Name":"Beetle","Image":"beetle","Health":2,"Damage":1,"Speed":2,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground","Weak Against 2":"","Other":"","Manufacturer":"IRON AND SONS","Link":"https://www.playbattleaces.com/units/beetle","":"","__1":"","z":""},{"Confirmed":"y","Name":"Scorpion","Image":"scorpion","Health":3,"Damage":1,"Speed":3,"Range":1,"Matter":50,"Energy":0,"Bandwidth":1,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"Air","Other":"","Manufacturer":"IRON AND SONS","Link":"https://www.playbattleaces.com/units/scorpion","":"","__1":"","z":""},{"Confirmed":"","Name":"Ballista","Image":"ballista","Health":2,"Damage":5,"Speed":2,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"High Health","Weak Against 2":"","Other":"","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/ballista","":"","__1":"","z":""},{"Confirmed":"y","Name":"Bomber","Image":"bomber","Health":1,"Damage":5,"Speed":5,"Range":1,"Matter":50,"Energy":50,"Bandwidth":2,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"Self Destructs","Strong Against":"Core Units","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"High Health","Other":"","Manufacturer":"IRON AND SONS","Link":"https://www.playbattleaces.com/units/bomber","":"","__1":"","z":""},{"Confirmed":"y","Name":"Crusader","Image":"crusader","Health":5,"Damage":4,"Speed":3,"Range":1,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"Splash","StrongAgainst 2":"","Weak Against":"Burst","Weak Against 2":"","Other":"","Manufacturer":"IRON AND SONS","Link":"https://www.playbattleaces.com/units/crusader","":"","__1":"","z":""},{"Confirmed":"y","Name":"Destroyer","Image":"destroyer","Health":3,"Damage":5,"Speed":2,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Burst","Unit Type":"Ground","Ability":"","Strong Against":"High Health","StrongAgainst 2":"","Weak Against":"Core Units","Weak Against 2":"","Other":"","Manufacturer":"HEAVY UNION ALLIANCE","Link":"https://www.playbattleaces.com/units/destroyer","":"","__1":"","z":""},{"Confirmed":"y","Name":"King Crab","Image":"kingcrab","Health":4,"Damage":5,"Speed":3,"Range":1,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"Splash","StrongAgainst 2":"","Weak Against":"Burst","Weak Against 2":"","Other":"","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/kingcrab","":"","__1":"","z":""},{"Confirmed":"y","Name":"Mortar","Image":"mortar","Health":4,"Damage":5,"Speed":2,"Range":5,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"Setup","Strong Against":"","StrongAgainst 2":"","Weak Against":"Long Range","Weak Against 2":"","Other":"","Manufacturer":"HEAVY UNION ALLIANCE","Link":"https://www.playbattleaces.com/units/mortar","":"","__1":"","z":""},{"Confirmed":"y","Name":"Recall Shocker","Image":"recallshocker","Health":3,"Damage":5,"Speed":1,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"Recall","Strong Against":"","StrongAgainst 2":"","Weak Against":"High Health","Weak Against 2":"","Other":"","Manufacturer":"GHOSTS OF VENUS","Link":"https://www.playbattleaces.com/units/recallshocker","":"","__1":"","z":""},{"Confirmed":"y","Name":"Shocker","Image":"shocker","Health":3,"Damage":5,"Speed":2,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"Core Units","StrongAgainst 2":"","Weak Against":"High Health","Weak Against 2":"","Other":"Shock Splash","Manufacturer":"CORONA CENTRAL SYSTEMS","Link":"https://www.playbattleaces.com/units/shocker","":"","__1":"","z":""},{"Confirmed":"y","Name":"Swift Shocker","Image":"swiftshocker","Health":2,"Damage":5,"Speed":4,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"Core Units","StrongAgainst 2":"","Weak Against":"High Health","Weak Against 2":"","Other":"Shock Splash","Manufacturer":"","Link":"https://www.playbattleaces.com/units/swiftshocker","":"","__1":"","z":""},{"Confirmed":"y?","Name":"Heavy Hunter","Image":"heavyhunter","Health":"Unknown","Damage":"","Speed":"","Range":"","Matter":"","Energy":"","Bandwidth":"","Building":"Foundry","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/heavyhunter","":"","__1":"","z":""},{"Confirmed":"y?","Name":"Raider","Image":"raider","Health":"Unknown","Damage":"","Speed":"","Range":"","Matter":"","Energy":"","Bandwidth":"","Building":"Foundry","Attack Type":"Anti-Worker","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/raider","":"","__1":"","z":""},{"Confirmed":"y","Name":"Heavy Turret","Image":"heavyturret","Health":5,"Damage":4,"Speed":1,"Range":4,"Matter":200,"Energy":100,"Bandwidth":0,"Building":"Starforge","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Base defense","Ability":"","Strong Against":"Harassment","StrongAgainst 2":"","Weak Against":"Long Range","Weak Against 2":"","Other":"Placed","Manufacturer":"IRON AND SONS","Link":"https://www.playbattleaces.com/units/heavyturret","":"","__1":"","z":""},{"Confirmed":"y","Name":"Stinger","Image":"stinger","Health":3,"Damage":5,"Speed":5,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"","Other":"Strong With Melee","Manufacturer":"IRON AND SONS","Link":"https://www.playbattleaces.com/units/stinger","":"","__1":"","z":""},{"Confirmed":"y","Name":"Advanced Recall","Image":"advancedrecall","Health":1,"Damage":3,"Speed":2,"Range":2,"Matter":50,"Energy":50,"Bandwidth":2,"Building":"Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"Recall","Strong Against":"Ground","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"","Other":"","Manufacturer":"GHOSTS OF VENUS","Link":"https://www.playbattleaces.com/units/advancedrecall","":"","__1":"","z":""},{"Confirmed":"y","Name":"Airship","Image":"airship","Health":4,"Damage":4,"Speed":3,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground Anti-Air","Weak Against 2":"","Other":"Air2Air Specialist","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/ariship","":"","__1":"","z":""},{"Confirmed":"y","Name":"Falcon","Image":"falcon","Health":4,"Damage":3,"Speed":1,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"Ground","StrongAgainst 2":"","Weak Against":"Anti-Air","Weak Against 2":"","Other":"","Manufacturer":"GHOSTS OF VENUS","Link":"https://www.playbattleaces.com/units/falcon","":"","__1":"","z":""},{"Confirmed":"y","Name":"Dragonfly","Image":"dragonfly","Health":4,"Damage":3,"Speed":4,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"Anti-Air","Weak Against 2":"","Other":"Mobile Harassment","Manufacturer":"CORONA CENTRAL SYSTEMS","Link":"https://www.playbattleaces.com/units/dragonfly","":"","__1":"","z":""},{"Confirmed":"y","Name":"Butterfly","Image":"butterfly","Health":1,"Damage":5,"Speed":3,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"Ground","StrongAgainst 2":"","Weak Against":"Anti-Air","Weak Against 2":"","Other":"","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/butterfly","":"","__1":"","z":""},{"Confirmed":"y?","Name":"Mammoth","Image":"mammoth","Health":5,"Damage":3,"Speed":3,"Range":1,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/mammoth","":"","__1":"","z":"z"},{"Confirmed":"y","Name":"Predator","Image":"predator","Health":2,"Damage":5,"Speed":2,"Range":5,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Advanced Foundry","Attack Type":"Anti-Air","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground","Weak Against 2":"","Other":"","Manufacturer":"HEAVY UNION ALLIANCE","Link":"https://www.playbattleaces.com/units/predator","":"","__1":"","z":""},{"Confirmed":"y","Name":"Heavy Ballista","Image":"heavyballista","Health":4,"Damage":5,"Speed":2,"Range":2,"Matter":250,"Energy":250,"Bandwidth":10,"Building":"Advanced Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"Core Units","StrongAgainst 2":"","Weak Against":"High Health","Weak Against 2":"","Other":"","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/heavyballista","":"","__1":"","z":""},{"Confirmed":"z","Name":"Sniper","Image":"sniper","Health":2,"Damage":5,"Speed":1,"Range":5,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Advanced Foundry","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/sniper","":"","__1":"","z":"z"},{"Confirmed":"z","Name":"Behemoth","Image":"behemoth","Health":5,"Damage":"?","Speed":2,"Range":2,"Matter":250,"Energy":0,"Bandwidth":5,"Building":"Advanced Foundry","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"Blink","Strong Against":"","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/behemoth","":"","__1":"","z":"z"},{"Confirmed":"y?","Name":"Advanced Blink","Image":"advancedblink","Health":4,"Damage":2,"Speed":3,"Range":2,"Matter":50,"Energy":50,"Bandwidth":5,"Building":"Advanced Foundry","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/advancedblink","":"","__1":"","z":""},{"Confirmed":"y?","Name":"Double Machine Gun","Image":"doublemachinegun","Health":"Unknown","Damage":"","Speed":"","Range":"","Matter":"","Energy":"","Bandwidth":"","Building":"Advanced Foundry","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/doublemachinegun","":"","__1":"","z":""},{"Confirmed":"y","Name":"Valkyrie","Image":"valkyrie","Health":4,"Damage":5,"Speed":3,"Range":3,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Advanced Starforge","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground Anti-Air","Weak Against 2":"","Other":"Air2Air Specialist","Manufacturer":"CORONA CENTRAL SYSTEMS","Link":"https://www.playbattleaces.com/units/valkyrie","":"","__1":"","z":""},{"Confirmed":"y","Name":"Locust","Image":"locust","Health":1,"Damage":2,"Speed":4,"Range":2,"Matter":50,"Energy":50,"Bandwidth":2,"Building":"Advanced Starforge","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"Anti-Air","Weak Against 2":"","Other":"Mobile Harassment","Manufacturer":"","Link":"https://www.playbattleaces.com/units/locust","":"","__1":"","z":""},{"Confirmed":"y","Name":"Katbus","Image":"katbus","Health":5,"Damage":5,"Speed":2,"Range":2,"Matter":250,"Energy":250,"Bandwidth":10,"Building":"Advanced Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"Ground","StrongAgainst 2":"Splash","Weak Against":"Anti-Air","Weak Against 2":"","Other":"","Manufacturer":"CORONA CENTRAL SYSTEMS","Link":"https://www.playbattleaces.com/units/katbus","":"","__1":"","z":""},{"Confirmed":"y","Name":"Bulwark","Image":"bulwark","Health":5,"Damage":5,"Speed":1,"Range":2,"Matter":250,"Energy":250,"Bandwidth":10,"Building":"Advanced Starforge","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"Ground","StrongAgainst 2":"","Weak Against":"Anti-Air","Weak Against 2":"","Other":"","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/bulwark","":"","__1":"","z":""},{"Confirmed":"z","Name":"Kraken","Image":"kraken","Health":5,"Damage":5,"Speed":1,"Range":"","Matter":3000,"Energy":3000,"Bandwidth":"","Building":"?","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/kraken","":"","__1":"","z":"x"},{"Confirmed":"y?","Name":"Artillery","Image":"artillery","Health":"Unknown","Damage":"","Speed":"","Range":"","Matter":"","Energy":"","Bandwidth":"","Building":"Advanced Starforge","Attack Type":"Anti-Ground","Attack Type 2":"?","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/artillery","":"","__1":"","z":""}]');

},{}]},["ecy6S","alK4Z"], "alK4Z", "parcelRequire716c")

//# sourceMappingURL=index.d67ac236.js.map
