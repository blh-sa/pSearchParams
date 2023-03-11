/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/preservparam.js":
/*!*****************************!*\
  !*** ./src/preservparam.js ***!
  \*****************************/
/***/ (() => {

eval("window.addEventListener(\"DOMContentLoaded\", function () {\n  (function () {\n    const apiKey = \"1234567890\";\nconst secretKey = \"abcdefg\";\nconsole.log(apiKey);\nconsole.log(secretKey);\n\n    console.log(\"scriptstarted\");\n    const allowedHostnames = \"www2.biovancia.com,www.cilumine.com\".split(\",\");\n    if (allowedHostnames.includes(window.location.hostname)) {\n      const urlParams = new URLSearchParams(window.location.search);\n\n      // Récupérer le formulaire de recherche par sa classe\n      const searchForm = document.querySelector(\".elementor-search-form\");\n\n      // Ajouter un écouteur d'événement sur la soumission du formulaire\n      searchForm.addEventListener(\"submit\", function (event) {\n        // Empêcher le formulaire de se soumettre normalement\n        event.preventDefault();\n\n        // Mettre à jour la valeur du paramètre \"s\" avec la valeur saisie dans le formulaire de recherche\n\n        urlParams.set(\n          \"s\",\n          searchForm.querySelector('input[type=\"search\"]').value\n        );\n\n        // Construire la nouvelle URL avec les paramètres mis à jour\n        const newUrl = new URL(window.location.href);\n        newUrl.search = urlParams.toString();\n\n        // Rediriger vers la nouvelle URL\n        window.location.href = newUrl;\n      });\n      urlParams.delete(\"s\");\n\n      const elementA = document.querySelectorAll(\"a\");\n      const allowedLinks = \"https://www2.biovancia.com\".split(\",\");\n      // Filtrage des éléments dont l'attribut href contient les domaines recherchés\n      const filteredElementA = Array.from(elementA).filter((link) => {\n        const href = link.getAttribute(\"href\");\n        return (\n          href &&\n          allowedLinks.some((allowedLink) => href.startsWith(allowedLink))\n        );\n      });\n\n      // for each filteredLinks check urlParams pour les mettre dans linkParams\n      filteredElementA.forEach((ele) => {\n        const url = new URL(ele.href); // Crée un nouvel objet URL\n        urlParams.forEach((value, key) => {\n          url.searchParams.set(key, value); // Met à jour les paramètres de l'objet URL avec ceux de urlParams\n        });\n        console.log(ele); //console de chaque href <a>\n\n        if (\n          urlParams.has(\"lpid\") &&\n          urlParams.has(\"cpid\") &&\n          urlParams.get(\"la\") === \"SPP\" &&\n          url.origin == \"https://vl.linkinfosante.com\"\n        ) {\n          url.pathname = \"/click\";\n        }\n        ele.href = url.href; // Met à jour la valeur de l'attribut href de l'élément a avec la nouvelle valeur de l'objet URL\n      });\n\n      //var scriptExecuted\n      var scriptExecuted = true;\n      // Ajouter la variable au dataLayer\n      dataLayer.push({\n        scriptExecuted: scriptExecuted,\n      });\n      console.log(\"scriptloaded\");\n    }\n  })();\n});\n\n\n//# sourceURL=webpack://script-preservparam/./src/preservparam.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/preservparam.js"]();
/******/ 	
/******/ })()
;