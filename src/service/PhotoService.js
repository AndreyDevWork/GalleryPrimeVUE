export const PhotoService = {
        getData() {
            return [
                {
                    itemImageSrc: 'https://baldezh.top/uploads/posts/2021-04/1618702450_17-funart_pro-p-neboskrebi-nyu-yorka-krasivie-mesta-foto-17.jpg',
                },                {
                    itemImageSrc: 'https://u-stena.ru/upload/iblock/ce4/ce458cc6ef89bcfba87ab0bf81f22aa8.jpg',
                },
                {
                    itemImageSrc: 'https://baldezh.top/uploads/posts/2021-04/thumbs/1618702453_3-funart_pro-p-neboskrebi-nyu-yorka-krasivie-mesta-foto-3.jpg',
                },
                {
                    itemImageSrc: 'https://baldezh.top/uploads/posts/2021-04/thumbs/1618702388_25-funart_pro-p-neboskrebi-nyu-yorka-krasivie-mesta-foto-25.jpg',
                },
                {
                    itemImageSrc: 'https://baldezh.top/uploads/posts/2021-04/thumbs/1618702401_35-funart_pro-p-neboskrebi-nyu-yorka-krasivie-mesta-foto-35.jpg',
                },
                {
                    itemImageSrc: 'https://baldezh.top/uploads/posts/2021-04/thumbs/1618702411_49-funart_pro-p-neboskrebi-nyu-yorka-krasivie-mesta-foto-53.jpg',
                },
                {
                    itemImageSrc: 'https://baldezh.top/uploads/posts/2021-04/thumbs/1618702455_54-funart_pro-p-neboskrebi-nyu-yorka-krasivie-mesta-foto-58.jpg',
                },
                {
                    itemImageSrc: 'https://baldezh.top/uploads/posts/2021-04/thumbs/1618702488_58-funart_pro-p-neboskrebi-nyu-yorka-krasivie-mesta-foto-62.jpg',
                },

            ];
        },

        getImages() {
            return Promise.resolve(this.getData());
        }
    };

    