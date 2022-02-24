import type { GetStaticProps, NextPage } from "next";

const Explore: NextPage = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <h1>Explore</h1>
        </div>
    );
};

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            headerTitle: "Search",
        },
    };
};

export default Explore;
