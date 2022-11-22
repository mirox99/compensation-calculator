export const state = {
    _content: {
        mainTitle: 'Quam Tristique Condimentum',
        description: '<span>Duis mollis, est non commodo luctus, nisi erat porttitor ligula,' +
            ' eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis ' +
            'parturient montes, nascetur ridiculus mus. <a>Curabitur blandit</a> tempus porttitor.' +
            ' Integer posuere erat a ante venenatis dapibus posuere velit aliquet. ' +
            'Vestibulum id ligula porta felis euismod semper.</span>  ',

    },
    _compensationListData: {
        title: 'Fringilla Euismod Adipiscing Ipsum',
        description: '<span>Cum sociis natoque penatibus et magnis dis parturient montes,' +
            ' nascetur ridiculus mus. Maecenas ' +
            'faucibus mollis interdum. ' +
            'Aenean lacinia bibendum nulla sed.</span>',
        image: require('@/assets/images/compensation.png'),
        list: [
            {
                title: 'Tellus Ullamcorper Inceptos',
            },
            {
                title: 'Magna Condimentum',
                childrenList: [
                    {
                        title: 'Mattis Tristique',
                    },
                    {
                        title: 'Pharetra Pellentesque Dapibus',
                    },
                ]
            },
            {
                title: 'Aenean Inceptos',
            },
            {
                title: 'Parturient Bibendum',
            },
        ]
    }
}