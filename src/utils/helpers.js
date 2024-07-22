export const ProdscreenWidth = () => {
    if (window.innerWidth < 491) {
        return 1;
    } else if (window.innerWidth < 768) {
        return 2;
    } else if (window.innerWidth < 991) {
        return 3;
    }
    else{ 
        return 5
    }
}

export const ScreenWidth = () => {
    if (window.innerWidth < 491) {
        return 1;
    } else if (window.innerWidth < 768) {
        return 2;
    } else if (window.innerWidth < 991) {
        return 3;
    }
    else{ 
        return 4
    }
}

export const TestScreenWidth = () => {
    if (window.innerWidth < 491) {
        return 1;
    } else if (window.innerWidth < 768) {
        return 2;
    } else if (window.innerWidth < 991) {
        return 3;
    }
    else{ 
        return 3
    }
}

