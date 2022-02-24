interface Props {
    text: string;
}

export const TweetContent = ({ text }: Props) => {
    return <p className="text-sm">{text}</p>;
};
