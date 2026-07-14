/* @ds-bundle: {"format":3,"namespace":"MintlifyDesignSystem_a4c1b8","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"CodeBlock","sourcePath":"components/code/CodeBlock.jsx"},{"name":"CodeInline","sourcePath":"components/code/CodeInline.jsx"},{"name":"PropertyRow","sourcePath":"components/docs/PropertyRow.jsx"},{"name":"SidebarNavItem","sourcePath":"components/docs/SidebarNavItem.jsx"},{"name":"SidebarSectionHeader","sourcePath":"components/docs/SidebarNavItem.jsx"},{"name":"TocItem","sourcePath":"components/docs/TocItem.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SearchPill","sourcePath":"components/forms/SearchPill.jsx"},{"name":"BillingToggle","sourcePath":"components/navigation/BillingToggle.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"77d53aff54a8","components/buttons/Button.jsx":"fb4f7cb0cf5a","components/buttons/IconButton.jsx":"647f958d5dcd","components/code/CodeBlock.jsx":"e9556427d963","components/code/CodeInline.jsx":"dc86a62b41b8","components/docs/PropertyRow.jsx":"3d4359b2a270","components/docs/SidebarNavItem.jsx":"26d2a1d44ad0","components/docs/TocItem.jsx":"d6e0d4b868f4","components/feedback/Badge.jsx":"b1167d031871","components/forms/Input.jsx":"d8627b598075","components/forms/SearchPill.jsx":"bda3ad08206d","components/navigation/BillingToggle.jsx":"78d0fbad67d7","components/navigation/Tabs.jsx":"0884c55f8ab4","components/surfaces/Card.jsx":"394bb7b74559","ui_kits/docs/DocsContent.jsx":"286c57bc6589","ui_kits/docs/DocsNav.jsx":"052ce0fc3b76","ui_kits/docs/DocsSidebar.jsx":"f99f72788bf0","ui_kits/docs/DocsToc.jsx":"d4ee6ee02bea","ui_kits/docs/app.jsx":"cd0d60109ee2","ui_kits/docs/kit-icons.jsx":"9652ee2daa55","ui_kits/marketing/Footer.jsx":"04bd4a148e2d","ui_kits/marketing/HomePage.jsx":"0a04be9ca621","ui_kits/marketing/MarketingNav.jsx":"c0bb29653e05","ui_kits/marketing/PricingPage.jsx":"b5c239d01e16","ui_kits/marketing/StartupsPage.jsx":"4303f43bcfac","ui_kits/marketing/app.jsx":"f9f023e5e6bd","ui_kits/marketing/kit-icons.jsx":"9652ee2daa55"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MintlifyDesignSystem_a4c1b8 = window.MintlifyDesignSystem_a4c1b8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Logo — Mintlify brand lockup. A mint leaf mark + "Mintlify" wordmark in
 * Inter Semibold. `variant="dark"` flips the wordmark to white for dark bands;
 * `mark` renders the glyph only.
 *
 * NOTE: the leaf mark is a brand-appropriate PLACEHOLDER. Drop the official
 * Mintlify logo SVG into assets/logo/ and swap the <svg> below for it.
 */
function Logo({
  variant = "light",
  mark = false,
  size = 22,
  style,
  ...props
}) {
  const wordColor = variant === "dark" ? "var(--color-on-dark)" : "var(--color-ink)";
  const Mark = /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 32 32",
    fill: "none",
    "aria-hidden": "true",
    style: {
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 3C9 7 5 12.5 5 19a11 11 0 0 0 22 0c0-2.6-.7-5-1.9-7.1-1.6 4.2-4.9 6.6-9.1 7.6 3.1-2.6 4.7-6 4.9-10.2C20.7 6.6 18.6 4.4 16 3Z",
    fill: "var(--color-brand-green)"
  }));
  if (mark) return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      ...style
    }
  }, props), Mark);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      ...style
    }
  }, props), Mark, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-semibold)",
      fontSize: `${size}px`,
      letterSpacing: "-0.5px",
      color: wordColor
    }
  }, "Mintlify"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  fontFamily: "var(--font-sans)",
  fontWeight: "var(--weight-medium)",
  lineHeight: "var(--type-button-md-line)",
  border: "1px solid transparent",
  cursor: "pointer",
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition: "background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)",
  WebkitTapHighlightColor: "transparent"
};
const SIZES = {
  sm: {
    fontSize: "13px",
    padding: "7px 14px"
  },
  md: {
    fontSize: "var(--type-button-md-size)",
    padding: "10px 20px"
  },
  lg: {
    fontSize: "15px",
    padding: "12px 24px"
  }
};
const VARIANTS = {
  primary: {
    background: "var(--color-primary)",
    color: "var(--color-on-primary)",
    borderRadius: "var(--radius-full)"
  },
  "accent-green": {
    background: "var(--color-brand-green)",
    color: "var(--color-primary)",
    borderRadius: "var(--radius-full)"
  },
  "on-dark": {
    background: "var(--color-on-dark)",
    color: "var(--color-primary)",
    borderRadius: "var(--radius-full)"
  },
  secondary: {
    background: "transparent",
    color: "var(--color-ink)",
    borderColor: "var(--color-hairline)",
    borderRadius: "var(--radius-full)"
  },
  ghost: {
    background: "transparent",
    color: "var(--color-ink)",
    borderRadius: "var(--radius-md)",
    padding: "8px 12px"
  },
  link: {
    background: "transparent",
    color: "var(--color-ink)",
    padding: "0",
    fontSize: "var(--type-body-sm-size)",
    textDecoration: "underline",
    textUnderlineOffset: "3px"
  }
};
const PRESSED = {
  primary: {
    background: "var(--color-charcoal)"
  },
  "accent-green": {
    background: "var(--color-brand-green-deep)"
  },
  "on-dark": {
    background: "#EDEDED"
  },
  secondary: {
    background: "var(--color-surface)"
  },
  ghost: {
    background: "var(--color-surface)"
  },
  link: {}
};

/**
 * Button — Mintlify's pill-shaped action. Black-pill `primary` dominates light
 * surfaces; `accent-green` carries brand-emphasis CTAs; `on-dark` inverts on
 * dark hero bands. `ghost` and `link` are squared/quiet tertiary actions.
 */
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  pressed = false,
  as = "button",
  iconLeft,
  iconRight,
  children,
  style,
  ...props
}) {
  const Tag = as;
  const isPill = variant !== "ghost" && variant !== "link";
  const sizeStyle = variant === "link" ? {} : SIZES[size];
  let composed = {
    ...BASE,
    ...sizeStyle,
    ...VARIANTS[variant],
    ...(pressed && !disabled ? PRESSED[variant] : null)
  };
  if (disabled) {
    composed = {
      ...composed,
      cursor: "not-allowed",
      ...(isPill || variant === "ghost" ? {
        background: "var(--color-hairline)",
        color: "var(--color-muted)",
        borderColor: "transparent"
      } : {
        color: "var(--color-muted)",
        textDecoration: "none"
      })
    };
  }
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...composed,
      ...style
    },
    disabled: Tag === "button" ? disabled : undefined
  }, props), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — 32×32 circular utility button (close, copy, arrow). Canvas
 * background, hairline border, ink glyph. Bumps to 44px on touch via `size`.
 */
