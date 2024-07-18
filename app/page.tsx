"use client"
import AlbumCard from "@/components/AlbumCard";
import { GET_ALBUMS } from "@/graphql/queries/getAlbums";
import { GetAlbumsData, TAlbum } from "@/types";
import { useQuery } from "@apollo/client";


export default function Home() {
  const { loading, data } = useQuery<GetAlbumsData>(GET_ALBUMS, {
    variables: {
      albumOptions: { paginate: { page: 1, limit: 10 } },
      photoOptions: { paginate: { page: 1, limit: 10 } },
    },
  });

  if (loading) {
    return <p className="text-red-400 font-extrabold text-2xl text-center">Loading....</p>;
  }

  console.log(data?.albums.data);

  return (
    <main className="max-w-7xl mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4">
        {
          data?.albums?.data.map((album: TAlbum) => (
            <AlbumCard key={album?.id} album={album} />
          ))
        }
      </div>
    </main>
  );
}


// {data?.albums?.data.map((album) => (
//   <div key={album.id} className="bg-white shadow-md p-4">
//     <div>
//       <div>{album.title}</div>
//       <h3 className="font-bold text-lg">Artist: {album.user.name}</h3>
//       <div className="grid grid-cols-2 gap-2">
//         {album.photos.data.map((photo) => (
//           <div key={photo.id} className="bg-gray-200 p-2">
//             {/* <Image src={photo.thumbnailUrl} alt={photo.title} width={150} height={150} /> */}
//             <img src={photo.url} alt={photo.title} width={150} height={150} />
//             <p>{photo.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// ))}
