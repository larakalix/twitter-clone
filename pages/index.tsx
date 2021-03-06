import type { GetStaticProps, NextPage } from "next";
import useSWR from "swr";
import Head from "next/head";
import Image from "next/image";
import { fetcher } from "../src/swr/fetcher";
import { Tweet } from "../src/components/global/interfaces";
import { TweetBox } from "../src/components/tweet";
import { Loading } from "../src/components/global/components";

const Home: NextPage = () => {
    let { data } = useSWR("api/tweets", fetcher);

    if (!data) return <Loading />;

    return (
        <div>
            {data.reverse().map(({ id, ...props }: Tweet, index: number) => (
                <TweetBox key={`tweet-${id}-${index}`} {...{ id, ...props }} />
            ))}
        </div>
    );
};

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            headerTitle: "Latest Tweets",
        },
    };
};

export default Home;