function IconButton({
  size = 32,
  label,
  disabled = false,
  children,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: `${size}px`,
      height: `${size}px`,
      padding: 0,
      background: "var(--color-canvas)",
      color: disabled ? "var(--color-muted)" : "var(--color-ink)",
      border: "1px solid var(--color-hairline)",
      borderRadius: "var(--radius-full)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--duration-fast) var(--ease-standard)",
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/code/CodeBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A tiny, brand-flavored token highlighter — not a real parser. Pass either
   `code` (string, naive highlight) or pre-built children for full control. */
const TOKEN = {
  keyword: "#FF7B72",
  string: "#7EE787",
  comment: "var(--color-on-dark-muted)",
  fn: "#D2A8FF",
  prop: "#79C0FF",
  punct: "var(--color-on-dark-muted)"
};

/**
 * CodeBlock — syntax-highlighted container on the dark code surface. Header bar
 * carries a language label + copy button; body is Geist Mono. Pass `code` for
 * naive highlighting or `children` for full control.
 */
function CodeBlock({
  language = "tsx",
  filename,
  code = "",
  children,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--color-surface-code)",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      fontFamily: "var(--font-mono)",
      border: "1px solid var(--color-hairline-dark)",
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 16px",
      borderBottom: "1px solid var(--color-hairline-dark)",
      color: "var(--color-on-dark-muted)",
      fontSize: "var(--type-caption-size)"
    }
  }, /*#__PURE__*/React.createElement("span", null, filename || language), /*#__PURE__*/React.createElement("button", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      background: "transparent",
      color: "var(--color-on-dark-muted)",
      border: "1px solid var(--color-hairline-dark)",
      borderRadius: "var(--radius-sm)",
      padding: "4px 8px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--type-caption-size)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "9",
    width: "13",
    height: "13",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
  })), "Copy")), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: "16px",
      color: "var(--color-on-dark)",
      fontSize: "var(--type-code-md-size)",
      lineHeight: "var(--type-code-md-line)",
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("code", null, children || code)));
}

/* Exported color map so kits can hand-color tokens consistently. */
CodeBlock.tokenColors = TOKEN;
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/code/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/code/CodeInline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CodeInline — inline `<Tabs>`-style reference inside body prose. Surface
 * background, hairline border, Geist Mono, charcoal text, radius-xs.
 */
function CodeInline({
  children,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("code", _extends({
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--type-code-inline-size)",
      fontWeight: "var(--weight-medium)",
      lineHeight: "var(--type-code-inline-line)",
      color: "var(--color-charcoal)",
      background: "var(--color-surface)",
      border: "1px solid var(--color-hairline)",
      borderRadius: "var(--radius-xs)",
      padding: "2px 6px",
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { CodeInline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/code/CodeInline.jsx", error: String((e && e.message) || e) }); }

// components/docs/PropertyRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PropertyRow — API property documentation row. Property name in inline-code,
 * a type chip, optional REQUIRED badge, and a description below in steel.
 */
function PropertyRow({
  name,
  type,
  required = false,
  defaultValue,
  children,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: "16px 0",
      borderBottom: "1px solid var(--color-hairline-soft)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--type-code-inline-size)",
      fontWeight: "var(--weight-medium)",
      color: "var(--color-charcoal)",
      background: "var(--color-surface)",
      border: "1px solid var(--color-hairline)",
      borderRadius: "var(--radius-xs)",
      padding: "2px 6px"
    }
  }, name), type && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--type-code-sm-size)",
      color: "var(--color-steel)",
      background: "var(--color-surface)",
      borderRadius: "var(--radius-sm)",
      padding: "2px 6px"
    }
  }, type), required && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--type-micro-uppercase-size)",
      fontWeight: 600,
      letterSpacing: "0.5px",
      textTransform: "uppercase",
      color: "var(--color-on-dark)",
      background: "var(--color-brand-error)",
      borderRadius: "var(--radius-sm)",
      padding: "2px 6px"
    }
  }, "Required"), defaultValue != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--type-caption-size)",
      color: "var(--color-stone)"
    }
  }, "default: ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, defaultValue))), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "6px",
      fontSize: "var(--type-body-sm-size)",
      lineHeight: 1.5,
      color: "var(--color-steel)"
    }
  }, children));
}
Object.assign(__ds_scope, { PropertyRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/docs/PropertyRow.jsx", error: String((e && e.message) || e) }); }

// components/docs/SidebarNavItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SidebarNavItem — documentation left-rail link. Inactive: steel, transparent.
 * Active: surface background, ink text, medium weight, optional mint dot.
 */
function SidebarNavItem({
  active = false,
  icon,
  dot = false,
  children,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      textDecoration: "none",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--type-body-sm-size)",
      fontWeight: active ? "var(--weight-medium)" : "var(--weight-regular)",
      color: active ? "var(--color-ink)" : "var(--color-steel)",
      background: active ? "var(--color-surface)" : "transparent",
      borderRadius: "var(--radius-sm)",
      padding: "8px 16px",
      cursor: "pointer",
      transition: "background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)",
      ...style
    }
  }, props), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "6px",
      height: "6px",
      borderRadius: "var(--radius-full)",
      background: "var(--color-brand-green)",
      flex: "none"
    }
  }), icon, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children));
}

/**
 * SidebarSectionHeader — uppercase section label inside the sidebar.
 */
