/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-ui-scrollspy";
exports.ids = ["vendor-chunks/react-ui-scrollspy"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-ui-scrollspy/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-ui-scrollspy/dist/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar React = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\nfunction _interopNamespace(e) {\n  if (e && e.__esModule) return e;\n  var n = Object.create(null);\n  if (e) {\n    Object.keys(e).forEach(function (k) {\n      if (k !== 'default') {\n        var d = Object.getOwnPropertyDescriptor(e, k);\n        Object.defineProperty(n, k, d.get ? d : {\n          enumerable: true,\n          get: function () { return e[k]; }\n        });\n      }\n    });\n  }\n  n[\"default\"] = e;\n  return Object.freeze(n);\n}\n\nvar React__namespace = /*#__PURE__*/_interopNamespace(React);\n\nvar throttle = function (callback, limit) {\r\n    var tick = false;\r\n    return function () {\r\n        if (!tick) {\r\n            callback();\r\n            tick = true;\r\n            setTimeout(function () {\r\n                tick = false;\r\n            }, limit);\r\n        }\r\n    };\r\n};\n\nvar ScrollSpy = function (_a) {\r\n    var children = _a.children, \r\n    // refs\r\n    navContainerRef = _a.navContainerRef, parentScrollContainerRef = _a.parentScrollContainerRef, \r\n    // throttle\r\n    _b = _a.scrollThrottle, \r\n    // throttle\r\n    scrollThrottle = _b === void 0 ? 300 : _b, \r\n    // callback\r\n    onUpdateCallback = _a.onUpdateCallback, \r\n    // offsets\r\n    _c = _a.offsetTop, \r\n    // offsets\r\n    offsetTop = _c === void 0 ? 0 : _c, _d = _a.offsetBottom, offsetBottom = _d === void 0 ? 0 : _d, \r\n    // customize attributes\r\n    _e = _a.useDataAttribute, \r\n    // customize attributes\r\n    useDataAttribute = _e === void 0 ? \"to-scrollspy-id\" : _e, _f = _a.activeClass, activeClass = _f === void 0 ? \"active-scroll-spy\" : _f, _g = _a.useBoxMethod, useBoxMethod = _g === void 0 ? true : _g, _h = _a.updateHistoryStack, updateHistoryStack = _h === void 0 ? true : _h;\r\n    var scrollContainerRef = React.useRef(null);\r\n    var _j = React.useState(), navContainerItems = _j[0], setNavContainerItems = _j[1]; // prettier-ignore\r\n    // keeps track of the Id in navcontainer which is active\r\n    // so as to not update classLists unless it has been updated\r\n    var prevIdTracker = React.useRef(\"\");\r\n    // To get the nav container items depending on whether the parent ref for the nav container is passed or not\r\n    React.useEffect(function () {\r\n        var _a;\r\n        navContainerRef\r\n            ? setNavContainerItems((_a = navContainerRef.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll(\"[data-\".concat(useDataAttribute, \"]\")))\r\n            : setNavContainerItems(document.querySelectorAll(\"[data-\".concat(useDataAttribute, \"]\")));\r\n        // eslint-disable-next-line react-hooks/exhaustive-deps\r\n    }, [navContainerRef]);\r\n    // fire once after nav container items are set\r\n    React.useEffect(function () {\r\n        checkAndUpdateActiveScrollSpy();\r\n        // eslint-disable-next-line react-hooks/exhaustive-deps\r\n    }, [navContainerItems]);\r\n    var isVisible = function (el) {\r\n        var rectInView = el.getBoundingClientRect();\r\n        if (useBoxMethod) {\r\n            var useHeight = (parentScrollContainerRef === null || parentScrollContainerRef === void 0 ? void 0 : parentScrollContainerRef.current)\r\n                ? parentScrollContainerRef === null || parentScrollContainerRef === void 0 ? void 0 : parentScrollContainerRef.current.offsetHeight\r\n                : window.innerHeight;\r\n            var hitbox_top = useHeight;\r\n            var element_top = rectInView.top;\r\n            var element_bottom = rectInView.top + useHeight;\r\n            return (hitbox_top < element_bottom + offsetBottom &&\r\n                hitbox_top > element_top - offsetTop);\r\n        }\r\n        else {\r\n            // this decides how much of the element should be visible\r\n            var leniency = (parentScrollContainerRef === null || parentScrollContainerRef === void 0 ? void 0 : parentScrollContainerRef.current)\r\n                ? (parentScrollContainerRef === null || parentScrollContainerRef === void 0 ? void 0 : parentScrollContainerRef.current.offsetHeight) * 0.5\r\n                : window.innerHeight * 0.5;\r\n            var useHeight = (parentScrollContainerRef === null || parentScrollContainerRef === void 0 ? void 0 : parentScrollContainerRef.current)\r\n                ? parentScrollContainerRef === null || parentScrollContainerRef === void 0 ? void 0 : parentScrollContainerRef.current.offsetHeight\r\n                : window.innerHeight;\r\n            return (rectInView.top + leniency + offsetTop >= 0 &&\r\n                rectInView.bottom - leniency - offsetBottom <= useHeight);\r\n        }\r\n    };\r\n    var checkAndUpdateActiveScrollSpy = function () {\r\n        var scrollParentContainer = scrollContainerRef.current;\r\n        // if there are no children, return\r\n        if (!(scrollParentContainer && navContainerItems))\r\n            return;\r\n        var _loop_1 = function (i) {\r\n            // get child element\r\n            var useChild = scrollParentContainer.children.item(i);\r\n            var elementIsVisible = isVisible(useChild);\r\n            // check if the element is in the viewport\r\n            if (elementIsVisible) {\r\n                // if so, get its ID\r\n                var changeHighlightedItemId_1 = useChild.id;\r\n                // if the element was same as the one currently active ignore it\r\n                if (prevIdTracker.current === changeHighlightedItemId_1)\r\n                    return { value: void 0 };\r\n                // now loop over each element in the nav Container\r\n                navContainerItems.forEach(function (el) {\r\n                    var attrId = el.getAttribute(\"data-\".concat(useDataAttribute));\r\n                    // if the element contains 'active' the class remove it\r\n                    if (el.classList.contains(activeClass)) {\r\n                        el.classList.remove(activeClass);\r\n                    }\r\n                    // check if its ID matches the ID we got from the viewport\r\n                    // also make sure it does not already contain the 'active' class\r\n                    if (attrId === changeHighlightedItemId_1 &&\r\n                        !el.classList.contains(activeClass)) {\r\n                        el.classList.add(activeClass);\r\n                        if (onUpdateCallback) {\r\n                            onUpdateCallback(changeHighlightedItemId_1);\r\n                        }\r\n                        prevIdTracker.current = changeHighlightedItemId_1;\r\n                        if (updateHistoryStack) {\r\n                            window.history.replaceState({}, \"\", \"#\".concat(changeHighlightedItemId_1));\r\n                        }\r\n                    }\r\n                });\r\n                return \"break\";\r\n            }\r\n        };\r\n        // loop over all children in scroll container\r\n        for (var i = 0; i < scrollParentContainer.children.length; i++) {\r\n            var state_1 = _loop_1(i);\r\n            if (typeof state_1 === \"object\")\r\n                return state_1.value;\r\n            if (state_1 === \"break\")\r\n                break;\r\n        }\r\n    };\r\n    React.useEffect(function () {\r\n        var _a;\r\n        // listen for scroll event\r\n        parentScrollContainerRef\r\n            ? // if ref for scrollable div is provided\r\n                (_a = parentScrollContainerRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener(\"scroll\", throttle(checkAndUpdateActiveScrollSpy, scrollThrottle))\r\n            : // else listen for scroll in window\r\n                window.addEventListener(\"scroll\", throttle(checkAndUpdateActiveScrollSpy, scrollThrottle));\r\n    });\r\n    return React__namespace.createElement(\"div\", { ref: scrollContainerRef }, children);\r\n};\n\nexports[\"default\"] = ScrollSpy;\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdWktc2Nyb2xsc3B5L2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RCxZQUFZLG1CQUFPLENBQUMsd0dBQU87O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RkFBd0Y7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyQ0FBMkM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG1EQUFtRCx5QkFBeUI7QUFDNUU7O0FBRUEsa0JBQWtCO0FBQ2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVza2ktbmV4dC8uL25vZGVfbW9kdWxlcy9yZWFjdC11aS1zY3JvbGxzcHkvZGlzdC9pbmRleC5qcz80ZjlkIl0sInNvdXJjZXNDb250ZW50IjpbIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wTmFtZXNwYWNlKGUpIHtcbiAgaWYgKGUgJiYgZS5fX2VzTW9kdWxlKSByZXR1cm4gZTtcbiAgdmFyIG4gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBpZiAoZSkge1xuICAgIE9iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgIGlmIChrICE9PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgdmFyIGQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIGspO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobiwgaywgZC5nZXQgPyBkIDoge1xuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlW2tdOyB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG5bXCJkZWZhdWx0XCJdID0gZTtcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUobik7XG59XG5cbnZhciBSZWFjdF9fbmFtZXNwYWNlID0gLyojX19QVVJFX18qL19pbnRlcm9wTmFtZXNwYWNlKFJlYWN0KTtcblxudmFyIHRocm90dGxlID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBsaW1pdCkge1xyXG4gICAgdmFyIHRpY2sgPSBmYWxzZTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aWNrKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIHRpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgbGltaXQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XG5cbnZhciBTY3JvbGxTcHkgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCBcclxuICAgIC8vIHJlZnNcclxuICAgIG5hdkNvbnRhaW5lclJlZiA9IF9hLm5hdkNvbnRhaW5lclJlZiwgcGFyZW50U2Nyb2xsQ29udGFpbmVyUmVmID0gX2EucGFyZW50U2Nyb2xsQ29udGFpbmVyUmVmLCBcclxuICAgIC8vIHRocm90dGxlXHJcbiAgICBfYiA9IF9hLnNjcm9sbFRocm90dGxlLCBcclxuICAgIC8vIHRocm90dGxlXHJcbiAgICBzY3JvbGxUaHJvdHRsZSA9IF9iID09PSB2b2lkIDAgPyAzMDAgOiBfYiwgXHJcbiAgICAvLyBjYWxsYmFja1xyXG4gICAgb25VcGRhdGVDYWxsYmFjayA9IF9hLm9uVXBkYXRlQ2FsbGJhY2ssIFxyXG4gICAgLy8gb2Zmc2V0c1xyXG4gICAgX2MgPSBfYS5vZmZzZXRUb3AsIFxyXG4gICAgLy8gb2Zmc2V0c1xyXG4gICAgb2Zmc2V0VG9wID0gX2MgPT09IHZvaWQgMCA/IDAgOiBfYywgX2QgPSBfYS5vZmZzZXRCb3R0b20sIG9mZnNldEJvdHRvbSA9IF9kID09PSB2b2lkIDAgPyAwIDogX2QsIFxyXG4gICAgLy8gY3VzdG9taXplIGF0dHJpYnV0ZXNcclxuICAgIF9lID0gX2EudXNlRGF0YUF0dHJpYnV0ZSwgXHJcbiAgICAvLyBjdXN0b21pemUgYXR0cmlidXRlc1xyXG4gICAgdXNlRGF0YUF0dHJpYnV0ZSA9IF9lID09PSB2b2lkIDAgPyBcInRvLXNjcm9sbHNweS1pZFwiIDogX2UsIF9mID0gX2EuYWN0aXZlQ2xhc3MsIGFjdGl2ZUNsYXNzID0gX2YgPT09IHZvaWQgMCA/IFwiYWN0aXZlLXNjcm9sbC1zcHlcIiA6IF9mLCBfZyA9IF9hLnVzZUJveE1ldGhvZCwgdXNlQm94TWV0aG9kID0gX2cgPT09IHZvaWQgMCA/IHRydWUgOiBfZywgX2ggPSBfYS51cGRhdGVIaXN0b3J5U3RhY2ssIHVwZGF0ZUhpc3RvcnlTdGFjayA9IF9oID09PSB2b2lkIDAgPyB0cnVlIDogX2g7XHJcbiAgICB2YXIgc2Nyb2xsQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICAgdmFyIF9qID0gUmVhY3QudXNlU3RhdGUoKSwgbmF2Q29udGFpbmVySXRlbXMgPSBfalswXSwgc2V0TmF2Q29udGFpbmVySXRlbXMgPSBfalsxXTsgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICAvLyBrZWVwcyB0cmFjayBvZiB0aGUgSWQgaW4gbmF2Y29udGFpbmVyIHdoaWNoIGlzIGFjdGl2ZVxyXG4gICAgLy8gc28gYXMgdG8gbm90IHVwZGF0ZSBjbGFzc0xpc3RzIHVubGVzcyBpdCBoYXMgYmVlbiB1cGRhdGVkXHJcbiAgICB2YXIgcHJldklkVHJhY2tlciA9IFJlYWN0LnVzZVJlZihcIlwiKTtcclxuICAgIC8vIFRvIGdldCB0aGUgbmF2IGNvbnRhaW5lciBpdGVtcyBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgcGFyZW50IHJlZiBmb3IgdGhlIG5hdiBjb250YWluZXIgaXMgcGFzc2VkIG9yIG5vdFxyXG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgbmF2Q29udGFpbmVyUmVmXHJcbiAgICAgICAgICAgID8gc2V0TmF2Q29udGFpbmVySXRlbXMoKF9hID0gbmF2Q29udGFpbmVyUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtXCIuY29uY2F0KHVzZURhdGFBdHRyaWJ1dGUsIFwiXVwiKSkpXHJcbiAgICAgICAgICAgIDogc2V0TmF2Q29udGFpbmVySXRlbXMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLVwiLmNvbmNhdCh1c2VEYXRhQXR0cmlidXRlLCBcIl1cIikpKTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgICB9LCBbbmF2Q29udGFpbmVyUmVmXSk7XHJcbiAgICAvLyBmaXJlIG9uY2UgYWZ0ZXIgbmF2IGNvbnRhaW5lciBpdGVtcyBhcmUgc2V0XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNoZWNrQW5kVXBkYXRlQWN0aXZlU2Nyb2xsU3B5KCk7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gICAgfSwgW25hdkNvbnRhaW5lckl0ZW1zXSk7XHJcbiAgICB2YXIgaXNWaXNpYmxlID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgdmFyIHJlY3RJblZpZXcgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBpZiAodXNlQm94TWV0aG9kKSB7XHJcbiAgICAgICAgICAgIHZhciB1c2VIZWlnaHQgPSAocGFyZW50U2Nyb2xsQ29udGFpbmVyUmVmID09PSBudWxsIHx8IHBhcmVudFNjcm9sbENvbnRhaW5lclJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50U2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQpXHJcbiAgICAgICAgICAgICAgICA/IHBhcmVudFNjcm9sbENvbnRhaW5lclJlZiA9PT0gbnVsbCB8fCBwYXJlbnRTY3JvbGxDb250YWluZXJSZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudFNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50Lm9mZnNldEhlaWdodFxyXG4gICAgICAgICAgICAgICAgOiB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgIHZhciBoaXRib3hfdG9wID0gdXNlSGVpZ2h0O1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudF90b3AgPSByZWN0SW5WaWV3LnRvcDtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnRfYm90dG9tID0gcmVjdEluVmlldy50b3AgKyB1c2VIZWlnaHQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoaGl0Ym94X3RvcCA8IGVsZW1lbnRfYm90dG9tICsgb2Zmc2V0Qm90dG9tICYmXHJcbiAgICAgICAgICAgICAgICBoaXRib3hfdG9wID4gZWxlbWVudF90b3AgLSBvZmZzZXRUb3ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdGhpcyBkZWNpZGVzIGhvdyBtdWNoIG9mIHRoZSBlbGVtZW50IHNob3VsZCBiZSB2aXNpYmxlXHJcbiAgICAgICAgICAgIHZhciBsZW5pZW5jeSA9IChwYXJlbnRTY3JvbGxDb250YWluZXJSZWYgPT09IG51bGwgfHwgcGFyZW50U2Nyb2xsQ29udGFpbmVyUmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJlbnRTY3JvbGxDb250YWluZXJSZWYuY3VycmVudClcclxuICAgICAgICAgICAgICAgID8gKHBhcmVudFNjcm9sbENvbnRhaW5lclJlZiA9PT0gbnVsbCB8fCBwYXJlbnRTY3JvbGxDb250YWluZXJSZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudFNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50Lm9mZnNldEhlaWdodCkgKiAwLjVcclxuICAgICAgICAgICAgICAgIDogd2luZG93LmlubmVySGVpZ2h0ICogMC41O1xyXG4gICAgICAgICAgICB2YXIgdXNlSGVpZ2h0ID0gKHBhcmVudFNjcm9sbENvbnRhaW5lclJlZiA9PT0gbnVsbCB8fCBwYXJlbnRTY3JvbGxDb250YWluZXJSZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudFNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50KVxyXG4gICAgICAgICAgICAgICAgPyBwYXJlbnRTY3JvbGxDb250YWluZXJSZWYgPT09IG51bGwgfHwgcGFyZW50U2Nyb2xsQ29udGFpbmVyUmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJlbnRTY3JvbGxDb250YWluZXJSZWYuY3VycmVudC5vZmZzZXRIZWlnaHRcclxuICAgICAgICAgICAgICAgIDogd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgICAgICByZXR1cm4gKHJlY3RJblZpZXcudG9wICsgbGVuaWVuY3kgKyBvZmZzZXRUb3AgPj0gMCAmJlxyXG4gICAgICAgICAgICAgICAgcmVjdEluVmlldy5ib3R0b20gLSBsZW5pZW5jeSAtIG9mZnNldEJvdHRvbSA8PSB1c2VIZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YXIgY2hlY2tBbmRVcGRhdGVBY3RpdmVTY3JvbGxTcHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNjcm9sbFBhcmVudENvbnRhaW5lciA9IHNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50O1xyXG4gICAgICAgIC8vIGlmIHRoZXJlIGFyZSBubyBjaGlsZHJlbiwgcmV0dXJuXHJcbiAgICAgICAgaWYgKCEoc2Nyb2xsUGFyZW50Q29udGFpbmVyICYmIG5hdkNvbnRhaW5lckl0ZW1zKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgLy8gZ2V0IGNoaWxkIGVsZW1lbnRcclxuICAgICAgICAgICAgdmFyIHVzZUNoaWxkID0gc2Nyb2xsUGFyZW50Q29udGFpbmVyLmNoaWxkcmVuLml0ZW0oaSk7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50SXNWaXNpYmxlID0gaXNWaXNpYmxlKHVzZUNoaWxkKTtcclxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50SXNWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBzbywgZ2V0IGl0cyBJRFxyXG4gICAgICAgICAgICAgICAgdmFyIGNoYW5nZUhpZ2hsaWdodGVkSXRlbUlkXzEgPSB1c2VDaGlsZC5pZDtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBlbGVtZW50IHdhcyBzYW1lIGFzIHRoZSBvbmUgY3VycmVudGx5IGFjdGl2ZSBpZ25vcmUgaXRcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2SWRUcmFja2VyLmN1cnJlbnQgPT09IGNoYW5nZUhpZ2hsaWdodGVkSXRlbUlkXzEpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZvaWQgMCB9O1xyXG4gICAgICAgICAgICAgICAgLy8gbm93IGxvb3Agb3ZlciBlYWNoIGVsZW1lbnQgaW4gdGhlIG5hdiBDb250YWluZXJcclxuICAgICAgICAgICAgICAgIG5hdkNvbnRhaW5lckl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJJZCA9IGVsLmdldEF0dHJpYnV0ZShcImRhdGEtXCIuY29uY2F0KHVzZURhdGFBdHRyaWJ1dGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgZWxlbWVudCBjb250YWlucyAnYWN0aXZlJyB0aGUgY2xhc3MgcmVtb3ZlIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhhY3RpdmVDbGFzcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGl0cyBJRCBtYXRjaGVzIHRoZSBJRCB3ZSBnb3QgZnJvbSB0aGUgdmlld3BvcnRcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbHNvIG1ha2Ugc3VyZSBpdCBkb2VzIG5vdCBhbHJlYWR5IGNvbnRhaW4gdGhlICdhY3RpdmUnIGNsYXNzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJJZCA9PT0gY2hhbmdlSGlnaGxpZ2h0ZWRJdGVtSWRfMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGFjdGl2ZUNsYXNzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uVXBkYXRlQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlQ2FsbGJhY2soY2hhbmdlSGlnaGxpZ2h0ZWRJdGVtSWRfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldklkVHJhY2tlci5jdXJyZW50ID0gY2hhbmdlSGlnaGxpZ2h0ZWRJdGVtSWRfMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZUhpc3RvcnlTdGFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBcIlwiLCBcIiNcIi5jb25jYXQoY2hhbmdlSGlnaGxpZ2h0ZWRJdGVtSWRfMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJicmVha1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBsb29wIG92ZXIgYWxsIGNoaWxkcmVuIGluIHNjcm9sbCBjb250YWluZXJcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNjcm9sbFBhcmVudENvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGVfMSA9IF9sb29wXzEoaSk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhdGVfMSA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZV8xLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGVfMSA9PT0gXCJicmVha1wiKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIC8vIGxpc3RlbiBmb3Igc2Nyb2xsIGV2ZW50XHJcbiAgICAgICAgcGFyZW50U2Nyb2xsQ29udGFpbmVyUmVmXHJcbiAgICAgICAgICAgID8gLy8gaWYgcmVmIGZvciBzY3JvbGxhYmxlIGRpdiBpcyBwcm92aWRlZFxyXG4gICAgICAgICAgICAgICAgKF9hID0gcGFyZW50U2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRocm90dGxlKGNoZWNrQW5kVXBkYXRlQWN0aXZlU2Nyb2xsU3B5LCBzY3JvbGxUaHJvdHRsZSkpXHJcbiAgICAgICAgICAgIDogLy8gZWxzZSBsaXN0ZW4gZm9yIHNjcm9sbCBpbiB3aW5kb3dcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRocm90dGxlKGNoZWNrQW5kVXBkYXRlQWN0aXZlU2Nyb2xsU3B5LCBzY3JvbGxUaHJvdHRsZSkpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gUmVhY3RfX25hbWVzcGFjZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgcmVmOiBzY3JvbGxDb250YWluZXJSZWYgfSwgY2hpbGRyZW4pO1xyXG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFNjcm9sbFNweTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-ui-scrollspy/dist/index.js\n");

/***/ })

};
;