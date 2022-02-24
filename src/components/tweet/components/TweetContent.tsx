import { Hashtag } from "./Hashtag";

interface Props {
    text: string;
}

export const TweetContent = ({ text }: Props) => {
    const getHyperLinks = (content: string) => {
        const tags: any = content
            .split(" ")
            .filter(String)
            .map((word: string) => {
                const isHashTag = /(^|\s)([#@][a-z\d-]+)/;
                const isLink = new RegExp(
                    "^(https?:\\/\\/)?" +
                        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
                        "((\\d{1,3}\\.){3}\\d{1,3}))" +
                        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
                        "(\\?[;&a-z\\d%_.~+=-]*)?" +
                        "(\\#[-a-z\\d_]*)?$",
                    "i"
                );

                if (isHashTag.test(word))
                    return <Hashtag key={word} tag={word} />;
                else if (isLink.test(word))
                    return (
                        <a
                            key={word}
                            href={word}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500"
                        >
                            {word}
                        </a>
                    );
                else return `${word} `;
            });

        return tags;
    };

    return (
        <p
            className="text-sm max-w-full"
            // dangerouslySetInnerHTML={{ __html: getHyperLinks(text) }}
        >
            {getHyperLinks(text)}
        </p>
    );
};