function SidebarSectionHeader({
  children,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--type-micro-uppercase-size)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--type-micro-uppercase-spacing)",
      textTransform: "uppercase",
      color: "var(--color-steel)",
      padding: "16px 16px 8px",
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { SidebarNavItem, SidebarSectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/docs/SidebarNavItem.jsx", error: String((e && e.message) || e) }); }

// components/docs/TocItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TocItem — right-rail table-of-contents link. Inactive: steel. Active: ink,
 * medium weight, mint left-border accent. `level` 2 indents sub-headings.
 */
function TocItem({
  active = false,
  level = 1,
  children,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    style: {
      display: "block",
      textDecoration: "none",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--type-body-sm-size)",
      fontWeight: active ? "var(--weight-medium)" : "var(--weight-regular)",
      color: active ? "var(--color-ink)" : "var(--color-steel)",
      padding: "4px 0 4px 12px",
      marginLeft: level === 2 ? "12px" : "0",
      borderLeft: active ? "2px solid var(--color-brand-green)" : "2px solid var(--color-hairline)",
      cursor: "pointer",
      transition: "color var(--duration-fast) var(--ease-standard)",
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { TocItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/docs/TocItem.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  discount: {
    background: "var(--color-brand-green)",
    color: "var(--color-primary)",
    borderRadius: "var(--radius-full)",
    padding: "2px 8px",
    fontSize: "var(--type-caption-size)",
    fontWeight: "var(--weight-semibold)"
  },
  required: {
    background: "var(--color-brand-error)",
    color: "var(--color-on-dark)",
    borderRadius: "var(--radius-sm)",
    padding: "2px 6px",
    fontSize: "var(--type-micro-uppercase-size)",
    fontWeight: "var(--weight-semibold)",
    letterSpacing: "var(--type-micro-uppercase-spacing)",
    textTransform: "uppercase"
  },
  type: {
    background: "var(--color-surface)",
    color: "var(--color-steel)",
    borderRadius: "var(--radius-sm)",
    padding: "2px 6px",
    fontSize: "var(--type-code-sm-size)",
    fontWeight: "var(--weight-regular)",
    fontFamily: "var(--font-mono)"
  },
  tag: {
    background: "rgba(55, 114, 207, 0.15)",
    color: "var(--color-brand-tag)",
    borderRadius: "var(--radius-sm)",
    padding: "2px 8px",
    fontSize: "var(--type-caption-size)",
    fontWeight: "var(--weight-semibold)"
  },
  neutral: {
    background: "var(--color-surface)",
    color: "var(--color-ink)",
    borderRadius: "var(--radius-full)",
    padding: "2px 8px",
    fontSize: "var(--type-caption-size)",
    fontWeight: "var(--weight-semibold)"
  }
};

/**
 * Badge — compact status / label chip. `discount` (mint pill), `required`
 * (red uppercase), `type` (mono signature chip), `tag` (blue docs reference),
 * `neutral` (surface pill).
 */
function Badge({
  variant = "neutral",
  children,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-sans)",
      lineHeight: 1.4,
      whiteSpace: "nowrap",
      ...VARIANTS[variant],
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — standard 40px text field. Hairline border at rest; focus switches
 * to a 2px mint border (the brand's activation signal). Error state uses a
 * red border. Pass `label` and `required` for a documented field row.
 */
function Input({
  label,
  required = false,
  error = false,
  focused = false,
  hint,
  id,
  style,
  ...props
}) {
  const fieldId = id || (label ? `in-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const borderColor = error ? "var(--color-brand-error)" : focused ? "var(--color-brand-green)" : "var(--color-hairline)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "var(--type-body-sm-size)",
      fontWeight: "var(--weight-medium)",
      color: "var(--color-ink)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--type-micro-uppercase-size)",
      fontWeight: 600,
      letterSpacing: "0.5px",
      textTransform: "uppercase",
      color: "var(--color-on-dark)",
      background: "var(--color-brand-error)",
      borderRadius: "var(--radius-sm)",
      padding: "2px 6px"
    }
  }, "Required")), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    style: {
      height: "40px",
      boxSizing: "border-box",
      background: "var(--color-canvas)",
      color: "var(--color-ink)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--type-body-sm-size)",
      border: `${error || focused ? "2px" : "1px"} solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      padding: error || focused ? "11px 15px" : "12px 16px",
      outline: "none",
      width: "100%"
    }
  }, props)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--type-caption-size)",
      color: error ? "var(--color-brand-error)" : "var(--color-steel)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SearchPill — documentation top-bar search field. Surface background, hairline
 * border, 36px tall, steel placeholder text, with optional ⌘K hint chip.
 */
function SearchPill({
  placeholder = "Search or ask...",
  shortcut = "⌘K",
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      height: "36px",
      boxSizing: "border-box",
      background: "var(--color-surface)",
      border: "1px solid var(--color-hairline)",
      borderRadius: "var(--radius-md)",
      padding: "0 10px 0 12px",
      fontFamily: "var(--font-sans)",
      color: "var(--color-steel)",
      minWidth: "240px",
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: "var(--type-body-sm-size)"
    }
  }, placeholder), shortcut && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      color: "var(--color-stone)",
      background: "var(--color-canvas)",
      border: "1px solid var(--color-hairline)",
      borderRadius: "var(--radius-sm)",
      padding: "1px 6px"
    }
  }, shortcut));
}
Object.assign(__ds_scope, { SearchPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchPill.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BillingToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BillingToggle — two-state Monthly / Annual pill. Surface track, a white
 * thumb slides to the active option; optional discount badge sits alongside.
 */
function BillingToggle({
  options = ["Monthly", "Annual"],
  value = 0,
  onChange,
  style,
  ...props
}) {
  const [internal, setInternal] = React.useState(value);
  const active = value != null ? value : internal;
  const select = i => {
    setInternal(i);
    onChange && onChange(i);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      background: "var(--color-surface)",
      borderRadius: "var(--radius-full)",
      padding: "4px",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, props), options.map((opt, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => select(i),
      style: {
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--type-body-sm-size)",
        fontWeight: "var(--weight-medium)",
        padding: "6px 16px",
        borderRadius: "var(--radius-full)",
        background: on ? "var(--color-canvas)" : "transparent",
        color: on ? "var(--color-ink)" : "var(--color-steel)",
        boxShadow: on ? "var(--shadow-1)" : "none",
        transition: "background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)"
      }
    }, opt);
  }));
}
Object.assign(__ds_scope, { BillingToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BillingToggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — two visual modes. `segmented` is the underline tab bar (docs Tabs
 * component): active tab gets ink text + a 2px ink bottom border. `pill` is
 * the rounded nav (pricing page): active pill is black with white text.
 * Self-managing; pass `defaultIndex` or control via `value` + `onChange`.
 */
function Tabs({
  items = [],
  variant = "segmented",
  defaultIndex = 0,
  value,
  onChange,
  style,
  ...props
}) {
  const [internal, setInternal] = React.useState(defaultIndex);
  const active = value != null ? value : internal;
  const select = i => {
    if (value == null) setInternal(i);
    onChange && onChange(i);
  };
  const isPill = variant === "pill";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "inline-flex",
      gap: isPill ? "8px" : "4px",
      fontFamily: "var(--font-sans)",
      borderBottom: isPill ? "none" : "1px solid var(--color-hairline)",
      ...style
    }
  }, props), items.map((label, i) => {
    const on = i === active;
    const base = {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--type-body-sm-size)",
      fontWeight: on ? "var(--weight-medium)" : "var(--weight-regular)",
      cursor: "pointer",
      border: "1px solid transparent",
      background: "transparent",
      transition: "color var(--duration-fast) var(--ease-standard)",
      whiteSpace: "nowrap"
    };
    const segmented = {
      padding: "12px 16px",
      color: on ? "var(--color-ink)" : "var(--color-steel)",
      borderBottom: on ? "2px solid var(--color-ink)" : "2px solid transparent",
      marginBottom: "-1px",
      borderRadius: 0
    };
    const pill = {
      padding: "8px 16px",
      borderRadius: "var(--radius-full)",
      color: on ? "var(--color-on-primary)" : "var(--color-steel)",
      background: on ? "var(--color-primary)" : "var(--color-canvas)",
      borderColor: on ? "transparent" : "var(--color-hairline)"
    };
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(i),
      style: {
        ...base,
        ...(isPill ? pill : segmented)
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  base: {
    background: "var(--color-canvas)",
    border: "1px solid var(--color-hairline)",
    borderRadius: "var(--radius-lg)",
    padding: "var(--space-xl)"
  },
  feature: {
    background: "var(--color-surface)",
    border: "1px solid transparent",
    borderRadius: "var(--radius-lg)",
    padding: "var(--space-xxl)"
  },
  pricing: {
    background: "var(--color-canvas)",
    border: "1px solid var(--color-hairline)",
    borderRadius: "var(--radius-lg)",
    padding: "var(--space-xxl)"
  },
  "pricing-featured": {
    background: "var(--color-canvas)",
    border: "2px solid var(--color-brand-green)",
    borderRadius: "var(--radius-lg)",
    padding: "var(--space-xxl)",
    boxShadow: "var(--shadow-4)"
  },
  testimonial: {
    background: "var(--color-testimonial-orange)",
    color: "var(--color-on-dark)",
    border: "1px solid transparent",
    borderRadius: "var(--radius-lg)",
    padding: "var(--space-section)"
  }
};

/**
 * Card — surface container. `base` (hairline-bordered, 24px), `feature`
 * (gray surface, 32px), `pricing` / `pricing-featured` (mint border + glow),
 * `testimonial` (orange, 64px). Flat by default — no shadow except featured.
 */
function Card({
  variant = "base",
  children,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-sans)",
      color: variant === "testimonial" ? "var(--color-on-dark)" : "var(--color-charcoal)",
      ...VARIANTS[variant],
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs/DocsContent.jsx
try { (() => {
const {
  Tabs,
  CodeInline,
  CodeBlock,
  PropertyRow,
  Badge,
  Button
} = window.MintlifyDesignSystem_a4c1b8;
const T = CodeBlock.tokenColors;
function TabsDemo() {
  const [i, setI] = React.useState(0);
  const panels = ["The first tab holds your installation steps.", "The second tab shows configuration options.", "The third tab covers deployment."];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--color-hairline)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px",
      borderBottom: "1px solid var(--color-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ["First tab", "Second tab", "Third tab"],
    value: i,
    onChange: setI
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px",
      fontSize: "var(--type-body-md-size)",
      color: "var(--color-charcoal)",
      lineHeight: 1.5
    }
  }, panels[i]));
}
function H({
  id,
  children
}) {
  return /*#__PURE__*/React.createElement("h2", {
    id: id,
    className: "ty-heading-3",
    style: {
      margin: "40px 0 12px",
      color: "var(--color-ink)",
      scrollMarginTop: 72
    }
  }, children);
}
function DocsContent() {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: "var(--docs-prose)",
      padding: "40px 48px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ty-micro-uppercase",
    style: {
      color: "var(--color-steel)",
      marginBottom: 8
    }
  }, "Components"), /*#__PURE__*/React.createElement("h1", {
    className: "ty-heading-2",
    style: {
      margin: "0 0 12px",
      color: "var(--color-ink)"
    }
  }, "Tabs"), /*#__PURE__*/React.createElement("p", {
    className: "ty-body-md",
    style: {
      margin: 0,
      color: "var(--color-slate)"
    }
  }, "Toggle content using the ", /*#__PURE__*/React.createElement(CodeInline, null, "<Tabs>"), " component. Each ", /*#__PURE__*/React.createElement(CodeInline, null, "<Tab>"), " renders a labeled panel; the first is open by default."), /*#__PURE__*/React.createElement(H, {
    id: "example"
  }, "Example"), /*#__PURE__*/React.createElement(TabsDemo, null), /*#__PURE__*/React.createElement(H, {
    id: "usage"
  }, "Usage"), /*#__PURE__*/React.createElement("p", {
    className: "ty-body-md",
    style: {
      margin: "0 0 16px",
      color: "var(--color-slate)"
    }
  }, "Wrap each panel in a ", /*#__PURE__*/React.createElement(CodeInline, null, "<Tab>"), " with a ", /*#__PURE__*/React.createElement(CodeInline, null, "title"), "."), /*#__PURE__*/React.createElement(CodeBlock, {
    language: "mdx"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: T.punct
    }
  }, "<"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#7EE787"
    }
  }, "Tabs"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: T.punct
    }
  }, ">"), "\n  ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: T.punct
    }
  }, "<"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#7EE787"
    }
  }, "Tab"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: T.prop
    }
  }, "title"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: T.punct
    }
  }, "="), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#A5D6FF"
    }
  }, "\"First tab\""), /*#__PURE__*/React.createElement("span", {
    style: {
      color: T.punct
    }
  }, ">"), "\n    ", "Content for the first tab.", "\n  ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: T.punct
    }
  }, "</"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#7EE787"
    }
  }, "Tab"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: T.punct
    }
  }, ">"), "\n", /*#__PURE__*/React.createElement("span", {
    style: {
      color: T.punct
    }
  }, "</"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#7EE787"
    }
  }, "Tabs"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: T.punct
    }
  }, ">")), /*#__PURE__*/React.createElement(H, {
    id: "props"
  }, "Properties"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PropertyRow, {
    name: "defaultIndex",
    type: "number",
    defaultValue: "0"
  }, "The index of the tab that should be open when the page loads."), /*#__PURE__*/React.createElement(PropertyRow, {
    name: "title",
    type: "string",
    required: true
  }, "The label shown in the tab bar. Required on every ", /*#__PURE__*/React.createElement(CodeInline, null, "<Tab>"), "."), /*#__PURE__*/React.createElement(PropertyRow, {
    name: "onChange",
    type: "(index: number) => void"
  }, "Callback fired whenever the active tab changes.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 48,
      paddingTop: 24,
      borderTop: "1px solid var(--color-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "\u2190 Steps"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Tooltip \u2192")));
}
window.DocsContent = DocsContent;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs/DocsContent.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs/DocsNav.jsx
try { (() => {
const {
  Logo,
  Button,
  SearchPill
} = window.MintlifyDesignSystem_a4c1b8;
const DOCS_LINKS = ["Documentation", "Guides", "API Reference", "Changelog"];
function DocsNav({
  current = "Documentation"
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "var(--color-canvas)",
      borderBottom: "1px solid var(--color-hairline-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "56px",
      padding: "0 24px",
      display: "flex",
      alignItems: "center",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 20
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(SearchPill, {
    style: {
      width: "100%",
      maxWidth: "440px"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "4px",
      alignItems: "center"
    }
  }, DOCS_LINKS.map(l => {
    const on = l === current;
    return /*#__PURE__*/React.createElement("a", {
      key: l,
      href: "#",
      style: {
        textDecoration: "none",
        fontSize: "var(--type-body-sm-size)",
        fontWeight: on ? 500 : 400,
        color: on ? "var(--color-ink)" : "var(--color-steel)",
        padding: "8px 10px"
      }
    }, l);
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    style: {
      marginLeft: 8
    }
  }, "Talk to us"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent-green",
    size: "sm"
  }, "Get started"))));
}
window.DocsNav = DocsNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs/DocsNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs/DocsSidebar.jsx
try { (() => {
const {
  SidebarNavItem,
  SidebarSectionHeader
} = window.MintlifyDesignSystem_a4c1b8;
const SIDEBAR = [{
  head: "Get Started",
  items: ["Introduction", "Quickstart", "Development"]
}, {
  head: "Components",
  items: ["Accordion", "Callout", "Card", "Tabs", "Steps", "Tooltip"]
}, {
  head: "Primitives",
  items: ["Frame", "Icon", "Tooltip"]
}];
function DocsSidebar({
  active = "Tabs"
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      borderRight: "1px solid var(--color-hairline-soft)",
      padding: "24px 16px",
      position: "sticky",
      top: 56,
      height: "calc(100vh - 56px)",
      overflowY: "auto"
    }
  }, SIDEBAR.map(grp => /*#__PURE__*/React.createElement("div", {
    key: grp.head,
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(SidebarSectionHeader, null, grp.head), grp.items.map(it => /*#__PURE__*/React.createElement(SidebarNavItem, {
    key: it,
    active: it === active,
    dot: it === active,
    href: "#"
  }, it)))));
}
window.DocsSidebar = DocsSidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs/DocsSidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs/DocsToc.jsx
try { (() => {
const {
  TocItem
} = window.MintlifyDesignSystem_a4c1b8;
const TOC = [{
  label: "Example",
  level: 1
}, {
  label: "Usage",
  level: 1
}, {
  label: "Properties",
  level: 1
}];
function DocsToc({
  active = "Example"
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      padding: "40px 24px",
      position: "sticky",
      top: 56,
      height: "fit-content"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ty-micro-uppercase",
    style: {
      color: "var(--color-stone)",
      marginBottom: 12
    }
  }, "On this page"), /*#__PURE__*/React.createElement("nav", null, TOC.map(t => /*#__PURE__*/React.createElement(TocItem, {
    key: t.label,
    active: t.label === active,
    level: t.level,
    href: "#"
  }, t.label))));
}
window.DocsToc = DocsToc;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs/DocsToc.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs/app.jsx
try { (() => {
function DocsApp() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(DocsNav, {
    current: "Documentation"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "var(--docs-sidebar) minmax(0, 1fr) var(--docs-toc)",
      maxWidth: "1320px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(DocsSidebar, {
    active: "Tabs"
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(DocsContent, null)), /*#__PURE__*/React.createElement(DocsToc, {
    active: "Example"
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(DocsApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs/kit-icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide-style line icons (2px stroke, round caps) used across the UI kits.
   Mirrors the open-source Lucide set — swap for lucide-react in production. */

function Svg({
  size = 18,
  children,
  style,
  ...p
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    "aria-hidden": "true"
  }, p), children);
}
const Icon = {
  check: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })),
  arrowRight: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  })),
  arrowUpRight: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("line", {
    x1: "7",
    y1: "17",
    x2: "17",
    y2: "7"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 7 17 7 17 17"
  })),
  search: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  })),
  copy: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "9",
    width: "13",
    height: "13",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
  })),
  chevronDown: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })),
  chevronRight: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  })),
  book: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
  })),
  zap: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
  })),
  users: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 21v-2a4 4 0 0 0-3-3.87"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75"
  })),
  gift: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("polyline", {
    points: "20 12 20 22 4 22 4 12"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "22",
    x2: "12",
    y2: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
  })),
  lifeBuoy: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4.93",
    y1: "4.93",
    x2: "9.17",
    y2: "9.17"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "14.83",
    y1: "14.83",
    x2: "19.07",
    y2: "19.07"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "14.83",
    y1: "9.17",
    x2: "19.07",
    y2: "4.93"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4.93",
    y1: "19.07",
    x2: "9.17",
    y2: "14.83"
  })),
  fileText: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "14 2 14 8 20 8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "13",
    x2: "8",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "17",
    x2: "8",
    y2: "17"
  })),
  layout: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "9",
    x2: "21",
    y2: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "21",
    x2: "9",
    y2: "9"
  })),
  star: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
  }))
};
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs/kit-icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Footer.jsx
try { (() => {
const {
  Logo
} = window.MintlifyDesignSystem_a4c1b8;
const FOOTER_COLS = [{
  head: "Explore",
  links: ["Documentation", "Changelog", "Customers", "Pricing", "Enterprise"]
}, {
  head: "Resources",
  links: ["Blog", "Guides", "Community", "Status", "Templates"]
}, {
  head: "Company",
  links: ["About", "Careers", "Startups", "Contact", "Press"]
}, {
  head: "Legal",
  links: ["Privacy", "Terms", "Security", "DPA", "Cookies"]
}];
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--color-hairline)",
      background: "var(--color-canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-section) var(--container-gutter)",
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(4, 1fr)",
      gap: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    size: 22
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "16px",
      maxWidth: "220px",
      color: "var(--color-steel)",
      fontSize: "var(--type-body-sm-size)",
      lineHeight: 1.5
    }
  }, "The intelligent knowledge platform for the modern documentation stack.")), FOOTER_COLS.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.head
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--type-body-sm-size)",
      fontWeight: "var(--weight-medium)",
      color: "var(--color-ink)",
      marginBottom: "14px"
    }
  }, col.head), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      textDecoration: "none",
      fontSize: "var(--type-body-sm-size)",
      color: "var(--color-steel)"
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--color-hairline-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "20px var(--container-gutter)",
      display: "flex",
      justifyContent: "space-between",
      color: "var(--color-stone)",
      fontSize: "var(--type-caption-size)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Mintlify, Inc."), /*#__PURE__*/React.createElement("span", null, "Made with care for developers."))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/HomePage.jsx
