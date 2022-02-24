import { format, parseISO } from "date-fns";

interface Props {
    name: string;
    userName: string;
    date: string;
}

export const TweetHeader = ({ name, userName,date }: Props) => {
    return (
        <p className="flex text-sm">
            <span className="truncate text-gray-500">
                <span className="truncate font-bold text-gray-900">{name}</span>
                <span className="text-gray-500 pl-1">@{userName}</span>
            </span>
            <span className="flex-shrink-0">
                <span className="px-1 text-gray-400">.</span>
                <span className="text-gray-400">
                    {format(parseISO(date), "MMM d")}
                </span>
            </span>
        </p>
    );
};
