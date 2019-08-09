"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useLoader = function useLoader() {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loaded = _useState2[0],
      _setLoaded = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      _setError = _useState4[1];

  var isLoaded = function isLoaded() {
    return loaded;
  };

  var isError = function isError() {
    return error !== false;
  };

  var showContent = function showContent() {
    if (!loaded) return _react.default.createElement("div", null, 'Loading', "...");
    if (error !== false) return _react.default.createElement("div", {
      className: "alert alert-danger"
    }, error);
    return null;
  };

  var notReady = function notReady() {
    return !isLoaded() || isError();
  };

  var setError = (0, _react.useCallback)(function (_error) {
    _setLoaded(true);

    _setError(_error);
  }, []);
  var setLoaded = (0, _react.useCallback)(function (l) {
    _setLoaded(l);

    _setError(false);
  }, []);
  return [{
    isLoaded: isLoaded,
    isError: isError,
    showContent: showContent,
    notReady: notReady
  }, setLoaded, setError];
};

var _default = useLoader;
exports.default = _default;