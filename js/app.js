/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var form = document.querySelector('.contact-form');
var filterForm = document.querySelector('.filter-form');
var output = document.querySelector('.info-output');
var volume = document.querySelector('#volume');
var volumeResult = document.querySelector('.volume-result');
var inputs = document.querySelectorAll('input, select');
var reset = document.querySelector('button[type="reset"]');
var radioBox = document.querySelectorAll('input[type=radio]');
var data = [];
var allFields = ['Vardas', 'Pavardė', 'Telefonas', 'Elektr.pašto adresas', 'Amžius', 'Patirtis', 'Aprašymas', 'Grupė', 'Žinias', 'Įvertinimas'];
var studentList = document.createElement('div');
studentList.setAttribute('id', 'students-list');
studentList.style.display = 'flex';
studentList.style.flexWrap = 'wrap';
studentList.style.gap = '20px';
studentList.style.width = '100%';
output.appendChild(studentList);
var divAlert = document.createElement('div');
divAlert.classList.add('alert', 'alert-success');
divAlert.textContent = 'Student created successfully';
divAlert.style.minHeight = '50px';
divAlert.style.display = 'none';
var divAlertDelete = document.createElement('div');
divAlertDelete.classList.add('alert', 'alert-danger');
divAlertDelete.style.minHeight = '50px';
divAlertDelete.style.display = 'none';
var alerts = document.querySelector('.alerts');
alerts.style.minHeight = '100px';
alerts.appendChild(divAlert);
alerts.appendChild(divAlertDelete);
form.addEventListener('submit', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
    var fname, lname, tel, mail, age, experience, text, groupRadio, groupCheckbox, volume, validation, response, dataToStorage, dataFromLocalStorage, allDataToLocalstorage;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            fname = document.querySelector('input[name=fname]').value;
            lname = document.querySelector('input[name=lname]').value;
            tel = document.querySelector('input[name=tel]').value;
            mail = document.querySelector('input[name=mail]').value;
            age = document.querySelector('input[name=age]').value;
            experience = document.querySelector('input[name=experience]').value;
            text = document.querySelector('#text').value;
            groupRadio = document.querySelector('input[name=group]:checked');
            groupCheckbox = document.querySelector('input[name=groupCheckbox]:checked').value;
            volume = document.querySelector('input[name=volume]').value;
            validation = document.querySelectorAll('.required');
            response = formValidation(validation);

            if (!response) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return");

          case 15:
            dataToStorage = {
              firstName: fname,
              secondName: lname,
              phoneNumber: tel,
              emailAddress: mail,
              studentAge: age,
              studentExperience: experience,
              studentInformation: text,
              studentGroup: groupRadio,
              studentStack: groupCheckbox,
              knowledgeRating: volume
            };
            dataFromLocalStorage = JSON.parse(localStorage.getItem('student-data'));
            dataFromLocalStorage.push(dataToStorage);
            allDataToLocalstorage = JSON.stringify(dataFromLocalStorage);
            localStorage.setItem('student-data', allDataToLocalstorage);

            if (studentList.children.length > 0) {
              while (studentList.lastElementChild) {
                studentList.removeChild(studentList.lastElementChild);
              }
            }

            generateListInHtml(dataFromLocalStorage);
            alertSwitch();
            divAlert.textContent = 'Student created successfully' + ' ' + fname + ' ' + lname;
            form.reset();
            window.scrollTo(0, document.body.scrollHeight);
            setTimeout(alertSwitch, 5000);

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

function formValidation(validation) {
  var mistakes = document.querySelectorAll('.mistake');
  mistakes.forEach(function (value) {
    return value.remove();
  });
  var noData = false;
  var notValid = false;
  validation.forEach(function (element) {
    element.style.border = "2px solid black";

    if (!element.value) {
      noData = true;
      element.style.border = "2px solid red";
      var text = '<p style="color: red;">Šis laukelis yra privalomas</p>';
      var p = createErrorMessage(text);
      element.before(p);
    }

    if (element.name === 'fname' && element.value.length < 4) {
      element.style.border = "2px solid red";
      var _text = '<p style="color: red;">Vardas privalo būti bent 3 simbolių ilgumo</p>';

      var _p = createErrorMessage(_text);

      element.before(_p);
      notValid = true;
    }

    if (element.name === 'lname' && element.value.length < 4) {
      element.style.border = "2px solid red";
      var _text2 = '<p style="color: red;">Pavardė privalo būti bent 3 simbolių ilgumo</p>';

      var _p2 = createErrorMessage(_text2);

      element.before(_p2);
      notValid = true;
    }

    if (element.name === 'age' && element.value <= 0) {
      element.style.border = "2px solid red";
      var _text3 = '<p style="color: red;">Amžius privalo būti teigiamas skaičius</p>';

      var _p3 = createErrorMessage(_text3);

      element.before(_p3);
      notValid = true;
    } else if (element.name === 'age' && element.value > 120) {
      element.style.border = "2px solid red";
      var _text4 = '<p style="color: red;">Įvestas amžius yra per didelis</p>';

      var _p4 = createErrorMessage(_text4);

      element.before(_p4);
      notValid = true;
    }

    if (element.name === 'tel' && (element.value.length < 9 || element.value.length > 12)) {
      element.style.border = "2px solid red";
      var _text5 = '<p style="color: red;">Įvestas telefono numeris yra neteisingas</p>';

      var _p5 = createErrorMessage(_text5);

      element.before(_p5);
      notValid = true;
    }

    var regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    var found = element.value.match(regex);

    if (element.name === 'mail' && (element.value.length < 8 || !found)) {
      element.style.border = "2px solid red";
      var _text6 = '<p style="color: red;">Įvestas elektroninis paštas yra neteisingas</p>';

      var _p6 = createErrorMessage(_text6);

      element.before(_p6);
      notValid = true;
    }
  });

  if (noData) {
    divAlertDelete.textContent = 'Ne visi laukeliai yra užpildyti';
    divAlertDelete.style.display = 'block';
    setTimeout(function () {
      divAlertDelete.style.display = 'none';
    }, 5000);
  }

  var response = false;

  if (notValid || noData) {
    response = true;
  }

  return response;
}

function alertSwitch() {
  if (divAlert.style.display === 'none') {
    divAlert.style.display = 'block';
  } else {
    divAlert.style.display = 'none';
  }
}

volume.addEventListener('change', function () {
  volumeResult.textContent = volume.value;
});

function createErrorMessage(text) {
  var p = document.createElement('p');
  p.innerHTML = text;
  p.classList.add('mistake');
  return p;
}

inputs.forEach(function (element, index, nodelst) {
  element.value = localStorage.getItem(element.id);

  if (index < nodelst.length - 1) {
    if (element.checked) {
      element.addEventListener('change', function () {
        localStorage.setItem(element.id, element.checked);
      });
    } else {
      element.addEventListener('change', function () {
        localStorage.setItem(element.id, element.value);
      });
    }
  }
});
reset.addEventListener('click', function () {
  localStorage.clear();
});
radioBox.forEach(function (element) {
  element.addEventListener('change', function () {
    setRadioBoxes();
  });
});
var dataRadioBox = localStorage.getItem('groupRadio');

if (dataRadioBox) {
  document.getElementById(dataRadioBox).checked = true;
}

function setRadioBoxes() {
  var radioBoxChecked = document.querySelector('input[type=radio]:checked');
  localStorage.setItem('groupRadio', radioBoxChecked.id);
}

var allCheckBoxes = document.querySelectorAll('input[type=checkbox]');
allCheckBoxes.forEach(function (element) {
  element.addEventListener('change', function () {
    allCheckBoxesData();
  });
});
var dataFromStorage = localStorage.getItem('groupCheckbox');
var parsedData = JSON.parse(dataFromStorage);

if (parsedData) {
  parsedData.map(function (element) {
    var data = document.getElementById(element);
    data.checked = true;
  });
}

function allCheckBoxesData() {
  var arr = [];
  var checkBoxesAll = document.querySelectorAll('[name="groupCheckbox"]:checked');

  if (checkBoxesAll) {
    checkBoxesAll.forEach(function (element) {
      arr.push(element.id);
    });
    var dataToStorage = JSON.stringify(arr);
    localStorage.setItem('groupCheckbox', dataToStorage);
  }
}

var studentsListData = [{
  firstName: 'Petras',
  secondName: 'Petrauskas',
  phoneNumber: '+37068600001',
  emailAddress: 'some@petrauskas.eu',
  studentAge: 20,
  studentExperience: 2,
  studentInformation: 'Some a lot of text',
  studentGroup: 'First',
  studentStack: ['JS', 'PHP', 'CSS', 'HTML'],
  knowledgeRating: 8
}, {
  firstName: 'Jonas',
  secondName: 'Jonauskas',
  phoneNumber: '+37068600002',
  emailAddress: 'some@jonauskas.eu',
  studentAge: 23,
  studentExperience: 3,
  studentInformation: 'Some a lot of text',
  studentGroup: 'Second',
  studentStack: ['PHP', 'CSS', 'HTML'],
  knowledgeRating: 9
}, {
  firstName: 'Darius',
  secondName: 'Dariauskas',
  phoneNumber: '+37068600003',
  emailAddress: 'some@dariauskas.eu',
  studentAge: 19,
  studentExperience: 1,
  studentInformation: 'Some a lot of text',
  studentGroup: 'Third',
  studentStack: ['HTML'],
  knowledgeRating: 5
}, {
  firstName: 'Pranas',
  secondName: 'Pranauskas',
  phoneNumber: '+37068600004',
  emailAddress: 'some@pranauskas.eu',
  studentAge: 18,
  studentExperience: 0,
  studentInformation: 'Some a lot of text',
  studentGroup: 'First',
  studentStack: ['HTML'],
  knowledgeRating: 3
}, {
  firstName: 'Zofija',
  secondName: 'Zofijauska',
  phoneNumber: '+37068600005',
  emailAddress: 'some@zofijauska.eu',
  studentAge: 65,
  studentExperience: 50,
  studentInformation: 'Some a lot of text',
  studentGroup: 'Best',
  studentStack: ['HTML', 'C++', 'C#', 'JS', 'Java', 'Python', 'Ruby', 'PHP', 'Go', 'Swift'],
  knowledgeRating: 10
}];
var dataToLocalStorage = JSON.stringify(studentsListData);
var isDataInLocalStorage = localStorage.getItem('student-data');

if (!isDataInLocalStorage) {
  localStorage.setItem('student-data', dataToLocalStorage);
}

var studentsListRaw = localStorage.getItem('student-data');
var studentsList = JSON.parse(studentsListRaw);
generateListInHtml(studentsList);

function generateListInHtml(data) {
  data.map(function (data, index) {
    var studentItem = document.createElement('div');
    studentItem.setAttribute('id', "students-card-".concat(index));
    studentItem.classList.add('card');
    studentItem.style.width = '380px';
    studentList.appendChild(studentItem);
    var divCard = document.createElement('div');
    divCard.classList.add('card-header');
    divCard.textContent = data.firstName + ' ' + data.secondName;
    studentItem.appendChild(divCard);
    var ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush');
    ul.classList.add('students-item-' + index);
    ul.style.listStyle = 'none';
    studentItem.appendChild(ul);
    var values = Object.values(data);
    values.map(function (value, whichIx) {
      var mark;

      if (whichIx === 3) {
        value = '*****';
        mark = "mark".concat(index);
      }

      var li = document.createElement('li');
      li.classList.add('list-group-item');

      if (mark) {
        li.classList.add(mark);
      }

      li.innerHTML = allFields[whichIx] + ': ' + '<span class=\"' + 'item-' + whichIx + '\">' + value + '</span>';
      ul.appendChild(li);
    });
    var buttonStd = document.createElement('button');
    buttonStd.textContent = 'Rodyti asmens duomenis';
    ul.appendChild(buttonStd);
    var buttonDeleteStd = document.createElement('button');
    buttonDeleteStd.textContent = 'Ištrinti studentą';
    buttonDeleteStd.classList.add('btn', 'btn-danger');
    ul.appendChild(buttonDeleteStd);
    buttonDeleteStd.addEventListener('click', function () {
      studentItem.remove();
      divAlertDelete.textContent = 'Student ' + values[0] + ' ' + values[1] + ' successfully deleted';
      divAlertDelete.style.display = 'block';
      setTimeout(function () {
        divAlertDelete.style.display = 'none';
      }, 5000);
      var dataFromLocalStorage = JSON.parse(localStorage.getItem('student-data'));
      var dataToLocalStorage = dataFromLocalStorage.filter(function (value) {
        if (value.firstName !== values[0] && value.secondName !== values[1]) {
          return value;
        }
      });
      localStorage.setItem('student-data', JSON.stringify(dataToLocalStorage));
    });
    var dataHidden = true;
    buttonStd.addEventListener('click', function () {
      var email = document.querySelector(".mark".concat(index));

      if (dataHidden) {
        email.textContent = values[3];
        buttonStd.textContent = 'Slėpti asmens duomenis';
      } else {
        email.textContent = '*****';
        buttonStd.textContent = 'Rodyti asmens duomenis';
      }

      dataHidden = !dataHidden;
    });
  });
}

function filterByParameter() {
  filterForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var searchByItem = document.querySelector('.search-item').value;
    var searchFormValue = event.target.elements.searchText.value.toLowerCase();
    var numberOfStudents = studentList.childNodes.length;

    for (var i = 0; i < numberOfStudents; i++) {
      var selector = '.students-item-' + i;
      var studentFirstName = document.querySelector("".concat(selector)).childNodes[0].textContent.toLowerCase();
      var studentLastName = document.querySelector("".concat(selector)).childNodes[1].textContent.toLowerCase();
      var studentAge = document.querySelector("".concat(selector)).childNodes[4].textContent.toLowerCase();
      var studentGroup = document.querySelector("".concat(selector)).childNodes[7].textContent.toLowerCase();
      var studentGrade = document.querySelector("".concat(selector)).childNodes[9].textContent.toLowerCase();
      var isTrueFirstName = studentFirstName.includes(searchFormValue);
      var isTrueSecondName = studentLastName.includes(searchFormValue);
      var isTrueAge = studentAge.includes(searchFormValue);
      var isTrueGroup = studentGroup.includes(searchFormValue);
      var isTrueGrade = studentGrade.includes(searchFormValue);

      if (searchByItem === 'firstName' && isTrueFirstName) {
        studentList.childNodes[i].style.display = 'block';
      } else if (searchByItem === 'secondName' && isTrueSecondName) {
        studentList.childNodes[i].style.display = 'block';
      } else if (searchByItem === 'age' && isTrueAge) {
        studentList.childNodes[i].style.display = 'block';
      } else if (searchByItem === 'group' && isTrueGroup) {
        studentList.childNodes[i].style.display = 'block';
      } else if (searchByItem === 'grade' && isTrueGrade) {
        studentList.childNodes[i].style.display = 'block';
      } else {
        studentList.childNodes[i].style.display = 'none';
      }
    }
  });
}

filterByParameter();

function filterButtonDisable() {
  var submitButtonFilter = document.querySelector('.filter-submit-button');
  submitButtonFilter.disabled = true;
  filterForm.addEventListener('change', function (e) {
    submitButtonFilter.disabled = !(e.target.value.length > 0 && e.target.value !== 0);
  });
}

filterButtonDisable();
var filterResetButton = document.querySelector('.filter-reset-button');
filterResetButton.addEventListener('click', function () {
  document.location.reload();
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkclean"] = self["webpackChunkclean"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;