Component({
    externalClasses: ['f-class', 'f-class-mask', 'f-class-header'],

    options: {
        multipleSlots: true
    },

    properties: {
        visible: {
            type: Boolean,
            value: false
        },
        maskClosable: {
            type: Boolean,
            value: true
        },
        showCancel: {
            type: Boolean,
            value: false
        },
        cancelText: {
            type: String,
            value: '取消'
        },
        actions: {
            type: Array,
            value: []
        }
    },

    methods: {
        handleClickMask () {
            if (!this.data.maskClosable) return;
            this.handleClickCancel();
        },

        handleClickItem ({ currentTarget = {} }) {
            const dataset = currentTarget.dataset || {};
            const { index } = dataset;
            this.triggerEvent('click', { index });
        },

        handleClickCancel () {
            this.triggerEvent('cancel');
        }
    }
});
