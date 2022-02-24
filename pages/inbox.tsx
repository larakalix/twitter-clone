import type { GetStaticProps, NextPage } from "next";

const Inbox: NextPage = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <h1>Inbox</h1>
        </div>
    );
};

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            headerTitle: "Messages",
        },
    };
};

export default Inbox;
