/* eslint-disable @next/next/no-img-element */
interface Props {
    id: string;
    avatarUri: string;
}

export const TweetThumbnail = ({ id, avatarUri }: Props) => {
    return (
        <img
            src={avatarUri}
            alt={`tweet-${id}-avatar`}
            className="w-10 h-10 mr-3 rounded-full"
        />
    );
};
