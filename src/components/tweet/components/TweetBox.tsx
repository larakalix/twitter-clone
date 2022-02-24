import { Tweet } from "../../global/interfaces";
import { TweetContent, TweetFooter, TweetHeader, TweetThumbnail } from "..";

export const TweetBox = ({
    id,
    name,
    userName,
    avatarUri,
    text,
    date,
}: Tweet) => {
    return (
        <div className="px-4 py-3 border-b">
            <div className="flex">
                <TweetThumbnail {...{ id, avatarUri }} />
                <div className="flex flex-col flex-1 min-w-0">
                    <TweetHeader {...{ name, userName, date }} />
                    <TweetContent {...{ text }} />
                    <TweetFooter />
                </div>
            </div>
        </div>
    );
};
