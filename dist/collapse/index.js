Component({
    externalClasses: ['f-class'],

    relations: {
        '../collapse-item/index': {
            type: 'child'
        }
    },
    properties: {
        name: String,
        accordion: Boolean
    },
    methods: {
        clickfn(e) {
            const params = e.detail;
            const allList = this.getRelationNodes('../collapse-item/index');
            allList.forEach((item) => {
                if (params.name === item.data.name) {
                    item.setData({
                        showContent: 'f-collapse-item-show-content'
                    });
                } else {
                    item.setData({
                        showContent: ''
                    });
                }
            });
        },
    }
});