try { (() => {
const {
  Button,
  Card
} = window.MintlifyDesignSystem_a4c1b8;
const LOGOS = ["Anthropic", "Cognition", "Perplexity", "Vercel", "Lovable", "Cursor"];
function HeroMockup() {
  /* Code-editor / docs preview framed in the hero — the signature mockup. */
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--color-hairline-soft)",
      boxShadow: "var(--shadow-3)",
      overflow: "hidden",
      maxWidth: "900px",
      margin: "0 auto",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "12px 16px",
      borderBottom: "1px solid var(--color-hairline-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: 99,
      background: "#FF5F57"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: 99,
      background: "#FEBC2E"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: 99,
      background: "#28C840"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 12,
      fontSize: 12,
      color: "var(--color-stone)",
      fontFamily: "var(--font-mono)"
    }
  }, "docs.acme.com/quickstart")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "180px 1fr",
      minHeight: "240px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: "1px solid var(--color-hairline-soft)",
      padding: "16px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: 0.5,
      textTransform: "uppercase",
      color: "var(--color-steel)",
      padding: "8px 8px 4px"
    }
  }, "Get Started"), ["Introduction", "Quickstart", "Development"].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 13,
      color: i === 1 ? "var(--color-ink)" : "var(--color-steel)",
      fontWeight: i === 1 ? 500 : 400,
      background: i === 1 ? "var(--color-surface)" : "transparent",
      borderRadius: 6,
      padding: "7px 8px"
    }
  }, i === 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 99,
      background: "var(--color-brand-green)"
    }
  }), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      color: "var(--color-ink)",
      letterSpacing: "-0.4px"
    }
  }, "Quickstart"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--color-steel)",
      marginTop: 6,
      lineHeight: 1.5
    }
  }, "Start building modern documentation in under five minutes."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      background: "var(--color-surface-code)",
      borderRadius: 8,
      overflow: "hidden",
      fontFamily: "var(--font-mono)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 14px",
      borderBottom: "1px solid var(--color-hairline-dark)",
      color: "var(--color-on-dark-muted)",
      fontSize: 12
    }
  }, "Terminal"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px",
      color: "var(--color-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#7EE787"
    }
  }, "npm"), " i -g mint", "\n", /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#7EE787"
    }
  }, "mint"), " dev"))))));
}
function HomePage({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "linear-gradient(180deg, var(--color-hero-sky-from) 0%, var(--color-hero-sky-to) 62%, var(--color-canvas) 100%)",
      padding: "var(--space-hero) var(--container-gutter) var(--space-section-lg)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "880px",
      margin: "0 auto 40px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "ty-hero-display",
    style: {
      margin: 0,
      color: "var(--color-ink)"
    }
  }, "The intelligent", /*#__PURE__*/React.createElement("br", null), "Knowledge Platform"), /*#__PURE__*/React.createElement("p", {
    className: "ty-subtitle",
    style: {
      margin: "20px auto 0",
      maxWidth: "560px",
      color: "var(--color-slate)"
    }
  }, "Meet the modern standard for documentation. Beautiful out of the box, easy to maintain, and optimized for humans and AI agents alike."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      justifyContent: "center",
      marginTop: "32px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent-green",
    size: "lg"
  }, "Get started"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Talk to us"))), /*#__PURE__*/React.createElement(HeroMockup, null)), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--container-gutter) var(--space-section-lg)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      color: "var(--color-steel)",
      fontSize: "var(--type-body-sm-size)",
      marginBottom: "28px"
    }
  }, "Trusted by the world's best engineering teams"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: "16px",
      alignItems: "center"
    }
  }, LOGOS.map(l => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: "center",
      color: "var(--color-steel)",
      fontSize: "18px",
      fontWeight: 600,
      letterSpacing: "-0.3px",
      padding: "20px"
    }
  }, l)))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--container-gutter) var(--space-section-lg)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ty-display-lg",
    style: {
      margin: "0 0 12px",
      color: "var(--color-ink)",
      maxWidth: "640px"
    }
  }, "Built for the intelligence age"), /*#__PURE__*/React.createElement("p", {
    className: "ty-subtitle",
    style: {
      margin: "0 0 40px",
      color: "var(--color-slate)",
      maxWidth: "560px"
    }
  }, "Everything you need to ship documentation your users and their agents will love."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px"
    }
  }, [{
    t: "Web editor",
    d: "Write and preview docs in a polished WYSIWYG editor, or bring your own IDE."
  }, {
    t: "AI-native",
    d: "Ship an assistant trained on your docs, plus an MCP server, out of the box."
  }, {
    t: "Analytics",
    d: "Understand what readers search for and where they get stuck."
  }].map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.t,
    variant: "feature"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: "var(--color-brand-green-soft)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--color-brand-green-deep)",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon.zap, {
    size: 20
  })), /*#__PURE__*/React.createElement("h3", {
    className: "ty-heading-5",
    style: {
      margin: "0 0 6px",
      color: "var(--color-ink)"
    }
  }, f.t), /*#__PURE__*/React.createElement("p", {
    className: "ty-body-sm",
    style: {
      margin: 0,
      color: "var(--color-steel)"
    }
  }, f.d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--container-gutter) var(--space-section-lg)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "testimonial"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 200px",
      gap: "48px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("blockquote", {
    className: "ty-heading-3",
    style: {
      margin: 0,
      color: "var(--color-on-dark)",
      fontWeight: 600
    }
  }, "\"Every YC batch we consistently see the top performing startups use Mintlify to build their docs.\""), /*#__PURE__*/React.createElement("div", {
    className: "ty-body-sm-medium",
    style: {
      marginTop: "24px",
      color: "var(--color-on-dark)"
    }
  }, "Michael Truell \xB7 Co-founder, Cursor")), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "1",
      borderRadius: "var(--radius-md)",
      background: "rgba(255,255,255,0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "rgba(255,255,255,0.8)",
      fontSize: 13,
      textAlign: "center",
      padding: 12
    }
  }, "Portrait", /*#__PURE__*/React.createElement("br", null), "placeholder")))));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/MarketingNav.jsx
