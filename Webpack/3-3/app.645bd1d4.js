/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module '@babel/plugin-trunsform-runtime' from 'C:\\Users\\x1c\\Desktop\\learn_doc\\Webpack\\3-3'\n    at Function.module.exports [as sync] (C:\\Users\\x1c\\Desktop\\learn_doc\\Webpack\\3-3\\node_modules\\resolve\\lib\\sync.js:43:15)\n    at resolveStandardizedName (C:\\Users\\x1c\\Desktop\\learn_doc\\Webpack\\3-3\\node_modules\\@babel\\core\\lib\\config\\files\\plugins.js:101:31)\n    at resolvePlugin (C:\\Users\\x1c\\Desktop\\learn_doc\\Webpack\\3-3\\node_modules\\@babel\\core\\lib\\config\\files\\plugins.js:54:10)\n    at loadPlugin (C:\\Users\\x1c\\Desktop\\learn_doc\\Webpack\\3-3\\node_modules\\@babel\\core\\lib\\config\\files\\plugins.js:62:20)\n    at createDescriptor (C:\\Users\\x1c\\Desktop\\learn_doc\\Webpack\\3-3\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:154:9)\n    at items.map (C:\\Users\\x1c\\Desktop\\learn_doc\\Webpack\\3-3\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:109:50)\n    at Array.map (<anonymous>)\n    at createDescriptors (C:\\Users\\x1c\\Desktop\\learn_doc\\Webpack\\3-3\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:109:29)\n    at createPluginDescriptors (C:\\Users\\x1c\\Desktop\\learn_doc\\Webpack\\3-3\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:105:10)\n    at plugins (C:\\Users\\x1c\\Desktop\\learn_doc\\Webpack\\3-3\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:40:19)\n    at mergeChainOpts (C:\\Users\\x1c\\Desktop\\learn_doc\\Webpack\\3-3\\node_modules\\@babel\\core\\lib\\config\\config-chain.js:314:26)\n    at C:\\Users\\x1c\\Desktop\\learn_doc\\Webpack\\3-3\\node_modules\\@babel\\core\\lib\\config\\config-chain.js:278:7\n    at buildRootChain (C:\\Users\\x1c\\Desktop\\learn_doc\\Webpack\\3-3\\node_modules\\@babel\\core\\lib\\config\\config-chain.js:118:22)\n    at loadPrivatePartialConfig (C:\\Users\\x1c\\Desktop\\learn_doc\\Webpack\\3-3\\node_modules\\@babel\\core\\lib\\config\\partial.js:57:55)\n    at loadFullConfig (C:\\Users\\x1c\\Desktop\\learn_doc\\Webpack\\3-3\\node_modules\\@babel\\core\\lib\\config\\full.js:43:39)\n    at transformSync (C:\\Users\\x1c\\Desktop\\learn_doc\\Webpack\\3-3\\node_modules\\@babel\\core\\lib\\transform.js:41:38)\n    at Object.transform (C:\\Users\\x1c\\Desktop\\learn_doc\\Webpack\\3-3\\node_modules\\@babel\\core\\lib\\transform.js:22:38)\n    at transpile (C:\\Users\\x1c\\Desktop\\learn_doc\\Webpack\\3-3\\node_modules\\babel-loader\\lib\\index.js:55:20)\n    at Object.module.exports (C:\\Users\\x1c\\Desktop\\learn_doc\\Webpack\\3-3\\node_modules\\babel-loader\\lib\\index.js:179:20)");

/***/ })
/******/ ]);