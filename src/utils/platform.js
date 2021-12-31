export const isMobile = () => {
    // if (document.body.clientWidth<800){return true}
    let info = navigator.userAgent;
    let agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod", "iPad"];
    for(let i = 0; i < agents.length; i++){
        if(info.indexOf(agents[i]) >= 0) return true;
    }
    return false;
}

// export const isChrome = () => /Chrome/.test(navigator.userAgent);
export const isChrome = () => false;
