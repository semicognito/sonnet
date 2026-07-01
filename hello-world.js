(function() {
  var R = window.__React;
  var e = R.createElement;
  var useState = R.useState;

  function TestPanel() {
    var _s = useState(0);
    var count = _s[0];
    var setCount = _s[1];

    return e("div", {
      style: {
        minHeight: "100vh",
        background: "#15120e",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        fontFamily: 'ui-monospace, "SF Mono", "Cascadia Code", Consolas, monospace',
        color: "#d97757"
      }
    },
      e("div", { style: { fontSize: 11, letterSpacing: 3, opacity: 0.5 } }, "TOGGLES"),
      e("div", { style: { fontSize: 20, letterSpacing: 2 } }, "TEST PANEL"),
      e("div", {
        style: { fontSize: 13, color: "oklch(0.55 0.01 65)", maxWidth: 360, textAlign: "center", lineHeight: 1.6 }
      }, "Delivered via CDN. No MCP. No sub-Claude. Direct fetch."),
      e("div", { style: { fontSize: 48, margin: "16px 0" } }, count),
      e("button", {
        onClick: function() { setCount(function(c) { return c + 1; }); },
        style: {
          background: "none",
          border: "1px solid #d97757",
          color: "#d97757",
          padding: "8px 24px",
          fontFamily: "inherit",
          fontSize: 11,
          letterSpacing: 2,
          cursor: "pointer",
          borderRadius: 4
        }
      }, "INCREMENT")
    );
  }

  return TestPanel;
})()
