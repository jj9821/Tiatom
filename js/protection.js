/**
 * ============================================================================
 * 🛡️ CONTENT INSPECTION CONTROLLER
 * ============================================================================
 * Content inspection, DevTools shortcuts, text selection, and context menus
 * are enabled.
 * ============================================================================
 */

(function initContentProtection() {
  // Safe no-op methods preserved for compatibility
  window.showProtectionAlert = function() {};
  window.closeProtectionAlert = function() {
    const el = document.getElementById('protection-alert-modal');
    if (el) {
      el.classList.remove('is-active');
      el.setAttribute('aria-hidden', 'true');
    }
  };
})();