try { (() => {
const {
  Logo,
  Button
} = window.MintlifyDesignSystem_a4c1b8;
const NAV_LINKS = ["Solutions", "Pricing", "Customers", "Documentation", "Changelog"];
function MarketingNav({
  current = "Pricing",
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "rgba(255,255,255,0.85)",
      backdropFilter: "saturate(180%) blur(12px)",
      WebkitBackdropFilter: "saturate(180%) blur(12px)",
      borderBottom: "1px solid var(--color-hairline-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      height: "64px",
      padding: "0 var(--container-gutter)",
      display: "flex",
      alignItems: "center",
      gap: "32px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate("Home");
    },
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 22
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "4px",
      flex: 1
    }
  }, NAV_LINKS.map(l => {
    const on = l === current;
    return /*#__PURE__*/React.createElement("a", {
      key: l,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(l);
      },
      style: {
        textDecoration: "none",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--type-body-sm-size)",
        fontWeight: on ? "var(--weight-medium)" : "var(--weight-regular)",
        color: on ? "var(--color-ink)" : "var(--color-steel)",
        padding: "8px 12px",
        borderRadius: "var(--radius-md)"
      }
    }, l);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link"
  }, "Talk to sales"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Get Started"))));
}
window.MarketingNav = MarketingNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/MarketingNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/PricingPage.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Tabs,
  BillingToggle
} = window.MintlifyDesignSystem_a4c1b8;
function PriceFeature({
  children
}) {
  return /*#__PURE__*/React.createElement("li", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      fontSize: "var(--type-body-sm-size)",
      color: "var(--color-slate)",
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-brand-green-deep)",
      flex: "none",
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(Icon.check, {
    size: 16
  })), /*#__PURE__*/React.createElement("span", null, children));
}
const TIERS = [{
  name: "Free",
  price: "$0",
  note: "For personal projects",
  cta: "Get started",
  variant: "secondary",
  feats: ["1 editor", "Community support", "Built-in analytics", "Custom domain"]
}, {
  name: "Lift Off",
  price: "$150",
  note: "Per month, billed annually",
  cta: "Get started",
  variant: "accent-green",
  featured: true,
  feats: ["Up to 5 editors", "Priority support", "Custom subdomains", "AI assistant", "Advanced analytics"]
}, {
  name: "Custom",
  price: "Let's talk",
  note: "For larger organizations",
  cta: "Talk to sales",
  variant: "primary",
  feats: ["Unlimited editors", "SSO & SAML", "SLA & dedicated support", "On-prem options"]
}];
const COMPARE = [{
  section: "Platform",
  rows: [["Editors", "1", "5", "Unlimited"], ["Custom domain", true, true, true], ["AI assistant", false, true, true], ["MCP server", false, true, true]]
}, {
  section: "Support",
  rows: [["Community", true, true, true], ["Priority support", false, true, true], ["Dedicated manager", false, false, true], ["SLA", false, false, true]]
}];
const FAQS = [{
  q: "Can I change plans later?",
  a: "Yes — upgrade or downgrade at any time. Changes are prorated to your billing cycle."
}, {
  q: "Do you offer startup discounts?",
  a: "We do. Eligible startups get discounted credits through the Mintlify startup program."
}, {
  q: "What counts as an editor?",
  a: "An editor is anyone who can write or publish changes to your documentation."
}];
function Cell({
  v
}) {
  if (v === true) return /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-brand-green-deep)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Icon.check, {
    size: 16
  }));
  if (v === false) return /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-muted)"
    }
  }, "\u2014");
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-ink)",
      fontSize: "var(--type-body-sm-size)"
    }
  }, v);
}
function PricingPage() {
  const [billing, setBilling] = React.useState(1);
  const [openFaq, setOpenFaq] = React.useState(0);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-section-lg) var(--container-gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    items: ["Pricing", "Roadmap"]
  })), /*#__PURE__*/React.createElement("h1", {
    className: "ty-heading-1",
    style: {
      textAlign: "center",
      margin: "0 0 16px",
      color: "var(--color-ink)"
    }
  }, "Pricing on your terms"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 12,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(BillingToggle, {
    options: ["Monthly", "Annual"],
    value: billing,
    onChange: setBilling
  }), /*#__PURE__*/React.createElement(Badge, {
    variant: "discount"
  }, "Save 20%")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20,
      alignItems: "start"
    }
  }, TIERS.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.name,
    variant: t.featured ? "pricing-featured" : "pricing"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "ty-heading-3",
    style: {
      margin: 0,
      color: "var(--color-ink)"
    }
  }, t.name), t.featured && /*#__PURE__*/React.createElement(Badge, {
    variant: "discount"
  }, "Featured")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      margin: "18px 0 4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ty-display-lg",
    style: {
      fontSize: 48,
      color: "var(--color-ink)"
    }
  }, t.price)), /*#__PURE__*/React.createElement("p", {
    className: "ty-caption",
    style: {
      margin: "0 0 20px",
      color: "var(--color-steel)"
    }
  }, t.note), /*#__PURE__*/React.createElement(Button, {
    variant: t.variant,
    style: {
      width: "100%",
      justifyContent: "center"
    }
  }, t.cta), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: "24px 0 0",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, t.feats.map(f => /*#__PURE__*/React.createElement(PriceFeature, {
    key: f
  }, f)))))), /*#__PURE__*/React.createElement("h2", {
    className: "ty-heading-2",
    style: {
      margin: "var(--space-section-lg) 0 24px",
      color: "var(--color-ink)"
    }
  }, "Compare plans"), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--color-hairline)",
      borderRadius: "var(--radius-md)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr",
      padding: "16px 20px",
      background: "var(--color-surface-soft)",
      borderBottom: "1px solid var(--color-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", null), ["Free", "Lift Off", "Custom"].map(h => /*#__PURE__*/React.createElement("span", {
    key: h,
    className: "ty-body-sm-medium",
    style: {
      color: "var(--color-ink)"
    }
  }, h))), COMPARE.map(grp => /*#__PURE__*/React.createElement(React.Fragment, {
    key: grp.section
  }, /*#__PURE__*/React.createElement("div", {
    className: "ty-micro-uppercase",
    style: {
      padding: "14px 20px 8px",
      color: "var(--color-steel)",
      background: "var(--color-canvas)"
    }
  }, grp.section), grp.rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr",
      padding: "12px 20px",
      borderBottom: "1px solid var(--color-hairline-soft)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ty-body-sm",
    style: {
      color: "var(--color-slate)"
    }
  }, r[0]), /*#__PURE__*/React.createElement(Cell, {
    v: r[1]
  }), /*#__PURE__*/React.createElement(Cell, {
    v: r[2]
  }), /*#__PURE__*/React.createElement(Cell, {
    v: r[3]
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16,
      marginTop: "var(--space-section)"
    }
  }, [{
    i: "book",
    t: "Quickstart guide",
    d: "Go live in five minutes."
  }, {
    i: "fileText",
    t: "Technical writing",
    d: "Craft docs that convert."
  }, {
    i: "users",
    t: "Founder",
    d: "Chat with our founders."
  }, {
    i: "lifeBuoy",
    t: "Sales",
    d: "Talk through your needs."
  }].map(c => {
    const Glyph = Icon[c.i];
    return /*#__PURE__*/React.createElement(Card, {
      key: c.t,
      variant: "base"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--color-ink)"
      }
    }, /*#__PURE__*/React.createElement(Glyph, {
      size: 20
    })), /*#__PURE__*/React.createElement("h4", {
      className: "ty-heading-5",
      style: {
        margin: "12px 0 4px",
        color: "var(--color-ink)"
      }
    }, c.t), /*#__PURE__*/React.createElement("p", {
      className: "ty-body-sm",
      style: {
        margin: 0,
        color: "var(--color-steel)"
      }
    }, c.d));
  })), /*#__PURE__*/React.createElement("h2", {
    className: "ty-heading-2",
    style: {
      margin: "var(--space-section-lg) 0 24px",
      color: "var(--color-ink)"
    }
  }, "Frequently asked questions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      maxWidth: 760
    }
  }, FAQS.map((f, i) => {
    const open = i === openFaq;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: "var(--color-canvas)",
        border: "1px solid var(--color-hairline-soft)",
        borderRadius: "var(--radius-md)",
        padding: "var(--space-xl)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpenFaq(open ? -1 : i),
      style: {
        all: "unset",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ty-heading-5",
      style: {
        color: "var(--color-ink)"
      }
    }, f.q), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--color-steel)",
        transform: open ? "rotate(180deg)" : "none",
        transition: "transform var(--duration-base) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement(Icon.chevronDown, {
      size: 18
    }))), open && /*#__PURE__*/React.createElement("p", {
      className: "ty-body-md",
      style: {
        margin: "12px 0 0",
        color: "var(--color-steel)"
      }
    }, f.a));
  })));
}
window.PricingPage = PricingPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/PricingPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/StartupsPage.jsx
try { (() => {
const {
  Button,
  Card
} = window.MintlifyDesignSystem_a4c1b8;
const PERKS = [{
  i: "gift",
  t: "Discounts and credits",
  d: "Generous credits toward any paid plan while you grow."
}, {
  i: "lifeBuoy",
  t: "Priority support",
  d: "A direct line to our team for fast answers."
}, {
  i: "zap",
  t: "Startup pack",
  d: "Templates, components, and best-practice playbooks."
}, {
  i: "users",
  t: "Founder community",
  d: "Join a network of founders shipping great docs."
}];
const QUOTES = [{
  q: "Mintlify got our API docs live the same week we launched.",
  n: "Dev Rel Lead, Seed-stage startup"
}, {
  q: "The AI assistant cut our support tickets dramatically.",
  n: "Founder, Series A startup"
}];
function StartupsPage() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "linear-gradient(135deg, var(--color-hero-dark-from) 0%, var(--color-hero-dark-to) 120%)",
      color: "var(--color-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-hero) var(--container-gutter)",
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ty-micro-uppercase",
    style: {
      color: "var(--color-on-dark-muted)",
      marginBottom: 16
    }
  }, "Mintlify for Startups"), /*#__PURE__*/React.createElement("h1", {
    className: "ty-hero-display",
    style: {
      margin: 0,
      fontSize: 64
    }
  }, "Apply to the", /*#__PURE__*/React.createElement("br", null), "startup program"), /*#__PURE__*/React.createElement("p", {
    className: "ty-subtitle",
    style: {
      margin: "20px 0 32px",
      color: "var(--color-on-dark-muted)",
      maxWidth: 480
    }
  }, "Credits, priority support, and a founder community to help you ship world-class docs from day one."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark",
    size: "lg"
  }, "Get started"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    style: {
      color: "var(--color-on-dark)"
    }
  }, "View eligibility"))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4/3",
      borderRadius: "var(--radius-xl)",
      background: "radial-gradient(120% 100% at 70% 20%, rgba(255,255,255,0.25), rgba(255,255,255,0.02))",
      border: "1px solid rgba(255,255,255,0.18)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--color-on-dark-muted)",
      fontSize: 13,
      textAlign: "center",
      padding: 16
    }
  }, "Rocket-launch illustration", /*#__PURE__*/React.createElement("br", null), "placeholder"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-section-lg) var(--container-gutter)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ty-heading-2",
    style: {
      margin: "0 0 32px",
      color: "var(--color-ink)"
    }
  }, "What you get"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20
    }
  }, PERKS.map(p => {
    const Glyph = Icon[p.i];
    return /*#__PURE__*/React.createElement(Card, {
      key: p.t,
      variant: "base"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 10,
        background: "var(--color-brand-green-soft)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--color-brand-green-deep)",
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Glyph, {
      size: 20
    })), /*#__PURE__*/React.createElement("h3", {
      className: "ty-heading-5",
      style: {
        margin: "0 0 6px",
        color: "var(--color-ink)"
      }
    }, p.t), /*#__PURE__*/React.createElement("p", {
      className: "ty-body-sm",
      style: {
        margin: 0,
        color: "var(--color-steel)"
      }
    }, p.d));
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--container-gutter) var(--space-section-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20
    }
  }, QUOTES.map(qt => /*#__PURE__*/React.createElement(Card, {
    key: qt.n,
    variant: "base",
    style: {
      padding: "var(--space-xxl)"
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    className: "ty-heading-5",
    style: {
      margin: 0,
      color: "var(--color-ink)",
      fontWeight: 600
    }
  }, "\"", qt.q, "\""), /*#__PURE__*/React.createElement("div", {
    className: "ty-body-sm-medium",
    style: {
      marginTop: 16,
      color: "var(--color-steel)"
    }
  }, qt.n))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--container-gutter) var(--space-section-lg)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "feature",
    style: {
      padding: "var(--space-section)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ty-heading-2",
    style: {
      margin: "0 0 12px",
      color: "var(--color-ink)"
    }
  }, "Ready to launch?"), /*#__PURE__*/React.createElement("p", {
    className: "ty-subtitle",
    style: {
      margin: "0 0 28px",
      color: "var(--color-slate)"
    }
  }, "Applications take less than five minutes."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent-green",
    size: "lg"
  }, "Apply now"))));
}
window.StartupsPage = StartupsPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/StartupsPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/app.jsx
try { (() => {
const {
  useState
} = React;
function PromoBanner() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas-dark)",
      color: "var(--color-on-dark)",
      textAlign: "center",
      padding: "10px 16px",
      fontSize: "var(--type-body-sm-size)",
      fontWeight: "var(--weight-medium)"
    }
  }, "Mintlify raises Series A to build the intelligent knowledge platform \u2192");
}
function App() {
  const [page, setPage] = useState("Home");
  const handleNav = label => {
    if (label === "Pricing") setPage("Pricing");else if (label === "Customers") setPage("Startups");else setPage("Home");
    window.scrollTo({
      top: 0
    });
  };
  const current = page === "Pricing" ? "Pricing" : page === "Startups" ? "Customers" : "Solutions";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(PromoBanner, null), /*#__PURE__*/React.createElement(MarketingNav, {
    current: current,
    onNavigate: handleNav
  }), page === "Home" && /*#__PURE__*/React.createElement(HomePage, {
    onNavigate: handleNav
  }), page === "Pricing" && /*#__PURE__*/React.createElement(PricingPage, null), page === "Startups" && /*#__PURE__*/React.createElement(StartupsPage, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/kit-icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide-style line icons (2px stroke, round caps) used across the UI kits.
   Mirrors the open-source Lucide set — swap for lucide-react in production. */

function Svg({
  size = 18,
  children,
  style,
  ...p
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    "aria-hidden": "true"
  }, p), children);
}
const Icon = {
  check: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })),
  arrowRight: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  })),
  arrowUpRight: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("line", {
    x1: "7",
    y1: "17",
    x2: "17",
    y2: "7"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 7 17 7 17 17"
  })),
  search: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  })),
  copy: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "9",
    width: "13",
    height: "13",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
  })),
  chevronDown: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })),
  chevronRight: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  })),
  book: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
  })),
  zap: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
  })),
  users: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 21v-2a4 4 0 0 0-3-3.87"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75"
  })),
  gift: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("polyline", {
    points: "20 12 20 22 4 22 4 12"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "22",
    x2: "12",
    y2: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
  })),
  lifeBuoy: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4.93",
    y1: "4.93",
    x2: "9.17",
    y2: "9.17"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "14.83",
    y1: "14.83",
    x2: "19.07",
    y2: "19.07"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "14.83",
    y1: "9.17",
    x2: "19.07",
    y2: "4.93"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4.93",
    y1: "19.07",
    x2: "9.17",
    y2: "14.83"
  })),
  fileText: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "14 2 14 8 20 8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "13",
    x2: "8",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "17",
    x2: "8",
    y2: "17"
  })),
  layout: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "9",
    x2: "21",
    y2: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "21",
    x2: "9",
    y2: "9"
  })),
  star: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
  }))
};
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/kit-icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.CodeInline = __ds_scope.CodeInline;

__ds_ns.PropertyRow = __ds_scope.PropertyRow;

__ds_ns.SidebarNavItem = __ds_scope.SidebarNavItem;

__ds_ns.SidebarSectionHeader = __ds_scope.SidebarSectionHeader;

__ds_ns.TocItem = __ds_scope.TocItem;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SearchPill = __ds_scope.SearchPill;

__ds_ns.BillingToggle = __ds_scope.BillingToggle;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

})();
