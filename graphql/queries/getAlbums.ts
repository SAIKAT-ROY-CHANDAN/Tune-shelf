import { gql } from "@apollo/client";

export const GET_ALBUMS = gql`
  query GetAlbums($albumOptions: PageQueryOptions, $photoOptions: PageQueryOptions) {
    albums(options: $albumOptions) {
      data {
        id
        title
        user {
          id
          name
          username
          email
        }
        photos(options: $photoOptions) {
          data {
            id
            title
            url
            thumbnailUrl
          }
        }
      }
    }
  }
`;

