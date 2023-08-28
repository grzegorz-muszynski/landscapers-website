const masonry = new Macy({
    container: '.gallery__masonry',
    mobileFirst: true,
    trueOrder: true,
    columns: 1,
    breakAt: {
        350: 2,
        576: 3,
    },
    margin: {
        x: 20,
        y: 20,
    },
})