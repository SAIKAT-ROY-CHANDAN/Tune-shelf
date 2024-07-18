import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { TAlbum } from "@/types";


type AlbumCardProps = {
    className?: string;
    album: TAlbum;
};


const AlbumCard = ({ className, album }: AlbumCardProps) => {
    return (
        <Card className={cn("w-[380px]", className)}>
            <CardHeader>
                <CardTitle>{album.user.name}</CardTitle>
                <CardDescription>{album.title}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            Push Notifications
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Send notifications to device.
                        </p>
                    </div>

                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">
                    Mark all as read
                </Button>
            </CardFooter>
        </Card>
    )
}

export default AlbumCard