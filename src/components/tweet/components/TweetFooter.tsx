import { HeartIcon, ReplyIcon, ReTweetIcon, ShareIcon } from "../../global/icons";

export const TweetFooter = () => {
    return (
        <div className="flex justify-between mt-2 text-cool-gray-500">
            <ReplyIcon />
            <ReTweetIcon />
            <HeartIcon />
            <ShareIcon />
        </div>
    );
};
