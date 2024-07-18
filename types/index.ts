export type TAlbum = {
    id: string;
    title: string;
    user: {
        id: string;
        name: string;
        username: string;
        email: string;
    };
    photos: {
        data: {
            id: string;
            title: string;
            url: string;
            thumbnailUrl: string;
        }[];
    };
};

export type GetAlbumsData = {
    albums: {
        data: TAlbum[]
    }
}
