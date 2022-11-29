export const isMobile = () => {
  if (document.body.clientWidth <= 750) return true;
  const info = navigator.userAgent;
  const agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPod', 'iPad'];
  for (let i = 0; i < agents.length; i += 1) {
    if (info.indexOf(agents[i]) >= 0) return true;
  }
  return false;
};

// export const isChrome = () => /Chrome/.test(navigator.userAgent);
export const isChrome = () => false;
