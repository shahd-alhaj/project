/**
 * ============================================================
 * ⚠️ DEMO ONLY
 * هذا الملف جزء من واجهة دفع تجريبية (Front-End UI Demo).
 * لا يتصل بأي خادم، ولا يستخدم fetch/XHR، ولا يخزّن أي بيانات
 * في localStorage أو sessionStorage أو Cookies.
 * كل ما يحدث هنا هو تحديث بصري فوري للعناصر داخل الصفحة فقط.
 * ============================================================
 */

(() => {
  "use strict";

  /* ------------------------------------------------------------
   * 1) مراجع العناصر
   * ------------------------------------------------------------ */
  const form = document.getElementById("paymentForm");

  const cardNumberInput = document.getElementById("cardNumber");
  const cardHolderInput = document.getElementById("cardHolder");
  const cardExpiryInput = document.getElementById("cardExpiry");
  const cardCvvInput = document.getElementById("cardCvv");

  const cardNumberDisplay = document.getElementById("cardNumberDisplay");
  const cardHolderDisplay = document.getElementById("cardHolderDisplay");
  const cardExpiryDisplay = document.getElementById("cardExpiryDisplay");
  const cardCvvDisplay = document.getElementById("cardCvvDisplay");

  const card3d = document.getElementById("card3d");
  const cardScene = document.getElementById("cardScene");

  const errorEls = {
    cardNumber: document.getElementById("cardNumberError"),
    cardHolder: document.getElementById("cardHolderError"),
    cardExpiry: document.getElementById("cardExpiryError"),
    cardCvv: document.getElementById("cardCvvError"),
  };

  // كل عناصر البطاقة التي يمكن "تظليلها" عند التركيز على الحقل المقابل
  const highlightTargets = document.querySelectorAll("[data-highlight]");

  const PLACEHOLDER_NUMBER = "•••• •••• •••• ••••";
  const PLACEHOLDER_HOLDER = "CARD HOLDER";
  const PLACEHOLDER_EXPIRY = "MM/YY";
  const PLACEHOLDER_CVV = "•••";

  /* ------------------------------------------------------------
   * 2) أدوات مساعدة للتنسيق (Formatting)
   * ------------------------------------------------------------ */

  // يبقي الأرقام فقط، بحد أقصى معيّن من الخانات
  function onlyDigits(value, maxLength) {
    const digits = value.replace(/\D/g, "");
    return maxLength ? digits.slice(0, maxLength) : digits;
  }

  // يقسّم رقم البطاقة كل 4 أرقام: 4242424242424242 -> 4242 4242 4242 4242
  function formatCardNumber(digits) {
    return digits.replace(/(.{4})/g, "$1 ").trim();
  }

  // يبني نص البطاقة المعروض (مع نقاط للخانات غير المكتوبة بعد)
  function buildCardNumberDisplayText(digits) {
    const padded = digits.padEnd(16, "•");
    const groups = padded.match(/.{1,4}/g) || [];
    return groups.join(" ");
  }

  // MM/YY تنسيق تلقائي لتاريخ الانتهاء
  function formatExpiry(digits) {
    if (digits.length === 0) return "";
    if (digits.length <= 2) return digits;
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
  }

  /* ------------------------------------------------------------
   * 3) تحديث عرض البطاقة من قيم الحقول
   * ------------------------------------------------------------ */

  function updateCardNumberDisplay() {
    const digits = onlyDigits(cardNumberInput.value, 16);
    cardNumberDisplay.textContent = digits.length
      ? buildCardNumberDisplayText(digits)
      : PLACEHOLDER_NUMBER;
  }

  function updateCardHolderDisplay() {
    const value = cardHolderInput.value.trim();
    cardHolderDisplay.textContent = value ? value.toUpperCase() : PLACEHOLDER_HOLDER;
  }

  function updateCardExpiryDisplay() {
    const value = cardExpiryInput.value.trim();
    cardExpiryDisplay.textContent = value ? value : PLACEHOLDER_EXPIRY;
  }

  function updateCardCvvDisplay() {
    const digits = onlyDigits(cardCvvInput.value, 4);
    cardCvvDisplay.textContent = digits.length ? digits : PLACEHOLDER_CVV;
  }

  /* ------------------------------------------------------------
   * 4) مستمعات الإدخال (Input Listeners)
   * ------------------------------------------------------------ */

  cardNumberInput.addEventListener("input", () => {
    const digits = onlyDigits(cardNumberInput.value, 16);
    cardNumberInput.value = formatCardNumber(digits);
    updateCardNumberDisplay();
    clearError("cardNumber");
  });

  cardHolderInput.addEventListener("input", () => {
    // يمنع أرقامًا زائدة عن الحاجة، لكن يسمح بحروف ومسافات فقط بشكل مرن
    updateCardHolderDisplay();
    clearError("cardHolder");
  });

  cardExpiryInput.addEventListener("input", () => {
    const digits = onlyDigits(cardExpiryInput.value, 4);
    cardExpiryInput.value = formatExpiry(digits);
    updateCardExpiryDisplay();
    clearError("cardExpiry");
  });

  cardCvvInput.addEventListener("input", () => {
    cardCvvInput.value = onlyDigits(cardCvvInput.value, 4);
    updateCardCvvDisplay();
    clearError("cardCvv");
  });

  /* ------------------------------------------------------------
   * 5) قلب البطاقة عند التركيز على CVV
   * ------------------------------------------------------------ */

  cardCvvInput.addEventListener("focus", () => {
    card3d.classList.add("is-flipped");
    setHighlight("cvv");
  });

  cardCvvInput.addEventListener("blur", () => {
    card3d.classList.remove("is-flipped");
    clearHighlight();
  });

  /* ------------------------------------------------------------
   * 6) تظليل منطقة البطاقة المطابقة للحقل الحالي
   * ------------------------------------------------------------ */

  function setHighlight(key) {
    highlightTargets.forEach((el) => {
      el.classList.toggle("highlighted", el.dataset.highlight === key);
    });
  }

  function clearHighlight() {
    highlightTargets.forEach((el) => el.classList.remove("highlighted"));
  }

  cardNumberInput.addEventListener("focus", () => setHighlight("number"));
  cardHolderInput.addEventListener("focus", () => setHighlight("holder"));
  cardExpiryInput.addEventListener("focus", () => setHighlight("expiry"));

  [cardNumberInput, cardHolderInput, cardExpiryInput].forEach((input) => {
    input.addEventListener("blur", clearHighlight);
  });

  /* ------------------------------------------------------------
   * 7) إمالة البطاقة (Tilt) حسب موضع الفأرة — Desktop فقط
   * ------------------------------------------------------------ */

  const MAX_TILT = 10; // أقصى زاوية إمالة بالدرجات، إبقاؤها لطيفة وغير مزعجة

  function handlePointerMove(event) {
    const rect = cardScene.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const percentX = x / rect.width - 0.5; // -0.5 إلى 0.5
    const percentY = y / rect.height - 0.5;

    const tiltY = percentX * MAX_TILT * 2; // rotateY يتبع المحور الأفقي
    const tiltX = percentY * MAX_TILT * -2; // rotateX يتبع المحور الرأسي (معكوس)

    cardScene.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
    cardScene.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);

    // تحريك بريق الانعكاس (sheen) بلطف مع حركة الفأرة
    const sheenX = 30 - percentX * 60;
    cardScene.style.setProperty("--sheen-x", `${sheenX}%`);
  }

  function resetTilt() {
    cardScene.style.setProperty("--tilt-x", "0deg");
    cardScene.style.setProperty("--tilt-y", "0deg");
    cardScene.style.setProperty("--sheen-x", "-30%");
  }

  // نفعّل الإمالة فقط للأجهزة التي تملك فأرة دقيقة (استبعاد اللمس)
  const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (supportsHover) {
    cardScene.addEventListener("mousemove", handlePointerMove);
    cardScene.addEventListener("mouseleave", resetTilt);
  }

  /* ------------------------------------------------------------
   * 8) التحقق من الصحة (Validation) — بدون أي إرسال بيانات
   * ------------------------------------------------------------ */

  function setError(field, message) {
    errorEls[field].textContent = message;
    document.getElementById(field).classList.toggle("invalid", Boolean(message));
  }

  function clearError(field) {
    errorEls[field].textContent = "";
    document.getElementById(field).classList.remove("invalid");
  }

  // خوارزمية Luhn للتحقق من صلاحية رقم البطاقة (تحقق تنسيقي فقط، للعرض التجريبي)
  function isValidLuhn(digits) {
    let sum = 0;
    let shouldDouble = false;
    for (let i = digits.length - 1; i >= 0; i--) {
      let d = parseInt(digits[i], 10);
      if (shouldDouble) {
        d *= 2;
        if (d > 9) d -= 9;
      }
      sum += d;
      shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
  }

  function validateCardNumber() {
    const digits = onlyDigits(cardNumberInput.value, 16);
    if (digits.length !== 16) {
      setError("cardNumber", "رقم البطاقة يجب أن يتكوّن من 16 رقمًا.");
      return false;
    }
    if (!isValidLuhn(digits)) {
      setError("cardNumber", "رقم البطاقة غير صالح.");
      return false;
    }
    clearError("cardNumber");
    return true;
  }

  function validateCardHolder() {
    const value = cardHolderInput.value.trim();
    if (value.length < 3) {
      setError("cardHolder", "يرجى إدخال اسم حامل البطاقة كاملًا.");
      return false;
    }
    clearError("cardHolder");
    return true;
  }

  function validateExpiry() {
    const value = cardExpiryInput.value.trim();
    const match = /^(\d{2})\/(\d{2})$/.exec(value);
    if (!match) {
      setError("cardExpiry", "استخدم صيغة MM/YY.");
      return false;
    }
    const month = parseInt(match[1], 10);
    const year = parseInt(match[2], 10) + 2000;
    if (month < 1 || month > 12) {
      setError("cardExpiry", "الشهر غير صالح.");
      return false;
    }
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      setError("cardExpiry", "تاريخ البطاقة منتهي.");
      return false;
    }
    clearError("cardExpiry");
    return true;
  }

  function validateCvv() {
    const digits = onlyDigits(cardCvvInput.value, 4);
    if (digits.length < 3) {
      setError("cardCvv", "CVV يجب أن يتكوّن من 3 أرقام على الأقل.");
      return false;
    }
    clearError("cardCvv");
    return true;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isNumberValid = validateCardNumber();
    const isHolderValid = validateCardHolder();
    const isExpiryValid = validateExpiry();
    const isCvvValid = validateCvv();

    if (isNumberValid && isHolderValid && isExpiryValid && isCvvValid) {
      // ⚠️ لا يوجد أي إرسال حقيقي — فقط تنبيه بصري تجريبي.
      // لا fetch، لا XHR، لا تخزين محلي بأي شكل.
      showSuccessNote();
    }
  });

  function showSuccessNote() {
    const note = document.querySelector(".form-note");
    const original = note.innerHTML;
    note.style.color = "var(--success)";
    note.textContent = "✓ تم التحقق من البيانات محليًا فقط — لا يوجد إرسال فعلي (Demo).";
    setTimeout(() => {
      note.style.color = "";
      note.innerHTML = original;
    }, 3500);
  }

  /* ------------------------------------------------------------
   * 9) تهيئة أولية للعرض عند تحميل الصفحة
   * ------------------------------------------------------------ */
  updateCardNumberDisplay();
  updateCardHolderDisplay();
  updateCardExpiryDisplay();
  updateCardCvvDisplay();
  resetTilt();
})();
